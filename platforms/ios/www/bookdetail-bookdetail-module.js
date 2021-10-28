(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookdetail-bookdetail-module"],{

/***/ "./src/app/addcomment/addcomment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addcomment/addcomment.module.ts ***!
  \*************************************************/
/*! exports provided: AddcommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentPageModule", function() { return AddcommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcomment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcomment.page */ "./src/app/addcomment/addcomment.page.ts");






var AddcommentPageModule = /** @class */ (function () {
    function AddcommentPageModule() {
    }
    AddcommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_addcomment_page__WEBPACK_IMPORTED_MODULE_5__["AddcommentPage"]],
            declarations: [_addcomment_page__WEBPACK_IMPORTED_MODULE_5__["AddcommentPage"]]
        })
    ], AddcommentPageModule);
    return AddcommentPageModule;
}());



/***/ }),

/***/ "./src/app/addcomment/addcomment.page.html":
/*!*************************************************!*\
  !*** ./src/app/addcomment/addcomment.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n\n    <!--<ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    Add Your Comments\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon style=\"color: white; background: #145A32; \" name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>-->\n\n    \n      \n    \n      <ion-title size=\"large\" text-center\n      style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n     Add Your Comments\n    </ion-title>\n  \n     <ion-buttons slot=\"end\"> \n      <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" size=\"medium\" (click)=\"closeModal()\"></ion-icon>\n     </ion-buttons>\n   \n  </ion-toolbar>\n\n \n</ion-header> \n\n<ion-content>\n\n  <ion-card class=\"displaycard\" style=\"box-shadow: none;\">\n    <ion-card-subtitle>\n      Post your rating, review on this book\n    </ion-card-subtitle>\n    <ion-card-content>\n      <form [formGroup]=\"commentFormGroup\" #cform=\"ngForm\">\n      <ion-item>\n          <ion-textarea formControlName=\"comment\" type=\"text\" placeholder=\"Your Comments\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n          <ion-text>Your Rating</ion-text>\n          <ion-range min=\"1\" max=\"5\" tickInterval=\"1\" value=\"5\" pin=\"true\" snaps name=\"rating\"\n          formControlName=\"rating\" ></ion-range>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button shape=\"round\" (click)=\"onSubmit()\" style=\"color: #17202A;\"\n          [disabled]=\"commentFormGroup.invalid\" margin-top expand=\"full\">Submit</ion-button>\n        </ion-col>\n       <!--<ion-col>\n          <ion-button  shape=\"round\" size=\"mini\" (click)=\"closeModal()\" expand=\"block\" \n          margin-top style=\"color:grey; \">\n          Cancel\n          </ion-button>\n        </ion-col>-->\n      </ion-row>\n       \n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addcomment/addcomment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addcomment/addcomment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displaycard {\n  margin: 10px;\n  padding: 10px; }\n\nion-button {\n  --background: #E9F7EF ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9hZGRjb21tZW50L2FkZGNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUssWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFJbEI7RUFDSSxzQkFBYSxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZGNvbW1lbnQvYWRkY29tbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheWNhcmQge1xuICAgIC8vIHdpZHRoOiAzMHZ3O1xuICAgICAvL2hlaWdodDozMHZoO1xuICAgIC8vIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICAgIG1hcmdpbjogMTBweDtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0U5RjdFRiA7XG4gIH1cblxuICBpb24tdG9vbGJhciB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addcomment/addcomment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addcomment/addcomment.page.ts ***!
  \***********************************************/
/*! exports provided: AddcommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentPage", function() { return AddcommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");






var AddcommentPage = /** @class */ (function () {
    function AddcommentPage(_modalController, formBuilder, readarsService, toastCtrl) {
        this._modalController = _modalController;
        this.readarsService = readarsService;
        this.toastCtrl = toastCtrl;
        this.commentData = { comment: '', rating: '' };
        this.commentFormGroup = formBuilder.group({
            comment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            rating: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    AddcommentPage.prototype.ngOnInit = function () {
        this.bookid = this.bookId;
        console.log("BOOK ID", this.bookId);
    };
    AddcommentPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 3000,
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
    AddcommentPage.prototype.onSubmit = function () {
        var _this = this;
        this.commentData = this.commentFormGroup.value;
        console.log("Comment", this.commentData.comment);
        console.log("Rating", this.commentData.rating);
        /*this.dishservice.postComment(this.dish._id, this.commentForm.value)
          .subscribe(dish => this.dish = <Dish>dish);
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
          rating: 5,
          comment: ''
        });*/
        this.readarsService.postComment(this.bookid, this.commentFormGroup.value)
            .subscribe(function (book) {
            _this.book = book;
            _this.presentToast("Comment Posted!");
            _this.closeModal();
        }, function (errmess) { return _this.errMess = errmess; });
        this.commentFormDirective.resetForm();
        this.commentFormGroup.reset({
            rating: '1',
            comment: ''
        });
    };
    AddcommentPage.prototype.closeModal = function () {
        this._modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddcommentPage.prototype, "commentFormDirective", void 0);
    AddcommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcomment',
            template: __webpack_require__(/*! ./addcomment.page.html */ "./src/app/addcomment/addcomment.page.html"),
            styles: [__webpack_require__(/*! ./addcomment.page.scss */ "./src/app/addcomment/addcomment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_4__["ReadarsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AddcommentPage);
    return AddcommentPage;
}());



/***/ }),

/***/ "./src/app/bookdetail/bookdetail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.module.ts ***!
  \*************************************************/
/*! exports provided: BookdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailPageModule", function() { return BookdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookdetail.page */ "./src/app/bookdetail/bookdetail.page.ts");
/* harmony import */ var _bookvideo_bookvideo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bookvideo/bookvideo.module */ "./src/app/bookvideo/bookvideo.module.ts");
/* harmony import */ var _viewcomments_viewcomments_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../viewcomments/viewcomments.module */ "./src/app/viewcomments/viewcomments.module.ts");
/* harmony import */ var _qrcode_activities_qrcode_activities_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../qrcode-activities/qrcode-activities.module */ "./src/app/qrcode-activities/qrcode-activities.module.ts");
/* harmony import */ var _addcomment_addcomment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../addcomment/addcomment.module */ "./src/app/addcomment/addcomment.module.ts");











