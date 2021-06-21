

import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

//import { Favorite } from '../shared/favorite';
import { RecommendExists } from '../shared/recommendExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  isRecommended(id: string): Observable<RecommendExists> {
    if (!this.auth.isLoggedIn()) {
      return of({ exists: false, book: null });
    }
    return this.http.get<RecommendExists>(baseURL + 'recommended/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}
