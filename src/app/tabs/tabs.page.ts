
import { Component, OnInit, Inject, AfterViewInit, ViewChild, Directive, HostBinding, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookdetailService } from '../services/bookdetail.service';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';
import { ReadarsService } from '../services/readars.service';
import { Router } from '@angular/router';
import { baseURL } from '../shared/baseurl';




@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, AfterViewInit {

  books: Book[];
  errMess: string;
  username: string;

  
  @HostListener('touchstart')
    onTouchStart() {
     this.restartIdleLogoutTimer();
  }

  idleLogoutTimer;
  

  constructor(private authService: AuthService, private booksService: BooksService,
    private readarsService: ReadarsService,
    @Inject('baseURL') private baseURL, private router: Router){

      /*this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;

      }, errmess => this.errMess = <any>errmess);*/

  }

  ngOnInit() {
    //this.showForm = false;
     // this.restartIdleLogoutTimer();
      
     /* this.readarsService.getBooks()
      .subscribe(books => {
        this.books = books;

      }, errmess => this.errMess = <any>errmess);*/

    

  }

  ngAfterViewInit() {

  }

  restartIdleLogoutTimer() {
    clearTimeout(this.idleLogoutTimer);
    this.idleLogoutTimer = setTimeout(()=>{
      this.logOut();
    },1800000);
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
    console.log("After authservice logout");
    this.router.navigateByUrl('/login');

  }

}
