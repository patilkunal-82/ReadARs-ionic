(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showebooks-showebooks-module"],{

/***/ "./src/app/showebooks/showebooks.module.ts":
/*!*************************************************!*\
  !*** ./src/app/showebooks/showebooks.module.ts ***!
  \*************************************************/
/*! exports provided: ShowebooksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowebooksPageModule", function() { return ShowebooksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _showebooks_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showebooks.page */ "./src/app/showebooks/showebooks.page.ts");









var routes = [
    {
        path: '',
        component: _showebooks_page__WEBPACK_IMPORTED_MODULE_7__["ShowebooksPage"]
    }
];
var ShowebooksPageModule = /** @class */ (function () {
    function ShowebooksPageModule() {
    }
    ShowebooksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"]
            ],
            declarations: [_showebooks_page__WEBPACK_IMPORTED_MODULE_7__["ShowebooksPage"]]
        })
    ], ShowebooksPageModule);
    return ShowebooksPageModule;
}());



/***/ }),

/***/ "./src/app/showebooks/showebooks.page.html":
/*!*************************************************!*\
  !*** ./src/app/showebooks/showebooks.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;\">\n              \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button margin-top shape=\"round\" (click)=\"openLocalPdf()\" \n    style=\"color: white; font-size:large; font-style: normal; \" class=\"center\"> \n     Open Local PDF\n    </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/showebooks/showebooks.page.scss":
/*!*************************************************!*\
  !*** ./src/app/showebooks/showebooks.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayinnercard {\n  margin-top: auto;\n  padding: 5px; }\n\nion-select {\n  width: 100%;\n  max-width: 100% !important;\n  padding-left: 20px; }\n\nion-list-header {\n  padding-left: 0px;\n  display: block;\n  text-align: center; }\n\nion-back-button {\n  color: #FDFEFE; }\n\n.display_heading {\n  margin-left: 0px;\n  padding: 0px; }\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px; }\n\n.book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 225%;\n  height: auto;\n  margin: 10px auto; }\n\n.bookcard {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  background: transparent;\n  background-color: #E9F7EF;\n  color: #145A32;\n  text-align: center;\n  justify-content: center; }\n\n.bookimage1 {\n  width: 50px;\n  height: 50px;\n  box-shadow: grey; }\n\n.bookimage2 {\n  width: 90px;\n  height: 100px;\n  box-shadow: grey; }\n\nion-label {\n  margin-left: 10px; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaG93ZWJvb2tzL3Nob3dlYm9va3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUlFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFJRyxnQkFBZ0I7RUFFaEIsWUFBWSxFQUFBOztBQUlkO0VBQ0MsV0FBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUViLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFFWCxZQUFZO0VBRVosaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUl6QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFFYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxjQUFRLEVBQUE7O0FBR1Y7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWE7RUFDYixxQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUtiO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3dlYm9va3Mvc2hvd2Vib29rcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmRpc3BsYXljYXJkIHtcbiAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgIC8vaGVpZ2h0OjMwdmg7XG4gICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbiAgXG4gIC5kaXNwbGF5aW5uZXJjYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAvL21hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIC8vYmFja2dyb3VuZC1jb2xvcjpnaG9zdHdoaXRlO1xuICAgfVxuICBcbiAgIGlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gIH1cbiAgXG4gIGlvbi1saXN0LWhlYWRlciB7XG4gIFxuICAgIHBhZGRpbmctbGVmdDowcHg7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG5cbiAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogI0ZERkVGRTtcbn1cbiAgXG4gIC5kaXNwbGF5X2hlYWRpbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIFxuICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuYm9vay1pbWFnZSB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgLy9ib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5ib29raW1hZ2Uge1xuICAgIHdpZHRoOiAyMjUlO1xuICAgIC8vaGVpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvL21hcmdpbi10b3A6IDI1dmg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5ib29rY2FyZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RUY7XG4gICAgY29sb3I6ICMxNDVBMzI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICB9XG4gIFxuICAuYm9va2ltYWdlMSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgLy8gbWFyZ2luOiA1cHg7XG4gICAgYm94LXNoYWRvdzogZ3JleTtcbiAgfVxuXG4gIC5ib29raW1hZ2UyIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3gtc2hhZG93OiBncmV5O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1tZW51IHtcbiAgICAtLXdpZHRoOiA1MDBweDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbiAgfVxuICBcbiAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcbiAgXG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gXG4gIFxuICAuY2VudGVye1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/showebooks/showebooks.page.ts":
/*!***********************************************!*\
  !*** ./src/app/showebooks/showebooks.page.ts ***!
  \***********************************************/
/*! exports provided: ShowebooksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowebooksPage", function() { return ShowebooksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");







var ShowebooksPage = /** @class */ (function () {
    function ShowebooksPage(platform, file, ft, fileOpener, document) {
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
    }
    ShowebooksPage.prototype.ngOnInit = function () {
    };
    /*ngOnInit(): void {
          PSPDFKit.load({
              // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
              baseUrl: location.protocol + "//" + location.host + "/assets/",
              document: "/assets/PlantsandAnimalsInTheirHabitats.pdf",
              container: "#pspdfkit-container",
          }).then(instance => {
              // For the sake of this demo, store the PSPDFKit for Web instance
              // on the global object so that you can open the dev tools and
              // play with the PSPDFKit API.
              (window as any).instance = instance;
          });
      }*/
    ShowebooksPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'NavalRavikant.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf');
            });
        }
        else {
            var options = {
                title: "My PDF"
            };
            this.document.viewDocument(filePath + "/NavalRavikant.pdf", 'application/pdf', options);
        }
    };
    ShowebooksPage.prototype.downloadAndOpenPdf = function () {
    };
    ShowebooksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showebooks',
            template: __webpack_require__(/*! ./showebooks.page.html */ "./src/app/showebooks/showebooks.page.html"),
            styles: [__webpack_require__(/*! ./showebooks.page.scss */ "./src/app/showebooks/showebooks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"], _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"]])
    ], ShowebooksPage);
    return ShowebooksPage;
}());



/***/ })

}]);
//# sourceMappingURL=showebooks-showebooks-module.js.map