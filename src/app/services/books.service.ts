import { Injectable, SecurityContext } from '@angular/core';
import { Book } from '../shared/book';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';



import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  constructor(private http: HttpClient, public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private sanitizer: DomSanitizer) { }


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
      console.log("INSIDE BOOKS SERVICE  ADD BOOK");
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
      return this.http.put(baseURL + 'mybooks/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 
                                                            'bookborrowed': book.bookborrowed, 'bookcurrentuser': book.bookcurrentuser,
                                                            'bookcurrentstatus': book.bookcurrentstatus})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    releaseBook(bookId: string, book: Book) {
      console.log(book.bookcurrentuser);
      console.log('inside Book Service release book ' + bookId);
      return this.http.put(baseURL + 'mybooks/' + bookId, {'bookavailable': book.bookavailable, 'bookreserved': book.bookreserved, 
                                                           'bookborrowed': book.bookborrowed, 'bookcurrentuser': book.bookcurrentuser,
                                                           'bookcurrentstatus': book.bookcurrentstatus})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    uploadImage(bookId: string, imageData: any) {
      console.log('inside Book Service : upload Image book id', bookId);
      console.log('inside Book Service : imageData', imageData);
      return this.http.post(baseURL + 'imageUpload/' + bookId, imageData)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    uploadQRImage(bookId: string, imageData: any) {
      console.log('inside Book Service : upload QR Image book id', bookId);
      console.log('inside Book Service : QR imageData', imageData);
      return this.http.post(baseURL + 'qrImageUpload/' + bookId, imageData)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    uploadAnchorContentAndPlist(bookId: string, data: any, flag: boolean) {
      console.log('inside Book Service : upload XML... book id', bookId);
      console.log('inside Book Service : XML Data', data);
      console.log('flag', flag);
      if (flag) {
        return this.http.put(baseURL + 'arrouter/' + bookId, data)
        .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
      }
      else {
        return this.http.post(baseURL + 'arrouter/' + bookId, data)
        .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
      }
     
    }

    uploadMyProfileImage(myname: string, imageData: any) { 
      console.log('inside Book Service : upload my profile image, i am -> ', myname);
      console.log('upload my profile image : imageData', imageData);
      return this.http.post(baseURL + 'profilepic/' + myname, imageData)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));

    }

   /* uploadMarkerImage(bookID: string, imageData: any) {

      console.log('inside Book Service : upload my marker image for bookId ', bookID);
      console.log('upload my marker image : imageData', imageData);

      return this.http.post(baseURL + 'armarkerrouter/' + bookID, imageData)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));

    }*/

    /*getMarkerImages(bookId: string) {
      console.log('Inside book service getBook ' + bookId);
      return this.http.get<any[]>(baseURL+'armarkerrouter/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getAnchorAndContent(bookId: string) {
      console.log('Inside book service getBook ' + bookId);
      return this.http.get<any[]>(baseURL+'armarkerrouter/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }*/

    getBookPlistXml(bookId: string) {
      console.log('Inside book service getBookPlistXml' + bookId);
      return this.http.get(baseURL+'arrouter/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

  

    // this method gets the url to BLOB and creates an blob object for the image to be displayed
    /*getBookImage(id: string): Observable<SafeResourceUrl> {
      console.log('Inside book service getBook ' + id);
      return this.http.get(baseURL + 'imageUpload/' + id, { responseType: 'blob' })
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

     // this method requests s3 bucket url from the NodeJS and passes it on to the template to display s3 bucket image
     getBookImage(bookId: string) {
      console.log('Inside book service getBook ' + bookId);
      return this.http.get(baseURL+'imageUpload/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getMyProfileImage(myname: string) {
      console.log('Inside book service getMyProfileImage' + myname);
      return this.http.get(baseURL+'profilepic/'+ myname)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    //this method gets the url to BLOB and creates an blob object for the image to be displayed
    /*getBookQRImage(id: string): Observable<SafeResourceUrl> {
      console.log('Inside book service getBookQRImage ', id);
      return this.http.get(baseURL + 'qrImageUpload/' + id, {responseType: 'blob'})
        .pipe(
          map(x => {
             const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
             console.log(urlToBlob);
             return this.sanitizer.sanitize (
                    SecurityContext.RESOURCE_URL,
                    this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob));
          }),)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }*/

     // this method requests s3 bucket url from the NodeJS and passes it on to the template to display s3 bucket image
     getBookQRImage(bookId: string) {
      console.log('Inside book service getBookQRImage ' + bookId);
      return this.http.get(baseURL+'qrImageUpload/'+ bookId)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }


    deleteBookImage(id: string) {
      console.log('Inside book service deleteBookImage ' + id);
      return this.http.delete(baseURL + 'imageUpload/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }

    deleteQRBookImage(id: string, currentUser: string) {
      console.log('Inside book service deleteBookQRImage - BookID ', id);
      console.log('Inside book service deleteBookQRImage - BookCurrent user ', currentUser);


     return this.http.put(baseURL + 'qrImageUpload/' + id, {'bookcurrentuser': currentUser})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));



    }



  /*  postComment(bookId: string, comment: any) {

      return this.http.post(baseURL + 'books/' + bookId + '/comments', comment)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }*/





}

//////
