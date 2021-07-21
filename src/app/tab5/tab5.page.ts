import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PluginServiceService } from '../services/plugin-service.service'
import { AlertController } from '@ionic/angular';
import { ImageLoaderService } from 'ionic-image-loader-v5';

import { ReadarsService} from '../services/readars.service';
import { BooksService } from '../services/books.service';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Book } from '../shared/book';


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
  books: Book[] = [];
  recobooks: Book[] = [];
  bookGenreCollection: Book[] = [];
  bookLanguageCollection: Book[] = [];
  bookIds: Book[];
  bookList: Book[];
  errMess: string;
  username: string;
  category: string;

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
    private booksService: BooksService)
     
  {  }

  ngOnInit() {

    this.readarsService.getBooks()
    .subscribe(books => {
      this.books = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.books)
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

  async viewAR(bookID: string) {

    console.log("bookID is ", bookID)


    /*this.booksService.uploadMarkerImage(this.bookId, this.uploadData)
    .subscribe(res => {
      console.log("Uploaded image details ----->",res);
    });*/

    /*this.booksService.getAnchorAndContent(bookID)
    .subscribe(res => {
      console.log("anchor and content data for book id", bookID);
      console.log(res);
      this.pluginService.viewAR(bookID);
    });*/

    
  }

  viewAnchors() {

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
