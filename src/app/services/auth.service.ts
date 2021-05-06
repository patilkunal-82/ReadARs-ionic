import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;

   constructor(private http: HttpClient,
     private processHTTPMsgService: ProcessHTTPMsgService) {
   }

   checkJWTtoken() {
     this.http.get<JWTResponse>(baseURL + 'users/checkJWTToken')
     .subscribe(res => {
       console.log('JWT Token Valid: ', res);
       this.sendUsername(res.user.username);
     },
     err => {
       console.log('JWT Token invalid: ', err);
       this.destroyUserCredentials();
     });
   }

   sendUsername(name: string) {
     console.log('inside sendUsername ',name);
     console.log('before this.username next ',this.username);
     this.username.next(name);
     console.log('after this.username next ',this.username);
   }

   clearUsername() {
     this.username.next(undefined);
   }

   loadUserCredentials() {

     const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
     console.log('loadUserCredentials ', credentials);
     if (credentials && credentials.username !== undefined) {
       this.useCredentials(credentials);
       if (this.authToken) {
        console.log("inside load user credentials if this.authToken", this.authToken);
        console.log('next step is checkJWTToken ');
        this.checkJWTtoken();
       }
     }
   }

   storeUserCredentials(credentials: any) {
     console.log('storeUserCredentials ', credentials);
     localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
     this.useCredentials(credentials);
   }

   useCredentials(credentials: any) {
     console.log('inside useCredentials ', credentials);
     this.isAuthenticated = true;
     this.sendUsername(credentials.username);
     this.authToken = credentials.token;
     console.log("inside useCredentials authtoken", this.authToken);
     console.log("inside useCredentials username", this.username);
   }

   destroyUserCredentials() {
     this.authToken = undefined;
     this.clearUsername();
     this.isAuthenticated = false;
     localStorage.removeItem(this.tokenKey);
     console.log("AuthToken", this.authToken);
     console.log("Is Authenticated ?", this.isAuthenticated.toString());

   }

   signUp(newuser: any): Observable<any> {
     return this.http.post<AuthResponse>(baseURL + 'users/signup',
       {'firstname': newuser.firstname, 'lastname': newuser.lastname,'username': newuser.username, 'password': newuser.password, 'email': newuser.email})
       .pipe(map(res => {
           this.storeUserCredentials({username: newuser.username, token: res.token});
           return {'success': true, 'username': newuser.username, 'email':newuser.email };
       }),
        catchError(error => this.processHTTPMsgService.handleError(error)));

   }

   logIn(user: any): Observable<any> {
     return this.http.post<AuthResponse>(baseURL + 'users/login',
       {'username': user.username, 'password': user.password})
       .pipe( map(res => {
           this.storeUserCredentials({username: user.username, token: res.token});
           return {'success': true, 'username': user.username };
       }),
        catchError(error => this.processHTTPMsgService.handleError(error)));
   }

   logOut() {
     this.destroyUserCredentials();
     localStorage.removeItem('bookIds');
   }

   isLoggedIn(): Boolean {
     return this.isAuthenticated;
   }

   getUsername(): Observable<string> {
     return this.username.asObservable();
   }

   getToken(): string {
     return this.authToken;
   }

}