var routes = [
    {
        path: '',
        component: _bookdetail_page__WEBPACK_IMPORTED_MODULE_6__["BookdetailPage"],
    }
];
var BookdetailPageModule = /** @class */ (function () {
    function BookdetailPageModule() {
    }
    BookdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _addcomment_addcomment_module__WEBPACK_IMPORTED_MODULE_10__["AddcommentPageModule"],
                _qrcode_activities_qrcode_activities_module__WEBPACK_IMPORTED_MODULE_9__["QrcodeActivitiesPageModule"],
                _viewcomments_viewcomments_module__WEBPACK_IMPORTED_MODULE_8__["ViewcommentsPageModule"],
                _bookvideo_bookvideo_module__WEBPACK_IMPORTED_MODULE_7__["BookvideoPageModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bookdetail_page__WEBPACK_IMPORTED_MODULE_6__["BookdetailPage"]]
        })
    ], BookdetailPageModule);
    return BookdetailPageModule;
}());



/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.html":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: darkgreen; font-weight: bolder;\">\n    \n    </ion-title>\n  </ion-toolbar>\n\n  \n  \n</ion-header> \n\n\n<ion-content>\n\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshBookList($event)\">\n  <ion-refresher-content pullingText=\"pull for update\" refreshingText= \"...updating\">\n  </ion-refresher-content>\n</ion-refresher>\n\n<ion-spinner *ngIf=\"showSpinner\" class=\"spin\"></ion-spinner>\n\n<ion-card *ngIf=\"!showSpinner\">\n  <ion-card style=\"box-shadow: darkolivegreen;\">\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-wrap\">\n        {{book?.bookname}}\n      </ion-card-title>\n      <ion-card-subtitle class=\"ion-text-wrap\">\n        Author: {{book?.bookauthor}}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content style=\"color: darkblue;\">\n      <ion-chip color=\"medium\">\n        Status: \n       <ion-label *ngIf=\"available && !reserved && !borrowed\">\n        <span style=\"color:green\"> {{book.bookcurrentstatus}} </span>\n       </ion-label>\n       <ion-label *ngIf=\"reserved && !available && !borrowed\">\n        <span style=\"color:orange\">{{book.bookcurrentstatus}} </span>\n       </ion-label>\n       <ion-label *ngIf=\"borrowed && !available\" >\n        <span style=\"color:red\"> {{book.bookcurrentstatus}} </span>\n      </ion-label>\n       \n       </ion-chip>\n\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <h3>Book Owner: {{book?.bookowner.firstname}} {{book?.bookowner.lastname}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <p> Owner's Rating: {{book?.bookrating}}<ion-icon color=\"warning\" src=\"../assets/icon/star.svg\"></ion-icon></p>\n            <p> Owner's Address: {{book?.bookowneraddress}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf=\"available\">\n        <ion-item>\n           \n            <ion-label style=\"font-size: small; color:darkolivegreen\">Reserve</ion-label>\n            <ion-chip>\n              <ion-icon size=\"large\" color=\"success\" src=\"../assets/icon/cart.svg\" button (click)=\"reserveBook()\"></ion-icon>\n            </ion-chip>\n        </ion-item>\n        <ion-item>\n        \n          <ion-label style=\"font-size: small; color:darkolivegreen;\">Contact Owner</ion-label>\n          <ion-chip>\n            <ion-icon size=\"large\" style=\"color:darkseagreen\" src=\"../assets/icon/people.svg\" button (click)=\"contactOwner()\"></ion-icon>\n          </ion-chip>\n      </ion-item>\n      <ion-item *ngIf=\"!recommended\">\n        <ion-label style=\"font-size: small; color:darkolivegreen;\">Recommend this book to others ? </ion-label>\n        <ion-chip>\n          <ion-icon style=\"color: darkgreen\" src=\"../assets/icon/thumbs-up.svg\" button (click)=\"recommendBook()\"></ion-icon>\n        </ion-chip>\n    </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card style=\"box-shadow: darkolivegreen;\">\n    <ion-card-content style=\"text-align: center;\">\n        <!-- show QR code button available to only those who have requested the current book-->\n        <ion-icon *ngIf=\"(reserved || borrowed) && showQRButtonFlag\" (click)=\"showServerQRcode()\" \n        src=\"../assets/icon/qr-code-sharp.svg\" style=\"color: #145A32; margin: 10px; text-align: center;\" \n        size=\"large\" title=\"Show QR code\" button></ion-icon>\n\n        <ion-icon (click)=\"openAddCommentModal()\"src=\"../assets/icon/create.svg\" \n        style=\"color: #145A32; margin: 10px; text-align: center;\" size=\"large\" button></ion-icon>\n\n        <ion-icon *ngIf=\"showCommentFlag\" (click)=\"openViewcommentsModal()\" src=\"../assets/icon/eye-sharp.svg\"\n        style=\"color: #145A32; margin: 10px; text-align: center;\" size=\"large\" button></ion-icon>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-card>\n\n<!--<ion-card [hidden]=\"book || errMess\">\n  \n\n  <ion-card style=\"box-shadow: darkolivegreen;\">\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-wrap\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-card-title>\n      <ion-card-subtitle class=\"ion-text-wrap\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content style=\"color: darkblue;\">\n      <ion-chip color=\"medium\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-label *ngIf=\"available && !reserved && !borrowed\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-label>\n          <ion-label *ngIf=\"reserved && !available && !borrowed\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-label>\n          <ion-label *ngIf=\"borrowed && !available\" >\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-label>\n      </ion-chip>\n\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf=\"available\">\n        <ion-item>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-chip>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-chip>\n        </ion-item>\n        <ion-item>\n          <ion-chip>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-chip>\n      </ion-item>\n      <ion-item *ngIf=\"!recommended\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-chip>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-chip>\n    </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card style=\"box-shadow: darkolivegreen;\">\n    <ion-card-content style=\"text-align: center;\">\n       \n        <ion-skeleton-text animated></ion-skeleton-text>\n\n        <ion-skeleton-text animated></ion-skeleton-text>\n\n        <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n</ion-card>-->\n\n \n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-image {\n  width: 300px;\n  height: 300px;\n  margin: 10px auto; }\n\n.comment-card {\n  width: 30vw;\n  height: 30vh;\n  border: green solid 1px;\n  margin: 10px auto; }\n\n.bookimage {\n  width: 100%;\n  height: auto;\n  margin: 10px auto; }\n\nion-fab-button {\n  color: whitesmoke; }\n\nion-toolbar {\n  --background: #145A32; }\n\nion-back-button {\n  color: #FDFEFE; }\n\nion-chip {\n  background-color: white; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\nion-card {\n  border-radius: 10px;\n  border: #145A32; }\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nion-spinner {\n  width: 28px;\n  height: 28px;\n  stroke: #444;\n  fill: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9ib29rZGV0YWlsL2Jvb2tkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFFYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBRVgsWUFBWTtFQUVaLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGtCQUFhO0VBQ2IscUJBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2YsMkNBQUE7O0FBQ0o7RUFDSSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYm9va2RldGFpbC9ib29rZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJvb2staW1hZ2Uge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIC8vYm9yZGVyOiBncmF5IHNvbGlkIDFweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmNvbW1lbnQtY2FyZCB7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgaGVpZ2h0OjMwdmg7XG4gICAgYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi5ib29raW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vaGVpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvL21hcmdpbi10b3A6IDI1dmg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAvL2NvbG9yOiAjMUI0RjcyIDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiAjRkRGRUZFO1xufVxuXG5pb24tY2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAjMTQ1QTMyO1xuICAgIH1cblxuICAgIC8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgfVxuICBcbiAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAuc3BpbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIGlvbi1zcGlubmVyIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgc3Ryb2tlOiAjNDQ0O1xuICAgIGZpbGw6ICMyMjI7XG4gIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/bookdetail/bookdetail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bookdetail/bookdetail.page.ts ***!
  \***********************************************/
