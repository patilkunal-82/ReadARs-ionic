import { Component, OnInit, SystemJsNgModuleLoader, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BooksService } from '../services/books.service';
import { Book } from '../shared/book';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import { File, FileEntry} from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions} from '@ionic-native/file-transfer/ngx'
import { baseURL} from '../shared/baseurl';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { MultiFileUploadComponent} from '../components/multi-file-upload/multi-file-upload.component'

import { xml } from 'xml-serializer-ts';
import { stringify } from '@angular/core/src/util';
//import { XMLElement, XMLAttribute, XMLChild, xml} from 'xml-decorators'


type Anchor = {
  anchorName: string;
}
type AnchorContent = {
  contentName: string[];
};


@Component({
  selector: 'app-arbook',
  templateUrl: './arbook.page.html',
  styleUrls: ['./arbook.page.scss'],
})
export class ArbookPage implements OnInit {

  

  bookId; // from tab3 as part of component props
  bookName; //from tab3 as part of component props
 
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;


  bookCopy: Book;
  errMess: string;
  public selectedFile;
  public uploadData = new FormData();
  public dataReader = new FileReader();
  public event1;
  imgURL: any;
  url: any;
  receivedImageData: any;
  capturedImage: any;
  capturedImages: any[];
  base64Data: any;
  markerImages: any;
  markerImagesLength: number;
  uploadStatus: string = "";
  counter: number;
  public urls: SafeResourceUrl[];
  files: File[] = [];
  anchorFiles: File[] = [];
  anchorContentFiles: File[] = [];
  //anchorContentPlist: { [index: string]: [string] } = {};
  text: string;
  //decoder = new TextDecoder();
  updateFlag: boolean = false;
  plistCopy: any;
  
  

  constructor(private _modalController: ModalController,
              private booksService: BooksService,
              private _camera: Camera,
              private file: File,
              private _alertController: AlertController,
              private imagePicker: ImagePicker,
              public transfer: FileTransfer) { }

  ngOnInit() {

    this.booksService.getBook(this.bookId)
      .subscribe(book => {
          this.bookCopy = book;
          console.log("Book Copy in AR Book", this.bookCopy);
      }, errmess => this.errMess = <any>errmess);

  }

  upload() {

    /*
    1. read existing Booknameplist.xml from s3 bucket - done
    2. if empty, create new one with the user selected set of anchor and content names populated - done
    3. if !empty, 

      3a.1 First check, against which anchor is user trying to add the content. - 
      3a.2 Determine the anchorname from the xml file and append user selected content to it - done
      3a.3 Update XML file and upload it on s3 - done

      3b.1 If user is creating a new anchor, determine the anchorname from the xml file, and add new anchor next to it
      3b.2 Add corresponding content against it 
      3b.3 Update XML file and upload it on s3

      HTML component for 3a.1 - 
      Present list of existing anchors & content as thumbnails 
      Ask user if he/she wishes to use an existing anchor. If yes, user selects the corresponding thmbnail and uses 
      selector/uploaded dialogue to add the content. 
    
  */
  this.booksService.getBookPlistXml(this.bookId)
  .subscribe(plist => {
      console.log("link to book plist found");
      console.log("plist", plist);
      if (plist) {
       this.plistCopy = plist;
       this.updateFlag = true;
       this.prepareAnchorAndContentsDataAndUpload(this.updateFlag);
      }
      else {
        this.updateFlag = false;
        console.log("plist is empty");
        this.prepareAnchorAndContentsDataAndUpload(this.updateFlag);
      }
     }), errMess => console.log(errMess);



  }

