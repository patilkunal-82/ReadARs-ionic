import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SearchedData } from '../services/searchbooks.service';
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { SortPipe } from '../shared/sort.pipe'
import { ImageLoaderService } from 'ionic-image-loader-v5';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],

})

export class Tab4Page implements OnInit, AfterViewInit {

  books: Book[];
  bookList: Book[];
  bookIds: Book[];
  errMess: string;
  username: string;

  public bookIdsImages = new Map();
  public bookIdImageMap = new Map();
  lbookIds: any[];
  public url: SafeResourceUrl;

  public items: any;
  public searchTerm : string = "";
  public searchControl: FormControl;

  descending: boolean = false;
  order: number;
  column: string = 'booklanguage';
  showSkeleton: boolean = true;
  showSpinner: boolean = true;

  constructor(public navCtrl: NavController, private authService: AuthService, private booksService: BooksService,
    private readarsService: ReadarsService, private imageLoaderService: ImageLoaderService,
  @Inject('baseURL') private baseURL, private router: Router, private searchedData: SearchedData, 
   public loadingController: LoadingController){
    this.searchControl = new FormControl();
  }
  ngOnInit() {
    //this.showForm = false;

      /*this.presentLoading();
      this.setFilteredItems();
      this.readarsService.getBooks()
       .subscribe(books => {
     this.books = books;
      console.log("BOOK COLLECTION IS ---------->", this.books)
    }, errmess => this.errMess = <any>errmess);

      this.prepareBookIdsImagesMap();*/

      setTimeout(() => {
        //this.showSkeleton = false;
        this.showSpinner = false;
      }, 3000);
  
  
      this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.books)
      }, errmess => this.errMess = <any>errmess);
      this.setFilteredItems();
    
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

  ionViewDidEnter() {

    //this.showForm = false;

    //this.presentLoading();

    /*setTimeout(() => {
      this.showSkeleton = false;
    }, 3000);


    this.readarsService.getBooks()
      .subscribe(books => {
     this.books = books;
     this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.books)
    }, errmess => this.errMess = <any>errmess);
    this.setFilteredItems();*/

    
   
  
  }

  ionViewWillEnter() {
     // this.prepareBookIdsImagesMap();
 
  }

  

  clearCache() {
    this.imageLoaderService.clearCache();
  
   // refresher.complete();
  }

  onImageLoad(event) {
    console.log("image ready");
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
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

  refreshBookList(event) {
    setTimeout(() => {

      this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;
      }, errmess => this.errMess = <any>errmess);

      event.target.complete();

    }, 2000);
  }

  setFilteredItems() {

    this.books = this.searchedData.filterItems(this.searchTerm);
    console.log("Searched data", this.books)

  }

  loadMoreBooks(event) {
    setTimeout(() => {
    /*  this.bookList = this.books;
      const newBooks = [...this.bookList];
      this.books = this.bookList.concat(newBooks);*/
    }, 3000);
  }


}
