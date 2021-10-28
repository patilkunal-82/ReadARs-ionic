import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BooksService } from '../services/books.service'
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-viewaranchorindex',
  templateUrl: './viewaranchorindex.page.html',
  styleUrls: ['./viewaranchorindex.page.scss'],
})
export class ViewaranchorindexPage implements OnInit {

  bookid; // from tab5 as part of component props
  bookname; //from tab5 as part of component props
  plistCopy: any;
  pageNrs: any[] = [];
  imgURLs: any[];
  errMess: string;

  mapAnchorContentMap = new Map();
  
  mapAnchorContentMapArray: any[]= [];
  mapAnchorContentMapArrayValues: any[] = [];
  anchorPageNrMap = new Map();
  anchorPageNrArray: any[] = [];

  constructor(private _modalController: ModalController,
              private booksService: BooksService,
              private imageLoaderService: ImageLoaderService,
              private loadingController: LoadingController) { }

  ngOnInit() {

      
      console.log("Book ID", this.bookid);
      console.log("Book Name", this.bookname);
      this.readPlistForIndex();

  }
  onImageLoad(event) {
    console.log("image ready");
  }

  clearCache() {
    this.imageLoaderService.clearCache();
  
   // refresher.complete();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...please wait',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  readPlistForIndex() {

    this.presentLoading()
    this.booksService.getBookARContent(this.bookid)
    .subscribe( x => {
       this.imgURLs = x;    
       
       this.booksService.getBookPlistXml(this.bookid)
       .subscribe(plist => {
          
          if (plist) {
            this.plistCopy = plist;
          
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
            let pageNrElLength = xmlDocument.getElementsByTagName('anchorPageNr').length

            for (let i=0; i < keyElLength; i++) {
              keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
            }
            for (let i=0; i < valElLength; i++) {
              values[i] = xmlDocument.getElementsByTagName('value')[i].childNodes[0].nodeValue;
            }
            for (let i=0; i < pageNrElLength; i++) {
              this.pageNrs[i] = xmlDocument.getElementsByTagName('anchorPageNr')[i].childNodes[0].nodeValue;
            }

            console.log("Anchors keys", keys)
            console.log("PageNrs", this.pageNrs)
            console.log("Values", values)

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
              this.anchorPageNrMap.set(newAnchorMap.get(mainKeys[i]), this.pageNrs[i]);
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

          // let mapAnchorContentEntry of mapAnchorContentMapArray
          // "(mapAnchorContentEntry[1][0].get(mapAnchorContentEntry[0]))"


        

          this.anchorPageNrArray = Array.from(this.anchorPageNrMap.entries())

          
          }
         
          else {
              console.log("plist is empty");
              return;
          }
     }), errMess => console.log(errMess);

    }, errmess => this.errMess = <any>errmess);
    
  }

  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