  prepareAnchorAndContentsDataAndUpload(flag: boolean) {

    let anchor = this.fileField.getAnchorFiles();
    let contents = this.fileField.getAnchorContentFiles();

    // update existing xml plist
    if (flag) {

      var domParser = new DOMParser();
      var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
      console.log("xmlDocument from s3", xmlDocument);

      let keyElLength = xmlDocument.getElementsByTagName('key').length;
      console.log("keyElLength", keyElLength);
      let prevAnchorName =  xmlDocument.getElementsByTagName('key')[keyElLength-1].childNodes[0].nodeValue;
      console.log("prev anchor name", prevAnchorName);
      let prevAnchorIndex = prevAnchorName.slice(6);
      console.log("prev anchor index", prevAnchorIndex);
      let newAnchorIndex = parseInt(prevAnchorIndex) + 1;
      
      let anchorName = 'anchor' + newAnchorIndex;
      let plistMap = new Map<string, string[]>();
      plistMap.set(anchorName, []);   
      for (let j=0; j < contents.length;j++) {
        let contentName = anchorName + 'content' + (j+1);
        plistMap.get(anchorName).push(contentName)
      }
      console.log("plistMap", plistMap);

      // append anchor file
      this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
      // append cotent files
      for (let i=0; i< contents.length; i++) {
        let contentName = anchorName + 'content' + (i+1);
        this.uploadData.append('imageFile', contents[i].rawFile,contentName);
      }
  
      let root = xmlDocument.getElementsByTagName('plist')[0];
      console.log("root ", root);

      for (let entry of Array.from(plistMap.entries())) {

          console.log("Entries", entry);
          let keyEl = xmlDocument.createElement('key');
          keyEl.textContent = entry[0];
          root.appendChild(keyEl);
        
          let keyElvalues = entry[1];
          for (let j=0; j < keyElvalues.length; j++) {
            let valEl = xmlDocument.createElement('value')
            valEl.textContent = keyElvalues[j];
            keyEl.appendChild(valEl)
          }
      }

      let serializer = new XMLSerializer();
      let xmlSerializedDoc = serializer.serializeToString(xmlDocument);
      console.log("xml serailizd doc", xmlSerializedDoc);

      var blob = new Blob([xmlSerializedDoc], {type: "text/xml"})
      this.uploadData.append('xmlFile', blob, this.bookId+'plist');
     
    }
    else {
       
        let anchorName = 'anchor0';
        let plistMap = new Map<string, string[]>();
        plistMap.set(anchorName, []);   
        for (let j=0; j < contents.length;j++) {
          let contentName = anchorName + 'content' + (j+1);
          plistMap.get(anchorName).push(contentName)
        }
        console.log("plistMap", plistMap);
        
        // append anchor file as anchor0
        this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
        // append cotent files as anchor0content0, anchor0,content1
        for (let i=0; i < contents.length; i++) {
          let contentName = anchorName + 'content' + (i+1);
          this.uploadData.append('imageFile', contents[i].rawFile, contentName);
        }
    
        // construct new xml plist file 
        let doc = document.implementation.createDocument('','',null);
        let root = doc.createElement('plist');
        doc.appendChild(root);

        for (let entry of Array.from(plistMap.entries())) {

          console.log("Entries", entry);
            let keyEl = doc.createElement('key');
            keyEl.textContent = entry[0];
            root.appendChild(keyEl);
          
            let keyElvalues = entry[1];
            for (let j=0; j < keyElvalues.length; j++) {
              let valEl = doc.createElement('value')
              valEl.textContent = keyElvalues[j];
              keyEl.appendChild(valEl)
            }
        }

        let serializer = new XMLSerializer();
        let xmlSerializedDoc = serializer.serializeToString(doc)
        console.log("xml serailizd doc", xmlSerializedDoc);

        var blob = new Blob([xmlSerializedDoc], {type: "text/xml"})
        this.uploadData.append('xmlFile', blob, this.bookId+'plist');
    }
    
    
    // upload
    this.booksService.uploadAnchorContentAndPlist(this.bookId, this.uploadData, this.updateFlag)
    .subscribe(res => {
      console.log(res);
    });
  }

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

  
  /*async selectImageSource() {

    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.FILE_URI,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 45,
      targetWidth: 80,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.FILE_URI,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 45,
      targetWidth: 80,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
    };

    this.markerImages = [];
    this.capturedImages = [];
    this.markerImagesLength = 0;

    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for your image",
      buttons: [
        {
          text: "Camera",
          handler: ()=> {


            this._camera.getPicture(cameraOptions).then((result) => {
              
             
              this.markerImages.push('file://'+ result);
              console.log("Marker images length", this.markerImages.length);
              this.markerImagesLength = this.markerImages.length;
    
             }, (err) => {
               
               console.log(err);
            });
            
           
          
        }
      },
      {
          text: "Gallery",
          handler: ()=> {
           
           

         this.imagePicker.getPictures(galleryOptions).then((results) => {
          for (var i = 0; i < results.length; i++) {
            console.log("RESULTS", results[i]);
            this.markerImages.push('file://'+ results[i]);
          }
          console.log("Marker images length", this.markerImages.length);
          this.markerImagesLength = this.markerImages.length;
          
        

         }, (err) => {
           // Handle error
           console.log(err);
        });

        

      }
    }
  ]
 });

    await alert.present();

}*/

/*readFile(file: any) {

  const reader = new FileReader();
  console.log("file type", file.type);
  console.log("file type", file.name);
  reader.onloadend = () => {
    this.uploadData = new FormData();
    if (reader.result) {
      const imgBlob = new Blob([reader.result], {type: file.type});
      this.uploadData.append('arMarkerImageFile', imgBlob, file.name);

      this.booksService.uploadMarkerImage(this.bookId, this.uploadData)
      .subscribe(res => {
        console.log("Uploaded image details ----->",res);
      });
   
    }
  };
  reader.readAsArrayBuffer(file);
}*/

 /*createMarkers() {

  for (var i = 0; i < this.markerImages.length; i++) {
    console.log("Selected image is ", this.markerImages[i]);
  }
  console.log("inside createMarkers");
  let counter = 0;
  var ref = this;
  function InnerFunc() {
   
    console.log("Beginning Counter", counter);
    console.log("inside InnerFunc");
    console.log("file system url", ref.markerImages[counter]);

    ref.file.resolveLocalFilesystemUrl(ref.markerImages[counter])
    .then(entry => {
       console.log("inside resolve local file system url");
       
       (<FileEntry>entry).file(file => ref.readFile(file));

       counter++;
       console.log("Inside Counter is", counter);
       if (counter < ref.markerImages.length) {
        InnerFunc();
      }
      else {
        alert("successfully uploaded all images");
      }  
     })
    .catch(err => {
       console.log("error reading file")
    })
    
  }
  console.log("innerFunc getting called");
  InnerFunc();

  
}*/



}
