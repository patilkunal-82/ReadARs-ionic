(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

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
    PluginServiceService.prototype.viewAR = function (bookID) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, 'viewAR', {}, [{ param1: bookID }]);
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

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Immerse\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\" slot=\"icon-only\"></ion-icon></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n   \n      \n        <!--<div id=\"container\">\n          <ion-button (click)=\"add()\">Add Numbers</ion-button>\n            <ion-list>\n              <ion-item>{{total}}</ion-item>\n            </ion-list>\n        </div>-->\n\n        \n         <!--<ion-button expand=\"full\" (click)=\"loadContacts()\">\n            Load Contacts\n          </ion-button>-->\n         \n          <!--<ion-list>\n            <ion-item *ngFor=\"let c of contacts\">\n              <ion-label>\n                {{ c.firstName }} {{ c.lastName }}\n                <p>\n                  {{ c.telephone }}\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>-->\n\n    <ion-list>\n      <ion-item *ngFor=\"let book of books\">\n        <img-loader class=\"bookimage\" [src]=\"(bookIdImageMap.get(book._id))\"  \n        useImg (load)=\"onImageLoad($event)\" button>\n        </img-loader>\n        <ion-button  shape=\"round\" style=\"color: #145A32\" margin expand=\"block\"  (click)=\"viewAR(book._id)\">View AR</ion-button>\n        <p></p>\n        <ion-button  shape=\"round\" style=\"color: #145A32\" margin expand=\"block\" (click)=\"viewAnchors()\">View Anchor Index</ion-button>\n     </ion-item>\n    </ion-list>\n\n      \n\n          \n         \n          \n   \n\n</ion-content> \n\n \n\n\n"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #145A32; }\n\niframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: none; }\n\n.bookimage {\n  width: 225%;\n  height: auto;\n  margin: 10px auto; }\n\nion-button {\n  --background: #E9F7EF   ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUVYLFlBQVk7RUFFWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx3QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiNS90YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgICAtLWJhY2tncm91bmQ6ICMxNDVBMzI7XG59XG5cbmlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5ib29raW1hZ2Uge1xuICAgIHdpZHRoOiAyMjUlO1xuICAgIC8vaGVpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvL21hcmdpbi10b3A6IDI1dmg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNFOUY3RUYgICA7XG4gIH1cblxuIl19 */"

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








var Tab5Page = /** @class */ (function () {
    function Tab5Page(modalCtrl, pluginService, alertController, readarsService, imageLoaderService, booksService) {
        this.modalCtrl = modalCtrl;
        this.pluginService = pluginService;
        this.alertController = alertController;
        this.readarsService = readarsService;
        this.imageLoaderService = imageLoaderService;
        this.booksService = booksService;
        this.contacts = [];
        this.images = [];
        this.books = [];
        this.recobooks = [];
        this.bookGenreCollection = [];
        this.bookLanguageCollection = [];
        this.bookIdsImages = new Map();
        this.bookIdImageMap = new Map();
    }
    Tab5Page.prototype.ngOnInit = function () {
        var _this = this;
        this.readarsService.getBooks()
            .subscribe(function (books) {
            _this.books = books;
            _this.prepareBookIdsImagesMap();
            console.log("BOOK COLLECTION IS ---------->", _this.books);
        }, function (errmess) { return _this.errMess = errmess; });
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
    Tab5Page.prototype.viewAR = function (bookID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("bookID is ", bookID);
                /*this.booksService.uploadMarkerImage(this.bookId, this.uploadData)
                .subscribe(res => {
                  console.log("Uploaded image details ----->",res);
                });*/
                this.booksService.getAnchorAndContent(bookID)
                    .subscribe(function (res) {
                    console.log("anchor and content data for book id", bookID);
                    console.log(res);
                    _this.pluginService.viewAR(bookID);
                });
                return [2 /*return*/];
            });
        });
    };
    Tab5Page.prototype.viewAnchors = function () {
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
            _services_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"]])
    ], Tab5Page);
    return Tab5Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map