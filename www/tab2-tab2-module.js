(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }]),
                ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_7__["IonicImageLoaderModule"]
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header color=\"success\" [translucent]=\"true\" collapse=\"condense\">\n\n  <ion-toolbar>\n    <ion-title size=\"large\" \n      style=\"font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #FDFEFE  ; font-weight: bolder; font-size: 25px; white-space: normal;\">Hello, {{username}}\n    </ion-title>\n  </ion-toolbar>\n\n  \n    \n \n\n\n\n\n</ion-header> \n\n\n\n<ion-content>\n\n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"clearCache($event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  \n   \n    <img-loader *ngIf=\"!showSkeleton\" style=\"margin-top: 30px;\" useImg (load)=\"onImageLoad($event)\" button> \n      <ion-avatar *ngIf=\"this.url\">\n        <img [src]=\"this.url\">\n      </ion-avatar>\n    </img-loader>\n  \n\n  \n    <img-loader  *ngIf=\"showSkeleton\" style=\"margin-top: 30px;\" button> \n    <ion-avatar>\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    </img-loader>\n \n   \n  <ion-list style=\"margin-top: 30px;\">\n    <ion-item (click)=\"selectImageSource()\"> \n      <span style=\"font-size: small;\">Upload/Edit Your Photo</span>\n    </ion-item>\n    <ion-item >\n      <span style=\"color:darkgrey; font-size: small;\">Update Profile</span> \n    </ion-item>\n    <ion-item>\n    <span style=\"color:darkgrey; font-size: small;\">Wallet</span> \n    </ion-item>\n    <ion-item>\n      <ion-icon src=\"../assets/icon/log-out-outline.svg\" \n      (click)=\"logOut()\"></ion-icon>\n    </ion-item>\n    <!--<span style=\"color:grey; font-size: x-small; padding-left: 10px;\">Booxar - 0.0.1 (0.1.9)</span>-->\n   \n  </ion-list>\n\n  \n  \n  \n\n\n\n\n\n</ion-content>\n\n\n\n  <!--<ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\">\n    <ion-img [src]=\"myProfileImage\"></ion-img>\n  </ion-avatar>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Dummy Text</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Dummy Text\n    </ion-card-content>\n  </ion-card> -->\n\n  <!-- <div *ngIf=\"!bookList\">\n    <ion-card>\n          <ion-skeleton-text class=\"skeleton-image\" animated></ion-skeleton-text>\n          <ion-card-header>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n        <ion-skeleton-text class=\"skeleton-image\" animated></ion-skeleton-text>\n        <ion-card-header>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n        <ion-skeleton-text class=\"skeleton-image\" animated></ion-skeleton-text>\n        <ion-card-header>\n          <ion-skeleton-text animated></ion-skeleton-text>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-card-header>\n    </ion-card>\n  </div>\n\n\n  <ion-card [routerLink]=\"['bookdetail', book.id]\" button\n  *ngFor=\"let book of (bookList | async)\">\n    <ion-img [src]=\"book.cropped\"></ion-img>\n    <ion-card-header>\n      <ion-card-title>{{book.name}}</ion-card-title>\n    </ion-card-header>\n  </ion-card> -->\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.skeleton-image {\n  height: 175px; }\n\n.profile-pic {\n  width: 200px;\n  height: 200px;\n  border: gray solid 1px;\n  margin: 10px auto; }\n\n.display_heading {\n  margin: 10px auto;\n  padding: 10px; }\n\n.my-custom-menu {\n  --width: 500px; }\n\nion-toolbar {\n  --background: #145A32; }\n\nion-button {\n  --background: #FDFEFE; }\n\n.my-custom-class {\n  --spinner-color: #fff; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block !important; }\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n  margin: auto;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW5hbHBhdGlsL1BlcnNvbmFsRmFtaWx5L1dvcmtSZWxhdGVkL1Byb2dyYW1taW5nL0lvbmljL1JlYWRBUnNfSW9uaWMvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFRLEVBQUE7O0FBRVY7RUFFRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0UscUJBQWEsRUFBQTs7QUFHZjtFQUVFLHFCQUFnQixFQUFBOztBQUtsQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0Usc0JBQXFCO0VBQ3JCLHVCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNrZWxldG9uLWltYWdlIHtcbiAgaGVpZ2h0OiAxNzVweDtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uZGlzcGxheV9oZWFkaW5nIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5teS1jdXN0b20tbWVudSB7XG4gIC0td2lkdGg6IDUwMHB4O1xufVxuaW9uLXRvb2xiYXIge1xuICAvLy0tYmFja2dyb3VuZDogIzFCNEY3MjtcbiAgLS1iYWNrZ3JvdW5kOiAjMTQ1QTMyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkRGRUZFO1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgXG4gIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcblxuICBcbn1cblxuLmNlbnRlcntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgXG59XG5cbmlvbi1hdmF0YXIgIHsgICAgIFxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcbiAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bookdetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bookdetail.service */ "./src/app/services/bookdetail.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader-v5 */ "./node_modules/ionic-image-loader-v5/fesm5/ionic-image-loader-v5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var Tab2Page = /** @class */ (function () {
    function Tab2Page(bookdetailService, authService, _camera, _alertController, _modalController, file, booksService, imageLoaderService, router, loadingController, toastCtrl) {
        var _this = this;
        this.authService = authService;
        this._camera = _camera;
        this._alertController = _alertController;
        this._modalController = _modalController;
        this.file = file;
        this.booksService = booksService;
        this.imageLoaderService = imageLoaderService;
        this.router = router;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.dataReader = new FileReader();
        this.username = undefined;
        this.showSkeleton = true;
        setTimeout(function () {
            _this.bookList = bookdetailService.getAllBooks();
        }, 3000);
    }
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showSkeleton = false;
        }, 3000);
        this.authService.loadUserCredentials();
        //this.presentLoading();
        this.subscription = this.authService.getUsername()
            .subscribe(function (name) {
            console.log(name);
            _this.username = name;
            if (_this.username) {
                _this.booksService.getMyProfileImage(_this.username)
                    .subscribe(function (x) {
                    _this.url = x;
                    console.log("this.url", _this.url);
                }, function (errMess) {
                    console.log("inside err mess");
                    console.log(errMess);
                    _this.url = undefined;
                });
            }
        });
    };
    Tab2Page.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            //message: 'Loading...please wait',
                            duration: 400
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
    Tab2Page.prototype.presentToast = function (errmsg) {
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
    Tab2Page.prototype.refreshPage = function () {
        console.log("inside refreshpage");
        window.location.reload();
    };
    Tab2Page.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Tab2Page.prototype.clearCache = function (refresher) {
        this.imageLoaderService.clearCache();
        refresher.complete();
    };
    Tab2Page.prototype.onImageLoad = function (event) {
        console.log("image ready");
    };
    Tab2Page.prototype.selectImageSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions, galleryOptions, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("inside image source");
                        cameraOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.CAMERA
                        };
                        galleryOptions = {
                            quality: 100,
                            destinationType: this._camera.DestinationType.FILE_URI,
                            encodingType: this._camera.EncodingType.PNG,
                            mediaType: this._camera.MediaType.PICTURE,
                            targetHeight: 180,
                            targetWidth: 100,
                            correctOrientation: true,
                            sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
                        };
                        return [4 /*yield*/, this._alertController.create({
                                header: "Select Source",
                                message: "Pick a source for your profile image",
                                buttons: [
                                    {
                                        text: "Camera",
                                        handler: function () {
                                            _this._camera.getPicture(cameraOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                console.log(imageURI);
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                console.log("image name", imageName);
                                                console.log("image path", imagePath);
                                                console.log("before read as data url");
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                console.log("after read as data url");
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                                /*this.booksService.uploadImage(this.submitted._id, this.uploadData)
                                                    .subscribe(res => {
                                                        console.log(res);
                                                        this.receivedImageData = res;
                                                        this.base64Data = this.receivedImageData.pic;
                                                        this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
                                                      });*/
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    },
                                    {
                                        text: "Gallery",
                                        handler: function () {
                                            _this._camera.getPicture(galleryOptions)
                                                .then(function (imageURI) {
                                                // display captured image
                                                var imageName = imageURI.substring(imageURI.lastIndexOf('/') + 1);
                                                var imagePath = imageURI.substring(0, imageURI.lastIndexOf('/') + 1);
                                                _this.file.readAsDataURL(imagePath, imageName).then(function (res) { return _this.capturedImage = res; });
                                                //  this.copyFileToLocalDir(imagePath, imageName, this.createFileName());
                                                // resolve URI, get blob & file and POST
                                                _this.file.resolveLocalFilesystemUrl(imageURI)
                                                    .then(function (entry) {
                                                    console.log("inside resolve local file system url");
                                                    entry.file(function (file) { return _this.readFile(file); });
                                                })
                                                    .catch(function (err) {
                                                    console.log("error reading file");
                                                });
                                            }, function (err) {
                                                // Handle error
                                                console.log(err);
                                            });
                                        }
                                    }
                                ]
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
    Tab2Page.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        console.log("file type", file.type);
        console.log("file type", file.name);
        reader.onloadend = function () {
            _this.uploadData = new FormData();
            if (reader.result) {
                var imgBlob = new Blob([reader.result], { type: file.type });
                _this.uploadData.append('imageFile', imgBlob, file.name);
                _this.booksService.uploadMyProfileImage(_this.username, _this.uploadData)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.presentToast("Photo Updated SuccessFully!");
                    _this.ngOnInit();
                    _this.receivedImageData = res;
                    _this.base64Data = _this.receivedImageData.pic;
                    _this.convertedImage = 'data:image/jpeg;base64,' + _this.base64Data;
                });
            }
        };
        reader.readAsArrayBuffer(file);
    };
    Tab2Page.prototype.logOut = function () {
        this.username = undefined;
        this.authService.logOut();
        console.log("After authservice logout");
        this.router.navigateByUrl('/login');
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bookdetail_service__WEBPACK_IMPORTED_MODULE_2__["BookdetailService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_7__["BooksService"],
            ionic_image_loader_v5__WEBPACK_IMPORTED_MODULE_8__["ImageLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map