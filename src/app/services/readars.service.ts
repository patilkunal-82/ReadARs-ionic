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
export class ReadarsService {

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

    getBooks(): Observable<Book[]> {
     if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'books')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getBook(id: string): Observable<Book> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book>(baseURL + 'books/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getFeaturedBook(): Observable<Book> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'books?featured=true').pipe(map(books => books[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getReservedBooks(): Observable<Book> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'books?isReserved=true').pipe(map(books => books[0]))
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getBookIds(): Observable<number[] | any> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.getBooks().pipe(map(books => books.map(book => book._id)))
        .pipe(catchError(error => error));
    }

    postComment(bookId: string, comment: any) {

      return this.http.post(baseURL + 'books/' + bookId + '/comments', comment)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    deleteBook(bookId: string) {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.delete(baseURL + 'books/' + bookId)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    reserveBook(bookId: string, book: Book) {

      return this.http.put(baseURL + 'books/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 'bookborrowed':book.bookborrowed})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }



}
