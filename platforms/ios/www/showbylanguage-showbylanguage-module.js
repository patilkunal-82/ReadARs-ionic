(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showbylanguage-showbylanguage-module"],{

/***/ "./src/app/showbylanguage/showbylanguage.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/showbylanguage/showbylanguage.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowbylanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbylanguagePageModule", function() { return ShowbylanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showbylanguage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showbylanguage.page */ "./src/app/showbylanguage/showbylanguage.page.ts");







var routes = [
    {
        path: '',
        component: _showbylanguage_page__WEBPACK_IMPORTED_MODULE_6__["ShowbylanguagePage"]
    }
];
var ShowbylanguagePageModule = /** @class */ (function () {
    function ShowbylanguagePageModule() {
    }
    ShowbylanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_showbylanguage_page__WEBPACK_IMPORTED_MODULE_6__["ShowbylanguagePage"]]
        })
    ], ShowbylanguagePageModule);
    return ShowbylanguagePageModule;
}());



/***/ }),

/***/ "./src/app/showbylanguage/showbylanguage.page.html":
/*!*********************************************************!*\
  !*** ./src/app/showbylanguage/showbylanguage.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;\">\n              \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list-header color=\"\" style=\"margin-bottom: 10px;\">\n    <ion-item class=\"\">\n     <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/language.svg\"></ion-icon>\n      <ion-label style=\"color: #145A32; margin-left: 5px; \"> Select books written in </ion-label>\n    </ion-item>\n  </ion-list-header>\n\n  <ion-select (ionChange)=\"displayLanguageCollection($event)\" interface=\"popover\" placeholder=\"language..\">\n    <ion-select-option *ngFor=\"let blanguage of booklanguage\" [value]=\"blanguage\"> {{blanguage}}</ion-select-option>\n </ion-select>\n\n\n  <!--<ion-list *ngIf=\"!((bookLanguageCollection === undefined) || (bookLanguageCollection.length == 0))\">\n    <ion-virtual-scroll [items]=\"bookLanguageCollection\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item>\n            <ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\" [routerLink]=\"['bookdetail', book._id]\"  \n              cache=\"true\" button></ion-img>\n              \n                <ion-label style=\"font-size: smaller;\" class=\"ion-text-wrap\">\n                  Author: {{book?.bookauthor}}\n                  \n              </ion-label>\n              <ion-chip style=\"background: white\">\n                Available?\n                <ion-icon *ngIf=\"book.isAvailable && !book.isReserved && !book.isBorrowed\" name=\"checkmark-circle\" color=\"success\"></ion-icon>\n                <ion-icon *ngIf=\"book.isReserved && !book.isAvailable && !book.isBorrowed\"  src=\"../assets/icon/pause-circle.svg\" color=\"warning\"></ion-icon>\n                <ion-icon *ngIf=\"book.isBorrowed && !book.isAvailable\" name=\"close-circle\" color=\"danger\"></ion-icon>\n                </ion-chip>\n          </ion-item>\n         \n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>-->\n\n  \n\n  <ion-list *ngIf=\"!((bookLanguageCollection === undefined) || (bookLanguageCollection.length == 0))\">\n    <ion-virtual-scroll [items]=\"bookLanguageCollection\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item>\n          \n            <ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\"   \n              cache=\"true\" button></ion-img>\n            \n              <ion-label>\n                <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                \" class=\"ion-text-wrap\"> \n                  {{book.bookname}}\n                </h3>\n                <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;\">\n                    Author : {{book.bookauthor}}\n                </p>\n                <ion-chip style=\"background-color: #e9f7e9; font-size: x-small;\" [routerLink]=\"['bookdetail', book._id]\"> \n                  More details\n                  <ion-icon  src=\"../assets/icon/ellipsis-horizontal.svg\" style=\"color: darkgreen;\"></ion-icon>\n                </ion-chip>\n                </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <!--<ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content> -->\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/showbylanguage/showbylanguage.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/showbylanguage/showbylanguage.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-back-button {\n  color: #FDFEFE; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 225%;\n  height: auto;\n  margin: 10px auto; }\n\n.bookcard {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  background: transparent;\n  background-color: #E9F7EF;\n  color: #145A32;\n  text-align: center;\n  justify-content: center; }\n\n.bookimage1 {\n  width: 100px;\n  height: 100px;\n  box-shadow: grey; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaG93YnlsYW5ndWFnZS9zaG93YnlsYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBSUUsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJZDtFQUlHLGdCQUFnQjtFQUVoQixZQUFZLEVBQUE7O0FBSWQ7RUFDQyxXQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGtCQUFpQixFQUFBOztBQUduQjtFQUVFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBRWIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUVYLFlBQVk7RUFFWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsdUJBQXVCLEVBQUE7O0FBSXpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFFYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFRLEVBQUE7O0FBR1Y7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUtiO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3dieWxhbmd1YWdlL3Nob3dieWxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZGlzcGxheWNhcmQge1xuICAgLy8gd2lkdGg6IDMwdnc7XG4gICAgLy9oZWlnaHQ6MzB2aDtcbiAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICBcbiAgLmRpc3BsYXlpbm5lcmNhcmQge1xuICAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgICAvL2hlaWdodDozMHZoO1xuICAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgIC8vbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOmdob3N0d2hpdGU7XG4gICB9XG4gIFxuICAgaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICBcbiAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIH1cblxuICBpb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiAjRkRGRUZFO1xufVxuICBcbiAgLmRpc3BsYXlfaGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgXG4gIC5zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC5ib29rLWltYWdlIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAvL2JvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLmJvb2tpbWFnZSB7XG4gICAgd2lkdGg6IDIyNSU7XG4gICAgLy9oZWlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vbWFyZ2luLXRvcDogMjV2aDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLmJvb2tjYXJkIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdFRjtcbiAgICBjb2xvcjogIzE0NUEzMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gIC5ib29raW1hZ2UxIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgIC8vIG1hcmdpbjogNXB4O1xuICAgIGJveC1zaGFkb3c6IGdyZXk7XG4gIH1cbiAgXG4gIC5teS1jdXN0b20tbWVudSB7XG4gICAgLS13aWR0aDogNTAwcHg7XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyIHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgICAtLWJhY2tncm91bmQ6ICMxNDVBMzI7XG4gIH1cbiAgXG4gIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuIFxuICBcbiAgLmNlbnRlcntcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/showbylanguage/showbylanguage.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/showbylanguage/showbylanguage.page.ts ***!
  \*******************************************************/
