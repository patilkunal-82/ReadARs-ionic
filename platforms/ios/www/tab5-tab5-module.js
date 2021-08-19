(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./src/app/services/arenabled.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/arenabled.service.ts ***!
  \***********************************************/
/*! exports provided: ARenabledService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARenabledService", function() { return ARenabledService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");








var ARenabledService = /** @class */ (function () {
    function ARenabledService(http, auth, processHTTPMsgService) {
        this.http = http;
        this.auth = auth;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    ARenabledService.prototype.getARenabledBooks = function () {
        if (!this.auth.isLoggedIn()) {
            return null;
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'arenabled?isARenabled=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHTTPMsgService.handleError));
    };
    ARenabledService.prototype.isARenabled = function (id) {
        var _this = this;
        if (!this.auth.isLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ exists: false, book: null });
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'arenabled/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    ARenabledService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"]])
    ], ARenabledService);
    return ARenabledService;
}());



/***/ }),

/***/ "./src/app/services/plugin-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/plugin-service.service.ts ***!
  \****************************************************/
/*! exports provided: PluginServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginServiceService", function() { return PluginServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var PluginServiceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PluginServiceService, _super);
    function PluginServiceService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginServiceService.prototype.add = function (num1, num2) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, 'add', {}, [{ param1: num1, param2: num2 }]);
    };
    PluginServiceService.prototype.getContacts = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, 'getContacts', {}, [{}]);
    };
    PluginServiceService.prototype.viewAR = function (bookID, bookName, anchorContentURLsMap) {
        console.log("anchorContentURLsMap", anchorContentURLsMap);
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, 'viewAR', {}, [{ param1: bookName, param2: Array.from(anchorContentURLsMap.entries()),
                param3: bookID }]);
    };
    //name in package.json file of plugin
    PluginServiceService.pluginName = 'arplugin';
    // plugin id in the plugin.xml of plugin
    PluginServiceService.plugin = 'cordova-plugin-arplugin';
    // clobbers target in the plugin.xml of plugin
    PluginServiceService.pluginRef = 'ArPlugin';
    PluginServiceService.repo = 'https://github.com/patilkunal-82/arplugin.git';
    PluginServiceService.platforms = ['iOS'];
    PluginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PluginServiceService);
    return PluginServiceService;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");
/* harmony import */ var _viewaranchorindex_viewaranchorindex_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../viewaranchorindex/viewaranchorindex.module */ "./src/app/viewaranchorindex/viewaranchorindex.module.ts");









var routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_7__["Tab5Page"]
    }
];
var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _viewaranchorindex_viewaranchorindex_module__WEBPACK_IMPORTED_MODULE_8__["ViewaranchorindexPageModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"]
            ],
            declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_7__["Tab5Page"]]
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());



/***/ }),

