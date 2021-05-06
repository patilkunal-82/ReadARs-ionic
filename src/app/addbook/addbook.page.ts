import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';


import { Book, BookLanguage } from '../shared/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.page.html',
  styleUrls: ['./addbook.page.scss'],
})
export class AddbookPage implements OnInit {

  addBookFormGroup: FormGroup;
  @ViewChild('fform') addbookDetailsFormDirective;

  errMess: string;

  book: Book;
  addbook: Book;
  removebook: Book;
  books: Book[];

  booklanguage = BookLanguage;

  submitted = null;
  showForm = true;

  borrowed: boolean;
  reserved: boolean;
  available: boolean;
  panelOpenState = false;




  formErrors = {
    'bookname': '',
    'booklanguage': '',
    'bookowneraddress':'',
    'bookdescription':'',
    'bookownertelnum':'',
    'bookrating':'',
    'bookauthor':''
  };

  validationMessages = {
    'bookname': {
      'required':      'Book Name is required.',
      'minlength':     'Book Name must be at least 1 character long.',
      'maxlength':     'BookName cannot be more than 40 characters long.'
    },
    'booklanguage': {
      'required':      'Book Language is required.',
      'minlength':     'Book Language must be at least 2 characters long.',
      'maxlength':     'Book Language cannot be more than 25 characters long.'
    },
    'bookowneraddress': {
      'required':      'Address is required.',
    },
    'bookownertelnum': {
      'required':      'Contact number is required.',
      'pattern':       'Contact number must contain only numbers.'
    },
    'booauthor': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 1 character long.',
      'maxlength':     'Author Name cannot be more than 40 characters long.'
    }
  };





  constructor(private _modalController: ModalController,
              private booksService: BooksService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.createForm();
    this.booksService.getBooks()
      .subscribe(books => {
          this.books = books;
      }, errmess => this.errMess = <any>errmess);


  }

  createForm() {
        this.addBookFormGroup = this.fb.group({
          bookname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)] ],
          booklanguage: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          bookowneraddress: ['', [Validators.required]],
          bookdescription: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)] ],
          bookownertelnum:['', [Validators.required, Validators.pattern] ],
          bookrating: '5',
          bookauthor: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)] ]
        });
        this.addBookFormGroup.valueChanges
        .subscribe(data => this.onValueChanged(data));

        //this.onValueChanged(); // (re)set validation messages now
      }

      onValueChanged(data?: any) {
        if (!this.addBookFormGroup) { return; }
        const form = this.addBookFormGroup;
        for (const field in this.formErrors) {
          if (this.formErrors.hasOwnProperty(field)) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
              const messages = this.validationMessages[field];
              for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                  this.formErrors[field] += messages[key] + ' ';
                }
              }
            }
          }
        }
      }

      onSubmit() {
        this.addbook = this.addBookFormGroup.value;
      //  this.feedback = this.bookDetailsForm.value;
        console.log(this.addbook);
        this.showForm = false;

        this.booksService.addBook(this.addbook)
        .subscribe(addbook => {
          console.log("response received");
          this.submitted = addbook;
          console.log(this.submitted);
          this.addbook = null;
          setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
        },
        error => console.log(error.status, error.message));

        this.addBookFormGroup.reset({
          bookname: '',
          booklanguage: '',
          bookowneraddress: '',
          bookdescription:'',
          bookownertelnum:'',
          bookrating: '5'
        });
        this.addbookDetailsFormDirective.resetForm();

        this.ngOnInit();

        
    }



  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
