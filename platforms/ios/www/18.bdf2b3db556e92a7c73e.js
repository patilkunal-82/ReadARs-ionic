(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W9vR:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),t=function(){return function(){}}(),u=o("oBZk"),r=o("ZZ/e"),i=o("gIcY"),a=o("Ip0R"),s=o("mrSG"),b=o("azqb"),c=o("d5rD"),d=o("lGQG"),g=o("Pn9U"),h=o("Yttj"),p=o("01F9"),m=o("iWj2"),k=function(){function n(n,l,o,e,t,u,r,i,a,s){this._modalController=n,this._alertController=l,this.booksService=o,this.fb=e,this._camera=t,this._webview=u,this.file=r,this.plt=i,this.filePath=a,this.authService=s,this.dataReader=new FileReader,this.booklanguage=b.c,this.bookgenre=b.b,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.username=void 0,this.formErrors={bookname:"",booklanguage:"",bookgenre:"",bookowneraddress:"",bookownertelnum:"",bookrating:"",bookauthor:""},this.validationMessages={bookname:{required:"Book Name is required.",minlength:"Book Name must be at least 1 character long.",maxlength:"BookName cannot be more than 40 characters long."},booklanguage:{required:"Book Language is required.",minlength:"Book Language must be at least 2 characters long.",maxlength:"Book Language cannot be more than 25 characters long."},bookgenre:{required:"Book Language is required.",minlength:"Book Language must be at least 2 characters long.",maxlength:"Book Language cannot be more than 25 characters long."},bookowneraddress:{required:"Address is required."},bookownertelnum:{required:"Contact number is required.",pattern:"Contact number must contain only numbers."},booauthor:{required:"Author Name is required.",minlength:"Author Name must be at least 1 character long.",maxlength:"Author Name cannot be more than 40 characters long."}}}return n.prototype.ngOnInit=function(){var n=this;this.createForm(),this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(l){console.log(l),n.username=l}),this.booksService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),document.querySelector("ion-button").addEventListener("click",this.onSubmit)},n.prototype.onFileChanged=function(n){console.log(n),this.selectedFile=n.target.files[0],console.log("Event",n),console.log("Event target files",n.target.files),console.log("selected file contnets",this.selectedFile),console.log("selected file name",this.selectedFile.name),this.uploadData=new FormData,this.uploadData.append("imageFile",this.selectedFile,this.selectedFile.name),this.dataReader.readAsArrayBuffer(n.target.files[0])},n.prototype.createForm=function(){var n=this;this.addBookFormGroup=this.fb.group({bookname:["",[i.m.required,i.m.minLength(1),i.m.maxLength(40)]],booklanguage:["",[i.m.required,i.m.minLength(2),i.m.maxLength(25)]],bookgenre:["",[i.m.required,i.m.minLength(2),i.m.maxLength(25)]],bookowneraddress:["",[i.m.required]],bookownertelnum:["",[i.m.required,i.m.pattern]],bookrating:"5",bookauthor:["",[i.m.required,i.m.minLength(1),i.m.maxLength(200)]],bookcoverimage:""}),this.addBookFormGroup.valueChanges.subscribe(function(l){return n.onValueChanged(l)})},n.prototype.onValueChanged=function(n){if(this.addBookFormGroup){var l=this.addBookFormGroup;for(var o in this.formErrors)if(this.formErrors.hasOwnProperty(o)){this.formErrors[o]="";var e=l.get(o);if(e&&e.dirty&&!e.valid){var t=this.validationMessages[o];for(var u in e.errors)e.errors.hasOwnProperty(u)&&(this.formErrors[o]+=t[u]+" ")}}}},n.prototype.onSubmit=function(){return s.b(this,void 0,void 0,function(){var n=this;return s.e(this,function(l){switch(l.label){case 0:return[4,this._alertController.create({header:"Add Book",message:"Select your option..",buttons:[{text:"Add this",handler:function(){n.addbook=n.addBookFormGroup.value,n.addbook.bookcurrentstatus="available",console.log(n.addbook),n.showForm=!1,n.booksService.addBook(n.addbook).subscribe(function(l){console.log("response received-BOOK ADDED"),n.submitted=l,n.booksService.uploadImage(n.submitted._id,n.uploadData).subscribe(function(l){console.log(l),n.receivedImageData=l,n.base64Data=n.receivedImageData.pic,n.convertedImage="data:image/jpeg;base64,"+n.base64Data}),n.addbook=null,setTimeout(function(){n.submitted=null,n.showForm=!0},5e3)},function(n){return console.log(n.status,n.message)}),n.addBookFormGroup.reset({bookname:"",booklanguage:"",bookgenre:"",bookowneraddress:"",bookownertelnum:"",bookrating:"5",bookcoverimage:""}),n.capturedImage=void 0,n.addbookDetailsFormDirective.resetForm(),n.closeModal()}},{text:"Add this & 1 more",handler:function(){n.addbook=n.addBookFormGroup.value,n.addbook.bookcurrentstatus="available",console.log(n.addbook),n.showForm=!1,n.booksService.addBook(n.addbook).subscribe(function(l){console.log("response received"),n.submitted=l,console.log(n.submitted),n.booksService.uploadImage(n.submitted._id,n.uploadData).subscribe(function(l){console.log(l),n.receivedImageData=l,n.base64Data=n.receivedImageData.pic,n.convertedImage="data:image/jpeg;base64,"+n.base64Data}),n.addbook=null,setTimeout(function(){n.submitted=null,n.showForm=!0},5e3)},function(n){return console.log(n.status,n.message)}),n.addBookFormGroup.reset({bookname:"",booklanguage:"",bookgenre:"",bookowneraddress:"",bookownertelnum:"",bookrating:"5",bookcoverimage:""}),n.capturedImage=void 0,n.addbookDetailsFormDirective.resetForm()}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.selectImageSource=function(){return s.b(this,void 0,void 0,function(){var n,l,o=this;return s.e(this,function(e){switch(e.label){case 0:return n={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},l={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){o._camera.getPicture(n).then(function(n){console.log(n);var l=n.substring(n.lastIndexOf("/")+1),e=n.substring(0,n.lastIndexOf("/")+1);console.log("image name",l),console.log("image path",e),console.log("before read as data url"),o.file.readAsDataURL(e,l).then(function(n){return o.capturedImage=n}),console.log("after read as data url"),o.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return o.readFile(n)})}).catch(function(n){console.log("error reading file")})},function(n){console.log(n)})}},{text:"Gallery",handler:function(){o._camera.getPicture(l).then(function(n){var l=n.substring(n.lastIndexOf("/")+1),e=n.substring(0,n.lastIndexOf("/")+1);o.file.readAsDataURL(e,l).then(function(n){return o.capturedImage=n}),o.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return o.readFile(n)})}).catch(function(n){console.log("error reading file")})},function(n){console.log(n)})}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.readFile=function(n){var l=this,o=new FileReader;console.log("file type",n.type),console.log("file type",n.name),o.onloadend=function(){if(l.uploadData=new FormData,o.result){var e=new Blob([o.result],{type:n.type});l.uploadData.append("imageFile",e,n.name)}},o.readAsArrayBuffer(n)},n.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},n}(),f=e.nb({encapsulation:0,styles:[[".book-img[_ngcontent-%COMP%]{width:50px;height:50px;border:1px solid gray;margin:5px auto}.displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px}"]],data:{}});function v(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["src","../assets/icon/camera-outline.svg"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.selectImageSource()&&e),e},u.jb,u.q)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/camera-outline.svg")},null)}function y(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,4,"ion-img",[["formControlName","bookcoverimage"],["height","100"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,u.kb,u.r)),e.ob(1,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[8,null],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(3,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(4,49152,null,0,r.C,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){var o=l.component;n(l,1,0,"bookcoverimage"),n(l,4,0,o.capturedImage)},function(n,l){n(l,0,0,e.yb(l,3).ngClassUntouched,e.yb(l,3).ngClassTouched,e.yb(l,3).ngClassPristine,e.yb(l,3).ngClassDirty,e.yb(l,3).ngClassValid,e.yb(l,3).ngClassInvalid,e.yb(l,3).ngClassPending)})}function C(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Ab,u.I)),e.ob(1,49152,null,0,r.mb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Gb(2,0,[" "," "]))],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,2,0,l.context.$implicit)})}function I(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Ab,u.I)),e.ob(1,49152,null,0,r.mb,[e.h,e.k],{value:[0,"value"]},null),(n()(),e.Gb(2,0,[" "," "]))],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,2,0,l.context.$implicit)})}function B(n){return e.Ib(0,[e.Eb(402653184,1,{addbookDetailsFormDirective:0}),(n()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,u.ib,u.p)),e.ob(2,49152,null,0,r.A,[e.h,e.k],null,null),(n()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,u.Lb,u.S)),e.ob(4,49152,null,0,r.Ab,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,u.Kb,u.R)),e.ob(6,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,["Add New book"])),(n()(),e.pb(8,0,null,null,112,"ion-content",[],null,null,null,u.eb,u.l)),e.ob(9,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(10,0,null,0,110,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var t=!0;return"submit"===l&&(t=!1!==e.yb(n,12).onSubmit(o)&&t),"reset"===l&&(t=!1!==e.yb(n,12).onReset()&&t),t},null,null)),e.ob(11,16384,null,0,i.o,[],null,null),e.ob(12,540672,[[1,4],["fform",4]],0,i.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Db(2048,null,i.a,null,[i.e]),e.ob(14,16384,null,0,i.j,[[4,i.a]],null,null),(n()(),e.pb(15,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(16,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(17,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(18,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Book Name:"])),(n()(),e.pb(20,0,null,0,6,"ion-input",[["formControlName","bookname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,21)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,21)._handleInputEvent(o.target.value)&&t),t},u.mb,u.t)),e.ob(21,16384,null,0,r.Nb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Nb]),e.ob(23,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(25,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(26,49152,null,0,r.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.pb(27,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(28,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(29,0,null,0,5,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(30,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Book Cover "])),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(33,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.Gb(-1,0,[": "])),(n()(),e.pb(35,0,null,0,3,"ion-thumbnail",[],null,null,null,u.Jb,u.Q)),e.ob(36,49152,null,0,r.xb,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,y)),e.ob(38,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(39,0,null,null,13,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(40,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(41,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(42,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Book Genre:"])),(n()(),e.pb(44,0,null,0,8,"ion-select",[["formControlName","bookgenre"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,45)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,45)._handleChangeEvent(o.target.value)&&t),t},u.Bb,u.H)),e.ob(45,16384,null,0,r.Mb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Mb]),e.ob(47,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(49,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(50,49152,null,0,r.lb,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(52,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(53,0,null,null,13,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(54,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(55,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(56,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Book Language:"])),(n()(),e.pb(58,0,null,0,8,"ion-select",[["formControlName","booklanguage"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,59)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,59)._handleChangeEvent(o.target.value)&&t),t},u.Bb,u.H)),e.ob(59,16384,null,0,r.Mb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Mb]),e.ob(61,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(63,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(64,49152,null,0,r.lb,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,I)),e.ob(66,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(67,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(68,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(69,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(70,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Book's Author:"])),(n()(),e.pb(72,0,null,0,6,"ion-input",[["formControlName","bookauthor"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,73)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,73)._handleInputEvent(o.target.value)&&t),t},u.mb,u.t)),e.ob(73,16384,null,0,r.Nb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Nb]),e.ob(75,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(77,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(78,49152,null,0,r.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.pb(79,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(80,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(81,0,null,0,2,"ion-text",[["color","medium"]],null,null,null,u.Hb,u.O)),e.ob(82,49152,null,0,r.vb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Your Rating for the book:"])),(n()(),e.pb(84,0,null,0,6,"ion-range",[["formControlName","bookrating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,85)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,85)._handleChangeEvent(o.target.value)&&t),t},u.wb,u.D)),e.ob(85,16384,null,0,r.Mb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Mb]),e.ob(87,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(89,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(90,49152,null,0,r.ab,[e.h,e.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(n()(),e.pb(91,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(92,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(93,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(94,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Your address:"])),(n()(),e.pb(96,0,null,0,6,"ion-input",[["formControlName","bookowneraddress"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,97)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,97)._handleInputEvent(o.target.value)&&t),t},u.mb,u.t)),e.ob(97,16384,null,0,r.Nb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Nb]),e.ob(99,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(101,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(102,49152,null,0,r.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.pb(103,0,null,null,11,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(104,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(105,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,u.rb,u.y)),e.ob(106,49152,null,0,r.M,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["Your contact number:"])),(n()(),e.pb(108,0,null,0,6,"ion-input",[["formControlName","bookownertelnum"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var t=!0;return"ionBlur"===l&&(t=!1!==e.yb(n,109)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,109)._handleInputEvent(o.target.value)&&t),t},u.mb,u.t)),e.ob(109,16384,null,0,r.Nb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Nb]),e.ob(111,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.q]],{name:[0,"name"]},null),e.Db(2048,null,i.h,null,[i.d]),e.ob(113,16384,null,0,i.i,[[4,i.h]],null,null),e.ob(114,49152,null,0,r.F,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.pb(115,0,null,null,2,"ion-button",[["color","primary"],["expand","full"],["margin-top",""],["shape","round"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.onSubmit()&&e),e},u.V,u.c)),e.ob(116,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"]},null),(n()(),e.Gb(-1,0,["Submit"])),(n()(),e.pb(118,0,null,null,2,"ion-button",[["color","light"],["expand","full"],["margin-top",""],["shape","round"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.closeModal()&&e),e},u.V,u.c)),e.ob(119,49152,null,0,r.j,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),e.Gb(-1,0,["Cancel "]))],function(n,l){var o=l.component;n(l,12,0,o.addBookFormGroup),n(l,18,0,"medium"),n(l,23,0,"bookname"),n(l,26,0,"text"),n(l,30,0,"medium"),n(l,33,0,!o.capturedImage),n(l,38,0,o.capturedImage),n(l,42,0,"medium"),n(l,47,0,"bookgenre"),n(l,52,0,o.bookgenre),n(l,56,0,"medium"),n(l,61,0,"booklanguage"),n(l,66,0,o.booklanguage),n(l,70,0,"medium"),n(l,75,0,"bookauthor"),n(l,78,0,"text"),n(l,82,0,"medium"),n(l,87,0,"bookrating"),n(l,90,0,"rating","1","5","true","","5"),n(l,94,0,"medium"),n(l,99,0,"bookowneraddress"),n(l,102,0,"text"),n(l,106,0,"medium"),n(l,111,0,"bookownertelnum"),n(l,114,0,"text"),n(l,116,0,"primary",o.addBookFormGroup.invalid,"full","round"),n(l,119,0,"light","full","round")},function(n,l){n(l,10,0,e.yb(l,14).ngClassUntouched,e.yb(l,14).ngClassTouched,e.yb(l,14).ngClassPristine,e.yb(l,14).ngClassDirty,e.yb(l,14).ngClassValid,e.yb(l,14).ngClassInvalid,e.yb(l,14).ngClassPending),n(l,20,0,e.yb(l,25).ngClassUntouched,e.yb(l,25).ngClassTouched,e.yb(l,25).ngClassPristine,e.yb(l,25).ngClassDirty,e.yb(l,25).ngClassValid,e.yb(l,25).ngClassInvalid,e.yb(l,25).ngClassPending),n(l,44,0,e.yb(l,49).ngClassUntouched,e.yb(l,49).ngClassTouched,e.yb(l,49).ngClassPristine,e.yb(l,49).ngClassDirty,e.yb(l,49).ngClassValid,e.yb(l,49).ngClassInvalid,e.yb(l,49).ngClassPending),n(l,58,0,e.yb(l,63).ngClassUntouched,e.yb(l,63).ngClassTouched,e.yb(l,63).ngClassPristine,e.yb(l,63).ngClassDirty,e.yb(l,63).ngClassValid,e.yb(l,63).ngClassInvalid,e.yb(l,63).ngClassPending),n(l,72,0,e.yb(l,77).ngClassUntouched,e.yb(l,77).ngClassTouched,e.yb(l,77).ngClassPristine,e.yb(l,77).ngClassDirty,e.yb(l,77).ngClassValid,e.yb(l,77).ngClassInvalid,e.yb(l,77).ngClassPending),n(l,84,0,e.yb(l,89).ngClassUntouched,e.yb(l,89).ngClassTouched,e.yb(l,89).ngClassPristine,e.yb(l,89).ngClassDirty,e.yb(l,89).ngClassValid,e.yb(l,89).ngClassInvalid,e.yb(l,89).ngClassPending),n(l,96,0,e.yb(l,101).ngClassUntouched,e.yb(l,101).ngClassTouched,e.yb(l,101).ngClassPristine,e.yb(l,101).ngClassDirty,e.yb(l,101).ngClassValid,e.yb(l,101).ngClassInvalid,e.yb(l,101).ngClassPending),n(l,108,0,e.yb(l,113).ngClassUntouched,e.yb(l,113).ngClassTouched,e.yb(l,113).ngClassPristine,e.yb(l,113).ngClassDirty,e.yb(l,113).ngClassValid,e.yb(l,113).ngClassInvalid,e.yb(l,113).ngClassPending)})}function S(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-addbook",[],null,null,null,B,f)),e.ob(1,114688,null,0,k,[r.Gb,r.a,c.a,i.b,g.a,h.a,p.a,r.Jb,m.a,d.a],null,null)],function(n,l){n(l,1,0)},null)}var x=e.lb("app-addbook",k,S,{},{},[]),D=o("pMnS"),w=o("zA0m"),M=["None","Tel","Email"],T=o("JhVf"),E=o("fNyx"),F=o("S6gA"),_=o("+6W9"),O=o("9Z1F"),G=o("t/Na"),N=o("mI4i"),q=o("lUK6"),A=function(){function n(n,l){this.http=n,this.processHTTPMsgService=l}return n.prototype.submitFeedback=function(n){var l={headers:new G.h({"Content-Type":"application/json"})};return this.http.post(N.a+"feedback/",n,l).pipe(Object(O.a)(this.processHTTPMsgService.handleError))},n.prototype.getFeedback=function(){return this.http.get(N.a+"feedback").pipe(Object(O.a)(this.processHTTPMsgService.handleError))},n.prototype.getFeaturedFeedback=function(){return this.http.get(N.a+"feedback?rating=5").pipe(Object(O.a)(this.processHTTPMsgService.handleError))},n.ngInjectableDef=e.S({factory:function(){return new n(e.W(G.c),e.W(q.a))},token:n,providedIn:"root"}),n}(),P=o("LwiL"),L=function(n){return n[n.getQrCode=0]="getQrCode",n[n.getScannedCode=1]="getScannedCode",n[n.compareCodes=2]="compareCodes",n}({}),R=function(){function n(n,l,o,e,t,u,r,a,s,c,d,g,h,p,m,k,f,v){this._camera=n,this._alertController=l,this._modalController=o,this.authService=e,this.navCtrl=t,this.readarsService=u,this.baseURL=r,this.router=a,this.route=s,this.searchedMyData=c,this.fb=d,this.feedbackservice=g,this.booksService=h,this.reservedService=p,this.borrowedService=m,this.availableService=k,this.activatedRoute=f,this.barCodeScanner=v,this.username=void 0,this.reservedBooks=[],this.availableBooks=[],this.borrowedBooks=[],this.searchTerm="",this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.name="Angular",this.currentRouter=this.router.url,this.booklanguage=b.c,this.bookactions=b.a,this.contactType=M,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.searchControl=new i.c}return n.prototype.ngOnInit=function(){var n=this;this.setFilteredItems(),this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(l){console.log(l),n.username=l,n.booksService.getBooks().subscribe(function(l){n.allBooks=l,console.log("TAB3 BOOKS",n.allBooks)},function(l){return n.errMess=l}),n.prepareBookIdsImagesMap()})},n.prototype.ionViewWillEnter=function(){var n=this;this.booksService.getBooks().subscribe(function(l){n.allBooks=l,console.log("TAB3 BOOKS",n.allBooks)},function(l){return n.errMess=l})},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.booksService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.booksService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},e=0;e<n.lbookIds.length;e++)o(e)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedMyData.filterItems(this.searchTerm),console.log("Searched my data",this.books)},n.prototype.deleteBook=function(n){var l=this;console.log("Deleting Book "+n),this.booksService.deleteBook(n).subscribe(function(n){return l.removebook=n},function(n){return l.errMess=n}),this.booksService.deleteBookImage(n).subscribe(function(n){return console.log(n)},function(n){return l.errMess=n}),this.delete=!1,this.ngOnInit()},n.prototype.getCodeValue=function(n){return"xyz"===n?L.getQrCode:"abc"===n?L.getScannedCode:void 0},n.prototype.scanToLendOrRelease=function(n){return s.b(this,void 0,void 0,function(){var l=this;return s.e(this,function(o){switch(o.label){case 0:return[4,this._alertController.create({header:"Choose your action",message:"Lend or Make Book Available",buttons:[{text:"Lend",handler:function(){l.scanForLend(n)}},{text:"Make Available",handler:function(){l.scanForRelease(n)}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})},n.prototype.getQRCheckString=function(n){console.log("INSIDE GET CHECK QR STRING");for(var l=0;l<this.books.length;l++)if(this.books[l]._id===n)return this.qrCheckString=this.books[l]._id+this.books[l].bookowner.username+this.books[l].bookcurrentuser,console.log("QR CHECK STRING",this.qrCheckString),this.qrCheckString},n.prototype.scanForLend=function(n){var l=this;console.log("INSIDE LEND"),this.booksService.getBook(n).subscribe(function(o){l.bookcurrentUsername=o.bookcurrentuser,l.qrCheckString=o._id+o.bookowner.username+o.bookcurrentuser,console.log("QR CHECK STRING IS",l.qrCheckString),l.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(e){console.log("CHECK STRING IS ------\x3e",l.qrCheckString),l.scannedData=e,console.log("SCANNED DATA IS ------\x3e ",l.scannedData.text),l.qrCheckString===l.scannedData.text?(console.log("MATCH SUCCESS"),console.log("LENDING BOOK "+n),l.router.navigate([l.currentRouter]),l.book=o,l.book.bookavailable=!1,l.book.bookreserved=!0,l.book.bookborrowed=!0,l.book.bookcurrentuser=l.bookcurrentUsername,l.book.bookcurrentstatus="borrowed",l.booksService.lendBook(n,l.book).subscribe(function(n){console.log(n),l.borrowed=!0,l.reserved=!0,l.qrCheckString=""}),l.ngOnInit()):console.log("QR CODES DON'T MATCH")}).catch(function(n){console.log("Error",n)})},function(n){return l.errMess=n})},n.prototype.scanForRelease=function(n){var l=this;console.log("INSIDE MAKE AVAILABLE"),this.booksService.getBook(n).subscribe(function(o){l.bookcurrentUsername=o.bookcurrentuser,l.qrCheckString=o._id+o.bookowner.username+o.bookcurrentuser,console.log("QR CHECK STRING IS",l.qrCheckString),l.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(e){console.log("CHECK STRING IS ------\x3e",l.qrCheckString),l.scannedData=e,console.log("SCANNED DATA IS ------\x3e ",l.scannedData.text),l.qrCheckString===l.scannedData.text?(console.log("MATCH SUCCESS"),console.log("RELEASING BOOK "+n),l.router.navigate([l.currentRouter]),l.booksService.deleteQRBookImage(n,l.bookcurrentUsername).subscribe(function(n){console.log(n),console.log("QR IMAGE DELETED"),l.book=o,l.book.bookavailable=!0,l.book.bookreserved=!1,l.book.bookborrowed=!1,l.book.bookcurrentuser="",l.book.bookcurrentstatus="available",l.booksService.releaseBook(l.book._id,l.book).subscribe(function(n){console.log(n),l.available=!0,l.reserved=!1,l.qrCheckString=""})},function(n){return l.errMess=n}),l.ngOnInit()):console.log("QR CODES DON'T MATCH")}).catch(function(n){console.log("Error",n)})},function(n){return l.errMess=n})},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n.prototype.addBookModal=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(n){switch(n.label){case 0:return[4,this._modalController.create({component:k})];case 1:return[2,n.sent().present()]}})})},n}(),U=o("ZYCi"),j=e.nb({encapsulation:0,styles:[[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-card[_ngcontent-%COMP%]{margin:5px;padding:10px}.book-image[_ngcontent-%COMP%]{border:1px solid gray;margin:5px}.displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px;background-color:#f5f5f5}.displayinnercard[_ngcontent-%COMP%]{margin-top:auto;margin-left:30px;padding:5px;background-color:#f8f8ff}.display_heading[_ngcontent-%COMP%]{margin-left:0;padding:0}"]],data:{}});function H(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"ion-note",[["style","color: green"]],null,null,null,u.vb,u.C)),e.ob(1,49152,null,0,r.W,[e.h,e.k],null,null),(n()(),e.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function V(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"ion-note",[["style","color: red"]],null,null,null,u.vb,u.C)),e.ob(1,49152,null,0,r.W,[e.h,e.k],null,null),(n()(),e.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function $(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"ion-note",[["style","color: orangered"]],null,null,null,u.vb,u.C)),e.ob(1,49152,null,0,r.W,[e.h,e.k],null,null),(n()(),e.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function K(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/trash.svg"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.deleteBook(n.parent.context.$implicit._id)&&e),e},u.jb,u.q)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/trash.svg")},null)}function Q(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/scan.svg"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.scanToLendOrRelease(n.parent.context.$implicit._id)&&e),e},u.jb,u.q)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/scan.svg")},null)}function W(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,34,"ion-item-sliding",[],null,null,null,u.pb,u.x)),e.ob(1,49152,null,0,r.L,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,20,"ion-item",[],null,null,null,u.qb,u.u)),e.ob(3,49152,null,0,r.G,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,5,"ion-card",[],null,null,null,u.bb,u.e)),e.ob(5,49152,null,0,r.l,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,3,"ion-thumbnail",[],null,null,null,u.Jb,u.Q)),e.ob(7,49152,null,0,r.xb,[e.h,e.k],null,null),(n()(),e.pb(8,0,null,0,1,"ion-img",[],null,null,null,u.kb,u.r)),e.ob(9,49152,null,0,r.C,[e.h,e.k],{src:[0,"src"]},null),(n()(),e.pb(10,0,null,0,12,"ion-label",[["class","ion-text-wrap"]],null,null,null,u.rb,u.y)),e.ob(11,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.pb(12,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Gb(13,null,["",""])),(n()(),e.pb(14,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(15,null,[" in ",". By - ","."])),(n()(),e.pb(16,0,null,0,0,"p",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,0,1,null,H)),e.ob(18,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,V)),e.ob(20,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,$)),e.ob(22,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(23,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,u.ob,u.w)),e.ob(24,49152,null,0,r.K,[e.h,e.k],{side:[0,"side"]},null),(n()(),e.pb(25,0,null,0,3,"ion-item-option",[["color","danger"]],null,null,null,u.nb,u.v)),e.ob(26,49152,null,0,r.J,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.gb(16777216,null,0,1,null,K)),e.ob(28,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(29,0,null,0,5,"ion-item-options",[["side","end"]],null,null,null,u.ob,u.w)),e.ob(30,49152,null,0,r.K,[e.h,e.k],{side:[0,"side"]},null),(n()(),e.pb(31,0,null,0,3,"ion-item-option",[],null,null,null,u.nb,u.v)),e.ob(32,49152,null,0,r.J,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,Q)),e.ob(34,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,9,0,l.component.bookIdImageMap.get(l.context.$implicit._id)),n(l,18,0,"available"==l.context.$implicit.bookcurrentstatus),n(l,20,0,"borrowed"==l.context.$implicit.bookcurrentstatus),n(l,22,0,"reserved"==l.context.$implicit.bookcurrentstatus),n(l,24,0,"start"),n(l,26,0,"danger"),n(l,28,0,l.context.$implicit.isAvailable),n(l,30,0,"end"),n(l,34,0,(l.context.$implicit.isReserved||l.context.$implicit.isBorrowed)&&!l.context.$implicit.isAvailable)},function(n,l){n(l,13,0,l.context.$implicit.bookname),n(l,15,0,l.context.$implicit.booklanguage,l.context.$implicit.bookauthor)})}function J(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,u.ib,u.p)),e.ob(1,49152,null,0,r.A,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,u.Lb,u.S)),e.ob(3,49152,null,0,r.Ab,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,u.Kb,u.R)),e.ob(5,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,[" Manage My Books "])),(n()(),e.pb(7,0,null,null,23,"ion-content",[],null,null,null,u.eb,u.l)),e.ob(8,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,4,"ion-button",[["expand","block"],["margin-top",""],["shape","round"]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.addBookModal()&&e),e},u.V,u.c)),e.ob(10,49152,null,0,r.j,[e.h,e.k],{expand:[0,"expand"],shape:[1,"shape"]},null),(n()(),e.Gb(-1,0,[" Add New Book "])),(n()(),e.pb(12,0,null,0,1,"ion-icon",[["src","../assets/icon/add-circle.svg"]],null,null,null,u.jb,u.q)),e.ob(13,49152,null,0,r.B,[e.h,e.k],{src:[0,"src"]},null),(n()(),e.pb(14,0,null,0,8,"ion-col",[],null,null,null,u.db,u.k)),e.ob(15,49152,null,0,r.s,[e.h,e.k],null,null),(n()(),e.pb(16,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search my books by status, title or language ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==e.yb(n,18)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.yb(n,18)._handleInputEvent(o.target.value)&&t),"ngModelChange"===l&&(t=!1!==(u.searchTerm=o)&&t),"ionChange"===l&&(t=!1!==u.setFilteredItems()&&t),t},u.zb,u.G)),e.ob(17,49152,null,0,r.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(18,16384,null,0,r.Nb,[e.k],null,null),e.Db(1024,null,i.g,function(n){return[n]},[r.Nb]),e.ob(20,671744,null,0,i.k,[[8,null],[8,null],[8,null],[6,i.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,i.h,null,[i.k]),e.ob(22,16384,null,0,i.i,[[4,i.h]],null,null),(n()(),e.pb(23,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.refreshBookList(o)&&e),e},u.yb,u.E)),e.ob(24,49152,null,0,r.bb,[e.h,e.k],null,null),(n()(),e.pb(25,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,u.xb,u.F)),e.ob(26,49152,null,0,r.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.pb(27,0,null,0,3,"ion-list",[],null,null,null,u.tb,u.z)),e.ob(28,49152,null,0,r.N,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,W)),e.ob(30,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var o=l.component;n(l,10,0,"block","round"),n(l,13,0,"../assets/icon/add-circle.svg"),n(l,17,0,"Search my books by status, title or language ..."),n(l,20,0,o.searchTerm),n(l,26,0,"pull for update","...updating"),n(l,30,0,o.books)},function(n,l){n(l,16,0,e.yb(l,22).ngClassUntouched,e.yb(l,22).ngClassTouched,e.yb(l,22).ngClassPristine,e.yb(l,22).ngClassDirty,e.yb(l,22).ngClassValid,e.yb(l,22).ngClassInvalid,e.yb(l,22).ngClassPending)})}function z(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-tab3",[],null,null,null,J,j)),e.ob(1,4308992,null,0,R,[g.a,r.a,r.Gb,d.a,r.Hb,T.a,"baseURL",U.m,U.a,P.a,i.b,A,c.a,F.a,_.a,E.a,U.a,w.a],null,null)],function(n,l){n(l,1,0)},null)}var Y=e.lb("app-tab3",R,z,{},{},[]),Z=function(){return function(){}}();o.d(l,"Tab3PageModuleNgFactory",function(){return X});var X=e.mb(t,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[x,D.a,Y]],[3,e.j],e.x]),e.wb(4608,a.l,a.k,[e.u,[2,a.r]]),e.wb(4608,i.p,i.p,[]),e.wb(4608,r.b,r.b,[e.z,e.g]),e.wb(4608,r.Gb,r.Gb,[r.b,e.j,e.q,a.c]),e.wb(4608,r.Kb,r.Kb,[r.b,e.j,e.q,a.c]),e.wb(4608,i.b,i.b,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,i.n,i.n,[]),e.wb(1073742336,i.f,i.f,[]),e.wb(1073742336,r.Cb,r.Cb,[]),e.wb(1073742336,i.l,i.l,[]),e.wb(1073742336,Z,Z,[]),e.wb(1073742336,U.o,U.o,[[2,U.u],[2,U.m]]),e.wb(1073742336,t,t,[]),e.wb(1024,U.k,function(){return[[{path:"",component:R}]]},[])])})}}]);