/***/ "./src/app/tab5/tab5.page.html":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Immerse\n    </ion-title>\n  </ion-toolbar>\n\n \n\n</ion-header> \n\n<ion-content>\n   \n      \n        <!--<div id=\"container\">\n          <ion-button (click)=\"add()\">Add Numbers</ion-button>\n            <ion-list>\n              <ion-item>{{total}}</ion-item>\n            </ion-list>\n        </div>-->\n\n        \n         <!--<ion-button expand=\"full\" (click)=\"loadContacts()\">\n            Load Contacts\n          </ion-button>-->\n         \n          <!--<ion-list>\n            <ion-item *ngFor=\"let c of contacts\">\n              <ion-label>\n                {{ c.firstName }} {{ c.lastName }}\n                <p>\n                  {{ c.telephone }}\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>-->\n   \n   \n\n  \n       <ion-label style=\"color: gray; margin-left: 30px;\n       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n       font-size: smaller;\">\n        AR experience supported only on <strong>iOS 13.0 & beyond</strong>\n       </ion-label>\n    \n    <!--<ion-list>\n      <ion-item *ngFor=\"let book of arbooks\">\n        <ion-row>\n          <ion-col>\n            <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(book._id))\"  \n            useImg (load)=\"onImageLoad($event)\" button>\n            </img-loader>\n          </ion-col>\n          <ion-col>\n            <ion-row>\n              <ion-button  shape=\"round\" style=\"color: #145A32\" margin (click)=\"viewAR(book._id, book.bookname)\">\n               \n                <span style=\"color:  #145A32; margin-left: 5px; \" class=\"ion-text-left\">View in AR</span>\n              </ion-button>\n            </ion-row>\n            <ion-row>\n              <ion-button  shape=\"round\" style=\"color: #145A32\" margin  (click)=\"viewAnchors(book._id, book.bookname)\">AR Anchors</ion-button>\n            </ion-row>\n          </ion-col>   \n        </ion-row>\n     </ion-item>\n    </ion-list>-->\n\n    <ion-list style=\"margin-top:30px;\">\n      <ion-virtual-scroll [items]=\"arbooks\">\n        <div *virtualItem=\"let book\">\n          <ion-list>\n            <ion-item>\n              <ion-img style=\"box-shadow: olivedrab;\" [src]=\"(bookIdImageMap.get(book._id))\"  class=\"bookimage1\" \n              cache=\"true\" button>\n             </ion-img>\n              <ion-button  shape=\"round\"  style=\"margin-left: 5px;\" (click)=\"viewAR(book._id, book.bookname)\">\n                <span style=\"color: darkgreen; text-align: center;\">View in AR</span>\n              </ion-button>\n              <span shape=\"round\" (click)=\"viewAnchors(book._id, book.bookname)\" button \n              style=\"color: #145A32; background-color: white; margin-left: 10px; font-size: small;\">\n              AR Anchors\n            </span>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-virtual-scroll>\n    </ion-list>\n\n    <!--<ion-list>\n      <ion-virtual-scroll [items]=\"books\">\n        <div *virtualItem=\"let book\">\n          <ion-list>\n            <ion-item>\n              <ion-img style=\"box-shadow: olivedrab;\" class=\"bookimage1\" [src]=\"(bookIdImageMap.get(book._id))\"   \n                cache=\"true\" button></ion-img>\n                <ion-label>\n                  <h3 style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  \" class=\"ion-text-wrap\"> \n                    {{book.bookname}}\n                  </h3>\n                  <p style=\"color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                    font-size: small;\">\n                      Author : {{book.bookauthor}}\n                  </p>\n                <ion-chip style=\"background-color: #e9f7e9; font-size: x-small;\" [routerLink]=\"['bookdetail', book._id]\"> \n                  More details\n                  <ion-icon  src=\"../assets/icon/ellipsis-horizontal.svg\" style=\"color: darkgreen;\" size=\"mini\"></ion-icon>\n                </ion-chip>\n  \n                  </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-virtual-scroll>\n    </ion-list>-->\n   \n</ion-content> \n\n \n\n\n"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #145A32; }\n\niframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: none; }\n\n.bookimage {\n  width: auto;\n  height: 100px;\n  margin: 5px; }\n\n.bookimage1 {\n  width: 100px;\n  height: 100px;\n  box-shadow: grey; }\n\nion-button {\n  --background: #e9f7e9; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUVYLGFBQWE7RUFFYixXQUFXLEVBQUE7O0FBSWI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUViLGdCQUFnQixFQUFBOztBQUduQjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Q7RUFDRSxrQkFBYTtFQUNiLHFCQUFnQjtFQUVoQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cblxuaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmJvb2tpbWFnZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLy9oZWlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvL21hcmdpbi10b3A6IDI1dmg7XG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgfVxuXG4gIC5ib29raW1hZ2UxIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvL21hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogZ3JleTtcbiAgfVxuXG4gaW9uLWJ1dHRvbiB7XG4gICAtLWJhY2tncm91bmQ6ICNlOWY3ZTk7XG4gfVxuXG4gIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_plugin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plugin-service.service */ "./src/app/services/plugin-service.service.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_arenabled_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/arenabled.service */ "./src/app/services/arenabled.service.ts");
/* harmony import */ var _viewaranchorindex_viewaranchorindex_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../viewaranchorindex/viewaranchorindex.page */ "./src/app/viewaranchorindex/viewaranchorindex.page.ts");











