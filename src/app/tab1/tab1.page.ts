import { Component, OnInit, Inject, AfterViewInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})

export class Tab1Page implements OnInit, AfterViewInit {

  books: Book[];
  bookList: Book[];
  errMess: string;
  username: string;

  public items: any;
  public searchTerm : string = "";
  public searchControl: FormControl;


  constructor(public navCtrl: NavController, private authService: AuthService, private booksService: BooksService,
    private readarsService: ReadarsService,
  @Inject('baseURL') private baseURL, private router: Router, private searchedData: SearchedData){
    this.searchControl = new FormControl();
  }
  ngOnInit() {
    //this.showForm = false;
      this.setFilteredItems();

      this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;

      }, errmess => this.errMess = <any>errmess);


    /*  this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
      });*/
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
