import { Component, OnInit, SystemJsNgModuleLoader, ViewChild, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
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
import { MultiFileContentUploadComponent} from '../components/multi-file-content-upload/multi-file-content-upload.component'
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-arbook',
  templateUrl: './arbook.page.html',
  styleUrls: ['./arbook.page.scss'],
})
export class ArbookPage implements OnInit {

  sliderConfig = {
    slidesPerView: 4,
    coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    autoplay: true
    //slideShadows: true,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

         let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

         let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

         // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

         const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

         $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }

       // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }
  }

  bookId; // from tab3 as part of component props
  bookName; //from tab3 as part of component props
 
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;
  @ViewChild(MultiFileContentUploadComponent) fileContentField: MultiFileContentUploadComponent;


  bookCopy: Book;
  errMess: string;
  public selectedFile;
  public uploadData = new FormData();
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
  url: SafeResourceUrl[];
  files: File[] = [];
  anchorFiles: File[] = [];
  anchorContentFiles: File[] = [];
  //anchorContentPlist: { [index: string]: [string] } = {};
  text: string;
  //decoder = new TextDecoder();
  updateFlag: boolean = false;
  showComonentFlag: boolean = false;
  showContentAddComponentFlag: boolean = false;
  pageRefreshFlag: boolean = false;
  plistCopy: any;
  imgURLs: any[];
  imgAnchorURLsMap = new Map();
  imgContentURLsMap = new Map();
  imgAnchorContentURLsMap = new Map();
  
  
  public bookAnchorContentURLsArray: any[] = [];
  anchorURL: string = "";  // anchor0 url
  contentMap: Map<string, string> = new Map(); // anchor0content1, anchor0content1 url
  mapAnchorContentMap = new Map();
  mapAnchorContentMapArray: any[]= [];
  mapAnchorContentMapArrayValues: any[] = [];
  addtlContents: any[] = [];
  
  selectedAnchorName: string = "";
  //nextContentValue: string = '';

  

  constructor(private _modalController: ModalController,
              private booksService: BooksService,
              private _camera: Camera,
              private file: File,
              private _alertController: AlertController,
              private imagePicker: ImagePicker,
              public transfer: FileTransfer,
              private imageLoaderService: ImageLoaderService,
              public toastController: ToastController,
              public loadingController: LoadingController) { }

  ngOnInit() {

    this.presentLoading();
    this.booksService.getBook(this.bookId)
      .subscribe(book => {
          this.bookCopy = book;
          console.log("Book Copy in AR Book", this.bookCopy);
      }, errmess => this.errMess = <any>errmess);

    this.displayAnchorContentData();
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...please wait',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  displayAnchorContentData() {

    this.booksService.getBookARContent(this.bookId)
    .subscribe( x => {
       this.imgURLs = x;    
       this.booksService.getBookPlistXml(this.bookId)
       .subscribe(plist => {
          
          if (plist && this.imgURLs) {
            this.plistCopy = plist;
            console.log("imgURLs", this.imgURLs);
            console.log("plist copy", this.plistCopy);

            /*
            start reading the plist copy. get the values of all the key elements
            follow the order of the files and assign urls to keys in that orders
            */
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
            console.log("xmlDocument from s3", xmlDocument);
            
            let keys: any[] = [];
            let values: any[] = [];
            let keyvalues: any = [];
            let mainKeys: any[] = [];
            let mapArray: any[] = [new Map()];
            let keyElLength = xmlDocument.getElementsByTagName('key').length;
            let valElLength = xmlDocument.getElementsByTagName('value').length;

            for (let i=0; i < keyElLength; i++) {
              keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
            }
            for (let i=0; i < valElLength; i++) {
              values[i] = xmlDocument.getElementsByTagName('value')[i].childNodes[0].nodeValue;
            }

            for (let i=0; i< keyElLength; i++) {

              keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
              keyvalues.push(keys[i]);
              for (let j=0; j < valElLength; j++) {
                if (values[j].includes(keys[i])) {
                  keyvalues.push(values[j]);
                }
              }
          
            }
            let bookAnchorContentURLsMap = new Map();
            for (let i=0; i< keyvalues.length && i < this.imgURLs.length; i++) {
              bookAnchorContentURLsMap.set(keyvalues[i], this.imgURLs[i]);
            }
           
            for (let entry of Array.from(bookAnchorContentURLsMap.entries())) {

              if (entry[0].indexOf("content") === -1) {
                mainKeys.push(entry[0])
              }
            }
            console.log("Main Keys", mainKeys);
            for (let i=0; i<mainKeys.length;i++) {  
              var entry1; 
              let newContentMap = new Map();
              let newAnchorMap = new Map();
              for (let entry of Array.from(bookAnchorContentURLsMap.entries())) {
                  if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i]) 
                  && entry[0].includes('content')) {
                        newContentMap.set(entry[0], entry[1]);  
                  } 
                  if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i]) 
                  && entry[0].indexOf('content') === -1) ) {
                        newAnchorMap.set(entry[0], entry[1])
                  }
              }
              console.log("new content map", newContentMap);
              console.log("new anchor map", newAnchorMap);
              this.mapAnchorContentMap.set(mainKeys[i], [newAnchorMap, newContentMap]);
            }
            
          console.log("mapAnchorContentMap", this.mapAnchorContentMap)
          this.mapAnchorContentMapArray = Array.from(this.mapAnchorContentMap.entries());
          console.log("mapAnchorContentMapArray", this.mapAnchorContentMapArray)

          for (let mapAnchorContentEntry of this.mapAnchorContentMapArray) {
            console.log("mapanchor content entry", mapAnchorContentEntry[0])
            console.log(mapAnchorContentEntry[1][1].values());
            this.mapAnchorContentMapArrayValues.push(Array.from(mapAnchorContentEntry[1][1].entries()));
          }
          console.log("mapAnchorContentMapArrayValues", this.mapAnchorContentMapArrayValues);
          }
          else {
              console.log("plist is empty");
              return;
          }
     }), errMess => console.log(errMess);


    }, errmess => this.errMess = <any>errmess);
    
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  onImageLoad(event) {
    console.log("image ready");
  }
 
  anchorContentComponent() {
    console.log("inside anchor and Content Component")
    this.showComonentFlag = true
  }

  addContentToCurrentAnchor(anchorName, anchorURL) {

    console.log("AnchorName", anchorName);
    console.log("AnchorURL", anchorURL);

    this.selectedAnchorName = anchorName;
    
    /*
          1. select the anchor and get the corresponding anchorName, anchorURL - done
          2. using the bookId get the Book plist - done
          3. check if this plist contains selected anchorName - done
          4. If yes, 
              find out the last anchorNameContentX belonging to this entry in the plist - done
              present option to the user to add new content - done
              add that contnet in the xml as anchorNamecontentX+1 to corresponding anchorName - done
              upload updated xml and anchorNamecontentX+1 to s3 - done
            
    */
    
    
    this.booksService.getBookPlistXml(this.bookId)
    .subscribe(plist => {
        this.plistCopy = plist;
        console.log("plist copy", this.plistCopy );
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
        console.log("xmlDocument from s3", xmlDocument);

        let keyElLength = xmlDocument.getElementsByTagName('key').length;
        console.log("keyElLength", keyElLength);
        let valElLength = xmlDocument.getElementsByTagName('value').length;
        console.log("valElLength", valElLength);
        
        for (let i=0; i<keyElLength;i++) {
          let anchorKey = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
         
          if (anchorKey === anchorName) {
            this.showContentAddComponentFlag = true;
            this.showComonentFlag = false;
          }
        }
      }), errMess => console.log(errMess);
    
  }

  uploadContent() {

    console.log("this.selected anchor name", this.selectedAnchorName);
    
    this.addtlContents = this.fileContentField.getContentFiles();
    console.log("Additional Contents", this.addtlContents);

    
   this.booksService.getBookPlistXml(this.bookId)
    .subscribe(plist => {
        this.plistCopy = plist;
        console.log("plist copy", this.plistCopy );

        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
        console.log("xmlDocument from s3", xmlDocument);

        let keyElLength = xmlDocument.getElementsByTagName('key').length;
        console.log("keyElLength", keyElLength);
        let valElLength = xmlDocument.getElementsByTagName('value').length;
        console.log("valElLength", valElLength);
        let existingContentValues = [];
        for (let i=0; i<keyElLength;i++) {
          let anchorKey = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
         
          if (anchorKey === this.selectedAnchorName) {
         
            for (let j=0;j<valElLength;j++) {
              let value = xmlDocument.getElementsByTagName('value')[j].childNodes[0].nodeValue;
              if (value.includes(this.selectedAnchorName)) {
                existingContentValues.push(value);
              }
            } 
          }
        }

        let plistMap = new Map<string, string[]>();
        plistMap.set(this.selectedAnchorName, []);  
        console.log("selected anchor name", this.selectedAnchorName);
        for (let j=0; j < this.addtlContents.length;j++) {

          console.log("additional CONTENT", this.addtlContents[j])
          console.log("additional CONTENT type", this.addtlContents[j].type)
  
          let index = this.addtlContents[j].rawFile.type.indexOf("/");
          let contenttype = this.addtlContents[j].rawFile.type.substring(0,index);
          let nextContentName = this.selectedAnchorName+'content'+(existingContentValues.length+j+1)+contenttype;
          plistMap.get(this.selectedAnchorName).push(nextContentName);


        }
        console.log("plistMap", plistMap);

        //append content files
        for (let i=0; i< this.addtlContents.length; i++) {
          let index = this.addtlContents[i].rawFile.type.indexOf("/");
          let contenttype = this.addtlContents[i].rawFile.type.substring(0,index);
          let nextContentName = this.selectedAnchorName+'content'+((existingContentValues.length+i+1))+contenttype;
          this.uploadData.append('imageFile', this.addtlContents[i].rawFile,nextContentName);
         
        }

        // append entries to right key element in the xml document
        let root = xmlDocument.getElementsByTagName('plist')[0];
        console.log("root ", root);

        let keys = xmlDocument.getElementsByTagName('key');
        console.log("keys", keys)

        for (let i=0; i<keys.length; i++) {

          let nodevalue = keys[i].childNodes[0].nodeValue
          console.log("nodevalue", nodevalue);

          for (let entry of Array.from(plistMap.entries())) {
              if (entry[0] === nodevalue) {
                console.log("SUCCESS", entry[0], nodevalue);
                console.log("keys[i]", keys[i]);
                for (let j=0;j<entry[1].length;j++) {
                  let valEL = xmlDocument.createElement('value');
                  valEL.textContent = entry[1][j];
                  keys[i].appendChild(valEL);
                }
              }
          }
        }

        // serialize 
        console.log("XML document before serializing", xmlDocument);
        let serializer = new XMLSerializer();
        let xmlSerializedDoc = serializer.serializeToString(xmlDocument);
        console.log("xml serailizd doc", xmlSerializedDoc);

        // append xml blob
        var blob = new Blob([xmlSerializedDoc], {type: "text/xml"})
        this.uploadData.append('xmlFile', blob, this.bookId+'plist');

      // update book ar flag & then upload the data
        this.updateFlag = true;
        this.bookCopy.bookarenabled = true;
        this.booksService.updateBookARFlag(this.bookId, this.bookCopy)
        .subscribe(res => {
            console.log(res); 
          // upload data
          this.booksService.uploadAnchorContentAndPlist(this.bookId, this.uploadData, this.updateFlag, this.bookCopy)
          .subscribe(res => {
            console.log(res);
           
            this.presentToast("Content Data Augmented Successfully!");
            this._modalController.dismiss()
            //this.closeModal();
            
          });    
        });
        
      
      }), errMess => console.log(errMess);
    
  
  }

  

  upload() {

    /*
    1. check if there is plist xml existing for bookId. - DONE
    2. If no, - DONE
          create plist xml with new anchor, anchor's page nr and content 
          upload content, xml to s3 bucket.
    3. If yes, - DONE
        Display the list of anchors and correspoding contents as thumbnails so that user knows which are anchors
        and which are content
        Ask user if s/he wants to add new content to an existing anchor OR to new anchor 
        
      3.1 - DONE
        if (to an existing anchor) {
          select the anchor
          retrive the anchor URL, get the bookId 
          extract the anchorName from the url
          using the bookId get the Book plist and see if anchorName exists in the plist xml
          when the plist xml has the anchorname {
            find out the last anchorNamecontentX in the list
            present option to the user to add new content
            add that contnet in the xml as anchorNamecontentX+1
            upload updated xml and anchorNamecontentX+1 to s3
          }
        }
      3.2 - DONE
        if (to new anchor) {
          add new anchor and new content, append it to plist xml 
          upload anchor, content, xml to s3 
        }

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
    console.log("Anchor from filefield", anchor);
    let contents = this.fileField.getAnchorContentFiles();
    console.log("CONTENTS, CONTENT", contents)
    let arPageValue = this.fileField.addAnchorPageNrGroup.value
    let anchorPageNr = arPageValue['anchorpagenr'];
    
    console.log("Page Number", anchorPageNr)
    // update existing xml plist with page number of the new anchor, anchor and content data
    
    if (flag) {

      var domParser = new DOMParser();
      var xmlDocument = domParser.parseFromString(this.plistCopy.toString(), 'text/xml');
      console.log("xmlDocument from s3", xmlDocument);

      let keyElLength = xmlDocument.getElementsByTagName('key').length;
      console.log("keyElLength", keyElLength);
      //let prevAnchorName =  xmlDocument.getElementsByTagName('key')[keyElLength-1].childNodes[0].nodeValue;
     
      
      let anchorName = 'anchor' + keyElLength;
      let plistMap = new Map<string, string[]>();
      plistMap.set(anchorName, []);   
      for (let j=0; j < contents.length;j++) {

       
        let index = contents[j].type.indexOf('/');
        let contenttype = contents[j].type.substring(0,index);
        let contentName = anchorName + 'content' + (j+1) + contenttype;
        plistMap.get(anchorName).push(contentName)
      }
      console.log("plistMap", plistMap);
      console.log("Anchor raw file", anchor[0].rawFile )
      // append anchor file
      this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
      // append cotent files
      for (let i=0; i< contents.length; i++) {
        let index = contents[i].type.indexOf('/');
        let contenttype = contents[i].type.substring(0,index);
        /*let index = contents[i].rawFile.type.indexOf("/");
        let contenttype = this.addtlContents[j].rawFile.type.substring(0,index);*/
        let contentName = anchorName + 'content' + (i+1)+ contenttype;
        this.uploadData.append('imageFile', contents[i].rawFile,contentName);
        
      }
  
      let root = xmlDocument.getElementsByTagName('plist')[0];
      console.log("root ", root);

      for (let entry of Array.from(plistMap.entries())) {

          console.log("Entries", entry);
          let keyEl = xmlDocument.createElement('key');
          keyEl.textContent = entry[0];
          root.appendChild(keyEl);

          let pageNr = xmlDocument.createElement('anchorPageNr');
          pageNr.textContent = anchorPageNr
          keyEl.appendChild(pageNr);
        
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
          let index = contents[j].type.indexOf('/');
          let contenttype = contents[j].type.substring(0,index);
          let contentName = anchorName + 'content' + (j+1) + contenttype;
          plistMap.get(anchorName).push(contentName)
        }
        console.log("plistMap", plistMap);
        
        // append anchor file as anchor0
        this.uploadData.append('imageFile', anchor[0].rawFile, anchorName);
        // append cotent files as anchor0content0, anchor0,content1
        for (let i=0; i < contents.length; i++) {
          let index = contents[i].type.indexOf('/');
          let contenttype = contents[i].type.substring(0,index);
          let contentName = anchorName + 'content' + (i+1) + contenttype;
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

            let pageNr = doc.createElement('anchorPageNr');
            pageNr.textContent = anchorPageNr
            keyEl.appendChild(pageNr);
          
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
    
    
    // update book ar flag & then upload the data
    this.bookCopy.bookarenabled = true;
    this.booksService.updateBookARFlag(this.bookId, this.bookCopy)
    .subscribe(res => {
        console.log(res); 
      // upload data
      this.booksService.uploadAnchorContentAndPlist(this.bookId, this.uploadData, this.updateFlag, this.bookCopy)
      .subscribe(res => {
        console.log(res);
        this.presentToast("Anchor and Content Data Uploaded Successfully !");
        this._modalController.dismiss()
        //this.closeModal();
        
      });
        
    });

   
  }

  closeModal() {
    console.log("inside close modal");
    this.showComonentFlag = false;
    this.showContentAddComponentFlag = false;
    //this._modalController.dismiss();
  }

  refreshBookList(event) {
    setTimeout(() => {

      this.clearCache();
      event.target.complete();

    }, 3000);
  }

  clearCache() {
    this.imageLoaderService.clearCache();
  
   // refresher.complete();
  }


  close() {

    if (this.showComonentFlag || this.showContentAddComponentFlag) {
      this.closeModal();
    }
    else {
      this._modalController.dismiss();
      
    }
    
  }

  
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




