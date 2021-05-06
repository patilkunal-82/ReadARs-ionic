(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookdetail-bookdetail-module"],{

/***/ "./src/app/bookdetail/bookdetail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.module.ts ***!
  \*************************************************/
/*! exports provided: BookdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailPageModule", function() { return BookdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookdetail.page */ "./src/app/bookdetail/bookdetail.page.ts");
/* harmony import */ var _bookvideo_bookvideo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bookvideo/bookvideo.module */ "./src/app/bookvideo/bookvideo.module.ts");








var routes = [
    {
        path: '',
        component: _bookdetail_page__WEBPACK_IMPORTED_MODULE_6__["BookdetailPage"],
    }
];
var BookdetailPageModule = /** @class */ (function () {
    function BookdetailPageModule() {
    }
    BookdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _bookvideo_bookvideo_module__WEBPACK_IMPORTED_MODULE_7__["BookvideoPageModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bookdetail_page__WEBPACK_IMPORTED_MODULE_6__["BookdetailPage"]]
        })
    ], BookdetailPageModule);
    return BookdetailPageModule;
}());



/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.html":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--  <ion-img [src]=\"(bookDetail | async)?.image\"></ion-img> -->\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon src=\"../assets/icon/book.svg\" size=\"large\"></ion-icon>\n      <ion-card-title>\n        {{book?.bookname}}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n        <p> Book Description: {{book?.bookdescription}}\n        </p>\n        <p> Book Owner: {{book?.bookowner.firstname}} {{book?.bookowner.lastname}}\n        </p>\n        <p> Book Owner's rating: {{book?.bookrating}}\n        </p>\n        <p> Book Owner's address: {{book?.bookowneraddress}}\n        </p>\n        <p> Book Owner Email: {{book?.bookowner.email}}\n        </p>\n        <p> Book Owner Telephone: {{book?.bookownertelnum}}\n        </p>\n    </ion-card-content>\n\n    <ion-card no-margin>\n      <ion-card-content *ngIf=\"reserved\" style=\"color: red;\">\n        <ion-icon src=\"../assets/icon/lock-closed.svg\"></ion-icon>\n        {{book?.bookname}} is currently not available ! Please check later..\n      </ion-card-content>\n      <ion-card-content *ngIf=\"!reserved\" style=\"color: green;\">\n        <ion-icon src=\"../assets/icon/lock-open.svg\"></ion-icon>\n        {{book?.bookname}} is available !\n      </ion-card-content>\n    </ion-card>\n\n    <ion-fab *ngIf=\"!reserved\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"bottom\">\n        <ion-fab-button (click)=\"reserveBook()\">\n          <ion-icon color=\"success\" src=\"../assets/icon/lock-closed.svg\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button>\n            <ion-icon color=\"success\" src=\"../assets/icon/call.svg\" (click)=\"callOwner()\"></ion-icon>\n        </ion-fab-button>\n          <ion-fab-button>\n            <ion-icon  color=\"success\" src=\"../assets/icon/mail.svg\" (click)=\"emailOwner()\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n\n  <!--  <button mat-button>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:{{book.bookowner.email}}\"><i class=\"fa fa-envelope-o fa-lg\" title=\"Contact Book Owner\"></i></a>\n    </button>\n    <button mat-button>\n      <a mat-icon-button href=\"tel:{{book.bookownertelnum}}\"><i class=\"fa fa-phone\"></i></a>\n    </button> -->\n\n  </ion-card>\n\n</ion-content>\n\n\n<!-- <ion-card>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label>Duration</ion-label>\n      <ion-chip color=\"primary\">\n        {{(bookDetail | async)?.duration}}\n      </ion-chip>\n    </ion-item>\n    <ion-item>\n        <ion-label>Category</ion-label>\n        <ion-chip color=\"primary\">\n            {{(bookDetail | async)?.category}}\n          </ion-chip>\n      </ion-item>\n      <ion-item>\n          <ion-label>Popularity</ion-label>\n          <ion-chip color=\"primary\">\n              {{(bookDetail | async)?.popularity}}\n            </ion-chip>\n        </ion-item>\n  </ion-list>\n</ion-card>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n      <ion-fab-button (click)=\"openModal()\">\n        <ion-icon color=\"success\" name=\"play\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"share()\">\n        <ion-icon color=\"dark\" name=\"share\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab-list>\n</ion-fab> -->\n"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tkZXRhaWwvYm9va2RldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.ts ***!
  \***********************************************/
