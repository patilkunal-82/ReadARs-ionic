import { Component, OnInit, Inject, AfterViewInit, ViewChild  } from '@angular/core';
import { FormControl, FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { ModalController} from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { SortPipe } from '../shared/sort.pipe'
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";

import { Book, BookActions, BookLanguage, BookCurrentStatus} from '../shared/book';
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
import { ArbookPage} from '../arbook/arbook.page';
import { Subscription } from 'rxjs';

import { ImageLoaderService } from 'ionic-image-loader-v5';


enum CodeOps {
  getQrCode,
  getScannedCode,
  compareCodes
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page implements OnInit, AfterViewInit {

  qrCheckString: string;
  scannedDataString: string;

  myProfileImage;
  scannedData: any;

  username: string = undefined;
  subscription: Subscription;
  
  bookcurrentUsername: string;
  
  books: Book[];
  allBooks: Book[];
  
  
  reservedBooks: Book[] = [];
  availableBooks: Book[] = [];
  borrowedBooks:Book[] = [];
  bookList: Book[];
  bookIds: Book[];
  bookLendMakeCollection: Book[];
  bookDeleteCollection: Book[];
  errMess: string;
 

  public items: any;
  public searchTerm : string = "";
  public searchControl: FormControl;

  descending: boolean = false;
  order: number;
  column: string = 'booklanguage';

  public bookIdsImages = new Map();
  public bookIdImageMap = new Map();
  public url: SafeResourceUrl;

  name = 'Angular';
  //favorites: Favorite;
  delete: boolean;
  currentRouter = this.router.url;


  lbookIds: any[];
  book: Book;
  addbook: Book;
  removebook: Book;
  bookCopy: Book;

  booklanguage = BookLanguage;
  bookactions = BookActions;
  bookcurrentstatus = BookCurrentStatus;
  //feedback: Feedback;
  contactType = ContactType;
  submitted = null;
  showForm = true;

  borrowed: boolean;
  reserved: boolean;
  available: boolean;
  lendmake: boolean;
  remove: boolean;
  showAvailable: boolean;
  showReserved: boolean;
  showBorrowed: boolean;
  showAll: boolean;
  collectionEmptyAV: boolean;
  collectionEmptyLM: boolean;
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
    private activatedRoute: ActivatedRoute,
    private barCodeScanner: BarcodeScanner,
    private imageLoaderService: ImageLoaderService) {
        this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems();

    
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { 
        
        console.log(name); 
        this.username = name; 
        this.booksService.getBooks()
         .subscribe(books => {
          this.allBooks = books;
          console.log("TAB3 BOOKS", this.allBooks);
      }, errmess => this.errMess = <any>errmess);

      this.prepareBookIdsImagesMap();
      
      });

     

    
    
  }

  ionViewWillEnter() {

    this.prepareBookIdsImagesMap();
    this.booksService.getBooks()
      .subscribe(books => {
          this.allBooks = books;
          console.log("TAB3 BOOKS", this.allBooks);
      }, errmess => this.errMess = <any>errmess);

  }

  displayBooksByStatus(event) {

    console.log("inside displayBooksBYStatus function");
    this.showAvailable = false;
    this.showReserved = false;
    this.showBorrowed = false;
    this.showAll = false;

    if (event.detail.value === 'Available') {
        console.log("inside AVAILABLE condition");
        this.showAvailable = true;
        this.availableBooks = [];
        let i = 0;
        let j = 0;
        while (i < this.allBooks.length) {
          
          if (this.allBooks[i].bookcurrentstatus === 'available') {
            this.availableBooks[j] = this.allBooks[i];
            j++;
          }
          i++;
        }
        console.log("BOOK Status & COLLECTION", event.detail.value, this.availableBooks.length)

    }

    if (event.detail.value === 'Reserved') {
      console.log("inside RESERVED condition");
      this.showReserved = true;
      this.reservedBooks = [];
      let i = 0;
      let j = 0;
      while (i < this.allBooks.length) {
        
        if (this.allBooks[i].bookcurrentstatus === 'reserved') {
          this.reservedBooks[j] = this.allBooks[i];
          j++;
        }
        i++;
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.reservedBooks.length)
    }

    if (event.detail.value === 'Borrowed') {
      console.log("inside BORROWED condition");
      this.showBorrowed = true;
      this.borrowedBooks = [];
      let i = 0;
      let j = 0;
      while (i < this.allBooks.length) {
        
        if (this.allBooks[i].bookcurrentstatus === 'borrowed') {
          this.borrowedBooks[j] = this.allBooks[i];
          j++;
        }
        i++;
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.borrowedBooks.length)
     
    }

    if (event.detail.value === 'All') {
      this.showAll = true;
     
    }
  }


  clearCache() {
    this.imageLoaderService.clearCache();
    
    //refresher.complete();
  }

  onImageLoad(event) {
    console.log("image ready");
  }

  /*displayActionCollection(event) {


    console.log("EVENT DETAIL VALUE", event.detail.value);


    if (event.detail.value === 'Lend Or Make Available') {
        console.log("INSIDE LEND MAKE");
          
          this.lendmake = true;
          this.remove = false;
          this.collectionEmptyAV = false;
          let i=0;
          let j=0;
          console.log("--------", this.books);
          console.log("-----LENGTH-----", this.books.length);

          while (i<this.books.length) {
              this.reservedService.isReserved(this.books[i]._id)
              .subscribe(resp => { 
              console.log(resp); 
              this.reserved = <boolean>resp.exists;
              if (this.reserved) {
                console.log("BOOK", resp.book);
                this.reservedBooks[j] = resp.book;
                console.log("RESERVED BOOK", this.reservedBooks[j]);
                j++;
              }
              if (this.reservedBooks.length == 0) {
                this.collectionEmptyLM = true;
              }
            },err => console.log(err));
            i++;          
          }

          i=0; j=0;

          while (i<this.books.length) {
            this.borrowedService.isBorrowed(this.books[i]._id)
            .subscribe(resp => { 
            console.log(resp); 
            this.borrowed = <boolean>resp.exists;
            if (this.borrowed) {
              console.log("BOOK", resp.book);
              this.borrowedBooks[j] = resp.book;
              console.log("BORROWED BOOK", this.borrowedBooks[j]);
              j++;
            }
            if (this.borrowedBooks.length == 0) {
              this.collectionEmptyLM = true;
            }
          },err => console.log(err));
          i++;          
        }

      this.bookLendMakeCollection = this.reservedBooks.concat(this.borrowedBooks);
      console.log("bookLendMakeCollection", this.bookLendMakeCollection);
      if (this.bookLendMakeCollection.length == 0) {

        this.collectionEmptyLM = true;
        console.log("collectionEmptyLM", this.collectionEmptyLM)
      }

    }

    if (event.detail.value === 'Remove') {
        //this.ngOnInit();
        this.remove = true;
        this.lendmake = false;
        this.collectionEmptyLM = false;
        console.log("COLLECTION EMPTY AV", this.collectionEmptyAV);
        console.log("INSIDE REMOVE");
        let i=0;
        let j=0;
        console.log("--------", this.books);
        console.log("-----LENGTH-----", this.books.length);
        while (i<this.books.length) {
            this.availableService.isAvailable(this.books[i]._id)
            .subscribe(resp => { 
            console.log(resp); 
            this.available = <boolean>resp.exists;
            if (this.available) {
              console.log("BOOK", resp.book);
              this.availableBooks[j] = resp.book;
              console.log("AVAILABLE BOOK", this.availableBooks[j]);
              j++;
            }
           console.log("AVAILABLE BOOKSSSS", this.availableBooks)
           if (this.availableBooks.length == 0) {
            this.collectionEmptyAV = true;
          }
          
          },err => console.log(err));

          i++;          
        }

      
    }
  }*/

  prepareBookIdsImagesMap() {

    // get all the  bookIds
    // for every  bookID get the corresponding imageURL
    // store image URL against the bookID in a map
    // when displaying a view, for every book Id(key), get corresponding img url(value) from the map

    this.booksService.getBookIds().subscribe(bookIds => {
      this.bookIds = bookIds;
      this.storeBookIds(this.bookIds);
      this.lbookIds = this.loadBookIds();
      for (let i=0; i < this.lbookIds.length; i++) {

        this.booksService.getBookImage(this.lbookIds[i])
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
    this.booksService.getBooks()
      .subscribe(books => {
        this.books = books;
      }, errmess => this.errMess = <any>errmess);

      this.clearCache();
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

    this.booksService.deleteBookImage(id)
    .subscribe(resp => console.log(resp), errmess => this.errMess = <any>errmess);

      this.delete = false;
      this.ngOnInit();
  }

  getCodeValue(codeOpsName: string): CodeOps {

    if (codeOpsName === 'xyz') {
      return CodeOps.getQrCode;
    }

    if (codeOpsName === 'abc') {
      return CodeOps.getScannedCode;
    }
    
  }

  

  async scanToLendOrRelease(id: string) {

    const alert = await this._alertController.create({
      header: "Choose your action",
      message: "Lend or Make Book Available",
      buttons: [
        {
          text: "Lend",
          handler: ()=> {
           this.scanForLend(id); 
          }
        },
        {
          text: "Make Available",
          handler: ()=> {
           this.scanForRelease(id);
          }
        }
      ]
    });

    await alert.present();
  }

  getQRCheckString(id: string) {

    //this.ngOnInit();
    console.log("INSIDE GET CHECK QR STRING")

    for (let i=0; i < this.books.length; i++) {

      if (this.books[i]._id === id) {
        
        
         this.qrCheckString = this.books[i]._id +
                              this.books[i].bookowner.username +
                              this.books[i].bookcurrentuser;
          console.log("QR CHECK STRING", this.qrCheckString);
          return this.qrCheckString;
      }
      //break;
    }
    
  }

  scanForLend(id) {

    console.log("INSIDE LEND");
    
    this.booksService.getBook(id)
                  .subscribe(book => {
                  
                   this.bookcurrentUsername = book.bookcurrentuser;
                   this.qrCheckString = book._id +
                                        book.bookowner.username +
                                        book.bookcurrentuser;
      
                  console.log("QR CHECK STRING IS", this.qrCheckString);

                  const options: BarcodeScannerOptions = {
                    preferFrontCamera: false,
                    showFlipCameraButton: true,
                    showTorchButton: true,
                    torchOn: false,
                    prompt: 'Place a barcode inside the scan area',
                    resultDisplayDuration: 500,
                    formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                    orientation: 'portrait',
                  };
              
                  this.barCodeScanner.scan(options).then(barcodeData => {
                   
                    console.log("CHECK STRING IS ------>", this.qrCheckString);
                    this.scannedData = barcodeData;
                    console.log("SCANNED DATA IS ------> ", this.scannedData["text"]);

                    if(this.qrCheckString === this.scannedData["text"]) {

                      console.log("MATCH SUCCESS")
                      console.log('LENDING BOOK ' + id);
                       
                          this.router.navigate([this.currentRouter]);
                          this.book = book;
                          this.book.bookavailable = false;
                          this.book.bookreserved = true;
                          this.book.bookborrowed = true;
                          this.book.bookcurrentuser = this.bookcurrentUsername;
                          this.book.bookcurrentstatus = 'borrowed';
                          this.booksService.lendBook(id, this.book)
                          .subscribe(book => {
                            console.log(book); 
                            this.borrowed = true; 
                            this.reserved = true;
                            this.qrCheckString = "";
                          });
              
                          
                          this.ngOnInit();
              
                         
                      
                    }
                    else {
                      console.log("QR CODES DON'T MATCH");
                    }
                    
                  })
                  .catch(err => {console.log('Error', err);});


      
                  },  errmess => this.errMess = <any>errmess);
        
  }

  scanForRelease(id) {

    console.log("INSIDE MAKE AVAILABLE");
    
    this.booksService.getBook(id)
                  .subscribe(book => {
                  
                   this.bookcurrentUsername = book.bookcurrentuser;
                   this.qrCheckString = book._id +
                                        book.bookowner.username +
                                        book.bookcurrentuser;
      
                  console.log("QR CHECK STRING IS", this.qrCheckString);

                  const options: BarcodeScannerOptions = {
                    preferFrontCamera: false,
                    showFlipCameraButton: true,
                    showTorchButton: true,
                    torchOn: false,
                    prompt: 'Place a barcode inside the scan area',
                    resultDisplayDuration: 500,
                    formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                    orientation: 'portrait',
                  };
              
                  this.barCodeScanner.scan(options).then(barcodeData => {
                   
                    console.log("CHECK STRING IS ------>", this.qrCheckString);
                    this.scannedData = barcodeData;
                    console.log("SCANNED DATA IS ------> ", this.scannedData["text"]);

                    if(this.qrCheckString === this.scannedData["text"]) {

                      console.log("MATCH SUCCESS")
                      console.log('RELEASING BOOK ' + id);
                       
                      this.router.navigate([this.currentRouter]);
                     
                      //this.book.bookcurrentuser = "";


                      this.booksService.deleteQRBookImage(id, this.bookcurrentUsername)
                          .subscribe(resp => {
                            console.log(resp)
                            console.log("QR IMAGE DELETED");

                            this.book = book;
                            this.book.bookavailable = true;
                            this.book.bookreserved = false;
                            this.book.bookborrowed = false;
                            this.book.bookcurrentuser = "";
                            this.book.bookcurrentstatus = 'available';
                            this.booksService.releaseBook(this.book._id, this.book)
                            .subscribe(book => {
                                console.log(book); 
                                this.available = true; 
                                this.reserved = false;
                                this.qrCheckString = "";
                              
                              });


                          }, errmess => this.errMess = <any>errmess);

                     
                          
                      this.ngOnInit();
              
                    }
                    else {
                      console.log("QR CODES DON'T MATCH");
                    }
                    
                  })
                  .catch(err => {console.log('Error', err);});


      
                  },  errmess => this.errMess = <any>errmess);
        
  }




  /*scanForRelease1(id) {

    console.log("INSIDE SCAN FOR RELEASE");

    this.qrCheckString = this.getQRCheckString(id);

    if (this.qrCheckString) {
        console.log("QR CHECK STRING IS", this.qrCheckString);


        const options: BarcodeScannerOptions = {
          preferFrontCamera: false,
          showFlipCameraButton: true,
          showTorchButton: true,
          torchOn: false,
          prompt: 'Place a barcode inside the scan area',
          resultDisplayDuration: 500,
          formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
          orientation: 'portrait',
        };

        this.barCodeScanner.scan(options).then(barcodeData => {
          //console.log('Barcode data', barcodeData);
          console.log("CHECK STRING IS ------>", this.qrCheckString);
          this.scannedData = barcodeData;
          console.log("SCANNED DATA IS ------> ", this.scannedData["text"]);
          
          if(this.qrCheckString === this.scannedData["text"]) {
            console.log("MATCH SUCCESS")
            console.log('RELEASING BOOK ' + id);

            this.booksService.getBook(id)
            .subscribe(book => {
              this.router.navigate([this.currentRouter]);
              this.book = book;
              this.book.bookavailable = true;
              this.book.bookreserved = false;
              this.book.bookborrowed = false;
              this.book.bookcurrentuser = "";
              this.booksService.releaseBook(this.book._id, this.book)
              .subscribe(book => {
                  console.log(book); 
                  this.available = true; 
                  this.reserved = false;
                  this.qrCheckString = '';
                  console.log("ABOUT TO DELETE QR IMAGE FOR THIS BOOK ID", id);
                  this.booksService.deleteQRBookImage(id)
                  .subscribe(resp => console.log(resp), errmess => this.errMess = <any>errmess);
        
                });
              },  errmess => this.errMess = <any>errmess);
            this.ngOnInit();
          }
          else {
            console.log("QR CODES DON'T MATCH");
          }
          
        })
        .catch(err => {console.log('Error', err);});
                
    } 
    else {
      console.log("QR CHECK STRING NOT FOUND");
    }

  }*/

 

  /*

  this.reservedService.isReserved(this.book._id)
  .subscribe(resp => { console.log(resp); this.reserved = <boolean>resp.exists; },
      err => console.log(err));

   this.availableService.isAvailable(this.book._id)
   .subscribe(resp => { console.log(resp); this.available = <boolean>resp.exists; },
      err => console.log(err));


          */

  

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

  async arBookModal(id: string) {

    const arbookModal = await this._modalController.create({
      component: ArbookPage,
      componentProps: {
        bookId: id
      }
    });

    return arbookModal.present();
  }



}
