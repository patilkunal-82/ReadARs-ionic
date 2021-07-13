(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

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
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







var routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
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

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Immerse\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\" slot=\"icon-only\"></ion-icon></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n   \n    <!--<iframe src=\"../../assets/aframe-ar.html\"></iframe>-->\n\n    \n      <!--<ion-button (click)=\"testarplugin()\"></ion-button>\n     \n     \n      <ion-list>\n        <ion-item *ngFor=\"let c of contacts\">\n          <ion-label>\n            {{ c.firstName }} {{ c.lastName }}\n            <p>\n              {{ c.telephone }}\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>-->\n   \n\n</ion-content> \n\n \n\n\n"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #145A32; }\n\niframe {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cblxuaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuIl19 */"

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



//import { ar } from '@ionic-native/ar/ngx'
var Tab5Page = /** @class */ (function () {
    function Tab5Page(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.contacts = [];
    }
    Tab5Page.prototype.ngOnInit = function () {
    };
    /*testarplugin() {
      this.arController.testar().then(results => {
        this.contacts = results;
        console.log("Plugin Function ran without errors!");
      }).catch(err => {
        console.log("yourPluginFunction encountered the following error:  ",err);
      })
  
  }*/
    Tab5Page.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    Tab5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab5',
            template: __webpack_require__(/*! ./tab5.page.html */ "./src/app/tab5/tab5.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], Tab5Page);
    return Tab5Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map