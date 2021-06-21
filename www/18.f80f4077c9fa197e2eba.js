(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W9vR:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),u=function(){return function(){}}(),t=o("oBZk"),i=o("ZZ/e"),r=o("gIcY"),a=o("Ip0R"),s=o("mrSG"),b=["English","Hindi","Marathi","German","Tamil","Spanish","French","Telugu","Latin","Malyalam"],c=o("d5rD"),d=o("Pn9U"),g=o("Yttj"),h=o("01F9"),p=o("iWj2"),m=function(){function l(l,n,o,e,u,t,i,r,a){this._modalController=l,this._alertController=n,this.booksService=o,this.fb=e,this._camera=u,this._webview=t,this.file=i,this.plt=r,this.filePath=a,this.dataReader=new FileReader,this.booklanguage=b,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.formErrors={bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"",bookauthor:""},this.validationMessages={bookname:{required:"Book Name is required.",minlength:"Book Name must be at least 1 character long.",maxlength:"BookName cannot be more than 40 characters long."},booklanguage:{required:"Book Language is required.",minlength:"Book Language must be at least 2 characters long.",maxlength:"Book Language cannot be more than 25 characters long."},bookowneraddress:{required:"Address is required."},bookownertelnum:{required:"Contact number is required.",pattern:"Contact number must contain only numbers."},booauthor:{required:"Author Name is required.",minlength:"Author Name must be at least 1 character long.",maxlength:"Author Name cannot be more than 40 characters long."}}}return l.prototype.ngOnInit=function(){var l=this;this.createForm(),this.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),document.querySelector("ion-button").addEventListener("click",this.onSubmit)},l.prototype.onFileChanged=function(l){console.log(l),this.selectedFile=l.target.files[0],console.log("Event",l),console.log("Event target files",l.target.files),console.log("selected file contnets",this.selectedFile),console.log("selected file name",this.selectedFile.name),this.uploadData=new FormData,this.uploadData.append("imageFile",this.selectedFile,this.selectedFile.name),this.dataReader.readAsArrayBuffer(l.target.files[0])},l.prototype.createForm=function(){var l=this;this.addBookFormGroup=this.fb.group({bookname:["",[r.m.required,r.m.minLength(1),r.m.maxLength(40)]],booklanguage:["",[r.m.required,r.m.minLength(2),r.m.maxLength(25)]],bookowneraddress:["",[r.m.required]],bookdescription:["",[r.m.required,r.m.minLength(2),r.m.maxLength(200)]],bookownertelnum:["",[r.m.required,r.m.pattern]],bookrating:"5",bookauthor:["",[r.m.required,r.m.minLength(1),r.m.maxLength(200)]],bookcoverimage:""}),this.addBookFormGroup.valueChanges.subscribe(function(n){return l.onValueChanged(n)})},l.prototype.onValueChanged=function(l){if(this.addBookFormGroup){var n=this.addBookFormGroup;for(var o in this.formErrors)if(this.formErrors.hasOwnProperty(o)){this.formErrors[o]="";var e=n.get(o);if(e&&e.dirty&&!e.valid){var u=this.validationMessages[o];for(var t in e.errors)e.errors.hasOwnProperty(t)&&(this.formErrors[o]+=u[t]+" ")}}}},l.prototype.onSubmit=function(){return s.b(this,void 0,void 0,function(){var l=this;return s.e(this,function(n){switch(n.label){case 0:return[4,this._alertController.create({header:"Add Book",message:"Select your option..",buttons:[{text:"Add this",handler:function(){l.addbook=l.addBookFormGroup.value,console.log(l.addbook),l.showForm=!1,l.booksService.addBook(l.addbook).subscribe(function(n){console.log("response received-BOOK ADDED"),l.submitted=n,l.booksService.uploadImage(l.submitted._id,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data}),l.addbook=null,setTimeout(function(){l.submitted=null,l.showForm=!0},5e3)},function(l){return console.log(l.status,l.message)}),l.addBookFormGroup.reset({bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"5",bookcoverimage:""}),l.addbookDetailsFormDirective.resetForm(),l.closeModal()}},{text:"Add this & 1 more",handler:function(){l.addbook=l.addBookFormGroup.value,console.log(l.addbook),l.showForm=!1,l.booksService.addBook(l.addbook).subscribe(function(n){console.log("response received"),l.submitted=n,console.log(l.submitted),l.booksService.uploadImage(l.submitted._id,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data}),l.addbook=null,setTimeout(function(){l.submitted=null,l.showForm=!0},5e3)},function(l){return console.log(l.status,l.message)}),l.addBookFormGroup.reset({bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"5",bookcoverimage:""}),l.addbookDetailsFormDirective.resetForm()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.selectImageSource=function(){return s.b(this,void 0,void 0,function(){var l,n,o=this;return s.e(this,function(e){switch(e.label){case 0:return l={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},n={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){o._camera.getPicture(l).then(function(l){console.log(l);var n=l.substring(l.lastIndexOf("/")+1),e=l.substring(0,l.lastIndexOf("/")+1);console.log("image name",n),console.log("image path",e),console.log("before read as data url"),o.file.readAsDataURL(e,n).then(function(l){return o.capturedImage=l}),console.log("after read as data url"),o.file.resolveLocalFilesystemUrl(l).then(function(l){console.log("inside resolve local file system url"),l.file(function(l){return o.readFile(l)})}).catch(function(l){console.log("error reading file")})},function(l){console.log(l)})}},{text:"Gallery",handler:function(){o._camera.getPicture(n).then(function(l){var n=l.substring(l.lastIndexOf("/")+1),e=l.substring(0,l.lastIndexOf("/")+1);o.file.readAsDataURL(e,n).then(function(l){return o.capturedImage=l}),o.file.resolveLocalFilesystemUrl(l).then(function(l){console.log("inside resolve local file system url"),l.file(function(l){return o.readFile(l)})}).catch(function(l){console.log("error reading file")})},function(l){console.log(l)})}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},l.prototype.readFile=function(l){var n=this,o=new FileReader;console.log("file type",l.type),console.log("file type",l.name),o.onloadend=function(){if(n.uploadData=new FormData,o.result){var e=new Blob([o.result],{type:l.type});n.uploadData.append("imageFile",e,l.name)}},o.readAsArrayBuffer(l)},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),k=e.nb({encapsulation:0,styles:[[".book-img[_ngcontent-%COMP%]{width:50px;height:50px;border:1px solid gray;margin:5px auto}"]],data:{}});function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["src","../assets/icon/camera-outline.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.selectImageSource()&&e),e},t.kb,t.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/camera-outline.svg")},null)}function v(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-img",[["formControlName","bookcoverimage"],["height","100"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,t.lb,t.s)),e.ob(1,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[8,null],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(3,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(4,49152,null,0,i.C,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){var o=n.component;l(n,1,0,"bookcoverimage"),l(n,4,0,o.capturedImage)},function(l,n){l(n,0,0,e.yb(n,3).ngClassUntouched,e.yb(n,3).ngClassTouched,e.yb(n,3).ngClassPristine,e.yb(n,3).ngClassDirty,e.yb(n,3).ngClassValid,e.yb(n,3).ngClassInvalid,e.yb(n,3).ngClassPending)})}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,t.Ab,t.I)),e.ob(1,49152,null,0,i.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Fb(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function C(l){return e.Hb(0,[e.Db(402653184,1,{addbookDetailsFormDirective:0}),(l()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,t.jb,t.q)),e.ob(2,49152,null,0,i.A,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,t.Lb,t.S)),e.ob(4,49152,null,0,i.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,t.Kb,t.R)),e.ob(6,49152,null,0,i.yb,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Add new book.."])),(l()(),e.pb(8,0,null,null,115,"ion-content",[],null,null,null,t.fb,t.m)),e.ob(9,49152,null,0,i.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,113,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var u=!0;return"submit"===n&&(u=!1!==e.yb(l,12).onSubmit(o)&&u),"reset"===n&&(u=!1!==e.yb(l,12).onReset()&&u),u},null,null)),e.ob(11,16384,null,0,r.o,[],null,null),e.ob(12,540672,[[1,4],["fform",4]],0,r.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,r.a,null,[r.e]),e.ob(14,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),e.pb(15,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(16,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(17,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(18,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Name:"])),(l()(),e.pb(20,0,null,0,6,"ion-input",[["formControlName","bookname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,21)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,21)._handleInputEvent(o.target.value)&&u),u},t.ob,t.v)),e.ob(21,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(23,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(25,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(26,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(27,0,null,null,10,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(28,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(29,0,null,0,4,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(30,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Cover Image: "])),(l()(),e.gb(16777216,null,0,1,null,f)),e.ob(33,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(34,0,null,0,3,"ion-thumbnail",[],null,null,null,t.Jb,t.Q)),e.ob(35,49152,null,0,i.xb,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,v)),e.ob(37,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(38,0,null,null,13,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(39,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(40,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(41,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Language:"])),(l()(),e.pb(43,0,null,0,8,"ion-select",[["formControlName","booklanguage"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,44)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,44)._handleChangeEvent(o.target.value)&&u),u},t.Bb,t.H)),e.ob(44,16384,null,0,i.Kb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Kb]),e.ob(46,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(48,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(49,49152,null,0,i.lb,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,y)),e.ob(51,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(52,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(53,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(54,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(55,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book's Author:"])),(l()(),e.pb(57,0,null,0,6,"ion-input",[["formControlName","bookauthor"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,58)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,58)._handleInputEvent(o.target.value)&&u),u},t.ob,t.v)),e.ob(58,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(60,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(62,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(63,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(64,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(65,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(66,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(67,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Description:"])),(l()(),e.pb(69,0,null,0,6,"ion-input",[["formControlName","bookdescription"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,70)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,70)._handleInputEvent(o.target.value)&&u),u},t.ob,t.v)),e.ob(70,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(72,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(74,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(75,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(76,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(77,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(78,0,null,0,2,"ion-text",[["color","medium"]],null,null,null,t.Hb,t.O)),e.ob(79,49152,null,0,i.vb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your Rating for the book:"])),(l()(),e.pb(81,0,null,0,6,"ion-range",[["formControlName","bookrating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,82)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,82)._handleChangeEvent(o.target.value)&&u),u},t.vb,t.C)),e.ob(82,16384,null,0,i.Kb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Kb]),e.ob(84,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(86,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(87,49152,null,0,i.ab,[e.h,e.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),e.pb(88,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(89,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(90,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(91,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your address:"])),(l()(),e.pb(93,0,null,0,6,"ion-input",[["formControlName","bookowneraddress"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,94)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,94)._handleInputEvent(o.target.value)&&u),u},t.ob,t.v)),e.ob(94,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(96,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(98,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(99,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(100,0,null,null,11,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(101,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(102,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.tb,t.A)),e.ob(103,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your contact number:"])),(l()(),e.pb(105,0,null,0,6,"ion-input",[["formControlName","bookownertelnum"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,106)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,106)._handleInputEvent(o.target.value)&&u),u},t.ob,t.v)),e.ob(106,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(108,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(110,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(111,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(112,0,null,null,11,"ion-row",[],null,null,null,t.yb,t.F)),e.ob(113,49152,null,0,i.hb,[e.h,e.k],null,null),(l()(),e.pb(114,0,null,0,4,"ion-col",[],null,null,null,t.eb,t.l)),e.ob(115,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(116,0,null,0,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e},t.W,t.d)),e.ob(117,49152,null,0,i.j,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),e.Fb(-1,0,["Submit"])),(l()(),e.pb(119,0,null,0,4,"ion-col",[],null,null,null,t.eb,t.l)),e.ob(120,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(121,0,null,0,2,"ion-button",[["color","danger"],["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},t.W,t.d)),e.ob(122,49152,null,0,i.j,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Fb(-1,0,["Cancel"]))],function(l,n){var o=n.component;l(n,12,0,o.addBookFormGroup),l(n,18,0,"medium"),l(n,23,0,"bookname"),l(n,26,0,"text"),l(n,30,0,"medium"),l(n,33,0,!o.capturedImage),l(n,37,0,o.capturedImage),l(n,41,0,"medium"),l(n,46,0,"booklanguage"),l(n,51,0,o.booklanguage),l(n,55,0,"medium"),l(n,60,0,"bookauthor"),l(n,63,0,"text"),l(n,67,0,"medium"),l(n,72,0,"bookdescription"),l(n,75,0,"text"),l(n,79,0,"medium"),l(n,84,0,"bookrating"),l(n,87,0,"rating","1","5","true","","5"),l(n,91,0,"medium"),l(n,96,0,"bookowneraddress"),l(n,99,0,"text"),l(n,103,0,"medium"),l(n,108,0,"bookownertelnum"),l(n,111,0,"text"),l(n,117,0,o.addBookFormGroup.invalid,"full"),l(n,122,0,"danger","full")},function(l,n){l(n,10,0,e.yb(n,14).ngClassUntouched,e.yb(n,14).ngClassTouched,e.yb(n,14).ngClassPristine,e.yb(n,14).ngClassDirty,e.yb(n,14).ngClassValid,e.yb(n,14).ngClassInvalid,e.yb(n,14).ngClassPending),l(n,20,0,e.yb(n,25).ngClassUntouched,e.yb(n,25).ngClassTouched,e.yb(n,25).ngClassPristine,e.yb(n,25).ngClassDirty,e.yb(n,25).ngClassValid,e.yb(n,25).ngClassInvalid,e.yb(n,25).ngClassPending),l(n,43,0,e.yb(n,48).ngClassUntouched,e.yb(n,48).ngClassTouched,e.yb(n,48).ngClassPristine,e.yb(n,48).ngClassDirty,e.yb(n,48).ngClassValid,e.yb(n,48).ngClassInvalid,e.yb(n,48).ngClassPending),l(n,57,0,e.yb(n,62).ngClassUntouched,e.yb(n,62).ngClassTouched,e.yb(n,62).ngClassPristine,e.yb(n,62).ngClassDirty,e.yb(n,62).ngClassValid,e.yb(n,62).ngClassInvalid,e.yb(n,62).ngClassPending),l(n,69,0,e.yb(n,74).ngClassUntouched,e.yb(n,74).ngClassTouched,e.yb(n,74).ngClassPristine,e.yb(n,74).ngClassDirty,e.yb(n,74).ngClassValid,e.yb(n,74).ngClassInvalid,e.yb(n,74).ngClassPending),l(n,81,0,e.yb(n,86).ngClassUntouched,e.yb(n,86).ngClassTouched,e.yb(n,86).ngClassPristine,e.yb(n,86).ngClassDirty,e.yb(n,86).ngClassValid,e.yb(n,86).ngClassInvalid,e.yb(n,86).ngClassPending),l(n,93,0,e.yb(n,98).ngClassUntouched,e.yb(n,98).ngClassTouched,e.yb(n,98).ngClassPristine,e.yb(n,98).ngClassDirty,e.yb(n,98).ngClassValid,e.yb(n,98).ngClassInvalid,e.yb(n,98).ngClassPending),l(n,105,0,e.yb(n,110).ngClassUntouched,e.yb(n,110).ngClassTouched,e.yb(n,110).ngClassPristine,e.yb(n,110).ngClassDirty,e.yb(n,110).ngClassValid,e.yb(n,110).ngClassInvalid,e.yb(n,110).ngClassPending)})}function I(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-addbook",[],null,null,null,C,k)),e.ob(1,114688,null,0,m,[i.Eb,i.a,c.a,r.b,d.a,g.a,h.a,i.Hb,p.a],null,null)],function(l,n){l(n,1,0)},null)}var B=e.lb("app-addbook",m,I,{},{},[]),w=o("pMnS"),F=o("zA0m"),x=["None","Tel","Email"],T=o("lGQG"),S=o("JhVf"),E=o("fNyx"),D=o("S6gA"),M=o("+6W9"),O=o("9Z1F"),A=o("t/Na"),L=o("mI4i"),_=o("lUK6"),P=function(){function l(l,n){this.http=l,this.processHTTPMsgService=n}return l.prototype.submitFeedback=function(l){var n={headers:new A.h({"Content-Type":"application/json"})};return this.http.post(L.a+"feedback/",l,n).pipe(Object(O.a)(this.processHTTPMsgService.handleError))},l.prototype.getFeedback=function(){return this.http.get(L.a+"feedback").pipe(Object(O.a)(this.processHTTPMsgService.handleError))},l.prototype.getFeaturedFeedback=function(){return this.http.get(L.a+"feedback?rating=5").pipe(Object(O.a)(this.processHTTPMsgService.handleError))},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(A.c),e.W(_.a))},token:l,providedIn:"root"}),l}(),R=o("LwiL"),q=function(){function l(l,n,o,e,u,t,i,a,s,c,d,g,h,p,m,k,f,v){this._camera=l,this._alertController=n,this._modalController=o,this.authService=e,this.navCtrl=u,this.readarsService=t,this.baseURL=i,this.router=a,this.route=s,this.searchedMyData=c,this.fb=d,this.feedbackservice=g,this.booksService=h,this.reservedService=p,this.borrowedService=m,this.availableService=k,this.activatedRoute=f,this.barCodeScanner=v,this.searchTerm="",this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.name="Angular",this.currentRouter=this.router.url,this.booklanguage=b,this.contactType=x,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.searchControl=new r.c}return l.prototype.ngOnInit=function(){var l=this;this.setFilteredItems(),this.authService.loadUserCredentials(),this.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n})},l.prototype.ionViewWillEnter=function(){var l=this;this.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),this.prepareBookIdsImagesMap()},l.prototype.prepareBookIdsImagesMap=function(){var l=this;this.booksService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds),l.lbookIds=l.loadBookIds();for(var o=function(n){l.booksService.getBookImage(l.lbookIds[n]).subscribe(function(o){l.url=o,console.log("this.url",l.url),l.bookIdImageMap.set(l.lbookIds[n],l.url),console.log("book image map",l.bookIdImageMap)},function(l){return console.log(l)})},e=0;e<l.lbookIds.length;e++)o(e)},function(n){return l.errMess=n})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.ngAfterViewInit=function(){},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.booksService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedMyData.filterItems(this.searchTerm),console.log("Searched my data",this.books)},l.prototype.deleteBook=function(l){var n=this;console.log("Deleting Book "+l),this.booksService.deleteBook(l).subscribe(function(l){return n.removebook=l},function(l){return n.errMess=l}),this.booksService.deleteBookImage(l).subscribe(function(l){return console.log(l)},function(l){return n.errMess=l}),this.delete=!1,this.ngOnInit()},l.prototype.scanToLendOrRelease=function(l){this.ngOnInit(),console.log("INSIDE SCAN TO LEND AND RELEASE");for(var n=0;n<this.books.length;n++){this.books[n]._id===l&&(this.qrCheckString=this.books[n]._id+this.books[n].bookowner.username+this.books[n].bookcurrentuser,console.log("QR CHECK STRING",this.qrCheckString));break}this.scanToLendOrReleaseActions(l,this.qrCheckString)},l.prototype.scanToLendOrReleaseActions=function(l,n){return s.b(this,void 0,void 0,function(){var o=this;return s.e(this,function(e){switch(e.label){case 0:return[4,this._alertController.create({header:"Choose your option",message:"Book : Lend or Make Available to others ",buttons:[{text:"Lend",handler:function(){o.scanQRcode(),n==o.scannedData.text?(console.log("READY TO EXECUTE LEND BOOK"),o.lendBook(l)):console.log("QR CODES DON'T MATCH")}},{text:"Make Available",handler:function(){o.scanQRcode(),n==o.scannedData.text?(console.log("READY TO EXECUTE RELEASE BOOK"),o.releaseBook(l)):console.log("QR CODES DON'T MATCH")}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},l.prototype.scanQRcode=function(){var l=this;this.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(n){console.log("Barcode data",n),l.scannedData=n,console.log("SCANNED DATA",l.scannedData.text)}).catch(function(l){console.log("Error",l)})},l.prototype.lendBook=function(l){var n=this;console.log("Lending Book "+l),this.booksService.getBook(l).subscribe(function(o){n.router.navigate([n.currentRouter]),n.book=o,n.book.bookavailable=!1,n.book.bookreserved=!0,n.book.bookborrowed=!0,n.booksService.lendBook(l,n.book).subscribe(function(l){console.log(l),n.borrowed=!0,n.reserved=!0}),n.ngOnInit()},function(l){return n.errMess=l})},l.prototype.releaseBook=function(l){var n=this;console.log("Releasing Book "+l),this.booksService.getBook(l).subscribe(function(o){n.router.navigate([n.currentRouter]),n.book=o,n.book.bookavailable=!0,n.book.bookreserved=!1,n.book.bookborrowed=!1,n.book.bookcurrentuser="",n.booksService.releaseBook(n.book._id,n.book).subscribe(function(o){console.log(o),n.available=!0,n.reserved=!1,n.booksService.deleteQRBookImage(l).subscribe(function(l){return console.log(l)},function(l){return n.errMess=l})})},function(l){return n.errMess=l}),this.ngOnInit()},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l.prototype.addBookModal=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:m})];case 1:return[2,l.sent().present()]}})})},l}(),N=o("ZYCi"),G=e.nb({encapsulation:0,styles:[[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-card[_ngcontent-%COMP%]{margin:5px;padding:10px}.book-image[_ngcontent-%COMP%]{border:1px solid gray;margin:5px}"]],data:{}});function H(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-chip",[["color","warning"]],null,null,null,t.db,t.k)),e.ob(1,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Current status"])),(l()(),e.Fb(-1,0,[" : Reserved "]))],function(l,n){l(n,1,0,"warning")},null)}function j(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-chip",[["color","danger"]],null,null,null,t.db,t.k)),e.ob(1,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Current status"])),(l()(),e.Fb(-1,0,[" : Borrowed "]))],function(l,n){l(n,1,0,"danger")},null)}function U(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-chip",[["color","success"]],null,null,null,t.db,t.k)),e.ob(1,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Current status"])),(l()(),e.Fb(-1,0,[" : Available "]))],function(l,n){l(n,1,0,"success")},null)}function V(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/trash.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.deleteBook(l.parent.context.$implicit._id)&&e),e},t.kb,t.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/trash.svg")},null)}function $(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/scan.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.scanToLendOrRelease(l.parent.context.$implicit._id)&&e),e},t.kb,t.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/scan.svg")},null)}function K(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,35,"ion-item-sliding",[],null,null,null,t.rb,t.z)),e.ob(1,49152,null,0,i.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,21,"ion-item",[],null,null,null,t.sb,t.w)),e.ob(3,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,3,"ion-thumbnail",[],null,null,null,t.Jb,t.Q)),e.ob(5,49152,null,0,i.xb,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,1,"ion-img",[["class","book-image"]],null,null,null,t.lb,t.s)),e.ob(7,49152,null,0,i.C,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(8,0,null,0,15,"ion-label",[],null,null,null,t.tb,t.A)),e.ob(9,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,13,"ion-card",[["class","book-card"]],null,null,null,t.cb,t.f)),e.ob(11,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,0,4,"ion-chip",[["color","primary"]],null,null,null,t.db,t.k)),e.ob(13,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(14,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Fb(15,null,["",""])),(l()(),e.Fb(16,0,[", ",""])),(l()(),e.pb(17,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,0,1,null,H)),e.ob(19,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,j)),e.ob(21,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,U)),e.ob(23,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(24,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,t.qb,t.y)),e.ob(25,49152,null,0,i.K,[e.h,e.k],{side:[0,"side"]},null),(l()(),e.pb(26,0,null,0,3,"ion-item-option",[["color","danger"]],null,null,null,t.pb,t.x)),e.ob(27,49152,null,0,i.J,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.gb(16777216,null,0,1,null,V)),e.ob(29,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(30,0,null,0,5,"ion-item-options",[["side","end"]],null,null,null,t.qb,t.y)),e.ob(31,49152,null,0,i.K,[e.h,e.k],{side:[0,"side"]},null),(l()(),e.pb(32,0,null,0,3,"ion-item-option",[],null,null,null,t.pb,t.x)),e.ob(33,49152,null,0,i.J,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,$)),e.ob(35,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,7,0,n.component.bookIdImageMap.get(n.context.$implicit._id)),l(n,13,0,"primary"),l(n,19,0,n.context.$implicit.isReserved&&!n.context.$implicit.isBorrowed),l(n,21,0,n.context.$implicit.isBorrowed),l(n,23,0,n.context.$implicit.isAvailable),l(n,25,0,"start"),l(n,27,0,"danger"),l(n,29,0,n.context.$implicit.isAvailable),l(n,31,0,"end"),l(n,35,0,(n.context.$implicit.isReserved||n.context.$implicit.isBorrowed)&&!n.context.$implicit.isAvailable)},function(l,n){l(n,15,0,n.context.$implicit.bookname),l(n,16,0,n.context.$implicit.booklanguage)})}function J(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,t.jb,t.q)),e.ob(1,49152,null,0,i.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.Lb,t.S)),e.ob(3,49152,null,0,i.Ab,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,t.Kb,t.R)),e.ob(5,49152,null,0,i.yb,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" Manage my books "])),(l()(),e.pb(7,0,null,null,59,"ion-content",[],null,null,null,t.fb,t.m)),e.ob(8,49152,null,0,i.t,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,6,"ion-card",[],null,null,null,t.cb,t.f)),e.ob(10,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,4,"ion-button",[["expand","full"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.addBookModal()&&e),e},t.W,t.d)),e.ob(12,49152,null,0,i.j,[e.h,e.k],{expand:[0,"expand"]},null),(l()(),e.Fb(-1,0,[" Add New Book "])),(l()(),e.pb(14,0,null,0,1,"ion-icon",[["src","../assets/icon/add-circle.svg"]],null,null,null,t.kb,t.r)),e.ob(15,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(16,0,null,0,8,"ion-col",[],null,null,null,t.eb,t.l)),e.ob(17,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search my books by title or language ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var u=!0,t=l.component;return"ionBlur"===n&&(u=!1!==e.yb(l,20)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,20)._handleInputEvent(o.target.value)&&u),"ngModelChange"===n&&(u=!1!==(t.searchTerm=o)&&u),"ionChange"===n&&(u=!1!==t.setFilteredItems()&&u),u},t.zb,t.G)),e.ob(19,49152,null,0,i.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(20,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(22,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,r.h,null,[r.k]),e.ob(24,16384,null,0,r.i,[[4,r.h]],null,null),(l()(),e.pb(25,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},t.xb,t.D)),e.ob(26,49152,null,0,i.bb,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,t.wb,t.E)),e.ob(28,49152,null,0,i.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(29,0,null,0,27,"ion-card",[],null,null,null,t.cb,t.f)),e.ob(30,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(31,0,null,0,4,"ion-chip",[["color","primary"],["outline",""]],null,null,null,t.db,t.k)),e.ob(32,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.pb(33,0,null,0,2,"ion-label",[],null,null,null,t.tb,t.A)),e.ob(34,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Slide left the book to.. "])),(l()(),e.pb(36,0,null,0,6,"ion-chip",[["color","danger"]],null,null,null,t.db,t.k)),e.ob(37,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(38,0,null,0,1,"ion-icon",[["src","../assets/icon/trash.svg"]],null,null,null,t.kb,t.r)),e.ob(39,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(40,0,null,0,2,"ion-label",[],null,null,null,t.tb,t.A)),e.ob(41,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Remove"])),(l()(),e.pb(43,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,t.db,t.k)),e.ob(44,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(45,0,null,0,1,"ion-icon",[["src","../assets/icon/thumbs-up.svg"]],null,null,null,t.kb,t.r)),e.ob(46,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(47,0,null,0,2,"ion-label",[],null,null,null,t.tb,t.A)),e.ob(48,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Lend"])),(l()(),e.pb(50,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,t.db,t.k)),e.ob(51,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(52,0,null,0,1,"ion-icon",[["src","../assets/icon/make-available.svg"]],null,null,null,t.kb,t.r)),e.ob(53,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(54,0,null,0,2,"ion-label",[],null,null,null,t.tb,t.A)),e.ob(55,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Return"])),(l()(),e.pb(57,0,null,0,5,"ion-card",[],null,null,null,t.cb,t.f)),e.ob(58,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(59,0,null,0,3,"ion-list",[],null,null,null,t.ub,t.B)),e.ob(60,49152,null,0,i.N,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,K)),e.ob(62,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(63,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadMoreBooks(o)&&e),e},t.nb,t.t)),e.ob(64,49152,null,0,i.D,[e.h,e.k],null,null),(l()(),e.pb(65,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","..loading"]],null,null,null,t.mb,t.u)),e.ob(66,49152,null,0,i.E,[e.h,e.k],{loadingText:[0,"loadingText"]},null)],function(l,n){var o=n.component;l(n,12,0,"full"),l(n,15,0,"../assets/icon/add-circle.svg"),l(n,19,0,"Search my books by title or language ..."),l(n,22,0,o.searchTerm),l(n,28,0,"pull for update","...updating"),l(n,32,0,"primary",""),l(n,37,0,"danger"),l(n,39,0,"../assets/icon/trash.svg"),l(n,44,0,"primary"),l(n,46,0,"../assets/icon/thumbs-up.svg"),l(n,51,0,"primary"),l(n,53,0,"../assets/icon/make-available.svg"),l(n,62,0,o.books),l(n,66,0,"..loading")},function(l,n){l(n,18,0,e.yb(n,24).ngClassUntouched,e.yb(n,24).ngClassTouched,e.yb(n,24).ngClassPristine,e.yb(n,24).ngClassDirty,e.yb(n,24).ngClassValid,e.yb(n,24).ngClassInvalid,e.yb(n,24).ngClassPending)})}function Q(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-tab3",[],null,null,null,J,G)),e.ob(1,4308992,null,0,q,[d.a,i.a,i.Eb,T.a,i.Fb,S.a,"baseURL",N.m,N.a,R.a,r.b,P,c.a,D.a,M.a,E.a,N.a,F.a],null,null)],function(l,n){l(n,1,0)},null)}var W=e.lb("app-tab3",q,Q,{},{},[]),Y=function(){return function(){}}();o.d(n,"Tab3PageModuleNgFactory",function(){return Z});var Z=e.mb(u,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[B,w.a,W]],[3,e.j],e.x]),e.wb(4608,a.l,a.k,[e.u,[2,a.r]]),e.wb(4608,r.p,r.p,[]),e.wb(4608,i.b,i.b,[e.z,e.g]),e.wb(4608,i.Eb,i.Eb,[i.b,e.j,e.q,a.c]),e.wb(4608,i.Ib,i.Ib,[i.b,e.j,e.q,a.c]),e.wb(4608,r.b,r.b,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,r.n,r.n,[]),e.wb(1073742336,r.f,r.f,[]),e.wb(1073742336,i.Cb,i.Cb,[]),e.wb(1073742336,r.l,r.l,[]),e.wb(1073742336,Y,Y,[]),e.wb(1073742336,N.o,N.o,[[2,N.u],[2,N.m]]),e.wb(1073742336,u,u,[]),e.wb(1024,N.k,function(){return[[{path:"",component:q}]]},[])])})}}]);