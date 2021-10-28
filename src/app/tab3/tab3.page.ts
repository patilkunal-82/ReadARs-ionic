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

import { Book, BookActions, BookLanguage, BookCurrentStatus, BookRequestedStatus} from '../shared/book';
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
import { ManagebookshelpPage} from '../managebookshelp/managebookshelp.page'
import { Subscription } from 'rxjs';

import { ImageLoaderService } from 'ionic-image-loader-v5';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';




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
  
  books: Book[]= [];
  books1: Book[] = [];
  allBooks: Book[];
  allBooks1: Book[];
  notMyBooks: Book[];
  
  
  reservedBooks: Book[] = [];
  availableBooks: Book[] = [];
  borrowedBooks:Book[] = [];
  requestedReservedBooks: Book[] = [];
  requestedBorrowedBooks: Book[] = [];
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
  public notMyBookIdImageMap = new Map();
  public url: SafeResourceUrl;

  name = 'Angular';
  //favorites: Favorite;
  bookDeleted: boolean;
  currentRouter = this.router.url;


  lbookIds: any[];
  book: Book;
  addbook: Book;
  removebook: Book;
  bookCopy: Book;
 

  booklanguage = BookLanguage;
  bookactions = BookActions;
  bookcurrentstatus = BookCurrentStatus;
  bookrequestedstatus = BookRequestedStatus;

  //feedback: Feedback;
  contactType = ContactType;
  submitted = null;
  showForm = true;
  returnDate: string;
  collectByDate: string;

  borrowed: boolean;
  reserved: boolean;
  available: boolean;
  lendmake: boolean;
  remove: boolean;
  showAvailable: boolean = false;
  showReserved: boolean = false;
  showBorrowed: boolean = false;
  showAll: boolean = false;
  showNotMyBooks: boolean = false;
  showRequestedReservedBooks: boolean = false;
  showRequestedBorrowedBooks: boolean = false;
  collectionEmptyAV: boolean;
  collectionEmptyLM: boolean;
  noBorrowedReservedExists: boolean = false;
  panelOpenState = false;
  nobooksAVAILABLE: boolean;
  nobooksRESERVED: boolean;
  nobooksBORROWED: boolean;
  nobooksEXIST: boolean = false;;
  nobooksREQUESTEDRESERVED: boolean;
  nobooksREQUESTEDBORROWED: boolean;
  nobooksREQUESTEDRESERVEDBORROWED: boolean = true;

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
    private imageLoaderService: ImageLoaderService,
    private toastCtrl: ToastController, 
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController
    ) {
        this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems();
    
    //this.presentLoading();
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
    .subscribe(name => { 

        console.log(name); 
        this.username = name; 
      //  if (name) {
          this.booksService.getBooks()
          .subscribe(books => {
           this.allBooks = books;
           this.prepareBookIdsImagesMap();
           console.log("TAB3 BOOKS", this.allBooks);
           if (this.allBooks.length == 0 || this.allBooks === undefined) {
            this.nobooksEXIST = true;
          } else {
            this.nobooksEXIST = false;
          }
          
           //this.getBooksBoorowedOrReservedByMe();
          }, errmess => {
             this.errMess = <any>errmess 
          });

     //   }


        this.readarsService.getBooks()
        .subscribe(books1 => {
          this.allBooks1 = books1;
          console.log("allbooks1", this.allBooks1);
          for (let i=0; i<this.allBooks1.length;i++) {
            console.log("Book Current user", this.allBooks1[i].bookcurrentuser)
            console.log("this.username", this.username)
          if (this.allBooks1[i].bookcurrentuser === this.username) {
            this.nobooksREQUESTEDRESERVEDBORROWED = false;
            console.log(" this.nobooksREQUESTEDRESERVEDBORROWED",  this.nobooksREQUESTEDRESERVEDBORROWED)
          }
        }


        });
       
    });



    
    
    
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

  ionViewWillEnter() {

    
   
    this.booksService.getBooks()
      .subscribe(books => {
          this.allBooks = books;
          this.prepareBookIdsImagesMap();
          if (this.allBooks.length == 0 || this.allBooks === undefined) {
            this.nobooksEXIST = true;
          } else {
            this.nobooksEXIST = false;
          }
          console.log("TAB3 BOOKS", this.allBooks);
      }, errmess => { 
        
        this.errMess = <any>errmess 
      
      });

     

  }

  /*getBooksBoorowedOrReservedByMe() {

    this.nobooksREQUESTEDRESERVEDBORROWED = false;
    this.readarsService.getBooks()
    .subscribe(booksAll => {
      console.log("booksALL", booksAll);
      for (let i=0; i<booksAll.length;i++) {
        //console.log("Book Current user", booksAll[i].bookcurrentuser)
        //console.log("this.username", this.username)
        if (booksAll[i].bookcurrentuser === this.username) {
          
          this.notMyBooks.push(booksAll[i]);
          console.log("FOUND books current user", booksAll[i].bookcurrentuser);
          this.booksService.getBookImage(booksAll[i]._id)
          .subscribe(x => {
              this.url = x;
              console.log("this.url", this.url);
              this.notMyBookIdImageMap.set(booksAll[i]._id, this.url);
              console.log("notMyBookIdImageMap", this.notMyBookIdImageMap);
           }, errMess => {
            console.log(errMess)
          });
          
        }
      }
      console.log("NOT MY BOOKS", this.notMyBooks)
      if (this.notMyBooks === undefined || this.notMyBooks.length == 0) {
        this.nobooksREQUESTEDRESERVEDBORROWED = true;  
      }
    }, errmess => {
      this.errMess = <any>errmess
     
    });
  }*/
  

  displayBooksByStatus(event) {

    console.log("inside displayBooksBYStatus function");
    this.showAvailable = false;
    this.showReserved = false;
    this.showBorrowed = false;
    this.showAll = false;
    this.nobooksAVAILABLE = false;
    this.nobooksBORROWED = false;
    this.nobooksRESERVED = false;
    

    if (event.detail.value === 'Available') {
        console.log("inside AVAILABLE condition");
        this.showAvailable = true;
        this.showBorrowed = false;
        this.showReserved = false;
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

        if (this.availableBooks === undefined || this.availableBooks.length == 0) {
          //this.presentToast(event.detail.value + " - None exists");
          this.nobooksAVAILABLE = true;
          this.nobooksBORROWED = false;
          this.nobooksRESERVED = false;
        }
        console.log("BOOK Status & COLLECTION", event.detail.value, this.availableBooks.length)

    }

    if (event.detail.value === 'Reserved') {
      console.log("inside RESERVED condition");
      this.showReserved = true;
      this.showAvailable = false;
      this.showBorrowed = false;
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
      if (this.reservedBooks === undefined || this.reservedBooks.length == 0) {
        //this.presentToast(event.detail.value + " - None exists");
        this.nobooksRESERVED = true;
        this.nobooksAVAILABLE = false;
        this.nobooksBORROWED = false;
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.reservedBooks.length)
    }

    if (event.detail.value === 'Borrowed') {
      console.log("inside BORROWED condition");
      this.showBorrowed = true;
      this.showAvailable = false;
      this.showReserved = false;
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
      if (this.borrowedBooks === undefined || this.borrowedBooks.length == 0) {
        //this.presentToast(event.detail.value + " - None exists");
        this.nobooksBORROWED = true;
        this.nobooksRESERVED = false;
        this.nobooksAVAILABLE = false;
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.borrowedBooks.length)
     
    }

    if (event.detail.value === 'All') {
      this.showAll = true;
     
    }
  }

  displayRequestedBooksByStatus(event) {

    this.notMyBooks = [];
   // this.nobooksREQUESTEDRESERVEDBORROWED = false;
    this.readarsService.getBooks()
    .subscribe(booksAll => {
      console.log("booksALL", booksAll);
      for (let i=0; i<booksAll.length;i++) {
        //console.log("Book Current user", booksAll[i].bookcurrentuser)
        //console.log("this.username", this.username)
        if (booksAll[i].bookcurrentuser === this.username) {
          
          this.notMyBooks.push(booksAll[i]);
          console.log("FOUND books current user", booksAll[i].bookcurrentuser);
          this.booksService.getBookImage(booksAll[i]._id)
          .subscribe(x => {
              this.url = x;
              console.log("this.url", this.url);
              this.notMyBookIdImageMap.set(booksAll[i]._id, this.url);
              console.log("notMyBookIdImageMap", this.notMyBookIdImageMap);
           }, errMess => {
            console.log(errMess)
          });
          
        }
      }
      console.log("NOT MY BOOKS", this.notMyBooks)
      if (this.notMyBooks === undefined || this.notMyBooks.length == 0) {
        this.nobooksREQUESTEDRESERVEDBORROWED = true;  
      }
      else {
        console.log("inside displayRequestedBooksByStatus function");
          this.showRequestedBorrowedBooks = false;
          this.showRequestedReservedBooks = false;
          this.nobooksREQUESTEDRESERVEDBORROWED = false; 
          console.log("NOT MY BOOKS", this.notMyBooks)
          if (event.detail.value === 'Reserved') {
            console.log("inside REQUESTED RESERVED condition");
            this.showRequestedReservedBooks= true;
            this.showRequestedBorrowedBooks = false;
            this.requestedReservedBooks = [];
            let i = 0;
            let j = 0;
            while (i < this.notMyBooks.length) {
              
              if (this.notMyBooks[i].bookcurrentstatus === 'reserved') {
                this.requestedReservedBooks[j] = this.notMyBooks[i];
                j++;
              }
              i++;
            }
            if (this.requestedReservedBooks === undefined) {
              this.nobooksREQUESTEDRESERVED = true;
              this.nobooksREQUESTEDBORROWED = false;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedReservedBooks.length)
          }

          if (event.detail.value === 'Borrowed') {
            console.log("inside BORROWED condition");
            this.showRequestedReservedBooks= false;
            this.showRequestedBorrowedBooks = true;
            this.requestedBorrowedBooks = [];
            let i = 0;
            let j = 0;
            while (i < this.notMyBooks.length) {
              
              if (this.notMyBooks[i].bookcurrentstatus === 'borrowed') {
                this.requestedBorrowedBooks[j] = this.notMyBooks[i];
                j++;
              }
              i++;
            }
            if (this.requestedBorrowedBooks === undefined) {
              this.nobooksREQUESTEDBORROWED = true;
              this.nobooksREQUESTEDRESERVED = false;
              
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedBorrowedBooks.length)
          
          }

      }
    }, errmess => {
      this.errMess = <any>errmess
     
    });

    /*console.log("inside displayRequestedBooksByStatus function");
    this.showRequestedBorrowedBooks = false;
    this.showRequestedReservedBooks = false;
    
    console.log("NOT MY BOOKS", this.notMyBooks)
    if (event.detail.value === 'Reserved') {
      console.log("inside REQUESTED RESERVED condition");
      this.showRequestedReservedBooks= true;
      this.showRequestedBorrowedBooks = false;
      this.requestedReservedBooks = [];
      let i = 0;
      let j = 0;
      while (i < this.notMyBooks.length) {
        
        if (this.notMyBooks[i].bookcurrentstatus === 'reserved') {
          this.requestedReservedBooks[j] = this.notMyBooks[i];
          j++;
        }
        i++;
      }
      if (this.requestedReservedBooks === undefined) {
        this.nobooksREQUESTEDRESERVED = true;
        this.nobooksREQUESTEDBORROWED = false;
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedReservedBooks.length)
    }

    if (event.detail.value === 'Borrowed') {
      console.log("inside BORROWED condition");
      this.showRequestedReservedBooks= false;
      this.showRequestedBorrowedBooks = true;
      this.requestedBorrowedBooks = [];
      let i = 0;
      let j = 0;
      while (i < this.notMyBooks.length) {
        
        if (this.notMyBooks[i].bookcurrentstatus === 'borrowed') {
          this.requestedBorrowedBooks[j] = this.notMyBooks[i];
          j++;
        }
        i++;
      }
      if (this.requestedBorrowedBooks === undefined) {
        this.nobooksREQUESTEDBORROWED = true;
        this.nobooksREQUESTEDRESERVED = false;
        
      }
      console.log("BOOK Status & COLLECTION", event.detail.value, this.requestedBorrowedBooks.length)
     
    }*/

  }

  async presentToast(errmsg) {
    const toast = await this.toastCtrl.create({
      message: errmsg,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
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
        }, errMess => {
          console.log(errMess)
        
        });


      }
    }, errmess => this.errMess = <any>errmess);
  }

  storeBookIds(bookIds: any[]) {
   // console.log('BookIds stored are :', bookIds);
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
      }, errmess => {
        this.errMess = <any>errmess
       
      });

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
    .subscribe(removebook => {
      this.removebook = <Book>removebook
      
      this.ngOnInit();
      },
      errmess => {
        this.errMess = <any>errmess
        
        
      });

    this.booksService.deleteBookImage(id)
    .subscribe(resp => console.log(resp), errmess => this.errMess = <any>errmess);
      this.presentToast("Book removed successfully");
      this.bookDeleted = true;
      //this.ngOnInit();
      
  }

  getCodeValue(codeOpsName: string): CodeOps {

    if (codeOpsName === 'xyz') {
      return CodeOps.getQrCode;
    }

    if (codeOpsName === 'abc') {
      return CodeOps.getScannedCode;
    }
    
  }

  async checkDeleteConfirmation(id: string) {

    const alert = await this._alertController.create({
     // header: "All associated content will also be removed ",
      message: "All associated content will also be removed",
      header: "Do you wish to proceed ?",
      buttons: [
        {
          text: "Yes",
          handler: ()=> {
           this.deleteBook(id);
           this.ngOnInit(); 
          }
        },
        {
          text: "No",
          handler: ()=> {
           return ;
          }
        }
      ]
    });

    await alert.present();
  }

  async alerManagement(message: string) {

    const alert = await this._alertController.create({
      message: message,
      header: "Please Note",
      buttons: ['Ok']
      
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
                      this.presentToast("Authorization Successful")
                          this.router.navigate([this.currentRouter]);
                          this.book = book;
                          this.book.bookavailable = false;
                          this.book.bookreserved = true;
                          this.book.bookborrowed = true;
                          this.book.bookcurrentuser = this.bookcurrentUsername;
                          this.book.bookcurrentstatus = 'borrowed';
                          this.book.bookborroweddate = new Date().toLocaleDateString();
                          /*var returnDate = new Date();
                          returnDate.setDate(returnDate.getDate()+30);
                          this.book.bookreturnbydate = returnDate.toLocaleDateString();*/
                          var nowPlus30Days = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));
                          this.book.bookreturnbydate = nowPlus30Days.toLocaleDateString();
                          console.log("BOOK BORROWED DATE", this.book.bookborroweddate)
                          console.log("BOOK RETURN BY DATE", this.book.bookreturnbydate)
                          this.booksService.lendBook(id, this.book)
                          .subscribe(book => {
                            
                            console.log(book); 
                            this.borrowed = true; 
                            this.reserved = true;
                            this.qrCheckString = "";
                            this.presentToast("Book is in borrowed status")
                            
                            this.ngOnInit();
                          });
              
                          
                          //this.ngOnInit();
              
                         
                      
                    }
                    else {
                      this.alerManagement("QR Codes mismatch. Authorization failed")
                      console.log("QR Codes mismatch. Authorization failed");
                    }
                    
                  })
                  .catch(err => {
                    
                        console.log('Error', err);
                       
                      });


      
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
                      this.presentToast("Authorization Successful")
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
                            this.book.bookborroweddate = "";
                            this.book.bookreserveddate = "";
                            this.book.bookreturnbydate = "";
                            this.booksService.releaseBook(this.book._id, this.book)
                            .subscribe(book => {
                                console.log(book); 
                                this.available = true; 
                                this.reserved = false;
                                this.qrCheckString = "";
                                this.presentToast("Book is now available")
                              });


                          }, errmess => this.errMess = <any>errmess);

                     
                          
                      this.ngOnInit();
              
                    }
                    else {
                      console.log("QR CODES DON'T MATCH");
                      this.alerManagement("QR Codes mismatch. Authorization failed")
                    }
                    
                  })
                  .catch(err => {
                    
                    console.log('Error', err);
                   
                  });


      
                  },  errmess => this.errMess = <any>errmess);
        
  }

  async presentActionSheet(bookid: string, bookname: string, bookcurrentstatus: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions...',
      cssClass: 'my-custom-class',
      buttons: [
      {
        text: 'Lend or Make Available',
        icon: "../assets/icon/scan.svg",
        handler: () => {

          //*ngIf="(book.isReserved || book.isBorrowed) && !book.isAvailable"
          if (bookcurrentstatus === 'borrowed' || bookcurrentstatus === 'reserved') {
            this.scanToLendOrRelease(bookid);
          }
          else {
            this.alerManagement("Book needs to be in 'Borrowed' or 'Reserved' status to perform this action");
          }
         
        }
      }, {
        text: 'Enable for AR',
        icon: "../assets/icon/scan-circle.svg",
        handler: () => {
          this.arBookModal(bookid, bookname);
          console.log('AR clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

         
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {

          if (bookcurrentstatus === 'available') {
            this.checkDeleteConfirmation(bookid);
          }
          else {
            this.alerManagement("Book can be removed only when it is in 'Available' status");
          }
          
          
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




  loadMoreBooks(event) {
    setTimeout(() => {
    /*  this.bookList = this.books;
      const newBooks = [...this.bookList];
      this.books = this.bookList.concat(newBooks);*/
    }, 3000);
  }

  async helpModal() {

    const helpManageBooksModal = await this._modalController.create({
      component: ManagebookshelpPage
    });

    return helpManageBooksModal.present();
  }

  async addBookModal() {

    const addbookModal = await this._modalController.create({
      component: AddbookPage
    });
    
    return addbookModal.present();
  }

  async arBookModal(id: string, name: string) {

    const arbookModal = await this._modalController.create({
      component: ArbookPage,
      componentProps: {
        bookId: id,
        bookName: name
      }
    });

    return arbookModal.present();
  }



}
