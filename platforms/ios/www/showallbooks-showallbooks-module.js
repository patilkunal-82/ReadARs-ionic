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

module.exports = "\n<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;\">\n    \n    </ion-title>\n  </ion-toolbar>\n\n  \n  \n</ion-header> \n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list-header color=\"\" style=\"margin-bottom: 10px;\"> \n    <ion-item class=\"\">\n     <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n      <ion-label style=\"color: #145A32; margin-left: 5px; \"> All books in the shelf </ion-label>\n    </ion-item>\n  </ion-list-header>\n\n  <ion-spinner *ngIf=\"showSpinner\" class=\"spin\"></ion-spinner>\n\n <ion-list *ngIf=\"!showSpinner\">\n    <ion-virtual-scroll [items]=\"allbooks\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item [routerLink]=\"['bookdetail', book._id]\">\n            <!--<ion-thumbnail>-->\n              <!--<ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\"   \n              cache=\"true\" button></ion-img>-->\n              <img-loader [src]=\"(bookIdImageMap.get(book._id))\" class=\"bookimage2\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n            <!--</ion-thumbnail>-->\n              <ion-label>\n                <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                \" class=\"ion-text-wrap\"> \n                  {{book.bookname}}\n                </h3>\n                <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;\">\n                    Author : {{book.bookauthor}}\n                </p>\n                </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>\n\n  <!--<ion-list *ngIf=\"showSkeleton\">\n    <ion-virtual-scroll  [items]=\"allbooks\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item>\n            \n            <ion-thumbnail>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n              <ion-label>\n                <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                \" class=\"ion-text-wrap\"> \n                  <ion-skeleton-text animated></ion-skeleton-text>\n                </h3>\n                <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;\">\n                   <ion-skeleton-text animated></ion-skeleton-text>\n                </p>\n                </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>-->\n    \n  <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <!--<ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content> -->\n  </ion-infinite-scroll>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/showallbooks/showallbooks.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/showallbooks/showallbooks.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-label {\n  margin-left: 10px; }\n\nion-back-button {\n  color: #FDFEFE; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 225%;\n  height: 4%;\n  margin: 10px auto; }\n\n.bookcard {\n  width: 20%;\n  height: 20%;\n  margin: 10px;\n  text-align: center; }\n\n.bookimage1 {\n  width: 50px;\n  height: 50px;\n  box-shadow: grey; }\n\n.bookimage2 {\n  width: 90px;\n  height: 100px;\n  box-shadow: grey; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nion-spinner {\n  width: 28px;\n  height: 28px;\n  stroke: #444;\n  fill: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaG93YWxsYm9va3Mvc2hvd2FsbGJvb2tzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFJRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUlkO0VBSUcsZ0JBQWdCO0VBRWhCLFlBQVksRUFBQTs7QUFJZDtFQUNDLFdBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWlCLEVBQUE7O0FBR25CO0VBRUUsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFFYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBRVgsVUFBVTtFQUVWLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUtwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFRLEVBQUE7O0FBR1Y7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUtiO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFJdkIsMkNBQUE7O0FBQ047RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hvd2FsbGJvb2tzL3Nob3dhbGxib29rcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmRpc3BsYXljYXJkIHtcbiAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbiAgXG4gIC5kaXNwbGF5aW5uZXJjYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAvL21hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIC8vYmFja2dyb3VuZC1jb2xvcjpnaG9zdHdoaXRlO1xuICAgfVxuICBcbiAgIGlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gIH1cbiAgXG4gIGlvbi1saXN0LWhlYWRlciB7XG4gIFxuICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNGREZFRkU7XG59XG4gIFxuICAuZGlzcGxheV9oZWFkaW5nIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmJvb2staW1hZ2Uge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIC8vYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICAuYm9va2ltYWdlIHtcbiAgICB3aWR0aDogMjI1JTtcbiAgICAvL2hlaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDQlO1xuICAgIC8vbWFyZ2luLXRvcDogMjV2aDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICBcbiAgLmJvb2tjYXJkIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy9vYmplY3QtZml0OiBjb3ZlcjtcbiAgICBcbiAgfVxuICBcbiAgLmJvb2tpbWFnZTEge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvL21hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogZ3JleTtcbiAgfVxuXG4gIC5ib29raW1hZ2UyIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3gtc2hhZG93OiBncmV5O1xuICB9XG4gIFxuICAubXktY3VzdG9tLW1lbnUge1xuICAgIC0td2lkdGg6IDUwMHB4O1xuICB9XG4gIFxuICBpb24tdG9vbGJhciB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xuICB9XG4gIFxuICAubXktY3VzdG9tLWNsYXNzIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gICAgLS1zcGlubmVyLWNvbG9yOiAjZmZmO1xuICBcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiBcbiAgXG4gIC5jZW50ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgXG4gIH1cblxuICAgICAgLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3BpbntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmlvbi1zcGlubmVyIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgc3Ryb2tlOiAjNDQ0O1xuICBmaWxsOiAjMjIyO1xufSJdfQ== */"

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
    filePath, httpClient, imageLoaderService, toastCtrl, zone, loadingController, alertCtrl) {
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
        this.alertCtrl = alertCtrl;
        this.images = [];
        this.allbooks = [];
        this.recobooks = [];
        this.bookGenreCollection = [];
        this.bookLanguageCollection = [];
        this.favorites = [];
        this.favoriteBooks = [];
        this.bookgenre = _shared_book__WEBPACK_IMPORTED_MODULE_3__["BookGenre"];
        this.booklanguage = _shared_book__WEBPACK_IMPORTED_MODULE_3__["BookLanguage"];
        this.collectonCategory = _shared_book__WEBPACK_IMPORTED_MODULE_3__["CollectionCategory"];
        this.showBooks = false;
        this.showSkeleton = true;
        this.showSpinner = true;
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
        this.searchTerm = "";
        this.descending = false;
        this.column = 'bookgenre';
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ShowallbooksPage.prototype.ngOnInit = function () {
        //this.showForm = false;
        //this.createForm();
        //this.setFilteredItems();
        var _this = this;
        //this.presentLoading();
        /*this.readarsService.getBooks()
        .subscribe(books => {
          this.showBooks = true;
          this.allbooks = books;
          this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.allbooks)
        
        }, errmess => {
          this.showBooks = false;
          this.errMess = <any>errmess
        });*/
        /*this.readarsService.getRecommendedBooks()
        .subscribe(recobooks => {
    
          this.recobooks = recobooks;
          console.log("RECO BOOK COLLECTION IS ---------->", this.recobooks)
    
        }, errmess => this.errMess = <any>errmess);*/
        setTimeout(function () {
            //this.showSkeleton = false;
            _this.showSpinner = false;
        }, 3000);
        this.readarsService.getBooks()
            .subscribe(function (books) {
            _this.showBooks = true;
            _this.allbooks = books;
            _this.prepareBookIdsImagesMap();
            console.log("BOOK COLLECTION IS ---------->", _this.allbooks);
        }, function (errmess) {
            _this.showBooks = false;
            _this.errMess = errmess;
        });
    };
    ShowallbooksPage.prototype.ionViewDidEnter = function () {
        /*setTimeout(() => {
          this.showSkeleton = false;
        }, 3000);
    
        this.readarsService.getBooks()
        .subscribe(books => {
          this.showBooks = true;
          this.allbooks = books;
          this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.allbooks)
        
        }, errmess => {
          this.showBooks = false;
          this.errMess = <any>errmess
        });*/
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
        //this.prepareBookIdsImagesMap();
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
    ShowallbooksPage.prototype.alertManagement = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, role;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: message,
                            header: "Please note",
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShowallbooksPage.prototype.displayGenreCollection = function (event) {
        this.bookGenreCollection = [];
        console.log("EVENT DETAIL VALUE", event.detail.value);
        var i = 0;
        var j = 0;
        while (i < this.allbooks.length) {
            if (this.allbooks[i].bookgenre === event.detail.value) {
                this.bookGenreCollection[j] = this.allbooks[i];
                j++;
            }
            i++;
        }
        if ((this.bookGenreCollection === undefined || this.bookGenreCollection.length == 0)) {
            this.alertManagement("Books of genre " + event.detail.value + " are NOT AVAILABLE in the bookshelf currently");
        }
        console.log("BOOK GENRE & COLLECTION", event.detail.value, this.bookGenreCollection.length);
    };
    ShowallbooksPage.prototype.displayLanguageCollection = function (event) {
        this.bookLanguageCollection = [];
        console.log("EVENT DETAIL VALUE", event.detail.value);
        var i = 0;
        var j = 0;
        while (i < this.allbooks.length) {
            if (this.allbooks[i].booklanguage === event.detail.value) {
                this.bookLanguageCollection[j] = this.allbooks[i];
                j++;
            }
            i++;
        }
        if ((this.bookLanguageCollection === undefined || this.bookLanguageCollection.length == 0)) {
            this.alertManagement("Books in " + event.detail.value + " language are NOT AVAILABLE in the bookshelf currently");
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
                _this.allbooks = books;
            }, function (errmess) { return _this.errMess = errmess; });
            _this.clearCache();
            event.target.complete();
        }, 2000);
    };
    ShowallbooksPage.prototype.setFilteredItems = function () {
        this.allbooks = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.allbooks);
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]])
    ], ShowallbooksPage);
    return ShowallbooksPage;
}());



/***/ })

}]);
//# sourceMappingURL=showallbooks-showallbooks-module.js.map