/*! exports provided: BookdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailPage", function() { return BookdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_bookdetail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/bookdetail.service */ "./src/app/services/bookdetail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _viewcomments_viewcomments_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../viewcomments/viewcomments.page */ "./src/app/viewcomments/viewcomments.page.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_readars_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/readars.service */ "./src/app/services/readars.service.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_reserved_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/reserved.service */ "./src/app/services/reserved.service.ts");
/* harmony import */ var _services_available_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/available.service */ "./src/app/services/available.service.ts");
/* harmony import */ var _services_borrowed_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/borrowed.service */ "./src/app/services/borrowed.service.ts");
/* harmony import */ var _services_recommend_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/recommend.service */ "./src/app/services/recommend.service.ts");
/* harmony import */ var _qrcode_activities_qrcode_activities_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../qrcode-activities/qrcode-activities.page */ "./src/app/qrcode-activities/qrcode-activities.page.ts");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _addcomment_addcomment_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../addcomment/addcomment.page */ "./src/app/addcomment/addcomment.page.ts");
































//import { read } from 'fs';
var STORAGE_KEY = 'qrcode_images';
var BookdetailPage = /** @class */ (function () {
    function BookdetailPage(_socialShare, _modalController, bookdetailService, activatedRoute, readarsService, reservedService, route, router, emailComposer, callNumber, formBuilder, availableService, borrowedService, sanitizer, barCodeScanner, base64ToGallery, file, filePath, fileOpener, base64, webview, authService, booksService, _alertController, favoriteService, recommendService, toastCtrl, loadingController
    //private plt: Platform,
    //private storage: Storage
    // private ref: ChangeDetectorRef,
    ) {
        this._socialShare = _socialShare;
        this._modalController = _modalController;
        this.readarsService = readarsService;
        this.reservedService = reservedService;
        this.route = route;
        this.router = router;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.availableService = availableService;
        this.borrowedService = borrowedService;
        this.sanitizer = sanitizer;
        this.barCodeScanner = barCodeScanner;
        this.base64ToGallery = base64ToGallery;
        this.file = file;
        this.filePath = filePath;
        this.fileOpener = fileOpener;
        this.base64 = base64;
        this.webview = webview;
        this.authService = authService;
        this.booksService = booksService;
        this._alertController = _alertController;
        this.favoriteService = favoriteService;
        this.recommendService = recommendService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.images = [];
        this.username = undefined;
        this.qrData = null;
        this.anyTextData = { anytext: '' };
        this.visibility = 'shown';
        this.favorite = false;
        this.reserved = false;
        this.available = false;
        this.borrowed = false;
        this.recommended = false;
        this.showQRButtonFlag = false;
        this.showCommentFlag = true;
        this.showSpinner = true;
        //version = VERSION;
        this.panelOpenState = false;
        this.dataReader = new FileReader();
        this.qrFormGroup = formBuilder.group({
            text: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    BookdetailPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 4000,
                            position: "middle"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookdetailPage.prototype.ionViewDidEnter = function () {
    };
    BookdetailPage.prototype.ionViewWillEnter = function () {
    };
    BookdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            //this.showSkeleton = false;
            _this.showSpinner = false;
        }, 3000);
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) { console.log(name); _this.username = name; });
        this.readarsService.getBookIds().subscribe(function (bookIds) {
            _this.bookIds = bookIds;
            _this.storeBookIds(_this.bookIds);
        }, function (errmess) { return _this.errMess = errmess; });
        this.lbookIds = this.loadBookIds();
        console.log("BookIds from getBookIds" + this.bookIds);
        console.log("BookIds from getBookIds" + this.bookIds);
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            _this.visibility = 'hidden';
            return _this.readarsService.getBook(params['bookID']);
        }))
            .subscribe(function (book) {
            _this.book = book;
            _this.bookCopy = _this.book;
            console.log("Book found for id:" + _this.book._id);
            _this.setPrevNext(_this.book._id);
            _this.visibility = 'shown';
            if (_this.bookCopy.comments.length == 0) {
                _this.showCommentFlag = false;
            }
            _this.favoriteService.isFavorite(_this.book._id)
                .subscribe(function (resp) { console.log(resp); _this.favorite = resp.exists; }, function (err) { return console.log(err); });
            _this.reservedService.isReserved(_this.book._id)
                .subscribe(function (resp) {
                console.log(resp);
                _this.reserved = resp.exists;
            }, function (err) { return console.log(err); });
            _this.availableService.isAvailable(_this.book._id)
                .subscribe(function (resp) {
                console.log(resp);
                _this.available = resp.exists;
            }, function (err) { return console.log(err); });
            _this.borrowedService.isBorrowed(_this.book._id)
                .subscribe(function (resp) {
                _this.borrowed = resp.exists;
            }, function (err) { return console.log(err); });
            _this.recommendService.isRecommended(_this.book._id)
                .subscribe(function (resp) {
                _this.recommended = resp.exists;
            }, function (err) { return console.log(err); });
            console.log("BOOK CURRENT USER", _this.book.bookcurrentuser);
            console.log("CURRENT USER NAME", _this.username);
            console.log("SHOWQRBUTTON FLAG", _this.showQRButtonFlag);
            if (_this.book.bookcurrentuser === _this.username) {
                console.log("INSIDE IF CONDITION FOR CURRENT USER & CURRERNT USER");
                _this.showQRButtonFlag = true;
                console.log("SHOWQRBUTTON FLAG", _this.showQRButtonFlag);
            }
        }, function (errmess) { return _this.errMess = errmess; });
    };
    BookdetailPage.prototype.refreshBookList = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.readarsService.getBooks()
                .subscribe(function (books) {
                _this.books = books;
            }, function (errmess) { return _this.errMess = errmess; });
            event.target.complete();
        }, 2000);
    };
    BookdetailPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Loading...please wait',
                            duration: 1000
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
    BookdetailPage.prototype.manageFavorites = function () {
        //you can remove favorite iff you were the ones who had posted it...
        var _this = this;
        if (!this.favorite) {
            this.favoriteService.postFavorite(this.book._id)
                .subscribe(function (favorites) { console.log(favorites); _this.favorite = true; });
        }
        if (this.favorite) {
            this.favoriteService.deleteFavorite(this.book._id)
                .subscribe(function (favorites) { console.log(favorites); _this.favorite = false; });
        }
    };
    BookdetailPage.prototype.setPrevNext = function (bookId) {
        console.log("Into setPreNext");
        this.lbookIds = this.loadBookIds();
        console.log("BookIds array" + this.lbookIds);
        console.log("BookIds array length" + this.lbookIds.length);
        console.log("Specifc BookId:" + bookId);
        //const index = this.bookIds.indexOf(bookId);
        var index = this.lbookIds.indexOf(bookId);
        console.log("Specific BookId after try catch" + bookId);
        //const index = this.bookIds.indexOf(bookId);
        /*  console.log("Array index" + index);
          this.prev = this.bookIds[(this.bookIds.length + index -1) % this.bookIds.length];
          this.next = this.bookIds[(this.bookIds.length + index +1 ) % this.bookIds.length];*/
        console.log("Array index" + index);
        this.prev = this.lbookIds[(this.lbookIds.length + index - 1) % this.lbookIds.length];
        this.next = this.lbookIds[(this.lbookIds.length + index + 1) % this.lbookIds.length];
        console.log("Previous", this.prev);
        console.log("Next", this.next);
    };
    BookdetailPage.prototype.goPrev = function () {
        this.router.navigateByUrl('/bookdetail/' + this.prev);
    };
    BookdetailPage.prototype.goNext = function () {
        this.router.navigateByUrl('/bookdetail/' + this.next);
    };
    BookdetailPage.prototype.goBack = function () {
        //this.location.back();
        this.router.navigateByUrl('/tab1');
    };
    BookdetailPage.prototype.onValueChanged = function (data) {
        /*if (!this.commentFormGroup) { return; }
          const form = this.commentFormGroup;
          for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              const control = form.get(field);
              if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }*/
    };
    /*addToFavorites() {
      if (!this.favorite) {
        this.favoriteService.postFavorite(this.dish._id)
          .subscribe(favorites => { console.log(favorites); this.favorite = true; });
      }
    }*/
    BookdetailPage.prototype.displayComments = function () {
        if (this.book.comments.length != 0) {
            this.showComments = true;
        }
    };
    BookdetailPage.prototype.alerManagement = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert, role;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            message: message,
                            header: "Book Reserved",
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
    BookdetailPage.prototype.reserveBook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("inside reserveBook of BookdetailComponent.ts");
                /*const alert = await this._alertController.create({
                  header: "Book is reserved for you",
                  message: "Collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !",
                });
                alert.present();*/
                //alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !");
                this.book.bookavailable = false;
                this.book.bookreserved = true;
                this.book.bookborrowed = false;
                this.book.bookcurrentuser = this.username;
                this.book.bookcurrentstatus = 'reserved';
                this.book.bookreserveddate = new Date().toLocaleDateString();
                console.log("BOOK RESERVED DATE", this.book.bookreserveddate);
                this.readarsService.reserveBook(this.book._id, this.book)
                    .subscribe(function (book) {
                    _this.router.navigateByUrl('/tabs/tab1/showallbooks');
                    _this.alerManagement("Book Reserved. Collect the book from the owner in next 48 hours. Failing which, it will be made available to others !");
                    console.log(book);
                    _this.reserved = true;
                    _this.createQRcode();
                });
                this.ngOnInit();
                return [2 /*return*/];
            });
        });
    };
    BookdetailPage.prototype.recommendBook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /*const alert = await this._alertController.create({
                  header: "Thank You",
                  message: "Your recommendation will now be posted..",
                });
                alert.present();*/
                console.log("inside recommendBook of BookdetailComponent.ts");
                this.book.bookrecommend = true;
                this.readarsService.recommendBook(this.book._id, this.book)
                    .subscribe(function (book) {
                    console.log(book);
                    //this.recommend = true;
                    _this.presentToast("Thank you. Your recommendation has been posted");
                });
                return [2 /*return*/];
            });
        });
    };
    BookdetailPage.prototype.createQRcode = function () {
        var _this = this;
        this.qrData = this.book._id + this.book.bookowner.username + this.username;
        console.log("QR data", this.qrData);
        this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE, this.qrData)
            .then(function (qrCode) {
            console.log(qrCode);
            _this.createdCode = qrCode;
            var imagePath = _this.createdCode["file"];
            console.log(imagePath);
            var imageName = imagePath.substring(imagePath.lastIndexOf('/') + 1);
            console.log(imageName);
            // get resolvedPath i.e. the one compatible with web view plugin
            var resolvedPath = _this.pathForImage(imagePath);
            console.log(resolvedPath);
            _this.capturedImagePath = resolvedPath;
            _this.uploadQRCode(imagePath);
            /*this.booksService.getBookQRImage(this.book._id)
            .subscribe(x => {
                this.url = x;
                console.log("this.url", this.url);
                //this.bookIdImageMap.set(this.lbookIds[i], this.url);
                //console.log("book image map", this.bookIdImageMap);
            }, errMess => console.log(errMess));*/
        }, function (err) {
            console.log('Error occured : ' + err);
        });
    };
    BookdetailPage.prototype.storeBookIds = function (bookIds) {
        console.log('BookIds stored are :', bookIds);
        localStorage.setItem('bookIds', JSON.stringify(bookIds));
    };
    BookdetailPage.prototype.loadBookIds = function () {
        this.bookIds = JSON.parse(localStorage.getItem('bookIds'));
        console.log('bookIds ', this.bookIds);
        if (this.bookIds) {
            return this.bookIds;
        }
        return;
    };
    BookdetailPage.prototype.contactOwner = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Choose your option",
                            message: "Contact the book owner",
                            buttons: [
                                {
                                    text: "Call",
                                    handler: function () {
                                        _this.callOwner();
                                        //this.closeModal();
                                    }
                                },
                                {
                                    text: "Email",
                                    handler: function () {
                                        _this.emailOwner();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookdetailPage.prototype.emailOwner = function () {
        var email = {
            to: this.book.bookowner.email,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    BookdetailPage.prototype.callOwner = function () {
        this.callNumber.callNumber(this.book.bookownertelnum, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    BookdetailPage.prototype.showServerQRcode = function () {
        /*this.booksService.getBookQRImage(this.book._id)
          .subscribe(x => {
              this.urlQR = x;
              console.log("this.url", this.urlQR);
              //this.bookIdImageMap.set(this.lbookIds[i], this.url);
              //console.log("book image map", this.bookIdImageMap);
          }, errMess => console.log(errMess));*/
        this.openQRModal(this.book._id, this.book.bookname);
    };
    BookdetailPage.prototype.deleteServerQRcode = function () {
        var _this = this;
        this.booksService.deleteQRBookImage(this.book._id, "")
            .subscribe(function (resp) { return console.log(resp); }, function (errmess) { return _this.errMess = errmess; });
    };
    /*copyFileToLocalDir(namePath, currentName, newFileName) {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
        this.updateStoredImages(newFileName);
      }, error => {
        console.log("Error while storing file");
      });
    }*/
    /*updateStoredImages(name) {
      this.storage.get(STORAGE_KEY).then(images => {
        let arr = JSON.parse(images);
        if(!arr) {
          let newImages = [name]
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
        } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
        }
  
        let filePath = this.file.dataDirectory + name;
        let resPath = this.pathForImage(filePath);
        console.log("inside update storred images");
        console.log(filePath);
        console.log(resPath);
  
        let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
        };
  
        this.images = [newEntry, this.images];
        console.log(this.images);
       // this.ref.detectChanges();
      });
    }*/
    // converts imagePath to a URL e.g. ionic://localhost/... 
    //that is compatible with local web server in Web View plugin
    BookdetailPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    BookdetailPage.prototype.createFileName = function () {
        var newFileName = this.book._id + "_" + this.book.bookowner.username + "_" + this.username + ".jpg";
        return newFileName;
    };
    BookdetailPage.prototype.uploadQRCode = function (qrImgEntryPath) {
        var _this = this;
        console.log("inside uploadQRcode");
        console.log(qrImgEntryPath);
        //this.readFile(qrImgEntryPath);
        var urltoResolve = "file://" + qrImgEntryPath;
        this.file.resolveLocalFilesystemUrl(urltoResolve)
            .then(function (entry) {
            console.log("inside resolveLocalFilesystemUrl then block, urlToresolve = ", urltoResolve);
            //console.log((<FileEntry>entry).fullPath);
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            console.log("Error while reading file in the function uploadQRCode");
        });
    };
    BookdetailPage.prototype.readFile = function (file) {
        var _this = this;
        console.log("inside readFile");
        var reader = new FileReader();
        console.log("file type", file.type);
        console.log("file name", file.name);
        reader.onloadend = function () {
            _this.uploadData = new FormData();
            if (reader.result) {
                var imgBlob = new Blob([reader.result], { type: file.type });
                console.log("image blob", imgBlob);
                console.log("newly created filename", _this.createFileName());
                _this.uploadData.append('qrImageFile', imgBlob, _this.createFileName());
                console.log(_this.uploadData);
                _this.booksService.uploadQRImage(_this.book._id, _this.uploadData)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.receivedImageData = res;
                    _this.base64Data = _this.receivedImageData.pic;
                    _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                });
            }
        };
        reader.readAsArrayBuffer(file);
    };
    BookdetailPage.prototype.scanBarcode = function () {
        var _this = this;
        var options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
        };
        this.barCodeScanner.scan(options).then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            _this.scannedData = barcodeData;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    BookdetailPage.prototype.share = function () {
        /*  this.bookDetail.subscribe((book)=> {
            this._socialShare.share("Look What I Found On This App Called ReadARs", book.name, "", book.cropped);
          });*/
    };
    BookdetailPage.prototype.addComment = function () {
        this.addComments = true;
        this.showComments = true;
    };
    BookdetailPage.prototype.openAddCommentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var addcommentModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _addcomment_addcomment_page__WEBPACK_IMPORTED_MODULE_28__["AddcommentPage"],
                            componentProps: {
                                bookId: this.book._id
                            }
                        })];
                    case 1:
                        addcommentModal = _a.sent();
                        return [2 /*return*/, addcommentModal.present()];
                }
            });
        });
    };
    BookdetailPage.prototype.openViewcommentsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var viewcommentsModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _viewcomments_viewcomments_page__WEBPACK_IMPORTED_MODULE_18__["ViewcommentsPage"],
                            componentProps: {
                                bookComments: this.bookCopy
                            }
                        })];
                    case 1:
                        viewcommentsModal = _a.sent();
                        return [2 /*return*/, viewcommentsModal.present()];
                }
            });
        });
    };
    BookdetailPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BookdetailPage.prototype.openQRModal = function (id, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var qrModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _qrcode_activities_qrcode_activities_page__WEBPACK_IMPORTED_MODULE_26__["QrcodeActivitiesPage"],
                            componentProps: {
                                bookId: id,
                                bookName: name
                            }
                        })];
                    case 1:
                        qrModal = _a.sent();
                        return [4 /*yield*/, qrModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('qform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookdetailPage.prototype, "qrFormDirective", void 0);
    BookdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookdetail',
            template: __webpack_require__(/*! ./bookdetail.page.html */ "./src/app/bookdetail/bookdetail.page.html"),
            styles: [__webpack_require__(/*! ./bookdetail.page.scss */ "./src/app/bookdetail/bookdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
            _services_bookdetail_service__WEBPACK_IMPORTED_MODULE_7__["BookdetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_readars_service__WEBPACK_IMPORTED_MODULE_20__["ReadarsService"],
            _services_reserved_service__WEBPACK_IMPORTED_MODULE_22__["ReservedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_11__["EmailComposer"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_available_service__WEBPACK_IMPORTED_MODULE_23__["AvailableService"],
            _services_borrowed_service__WEBPACK_IMPORTED_MODULE_24__["BorrowedService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"],
            _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_14__["Base64ToGallery"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_27__["FilePath"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_17__["Base64"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_19__["BooksService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_21__["FavoriteService"],
            _services_recommend_service__WEBPACK_IMPORTED_MODULE_25__["RecommendService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
            //private plt: Platform,
            //private storage: Storage
            // private ref: ChangeDetectorRef,
        ])
    ], BookdetailPage);
    return BookdetailPage;
}());



/***/ }),

/***/ "./src/app/bookvideo/bookvideo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.module.ts ***!
  \***********************************************/
/*! exports provided: BookvideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookvideoPageModule", function() { return BookvideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookvideo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookvideo.page */ "./src/app/bookvideo/bookvideo.page.ts");






var BookvideoPageModule = /** @class */ (function () {
    function BookvideoPageModule() {
    }
    BookvideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            entryComponents: [_bookvideo_page__WEBPACK_IMPORTED_MODULE_5__["BookvideoPage"]],
            declarations: [_bookvideo_page__WEBPACK_IMPORTED_MODULE_5__["BookvideoPage"]]
        })
    ], BookvideoPageModule);
    return BookvideoPageModule;
}());



