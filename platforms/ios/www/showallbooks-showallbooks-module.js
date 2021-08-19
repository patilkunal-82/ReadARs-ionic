(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showallbooks-showallbooks-module"],{

/***/ "./src/app/showallbooks/showallbooks.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/showallbooks/showallbooks.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowallbooksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowallbooksPageModule", function() { return ShowallbooksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _showallbooks_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showallbooks.page */ "./src/app/showallbooks/showallbooks.page.ts");









var routes = [
    {
        path: '',
        component: _showallbooks_page__WEBPACK_IMPORTED_MODULE_7__["ShowallbooksPage"]
    }
];
var ShowallbooksPageModule = /** @class */ (function () {
    function ShowallbooksPageModule() {
    }
    ShowallbooksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"]
            ],
            declarations: [_showallbooks_page__WEBPACK_IMPORTED_MODULE_7__["ShowallbooksPage"]]
        })
    ], ShowallbooksPageModule);
    return ShowallbooksPageModule;
}());



/***/ }),

/***/ "./src/app/showallbooks/showallbooks.page.html":
/*!*****************************************************!*\
  !*** ./src/app/showallbooks/showallbooks.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;\">\n    \n    </ion-title>\n  </ion-toolbar>\n\n  \n  \n</ion-header> \n\n<ion-content>\n\n  \n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list-header color=\"\" style=\"margin-bottom: 10px;\"> \n    <ion-item class=\"\">\n     <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n      <ion-label style=\"color: #145A32; margin-left: 5px; \"> All books in the shelf </ion-label>\n    </ion-item>\n  </ion-list-header>\n\n  <ion-list>\n    <ion-virtual-scroll [items]=\"books\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item>\n            \n            <ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\"   \n              cache=\"true\" button></ion-img>\n\n           \n              <ion-label>\n                <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                \" class=\"ion-text-wrap\"> \n                  {{book.bookname}}\n                </h3>\n                <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;\">\n                    Author : {{book.bookauthor}}\n                </p>\n\n              <!--<ion-chip style=\"color: darkgreen; background: #E9F7EF ; font-size: smaller; margin-left: 20px;\">\n                Book Details...\n              </ion-chip>-->\n              <ion-chip style=\"background-color: #e9f7e9; font-size: x-small;\" [routerLink]=\"['bookdetail', book._id]\"> \n                More details\n                <ion-icon  src=\"../assets/icon/ellipsis-horizontal.svg\" style=\"color: darkgreen;\" size=\"mini\"></ion-icon>\n              </ion-chip>\n\n\n                </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>\n\n  <!--<ion-list>\n    <ion-list-header color=\"\">\n      <ion-item class=\"\">\n       <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n        <ion-label style=\"color: #145A32; margin-left: 5px; \"> ALL THE BOOKS </ion-label>\n      </ion-item>\n    </ion-list-header>\n    \n    <ion-item-sliding>\n      <ion-slides [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let book of books\">\n            <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(book._id))\" [routerLink]=\"['bookdetail', book._id]\"  \n            useImg (load)=\"onImageLoad($event)\" button></img-loader>\n        </ion-slide>\n      </ion-slides> \n    </ion-item-sliding>\n  </ion-list>-->\n \n\n \n\n\n  \n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <!--<ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content> -->\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showallbooks/showallbooks.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/showallbooks/showallbooks.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-back-button {\n  color: #FDFEFE; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 225%;\n  height: 4%;\n  margin: 10px auto; }\n\n.bookcard {\n  width: 20%;\n  height: 20%;\n  margin: 10px;\n  text-align: center; }\n\n.bookimage1 {\n  width: 100px;\n  height: 100px;\n  box-shadow: grey; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaG93YWxsYm9va3Mvc2hvd2FsbGJvb2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFJRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUlkO0VBSUcsZ0JBQWdCO0VBRWhCLFlBQVksRUFBQTs7QUFJZDtFQUNDLFdBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWlCLEVBQUE7O0FBR25CO0VBRUUsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFFYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBRVgsVUFBVTtFQUVWLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUtwQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBRWIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBUSxFQUFBOztBQUdWO0VBRUUscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFhO0VBQ2IscUJBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG93YWxsYm9va3Mvc2hvd2FsbGJvb2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZGlzcGxheWNhcmQge1xuICAgLy8gd2lkdGg6IDMwdnc7XG4gICAgLy9oZWlnaHQ6MzB2aDtcbiAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICBcbiAgLmRpc3BsYXlpbm5lcmNhcmQge1xuICAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgICAvL2hlaWdodDozMHZoO1xuICAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgIC8vbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOmdob3N0d2hpdGU7XG4gICB9XG4gIFxuICAgaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICBcbiAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIH1cblxuICBpb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiAjRkRGRUZFO1xufVxuICBcbiAgLmRpc3BsYXlfaGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgXG4gIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC5ib29rLWltYWdlIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAvL2JvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLmJvb2tpbWFnZSB7XG4gICAgd2lkdGg6IDIyNSU7XG4gICAgLy9oZWlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiA0JTtcbiAgICAvL21hcmdpbi10b3A6IDI1dmg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5ib29rY2FyZCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vb2JqZWN0LWZpdDogY292ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5ib29raW1hZ2UxIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvL21hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogZ3JleTtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1tZW51IHtcbiAgICAtLXdpZHRoOiA1MDBweDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcbiAgXG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gXG4gIFxuICAuY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/showallbooks/showallbooks.page.ts":
/*!***************************************************!*\
  !*** ./src/app/showallbooks/showallbooks.page.ts ***!
  \***************************************************/
