import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-arbook',
  templateUrl: './arbook.page.html',
  styleUrls: ['./arbook.page.scss'],
})
export class ArbookPage implements OnInit {

  bookId; // from tab3 as part of component props
  bookCopy: Book;
  errMess: string;
  public selectedFile;
  public uploadData;
  public dataReader = new FileReader();
  public event1;
  imgURL: any;
  receivedImageData: any;
  capturedImage: any;
  capturedImages: any[];
  base64Data: any;
  markerImages: any;
  markerImagesLength: number;
  uploadStatus: string = "";
  counter: number;
  public urls: SafeResourceUrl[];

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

      

      this.booksService.getMarkerImages(this.bookId)
      .subscribe(images => {
        //console.log("X is", images)
        this.urls = images;
        
    }, errMess => {
      console.log("inside err mess");
    });

  }


  async selectImageSource() {

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
              
              //console.log("RESULTS", results);
              this.markerImages.push('file://'+ result);
              console.log("Marker images length", this.markerImages.length);
              this.markerImagesLength = this.markerImages.length;
    
             }, (err) => {
               
               console.log(err);
            });
            
           
            /*this._camera.getPicture(cameraOptions)
            .then(imageURI => {
          
              // display captured image
              console.log(imageURI);
              let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
              let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
              console.log("image name", imageName);
              console.log("image path", imagePath);
              console.log("before read as data url");
              this.file.readAsDataURL(imagePath, imageName).then(res => {
                
                console.log("RES", res);
                this.capturedImage = res

              });
              console.log("after read as data url");
             // this.markerImages.push('data:image/jpeg;base64,' + this.capturedImage);
              
              // resolve URI, get blob & file and POST
              this.file.resolveLocalFilesystemUrl(imageURI)
              .then(entry => {
                  console.log("inside resolve local file system url");
                  (<FileEntry>entry).file(file => this.readFile(file))
               })
              .catch(err => {
                console.log("error reading file")
              })
            }, (err) => {
              // Handle error
               console.log(err);
         });*/
            
        }
      },
      {
          text: "Gallery",
          handler: ()=> {
           
            /*this._camera.getPicture(galleryOptions)
            .then(imageURI => {
              
              // display captured image
              let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
              let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
              this.file.readAsDataURL(imagePath, imageName).then(res => this.capturedImage = res);
            //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());

              // resolve URI, get blob & file and POST
              this.file.resolveLocalFilesystemUrl(imageURI)
              .then(entry => {
                  console.log("inside resolve local file system url");
                  (<FileEntry>entry).file(file => this.readFile(file))
               })
              .catch(err => {
                console.log("error reading file")
              })
            }, (err) => {
              // Handle error
               console.log(err);
         });*/

         this.imagePicker.getPictures(galleryOptions).then((results) => {
          for (var i = 0; i < results.length; i++) {
            console.log("RESULTS", results[i]);
            this.markerImages.push('file://'+ results[i]);
          }
          console.log("Marker images length", this.markerImages.length);
          this.markerImagesLength = this.markerImages.length;
          
          

          /*for (var i=0; i < this.markerImages.length; i++) { 
          console.log("inside for loop")
          let imageName = this.markerImages[i].substring(this.markerImages[i].lastIndexOf('/')+1);
          console.log("Image Name", imageName);
          let imagePath =  this.markerImages[i].substring(0,this.markerImages[i].lastIndexOf('/')+1);
          console.log("Image Path", imagePath);
          this.file.readAsDataURL(imagePath, imageName).then(res => {
            //console.log("RES", res);
            this.capturedImages[i] = res;
            console.log("captured image", this.capturedImages[i]);
          });

         }*/

         }, (err) => {
           // Handle error
           console.log(err);
        });

        

      }
    }
  ]
 });

    await alert.present();

}



readFile(file: any) {

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
}

createMarkers() {

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

  
}

closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