/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.html":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"dark\">\n\n  <video autoplay class=\"bookvideo\">\n    <source [src]=\"videoURL\">\n  </video>\n\n  <ion-fab\n  vertical=\"bottom\"\n  horizontal=\"center\"\n  slot=\"fixed\">\n  <ion-fab-button (click)=\"closeModal()\" color=\"danger\">\n    <ion-icon name=\"close\"></ion-icon>\n  </ion-fab-button>\n\n</ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bookvideo {\n  width: 100%;\n  height: auto;\n  margin-top: 25vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9ib29rdmlkZW8vYm9va3ZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ib29rdmlkZW8vYm9va3ZpZGVvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/bookvideo/bookvideo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/bookvideo/bookvideo.page.ts ***!
  \*********************************************/
/*! exports provided: BookvideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookvideoPage", function() { return BookvideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BookvideoPage = /** @class */ (function () {
    function BookvideoPage(navParams, _modalController) {
        this._modalController = _modalController;
        this.videoURL = navParams.get("videoURL");
    }
    BookvideoPage.prototype.ngOnInit = function () {
    };
    BookvideoPage.prototype.closeModal = function () {
        this._modalController.dismiss();
    };
    BookvideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookvideo',
            template: __webpack_require__(/*! ./bookvideo.page.html */ "./src/app/bookvideo/bookvideo.page.html"),
            styles: [__webpack_require__(/*! ./bookvideo.page.scss */ "./src/app/bookvideo/bookvideo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BookvideoPage);
    return BookvideoPage;
}());



/***/ }),

