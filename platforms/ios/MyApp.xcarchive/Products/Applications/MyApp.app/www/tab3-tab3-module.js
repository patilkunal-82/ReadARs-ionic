(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/addbook/addbook.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.module.ts ***!
  \*******************************************/
/*! exports provided: AddbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookPageModule", function() { return AddbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addbook_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbook.page */ "./src/app/addbook/addbook.page.ts");






var AddbookPageModule = /** @class */ (function () {
    function AddbookPageModule() {
    }
    AddbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_addbook_page__WEBPACK_IMPORTED_MODULE_5__["AddbookPage"]],
            declarations: [_addbook_page__WEBPACK_IMPORTED_MODULE_5__["AddbookPage"]]
        })
    ], AddbookPageModule);
    return AddbookPageModule;
}());



/***/ }),

/***/ "./src/app/addbook/addbook.page.html":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    Add 1 or more books..\n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n\n\n    <form [formGroup]=\"addBookFormGroup\" #fform=\"ngForm\">\n\n      <ion-item>\n        <ion-label color=\"medium\">Book Name:</ion-label>\n        <ion-input formControlName=\"bookname\" type=\"text\"></ion-input>\n      </ion-item>\n\n    <!--<ion-item>\n        <ion-label color=\"medium\">Book Cover Image:</ion-label>\n        <ion-input type=\"file\" (change)=\"onFileChanged($event)\" required></ion-input>\n        <ion-thumbnail>\n          <ion-img [src]=\"imgURL\" height=\"100\" *ngIf=\"imgURL\"></ion-img>\n        </ion-thumbnail>\n    </ion-item> -->\n\n     <ion-item>\n          <ion-label color=\"medium\">Book Cover \n            <ion-icon *ngIf=\"!capturedImage\" src=\"../assets/icon/camera-outline.svg\" (click)=\"selectImageSource()\"></ion-icon>:\n          </ion-label>\n    \n          <ion-thumbnail>\n            <ion-img formControlName=\"bookcoverimage\" [src]=\"capturedImage\" *ngIf=\"capturedImage\" height=\"100\"></ion-img>\n          </ion-thumbnail>\n      </ion-item> \n\n      <ion-item>\n        <ion-label color=\"medium\">Book Genre:</ion-label>\n        <ion-select formControlName=\"bookgenre\">\n          <ion-select-option *ngFor=\"let bgenre of bookgenre\" [value]=\"bgenre\">\n                  {{bgenre}}\n        </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"medium\">Book Language:</ion-label>\n        <ion-select formControlName=\"booklanguage\">\n          <ion-select-option *ngFor=\"let blanguage of booklanguage\" [value]=\"blanguage\">\n                  {{blanguage}}\n        </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n     <ion-item>\n        <ion-label color=\"medium\">Book's Author:</ion-label>\n        <ion-input formControlName=\"bookauthor\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <!--<ion-item>\n        <ion-label color=\"medium\">Book Description:</ion-label>\n        <ion-input formControlName=\"bookdescription\" type=\"text\"></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n          <ion-text color=\"medium\">Your Rating for the book:</ion-text>\n          <ion-range min=\"1\" max=\"5\" tickInterval=\"1\" value=\"5\" pin=\"true\" snaps name=\"rating\"\n          formControlName=\"bookrating\" ></ion-range>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"medium\">Your address:</ion-label>\n        <ion-input formControlName=\"bookowneraddress\" type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"medium\">Your contact number:</ion-label>\n        <ion-input formControlName=\"bookownertelnum\" type=\"text\"></ion-input>\n      </ion-item>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"onSubmit()\" shape=\"round\"  style=\"color:#1B4F72\" \n          [disabled]=\"addBookFormGroup.invalid\" margin-top expand=\"full\">Submit</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"closeModal()\" shape=\"round\" style=\"color: grey\" \n          margin-top expand=\"full\">Cancel</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addbook/addbook.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addbook/addbook.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-img {\n  width: 50px;\n  height: 50px;\n  border: gray solid 1px;\n  margin: 5px auto; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\nion-button {\n  --background: #F4F6F7 ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9hZGRib29rL2FkZGJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBSUssV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJakI7RUFDSSxzQkFBYSxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZGJvb2svYWRkYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1pbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG59XG5cbi5kaXNwbGF5Y2FyZCB7XG4gICAgLy8gd2lkdGg6IDMwdnc7XG4gICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICAgbWFyZ2luOiA1cHg7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgfVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNEY2RjcgO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/addbook/addbook.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addbook/addbook.page.ts ***!
  \*****************************************/
