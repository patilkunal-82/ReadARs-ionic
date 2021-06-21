import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';


import { Observable } from 'rxjs';

import { Book, BookLanguage, BookGenre } from '../shared/book';
import { Image } from '../shared/image';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';

import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";

import { analyzeAndValidateNgModules } from '@angular/compiler';

import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry} from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
//import { Storage } from '@ionic/storage';
//const STORAGE_KEY = 'book_images';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.page.html',
  styleUrls: ['./addbook.page.scss'],
})
export class AddbookPage implements OnInit {


 
  public selectedFile;
  public uploadData;
  public dataReader = new FileReader();
  public event1;
  imgURL: any;
  receivedImageData: any;
  capturedImage: any;
  base64Data: any;
  convertedImage: any;
  newbookID: string;
  i: number;
  image;
  imageData;


  addBookFormGroup: FormGroup;
  @ViewChild('fform') addbookDetailsFormDirective;
  
  bookCoverImage: any;
 
  
  errMess: string;

  book: Book;
  addbook: Book;
  newbook: Book;
  removebook: Book;
  books: Book[];
  images = [];

  booklanguage = BookLanguage;
  bookgenre = BookGenre;

  submitted = null;
  showForm = true;

  borrowed: boolean;
  reserved: boolean;
  available: boolean;
  panelOpenState = false;

  username: string = undefined;
  subscription: Subscription;

  


  formErrors = {
    'bookname': '',
    'booklanguage': '',
    'bookgenre': '',
    'bookowneraddress':'',
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
    'bookgenre': {
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
              private _alertController: AlertController,
              private booksService: BooksService,
              private fb: FormBuilder,
              private _camera: Camera,
              private _webview: WebView,
              private file: File,
              private plt: Platform,
              private filePath: FilePath,
              private authService: AuthService,
              //private storage: Storage,
              private webview: WebView,
              //private ref: ChangeDetectorRef,
              
              ) { }

  ngOnInit() {

    this.createForm();
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });
    this.booksService.getBooks()
      .subscribe(books => {
          this.books = books;
      }, errmess => this.errMess = <any>errmess);

      const button = document.querySelector('ion-button');
      button.addEventListener('click', this.onSubmit);
  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log("Event", event);
    console.log("Event target files", event.target.files);
    console.log("selected file contnets", this.selectedFile);
    console.log("selected file name", this.selectedFile.name);
    // Below part is used to display the selected image
    //let reader = new FileReader();
    //reader.readAsDataURL(event.target.files[0]);
    //reader.onload = (event2) => {
      //this.imgURL = reader.result;
      //this.bookCoverImage = reader.result;
    //};

  this.uploadData = new FormData();
  this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
  this.dataReader.readAsArrayBuffer(event.target.files[0]);

 }

  createForm() {
        this.addBookFormGroup = this.fb.group({
          bookname: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)] ],
          booklanguage: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          bookgenre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          bookowneraddress: ['', [Validators.required]],
          bookownertelnum:['', [Validators.required, Validators.pattern] ],
          bookrating: '5',
          bookauthor: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)] ],
          bookcoverimage: ''
          
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

      async onSubmit() {

      
        const alert = await this._alertController.create({
          header: "Add Book",
          message: "Select your option..",
          buttons: [
            {
              text: "Add this",
              handler: ()=> {
                this.addbook = this.addBookFormGroup.value;
                this.addbook.bookcurrentstatus = 'available';
                
                console.log(this.addbook);
                this.showForm = false;

                this.booksService.addBook(this.addbook)
                .subscribe(addbook => {
                  console.log("response received-BOOK ADDED");
                  this.submitted = addbook;

                  this.booksService.uploadImage(this.submitted._id, this.uploadData)
                  .subscribe(res => {
                      console.log(res);
                      this.receivedImageData = res;
                      this.base64Data = this.receivedImageData.pic;
                      this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                    });

                  this.addbook = null;
                  setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
                },
                error => console.log(error.status, error.message));
                
                this.addBookFormGroup.reset({
                  bookname: '',
                  booklanguage: '',
                  bookgenre: '',
                  bookowneraddress: '',
                  bookownertelnum:'',
                  bookrating: '5',
                  bookcoverimage: ''
                });
                this.capturedImage = undefined;
                this.addbookDetailsFormDirective.resetForm();

                //this.ngOnInit();
                this.closeModal();

              }
            },
            {
              text: "Add this & 1 more",
              handler: ()=> {

                this.addbook = this.addBookFormGroup.value;
                this.addbook.bookcurrentstatus = 'available';
                
              //  this.feedback = this.bookDetailsForm.value;
                console.log(this.addbook);
                this.showForm = false;

              this.booksService.addBook(this.addbook)
                .subscribe(addbook => {
                  console.log("response received");
                  this.submitted = addbook;
                  console.log(this.submitted);

                  this.booksService.uploadImage(this.submitted._id, this.uploadData)
                  .subscribe(res => {
                      console.log(res);
                      this.receivedImageData = res;
                      this.base64Data = this.receivedImageData.pic;
                      this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                    });
                  
                  
                  this.addbook = null;
                  setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
                },
                error => console.log(error.status, error.message));
                this.addBookFormGroup.reset({
                  bookname: '',
                  booklanguage: '',
                  bookgenre:'',
                  bookowneraddress: '',
                  //bookdescription:'',
                  bookownertelnum:'',
                  bookrating: '5',
                  bookcoverimage: ''
                });
                this.capturedImage = undefined;
                this.addbookDetailsFormDirective.resetForm();

              }
            }
          ]
        });

        await alert.present();

    }


