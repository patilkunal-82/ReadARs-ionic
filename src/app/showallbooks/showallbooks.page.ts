
import { Component, OnInit, Inject, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book, BookGenre, BookLanguage, CollectionCategory } from '../shared/book';
import { Favorite } from '../shared/favorite';
import { FavoriteService} from '../services/favorite.service';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { SearchedData } from '../services/searchbooks.service';
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { MenuController } from '@ionic/angular';

import { File, FileEntry} from '@ionic-native/file/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx'
//import { Storage } from '@ionic/storage';
import { FilePath} from '@ionic-native/file-path/ngx';




import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-showallbooks',
  templateUrl: './showallbooks.page.html',
  styleUrls: ['./showallbooks.page.scss'],
})
export class ShowallbooksPage implements OnInit, AfterViewInit {

  images = [];
  bookImages: Array<any>;
  allbooks: Book[] = [];
  recobooks: Book[] = [];
  book: Book;
  bookGenreCollection: Book[] = [];
  bookLanguageCollection: Book[] = [];
  favorites: Favorite[] = [];
  favoriteBooks: Book[] = [];
  bookgenre = BookGenre;
  booklanguage = BookLanguage;
  collectonCategory = CollectionCategory;
  bookIds: Book[];
  bookList: Book[];
  errMess: string;
  username: string;
  category: string;

  showGenre: boolean;
  showLanguage: boolean;
  showBooks: boolean = false;
  showSkeleton: boolean = true;
  showSpinner: boolean = true;


  public bookIdsImages = new Map();
  public bookIdImageMap = new Map();
  lbookIds: any[];
  public url: SafeResourceUrl;

 

  public items: any;
  public searchTerm : string = "";
  public searchControl: FormControl;

  descending: boolean = false;
  order: number;
  column: string = 'bookgenre';

  selectCategoryFormGroup: FormGroup;
  @ViewChild('cform') selectCategoryFormDirective;



  constructor(public navCtrl: NavController, 
              private authService: AuthService, 
              private booksService: BooksService,
              private readarsService: ReadarsService,
              @Inject('baseURL') private baseURL, 
              private router: Router, 
              private searchedData: SearchedData,
              private menu: MenuController,
              private favoriteService: FavoriteService,
              private fb: FormBuilder,
              private file: File,
              private webview: WebView,
              //private storage: Storage,
              private plt: Platform,
             // private ref: ChangeDetectorRef, 
              private filePath: FilePath,
              private httpClient: HttpClient,
              private imageLoaderService: ImageLoaderService,
              private toastCtrl: ToastController,
              public zone: NgZone,
              public loadingController: LoadingController,
              public alertCtrl: AlertController
              ) {
              this.searchControl = new FormControl();

  }


  ngOnInit() {
    //this.showForm = false;
    //this.createForm();
    //this.setFilteredItems();

    //this.presentLoading();
    /*this.readarsService.getBooks()
    .subscribe(books => {
      this.showBooks = true;
      this.allbooks = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.allbooks)
    
    }, errmess => {
      this.showBooks = false;
      this.errMess = <any>errmess
    });*/

   


    /*this.readarsService.getRecommendedBooks()
    .subscribe(recobooks => {

      this.recobooks = recobooks;
      console.log("RECO BOOK COLLECTION IS ---------->", this.recobooks)

    }, errmess => this.errMess = <any>errmess);*/

    setTimeout(() => {
      //this.showSkeleton = false;
      this.showSpinner = false;
    }, 3000);

    this.readarsService.getBooks()
    .subscribe(books => {
      this.showBooks = true;
      this.allbooks = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.allbooks)
    
    }, errmess => {
      this.showBooks = false;
      this.errMess = <any>errmess
    });

    
  }

  

  ionViewDidEnter() {

    /*setTimeout(() => {
      this.showSkeleton = false;
    }, 3000);

    this.readarsService.getBooks()
    .subscribe(books => {
      this.showBooks = true;
      this.allbooks = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.allbooks)
    
    }, errmess => {
      this.showBooks = false;
      this.errMess = <any>errmess
    });*/

    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...please wait',
      duration: 2400
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  


  createForm() {
    this.selectCategoryFormGroup = this.fb.group({
      
      bookgenre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ]
      
      
    });
   

  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }

  ionViewWillEnter() {
    //this.prepareBookIdsImagesMap();
  }

  clearCache() {
    this.imageLoaderService.clearCache();
   
    //refresher.complete();
  }

  onImageLoad(event) {
    console.log("image ready");
   
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

  ngAfterViewInit() {

  }

  selectCollectionCategory(event) {

    this.showGenre = false;
    this.showLanguage = false;

    if (event.detail.value === 'Genre') {
        this.showGenre = true;
       
    }

    if (event.detail.value === 'Language') {
      this.showLanguage = true;
     
    }
  }


  showAllBooks() {
    console.log("Inside Show All Books");
  }

  /*
    for every book in books, check the bookgenre. 
    if bookgenre matches with the event.detal.value, add that bookentry into genrecollection
  */

    async alertManagement(message: string) {

      const alert = await this.alertCtrl.create({
        message: message,
        header: "Please note",
        buttons: ['Ok']
        
      });
  
      await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

  displayGenreCollection(event) {

    this.bookGenreCollection = [];
    console.log("EVENT DETAIL VALUE", event.detail.value)
    let i=0;
    let j=0;
    while (i < this.allbooks.length) {

      if (this.allbooks[i].bookgenre === event.detail.value) {
        this.bookGenreCollection[j] = this.allbooks[i];
        j++;
      }
      i++; 
    }
    if ((this.bookGenreCollection === undefined || this.bookGenreCollection.length == 0)) {
        this.alertManagement("Books of genre " + event.detail.value + " are NOT AVAILABLE in the bookshelf currently");
    }
    console.log("BOOK GENRE & COLLECTION", event.detail.value, this.bookGenreCollection.length)
  }

  displayLanguageCollection(event) {

    this.bookLanguageCollection = [];
    console.log("EVENT DETAIL VALUE", event.detail.value)
    let i=0;
    let j=0;
    while (i < this.allbooks.length) {

      if (this.allbooks[i].booklanguage === event.detail.value) {
        this.bookLanguageCollection[j] = this.allbooks[i];
        j++;
      }
      i++; 
    }
    if ((this.bookLanguageCollection === undefined || this.bookLanguageCollection.length == 0)) {
      this.alertManagement("Books in " + event.detail.value + " language are NOT AVAILABLE in the bookshelf currently");
  }
    console.log("BOOK LANGUAGE & COLLECTION", event.detail.value, this.bookLanguageCollection)
  }
   
  refreshPage() {
    console.log("inside refreshpage")
    window.location.reload();
   }

  refreshBookList(event) {
    setTimeout(() => {

      this.readarsService.getBooks()
      .subscribe(books => {
        this.allbooks = books;
      }, errmess => this.errMess = <any>errmess);

      this.clearCache();

      event.target.complete();

    }, 2000);
  }

  setFilteredItems() {

    this.allbooks = this.searchedData.filterItems(this.searchTerm);
    console.log("Searched data", this.allbooks)

  }

  loadMoreBooks(event) {
    setTimeout(() => {
    /*  this.bookList = this.books;
      const newBooks = [...this.bookList];
      this.books = this.bookList.concat(newBooks);*/
    }, 3000);
  }


}