var Tab5Page = /** @class */ (function () {
    function Tab5Page(modalCtrl, pluginService, alertController, readarsService, imageLoaderService, booksService, arenabledService, loadingController) {
        this.modalCtrl = modalCtrl;
        this.pluginService = pluginService;
        this.alertController = alertController;
        this.readarsService = readarsService;
        this.imageLoaderService = imageLoaderService;
        this.booksService = booksService;
        this.arenabledService = arenabledService;
        this.loadingController = loadingController;
        this.contacts = [];
        this.images = [];
        this.arbooks = [];
        this.recobooks = [];
        this.bookGenreCollection = [];
        this.bookLanguageCollection = [];
        this.mapAnchorContentMap = new Map();
        this.mapAnchorContentMapArray = [];
        this.mapAnchorContentMapArrayValues = [];
        this.arrayAnchorContentURLs = [];
        this.loaded = false;
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
    }
    Tab5Page.prototype.ngOnInit = function () {
        var _this = this;
        /*this.readarsService.getBooks()
        .subscribe(books => {
          this.books = books;
          this.prepareBookIdsImagesMap();
          console.log("BOOK COLLECTION IS ---------->", this.books)
        }, errmess => this.errMess = <any>errmess);*/
        this.presentLoading();
        this.arenabledService.getARenabledBooks()
            .subscribe(function (arbooks) {
            _this.arbooks = arbooks;
            console.log("AR Books", _this.arbooks);
            _this.prepareBookIdsImagesMap();
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab5Page.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Loading...please wait',
                            duration: 2000
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
    Tab5Page.prototype.prepareBookIdsImagesMap = function () {
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
    Tab5Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    Tab5Page.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    Tab5Page.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    Tab5Page.prototype.viewAR = function (bookId, bookName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /*
                   1. arViewController.bookAnchorContentNames = send bookAnchorContentNames
                      bookAnchorContetNames should be in the format
                      a0 => a0c1, a0c2, aoc3
                      a1 => a1c1, a1c2, a1c3
             
                   2. arViewController.bookDirectoryPath = send bookDirectoryPath
                   3. arViewController.currentBookName = send current bookname
                */
                this.getbookARdata(bookId, bookName);
                return [2 /*return*/];
            });
        });
    };
    Tab5Page.prototype.getbookARdata = function (bookId, bookName) {
        var _this = this;
        var bookAnchorContentURLsMap = new Map();
        this.booksService.getBookARContent(bookId)
            .subscribe(function (x) {
            _this.imgURLs = x;
            _this.booksService.getBookPlistXml(bookId)
                .subscribe(function (plist) {
                if (plist && _this.imgURLs) {
                    _this.plistCopy = plist;
                    console.log("imgURLs", _this.imgURLs);
                    console.log("plist copy", _this.plistCopy);
                    /*
                    start reading the plist copy. get the values of all the key elements
                    follow the order of the files and assign urls to keys in that orders
                    */
                    var domParser = new DOMParser();
                    var xmlDocument = domParser.parseFromString(_this.plistCopy.toString(), 'text/xml');
                    console.log("xmlDocument from s3", xmlDocument);
                    var keys = [];
                    var values = [];
                    var keyvalues = [];
                    var mainKeys = [];
                    var mapArray = [new Map()];
                    var keyElLength = xmlDocument.getElementsByTagName('key').length;
                    var valElLength = xmlDocument.getElementsByTagName('value').length;
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < valElLength; i++) {
                        values[i] = xmlDocument.getElementsByTagName('value')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                        keyvalues.push(keys[i]);
                        for (var j = 0; j < valElLength; j++) {
                            if (values[j].includes(keys[i])) {
                                keyvalues.push(values[j]);
                            }
                        }
                    }
                    console.log("keyvalues", keyvalues);
                    for (var i = 0; i < keyvalues.length && i < _this.imgURLs.length; i++) {
                        bookAnchorContentURLsMap.set(keyvalues[i], _this.imgURLs[i]);
                    }
                    for (var _i = 0, _a = Array.from(bookAnchorContentURLsMap.entries()); _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (entry[0].indexOf("content") === -1) {
                            mainKeys.push(entry[0]);
                        }
                    }
                    //console.log("Main Keys", mainKeys);
                    for (var i = 0; i < mainKeys.length; i++) {
                        var entry1;
                        var newContentMap = new Map();
                        var newAnchorMap = new Map();
                        for (var _b = 0, _c = Array.from(bookAnchorContentURLsMap.entries()); _b < _c.length; _b++) {
                            var entry = _c[_b];
                            if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].includes('content')) {
                                newContentMap.set(entry[0], entry[1]);
                            }
                            if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].indexOf('content') === -1)) {
                                newAnchorMap.set(entry[0], entry[1]);
                            }
                        }
                        // console.log("new content map", newContentMap);
                        // console.log("new anchor map", newAnchorMap);
                        _this.mapAnchorContentMap.set(mainKeys[i], [newAnchorMap, newContentMap]);
                    }
                    // console.log("mapAnchorContentMap", this.mapAnchorContentMap)
                    _this.mapAnchorContentMapArray = Array.from(_this.mapAnchorContentMap.entries());
                    // console.log("mapAnchorContentMapArray", this.mapAnchorContentMapArray)
                    for (var _d = 0, _e = _this.mapAnchorContentMapArray; _d < _e.length; _d++) {
                        var mapAnchorContentEntry = _e[_d];
                        //console.log("mapanchor content entry", mapAnchorContentEntry[0])
                        // console.log(mapAnchorContentEntry[1][1].values());
                        _this.mapAnchorContentMapArrayValues.push(Array.from(mapAnchorContentEntry[1][1].entries()));
                    }
                    // console.log("mapAnchorContentMapArrayValues", this.mapAnchorContentMapArrayValues);
                    console.log("bookAnchorContentURLsMap", bookAnchorContentURLsMap);
                    var anchorContentURLsMap = new Map();
                    for (var i = 0; i < mainKeys.length; i++) {
                        var arrayContentURLs = [];
                        var anchorURL = void 0;
                        for (var _f = 0, _g = Array.from(bookAnchorContentURLsMap.entries()); _f < _g.length; _f++) {
                            var entry = _g[_f];
                            if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].includes('content') && entry[1].includes(bookId)) {
                                arrayContentURLs.push(entry[1]);
                            }
                            if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].indexOf('content') === -1) && entry[1].includes(bookId)) {
                                anchorURL = entry[1];
                            }
                        }
                        anchorContentURLsMap.set(anchorURL, arrayContentURLs);
                    }
                    console.log("bookID is ", bookId);
                    console.log("book name is ", bookName);
                    console.log("Final anchorContentURLsMap", anchorContentURLsMap);
                    //calling the plugin service method
                    _this.pluginService.viewAR(bookId, bookName, anchorContentURLsMap);
                }
                else {
                    console.log("plist is empty");
                    return;
                }
            }), function (errMess) { return console.log(errMess); };
        }, function (errmess) { return _this.errMess = errmess; });
    };
    Tab5Page.prototype.viewAnchors = function (bookId, bookName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var viewAnchorsModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("inside tab5 ID and Name", bookId, bookName);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _viewaranchorindex_viewaranchorindex_page__WEBPACK_IMPORTED_MODULE_8__["ViewaranchorindexPage"],
                                componentProps: {
                                    bookid: bookId,
                                    bookname: bookName
                                }
                            })];
                    case 1:
                        viewAnchorsModal = _a.sent();
                        return [2 /*return*/, viewAnchorsModal.present()];
                }
            });
        });
    };
    Tab5Page.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    Tab5Page.prototype.add = function () {
        var _this = this;
        this.pluginService.add(5, 3).then(function (data) {
            _this.total = data;
            _this.presentAlert('The sum is ' + data);
        }).catch(function (error) { return console.error('add' + error); });
    };
    Tab5Page.prototype.loadContacts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.pluginService.getContacts()];
                    case 1:
                        _a.contacts = _b.sent();
                        console.log("my contacts", this.contacts);
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab5Page.prototype.presentAlert = function (alertMsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            subHeader: 'Alert',
                            message: alertMsg,
                            buttons: ['OK']
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
    Tab5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab5',
            template: __webpack_require__(/*! ./tab5.page.html */ "./src/app/tab5/tab5.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_plugin_service_service__WEBPACK_IMPORTED_MODULE_3__["PluginServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_5__["ReadarsService"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__["ImageLoaderService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"],
            _services_arenabled_service__WEBPACK_IMPORTED_MODULE_7__["ARenabledService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], Tab5Page);
    return Tab5Page;
}());



/***/ }),