/*! exports provided: AddbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookPage", function() { return AddbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");













//import { Storage } from '@ionic/storage';
//const STORAGE_KEY = 'book_images';
var AddbookPage = /** @class */ (function () {
    function AddbookPage(_modalController, _alertController, booksService, fb, _camera, _webview, file, plt, filePath, authService, 
    //private storage: Storage,
    webview) {
        this._modalController = _modalController;
        this._alertController = _alertController;
        this.booksService = booksService;
        this.fb = fb;
        this._camera = _camera;
        this._webview = _webview;
        this.file = file;
        this.plt = plt;
        this.filePath = filePath;
        this.authService = authService;
        this.webview = webview;
        this.dataReader = new FileReader();
        this.images = [];
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_4__["BookLanguage"];
        this.bookgenre = _shared_book__WEBPACK_IMPORTED_MODULE_4__["BookGenre"];
        this.submitted = null;
        this.showForm = true;
        this.panelOpenState = false;
        this.username = undefined;
        this.formErrors = {
            'bookname': '',
            'booklanguage': '',
            'bookgenre': '',
            'bookowneraddress': '',
            'bookownertelnum': '',
            'bookrating': '',
            'bookauthor': ''
        };
        this.validationMessages = {
            'bookname': {
                'required': 'Book Name is required.',
                'minlength': 'Book Name must be at least 1 character long.',
                'maxlength': 'BookName cannot be more than 40 characters long.'
            },
            'booklanguage': {
                'required': 'Book Language is required.',
                'minlength': 'Book Language must be at least 2 characters long.',
                'maxlength': 'Book Language cannot be more than 25 characters long.'
            },
            'bookgenre': {
                'required': 'Book Language is required.',
                'minlength': 'Book Language must be at least 2 characters long.',
                'maxlength': 'Book Language cannot be more than 25 characters long.'
            },
            'bookowneraddress': {
                'required': 'Address is required.',
            },
            'bookownertelnum': {
                'required': 'Contact number is required.',
                'pattern': 'Contact number must contain only numbers.'
            },
            'booauthor': {
                'required': 'Author Name is required.',
                'minlength': 'Author Name must be at least 1 character long.',
                'maxlength': 'Author Name cannot be more than 40 characters long.'
            }
        };
    }
    AddbookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) { console.log(name); _this.username = name; });
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
        }, function (errmess) { return _this.errMess = errmess; });
        var button = document.querySelector('ion-button');
        button.addEventListener('click', this.onSubmit);
    };
    AddbookPage.prototype.onFileChanged = function (event) {
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
    };
    AddbookPage.prototype.createForm = function () {
        var _this = this;
        this.addBookFormGroup = this.fb.group({
            bookname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            booklanguage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]],
            bookowneraddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bookownertelnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern]],
            bookrating: '5',
            bookauthor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]],
            bookcoverimage: ''
        });
        this.addBookFormGroup.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        //this.onValueChanged(); // (re)set validation messages now
    };
    AddbookPage.prototype.onValueChanged = function (data) {
        if (!this.addBookFormGroup) {
            return;
        }
        var form = this.addBookFormGroup;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    AddbookPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Add Book",
                            message: "Select your option..",
                            buttons: [
                                {
                                    text: "Add this",
                                    handler: function () {
                                        _this.addbook = _this.addBookFormGroup.value;
                                        _this.addbook.bookcurrentstatus = 'available';
                                        console.log(_this.addbook);
                                        _this.showForm = false;
                                        _this.booksService.addBook(_this.addbook)
                                            .subscribe(function (addbook) {
                                            console.log("response received-BOOK ADDED");
                                            _this.submitted = addbook;
                                            _this.booksService.uploadImage(_this.submitted._id, _this.uploadData)
                                                .subscribe(function (res) {
                                                console.log(res);
                                                _this.receivedImageData = res;
                                                _this.base64Data = _this.receivedImageData.pic;
                                                _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                                            });
                                            _this.addbook = null;
                                            setTimeout(function () { _this.submitted = null; _this.showForm = true; }, 5000);
                                        }, function (error) { return console.log(error.status, error.message); });
                                        _this.addBookFormGroup.reset({
                                            bookname: '',
                                            booklanguage: '',
                                            bookgenre: '',
                                            bookowneraddress: '',
                                            bookownertelnum: '',
                                            bookrating: '5',
                                            bookcoverimage: ''
                                        });
                                        _this.capturedImage = undefined;
                                        _this.addbookDetailsFormDirective.resetForm();
                                        //this.ngOnInit();
                                        _this.closeModal();
                                    }
                                },
                                {
                                    text: "Add this & 1 more",
                                    handler: function () {
                                        _this.addbook = _this.addBookFormGroup.value;
                                        _this.addbook.bookcurrentstatus = 'available';
                                        //  this.feedback = this.bookDetailsForm.value;
                                        console.log(_this.addbook);
                                        _this.showForm = false;
                                        _this.booksService.addBook(_this.addbook)
                                            .subscribe(function (addbook) {
                                            console.log("response received");
                                            _this.submitted = addbook;
                                            console.log(_this.submitted);
                                            _this.booksService.uploadImage(_this.submitted._id, _this.uploadData)
                                                .subscribe(function (res) {
                                                console.log(res);
                                                _this.receivedImageData = res;
                                                _this.base64Data = _this.receivedImageData.pic;
                                                _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                                            });
                                            _this.addbook = null;
                                            setTimeout(function () { _this.submitted = null; _this.showForm = true; }, 5000);
                                        }, function (error) { return console.log(error.status, error.message); });
                                        _this.addBookFormGroup.reset({
                                            bookname: '',
                                            booklanguage: '',
                                            bookgenre: '',
                                            bookowneraddress: '',
                                            //bookdescription:'',
                                            bookownertelnum: '',
                                            bookrating: '5',
                                            bookcoverimage: ''
                                        });
                                        _this.capturedImage = undefined;
                                        _this.addbookDetailsFormDirective.resetForm();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddbookPage.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, galleryOptions, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.CAMERA
                        };
                        galleryOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        return [4 /*yield*/, this._alertController.create({
                                header: "Select Source",
                                message: "Pick a source for your image",
                                buttons: [
                                    {
                                        text: "Camera",
                                        handler: function () {
                                            _this._camera.getPicture(cameraOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                console.log(imageURI);
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                console.log("image name", imageName);
                                                console.log("image path", imagePath);
                                                console.log("before read as data url");
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                console.log("after read as data url");
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    },
                                    {
                                        text: "Gallery",
                                        handler: function () {
                                            _this._camera.getPicture(galleryOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    AddbookPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        console.log("file type", file.type);
        console.log("file type", file.name);
        reader.onloadend = function () {
            _this.uploadData = new FormData();
            if (reader.result) {
                var imgBlob = new Blob([reader.result], { type: file.type });
                _this.uploadData.append('imageFile', imgBlob, file.name);
            }
        };
        reader.readAsArrayBuffer(file);
    };
    AddbookPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddbookPage.prototype, "addbookDetailsFormDirective", void 0);
    AddbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbook',
            template: __webpack_require__(/*! ./addbook.page.html */ "./src/app/addbook/addbook.page.html"),
            styles: [__webpack_require__(/*! ./addbook.page.scss */ "./src/app/addbook/addbook.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_5__["BooksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"]])
    ], AddbookPage);
    return AddbookPage;
}());



/***/ }),

/***/ "./src/app/arbook/arbook.module.ts":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.module.ts ***!
  \*****************************************/
/*! exports provided: ArbookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbookPageModule", function() { return ArbookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arbook_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arbook.page */ "./src/app/arbook/arbook.page.ts");






var ArbookPageModule = /** @class */ (function () {
    function ArbookPageModule() {
    }
    ArbookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_arbook_page__WEBPACK_IMPORTED_MODULE_5__["ArbookPage"]],
            declarations: [_arbook_page__WEBPACK_IMPORTED_MODULE_5__["ArbookPage"]]
        })
    ], ArbookPageModule);
    return ArbookPageModule;
}());



/***/ }),

