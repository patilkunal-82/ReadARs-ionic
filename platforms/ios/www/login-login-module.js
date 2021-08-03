(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/signup.module */ "./src/app/signup/signup.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_7__["SignupPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            //entryComponents: [LoginPage],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n    ReadARs\n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n\n<ion-content>\n\n  <span margin-top *ngIf=\"!flag\">\n    <!--<img class=\"displayimg\" src=\"../assets/images/homelibrary.jpeg\" style=\"height: 500px;\">-->\n    \n        <ion-item-sliding>\n          <ion-slides #slider loop=\"true\" pager=\"true\" [options]=\"sliderConfig\" (ionSlideTouchEnd)=\"slideChanged()\"> \n            <ion-slide  *ngFor=\"let taglineImage of TaglineImages\">\n              <ion-img class=\"displayimg\" [src]=\"taglineImage\" style=\"height: 500px;\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n        </ion-item-sliding>\n     \n    \n  </span>\n  \n  <ion-card *ngIf=\"flag\">\n    <ion-card-content>\n      <form [formGroup]=\"loginFormGroup\">\n        <ion-item>\n          <ion-label color=\"medium\">Username</ion-label>\n          <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button shape=\"round\" (click)=\"logIn()\" style=\"color: #145A32  ;\" [disabled]=\"loginFormGroup.invalid\" \n             expand=\"block\" margin-top> <strong>Sign In</strong></ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button  shape=\"round\" size=\"mini\" (click)=\"cancel()\" expand=\"block\" \n            margin-top style=\"color:grey\">\n             Cancel\n             </ion-button>\n          </ion-col>\n        </ion-row>\n       <!-- <ion-button shape=\"round\" (click)=\"cancel()\" margin-top expand=\"block\" style=\"color:grey\">Cancel</ion-button>-->\n      </form>\n    </ion-card-content>\n  </ion-card>\n  \n\n \n    \n      <ion-button *ngIf=\"!flag\" style=\"color: #145A32\" margin-top  shape=\"round\" expand=\"block\" (click)=\"signupModal()\"> \n        <strong>Not a member ? Join Now!</strong>  </ion-button>\n      <p></p>\n      <ion-button *ngIf=\"!flag\" shape=\"round\" style=\"color: #145A32\" expand=\"block\" (click)=\"displayLogin()\"> \n        <strong>Sign In </strong></ion-button>\n      <p></p>\n    \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayimg {\n  margin-left: auto;\n  margin-right: auto; }\n\nion-button {\n  --background: #E9F7EF   ; }\n\nion-content {\n  --background: #FDFEFE ; }\n\nion-item {\n  --background: ; }\n\nion-fab-button {\n  --background: #FDFEFE; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBSUcsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJZDtFQUdHLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSx3QkFBYSxFQUFBOztBQUdmO0VBQ0Usc0JBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhLEVBQUE7O0FBR2Y7RUFFRSxxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlfaGVhZGluZyB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGlzcGxheWNhcmQge1xuICAvLyB3aWR0aDogMzB2dztcbiAgIC8vaGVpZ2h0OjMwdmg7XG4gICAvL2JvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICBtYXJnaW46IDVweDtcbiAgIHBhZGRpbmc6IDVweDtcbiAgIFxuIH1cblxuIC5kaXNwbGF5aW1nIHtcbiAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiB9XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNFOUY3RUYgICA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkRGRUZFIDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNGREZFRkU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup/signup.page */ "./src/app/signup/signup.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




//import { SignupComponent } from '../signup/signup.component';



var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router, _modalController) {
        this.authService = authService;
        this.router = router;
        this._modalController = _modalController;
        this.sliderConfig = {
            speed: 300,
            initialSlide: 0,
            slidesPerView: 1,
        };
        this.username = undefined;
        this.TaglineImages = ["../assets/images/Tagline1.JPG",
            "../assets/images/Tagline2.JPG",
            "../assets/images/Tagline3.JPG"];
        this.TaggLines = ["", "", ""];
        this.user = { username: '', password: '', remember: false };
        this.loginFormGroup = formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    LoginPage.prototype.slideChanged = function () {
        this.slider.stopAutoplay(); //this code for slide after page change
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.flag = false;
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loadUserCredentials();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) {
            console.log(name);
            _this.username = name;
            if (_this.username) {
                console.log("Success");
                //this.dialogRef.close(res.success);
                _this.router.navigateByUrl('/tabs');
            }
            else {
                console.log("Could not Log In");
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginPage.prototype.signupModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var singupmodal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalController.create({
                            component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
                        })];
                    case 1:
                        singupmodal = _a.sent();
                        return [4 /*yield*/, singupmodal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.displayLogin = function () {
        this.displayflag = true;
        if (this.displayflag) {
            console.log("DISPLAY FLAG", this.displayflag);
            this.flag = true;
        }
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.user = this.loginFormGroup.value;
        console.log('User: ', this.user);
        this.authService.logIn(this.user)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Success");
                //this.dialogRef.close(res.success);
                _this.router.navigateByUrl('/tabs/tab1');
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    LoginPage.prototype.cancel = function () {
        console.log("inside cancel");
        this.flag = false;
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");






var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                //RouterModule.forChild(routes)
            ],
            entryComponents: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color:  #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Join ReadARs\n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content>\n\n\n \n  <ion-card>\n\n    \n\n    <ion-card-content>\n\n      \n\n      <form [formGroup]=\"signupFormGroup\" #fform=\"ngForm\">\n\n        \n        <ion-item>\n          <ion-label color=\"medium\">First Name</ion-label>\n          <ion-input formControlName=\"firstname\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\">Last Name</ion-label>\n          <ion-input formControlName=\"lastname\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\">Username</ion-label>\n          <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"medium\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-button shape=\"round\" (click)=\"onSubmit()\" style=\"color: darkgreen;\"\n            [disabled]=\"signupFormGroup.invalid\" margin-top expand=\"full\">Join</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button  shape=\"round\" size=\"mini\" (click)=\"closeModal()\" expand=\"block\" \n            margin-top style=\"color:grey\">\n             Cancel\n             </ion-button>\n          </ion-col>\n        </ion-row>\n\n       \n       \n      </form>\n    </ion-card-content>\n  </ion-card>  \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #F4F6F7  ; }\n\nion-content {\n  --background: #FDFEFE ; }\n\nion-item {\n  --background: ; }\n\nion-fab-button {\n  --background: #FDFEFE; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFhLEVBQUE7O0FBSWY7RUFDRSxzQkFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUVFLHFCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0Y0RjZGNyAgO1xuICB9XG4gIFxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0ZERkVGRSA7XG4gIH1cbiAgXG4gIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IDtcbiAgfVxuICBcbiAgaW9uLWZhYi1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogI0ZERkVGRTtcbiAgfVxuICBpb24tdG9vbGJhciB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMxQjRGNzI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xuICB9XG4gXG4gXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupPage = /** @class */ (function () {
    function SignupPage(_modalController, formBuilder, authService, router) {
        this._modalController = _modalController;
        this.authService = authService;
        this.router = router;
        this.newuser = { firstname: '', lastname: '', username: '', password: '', email: '' };
        this.signupFormGroup = formBuilder.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        this.newuser = this.signupFormGroup.value;
        console.log('User: ', this.newuser);
        this.authService.signUp(this.newuser)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Success");
                //this.dialogRef.close(res.success);
                _this.router.navigateByUrl('/tabs/tab1');
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
        this.closeModal();
    };
    SignupPage.prototype.closeModal = function () {
        console.log("inside close modal");
        this._modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupPage.prototype, "signupFormDirective", void 0);
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map