/*! exports provided: BookdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailPage", function() { return BookdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_bookdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bookdetail.service */ "./src/app/services/bookdetail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/reserved.service */ "./src/app/services/reserved.service.ts");











var BookdetailPage = /** @class */ (function () {
    function BookdetailPage(_socialShare, _modalController, bookdetailService, activatedRoute, readarsService, reservedService, route, router, emailComposer, callNumber) {
        this._socialShare = _socialShare;
        this._modalController = _modalController;
        this.readarsService = readarsService;
        this.reservedService = reservedService;
        this.route = route;
        this.router = router;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.visibility = 'shown';
        this.favorite = false;
        this.reserved = false;
        //version = VERSION;
        this.panelOpenState = false;
        /* const bookID = activatedRoute.snapshot.params["bookID"];
          console.log(bookID);
          //this.bookDetail = bookdetailService.getBook(bookID);
          this.bookDetail = readarsService.getBook(bookID);
          console.log("Book Details", this.bookDetail);*/
    }
    BookdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.readarsService.getBookIds().subscribe(function (bookIds) {
            _this.bookIds = bookIds;
            _this.storeBookIds(_this.bookIds);
        }, function (errmess) { return _this.errMess = errmess; });
        this.lbookIds = this.loadBookIds();
        console.log("BookIds from getBookIds" + this.bookIds);
        console.log("BookIds from getBookIds" + this.bookIds);
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            _this.visibility = 'hidden';
            return _this.readarsService.getBook(params['bookID']);
        }))
            .subscribe(function (book) {
            _this.book = book;
            console.log("Book found for id:" + _this.book._id);
            _this.setPrevNext(_this.book._id);
            _this.visibility = 'shown';
            /*this.favoriteService.isFavorite(this.dish._id)
            .subscribe(resp => { console.log(resp); this.favorite = <boolean>resp.exists; },
                err => console.log(err));*/
            _this.reservedService.isReserved(_this.book._id)
                .subscribe(function (resp) { console.log(resp); _this.reserved = resp.exists; }, function (err) { return console.log(err); });
        }, function (errmess) { return _this.errMess = errmess; });
    };
    BookdetailPage.prototype.setPrevNext = function (bookId) {
        console.log("Into setPreNext");
        this.lbookIds = this.loadBookIds();
        console.log("BookIds array" + this.lbookIds);
        console.log("BookIds array length" + this.lbookIds.length);
        console.log("Specifc BookId:" + bookId);
        //const index = this.bookIds.indexOf(bookId);
        var index = this.lbookIds.indexOf(bookId);
        console.log("Specific BookId after try catch" + bookId);
        //const index = this.bookIds.indexOf(bookId);
        /*  console.log("Array index" + index);
          this.prev = this.bookIds[(this.bookIds.length + index -1) % this.bookIds.length];
          this.next = this.bookIds[(this.bookIds.length + index +1 ) % this.bookIds.length];*/
        console.log("Array index" + index);
        this.prev = this.lbookIds[(this.lbookIds.length + index - 1) % this.lbookIds.length];
        this.next = this.lbookIds[(this.lbookIds.length + index + 1) % this.lbookIds.length];
        console.log("Previous", this.prev);
        console.log("Next", this.next);
    };
    BookdetailPage.prototype.goPrev = function () {
        this.router.navigateByUrl('/bookdetail/' + this.prev);
    };
    BookdetailPage.prototype.goNext = function () {
        this.router.navigateByUrl('/bookdetail/' + this.next);
    };
    BookdetailPage.prototype.goBack = function () {
        //this.location.back();
        this.router.navigateByUrl('/booklist');
    };
    /*createForm() {
      this.commentForm = this.fb.group({
        rating: '5',
        comment: ['', Validators.required]
      });
  
      this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
  
      this.onValueChanged(); // (re)set validation messages now
    }*/
    BookdetailPage.prototype.onSubmit = function () {
        /*this.dishservice.postComment(this.dish._id, this.commentForm.value)
          .subscribe(dish => this.dish = <Dish>dish);
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
          rating: 5,
          comment: ''
        });*/
        /*this.readarsService.postComment(this.book._id, this.commentForm.value)
          .subscribe(book => this.book = <Book>book);
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
          rating: '5',
          comment: ''
        });*/
    };
    BookdetailPage.prototype.onValueChanged = function (data) {
        /*  if (!this.commentForm) { return; }
          const form = this.commentForm;
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
          }*/
    };
    /*addToFavorites() {
      if (!this.favorite) {
        this.favoriteService.postFavorite(this.dish._id)
          .subscribe(favorites => { console.log(favorites); this.favorite = true; });
      }
    }*/
    BookdetailPage.prototype.reserveBook = function () {
        var _this = this;
        console.log("inside reserveBook of BookdetailComponent.ts");
        alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !");
        this.book.bookavailable = false;
        this.book.bookreserved = true;
        this.book.bookborrowed = false;
        this.readarsService.reserveBook(this.book._id, this.book)
            .subscribe(function (book) { console.log(book); _this.reserved = true; });
        //  this.goBack();
    };
    BookdetailPage.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    BookdetailPage.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    BookdetailPage.prototype.emailOwner = function () {
        var email = {
            to: this.book.bookowner.email,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    BookdetailPage.prototype.callOwner = function () {
        this.callNumber.callNumber(this.book.bookownertelnum, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    BookdetailPage.prototype.share = function () {
        /*  this.bookDetail.subscribe((book)=> {
            this._socialShare.share("Look What I Found On This App Called ReadARs", book.name, "", book.cropped);
          });*/
    };
    BookdetailPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BookdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookdetail',
            template: __webpack_require__(/*! ./bookdetail.page.html */ "./src/app/bookdetail/bookdetail.page.html"),
            styles: [__webpack_require__(/*! ./bookdetail.page.scss */ "./src/app/bookdetail/bookdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _services_bookdetail_service__WEBPACK_IMPORTED_MODULE_3__["BookdetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_9__["ReadarsService"],
            _services_reserved_service__WEBPACK_IMPORTED_MODULE_10__["ReservedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]])
    ], BookdetailPage);
    return BookdetailPage;
}());



/***/ }),

/***/ "./src/app/bookvideo/bookvideo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.module.ts ***!
  \***********************************************/
/*! exports provided: BookvideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookvideoPageModule", function() { return BookvideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookvideo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookvideo.page */ "./src/app/bookvideo/bookvideo.page.ts");