/***/ "./src/app/arbook/arbook.page.html":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    Enable {{bookCopy.bookname}} as AR Book\n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n  \n<ion-list>\n  <ion-item>\n    <ion-button fill=\"clear\" style=\"color: #7B7D7D\" (click)=\"selectImageSource()\">Capture Markers\n      <span style=\"margin-right: 20px; \" class=\"ion-text-center\"></span>\n      <ion-icon src=\"../assets/icon/camera-outline.svg\">\n      </ion-icon>\n    </ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-label *ngIf=\"markerImagesLength\">No. of markers captured - {{markerImagesLength}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-thumbnail *ngFor=\"let image of markerImages\">\n      <ion-img src={{image}} *ngIf=\"markerImages\" height=\"50\"></ion-img>\n  </ion-thumbnail>\n  </ion-item>\n  \n  \n    <ion-button fill=\"clear\" style=\"color: #7B7D7D\" name=\"create-markers\" (click)=\"createMarkers()\">Upload All Markers\n      <span style=\"margin-right: 10px; \" class=\"ion-text-center\"></span>\n      <ion-icon name=\"cloud-upload\">\n      </ion-icon>\n    </ion-button>\n  \n\n    <ion-item>\n      <ion-thumbnail *ngFor=\"let url of urls \">\n        <ion-img src={{url}} height=\"50\"></ion-img>\n      </ion-thumbnail>\n    </ion-item>\n    \n\n\n</ion-list>\n\n\n\n    <!--<ion-button shape=\"round\" margin-top expand=\"block\">\n          <ion-icon style=\"color: #145A32;\" src=\"../assets/icon/add-circle.svg\"></ion-icon>\n          <span style=\"color:  #17202A; margin-left: 5px; \" class=\"ion-text-left\">Upload Markers for  </span>\n    </ion-button>\n    <ion-thumbnail>\n        <ion-img [src]=\"capturedImage\" *ngIf=\"capturedImage\" height=\"100\"></ion-img>\n    </ion-thumbnail>-->\n \n\n  <ion-col>\n    <ion-button (click)=\"closeModal()\" shape=\"round\" style=\"color: grey\" \n     margin-top expand=\"full\">Cancel</ion-button>\n  </ion-col>\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/arbook/arbook.page.scss":
/*!*****************************************!*\
  !*** ./src/app/arbook/arbook.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-img {\n  width: 50px;\n  height: 50px;\n  border: gray solid 1px;\n  margin: 5px auto; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\nion-button {\n  --background: #F4F6F7 ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.image-container {\n  min-height: 200px;\n  background-size: cover; }\n\n@media (min-width: 0px) {\n  .images {\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 420px) {\n  .images {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3; } }\n\n@media (min-width: 720px) {\n  .images {\n    -webkit-column-count: 4;\n       -moz-column-count: 4;\n            column-count: 4; } }\n\n.one-image {\n  margin: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9hcmJvb2svYXJib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdwQjtFQUlLLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWpCO0VBQ0ksc0JBQWEsRUFBQTs7QUFHZjtFQUVFLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FyYm9vay9hcmJvb2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2staW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4uZGlzcGxheWNhcmQge1xuICAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgICAvL2hlaWdodDozMHZoO1xuICAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgIG1hcmdpbjogNXB4O1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgIH1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjRGNkY3IDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgICAtLWJhY2tncm91bmQ6ICMxNDVBMzI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAwcHgpIHtcbiAgICAuaW1hZ2VzIHtcbiAgICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAgIC5pbWFnZXMge1xuICAgICAgY29sdW1uLWNvdW50OiAzO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gICAgLmltYWdlcyB7XG4gICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgfVxuICB9XG4gIFxuICAub25lLWltYWdlIHtcbiAgICBtYXJnaW46IDJweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/arbook/arbook.page.ts":
/*!***************************************!*\
  !*** ./src/app/arbook/arbook.page.ts ***!
  \***************************************/