/***/ "./src/app/qrcode-activities/qrcode-activities.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/qrcode-activities/qrcode-activities.module.ts ***!
  \***************************************************************/
/*! exports provided: QrcodeActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeActivitiesPageModule", function() { return QrcodeActivitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qrcode_activities_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrcode-activities.page */ "./src/app/qrcode-activities/qrcode-activities.page.ts");






var QrcodeActivitiesPageModule = /** @class */ (function () {
    function QrcodeActivitiesPageModule() {
    }
    QrcodeActivitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            entryComponents: [_qrcode_activities_page__WEBPACK_IMPORTED_MODULE_5__["QrcodeActivitiesPage"]],
            declarations: [_qrcode_activities_page__WEBPACK_IMPORTED_MODULE_5__["QrcodeActivitiesPage"]]
        })
    ], QrcodeActivitiesPageModule);
    return QrcodeActivitiesPageModule;
}());



/***/ }),

/***/ "./src/app/qrcode-activities/qrcode-activities.page.html":
/*!***************************************************************!*\
  !*** ./src/app/qrcode-activities/qrcode-activities.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <!--<ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    QR Code of the book\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeQRModal()\">\n        <ion-icon style=\"color: white; background: #145A32; \" name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>-->\n\n   \n      <ion-title size=\"large\" text-center\n            style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n            color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n          QR Code of the book\n      </ion-title>\n      \n     \n      <ion-buttons slot=\"end\">\n        <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" size=\"medium\" (click)=\"closeQRModal()\"></ion-icon>\n      </ion-buttons>\n     \n   \n  </ion-toolbar>\n    \n    \n\n</ion-header> \n\n<ion-content>\n\n  <ion-card style=\"box-shadow: none;\">\n  <ion-card-header>\n    <ion-card-title>{{bookname}}</ion-card-title>\n    <ion-card-subtitle style=\"color:darkgray; margin-top: 20px;\">Show this QR code while collecting or returning the book</ion-card-subtitle>\n  </ion-card-header>\n  \n  <ion-card>\n    <ion-img [src]=\"this.urlQR\"></ion-img> \n  </ion-card>\n \n</ion-card> \n\n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/qrcode-activities/qrcode-activities.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/qrcode-activities/qrcode-activities.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #F4F6F7  ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9xcmNvZGUtYWN0aXZpdGllcy9xcmNvZGUtYWN0aXZpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBYSxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFhO0VBQ2IscUJBQWdCO0VBRWhCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3FyY29kZS1hY3Rpdml0aWVzL3FyY29kZS1hY3Rpdml0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0Y0RjZGNyAgO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbiAgfVxuXG4gIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAiXX0= */"

