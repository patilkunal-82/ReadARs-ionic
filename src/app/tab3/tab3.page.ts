import { Component, OnInit, Inject, AfterViewInit, ViewChild  } from '@angular/core';
import { FormControl, FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { ModalController} from '@ionic/angular';


import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";

import { Book, BookLanguage} from '../shared/book';
import { Feedback, ContactType } from '../shared/feedback';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { AvailableService} from '../services/available.service';
import { ReservedService } from '../services/reserved.service';
import { BorrowedService} from '../services/borrowed.service';
import { FeedbackService } from '../services/feedback.service';
import { SearchedMyData } from '../services/searchmybooks.service';
import { AddbookPage } from '../addbook/addbook.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit, AfterViewInit {
  myProfileImage;

  books: Book[];
  bookList: Book[];
  errMess: string;
  username: string;

  public items: any;
  public searchTerm : string = "";
  public searchControl: FormControl;

  name = 'Angular';
  //favorites: Favorite;
  delete: boolean;
  currentRouter = this.router.url;

  bookIds: string[];
  lbookIds: string[];
  book: Book;
  addbook: Book;
  removebook: Book;

  booklanguage = BookLanguage;
  //feedback: Feedback;
  contactType = ContactType;
  submitted = null;
  showForm = true;

  borrowed: boolean;
  reserved: boolean;
  available: boolean;
  panelOpenState = false;

  constructor(
    private _camera: Camera,
    private _alertController: AlertController,
    private _modalController: ModalController,
    private authService: AuthService,
    public navCtrl: NavController,
    private readarsService: ReadarsService,
    @Inject('baseURL') private baseURL,
    private router: Router,
    private route: ActivatedRoute,
    private searchedMyData: SearchedMyData,
    private fb: FormBuilder,
    private feedbackservice: FeedbackService,
    private booksService: BooksService,
    private reservedService: ReservedService,
    private borrowedService: BorrowedService,
    private availableService: AvailableService,
    private activatedRoute: ActivatedRoute) {
        this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems();

    this.authService.loadUserCredentials();
    this.booksService.getBooks()
      .subscribe(books => {
          this.books = books;
      }, errmess => this.errMess = <any>errmess);



  }

  ngAfterViewInit() {

  }

  refreshBookList(event) {
    setTimeout(() => {

      this.booksService.getBooks()
      .subscribe(books => {
        this.books = books;
      }, errmess => this.errMess = <any>errmess);

      event.target.complete();

    }, 2000);
  }

  setFilteredItems() {
    this.books = this.searchedMyData.filterItems(this.searchTerm);
    console.log("Searched my data", this.books)
  }

  deleteBook(id: string) {
    console.log('Deleting Book ' + id);

    this.booksService.deleteBook(id)
    .subscribe(removebook => this.removebook = <Book>removebook,
      errmess => this.errMess = <any>errmess);
      this.delete = false;
      this.ngOnInit();
  }


  lendBook(id: string) {
    console.log('Lending Book ' + id);
    this.booksService.getBook(id)
    .subscribe(book => {
      this.router.navigate([this.currentRouter]);
      this.book = book;
      this.book.bookavailable = false;
      this.book.bookreserved = true;
      this.book.bookborrowed = true;
      this.booksService.lendBook(id, this.book)
      .subscribe(book => {console.log(book); this.borrowed = true; this.reserved = true;});

      this.ngOnInit();


    },  errmess => this.errMess = <any>errmess);
  }

  /*

  this.reservedService.isReserved(this.book._id)
  .subscribe(resp => { console.log(resp); this.reserved = <boolean>resp.exists; },
      err => console.log(err));

   this.availableService.isAvailable(this.book._id)
   .subscribe(resp => { console.log(resp); this.available = <boolean>resp.exists; },
      err => console.log(err));

  */

  releaseBook(id: string) {
    console.log('Releasing Book ' + id);

    this.booksService.getBook(id)
    .subscribe(book => {
      this.router.navigate([this.currentRouter]);
      this.book = book;
      this.book.bookavailable = true;
      this.book.bookreserved = false;
      this.book.bookborrowed = false;
      this.booksService.releaseBook(this.book._id, this.book)
      .subscribe(book => {console.log(book); this.available = true; this.reserved = false;});
    },  errmess => this.errMess = <any>errmess);

    this.ngOnInit();

  }

  loadMoreBooks(event) {
    setTimeout(() => {
    /*  this.bookList = this.books;
      const newBooks = [...this.bookList];
      this.books = this.bookList.concat(newBooks);*/
    }, 3000);
  }

  async addBookModal() {

    const addbookModal = await this._modalController.create({
      component: AddbookPage
    });

    return addbookModal.present();
  }


  /*async selectImageSource(){
    const camerOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
    };
    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for your image",
      buttons: [
        {
          text: "Camera",
          handler: ()=> {
            this._camera.getPicture(camerOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        },
        {
          text: "Gallery",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((imageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + imageData;
            });
          }
        }
      ]
    });

    await alert.present();
  }*/


}
