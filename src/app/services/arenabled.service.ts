import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

import { Favorite } from '../shared/favorite';
import { ARenabledExists } from '../shared/arenabledExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ARenabledService {


  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getARenabledBooks(): Observable<Book[]> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Book[]>(baseURL + 'arenabled?isARenabled=true')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    isARenabled(id: string): Observable<ARenabledExists> {
      if (!this.auth.isLoggedIn()) {
        return of({ exists: false, book: null });
      }
      return this.http.get<ARenabledExists>(baseURL + 'arenabled/' + id)
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }


}
