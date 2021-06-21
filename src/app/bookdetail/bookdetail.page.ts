import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy, VERSION, SecurityContext } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Subscription } from 'rxjs';

import { Book } from '../shared/book';
import { Comment } from '../shared/comment';
import { AuthService } from '../services/auth.service';
import { BookdetailService } from '../services/bookdetail.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ModalController, Platform} from '@ionic/angular';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Location } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { File, FileEntry} from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Base64} from '@ionic-native/base64/ngx'
import { AlertController } from '@ionic/angular';

//import { VERSION} from '@angular/material';
//import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { BookvideoPage } from '../bookvideo/bookvideo.page';
import { ViewcommentsPage } from '../viewcomments/viewcomments.page';


import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { FavoriteService } from '../services/favorite.service';
import { ReservedService } from '../services/reserved.service';
import { AvailableService } from '../services/available.service';
import { BorrowedService } from '../services/borrowed.service';
import { RecommendService } from '../services/recommend.service';
import { QrcodeActivitiesPage } from '../qrcode-activities/qrcode-activities.page';
import { cordova } from '@ionic-native/core';
import { FilePath } from '@ionic-native/file-path/ngx';
import { isNgContainer } from '@angular/compiler';
import { QrcodeActivitiesPageModule } from '../qrcode-activities/qrcode-activities.module';
import { AddcommentPage } from '../addcomment/addcomment.page';
//import { read } from 'fs';

const STORAGE_KEY = 'qrcode_images';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.page.html',
  styleUrls: ['./bookdetail.page.scss'],
})
export class BookdetailPage implements OnInit {

  images = [];
  username: string = undefined;
  subscription: Subscription;

  qrData = null;
  createdCode: any;
  scannedData: any; 
  capturedImage: any;
  capturedImagePath: any;
  

  qrFormGroup: FormGroup;
  @ViewChild('qform') qrFormDirective;
  anyTextData = {anytext:''};

  book: Book;
  clientBook: Book;
  books: Book[];
  bookDetail: Observable<Book>;


  bookCopy: Book;


  bookIds: string[];
  lbookIds: string[];

  prev: string;
  next: string;

  comment: Comment;

  errMess: string;

  visibility = 'shown';
  showComments: boolean;
  addComments: boolean;

  favorite = false;
  reserved = false;
  available = false;
  borrowed = false;
  recommended = false;
  showQRButtonFlag = false;
  showCommentFlag = true;

  //version = VERSION;
  panelOpenState = false;

  public selectedFile;
  public uploadData;
  public dataReader = new FileReader();
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  public url: SafeResourceUrl;
  public urlQR: SafeResourceUrl;


  constructor(
    private _socialShare: SocialSharing,
    private _modalController: ModalController,
    bookdetailService: BookdetailService,
    activatedRoute: ActivatedRoute,
    private readarsService: ReadarsService,
    private reservedService: ReservedService,
    private route: ActivatedRoute,
    private router: Router,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    formBuilder: FormBuilder,
    private availableService: AvailableService,
    private borrowedService: BorrowedService,
    private sanitizer: DomSanitizer,
    private barCodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private file: File,
    private filePath: FilePath,
    private fileOpener: FileOpener,
    private base64: Base64,
    private webview: WebView,
    private authService: AuthService,
    private booksService: BooksService,
    private _alertController: AlertController,
    private favoriteService: FavoriteService,
    private recommendService: RecommendService
    //private plt: Platform,
    //private storage: Storage
   // private ref: ChangeDetectorRef,
    
    ) {
    /* const bookID = activatedRoute.snapshot.params["bookID"];
      console.log(bookID);
      //this.bookDetail = bookdetailService.getBook(bookID);
      this.bookDetail = readarsService.getBook(bookID);
      console.log("Book Details", this.bookDetail);*/
      /*this.commentFormGroup = formBuilder.group({
        comment: ["", [Validators.required]],
        rating: ["", [Validators.required]]
      });*/

      this.qrFormGroup = formBuilder.group({
        text: ["", [Validators.required]]
      })


    }

