import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PluginServiceService } from '../services/plugin-service.service'
import { AlertController } from '@ionic/angular';
import { ImageLoaderService } from 'ionic-image-loader-v5';

import { ReadarsService} from '../services/readars.service';
import { BooksService } from '../services/books.service';
import { ARenabledService} from '../services/arenabled.service';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Book } from '../shared/book';
import { ViewaranchorindexPage } from '../viewaranchorindex/viewaranchorindex.page';



@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab5Page implements OnInit {

  total;
  contacts = [];
  images = [];
  bookImages: Array<any>;
  arbooks: Book[] = [];
  recobooks: Book[] = [];
  bookGenreCollection: Book[] = [];
  bookLanguageCollection: Book[] = [];
  bookIds: Book[];
  bookList: Book[];
  errMess: string;
  username: string;
  category: string;

  imgURLs: any;
  plistCopy: any;
  
  mapAnchorContentMap = new Map();
  mapAnchorContentMapArray: any[]= [];
  mapAnchorContentMapArrayValues: any[] = [];
  arrayAnchorContentURLs: any[] = [];
  
  loaded: boolean = false;
  showGenre: boolean;
  showLanguage: boolean;


  public bookIdsImages = new Map();
  public bookIdImageMap = new Map();
  lbookIds: any[];
  public url: SafeResourceUrl;
  
  constructor(private modalCtrl: ModalController, 
    public pluginService: PluginServiceService, 
    public alertController: AlertController,
    public readarsService: ReadarsService,
    private imageLoaderService: ImageLoaderService,
    private booksService: BooksService,
    private arenabledService: ARenabledService)
    
     
  {  }

  ngOnInit() {

    /*this.readarsService.getBooks()
    .subscribe(books => {
      this.books = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.books)
    }, errmess => this.errMess = <any>errmess);*/

    this.arenabledService.getARenabledBooks()
    .subscribe(arbooks => {
      this.arbooks = arbooks;
      this.prepareBookIdsImagesMap();
    }, errmess => this.errMess = <any>errmess);

  }

  prepareBookIdsImagesMap() {

    // get all the  bookIds
    // for every  bookID get the corresponding imageURL
    // store image URL against the bookID in a map
    // when displaying a view, for every book Id(key), get corresponding img url(value) from the map

    this.readarsService.getBookIds().subscribe(bookIds => {
      this.bookIds = bookIds;
      this.storeBookIds(this.bookIds);
      this.lbookIds = this.loadBookIds();
      for (let i=0; i < this.lbookIds.length; i++) {
        this.readarsService.getBookImage(this.lbookIds[i])
        .subscribe(x => {
            this.url = x;
            console.log("this.url", this.url);
            this.bookIdImageMap.set(this.lbookIds[i], this.url);
            console.log("book image map", this.bookIdImageMap);
        }, errMess => console.log(errMess));
      }
    }, errmess => this.errMess = <any>errmess);
  }

  onImageLoad(event) {
    console.log("image ready");
  }

  storeBookIds(bookIds: any[]) {
    console.log('BookIds stored are :', bookIds);
    localStorage.setItem('bookIds', JSON.stringify(bookIds));
  }

  loadBookIds() {
    this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
    console.log('bookIds ', this.bookIds);
    if (this.bookIds) {
      return this.bookIds;
    }
    return;
  }

  async viewAR(bookId: string, bookName: string) {


   /*
      1. arViewController.bookAnchorContentNames = send bookAnchorContentNames
         bookAnchorContetNames should be in the format 
         a0 => a0c1, a0c2, aoc3
         a1 => a1c1, a1c2, a1c3

      2. arViewController.bookDirectoryPath = send bookDirectoryPath
      3. arViewController.currentBookName = send current bookname
   */

    this.getbookARdata(bookId, bookName);
    
    
    
  }

  getbookARdata(bookId: string, bookName: string) {

    let bookAnchorContentURLsMap = new Map();
    this.booksService.getBookARContent(bookId)
      .subscribe( x => {
         this.imgURLs = x;    
         this.booksService.getBookPlistXml(bookId)
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
              console.log("keyvalues", keyvalues);

              for (let i=0; i< keyvalues.length && i < this.imgURLs.length; i++) {
                    bookAnchorContentURLsMap.set(keyvalues[i], this.imgURLs[i]);
              }
             
              for (let entry of Array.from(bookAnchorContentURLsMap.entries())) {
  
                if (entry[0].indexOf("content") === -1) {
                  mainKeys.push(entry[0])
                }
              }
              //console.log("Main Keys", mainKeys);
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
               // console.log("new content map", newContentMap);
               // console.log("new anchor map", newAnchorMap);
                this.mapAnchorContentMap.set(mainKeys[i], [newAnchorMap, newContentMap]);
              }
              
           // console.log("mapAnchorContentMap", this.mapAnchorContentMap)
            this.mapAnchorContentMapArray = Array.from(this.mapAnchorContentMap.entries());
           // console.log("mapAnchorContentMapArray", this.mapAnchorContentMapArray)
  
            for (let mapAnchorContentEntry of this.mapAnchorContentMapArray) {
              //console.log("mapanchor content entry", mapAnchorContentEntry[0])
             // console.log(mapAnchorContentEntry[1][1].values());
              this.mapAnchorContentMapArrayValues.push(Array.from(mapAnchorContentEntry[1][1].entries()));
            }
           // console.log("mapAnchorContentMapArrayValues", this.mapAnchorContentMapArrayValues);

           
            console.log("bookAnchorContentURLsMap", bookAnchorContentURLsMap);
           
            let anchorContentURLsMap = new Map();

            for (let i=0; i < mainKeys.length;i++) {
              let arrayContentURLs: any[] = [];
              let anchorURL: string;

              for (let entry of Array.from(bookAnchorContentURLsMap.entries())) {
                if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i]) 
                && entry[0].includes('content') && entry[1].includes(bookId)) {
                      
                  arrayContentURLs.push(entry[1]);
                  
                } 
                if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i]) 
                && entry[0].indexOf('content') === -1) && entry[1].includes(bookId)) {
                  anchorURL = entry[1];  
                } 
              }
              anchorContentURLsMap.set(anchorURL, arrayContentURLs);
              
            }

            console.log("bookID is ", bookId);
            console.log("book name is ", bookName);
            console.log("Final anchorContentURLsMap", anchorContentURLsMap);
            
            
            //calling the plugin service method
            this.pluginService.viewAR(bookId, bookName, anchorContentURLsMap)
            
            }
            else {
                console.log("plist is empty");
                return ;
            }
       }), errMess => console.log(errMess);
      }, errmess => this.errMess = <any>errmess);
  }

  async viewAnchors(bookId: string, bookName: string) {

    console.log("inside tab5 ID and Name", bookId, bookName)
    const viewAnchorsModal = await this.modalCtrl.create({
      component: ViewaranchorindexPage,
      componentProps: {
        bookid: bookId,
        bookname: bookName
      }
    });

    return viewAnchorsModal.present();
  }


close() {
  this.modalCtrl.dismiss();
}


  add() {
     this.pluginService.add(5,3).then((data) => {
      this.total = data;
      this.presentAlert('The sum is ' + data);
    }).catch((error) => console.error('add' + error));
  }

  async loadContacts() {
  
    this.contacts = await this.pluginService.getContacts();
    console.log("my contacts", this.contacts);
  }
    
  async presentAlert(alertMsg: string) {
    const alert = await this.alertController.create({
      subHeader: 'Alert',
      message: alertMsg,
      buttons: ['OK']
    });

    await alert.present();
  }

  
  
  

}