var BookvideoPageModule = /** @class */ (function () {
    function BookvideoPageModule() {
    }
    BookvideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            entryComponents: [_bookvideo_page__WEBPACK_IMPORTED_MODULE_5__["BookvideoPage"]],
            declarations: [_bookvideo_page__WEBPACK_IMPORTED_MODULE_5__["BookvideoPage"]]
        })
    ], BookvideoPageModule);
    return BookvideoPageModule;
}());



/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.html":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"dark\">\n\n  <video autoplay class=\"bookvideo\">\n    <source [src]=\"videoURL\">\n  </video>\n\n  <ion-fab\n  vertical=\"bottom\"\n  horizontal=\"center\"\n  slot=\"fixed\">\n  <ion-fab-button (click)=\"closeModal()\" color=\"danger\">\n    <ion-icon name=\"close\"></ion-icon>\n  </ion-fab-button>\n\n</ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bookvideo {\n  width: 100%;\n  height: auto;\n  margin-top: 25vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9ib29rdmlkZW8vYm9va3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib29rdmlkZW8vYm9va3ZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.ts ***!
  \*********************************************/
/*! exports provided: BookvideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookvideoPage", function() { return BookvideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BookvideoPage = /** @class */ (function () {
    function BookvideoPage(navParams, _modalController) {
        this._modalController = _modalController;
        this.videoURL = navParams.get("videoURL");
    }
    BookvideoPage.prototype.ngOnInit = function () {
    };
    BookvideoPage.prototype.closeModal = function () {
        this._modalController.dismiss();
    };
    BookvideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookvideo',
            template: __webpack_require__(/*! ./bookvideo.page.html */ "./src/app/bookvideo/bookvideo.page.html"),
            styles: [__webpack_require__(/*! ./bookvideo.page.scss */ "./src/app/bookvideo/bookvideo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BookvideoPage);
    return BookvideoPage;
}());



/***/ }),

/***/ "./src/app/services/reserved.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/reserved.service.ts ***!
  \**********************************************/
/*! exports provided: ReservedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservedService", function() { return ReservedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");








var ReservedService = /** @class */ (function () {
    function ReservedService(http, auth, processHTTPMsgService) {
        this.http = http;
        this.auth = auth;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    ReservedService.prototype.getReservedBooks = function () {
        if (!this.auth.isLoggedIn()) {
            return null;
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'reserved?isReserved=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ReservedService.prototype.isReserved = function (id) {
        var _this = this;
        if (!this.auth.isLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ exists: false, book: null });
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'reserved/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    ReservedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"]])
    ], ReservedService);
    return ReservedService;
}());



/***/ })

}]);
//# sourceMappingURL=bookdetail-bookdetail-module.js.map