

import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

//import { Favorite } from '../shared/favorite';
import { AvailableExists } from '../shared/availableExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getAvailableBooks(): Observable<Book[]> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'available?isAvailable=true')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

  isAvailable(id: string): Observable<AvailableExists> {
    if (!this.auth.isLoggedIn()) {
      return of({ exists: false, book: null });
    }
    return this.http.get<AvailableExists>(baseURL + 'available/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
