import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient, public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


  /*  addBook(addbook: Book): Observable<Book> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      return this.http.post<Book>(baseURL + 'books/', addbook, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

    }*/

    addBook(addbook: Book) {
      console.log(addbook);
      return this.http.post(baseURL + 'mybooks/', addbook)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(baseURL + 'mybooks')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }



    getBook(id: string): Observable<Book> {
      console.log('Inside book service getBook ' + id);
      return this.http.get<Book>(baseURL + 'mybooks/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getFeaturedBook(): Observable<Book> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'mybooks?featured=true').pipe(map(books => books[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getBookIds(): Observable<number[] | any> {
      return this.getBooks().pipe(map(books => books.map(book => book._id)))
        .pipe(catchError(error => error));
    }

    postComment(bookId: string, comment: any) {

      return this.http.post(baseURL + 'mybooks/' + bookId + '/comments', comment)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    /*postComment(dishId: string, comment: any) {
      return this.http.post(baseURL + 'dishes/' + dishId + '/comments', comment)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }*/


    deleteBook(bookId: string) {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.delete(baseURL + 'mybooks/' + bookId)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    lendBook(bookId: string, book: Book) {
      console.log('inside Book Service lend book ' + bookId);
      return this.http.put(baseURL + 'mybooks/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 'bookborrowed': book.bookborrowed})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    releaseBook(bookId: string, book: Book) {
      console.log('inside Book Service release book ' + bookId);
      return this.http.put(baseURL + 'mybooks/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 'bookborrowed': book.bookborrowed})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }





}

//////
