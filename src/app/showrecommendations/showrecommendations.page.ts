
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
import { NavController, Platform } from '@ionic/angular';
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
  selector: 'app-showrecommendations',
  templateUrl: './showrecommendations.page.html',
  styleUrls: ['./showrecommendations.page.scss'],
})
export class ShowrecommendationsPage implements OnInit, AfterViewInit {

  sliderConfig = {
    slidesPerView: 4,
    coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    //autoplay: true
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

  pages = [
    
  ]

  images = [];
  bookImages: Array<any>;
  books: Book[] = [];
  recobooks: Book[] = [];
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
              public loadingController: LoadingController
              ) {
              this.searchControl = new FormControl();

  }


  ngOnInit() {
    //this.showForm = false;
    this.createForm();
    this.setFilteredItems();

    
    
   // this.loadStoredImages();
    this.presentLoading();
    /*this.readarsService.getBooks()
    .subscribe(books => {

      this.books = books;
      this.prepareBookIdsImagesMap();
      console.log("BOOK COLLECTION IS ---------->", this.books)
    
    }, errmess => this.errMess = <any>errmess);*/

    this.readarsService.getRecommendedBooks()
    .subscribe(recobooks => {

      this.recobooks = recobooks;
      console.log("RECO BOOK COLLECTION IS ---------->", this.recobooks)

    }, errmess => this.errMess = <any>errmess);

    

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
    this.prepareBookIdsImagesMap();
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

  displayGenreCollection(event) {

    this.bookGenreCollection = [];
    console.log("EVENT DETAIL VALUE", event.detail.value)
    let i=0;
    let j=0;
    while (i < this.books.length) {

      if (this.books[i].bookgenre === event.detail.value) {
        this.bookGenreCollection[j] = this.books[i];
        j++;
      }
      i++; 
    }
    if ((this.bookGenreCollection === undefined || this.bookGenreCollection.length == 0)) {
        this.presentToast("Books of genre " + event.detail.value + " are NOT AVAILABLE in the bookshelf currently");
    }
    console.log("BOOK GENRE & COLLECTION", event.detail.value, this.bookGenreCollection.length)
  }

  displayLanguageCollection(event) {

    this.bookLanguageCollection = [];
    console.log("EVENT DETAIL VALUE", event.detail.value)
    let i=0;
    let j=0;
    while (i < this.books.length) {

      if (this.books[i].booklanguage === event.detail.value) {
        this.bookLanguageCollection[j] = this.books[i];
        j++;
      }
      i++; 
    }
    if ((this.bookLanguageCollection === undefined || this.bookLanguageCollection.length == 0)) {
      this.presentToast("Books in " + event.detail.value + " language are NOT AVAILABLE in the bookshelf currently");
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
        this.books = books;
      }, errmess => this.errMess = <any>errmess);

      this.clearCache();

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
