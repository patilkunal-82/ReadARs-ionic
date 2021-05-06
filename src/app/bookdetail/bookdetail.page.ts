import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { Comment } from '../shared/comment';
import { BookdetailService } from '../services/bookdetail.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Location } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { VERSION} from '@angular/material';
//import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { BookvideoPage } from '../bookvideo/bookvideo.page';
import { ViewcommentsPage } from '../viewcomments/viewcomments.page';


import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { FavoriteService } from '../services/favorite.service';
import { ReservedService } from '../services/reserved.service';
import { AvailableService } from '../services/available.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.page.html',
  styleUrls: ['./bookdetail.page.scss'],
})
export class BookdetailPage implements OnInit {


  commentFormGroup: FormGroup;
  @ViewChild('cform') commentFormDirective;
  commentData = {comment: '', rating: ''};

  book: Book;
  clientBook: Book;
  books: Book[];
  bookDetail: Observable<Book>;


  bookcopy: Book;


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

  //version = VERSION;
  panelOpenState = false;



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
    private availableService: AvailableService
    ) {
    /* const bookID = activatedRoute.snapshot.params["bookID"];
      console.log(bookID);
      //this.bookDetail = bookdetailService.getBook(bookID);
      this.bookDetail = readarsService.getBook(bookID);
      console.log("Book Details", this.bookDetail);*/
      this.commentFormGroup = formBuilder.group({
        comment: ["", [Validators.required]],
        rating: ["", [Validators.required]]
      });

    }

  ngOnInit() {
    //this.createForm();
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
       console.log("Book found for id:"+ this.book._id);
       this.setPrevNext(this.book._id);
       this.visibility = 'shown';

       /*this.favoriteService.isFavorite(this.dish._id)
       .subscribe(resp => { console.log(resp); this.favorite = <boolean>resp.exists; },
           err => console.log(err));*/
       this.reservedService.isReserved(this.book._id)
       .subscribe(resp => { console.log(resp); this.reserved = <boolean>resp.exists; },
           err => console.log(err));

        this.availableService.isAvailable(this.book._id)
        .subscribe(resp => { console.log(resp); this.available = <boolean>resp.exists; },
           err => console.log(err));

     },
     errmess => this.errMess = <any>errmess);
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

/*  createForm() {
    this.commentFormGroup = this.formBuilder.group({
      rating: '5',
      comment: ['', Validators.required]
    });

    this.commentFormGroup.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }*/

  onSubmit() {

    this.commentData = this.commentFormGroup.value;
    console.log("Comment", this.commentData.comment);
    console.log("Rating", this.commentData.rating);
    /*this.dishservice.postComment(this.dish._id, this.commentForm.value)
      .subscribe(dish => this.dish = <Dish>dish);
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      rating: 5,
      comment: ''
    });*/
    this.readarsService.postComment(this.book._id, this.commentFormGroup.value)
      .subscribe(book => this.book = <Book>book);
    this.commentFormDirective.resetForm();
    this.commentFormGroup.reset({
      rating: '1',
      comment: ''
    });
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

  addComment() {

      this.addComments = true;
  }

  reserveBook() {
    console.log("inside reserveBook of BookdetailComponent.ts");
    alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !");
    this.book.bookavailable = false;
    this.book.bookreserved = true;
    this.book.bookborrowed = false;
    this.readarsService.reserveBook(this.book._id, this.book)
      .subscribe(book => { console.log(book); this.reserved = true;});

    this.ngOnInit();

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

  share(){
  /*  this.bookDetail.subscribe((book)=> {
      this._socialShare.share("Look What I Found On This App Called ReadARs", book.name, "", book.cropped);
    });*/

  }

  async openViewcommentsModal() {

    const viewcommentsModal = await this._modalController.create({
      component: ViewcommentsPage
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

}
