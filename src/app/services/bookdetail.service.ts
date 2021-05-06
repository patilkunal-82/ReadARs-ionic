import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookdetailService {

  constructor(private _httpClient: HttpClient) { }

  getBook(bookID: string): Observable<Book>{
    return this._httpClient.get<Book>(API + "/id/" + bookID);
  }

  getAllBooks(): Observable<Book[]>{
    return this._httpClient.get<Book[]>(API);
  }
}

const API = "https://orangevalleycaa.org/api/videos";
