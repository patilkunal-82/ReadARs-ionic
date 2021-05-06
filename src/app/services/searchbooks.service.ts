import { Injectable } from '@angular/core';
import { ReadarsService } from '../services/readars.service';
import { Book } from '../shared/book';


@Injectable({
  providedIn: "root"
})
export class SearchedData {

    public items: any = [];
    errMess: string 


    constructor(private readarsService: ReadarsService) {
      this.readarsService.getBooks()
      .subscribe(books => {
        this.items = books;

      }, errmess => this.errMess = <any>errmess);
    }

    filterItems(searchTerm) {

       console.log("Search Term is", searchTerm);
       return this.items.filter(item => {

            if(item.bookname.search(searchTerm) == -1) {
              console.log("not in bookname ");

            }
            else {
                return item.bookname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
            if(item.booklanguage.search(searchTerm) == -1) {
              console.log("not in booklanguage ");

            }
            else {
                return item.booklanguage.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
            if(item.bookauthor.search(searchTerm) == -1) {
              console.log("not in booklanguage ");

            }
            else {
                return item.bookauthor.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }

        });

    }

}