/***/ }),

/***/ "./src/app/qrcode-activities/qrcode-activities.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/qrcode-activities/qrcode-activities.page.ts ***!
  \*************************************************************/
/*! exports provided: QrcodeActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrcodeActivitiesPage", function() { return QrcodeActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







var QrcodeActivitiesPage = /** @class */ (function () {
    //username: string = undefined;
    //subscription: Subscription;
    function QrcodeActivitiesPage(_modalController, booksService, _alertController, authService, loadingController) {
        this._modalController = _modalController;
        this.booksService = booksService;
        this._alertController = _alertController;
        this.authService = authService;
        this.loadingController = loadingController;
        /*this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
        .subscribe(name => { console.log(name); this.username = name; });*/
    }
    QrcodeActivitiesPage.prototype.ionViewWillAppear = function () {
    };
    QrcodeActivitiesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.bookname = this.bookName;
        console.log("RECEIVED BOOK ID IS", this.bookId);
        console.log("RECEIVED BOOK NAME IS", this.bookName);
        this.presentLoading();
        this.booksService.getBookQRImage(this.bookId)
            .subscribe(function (x) {
            _this.urlQR = x;
            console.log("THIS IS QR URL", _this.urlQR);
            //this.bookIdImageMap.set(this.lbookIds[i], this.url);
            //console.log("book image map", this.bookIdImageMap);
        }, function (errmess) {
            _this.errMess = errmess;
            _this.showError();
        });
    };
    QrcodeActivitiesPage.prototype.presentLoading = function () {
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
    QrcodeActivitiesPage.prototype.showError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: "Error",
                            message: this.errMess,
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/, alert.present()];
                }
            });
        });
    };
    QrcodeActivitiesPage.prototype.showServerQRcode = function () {
    };
    QrcodeActivitiesPage.prototype.closeQRModal = function () {
        this._modalController.dismiss();
    };
    QrcodeActivitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qrcode-activities',
            template: __webpack_require__(/*! ./qrcode-activities.page.html */ "./src/app/qrcode-activities/qrcode-activities.page.html"),
            styles: [__webpack_require__(/*! ./qrcode-activities.page.scss */ "./src/app/qrcode-activities/qrcode-activities.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], QrcodeActivitiesPage);
    return QrcodeActivitiesPage;
}());



