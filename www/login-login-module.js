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
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signup/signup.module */ "./src/app/signup/signup.module.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_8__["SignupPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            //entryComponents: [LoginPage],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
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

module.exports = "<ion-header  style=\"box-shadow: none;\" color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n\n  <!--<ion-toolbar *ngIf=\"flag\">\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n    Sign In\n    </ion-title>\n  </ion-toolbar>-->\n\n  <ion-card style=\"box-shadow: none;\"> \n    <ion-card-title  style=\"font:x-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #145A32; font-weight: bold; font-size: 20px; margin-left: 10px; margin-top: 30px;\">\n     Boox<span style=\"background-color: #145A32; color: #FDFEFE; padding-left: 3px; padding-right: 3px;\">ar</span>\n    </ion-card-title>\n  </ion-card>\n\n</ion-header>\n\n \n<ion-content fullscreen>\n\n  \n\n  <span *ngIf=\"!flag\">\n    <!--<img class=\"displayimg\" src=\"../assets/images/homelibrary.jpeg\" style=\"height: 500px;\">-->\n        <ion-item-sliding>\n          <ion-slides [options]=\"sliderConfig\" (ionSlideDidChange)=\"slideChanged($event)\" style=\"margin-bottom: 5px;\"> \n            <ion-slide  *ngFor=\"let entry of taglinesArray\">\n              <ion-col>\n                <ion-row style=\"margin-top: 10px; margin-bottom: 5px;\">\n                  <img-loader class=\"displayimg\" [src]=\"entry[0]\"  style=\"height: 450px;\"\n                  useImg (load)=\"onImageLoad($event)\"></img-loader>\n                </ion-row>\n                <ion-label style=\"color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                font-size:20px; font-weight:bold; align-content: center;\" class=\"item-text-wrap, ion-text-center\">{{entry[1]}}</ion-label>\n              </ion-col>\n            </ion-slide>\n          </ion-slides>\n        </ion-item-sliding>\n  </span>\n  \n  <ion-card *ngIf=\"flag\" style=\"box-shadow:olivedrab\">\n    <ion-card-content>\n      <form [formGroup]=\"loginFormGroup\">\n        <ion-item>\n          <ion-label color=\"medium\">Username</ion-label>\n          <ion-input formControlName=\"username\" type=\"text\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"formErrors.username\">\n          <ng-container >\n            <div style=\"color:grey; font-size: small;\">\n              {{formErrors.username}}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label color=\"medium\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"formErrors.password\">\n          <ng-container >\n            <div style=\"color:grey; font-size: small;\">\n              {{formErrors.password}}\n            </div>\n          </ng-container>\n        </div>\n        <ion-row>\n          <ion-col>\n            <!--<ion-button shape=\"round\" (click)=\"logIn()\" style=\"color: whitesmoke;\" [disabled]=\"loginFormGroup.invalid\" \n             expand=\"full\" margin-top class=\"center\"><strong>Sign In</strong></ion-button>\n         \n            <ion-button  shape=\"round\" size=\"mini\" (click)=\"cancel()\" expand=\"full\" \n             margin-top style=\"color: whitesmoke\" class=\"center\">\n             Cancel\n             </ion-button>-->\n             <ion-card style=\"box-shadow: none;\">\n                <ion-button shape=\"round\" (click)=\"logIn()\"  \n                style=\"color: whitesmoke;\" [disabled]=\"loginFormGroup.invalid\" margin-top class=\"center\"> \n                <strong>Sign In</strong>\n                </ion-button>\n                <ion-card-subtitle margin-top shape=\"round\" (click)=\"cancel()\" button  \n                 style=\"color: #145A32; font-size: larger; font-weight: bolder; font-style: normal\" class=\"ion-text-center\">\n                  Cancel\n              </ion-card-subtitle>\n            </ion-card>\n\n           </ion-col>\n        </ion-row>\n       <!-- <ion-button shape=\"round\" (click)=\"cancel()\" margin-top expand=\"block\" style=\"color:grey\">Cancel</ion-button>-->\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-button margin-top shape=\"round\" *ngIf=\"!flag\" (click)=\"signupModal()\"  expand=\"block\"\n    style=\"color: white; font-size:large; font-style: normal; \" class=\"center\"> \n     Not a member ? Join Now!\n    </ion-button>\n   <ion-card-subtitle *ngIf=\"!flag\" margin-top shape=\"round\" (click)=\"displayLogin()\" button \n   style=\"color: #145A32; font-size: larger; font-weight: bolder; font-style: normal\" class=\"ion-text-center\">\n     Sign In\n   </ion-card-subtitle>\n  </ion-card>\n  \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.displaycard {\n  margin: 5px;\n  padding: 5px; }\n\n.displayimg {\n  margin-top: auto;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-button {\n  --background:  #145A32 ; }\n\nion-content {\n  --background: #FDFEFE ; }\n\nion-item {\n  --background: ; }\n\nion-fab-button {\n  --background: #FDFEFE; }\n\nion-toolbar {\n  --background:  #145A32; }\n\nion-slides {\n  --bullet-background: grey;\n  --bullet-background-active: #145A32; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\n.alignme {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdmO0VBSUcsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJZDtFQUdHLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0UsdUJBQWEsRUFBQTs7QUFLZjtFQUNFLHNCQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBRUMsc0JBQWEsRUFBQTs7QUFJZDtFQUNFLHlCQUFvQjtFQUNwQixtQ0FBMkIsRUFBQTs7QUFHN0I7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlfaGVhZGluZyB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGlzcGxheWNhcmQge1xuICAvLyB3aWR0aDogMzB2dztcbiAgIC8vaGVpZ2h0OjMwdmg7XG4gICAvL2JvcmRlcjogZ3JleSBzb2xpZCAxcHg7XG4gICBtYXJnaW46IDVweDtcbiAgIHBhZGRpbmc6IDVweDtcbiAgIFxuIH1cblxuIC5kaXNwbGF5aW1nIHtcbiAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIH1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogICMxNDVBMzIgO1xuICBcbiAgXG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkRGRUZFIDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNGREZFRkU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgXG4gLS1iYWNrZ3JvdW5kOiAgIzE0NUEzMjtcbiBcbn1cblxuaW9uLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IGdyZXk7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMTQ1QTMyO1xufVxuXG4uY2VudGVye1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBcbn1cblxuLmFsaWdubWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

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
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");