/***/ "./src/app/viewaranchorindex/viewaranchorindex.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/viewaranchorindex/viewaranchorindex.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewaranchorindexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewaranchorindexPageModule", function() { return ViewaranchorindexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewaranchorindex_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewaranchorindex.page */ "./src/app/viewaranchorindex/viewaranchorindex.page.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");







var ViewaranchorindexPageModule = /** @class */ (function () {
    function ViewaranchorindexPageModule() {
    }
    ViewaranchorindexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"]
            ],
            entryComponents: [_viewaranchorindex_page__WEBPACK_IMPORTED_MODULE_5__["ViewaranchorindexPage"]],
            declarations: [_viewaranchorindex_page__WEBPACK_IMPORTED_MODULE_5__["ViewaranchorindexPage"]]
        })
    ], ViewaranchorindexPageModule);
    return ViewaranchorindexPageModule;
}());



/***/ }),

/***/ "./src/app/viewaranchorindex/viewaranchorindex.page.html":
/*!***************************************************************!*\
  !*** ./src/app/viewaranchorindex/viewaranchorindex.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n\n   \n    <ion-title size=\"large\" text-center\n      style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    {{bookname}} - Index\n    </ion-title>\n    \n  \n    <ion-buttons slot=\"end\">\n      <ion-icon style=\"color: whitesmoke; margin-right: 3px;\" src=\"../assets/icon/close-outline.svg\" \n      size=\"medium\" (click)=\"closeModal()\" button></ion-icon>\n    </ion-buttons>\n    \n     \n    \n\n    \n      \n        <!--<ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>-->\n        \n     \n    \n    \n  </ion-toolbar>\n\n \n\n</ion-header> \n\n\n<ion-content>\n\n  \n \n  <!--<ion-grid class=\"ion-text-center\">\n    <ion-row class=\"header-row\">\n      <ion-col>\n        <ion-text style=\"color: darkgreen\">AR Anchor</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"color: darkgreen\">Book Page #</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text *ngFor=\"let mapAnchorContentEntry of mapAnchorContentMapArray\" >\n          <ion-thumbnail>\n            <img-loader [src]=\"(mapAnchorContentEntry[1][0].get(mapAnchorContentEntry[0]))\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n          </ion-thumbnail> \n        </ion-text>\n      </ion-col>\n        <ion-col>\n          <ion-text *ngFor=\"let pageNr of pageNrs\">\n            <ion-label style=\"color: darkgreen;\">{{pageNr}}</ion-label>\n          </ion-text>\n        </ion-col>\n    </ion-row>\n  </ion-grid>-->\n\n\n  <ion-grid class=\"ion-text-center\">\n    <ion-row class=\"header-row\">\n      <ion-col>\n        <ion-text style=\"color: darkgreen; font-size: small;\">AR Anchor</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"color: darkgreen; font-size: small;\">Book Page #</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let entry of anchorPageNrArray\">\n      <ion-col>\n        <ion-thumbnail>\n          <img-loader [src]=\"entry[0]\" useImg (load)=\"onImageLoad($event)\"></img-loader>\n        </ion-thumbnail> \n      </ion-col>\n      <ion-col>\n        <ion-label style=\"color: darkgreen;\">{{entry[1]}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  \n    <!--<ion-button  shape=\"round\" size=\"mini\" (click)=\"closeModal()\" expand=\"block\" \n    margin-top style=\"color:grey\">\n     Close\n    </ion-button>-->\n\n  \n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/viewaranchorindex/viewaranchorindex.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/viewaranchorindex/viewaranchorindex.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displaycard {\n  margin: 5px;\n  padding: 5px; }\n\nion-button {\n  --background: #F4F6F7  ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.header-row {\n  background: #E9F7EF;\n  color: #fff;\n  font-size: 16px; }\n\nion-col {\n  border: 1px solid #ECEEEF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC92aWV3YXJhbmNob3JpbmRleC92aWV3YXJhbmNob3JpbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJSyxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUlkO0VBQ0MsdUJBQWEsRUFBQTs7QUFHZjtFQUVFLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdhcmFuY2hvcmluZGV4L3ZpZXdhcmFuY2hvcmluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5Y2FyZCB7XG4gICAgLy8gd2lkdGg6IDMwdnc7XG4gICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAgLy8gYm9yZGVyOiBncmV5IHNvbGlkIDFweDtcbiAgICAgbWFyZ2luOiA1cHg7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgfVxuXG4gICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGNEY2RjcgIDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgICAtLWJhY2tncm91bmQ6ICMxNDVBMzI7XG4gIH1cblxuICAuaGVhZGVyLXJvdyB7XG4gICAgYmFja2dyb3VuZDogI0U5RjdFRjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQ0VFRUY7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/viewaranchorindex/viewaranchorindex.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/viewaranchorindex/viewaranchorindex.page.ts ***!
  \*************************************************************/
