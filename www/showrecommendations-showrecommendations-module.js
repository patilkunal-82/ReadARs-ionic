(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showrecommendations-showrecommendations-module"],{

/***/ "./src/app/showrecommendations/showrecommendations.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/showrecommendations/showrecommendations.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShowrecommendationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowrecommendationsPageModule", function() { return ShowrecommendationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _showrecommendations_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showrecommendations.page */ "./src/app/showrecommendations/showrecommendations.page.ts");









var routes = [
    {
        path: '',
        component: _showrecommendations_page__WEBPACK_IMPORTED_MODULE_7__["ShowrecommendationsPage"]
    }
];
var ShowrecommendationsPageModule = /** @class */ (function () {
    function ShowrecommendationsPageModule() {
    }
    ShowrecommendationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"]
            ],
            declarations: [_showrecommendations_page__WEBPACK_IMPORTED_MODULE_7__["ShowrecommendationsPage"]]
        })
    ], ShowrecommendationsPageModule);
    return ShowrecommendationsPageModule;
}());



/***/ }),

/***/ "./src/app/showrecommendations/showrecommendations.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/showrecommendations/showrecommendations.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;\">\n              \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n    <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list-header color=\"\" style=\"margin-bottom: 10px;\">\n    <ion-item class=\"\">\n     <ion-icon style=\"color: #145A32; margin-right: 5px;\" src=\"../assets/icon/list.svg\"></ion-icon>\n      <ion-label style=\"color: #145A32; margin-left: 5px; \"> Readers' recommendations </ion-label>\n    </ion-item>\n  </ion-list-header>\n\n  <ion-list>\n    <ion-virtual-scroll [items]=\"recobooks\">\n      <div *virtualItem=\"let book\">\n        <ion-list>\n          <ion-item>\n            <ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\"   \n              cache=\"true\" button></ion-img>\n              <ion-label>\n                <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                \" class=\"ion-text-wrap\"> \n                  {{book.bookname}}\n                </h3>\n                <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;\">\n                    Author : {{book.bookauthor}}\n                </p>\n                <ion-chip style=\"background-color: #e9f7e9; font-size: x-small;\" [routerLink]=\"['bookdetail', book._id]\"> \n                  More details\n                  <ion-icon  src=\"../assets/icon/ellipsis-horizontal.svg\" style=\"color: darkgreen;\"></ion-icon>\n                </ion-chip>\n                </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ion-virtual-scroll>\n  </ion-list>\n\n\n \n  <ion-infinite-scroll (ionInfinite)=\"loadMoreBooks($event)\">\n    <!--<ion-infinite-scroll-content loadingText=\"..loading\">\n    </ion-infinite-scroll-content> -->\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/showrecommendations/showrecommendations.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/showrecommendations/showrecommendations.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-back-button {\n  color: #FDFEFE; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 225%;\n  height: auto;\n  margin: 10px auto; }\n\n.bookcard {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  background: transparent;\n  background-color: #E9F7EF;\n  color: #145A32;\n  text-align: center;\n  justify-content: center; }\n\n.bookimage1 {\n  width: 100px;\n  height: 100px;\n  box-shadow: grey; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaG93cmVjb21tZW5kYXRpb25zL3Nob3dyZWNvbW1lbmRhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUlFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFJRyxnQkFBZ0I7RUFFaEIsWUFBWSxFQUFBOztBQUlkO0VBQ0MsV0FBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUViLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFFWCxZQUFZO0VBRVosaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUl6QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBRWIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBUSxFQUFBOztBQUdWO0VBRUUscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFhO0VBQ2IscUJBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaG93cmVjb21tZW5kYXRpb25zL3Nob3dyZWNvbW1lbmRhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5kaXNwbGF5Y2FyZCB7XG4gICAvLyB3aWR0aDogMzB2dztcbiAgICAvL2hlaWdodDozMHZoO1xuICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIFxuICAuZGlzcGxheWlubmVyY2FyZCB7XG4gICAgLy8gd2lkdGg6IDMwdnc7XG4gICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgLy9tYXJnaW4tbGVmdDogMzBweDtcbiAgICAgcGFkZGluZzogNXB4O1xuICAgICAvL2JhY2tncm91bmQtY29sb3I6Z2hvc3R3aGl0ZTtcbiAgIH1cbiAgXG4gICBpb24tc2VsZWN0IHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICB9XG4gIFxuICBpb24tbGlzdC1oZWFkZXIge1xuICBcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6ICNGREZFRkU7XG59XG4gIFxuICAuZGlzcGxheV9oZWFkaW5nIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgLmJvb2staW1hZ2Uge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIC8vYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICAuYm9va2ltYWdlIHtcbiAgICB3aWR0aDogMjI1JTtcbiAgICAvL2hlaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLy9tYXJnaW4tdG9wOiAyNXZoO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICAuYm9va2NhcmQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0VGO1xuICAgIGNvbG9yOiAjMTQ1QTMyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgfVxuICBcbiAgLmJvb2tpbWFnZTEge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vbWFyZ2luOiA1cHg7XG4gICAgYm94LXNoYWRvdzogZ3JleTtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1tZW51IHtcbiAgICAtLXdpZHRoOiA1MDBweDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcbiAgXG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gXG4gIFxuICAuY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/showrecommendations/showrecommendations.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/showrecommendations/showrecommendations.page.ts ***!
  \*****************************************************************/
