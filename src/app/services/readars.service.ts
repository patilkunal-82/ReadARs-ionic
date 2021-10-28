import { Injectable, SecurityContext } from '@angular/core';
import { Book } from '../shared/book';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ReadarsService {

  reader = new FileReader();
  base64Data: any;
  bookIdImageMap = new Map();
  sanitizedURL: any;
  bookIds: string[] ;
  lbookIds: any[];
  errMess: string;
  public url: SafeResourceUrl;

  constructor(private http: HttpClient, public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService, private sanitizer: DomSanitizer) { }


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


    getRecommendedBooks(): Observable<Book[]> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'recommended?isRecommended=true')
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
      return this.http.put(baseURL + 'books/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 
                           'bookborrowed':book.bookborrowed, 'bookcurrentuser': book.bookcurrentuser,
                           'bookcurrentstatus': book.bookcurrentstatus, 'bookreserveddate': book.bookreserveddate})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    recommendBook(bookId: string, book: Book) {
      return this.http.put(baseURL + 'recommended/' + bookId, {'bookrecommend': book.bookrecommend})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    // this method gets the url to BLOB and creates an blob object for the image to be displayed
    /*getBookImage(bookId: string): Observable<SafeResourceUrl> {
      console.log('Inside book service getBook ' + bookId);
      return this.http.get(baseURL + 'imageUpload/' + bookId, {responseType: 'blob'})
        .pipe(
          map(x => {
             const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
             console.log(urlToBlob);
             return this.sanitizer.sanitize (
                   SecurityContext.RESOURCE_URL,
                   this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob));
                  
          }
        ),)
        .pipe(catchError(this.processHTTPMsgService.handleError));
       
    }*/

    // this method requests s3 bucket objects from the NodeJS and passes it on to the template to display s3 bucket image
    getAllImageObjects() {
      console.log("Inside readars service get all imageobjects");
      return this.http.get<any[]>(baseURL+'imageUpload/')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

  

    // this method requests s3 bucket url from the NodeJS and passes it on to the template to display s3 bucket image
    getBookImage(bookId: string) {
      console.log('Inside readars service getBookImage ' + bookId);
      return this.http.get(baseURL+'imageUpload/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    // works with s3 bucket
    deleteBookImage(id: string) {
      console.log('Inside readrs service deleteBook image ' + id);
      return this.http.delete(baseURL + 'imageUpload/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }





}
