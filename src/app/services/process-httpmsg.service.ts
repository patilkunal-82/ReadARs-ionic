import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    console.log("inside http error handler");
    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
    //errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;

    if (`${error.status}` == '409') {
        console.log("inside 409");
        errMsg = 'Conflict - User already exists';

     }
    else if (`${error.status}` == '401') {
        console.log("inside 401");
         errMsg = 'Incorrect login. Please re-enter Username or Password or both';
         console.log(errMsg);
      }
    else if (`${error.status}` == '403') {
        console.log("inside 403");
         errMsg = 'You are not authorized to perform this operation';

      }
    else if (`${error.status}` == '404') {
        console.log("inside 404");
         errMsg = 'Requested resource could not be found';

      }
    else if (`${error.status}` == '500') {
          console.log("inside 500");
          errMsg = 'Sorry for your inconvenience. Please try again later!';
      }
    else if (`${error.status}` == '0') {
            console.log("inside 0");
            errMsg = 'Site is closed for maintennce. Please try again later!';
      }
    else {
       console.log("inside else");
       errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
     }
    }
    console.log("above return throw err message");
    console.log(errMsg);
    return throwError(errMsg);
  }

    //console.log("after handle error method");

}