/***/ }),

/***/ "./src/app/services/recommend.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/recommend.service.ts ***!
  \***********************************************/
/*! exports provided: RecommendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendService", function() { return RecommendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");








var RecommendService = /** @class */ (function () {
    function RecommendService(http, auth, processHTTPMsgService) {
        this.http = http;
        this.auth = auth;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    RecommendService.prototype.isRecommended = function (id) {
        var _this = this;
        if (!this.auth.isLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ exists: false, book: null });
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'recommended/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    RecommendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"]])
    ], RecommendService);
    return RecommendService;
}());



/***/ }),

/***/ "./src/app/viewcomments/viewcomments.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/viewcomments/viewcomments.module.ts ***!
  \*****************************************************/
/*! exports provided: ViewcommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcommentsPageModule", function() { return ViewcommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewcomments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewcomments.page */ "./src/app/viewcomments/viewcomments.page.ts");






var ViewcommentsPageModule = /** @class */ (function () {
    function ViewcommentsPageModule() {
    }
    ViewcommentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            entryComponents: [_viewcomments_page__WEBPACK_IMPORTED_MODULE_5__["ViewcommentsPage"]],
            declarations: [_viewcomments_page__WEBPACK_IMPORTED_MODULE_5__["ViewcommentsPage"]]
        })
    ], ViewcommentsPageModule);
    return ViewcommentsPageModule;
}());