/*! exports provided: ArbookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbookPage", function() { return ArbookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");









var ArbookPage = /** @class */ (function () {
    function ArbookPage(_modalController, booksService, _camera, file, _alertController, imagePicker, transfer) {
        this._modalController = _modalController;
        this.booksService = booksService;
        this._camera = _camera;
        this.file = file;
        this._alertController = _alertController;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.dataReader = new FileReader();
        this.uploadStatus = "";
    }
    ArbookPage.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBook(this.bookId)
            .subscribe(function (book) {
            _this.bookCopy = book;
            console.log("Book Copy in AR Book", _this.bookCopy);
        }, function (errmess) { return _this.errMess = errmess; });
        this.booksService.getMarkerImages(this.bookId)
            .subscribe(function (images) {
            //console.log("X is", images)
            _this.urls = images;
        }, function (errMess) {
            console.log("inside err mess");
        });
    };
    ArbookPage.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, galleryOptions, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cameraOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.JPEG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 45,
                            targetWidth: 80,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.CAMERA
                        };
                        galleryOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.JPEG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 45,
                            targetWidth: 80,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        this.markerImages = [];
                        this.capturedImages = [];
                        this.markerImagesLength = 0;
                        return [4 /*yield*/, this._alertController.create({
                                header: "Select Source",
                                message: "Pick a source for your image",
                                buttons: [
                                    {
                                        text: "Camera",
                                        handler: function () {
                                            _this._camera.getPicture(cameraOptions).then(function (result) {
                                                //console.log("RESULTS", results);
                                                _this.markerImages.push('file://' + result);
                                                console.log("Marker images length", _this.markerImages.length);
                                                _this.markerImagesLength = _this.markerImages.length;
                                            }, function (err) {
                                                console.log(err);
                                            });
                                            /*this._camera.getPicture(cameraOptions)
                                            .then(imageURI => {
                                          
                                              // display captured image
                                              console.log(imageURI);
                                              let imageName = imageURI.substring(imageURI.lastIndexOf('/')+1);
                                              let imagePath =  imageURI.substring(0,imageURI.lastIndexOf('/')+1);
                                              console.log("image name", imageName);
                                              console.log("image path", imagePath);
                                              console.log("before read as data url");
                                              this.file.readAsDataURL(imagePath, imageName).then(res => {
                                                
                                                console.log("RES", res);
                                                this.capturedImage = res
                                
                                              });
                                              console.log("after read as data url");
                                             // this.markerImages.push('data:image/jpeg;base64,' + this.capturedImage);
                                              
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
                                         });*/
                                        }
                                    },
                                    {
                                        text: "Gallery",
                                        handler: function () {
                                            /*this._camera.getPicture(galleryOptions)
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
                                         });*/
                                            _this.imagePicker.getPictures(galleryOptions).then(function (results) {
                                                for (var i = 0; i < results.length; i++) {
                                                    console.log("RESULTS", results[i]);
                                                    _this.markerImages.push('file://' + results[i]);
                                                }
                                                console.log("Marker images length", _this.markerImages.length);
                                                _this.markerImagesLength = _this.markerImages.length;
                                                /*for (var i=0; i < this.markerImages.length; i++) {
                                                console.log("inside for loop")
                                                let imageName = this.markerImages[i].substring(this.markerImages[i].lastIndexOf('/')+1);
                                                console.log("Image Name", imageName);
                                                let imagePath =  this.markerImages[i].substring(0,this.markerImages[i].lastIndexOf('/')+1);
                                                console.log("Image Path", imagePath);
                                                this.file.readAsDataURL(imagePath, imageName).then(res => {
                                                  //console.log("RES", res);
                                                  this.capturedImages[i] = res;
                                                  console.log("captured image", this.capturedImages[i]);
                                                });
                                      
                                               }*/
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArbookPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        console.log("file type", file.type);
        console.log("file type", file.name);
        reader.onloadend = function () {
            _this.uploadData = new FormData();
            if (reader.result) {
                var imgBlob = new Blob([reader.result], { type: file.type });
                _this.uploadData.append('arMarkerImageFile', imgBlob, file.name);
                _this.booksService.uploadMarkerImage(_this.bookId, _this.uploadData)
                    .subscribe(function (res) {
                    console.log("Uploaded image details ----->", res);
                });
            }
        };
        reader.readAsArrayBuffer(file);
    };
    ArbookPage.prototype.createMarkers = function () {
        for (var i = 0; i < this.markerImages.length; i++) {
            console.log("Selected image is ", this.markerImages[i]);
        }
        console.log("inside createMarkers");
        var counter = 0;
        var ref = this;
        function InnerFunc() {
            console.log("Beginning Counter", counter);
            console.log("inside InnerFunc");
            console.log("file system url", ref.markerImages[counter]);
            ref.file.resolveLocalFilesystemUrl(ref.markerImages[counter])
                .then(function (entry) {
                console.log("inside resolve local file system url");
                entry.file(function (file) { return ref.readFile(file); });
                counter++;
                console.log("Inside Counter is", counter);
                if (counter < ref.markerImages.length) {
                    InnerFunc();
                }
                else {
                    alert("successfully uploaded all images");
                }
            })
                .catch(function (err) {
                console.log("error reading file");
            });
        }
        console.log("innerFunc getting called");
        InnerFunc();
    };
    ArbookPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    ArbookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arbook',
            template: __webpack_require__(/*! ./arbook.page.html */ "./src/app/arbook/arbook.page.html"),
            styles: [__webpack_require__(/*! ./arbook.page.scss */ "./src/app/arbook/arbook.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]])
    ], ArbookPage);
    return ArbookPage;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");






var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    FeedbackService.prototype.submitFeedback = function (feedback) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback/', feedback, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService.prototype.getFeedback = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService.prototype.getFeaturedFeedback = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'feedback?rating=5')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _addbook_addbook_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../addbook/addbook.module */ "./src/app/addbook/addbook.module.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _arbook_arbook_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../arbook/arbook.module */ "./src/app/arbook/arbook.module.ts");










var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _addbook_addbook_module__WEBPACK_IMPORTED_MODULE_7__["AddbookPageModule"],
                _arbook_arbook_module__WEBPACK_IMPORTED_MODULE_9__["ArbookPageModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoaderModule"],
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
            //exports: [,  ]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title *ngIf=\"username\" size=\"large\" \n    style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Manage\n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n\n  \n    \n    <ion-button shape=\"round\" (click)=\"addBookModal()\" margin-top expand=\"block\">\n        <ion-icon style=\"color: #145A32;\" src=\"../assets/icon/add-circle.svg\"></ion-icon>\n        <span style=\"color:  #17202A; margin-left: 5px; \" class=\"ion-text-left\">Add New Book</span>\n    </ion-button>\n    \n    <!--<ion-searchbar shape=\"round\" no-margin [(ngModel)]=\"searchTerm\"\n      (ionChange)=\"setFilteredItems()\" placeholder=\"Search my books by status, title or language ...\">\n    </ion-searchbar>-->\n\n  \n    \n  \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n      <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"clearCache($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>-->\n\n  <!--| sort: {property: column, order: order}-->\n  <ion-list>\n\n    <ion-button shape=\"round\" margin-top expand=\"block\">\n      <ion-icon style=\"color: #145A32; \" src=\"../assets/icon/book.svg\"></ion-icon>\n      <span style=\"color:  #17202A; margin-left: 5px; \" class=\"ion-text-left\">My books by status</span>\n   </ion-button>\n\n    <ion-select (ionChange)=\"displayBooksByStatus($event)\" interface=\"popover\" placeholder=\"Select ..\">\n      <ion-select-option *ngFor=\"let status of bookcurrentstatus\" [value]=\"status\"> {{status}}</ion-select-option>\n   </ion-select>\n   \n  <ion-item-sliding *ngFor=\"let rBook of reservedBooks\">\n    <ion-item *ngIf=\"showReserved\">\n      <ion-card *ngIf=\"showReserved\">\n       <ion-thumbnail *ngIf=\"showReserved\">\n         <!--<ion-img [src]=\"(bookIdImageMap.get(book._id))\"></ion-img>-->\n         <img-loader [src]=\"(bookIdImageMap.get(rBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n       </ion-thumbnail>\n      </ion-card>\n      <ion-label *ngIf=\"showReserved\" class=\"ion-text-wrap\">\n           <strong>{{rBook.bookname}}</strong>\n           <h3> in {{rBook.booklanguage}}. By - {{rBook.bookauthor}}.</h3>\n           <p></p>\n           <ion-note *ngIf=\"rBook.bookcurrentstatus == 'available' \" style=\"color: green\">{{rBook.bookcurrentstatus}}</ion-note>\n           <ion-note *ngIf=\"rBook.bookcurrentstatus == 'borrowed' \" style=\"color: red\">{{rBook.bookcurrentstatus}}</ion-note>\n           <ion-note *ngIf=\"rBook.bookcurrentstatus == 'reserved' \" style=\"color: orange\">{{rBook.bookcurrentstatus}}</ion-note>       \n       </ion-label>\n    </ion-item>\n   <ion-item-options side=\"start\">\n     <ion-item-option *ngIf=\"showReserved\">\n       <ion-icon style=\"color: red\" *ngIf=\"rBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n       (click)=\"deleteBook(rBook._id)\"></ion-icon>\n     </ion-item-option>\n   </ion-item-options>\n  <ion-item-options side=\"end\">\n   <ion-item-option *ngIf=\"showReserved\">\n     <ion-icon style=\"color: darkgreen\" *ngIf=\"(rBook.isReserved || rBook.isBorrowed) && !rBook.isAvailable\" slot=\"icon-only\"\n     src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(rBook._id)\"></ion-icon>\n   </ion-item-option>\n   <ion-item-option>\n    <ion-icon style=\"color: darkgreen\"  slot=\"icon-only\"\n    src=\"../assets/icon/scan-circle-outline.svg\" (click)=\"arBookModal(rBook._id)\"></ion-icon>\n  </ion-item-option>\n  </ion-item-options>\n</ion-item-sliding>\n\n<ion-item-sliding *ngFor=\"let aBook of availableBooks \">\n  <ion-item *ngIf=\"showAvailable\">\n    <ion-card *ngIf=\"showAvailable\">\n     <ion-thumbnail *ngIf=\"showAvailable\">\n       <!--<ion-img [src]=\"(bookIdImageMap.get(book._id))\"></ion-img>-->\n       <img-loader [src]=\"(bookIdImageMap.get(aBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n     </ion-thumbnail>\n    </ion-card>\n    <ion-label *ngIf=\"showAvailable\"class=\"ion-text-wrap\">\n         <strong>{{aBook.bookname}}</strong>\n         <h3> in {{aBook.booklanguage}}. By - {{aBook.bookauthor}}.</h3>\n         <p></p>\n         <ion-note *ngIf=\"aBook.bookcurrentstatus == 'available' \" style=\"color: green\">{{aBook.bookcurrentstatus}}</ion-note>\n         <ion-note *ngIf=\"aBook.bookcurrentstatus == 'borrowed' \" style=\"color: red\">{{aBook.bookcurrentstatus}}</ion-note>\n         <ion-note *ngIf=\"aBook.bookcurrentstatus == 'reserved' \" style=\"color: orange\">{{aBook.bookcurrentstatus}}</ion-note>       \n     </ion-label>\n  </ion-item>\n  <ion-item-options side=\"start\">\n    <ion-item-option *ngIf=\"showAvailable\">\n      <ion-icon style=\"color: red\" *ngIf=\"aBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n      (click)=\"deleteBook(aBook._id)\"></ion-icon>\n    </ion-item-option>\n  </ion-item-options>\n  <ion-item-options side=\"end\">\n  <ion-item-option *ngIf=\"showAvailable\">\n    <ion-icon style=\"color: darkgreen\" *ngIf=\"(aBook.isReserved || aBook.isBorrowed) && !aBook.isAvailable\" slot=\"icon-only\"\n    src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(aBook._id)\"></ion-icon>\n  </ion-item-option>   \n  <ion-item-option>\n    <ion-icon style=\"color: darkgreen\"  slot=\"icon-only\"\n    src=\"../assets/icon/scan-circle-outline.svg\" (click)=\"arBookModal(aBook._id)\"></ion-icon>\n  </ion-item-option> \n  </ion-item-options>\n</ion-item-sliding>\n\n<ion-item-sliding *ngFor=\"let bBook of borrowedBooks\">\n  <ion-item *ngIf=\"showBorrowed\">\n    <ion-card *ngIf=\"showBorrowed\">\n     <ion-thumbnail *ngIf=\"showBorrowed\">\n       <!--<ion-img [src]=\"(bookIdImageMap.get(book._id))\"></ion-img>-->\n       <img-loader [src]=\"(bookIdImageMap.get(bBook._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n     </ion-thumbnail>\n    </ion-card>\n    <ion-label *ngIf=\"showBorrowed\" class=\"ion-text-wrap\">\n         <strong>{{bBook.bookname}}</strong>\n         <h3> in {{bBook.booklanguage}}. By - {{bBook.bookauthor}}.</h3>\n         <p></p>\n         <ion-note *ngIf=\"bBook.bookcurrentstatus == 'available' \" style=\"color: green\">{{bBook.bookcurrentstatus}}</ion-note>\n         <ion-note *ngIf=\"bBook.bookcurrentstatus == 'borrowed' \" style=\"color: red\">{{bBook.bookcurrentstatus}}</ion-note>\n         <ion-note *ngIf=\"bBook.bookcurrentstatus == 'reserved' \" style=\"color: orange\">{{bBook.bookcurrentstatus}}</ion-note>       \n     </ion-label>\n  </ion-item>\n <ion-item-options side=\"start\">\n   <ion-item-option *ngIf=\"showBorrowed\">\n     <ion-icon style=\"color: red\" *ngIf=\"bBook.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n     (click)=\"deleteBook(bBook._id)\"></ion-icon>\n   </ion-item-option>\n</ion-item-options>\n<ion-item-options side=\"end\">\n    <ion-item-option *ngIf=\"showBorrowed\">\n      <ion-icon style=\"color: darkgreen\" *ngIf=\"(bBook.isReserved || bBook.isBorrowed) && !bBook.isAvailable\" slot=\"icon-only\"\n      src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(bBook._id)\"></ion-icon>\n    </ion-item-option>\n    <ion-item-option>\n      <ion-icon style=\"color: darkgreen\"  slot=\"icon-only\"\n      src=\"../assets/icon/scan-circle-outline.svg\" (click)=\"arBookModal(bBook._id)\"></ion-icon>\n    </ion-item-option>\n</ion-item-options>\n</ion-item-sliding>\n\n<ion-button shape=\"round\" margin-top expand=\"block\">\n  <ion-icon style=\"color: #145A32; \" src=\"../assets/icon/book.svg\"></ion-icon>\n  <span style=\"color:  #17202A; margin-left: 5px; \" class=\"ion-text-left\">All my books</span>\n</ion-button>\n\n    <ion-item-sliding *ngFor=\"let book of allBooks \">\n         <ion-item>\n           <ion-card>\n            <ion-thumbnail>\n              <!--<ion-img [src]=\"(bookIdImageMap.get(book._id))\"></ion-img>-->\n              <img-loader [src]=\"(bookIdImageMap.get(book._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n            </ion-thumbnail>\n           </ion-card>\n           <ion-label class=\"ion-text-wrap\">\n                <strong>{{book.bookname}}</strong>\n                <h3> in {{book.booklanguage}}. By - {{book.bookauthor}}.</h3>\n                <p></p>\n                <ion-note *ngIf=\"book.bookcurrentstatus == 'available' \" style=\"color: green\">{{book.bookcurrentstatus}}</ion-note>\n                <ion-note *ngIf=\"book.bookcurrentstatus == 'borrowed' \" style=\"color: red\">{{book.bookcurrentstatus}}</ion-note>\n                <ion-note *ngIf=\"book.bookcurrentstatus == 'reserved' \" style=\"color: orange\">{{book.bookcurrentstatus}}</ion-note>       \n            </ion-label>\n         </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option >\n            <ion-icon style=\"color: red\" *ngIf=\"book.isAvailable\" slot=\"icon-only\" src=\"../assets/icon/trash.svg\"\n            (click)=\"deleteBook(book._id)\"></ion-icon>\n          </ion-item-option>\n       </ion-item-options>\n       <ion-item-options side=\"end\">\n        <ion-item-option>\n          <ion-icon style=\"color: darkgreen\" *ngIf=\"(book.isReserved || book.isBorrowed) && !book.isAvailable\" slot=\"icon-only\"\n          src=\"../assets/icon/scan.svg\" (click)=\"scanToLendOrRelease(book._id)\"></ion-icon>\n         <ion-item-option>\n            <ion-icon style=\"color: darkgreen\"  slot=\"icon-only\"\n            src=\"../assets/icon/scan-circle-outline.svg\" (click)=\"arBookModal(book._id)\">\n          </ion-icon>\n          </ion-item-option>\n        </ion-item-option>    \n      </ion-item-options>\n    </ion-item-sliding>\n\n\n\n\n  </ion-list>\n  <!--<ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>-->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  width: 200px;\n  height: 200px;\n  border: gray solid 1px;\n  margin: 10px auto; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-card {\n  margin: 5px;\n  padding: 10px; }\n\n.book-image {\n  border: gray solid 1px;\n  margin: 5px; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px;\n  background-color: whitesmoke; }\n\n.displayinnercard {\n  margin-top: auto;\n  margin-left: 30px;\n  padding: 5px;\n  background-color: ghostwhite; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\nion-button {\n  --background: #E9F7EF; }\n\nion-button span {\n    text-align: left; }\n\nion-toolbar {\n  --background: #145A32; }\n\nion-item-option {\n  --background: #F8F9F9; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nspan.ion-text-left {\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUlJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBR0ksc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHZjtFQUlHLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBRzlCO0VBSUcsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNEJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFhLEVBQUE7O0FBRGY7SUFHSSxnQkFBZSxFQUFBOztBQUtuQjtFQUVFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBRUUsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9maWxlLXBpYyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRpc3BsYXlfaGVhZGluZyB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYm9vay1jYXJkIHtcblxuICAgIC8vaGVpZ2h0OjUwcHg7XG4gICAgLy9ib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib29rLWltYWdlIHtcbiAgICAvL3dpZHRoOiAzMDBweDtcbiAgICAvL2hlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmRpc3BsYXljYXJkIHtcbiAgLy8gd2lkdGg6IDMwdnc7XG4gICAvL2hlaWdodDozMHZoO1xuICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgbWFyZ2luOiA1cHg7XG4gICBwYWRkaW5nOiA1cHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuIH1cbiBcbiAuZGlzcGxheWlubmVyY2FyZCB7XG4gICAvLyB3aWR0aDogMzB2dztcbiAgICAvL2hlaWdodDozMHZoO1xuICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdob3N0d2hpdGU7XG4gIH1cblxuICAuZGlzcGxheV9oZWFkaW5nIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0U5RjdFRjtcbiAgICBzcGFue1xuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vQGF0LXJvb3Q6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xuICB9XG5cbiAgaW9uLWl0ZW0tb3B0aW9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGOEY5Rjk7XG4gIH1cblxuICBpb24tbGlzdC1oZWFkZXIge1xuXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxuICB9XG5cbiAgc3Bhbi5pb24tdGV4dC1sZWZ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4gXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _services_available_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/available.service */ "./src/app/services/available.service.ts");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/reserved.service */ "./src/app/services/reserved.service.ts");
/* harmony import */ var _services_borrowed_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/borrowed.service */ "./src/app/services/borrowed.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _services_searchmybooks_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/searchmybooks.service */ "./src/app/services/searchmybooks.service.ts");
/* harmony import */ var _addbook_addbook_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../addbook/addbook.page */ "./src/app/addbook/addbook.page.ts");
/* harmony import */ var _arbook_arbook_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../arbook/arbook.page */ "./src/app/arbook/arbook.page.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");






















var CodeOps;
(function (CodeOps) {
    CodeOps[CodeOps["getQrCode"] = 0] = "getQrCode";
    CodeOps[CodeOps["getScannedCode"] = 1] = "getScannedCode";
    CodeOps[CodeOps["compareCodes"] = 2] = "compareCodes";
})(CodeOps || (CodeOps = {}));
var Tab3Page = /** @class */ (function () {
    function Tab3Page(_camera, _alertController, _modalController, authService, navCtrl, readarsService, baseURL, router, route, searchedMyData, fb, feedbackservice, booksService, reservedService, borrowedService, availableService, activatedRoute, barCodeScanner, imageLoaderService) {
        this._camera = _camera;
        this._alertController = _alertController;
        this._modalController = _modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.readarsService = readarsService;
        this.baseURL = baseURL;
        this.router = router;
        this.route = route;
        this.searchedMyData = searchedMyData;
        this.fb = fb;
        this.feedbackservice = feedbackservice;
        this.booksService = booksService;
        this.reservedService = reservedService;
        this.borrowedService = borrowedService;
        this.availableService = availableService;
        this.activatedRoute = activatedRoute;
        this.barCodeScanner = barCodeScanner;
        this.imageLoaderService = imageLoaderService;
        this.username = undefined;
        this.reservedBooks = [];
        this.availableBooks = [];
        this.borrowedBooks = [];
        this.searchTerm = "";
        this.descending = false;
        this.column = 'booklanguage';
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
        this.name = 'Angular';
        this.currentRouter = this.router.url;
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookLanguage"];
        this.bookactions = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookActions"];
        this.bookcurrentstatus = _shared_book__WEBPACK_IMPORTED_MODULE_7__["BookCurrentStatus"];
        //feedback: Feedback;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_8__["ContactType"];
        this.submitted = null;
        this.showForm = true;
        this.panelOpenState = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.setFilteredItems();
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) {
            console.log(name);
            _this.username = name;
            _this.booksService.getBooks()
                .subscribe(function (books) {
                _this.allBooks = books;
                console.log("TAB3 BOOKS", _this.allBooks);
            }, function (errmess) { return _this.errMess = errmess; });
            _this.prepareBookIdsImagesMap();
        });
    };
    Tab3Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.prepareBookIdsImagesMap();
        this.booksService.getBooks()
            .subscribe(function (books) {
            _this.allBooks = books;
            console.log("TAB3 BOOKS", _this.allBooks);
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.displayBooksByStatus = function (event) {
        console.log("inside displayBooksBYStatus function");
        this.showAvailable = false;
        this.showReserved = false;
        this.showBorrowed = false;
        this.showAll = false;
        if (event.detail.value === 'Available') {
            console.log("inside AVAILABLE condition");
            this.showAvailable = true;
            this.availableBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'available') {
                    this.availableBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.availableBooks.length);
        }
        if (event.detail.value === 'Reserved') {
            console.log("inside RESERVED condition");
            this.showReserved = true;
            this.reservedBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'reserved') {
                    this.reservedBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.reservedBooks.length);
        }
        if (event.detail.value === 'Borrowed') {
            console.log("inside BORROWED condition");
            this.showBorrowed = true;
            this.borrowedBooks = [];
            var i = 0;
            var j = 0;
            while (i < this.allBooks.length) {
                if (this.allBooks[i].bookcurrentstatus === 'borrowed') {
                    this.borrowedBooks[j] = this.allBooks[i];
                    j++;
                }
                i++;
            }
            console.log("BOOK Status & COLLECTION", event.detail.value, this.borrowedBooks.length);
        }
        if (event.detail.value === 'All') {
            this.showAll = true;
        }
    };
    Tab3Page.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    Tab3Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    /*displayActionCollection(event) {
  
  
      console.log("EVENT DETAIL VALUE", event.detail.value);
  
  
      if (event.detail.value === 'Lend Or Make Available') {
          console.log("INSIDE LEND MAKE");
            
            this.lendmake = true;
            this.remove = false;
            this.collectionEmptyAV = false;
            let i=0;
            let j=0;
            console.log("--------", this.books);
            console.log("-----LENGTH-----", this.books.length);
  
            while (i<this.books.length) {
                this.reservedService.isReserved(this.books[i]._id)
                .subscribe(resp => {
                console.log(resp);
                this.reserved = <boolean>resp.exists;
                if (this.reserved) {
                  console.log("BOOK", resp.book);
                  this.reservedBooks[j] = resp.book;
                  console.log("RESERVED BOOK", this.reservedBooks[j]);
                  j++;
                }
                if (this.reservedBooks.length == 0) {
                  this.collectionEmptyLM = true;
                }
              },err => console.log(err));
              i++;
            }
  
            i=0; j=0;
  
            while (i<this.books.length) {
              this.borrowedService.isBorrowed(this.books[i]._id)
              .subscribe(resp => {
              console.log(resp);
              this.borrowed = <boolean>resp.exists;
              if (this.borrowed) {
                console.log("BOOK", resp.book);
                this.borrowedBooks[j] = resp.book;
                console.log("BORROWED BOOK", this.borrowedBooks[j]);
                j++;
              }
              if (this.borrowedBooks.length == 0) {
                this.collectionEmptyLM = true;
              }
            },err => console.log(err));
            i++;
          }
  
        this.bookLendMakeCollection = this.reservedBooks.concat(this.borrowedBooks);
        console.log("bookLendMakeCollection", this.bookLendMakeCollection);
        if (this.bookLendMakeCollection.length == 0) {
  
          this.collectionEmptyLM = true;
          console.log("collectionEmptyLM", this.collectionEmptyLM)
        }
  
      }
  
      if (event.detail.value === 'Remove') {
          //this.ngOnInit();
          this.remove = true;
          this.lendmake = false;
          this.collectionEmptyLM = false;
          console.log("COLLECTION EMPTY AV", this.collectionEmptyAV);
          console.log("INSIDE REMOVE");
          let i=0;
          let j=0;
          console.log("--------", this.books);
          console.log("-----LENGTH-----", this.books.length);
          while (i<this.books.length) {
              this.availableService.isAvailable(this.books[i]._id)
              .subscribe(resp => {
              console.log(resp);
              this.available = <boolean>resp.exists;
              if (this.available) {
                console.log("BOOK", resp.book);
                this.availableBooks[j] = resp.book;
                console.log("AVAILABLE BOOK", this.availableBooks[j]);
                j++;
              }
             console.log("AVAILABLE BOOKSSSS", this.availableBooks)
             if (this.availableBooks.length == 0) {
              this.collectionEmptyAV = true;
            }
            
            },err => console.log(err));
  
            i++;
          }
  
        
      }
    }*/
    Tab3Page.prototype.prepareBookIdsImagesMap = function () {
        // get all the  bookIds
        // for every  bookID get the corresponding imageURL
        // store image URL against the bookID in a map
        // when displaying a view, for every book Id(key), get corresponding img url(value) from the map
        var _this = this;
        this.booksService.getBookIds().subscribe(function (bookIds) {
            _this.bookIds = bookIds;
            _this.storeBookIds(_this.bookIds);
            _this.lbookIds = _this.loadBookIds();
            var _loop_1 = function (i) {
                _this.booksService.getBookImage(_this.lbookIds[i])
                    .subscribe(function (x) {
                    _this.url = x;
                    console.log("this.url", _this.url);
                    _this.bookIdImageMap.set(_this.lbookIds[i], _this.url);
                    console.log("book image map", _this.bookIdImageMap);
                }, function (errMess) { return console.log(errMess); });
            };
            for (var i = 0; i < _this.lbookIds.length; i++) {
                _loop_1(i);
            }
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    Tab3Page.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    Tab3Page.prototype.ngAfterViewInit = function () {
    };
    Tab3Page.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.booksService.getBooks()
                .subscribe(function (books) {
                _this.books = books;
            }, function (errmess) { return _this.errMess = errmess; });
            _this.clearCache();
            event.target.complete();
        }, 2000);
    };
    Tab3Page.prototype.setFilteredItems = function () {
        this.books = this.searchedMyData.filterItems(this.searchTerm);
        console.log("Searched my data", this.books);
    };
    Tab3Page.prototype.deleteBook = function (id) {
        var _this = this;
        console.log('Deleting Book ' + id);
        this.booksService.deleteBook(id)
            .subscribe(function (removebook) { return _this.removebook = removebook; }, function (errmess) { return _this.errMess = errmess; });
        this.booksService.deleteBookImage(id)
            .subscribe(function (resp) { return console.log(resp); }, function (errmess) { return _this.errMess = errmess; });
        this.delete = false;
        this.ngOnInit();
    };
    Tab3Page.prototype.getCodeValue = function (codeOpsName) {
        if (codeOpsName === 'xyz') {
            return CodeOps.getQrCode;
        }
        if (codeOpsName === 'abc') {
            return CodeOps.getScannedCode;
        }
    };
    Tab3Page.prototype.scanToLendOrRelease = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Choose your action",
                            message: "Lend or Make Book Available",
                            buttons: [
                                {
                                    text: "Lend",
                                    handler: function () {
                                        _this.scanForLend(id);
                                    }
                                },
                                {
                                    text: "Make Available",
                                    handler: function () {
                                        _this.scanForRelease(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.getQRCheckString = function (id) {
        //this.ngOnInit();
        console.log("INSIDE GET CHECK QR STRING");
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i]._id === id) {
                this.qrCheckString = this.books[i]._id +
                    this.books[i].bookowner.username +
                    this.books[i].bookcurrentuser;
                console.log("QR CHECK STRING", this.qrCheckString);
                return this.qrCheckString;
            }
            //break;
        }
    };
    Tab3Page.prototype.scanForLend = function (id) {
        var _this = this;
        console.log("INSIDE LEND");
        this.booksService.getBook(id)
            .subscribe(function (book) {
            _this.bookcurrentUsername = book.bookcurrentuser;
            _this.qrCheckString = book._id +
                book.bookowner.username +
                book.bookcurrentuser;
            console.log("QR CHECK STRING IS", _this.qrCheckString);
            var options = {
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: false,
                prompt: 'Place a barcode inside the scan area',
                resultDisplayDuration: 500,
                formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                orientation: 'portrait',
            };
            _this.barCodeScanner.scan(options).then(function (barcodeData) {
                console.log("CHECK STRING IS ------>", _this.qrCheckString);
                _this.scannedData = barcodeData;
                console.log("SCANNED DATA IS ------> ", _this.scannedData["text"]);
                if (_this.qrCheckString === _this.scannedData["text"]) {
                    console.log("MATCH SUCCESS");
                    console.log('LENDING BOOK ' + id);
                    _this.router.navigate([_this.currentRouter]);
                    _this.book = book;
                    _this.book.bookavailable = false;
                    _this.book.bookreserved = true;
                    _this.book.bookborrowed = true;
                    _this.book.bookcurrentuser = _this.bookcurrentUsername;
                    _this.book.bookcurrentstatus = 'borrowed';
                    _this.booksService.lendBook(id, _this.book)
                        .subscribe(function (book) {
                        console.log(book);
                        _this.borrowed = true;
                        _this.reserved = true;
                        _this.qrCheckString = "";
                    });
                    _this.ngOnInit();
                }
                else {
                    console.log("QR CODES DON'T MATCH");
                }
            })
                .catch(function (err) { console.log('Error', err); });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab3Page.prototype.scanForRelease = function (id) {
        var _this = this;
        console.log("INSIDE MAKE AVAILABLE");
        this.booksService.getBook(id)
            .subscribe(function (book) {
            _this.bookcurrentUsername = book.bookcurrentuser;
            _this.qrCheckString = book._id +
                book.bookowner.username +
                book.bookcurrentuser;
            console.log("QR CHECK STRING IS", _this.qrCheckString);
            var options = {
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: false,
                prompt: 'Place a barcode inside the scan area',
                resultDisplayDuration: 500,
                formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                orientation: 'portrait',
            };
            _this.barCodeScanner.scan(options).then(function (barcodeData) {
                console.log("CHECK STRING IS ------>", _this.qrCheckString);
                _this.scannedData = barcodeData;
                console.log("SCANNED DATA IS ------> ", _this.scannedData["text"]);
                if (_this.qrCheckString === _this.scannedData["text"]) {
                    console.log("MATCH SUCCESS");
                    console.log('RELEASING BOOK ' + id);
                    _this.router.navigate([_this.currentRouter]);
                    //this.book.bookcurrentuser = "";
                    _this.booksService.deleteQRBookImage(id, _this.bookcurrentUsername)
                        .subscribe(function (resp) {
                        console.log(resp);
                        console.log("QR IMAGE DELETED");
                        _this.book = book;
                        _this.book.bookavailable = true;
                        _this.book.bookreserved = false;
                        _this.book.bookborrowed = false;
                        _this.book.bookcurrentuser = "";
                        _this.book.bookcurrentstatus = 'available';
                        _this.booksService.releaseBook(_this.book._id, _this.book)
                            .subscribe(function (book) {
                            console.log(book);
                            _this.available = true;
                            _this.reserved = false;
                            _this.qrCheckString = "";
                        });
                    }, function (errmess) { return _this.errMess = errmess; });
                    _this.ngOnInit();
                }
                else {
                    console.log("QR CODES DON'T MATCH");
                }
            })
                .catch(function (err) { console.log('Error', err); });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    /*scanForRelease1(id) {
  
      console.log("INSIDE SCAN FOR RELEASE");
  
      this.qrCheckString = this.getQRCheckString(id);
  
      if (this.qrCheckString) {
          console.log("QR CHECK STRING IS", this.qrCheckString);
  
  
          const options: BarcodeScannerOptions = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
          };
  
          this.barCodeScanner.scan(options).then(barcodeData => {
            //console.log('Barcode data', barcodeData);
            console.log("CHECK STRING IS ------>", this.qrCheckString);
            this.scannedData = barcodeData;
            console.log("SCANNED DATA IS ------> ", this.scannedData["text"]);
            
            if(this.qrCheckString === this.scannedData["text"]) {
              console.log("MATCH SUCCESS")
              console.log('RELEASING BOOK ' + id);
  
              this.booksService.getBook(id)
              .subscribe(book => {
                this.router.navigate([this.currentRouter]);
                this.book = book;
                this.book.bookavailable = true;
                this.book.bookreserved = false;
                this.book.bookborrowed = false;
                this.book.bookcurrentuser = "";
                this.booksService.releaseBook(this.book._id, this.book)
                .subscribe(book => {
                    console.log(book);
                    this.available = true;
                    this.reserved = false;
                    this.qrCheckString = '';
                    console.log("ABOUT TO DELETE QR IMAGE FOR THIS BOOK ID", id);
                    this.booksService.deleteQRBookImage(id)
                    .subscribe(resp => console.log(resp), errmess => this.errMess = <any>errmess);
          
                  });
                },  errmess => this.errMess = <any>errmess);
              this.ngOnInit();
            }
            else {
              console.log("QR CODES DON'T MATCH");
            }
            
          })
          .catch(err => {console.log('Error', err);});
                  
      }
      else {
        console.log("QR CHECK STRING NOT FOUND");
      }
  
    }*/
    /*
  
    this.reservedService.isReserved(this.book._id)
    .subscribe(resp => { console.log(resp); this.reserved = <boolean>resp.exists; },
        err => console.log(err));
  
     this.availableService.isAvailable(this.book._id)
     .subscribe(resp => { console.log(resp); this.available = <boolean>resp.exists; },
        err => console.log(err));
  
  
            */
    Tab3Page.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    Tab3Page.prototype.addBookModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addbookModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _addbook_addbook_page__WEBPACK_IMPORTED_MODULE_17__["AddbookPage"]
                        })];
                    case 1:
                        addbookModal = _a.sent();
                        return [2 /*return*/, addbookModal.present()];
                }
            });
        });
    };
    Tab3Page.prototype.arBookModal = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var arbookModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _arbook_arbook_page__WEBPACK_IMPORTED_MODULE_18__["ArbookPage"],
                            componentProps: {
                                bookId: id
                            }
                        })];
                    case 1:
                        arbookModal = _a.sent();
                        return [2 /*return*/, arbookModal.present()];
                }
            });
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('baseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_11__["ReadarsService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_searchmybooks_service__WEBPACK_IMPORTED_MODULE_16__["SearchedMyData"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_15__["FeedbackService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_10__["BooksService"],
            _services_reserved_service__WEBPACK_IMPORTED_MODULE_13__["ReservedService"],
            _services_borrowed_service__WEBPACK_IMPORTED_MODULE_14__["BorrowedService"],
            _services_available_service__WEBPACK_IMPORTED_MODULE_12__["AvailableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_19__["ImageLoaderService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map