(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");









var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"] }]),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"],
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_7__["Tab1Page"]],
            exports: []
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Discover \n    </ion-title>\n  </ion-toolbar>\n  \n  \n</ion-header> \n\n\n<ion-content>\n \n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row style=\"margin-top: 80px;\">\n    <ion-col>\n      <ion-card class=\"bookcard\" [routerLink]=\"['showallbooks']\" button>\n        <ion-card-header>\n          <img class=\"displayimg\" src=\"../assets/images/allbooks.png\" />\n        </ion-card-header>\n        <!--<ion-card-content>\n          <ion-card-subtitle style=\"color:darkgreen; text-align: center; padding-bottom: 50px;\">\n            All Books\n          </ion-card-subtitle>\n        </ion-card-content>-->\n      </ion-card>\n      \n    </ion-col>\n    <ion-col >\n      <ion-card class=\"bookcard\" [routerLink]=\"['showrecommendations']\" button >\n        <ion-card-header>\n          <img class=\"displayimg\" src=\"../assets/images/popular.png\" />\n        </ion-card-header>\n        <!--<ion-card-content>\n          <ion-card-subtitle style=\"color:darkgreen; text-align: center; padding-bottom: 50px;\">\n            Recommendations\n          </ion-card-subtitle>\n        </ion-card-content>-->\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-top: 0px;\">\n    <ion-col>\n      <ion-card class=\"bookcard\" [routerLink]=\"['showbylanguage']\" button>\n        <ion-card-header>\n          <img class=\"displayimg\" src=\"../assets/images/languages.png\" />\n          <!--<ion-icon size=\"x-large\" style=\"color: #145a32; margin-right: 5px;\" src=\"../assets/icon/language.svg\"></ion-icon>-->\n        </ion-card-header>\n        <!--<ion-card-content>\n          <ion-card-subtitle style=\"color:darkgreen; text-align: center; padding-bottom: 50px;\">\n            Languages\n          </ion-card-subtitle>\n        </ion-card-content>-->\n      </ion-card>\n     \n    </ion-col>\n    <ion-col>\n      <ion-card class=\"bookcard\" [routerLink]=\"['showbygenre']\" button>\n        <ion-card-header> \n          <img class=\"displayimg\" src=\"../assets/images/genres.png\" />\n          <!--<ion-icon size=\"x-large\" style=\"color: #145a32; margin-right: 5px;\" src=\"../assets/icon/albums.svg\"></ion-icon>-->\n        </ion-card-header>\n        <!--<ion-card-content>\n          <ion-card-subtitle style=\"color:darkgreen; text-align: center; padding-bottom: 50px;\">\n            Genres\n          </ion-card-subtitle>\n        </ion-card-content>-->\n      </ion-card>\n    </ion-col>\n   \n  </ion-row>\n\n  <!--<ion-list>\n\n    <ion-list-header color=\"\">\n      <ion-item class=\"\">\n       <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n        <ion-label style=\"color: #145A32; margin-left: 5px; \"> ALL THE BOOKS </ion-label>\n      </ion-item>\n    </ion-list-header>\n    <ion-virtual-scroll [items]=\"books\">\n      <div *virtualItem=\"let book\">\n        <ion-item >\n          <ion-img class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\" [routerLink]=\"['bookdetail', book._id]\"  \n           button></ion-img>\n    </ion-item>\n      </div>\n    </ion-virtual-scroll>\n\n  </ion-list>-->\n\n  <!--<ion-list>\n    <ion-list-header color=\"\">\n      <ion-item class=\"\">\n       <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n        <ion-label style=\"color: #145A32; margin-left: 5px; \"> ALL THE BOOKS </ion-label>\n      </ion-item>\n    </ion-list-header>\n    \n    <ion-item-sliding>\n      <ion-slides [options]=\"sliderConfig\">\n        <ion-slide *ngFor=\"let book of books\">\n            <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(book._id))\" [routerLink]=\"['bookdetail', book._id]\"  \n            useImg (load)=\"onImageLoad($event)\" button></img-loader>\n        </ion-slide>\n      </ion-slides> \n    </ion-item-sliding>\n\n    <ion-list-header color=\"\">\n      <ion-item class=\"\">\n        <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/albums.svg\"></ion-icon>\n        <ion-label style=\"color:  #145A32; margin-left: 5px\"> BOOKS BY CATEGORIES </ion-label>\n      </ion-item>\n    </ion-list-header>\n\n    <ion-select (ionChange)=\"selectCollectionCategory($event)\" interface=\"popover\" placeholder=\"Choose category..\">\n      <ion-select-option *ngFor=\"let category of collectonCategory\" [value]=\"category\"> {{category}}</ion-select-option>\n   </ion-select>\n\n    <ion-item-sliding *ngIf=\"showGenre\">\n      <ion-select (ionChange)=\"displayGenreCollection($event)\" interface=\"popover\" placeholder=\"Select genre..\">\n        <ion-select-option *ngFor=\"let bgenre of bookgenre\" [value]=\"bgenre\"> {{bgenre}}</ion-select-option>\n     </ion-select>\n  \n      <ion-slides [options]=\"sliderConfig\" *ngIf=\"!((bookGenreCollection === undefined) || (bookGenreCollection.length == 0))\">\n        <ion-slide *ngFor=\"let bookGenre of bookGenreCollection\" >\n          \n          <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(bookGenre._id))\" [routerLink]=\"['bookdetail', bookGenre._id]\"  \n                useImg (load)=\"onImageLoad($event)\" button></img-loader>\n\n        </ion-slide>\n      </ion-slides>\n\n    </ion-item-sliding>\n\n    <ion-item-sliding *ngIf=\"showLanguage\">\n      <ion-select (ionChange)=\"displayLanguageCollection($event)\" interface=\"popover\" placeholder=\"Select language..\">\n        <ion-select-option *ngFor=\"let blanguage of booklanguage\" [value]=\"blanguage\"> {{blanguage}}</ion-select-option>\n     </ion-select>\n      <ion-slides [options]=\"sliderConfig\" >\n        <ion-slide *ngFor=\"let bookLanguage of bookLanguageCollection\" >\n          \n          <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(bookLanguage._id))\" \n          [routerLink]=\"['bookdetail', bookLanguage._id]\" useImg (load)=\"onImageLoad($event)\" button></img-loader>\n       \n\n        </ion-slide>\n      </ion-slides>\n    </ion-item-sliding>\n\n    <ion-list-header color=\"\">\n      <ion-item class=\"\">\n      <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/thumbs-up.svg\"></ion-icon>\n          <ion-label style=\"color: #145A32 ; margin-left: 5px;\">READERS' RECOMMENDATIONS</ion-label>\n      </ion-item>\n    </ion-list-header>\n    <ion-item-sliding>\n      <ion-slides [options]=\"sliderConfig\" >\n        <ion-slide *ngFor=\"let recobook of recobooks\" >\n          \n          <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(recobook._id))\" \n              [routerLink]=\"['bookdetail',recobook._id]\" useImg (load)=\"onImageLoad($event)\" button></img-loader>\n         \n\n        </ion-slide>\n      </ion-slides>\n    </ion-item-sliding>\n  </ion-list>-->\n \n\n \n\n\n  \n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <!--<ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content> -->\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displayimg {\n  height: 120px; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 100%;\n  height: auto; }\n\n.bookcard {\n  width: 145px;\n  height: 145px;\n  background-color: white;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.bookimage1 {\n  width: 150px;\n  height: 150px;\n  margin: 5px; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\nion-icon {\n  font-size: 64px; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVHLGFBQWEsRUFBQTs7QUFNaEI7RUFJRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUlkO0VBSUcsZ0JBQWdCO0VBRWhCLFlBQVksRUFBQTs7QUFJZDtFQUNDLFdBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWlCLEVBQUE7O0FBR25CO0VBRUUsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUViLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFFWCxZQUFZLEVBQUE7O0FBS2Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFRLEVBQUE7O0FBR1Y7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRpc3BsYXlpbWcge1xuICAvLyBkaXNwbGF5OiBibG9jaztcbiAgIGhlaWdodDogMTIwcHg7XG4gICAvL21hcmdpbi10b3A6IGF1dG87XG4gICAvL21hcmdpbi1sZWZ0OiBhdXRvO1xuICAgLy9tYXJnaW4tcmlnaHQ6IGF1dG87XG4gIFxufVxuLmRpc3BsYXljYXJkIHtcbiAvLyB3aWR0aDogMzB2dztcbiAgLy9oZWlnaHQ6MzB2aDtcbiAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5kaXNwbGF5aW5uZXJjYXJkIHtcbiAgLy8gd2lkdGg6IDMwdnc7XG4gICAvL2hlaWdodDozMHZoO1xuICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgbWFyZ2luLXRvcDogYXV0bztcbiAgIC8vbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICBwYWRkaW5nOiA1cHg7XG4gICAvL2JhY2tncm91bmQtY29sb3I6Z2hvc3R3aGl0ZTtcbiB9XG5cbiBpb24tc2VsZWN0IHtcbiAgd2lkdGg6MTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDoyMHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuXG4gIHBhZGRpbmctbGVmdDowcHg7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uZGlzcGxheV9oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYm9vay1pbWFnZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLy9ib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uYm9va2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vaGVpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIC8vbWFyZ2luLXRvcDogMjV2aDtcbiAgLy9tYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmJvb2tjYXJkIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDE0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5ib29raW1hZ2UxIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgLS1zcGlubmVyLWNvbG9yOiAjZmZmO1xuXG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmNlbnRlcntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgXG59XG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
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