  ionViewWillEnter() {

    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });

  

    this.readarsService.getBookIds().subscribe(bookIds => {
      this.bookIds = bookIds;
      this.storeBookIds(this.bookIds);
    }, errmess => this.errMess = <any>errmess);
    this.lbookIds = this.loadBookIds();
    console.log("BookIds from getBookIds" + this.bookIds);
    console.log("BookIds from getBookIds" + this.bookIds);
    
     this.route.params.pipe(switchMap((params: Params) => {
       this.visibility = 'hidden';
       return this.readarsService.getBook(params['bookID']); }))
     .subscribe(book => {
       this.book = book;
       this.bookCopy = this.book;
       console.log("Book found for id:"+ this.book._id);
       this.setPrevNext(this.book._id);
       this.visibility = 'shown';
       if (this.bookCopy.comments.length == 0) {
         this.showCommentFlag = false;
       }

       this.favoriteService.isFavorite(this.book._id)
       .subscribe(resp => { console.log(resp); this.favorite = <boolean>resp.exists; },
           err => console.log(err));

       this.reservedService.isReserved(this.book._id)
       .subscribe(resp => { 
            console.log(resp); 
            this.reserved = <boolean>resp.exists; 
          },err => console.log(err));

        this.availableService.isAvailable(this.book._id)
        .subscribe(resp => { 
            console.log(resp); 
            this.available = <boolean>resp.exists; 
          }, err => console.log(err));

        this.borrowedService.isBorrowed(this.book._id)
        .subscribe(resp => {
            this.borrowed = <boolean>resp.exists;
        }, err => console.log(err));

        this.recommendService.isRecommended(this.book._id)
        .subscribe(resp => {
          this.recommended = <boolean>resp.exists;
      }, err => console.log(err));

        console.log("BOOK CURRENT USER", this.book.bookcurrentuser);
        console.log("CURRENT USER NAME", this.username);
        console.log("SHOWQRBUTTON FLAG", this.showQRButtonFlag)
        if (this.book.bookcurrentuser === this.username) {
          console.log("INSIDE IF CONDITION FOR CURRENT USER & CURRERNT USER")
          
          this.showQRButtonFlag = true;
          console.log("SHOWQRBUTTON FLAG", this.showQRButtonFlag)
        }


        /*this.readarsService.getBookImage(this.book._id)
        .subscribe(x => this.url = x);*/

     },
     errmess => this.errMess = <any>errmess);
    
  }

  ngOnInit() {
    //this.createForm();

    
    
   /* this.plt.ready().then(() => {
     this.loadStoredImages();
    })*/

  }

  /*loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {

      if(images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({name :img, path: resPath, filePath: filePath});
        }
      }
    });
  }*/

  refreshBookList(event) {
    setTimeout(() => {

      this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;
      }, errmess => this.errMess = <any>errmess);

      event.target.complete();

    }, 2000);
  }

  manageFavorites() {

    //you can remove favorite iff you were the ones who had posted it...

    if (!this.favorite) {
      this.favoriteService.postFavorite(this.book._id)
        .subscribe(favorites => { console.log(favorites); this.favorite = true; });
    }

    if (this.favorite) {



      this.favoriteService.deleteFavorite(this.book._id)
        .subscribe(favorites => { console.log(favorites); this.favorite = false; });
    }


  }

  

  setPrevNext(bookId: string) {

    console.log("Into setPreNext");

    this.lbookIds = this.loadBookIds();

    console.log("BookIds array" + this.lbookIds);
    console.log("BookIds array length" + this.lbookIds.length);
    console.log("Specifc BookId:" + bookId);
    //const index = this.bookIds.indexOf(bookId);
    const index = this.lbookIds.indexOf(bookId);


    console.log("Specific BookId after try catch" + bookId);
    //const index = this.bookIds.indexOf(bookId);
  /*  console.log("Array index" + index);
    this.prev = this.bookIds[(this.bookIds.length + index -1) % this.bookIds.length];
    this.next = this.bookIds[(this.bookIds.length + index +1 ) % this.bookIds.length];*/

    console.log("Array index" + index);
      this.prev = this.lbookIds[(this.lbookIds.length + index -1) % this.lbookIds.length];
      this.next = this.lbookIds[(this.lbookIds.length + index +1 ) % this.lbookIds.length];
      console.log("Previous", this.prev);
      console.log("Next", this.next);
  }



  goPrev(): void {
    this.router.navigateByUrl('/bookdetail/' + this.prev);
  }

  goNext(): void {
    this.router.navigateByUrl('/bookdetail/' + this.next);
  }

  goBack(): void {
    //this.location.back();
    this.router.navigateByUrl('/tab1');
  }

  onValueChanged(data?: any) {
  /*if (!this.commentFormGroup) { return; }
    const form = this.commentFormGroup;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }*/
  }

  /*addToFavorites() {
    if (!this.favorite) {
      this.favoriteService.postFavorite(this.dish._id)
        .subscribe(favorites => { console.log(favorites); this.favorite = true; });
    }
  }*/

  displayComments() {
    if (this.book.comments.length != 0) {
      this.showComments = true;
    }

    
  }

 

  async reserveBook() {

    console.log("inside reserveBook of BookdetailComponent.ts");
    
    const alert = await this._alertController.create({
      header: "Book is reserved for you",
      message: "Collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !",
    });
    alert.present();
    
    //alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !");
    this.book.bookavailable = false;
    this.book.bookreserved = true;
    this.book.bookborrowed = false;
    this.book.bookcurrentuser = this.username;
    this.book.bookcurrentstatus = 'reserved';
    this.readarsService.reserveBook(this.book._id, this.book)
      .subscribe(book => { 
        console.log(book); 
        this.reserved = true;
        this.createQRcode();
      });
    this.ngOnInit();
  }

  async recommendBook() {

    const alert = await this._alertController.create({
      header: "Thank You",
      message: "Your recommendation will now be posted..",
    });
    alert.present();

    console.log("inside recommendBook of BookdetailComponent.ts");
    this.book.bookrecommend = true;
    this.readarsService.recommendBook(this.book._id, this.book)
      .subscribe(book => { 
        console.log(book); 
        //this.recommend = true;
        
      });
    

  }

  createQRcode() {

    this.qrData = this.book._id + this.book.bookowner.username + this.username;
    console.log("QR data", this.qrData);
    this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE, this.qrData )
    .then(qrCode => {
      console.log(qrCode);
      this.createdCode = qrCode;
      let imagePath = this.createdCode["file"];
      console.log(imagePath);
      let imageName = imagePath.substring(imagePath.lastIndexOf('/')+1);
      console.log(imageName);
      // get resolvedPath i.e. the one compatible with web view plugin
      let resolvedPath = this.pathForImage(imagePath);
      console.log(resolvedPath);
      this.capturedImagePath = resolvedPath;
      this.uploadQRCode(imagePath);
      /*this.booksService.getBookQRImage(this.book._id)
      .subscribe(x => {
          this.url = x;
          console.log("this.url", this.url);
          //this.bookIdImageMap.set(this.lbookIds[i], this.url);
          //console.log("book image map", this.bookIdImageMap);
      }, errMess => console.log(errMess));*/      
    }, (err) => {
      console.log('Error occured : ' + err);
    });
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

  async contactOwner() {
    const alert = await this._alertController.create({
      header: "Choose your option",
      message: "Contact the book owner",
      buttons: [
        {
          text: "Call",
          handler: ()=> {
            this.callOwner();
            //this.closeModal();
          }
        },
        {
          text: "Email",
          handler: ()=> {
            this.emailOwner();
          }
        }
      ]
    });

    alert.present();
  }

  emailOwner() {
    let email = {
      to: this.book.bookowner.email,
      isHtml: true
      };

    this.emailComposer.open(email);
  }

  callOwner() {
    this.callNumber.callNumber(this.book.bookownertelnum, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  

  showServerQRcode() {
    /*this.booksService.getBookQRImage(this.book._id)
      .subscribe(x => {
          this.urlQR = x;
          console.log("this.url", this.urlQR);
          //this.bookIdImageMap.set(this.lbookIds[i], this.url);
          //console.log("book image map", this.bookIdImageMap);
      }, errMess => console.log(errMess));*/

      this.openQRModal(this.book._id, this.book.bookname);
  }

  deleteServerQRcode() {

    this.booksService.deleteQRBookImage(this.book._id,"")
    .subscribe(resp => console.log(resp), errmess => this.errMess = <any>errmess);

  }

  /*copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
      this.updateStoredImages(newFileName);
    }, error => {
      console.log("Error while storing file");
    });
  }*/

  /*updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if(!arr) {
        let newImages = [name]
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
      console.log("inside update storred images");
      console.log(filePath);
      console.log(resPath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, this.images];
      console.log(this.images);
     // this.ref.detectChanges();
    });
  }*/

  // converts imagePath to a URL e.g. ionic://localhost/... 
  //that is compatible with local web server in Web View plugin
  
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      
      return converted;
    }
  }

  createFileName() {
    let newFileName = this.book._id + "_" + this.book.bookowner.username + "_" + this.username + ".jpg";
    return newFileName;
  }

  uploadQRCode(qrImgEntryPath) {
    console.log("inside uploadQRcode");
    console.log(qrImgEntryPath);
    
    //this.readFile(qrImgEntryPath);
   let urltoResolve = "file://" + qrImgEntryPath; 
   this.file.resolveLocalFilesystemUrl(urltoResolve)
    .then(entry => {
      console.log("inside resolveLocalFilesystemUrl then block, urlToresolve = ", urltoResolve);
      //console.log((<FileEntry>entry).fullPath);
      (<FileEntry>entry).file(file => this.readFile(file));
    })
    .catch(err => {
      console.log("Error while reading file in the function uploadQRCode");
    })
  }

  readFile(file: any) {
    console.log("inside readFile");
    const reader = new FileReader();
    console.log("file type", file.type);
    console.log("file name", file.name);
    reader.onloadend = () => {
      this.uploadData = new FormData();
      if (reader.result) {
          const imgBlob = new Blob([reader.result], {type: file.type});
          console.log("image blob", imgBlob)
          console.log("newly created filename", this.createFileName());
          this.uploadData.append('qrImageFile', imgBlob, this.createFileName());
          console.log(this.uploadData);

          this.booksService.uploadQRImage(this.book._id, this.uploadData)
                  .subscribe(res => {
                      console.log(res);
                      this.receivedImageData = res;
                      this.base64Data = this.receivedImageData.pic;
                      this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                    });

      }  
    };
    reader.readAsArrayBuffer(file);
  }

  scanBarcode() {
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
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  share(){
  /*  this.bookDetail.subscribe((book)=> {
      this._socialShare.share("Look What I Found On This App Called ReadARs", book.name, "", book.cropped);
    });*/

  }

  addComment() {

    this.addComments = true;
    this.showComments = true;
    

}

  async openAddCommentModal() {

     const addcommentModal = await this._modalController.create({
      component: AddcommentPage,
      componentProps: {
        bookId: this.book._id
      }
    });
    return addcommentModal.present();


  }

  async openViewcommentsModal() {

    
    const viewcommentsModal = await this._modalController.create({
      component: ViewcommentsPage,
      componentProps: { 
       bookComments: this.bookCopy
      }
    });
    return viewcommentsModal.present();
  }


  async openModal(){

    /*const videoModal = await this._modalController.create({
      component: BookvideoPage
    });

  return await this.bookDetail.subscribe((book)=> {
      videoModal.componentProps = {
        videoURL: book.video_url
      };

      return videoModal.present();
    }); */

  }

  async openQRModal(id: string, name: string )  {

    const qrModal =   await this._modalController.create({
       component: QrcodeActivitiesPage,
       componentProps: { 
        bookId: id,
        bookName: name
      }
    });

    return await qrModal.present();
    }

}