/*! exports provided: ViewaranchorindexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewaranchorindexPage", function() { return ViewaranchorindexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");





var ViewaranchorindexPage = /** @class */ (function () {
    function ViewaranchorindexPage(_modalController, booksService, imageLoaderService) {
        this._modalController = _modalController;
        this.booksService = booksService;
        this.imageLoaderService = imageLoaderService;
        this.pageNrs = [];
        this.mapAnchorContentMap = new Map();
        this.mapAnchorContentMapArray = [];
        this.mapAnchorContentMapArrayValues = [];
        this.anchorPageNrMap = new Map();
        this.anchorPageNrArray = [];
    }
    ViewaranchorindexPage.prototype.ngOnInit = function () {
        console.log("Book ID", this.bookid);
        console.log("Book Name", this.bookname);
        this.readPlistForIndex();
    };
    ViewaranchorindexPage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    ViewaranchorindexPage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        // refresher.complete();
    };
    ViewaranchorindexPage.prototype.readPlistForIndex = function () {
        var _this = this;
        this.booksService.getBookARContent(this.bookid)
            .subscribe(function (x) {
            _this.imgURLs = x;
            _this.booksService.getBookPlistXml(_this.bookid)
                .subscribe(function (plist) {
                if (plist) {
                    _this.plistCopy = plist;
                    console.log("plist copy", _this.plistCopy);
                    /*
                    start reading the plist copy. get the values of all the key elements
                    follow the order of the files and assign urls to keys in that orders
                    */
                    var domParser = new DOMParser();
                    var xmlDocument = domParser.parseFromString(_this.plistCopy.toString(), 'text/xml');
                    console.log("xmlDocument from s3", xmlDocument);
                    var keys = [];
                    var values = [];
                    var keyvalues = [];
                    var mainKeys = [];
                    var mapArray = [new Map()];
                    var keyElLength = xmlDocument.getElementsByTagName('key').length;
                    var valElLength = xmlDocument.getElementsByTagName('value').length;
                    var pageNrElLength = xmlDocument.getElementsByTagName('anchorPageNr').length;
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < valElLength; i++) {
                        values[i] = xmlDocument.getElementsByTagName('value')[i].childNodes[0].nodeValue;
                    }
                    for (var i = 0; i < pageNrElLength; i++) {
                        _this.pageNrs[i] = xmlDocument.getElementsByTagName('anchorPageNr')[i].childNodes[0].nodeValue;
                    }
                    console.log("Anchors keys", keys);
                    console.log("PageNrs", _this.pageNrs);
                    console.log("Values", values);
                    for (var i = 0; i < keyElLength; i++) {
                        keys[i] = xmlDocument.getElementsByTagName('key')[i].childNodes[0].nodeValue;
                        keyvalues.push(keys[i]);
                        for (var j = 0; j < valElLength; j++) {
                            if (values[j].includes(keys[i])) {
                                keyvalues.push(values[j]);
                            }
                        }
                    }
                    var bookAnchorContentURLsMap = new Map();
                    for (var i = 0; i < keyvalues.length && i < _this.imgURLs.length; i++) {
                        bookAnchorContentURLsMap.set(keyvalues[i], _this.imgURLs[i]);
                    }
                    for (var _i = 0, _a = Array.from(bookAnchorContentURLsMap.entries()); _i < _a.length; _i++) {
                        var entry = _a[_i];
                        if (entry[0].indexOf("content") === -1) {
                            mainKeys.push(entry[0]);
                        }
                    }
                    console.log("Main Keys", mainKeys);
                    for (var i = 0; i < mainKeys.length; i++) {
                        var entry1;
                        var newContentMap = new Map();
                        var newAnchorMap = new Map();
                        for (var _b = 0, _c = Array.from(bookAnchorContentURLsMap.entries()); _b < _c.length; _b++) {
                            var entry = _c[_b];
                            if (entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].includes('content')) {
                                newContentMap.set(entry[0], entry[1]);
                            }
                            if ((entry[0].includes(mainKeys[i]) && entry[1].includes(mainKeys[i])
                                && entry[0].indexOf('content') === -1)) {
                                newAnchorMap.set(entry[0], entry[1]);
                            }
                        }
                        console.log("new content map", newContentMap);
                        console.log("new anchor map", newAnchorMap);
                        _this.mapAnchorContentMap.set(mainKeys[i], [newAnchorMap, newContentMap]);
                        _this.anchorPageNrMap.set(newAnchorMap.get(mainKeys[i]), _this.pageNrs[i]);
                    }
                    console.log("mapAnchorContentMap", _this.mapAnchorContentMap);
                    _this.mapAnchorContentMapArray = Array.from(_this.mapAnchorContentMap.entries());
                    console.log("mapAnchorContentMapArray", _this.mapAnchorContentMapArray);
                    for (var _d = 0, _e = _this.mapAnchorContentMapArray; _d < _e.length; _d++) {
                        var mapAnchorContentEntry = _e[_d];
                        console.log("mapanchor content entry", mapAnchorContentEntry[0]);
                        console.log(mapAnchorContentEntry[1][1].values());
                        _this.mapAnchorContentMapArrayValues.push(Array.from(mapAnchorContentEntry[1][1].entries()));
                    }
                    console.log("mapAnchorContentMapArrayValues", _this.mapAnchorContentMapArrayValues);
                    // let mapAnchorContentEntry of mapAnchorContentMapArray
                    // "(mapAnchorContentEntry[1][0].get(mapAnchorContentEntry[0]))"
                    _this.anchorPageNrArray = Array.from(_this.anchorPageNrMap.entries());
                }
                else {
                    console.log("plist is empty");
                    return;
                }
            }), function (errMess) { return console.log(errMess); };
        }, function (errmess) { return _this.errMess = errmess; });
    };
    ViewaranchorindexPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    ViewaranchorindexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewaranchorindex',
            template: __webpack_require__(/*! ./viewaranchorindex.page.html */ "./src/app/viewaranchorindex/viewaranchorindex.page.html"),
            styles: [__webpack_require__(/*! ./viewaranchorindex.page.scss */ "./src/app/viewaranchorindex/viewaranchorindex.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_4__["ImageLoaderService"]])
    ], ViewaranchorindexPage);
    return ViewaranchorindexPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map