/*! exports provided: ShowbylanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowbylanguagePage", function() { return ShowbylanguagePage; });
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





var ShowbylanguagePage = /** @class */ (function () {
    function ShowbylanguagePage(navCtrl, authService, booksService, readarsService, baseURL, router, searchedData, menu, favoriteService, fb, file, webview, 
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
    ShowbylanguagePage.prototype.ngOnInit = function () {
        var _this = this;
        //this.showForm = false;
        this.createForm();
        this.setFilteredItems();
        // this.loadStoredImages();
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
    ShowbylanguagePage.prototype.presentLoading = function () {
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
    ShowbylanguagePage.prototype.createForm = function () {
        this.selectCategoryFormGroup = this.fb.group({
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
        });
    };
    ShowbylanguagePage.prototype.presentToast = function (msg) {
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
    ShowbylanguagePage.prototype.ionViewWillEnter = function () {
        this.prepareBookIdsImagesMap();
    };
    ShowbylanguagePage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    ShowbylanguagePage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    ShowbylanguagePage.prototype.prepareBookIdsImagesMap = function () {
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
    ShowbylanguagePage.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    ShowbylanguagePage.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    ShowbylanguagePage.prototype.ngAfterViewInit = function () {
    };
    ShowbylanguagePage.prototype.selectCollectionCategory = function (event) {
        this.showGenre = false;
        this.showLanguage = false;
        if (event.detail.value === 'Genre') {
            this.showGenre = true;
        }
        if (event.detail.value === 'Language') {
            this.showLanguage = true;
        }
    };
    ShowbylanguagePage.prototype.showAllBooks = function () {
        console.log("Inside Show All Books");
    };
    /*
      for every book in books, check the bookgenre.
      if bookgenre matches with the event.detal.value, add that bookentry into genrecollection
    */
    ShowbylanguagePage.prototype.displayGenreCollection = function (event) {
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
    ShowbylanguagePage.prototype.displayLanguageCollection = function (event) {
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
    ShowbylanguagePage.prototype.refreshPage = function () {
        console.log("inside refreshpage");
        window.location.reload();
    };
    ShowbylanguagePage.prototype.refreshBookList = function (event) {
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
    ShowbylanguagePage.prototype.setFilteredItems = function () {
        this.books = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.books);
    };
    ShowbylanguagePage.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowbylanguagePage.prototype, "selectCategoryFormDirective", void 0);
    ShowbylanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showbylanguage',
            template: __webpack_require__(/*! ./showbylanguage.page.html */ "./src/app/showbylanguage/showbylanguage.page.html"),
            styles: [__webpack_require__(/*! ./showbylanguage.page.scss */ "./src/app/showbylanguage/showbylanguage.page.scss")]
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
    ], ShowbylanguagePage);
    return ShowbylanguagePage;
}());



/***/ })

}]);
//# sourceMappingURL=showbylanguage-showbylanguage-module.js.map