/*! exports provided: ShowallbooksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowallbooksPage", function() { return ShowallbooksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/book */ "./src/app/shared/book.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_searchbooks_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/searchbooks.service */ "./src/app/services/searchbooks.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");















//import { Storage } from '@ionic/storage';





var ShowallbooksPage = /** @class */ (function () {
    function ShowallbooksPage(navCtrl, authService, booksService, readarsService, baseURL, router, searchedData, menu, favoriteService, fb, file, webview, 
    //private storage: Storage,
    plt, 
    // private ref: ChangeDetectorRef, 
    filePath, httpClient, imageLoaderService, toastCtrl, zone, loadingController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.booksService = booksService;
        this.readarsService = readarsService;
        this.baseURL = baseURL;
        this.router = router;
        this.searchedData = searchedData;
        this.menu = menu;
        this.favoriteService = favoriteService;
        this.fb = fb;
        this.file = file;
        this.webview = webview;
        this.plt = plt;
        this.filePath = filePath;
        this.httpClient = httpClient;
        this.imageLoaderService = imageLoaderService;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.loadingController = loadingController;
        this.images = [];
        this.books = [];
        this.recobooks = [];
        this.bookGenreCollection = [];
        this.bookLanguageCollection = [];
        this.favorites = [];
        this.favoriteBooks = [];
        this.bookgenre = _shared_book__WEBPACK_IMPORTED_MODULE_3__["BookGenre"];
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_3__["BookLanguage"];
        this.collectonCategory = _shared_book__WEBPACK_IMPORTED_MODULE_3__["CollectionCategory"];
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
        this.searchTerm = "";
        this.descending = false;
        this.column = 'bookgenre';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ShowallbooksPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.showForm = false;
        this.createForm();
        this.setFilteredItems();
        // this.loadStoredImages();
        this.presentLoading();
        this.readarsService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            _this.prepareBookIdsImagesMap();
            console.log("BOOK COLLECTION IS ---------->", _this.books);
        }, function (errmess) { return _this.errMess = errmess; });
        /*this.readarsService.getRecommendedBooks()
        .subscribe(recobooks => {
    
          this.recobooks = recobooks;
          console.log("RECO BOOK COLLECTION IS ---------->", this.recobooks)
    
        }, errmess => this.errMess = <any>errmess);*/
    };
    ShowallbooksPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Loading...please wait',
                            duration: 2400
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowallbooksPage.prototype.createForm = function () {
        this.selectCategoryFormGroup = this.fb.group({
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
        });
    };
    ShowallbooksPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 4000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowallbooksPage.prototype.ionViewWillEnter = function () {
        this.prepareBookIdsImagesMap();
    };
    ShowallbooksPage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    ShowallbooksPage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    ShowallbooksPage.prototype.prepareBookIdsImagesMap = function () {
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
    ShowallbooksPage.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    ShowallbooksPage.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    ShowallbooksPage.prototype.ngAfterViewInit = function () {
    };
    ShowallbooksPage.prototype.selectCollectionCategory = function (event) {
        this.showGenre = false;
        this.showLanguage = false;
        if (event.detail.value === 'Genre') {
            this.showGenre = true;
        }
        if (event.detail.value === 'Language') {
            this.showLanguage = true;
        }
    };
    ShowallbooksPage.prototype.showAllBooks = function () {
        console.log("Inside Show All Books");
    };
    /*
      for every book in books, check the bookgenre.
      if bookgenre matches with the event.detal.value, add that bookentry into genrecollection
    */
    ShowallbooksPage.prototype.displayGenreCollection = function (event) {
        this.bookGenreCollection = [];
        console.log("EVENT DETAIL VALUE", event.detail.value);
        var i = 0;
        var j = 0;
        while (i < this.books.length) {
            if (this.books[i].bookgenre === event.detail.value) {
                this.bookGenreCollection[j] = this.books[i];
                j++;
            }
            i++;
        }
        if ((this.bookGenreCollection === undefined || this.bookGenreCollection.length == 0)) {
            this.presentToast("Books of genre " + event.detail.value + " are NOT AVAILABLE in the bookshelf currently");
        }
        console.log("BOOK GENRE & COLLECTION", event.detail.value, this.bookGenreCollection.length);
    };
    ShowallbooksPage.prototype.displayLanguageCollection = function (event) {
        this.bookLanguageCollection = [];
        console.log("EVENT DETAIL VALUE", event.detail.value);
        var i = 0;
        var j = 0;
        while (i < this.books.length) {
            if (this.books[i].booklanguage === event.detail.value) {
                this.bookLanguageCollection[j] = this.books[i];
                j++;
            }
            i++;
        }
        if ((this.bookLanguageCollection === undefined || this.bookLanguageCollection.length == 0)) {
            this.presentToast("Books in " + event.detail.value + " language are NOT AVAILABLE in the bookshelf currently");
        }
        console.log("BOOK LANGUAGE & COLLECTION", event.detail.value, this.bookLanguageCollection);
    };
    ShowallbooksPage.prototype.refreshPage = function () {
        console.log("inside refreshpage");
        window.location.reload();
    };
    ShowallbooksPage.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.readarsService.getBooks()
                .subscribe(function (books) {
                _this.books = books;
            }, function (errmess) { return _this.errMess = errmess; });
            _this.clearCache();
            event.target.complete();
        }, 2000);
    };
    ShowallbooksPage.prototype.setFilteredItems = function () {
        this.books = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.books);
    };
    ShowallbooksPage.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowallbooksPage.prototype, "selectCategoryFormDirective", void 0);
    ShowallbooksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showallbooks',
            template: __webpack_require__(/*! ./showallbooks.page.html */ "./src/app/showallbooks/showallbooks.page.html"),
            styles: [__webpack_require__(/*! ./showallbooks.page.scss */ "./src/app/showallbooks/showallbooks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('baseURL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_7__["ReadarsService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_searchbooks_service__WEBPACK_IMPORTED_MODULE_10__["SearchedData"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_15__["ImageLoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]])
    ], ShowallbooksPage);
    return ShowallbooksPage;
}());



/***/ })

}]);
//# sourceMappingURL=showallbooks-showallbooks-module.js.map