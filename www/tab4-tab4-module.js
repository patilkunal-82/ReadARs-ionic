(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/shared/search.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/search.pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/sort.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/shared/sort.pipe.ts ***!
  \*************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sort.pipe */ "./src/app/shared/sort.pipe.ts");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/search.pipe */ "./src/app/shared/search.pipe.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");











var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__["IonicImageLoaderModule"]
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"], _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["SortPipe"]],
            exports: [_shared_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"], _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_7__["SortPipe"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Search All\n    </ion-title>\n  </ion-toolbar>\n\n\n</ion-header> \n\n<ion-content>\n\n\n<!--  <ion-card>\n    <ion-card-title style=\"color: green;\" class=\"display_heading\">Search books in ReadARs Library</ion-card-title>\n  </ion-card> -->\n\n\n  <ion-searchbar shape=\"round\" no-margin [(ngModel)]=\"searchTerm\"\n      (ionChange)=\"setFilteredItems()\" placeholder=\"Search..\">\n  </ion-searchbar>\n\n\n  <!--<button ion-button type=\"button\" (click)=\"sort()\">Sort</button> -->\n\n  \n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"clearCache($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>-->\n\n  <ion-list>\n       <ion-item [routerLink]=\"['bookdetail', book._id]\" button  \n          *ngFor=\"let book of books | sort: {property: column, order: order}\">\n         <ion-thumbnail>\n          <!--<ion-img [src]=\"(bookIdImageMap.get(book._id))\" class=\"\"></ion-img>-->\n          <img-loader [src]=\"(bookIdImageMap.get(book._id))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n         </ion-thumbnail> \n         <ion-label class=\"book-display\">\n           <strong class=\"ion-text-wrap\">{{book.bookname}}</strong>\n          <!-- <p>{{book.bookdescription}}</p> -->\n           <h3> in {{book.booklanguage}}. By - {{book.bookauthor}}.</h3>\n           <ion-note *ngIf=\"book.bookcurrentstatus == 'available' \" style=\"color: green\">{{book.bookcurrentstatus}}</ion-note>\n           <ion-note *ngIf=\"book.bookcurrentstatus == 'borrowed' \" style=\"color: red\">{{book.bookcurrentstatus}}</ion-note>\n           <ion-note *ngIf=\"book.bookcurrentstatus == 'reserved' \" style=\"color: orange\">{{book.bookcurrentstatus}}</ion-note>\n         </ion-label>\n       </ion-item>\n  </ion-list>\n\n  <!-- <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>  -->\n\n\n</ion-content>\n\n\n<!--\n\n<span [ngClass]=\"row.isAvailable == true ? 'hide': '' \" style=\"color: red;\" class=\"fa fa-times fa-lg\"></span>\n<span [ngClass]=\"row.isReserved == true || row.isBorrowed == true ? 'hide': '' \" style=\"color: green;\" class=\"fa fa-check-circle fa-lg\"></span>\n\n\n\n<ion-skeleton-text animated></ion-skeleton-text>\n<ion-card >\n      <ion-card-content> <strong> As a book reader, follow simple 3 step process.</strong></ion-card-content>\n      <ion-img src=\"/assets/images/finalimages/searchbooks.jpeg\"></ion-img>\n      <ion-card-header>\n        <ion-card-content> <strong>Step1: Search and select book of your interest !</strong></ion-card-content>\n      </ion-card-header>\n</ion-card>\n\n-->\n"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-display {\n  margin: 5px;\n  padding: 5px; }\n\n.book-image {\n  margin: 5px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWI0L3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUlJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBSUksV0FBVyxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGlzcGxheV9oZWFkaW5nIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib29rLWRpc3BsYXkge1xuXG4gICAgLy9oZWlnaHQ6NTBweDtcbiAgICAvL2JvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uYm9vay1pbWFnZSB7XG4gICAgLy93aWR0aDogMzAwcHg7XG4gICAgLy9oZWlnaHQ6IDMwMHB4O1xuICAgIC8vYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_searchbooks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/searchbooks.service */ "./src/app/services/searchbooks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");










var Tab4Page = /** @class */ (function () {
    function Tab4Page(navCtrl, authService, booksService, readarsService, imageLoaderService, baseURL, router, searchedData) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.booksService = booksService;
        this.readarsService = readarsService;
        this.imageLoaderService = imageLoaderService;
        this.baseURL = baseURL;
        this.router = router;
        this.searchedData = searchedData;
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
        this.searchTerm = "";
        this.descending = false;
        this.column = 'booklanguage';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
    }
    Tab4Page.prototype.ngOnInit = function () {
        var _this = this;
        //this.showForm = false;
        this.setFilteredItems();
        this.readarsService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            console.log("BOOK COLLECTION IS ---------->", _this.books);
        }, function (errmess) { return _this.errMess = errmess; });
        this.prepareBookIdsImagesMap();
        /*  this.searchControl.valueChanges
          .pipe(debounceTime(700))
          .subscribe(search => {
            this.setFilteredItems(search);
          });*/
    };
    Tab4Page.prototype.ionViewWillEnter = function () {
        this.prepareBookIdsImagesMap();
    };
    Tab4Page.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        // refresher.complete();
    };
    Tab4Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    Tab4Page.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    Tab4Page.prototype.prepareBookIdsImagesMap = function () {
        // get all the  bookIds
        // for every  bookID get the corresponding imageURL
        // store image URL against the bookID in a map
        // when displaying a view, for every book Id(key), get corresponding img url(value) from the map
        var _this = this;
        this.readarsService.getBookIds().subscribe(function (bookIds) {
            _this.bookIds = bookIds;
            _this.storeBookIds(_this.bookIds);
            _this.lbookIds = _this.loadBookIds();
            var _loop_1 = function (i) {
                _this.readarsService.getBookImage(_this.lbookIds[i])
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
    Tab4Page.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    Tab4Page.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    Tab4Page.prototype.ngAfterViewInit = function () {
    };
    Tab4Page.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.readarsService.getBooks()
                .subscribe(function (books) {
                _this.books = books;
            }, function (errmess) { return _this.errMess = errmess; });
            event.target.complete();
        }, 2000);
    };
    Tab4Page.prototype.setFilteredItems = function () {
        this.books = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.books);
    };
    Tab4Page.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('baseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_4__["ReadarsService"], ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_9__["ImageLoaderService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_searchbooks_service__WEBPACK_IMPORTED_MODULE_7__["SearchedData"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map