async selectImageSource() {
      const cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.FILE_URI,
        encodingType: this._camera.EncodingType.PNG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 180,
        targetWidth: 100,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.CAMERA
      };

      const galleryOptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.FILE_URI,
        encodingType: this._camera.EncodingType.PNG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 180,
        targetWidth: 100,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
      };

      const alert = await this._alertController.create({
        header: "Select Source",
        message: "Pick a source for your image",
        buttons: [
          {
            text: "Camera",
            handler: ()=> {
              
              this._camera.getPicture(cameraOptions)
              .then(imageURI => {
            
                // display captured image
                console.log(imageURI);
                let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
                let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
                console.log("image name", imageName);
                console.log("image path", imagePath);
                console.log("before read as data url");
                this.file.readAsDataURL(imagePath, imageName).then(res => this.capturedImage = res);
                console.log("after read as data url");
                
                // resolve URI, get blob & file and POST
                this.file.resolveLocalFilesystemUrl(imageURI)
                .then(entry => {
                    console.log("inside resolve local file system url");
                    (<FileEntry>entry).file(file => this.readFile(file))
                 })
                .catch(err => {
                  console.log("error reading file")
                })
              }, (err) => {
                // Handle error
                 console.log(err);
           });
              
          }
        },
        {
            text: "Gallery",
            handler: ()=> {
             
              this._camera.getPicture(galleryOptions)
              .then(imageURI => {
                
                // display captured image
                let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
                let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
                this.file.readAsDataURL(imagePath, imageName).then(res => this.capturedImage = res);
              //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());

                // resolve URI, get blob & file and POST
                this.file.resolveLocalFilesystemUrl(imageURI)
                .then(entry => {
                    console.log("inside resolve local file system url");
                    (<FileEntry>entry).file(file => this.readFile(file))
                 })
                .catch(err => {
                  console.log("error reading file")
                })
              }, (err) => {
                // Handle error
                 console.log(err);
           });
        }
      }
    ]
   });

      await alert.present();

}

  /*createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
    }

    copyFileToLocalDir(namePath, currentName, newFileName) {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
          this.updateStoredImages(newFileName);
      }, error => {
          console.log('Error while storing file.');
      });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if (!arr) {
            let newImages = [name];
            this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
            arr.push(name);
            this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
 
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
 
        let newEntry = {
            name: name,
            path: resPath,
            filePath: filePath
        };
 
        this.images = [newEntry, ...this.images];
       
        this.ref.detectChanges(); // trigger change detection cycle
    });
}

pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    let converted = this.webview.convertFileSrc(img);
    return converted;
  }
}*/

    readFile(file: any) {

      const reader = new FileReader();
      console.log("file type", file.type);
      console.log("file type", file.name);
      reader.onloadend = () => {
        this.uploadData = new FormData();
        if (reader.result) {
          const imgBlob = new Blob([reader.result], {type: file.type});
          this.uploadData.append('imageFile', imgBlob, file.name);
        }
      };
      reader.readAsArrayBuffer(file);
    }


  closeModal() {
    console.log("inside close modal");
    this._modalController.dismiss();
  }

}
