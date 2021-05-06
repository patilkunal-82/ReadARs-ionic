import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

import { Favorite } from '../shared/favorite';
import { ReservedExists } from '../shared/reservedExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservedService {


  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getReservedBooks(): Observable<Book[]> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'reserved?isReserved=true')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    isReserved(id: string): Observable<ReservedExists> {
      if (!this.auth.isLoggedIn()) {
        return of({ exists: false, book: null });
      }
      return this.http.get<ReservedExists>(baseURL + 'reserved/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }


}