/*! exports provided: ShowrecommendationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowrecommendationsPage", function() { return ShowrecommendationsPage; });
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





var ShowrecommendationsPage = /** @class */ (function () {
    function ShowrecommendationsPage(navCtrl, authService, booksService, readarsService, baseURL, router, searchedData, menu, favoriteService, fb, file, webview, 
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
    ShowrecommendationsPage.prototype.ngOnInit = function () {
        var _this = this;
        //this.showForm = false;
        this.createForm();
        this.setFilteredItems();
        // this.loadStoredImages();
        this.presentLoading();
        /*this.readarsService.getBooks()
        .subscribe(books => {
    
          this.books = books;
          this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.books)
        
        }, errmess => this.errMess = <any>errmess);*/
        this.readarsService.getRecommendedBooks()
            .subscribe(function (recobooks) {
            _this.recobooks = recobooks;
            console.log("RECO BOOK COLLECTION IS ---------->", _this.recobooks);
        }, function (errmess) { return _this.errMess = errmess; });
    };
    ShowrecommendationsPage.prototype.presentLoading = function () {
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
    ShowrecommendationsPage.prototype.createForm = function () {
        this.selectCategoryFormGroup = this.fb.group({
            bookgenre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]]
        });
    };
    ShowrecommendationsPage.prototype.presentToast = function (msg) {
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
    ShowrecommendationsPage.prototype.ionViewWillEnter = function () {
        this.prepareBookIdsImagesMap();
    };
    ShowrecommendationsPage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    ShowrecommendationsPage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    ShowrecommendationsPage.prototype.prepareBookIdsImagesMap = function () {
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
    ShowrecommendationsPage.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    ShowrecommendationsPage.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    ShowrecommendationsPage.prototype.ngAfterViewInit = function () {
    };
    ShowrecommendationsPage.prototype.selectCollectionCategory = function (event) {
        this.showGenre = false;
        this.showLanguage = false;
        if (event.detail.value === 'Genre') {
            this.showGenre = true;
        }
        if (event.detail.value === 'Language') {
            this.showLanguage = true;
        }
    };
    ShowrecommendationsPage.prototype.showAllBooks = function () {
        console.log("Inside Show All Books");
    };
    /*
      for every book in books, check the bookgenre.
      if bookgenre matches with the event.detal.value, add that bookentry into genrecollection
    */
    ShowrecommendationsPage.prototype.displayGenreCollection = function (event) {
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
    ShowrecommendationsPage.prototype.displayLanguageCollection = function (event) {
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
    ShowrecommendationsPage.prototype.refreshPage = function () {
        console.log("inside refreshpage");
        window.location.reload();
    };
    ShowrecommendationsPage.prototype.refreshBookList = function (event) {
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
    ShowrecommendationsPage.prototype.setFilteredItems = function () {
        this.books = this.searchedData.filterItems(this.searchTerm);
        console.log("Searched data", this.books);
    };
    ShowrecommendationsPage.prototype.loadMoreBooks = function (event) {
        setTimeout(function () {
            /*  this.bookList = this.books;
              const newBooks = [...this.bookList];
              this.books = this.bookList.concat(newBooks);*/
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowrecommendationsPage.prototype, "selectCategoryFormDirective", void 0);
    ShowrecommendationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showrecommendations',
            template: __webpack_require__(/*! ./showrecommendations.page.html */ "./src/app/showrecommendations/showrecommendations.page.html"),
            styles: [__webpack_require__(/*! ./showrecommendations.page.scss */ "./src/app/showrecommendations/showrecommendations.page.scss")]
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
    ], ShowrecommendationsPage);
    return ShowrecommendationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=showrecommendations-showrecommendations-module.js.map