/***/ }),

/***/ "./src/app/viewcomments/viewcomments.page.html":
/*!*****************************************************!*\
  !*** ./src/app/viewcomments/viewcomments.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <!--<ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 15px;\">\n    View Readers' Comments\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon style=\"color: white; background: #145A32; \" name=\"close\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>-->\n\n    <ion-title size=\"large\" text-center\n        style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color: #FDFEFE  ; font-weight: bolder; font-size: 15px; text-align: start;\">\n      View Readers' Comments\n    </ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-icon style=\"color: whitesmoke;\" src=\"../assets/icon/close-outline.svg\" size=\"medium\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  \n  \n \n</ion-header> \n\n\n<ion-content>\n\n  <ion-card class=\"displaycard\" style=\"box-shadow: olivedrab;\" *ngFor=\"let comment of commentsOnBook.comments\" >\n    <ion-card-content *ngIf=\"commentsOnBook\">\n      <ion-label style=\"color: #145a32; font-weight: bold;\">\n       {{comment.comment}}\n        <ion-chip style=\"background-color: #E9F7EF;  \">\n            {{comment.rating}} <ion-icon color=\"warning\" src=\"../assets/icon/star.svg\"></ion-icon>\n        </ion-chip>\n        <p></p>\n        <ion-text style=\"color: gray; font-weight: normal;\"> {{comment.author.firstname}} {{comment.author.lastname}} -  \n          {{comment.updatedAt | date }}\n        </ion-text>\n      </ion-label>\n       \n    </ion-card-content>\n    <ion-card-content *ngIf=\"!commentsOnBook\">\n      <ion-label>No comments exist on this book</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"closeModal()\" color=\"danger\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n   \n\n  \n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/viewcomments/viewcomments.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/viewcomments/viewcomments.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displaycard {\n  margin: 5px;\n  padding: 5px; }\n\nion-button {\n  --background: #F4F6F7  ; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC92aWV3Y29tbWVudHMvdmlld2NvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlLLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFDQyx1QkFBYSxFQUFBOztBQUdmO0VBRUUscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdjb21tZW50cy92aWV3Y29tbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXljYXJkIHtcbiAgICAvLyB3aWR0aDogMzB2dztcbiAgICAgLy9oZWlnaHQ6MzB2aDtcbiAgICAvLyBib3JkZXI6IGdyZXkgc29saWQgMXB4O1xuICAgICBtYXJnaW46IDVweDtcbiAgICAgcGFkZGluZzogNXB4O1xuICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICB9XG5cbiAgIGlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0Y0RjZGNyAgO1xuICB9XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/viewcomments/viewcomments.page.ts":
/*!***************************************************!*\
  !*** ./src/app/viewcomments/viewcomments.page.ts ***!
  \***************************************************/
/*! exports provided: ViewcommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcommentsPage", function() { return ViewcommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ViewcommentsPage = /** @class */ (function () {
    function ViewcommentsPage(_modalController) {
        this._modalController = _modalController;
    }
    ViewcommentsPage.prototype.ngOnInit = function () {
        this.commentsOnBook = this.bookComments;
        console.log("Book ID", this.commentsOnBook._id);
        console.log("Book ", this.commentsOnBook._id);
    };
    ViewcommentsPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    ViewcommentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewcomments',
            template: __webpack_require__(/*! ./viewcomments.page.html */ "./src/app/viewcomments/viewcomments.page.html"),
            styles: [__webpack_require__(/*! ./viewcomments.page.scss */ "./src/app/viewcomments/viewcomments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ViewcommentsPage);
    return ViewcommentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookdetail-bookdetail-module.js.map