//import { SignupComponent } from '../signup/signup.component';





var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, router, _modalController, imageLoaderService, toastCtrl) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this._modalController = _modalController;
        this.imageLoaderService = imageLoaderService;
        this.toastCtrl = toastCtrl;
        this.sliderConfig = {
            initialSlide: 0,
            slidesPerView: 1,
            //loop: true,
            autoplay: {
                //disableOnInteraction: false,
                delay: 4000
            },
        };
        this.username = undefined;
        this.TaglineImages = ["../assets/images/Tagline1.JPG",
            "../assets/images/Tagline2.JPG",
            "../assets/images/Tagline3.JPG"];
        /*
        ["../assets/images/Tagline1.JPG", "Discover treasure trove of books hidden in others' bookshelves"],
        ["../assets/images/Tagline3.JPG", "Build network & amplify your happines by exchanging books"],
        ["../assets/images/Tagline2.JPG", "Augment your imagination with immersive reading experience"]
        */
        this.taglinesMap = new Map([
            ["../assets/images/Tagline1.JPG", "Discover books hidden in others' bookshelves"],
            ["../assets/images/Tagline3.JPG", "Connect & network with like-minded readers"],
            ["../assets/images/Tagline2.JPG", "Get immersed by augmenting your imagination"]
        ]);
        this.taglinesArray = Array.from(this.taglinesMap.entries());
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required.',
                'minlength': 'Username must be at least 2 characters long.',
                'maxlength': 'Username cannot be more than 25 characters long.'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 5 characters long.',
                'maxlength': 'Password cannot be more than 25 characters long.',
                'pattern': 'Password must contain only numbers and letters.'
            }
        };
        this.user = { username: '', password: '', remember: false };
        this.loginFormGroup = formBuilder.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.loginFormGroup.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    LoginPage.prototype.onValueChanged = function (data) {
        if (!this.loginFormGroup) {
            return;
        }
        var form = this.loginFormGroup;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    LoginPage.prototype.clearCache = function () {
        this.imageLoaderService.clearCache();
        //refresher.complete();
    };
    LoginPage.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    LoginPage.prototype.slideChanged = function (event) {
        //this.slider.stopAutoplay(); //this code for slide after page change
        //this.slider.startAutoplay();
        this.sliderConfig.autoplay;
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.flag = false;
    };
    LoginPage.prototype.presentToast = function (errmsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: errmsg,
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
            _this.presentToast(_this.errMess);
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__["ImageLoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
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

module.exports = "<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n  <ion-toolbar >\n    <ion-title size=\"large\" \n               style=\"font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color:  #FDFEFE  ; font-weight: bolder; font-size: 25px;\">\n     Join Booxar\n    </ion-title>\n  </ion-toolbar>\n\n\n  \n\n \n</ion-header> \n\n<ion-content>\n\n\n \n  <ion-card style=\"box-shadow:olivedrab\">\n\n    \n\n    <ion-card-content>\n\n      \n\n      <form [formGroup]=\"signupFormGroup\">\n\n        \n        <ion-item>\n          <ion-label color=\"medium\">First Name</ion-label>\n          <ion-input formControlName=\"firstname\" type=\"text\" required></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label color=\"medium\">Last Name</ion-label>\n          <ion-input formControlName=\"lastname\" type=\"text\" required></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label color=\"medium\">Username</ion-label>\n          <ion-input formControlName=\"username\" type=\"text\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"formErrors.username\">\n          <ng-container >\n            <div style=\"color:grey; font-size:x-small;\">\n              {{formErrors.username}}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label color=\"medium\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"formErrors.password\">\n          <ng-container >\n            <div style=\"color:grey; font-size:x-small;\">\n              {{formErrors.password}}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label color=\"medium\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"formErrors.email\">\n          <ng-container >\n            <div style=\"color:grey; font-size:x-small;\">\n              {{formErrors.email}}\n            </div>\n          </ng-container>\n        </div>\n\n        <!--<ion-row>\n          <ion-col>\n            <ion-button shape=\"round\" (click)=\"onSubmit()\" style=\"color: white; background-color: darkgreen\"\n            [disabled]=\"signupFormGroup.invalid\" margin-top expand=\"full\">Join</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button  shape=\"round\" size=\"mini\" (click)=\"closeModal()\" expand=\"block\" \n            margin-top style=\"color:grey; \">\n             Cancel\n             </ion-button>\n          </ion-col>\n        </ion-row>-->\n\n        <ion-card style=\"box-shadow: none;\">\n          <ion-button margin-top shape=\"round\" *ngIf=\"!flag\" (click)=\"onSubmit()\"  expand=\"block\"\n          [disabled]=\"signupFormGroup.invalid\" style=\"color: white; font-size:large; font-style: normal; \" class=\"center\"> \n          Join\n          </ion-button>\n         <ion-card-subtitle *ngIf=\"!flag\" margin-top shape=\"round\" (click)=\"closeModal()\" button \n         style=\"color: #145A32; font-size: larger; font-weight: bolder; font-style: normal\" class=\"ion-text-center\">\n           Cancel\n         </ion-card-subtitle>\n        </ion-card>\n\n       \n       \n      </form>\n    </ion-card-content>\n  </ion-card>  \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background:  #145A32 ; }\n\nion-content {\n  --background: #FDFEFE ; }\n\nion-item {\n  --background: ; }\n\nion-fab-button {\n  --background: #FDFEFE; }\n\nion-toolbar {\n  --background: #145A32; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFhLEVBQUE7O0FBSWI7RUFDRSxzQkFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWEsRUFBQTs7QUFFZjtFQUVFLHFCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICAjMTQ1QTMyIDtcbiAgfVxuICBcbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGREZFRkUgO1xuICB9XG4gIFxuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiA7XG4gIH1cbiAgXG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNGREZFRkU7XG4gIH1cbiAgaW9uLXRvb2xiYXIge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjMUI0RjcyO1xuICAgIC0tYmFja2dyb3VuZDogIzE0NUEzMjtcbiAgfVxuIFxuIFxuXG5cblxuIl19 */"

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
    function SignupPage(_modalController, formBuilder, authService, router, toastCtrl) {
        var _this = this;
        this._modalController = _modalController;
        this.authService = authService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.newuser = { firstname: '', lastname: '', username: '', password: '', email: '' };
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'username': '',
            'password': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'Firstname is required.',
            },
            'lastname': {
                'required': 'Lastname is required.',
            },
            'username': {
                'required': 'Username is required.',
                'minlength': 'Username must be at least 2 characters long.',
                'maxlength': 'Username cannot be more than 25 characters long.'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 5 characters long.',
                'maxlength': 'Password cannot be more than 25 characters long.',
                'pattern': 'Password must contain only numbers and letters.'
            },
            'email': {
                'required': 'Email Address is required.',
                'pattern': 'Email Address must be in valid format'
            }
        };
        this.signupFormGroup = formBuilder.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25)]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
                ]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
        });
        this.signupFormGroup.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    }
    SignupPage.prototype.onValueChanged = function (data) {
        if (!this.signupFormGroup) {
            return;
        }
        var form = this.signupFormGroup;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
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
                _this.presentToast(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
            _this.presentToast(_this.errMess);
        });
        this.closeModal();
    };
    SignupPage.prototype.presentToast = function (errmsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: errmsg,
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
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map