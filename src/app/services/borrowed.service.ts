
import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

import { Favorite } from '../shared/favorite';
import { BorrowedExists } from '../shared/borrowedExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BorrowedService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  isBorrowed(id: string): Observable<BorrowedExists> {
    if (!this.auth.isLoggedIn()) {
      return of({ exists: false, book: null });
    }
    return this.http.get<BorrowedExists>(baseURL + 'borrowed/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