//const STORAGE_KEY = 'book_images';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, authService, booksService, readarsService, baseURL, router, searchedData, menu, favoriteService, fb, file, webview, 
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
        this.sliderConfig = {
            slidesPerView: 4,
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
                    swiper.classNames.push(swiper.params.containerModifierClass + "3d");
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function () {
                    var swiper = this;
                    var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid, $ = swiper.$;
                    var params = swiper.params.coverflowEffect;
                    var isHorizontal = swiper.isHorizontal();
                    var transform$$1 = swiper.translate;
                    var center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    var rotate = isHorizontal ? params.rotate : -params.rotate;
                    var translate = params.depth;
                    // Each slide offset from center
                    for (var i = 0, length_1 = slides.length; i < length_1; i += 1) {
                        var $slideEl = slides.eq(i);
                        var slideSize = slidesSizesGrid[i];
                        var slideOffset = $slideEl[0].swiperSlideOffset;
                        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
                        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        var ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = center + "px 50%";
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
        this.pages = [];
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
    Tab1Page.prototype.ngOnInit = function () {
        //this.showForm = false;
        this.createForm();
        this.setFilteredItems();
        // this.loadStoredImages();
        //this.presentLoading();
        /*this.readarsService.getBooks()
        .subscribe(books => {
    
          this.books = books;
          this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.books)
        
        }, errmess => this.errMess = <any>errmess);
    
        this.readarsService.getRecommendedBooks()
        .subscribe(recobooks => {
    
          this.recobooks = recobooks;
          console.log("RECO BOOK COLLECTION IS ---------->", this.recobooks)
    
        }, errmess => this.errMess = <any>errmess);*/
    };
    Tab1Page.prototype.presentLoading = function () {
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
    Tab1Page.prototype.createForm = function () {
        this.selectCategoryFormGroup = this.fb.group({
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
        });
    };
    Tab1Page.prototype.presentToast = function (msg) {
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
    Tab1Page.prototype.ionViewWillEnter = function () {
        // this.prepareBookIdsImagesMap();
    };
    Tab1Page.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    Tab1Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    Tab1Page.prototype.prepareBookIdsImagesMap = function () {
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
    Tab1Page.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    Tab1Page.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    Tab1Page.prototype.ngAfterViewInit = function () {
    };
    Tab1Page.prototype.selectCollectionCategory = function (event) {
        this.showGenre = false;
        this.showLanguage = false;
        if (event.detail.value === 'Genre') {
            this.showGenre = true;
        }
        if (event.detail.value === 'Language') {
            this.showLanguage = true;
        }
    };
    Tab1Page.prototype.showAllBooks = function () {
        console.log("Inside Show All Books");
    };
    /*
      for every book in books, check the bookgenre.
      if bookgenre matches with the event.detal.value, add that bookentry into genrecollection
    */
    Tab1Page.prototype.displayGenreCollection = function (event) {
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
    Tab1Page.prototype.displayLanguageCollection = function (event) {
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
    Tab1Page.prototype.refreshPage = function () {
        console.log("inside refreshpage");
        window.location.reload();
    };
    Tab1Page.prototype.refreshBookList = function (event) {
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
    Tab1Page.prototype.setFilteredItems = function () {
        this.books = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.books);
    };
    Tab1Page.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab1Page.prototype, "selectCategoryFormDirective", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
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
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map