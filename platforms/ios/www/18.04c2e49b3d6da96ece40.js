(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W9vR:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),u=function(){return function(){}}(),t=o("oBZk"),i=o("ZZ/e"),r=o("gIcY"),a=o("Ip0R"),s=o("mrSG"),b=["English","Hindi","Marathi","German","Tamil","Spanish","French","Telugu","Latin","Malyalam"],c=o("d5rD"),d=o("Pn9U"),g=function(){function l(l,n,o,e,u){this._modalController=l,this._alertController=n,this.booksService=o,this.fb=e,this._camera=u,this.dataReader=new FileReader,this.booklanguage=b,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.formErrors={bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"",bookauthor:""},this.validationMessages={bookname:{required:"Book Name is required.",minlength:"Book Name must be at least 1 character long.",maxlength:"BookName cannot be more than 40 characters long."},booklanguage:{required:"Book Language is required.",minlength:"Book Language must be at least 2 characters long.",maxlength:"Book Language cannot be more than 25 characters long."},bookowneraddress:{required:"Address is required."},bookownertelnum:{required:"Contact number is required.",pattern:"Contact number must contain only numbers."},booauthor:{required:"Author Name is required.",minlength:"Author Name must be at least 1 character long.",maxlength:"Author Name cannot be more than 40 characters long."}}}return l.prototype.ngOnInit=function(){var l=this;this.createForm(),this.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),document.querySelector("ion-button").addEventListener("click",this.onSubmit)},l.prototype.onFileChanged=function(l){var n=this;console.log(l),this.selectedFile=l.target.files[0];var o=new FileReader;o.readAsDataURL(l.target.files[0]),o.onload=function(l){n.imgURL=o.result,n.bookcoverimage=o.result},this.uploadData=new FormData,this.uploadData.append("imageFile",this.selectedFile,this.selectedFile.name),this.dataReader.readAsArrayBuffer(l.target.files[0])},l.prototype.createForm=function(){var l=this;this.addBookFormGroup=this.fb.group({bookname:["",[r.m.required,r.m.minLength(1),r.m.maxLength(40)]],booklanguage:["",[r.m.required,r.m.minLength(2),r.m.maxLength(25)]],bookowneraddress:["",[r.m.required]],bookdescription:["",[r.m.required,r.m.minLength(2),r.m.maxLength(200)]],bookownertelnum:["",[r.m.required,r.m.pattern]],bookrating:"5",bookauthor:["",[r.m.required,r.m.minLength(1),r.m.maxLength(200)]],bookcoverimage:""}),this.addBookFormGroup.valueChanges.subscribe(function(n){return l.onValueChanged(n)})},l.prototype.onValueChanged=function(l){if(this.addBookFormGroup){var n=this.addBookFormGroup;for(var o in this.formErrors)if(this.formErrors.hasOwnProperty(o)){this.formErrors[o]="";var e=n.get(o);if(e&&e.dirty&&!e.valid){var u=this.validationMessages[o];for(var t in e.errors)e.errors.hasOwnProperty(t)&&(this.formErrors[o]+=u[t]+" ")}}}},l.prototype.onSubmit=function(){return s.b(this,void 0,void 0,function(){var l=this;return s.e(this,function(n){switch(n.label){case 0:return[4,this._alertController.create({header:"Add Book",message:"Select your option..",buttons:[{text:"Add this",handler:function(){l.addbook=l.addBookFormGroup.value,console.log(l.addbook),l.showForm=!1,l.booksService.addBook(l.addbook).subscribe(function(n){console.log("response received"),l.submitted=n,l.booksService.uploadImage(l.submitted._id,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data}),l.addbook=null,setTimeout(function(){l.submitted=null,l.showForm=!0},5e3)},function(l){return console.log(l.status,l.message)}),l.addBookFormGroup.reset({bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"5"}),l.addbookDetailsFormDirective.resetForm(),l.closeModal()}},{text:"Add this & 1 more",handler:function(){l.addbook=l.addBookFormGroup.value,console.log(l.addbook),l.showForm=!1,l.booksService.addBook(l.addbook).subscribe(function(n){console.log("response received"),l.submitted=n,console.log(l.submitted),l.booksService.uploadImage(l.submitted._id,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data}),l.addbook=null,setTimeout(function(){l.submitted=null,l.showForm=!0},5e3)},function(l){return console.log(l.status,l.message)}),l.addBookFormGroup.reset({bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"5"}),l.addbookDetailsFormDirective.resetForm()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.selectImageSource=function(){return s.b(this,void 0,void 0,function(){var l,n,o=this;return s.e(this,function(e){switch(e.label){case 0:return l={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},n={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){o._camera.getPicture(l).then(function(l){o.myProfileImage="data:image/jpeg;base64,"+l})}},{text:"Gallery",handler:function(){o._camera.getPicture(n).then(function(l){o.myProfileImage="data:image/jpeg;base64,"+l,o.bookcoverimage=o.myProfileImage})}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),h=e.nb({encapsulation:0,styles:[[".book-img[_ngcontent-%COMP%]{width:50px;height:50px;border:1px solid gray;margin:10px auto}"]],data:{}});function p(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-img",[["height","100"]],null,null,null,t.hb,t.r)),e.ob(1,49152,null,0,i.C,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,n.component.imgURL)},null)}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,t.vb,t.G)),e.ob(1,49152,null,0,i.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Fb(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function k(l){return e.Hb(0,[e.Db(402653184,1,{addbookDetailsFormDirective:0}),(l()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,t.fb,t.p)),e.ob(2,49152,null,0,i.A,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,t.Fb,t.P)),e.ob(4,49152,null,0,i.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,t.Eb,t.O)),e.ob(6,49152,null,0,i.yb,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Add new book.."])),(l()(),e.pb(8,0,null,null,115,"ion-content",[],null,null,null,t.bb,t.l)),e.ob(9,49152,null,0,i.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,113,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var u=!0;return"submit"===n&&(u=!1!==e.yb(l,12).onSubmit(o)&&u),"reset"===n&&(u=!1!==e.yb(l,12).onReset()&&u),u},null,null)),e.ob(11,16384,null,0,r.o,[],null,null),e.ob(12,540672,[[1,4],["fform",4]],0,r.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,r.a,null,[r.e]),e.ob(14,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),e.pb(15,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(16,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(17,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(18,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Name:"])),(l()(),e.pb(20,0,null,0,6,"ion-input",[["formControlName","bookname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,21)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,21)._handleInputEvent(o.target.value)&&u),u},t.jb,t.t)),e.ob(21,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(23,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(25,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(26,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(27,0,null,null,10,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(28,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(29,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(30,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Cover Image:"])),(l()(),e.pb(32,0,null,0,3,"ion-input",[["formControleName","bookcoverimage"],["required",""],["type","file"]],null,[[null,"change"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0,t=l.component;return"ionBlur"===n&&(u=!1!==e.yb(l,35)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,35)._handleInputEvent(o.target.value)&&u),"change"===n&&(u=!1!==t.onFileChanged(o)&&u),u},t.jb,t.t)),e.Cb(5120,null,r.g,function(l){return[l]},[i.Lb]),e.ob(34,49152,null,0,i.F,[e.h,e.k],{required:[0,"required"],type:[1,"type"]},null),e.ob(35,16384,null,0,i.Lb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,p)),e.ob(37,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(38,0,null,null,13,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(39,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(40,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(41,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Language:"])),(l()(),e.pb(43,0,null,0,8,"ion-select",[["formControlName","booklanguage"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,44)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,44)._handleChangeEvent(o.target.value)&&u),u},t.wb,t.F)),e.ob(44,16384,null,0,i.Kb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Kb]),e.ob(46,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(48,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(49,49152,null,0,i.lb,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,m)),e.ob(51,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(52,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(53,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(54,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(55,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book's Author:"])),(l()(),e.pb(57,0,null,0,6,"ion-input",[["formControlName","bookauthor"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,58)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,58)._handleInputEvent(o.target.value)&&u),u},t.jb,t.t)),e.ob(58,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(60,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(62,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(63,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(64,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(65,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(66,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(67,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Book Description:"])),(l()(),e.pb(69,0,null,0,6,"ion-input",[["formControlName","bookdescription"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,70)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,70)._handleInputEvent(o.target.value)&&u),u},t.jb,t.t)),e.ob(70,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(72,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(74,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(75,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(76,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(77,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(78,0,null,0,2,"ion-text",[["color","medium"]],null,null,null,t.Cb,t.M)),e.ob(79,49152,null,0,i.vb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your Rating for the book:"])),(l()(),e.pb(81,0,null,0,6,"ion-range",[["formControlName","bookrating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,82)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,82)._handleChangeEvent(o.target.value)&&u),u},t.qb,t.A)),e.ob(82,16384,null,0,i.Kb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Kb]),e.ob(84,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(86,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(87,49152,null,0,i.ab,[e.h,e.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),e.pb(88,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(89,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(90,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(91,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your address:"])),(l()(),e.pb(93,0,null,0,6,"ion-input",[["formControlName","bookowneraddress"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,94)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,94)._handleInputEvent(o.target.value)&&u),u},t.jb,t.t)),e.ob(94,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(96,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(98,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(99,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(100,0,null,null,11,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(101,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(102,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,t.ob,t.y)),e.ob(103,49152,null,0,i.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,["Your contact number:"])),(l()(),e.pb(105,0,null,0,6,"ion-input",[["formControlName","bookownertelnum"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,106)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,106)._handleInputEvent(o.target.value)&&u),u},t.jb,t.t)),e.ob(106,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(108,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),e.Cb(2048,null,r.h,null,[r.d]),e.ob(110,16384,null,0,r.i,[[4,r.h]],null,null),e.ob(111,49152,null,0,i.F,[e.h,e.k],{type:[0,"type"]},null),(l()(),e.pb(112,0,null,null,11,"ion-row",[],null,null,null,t.tb,t.D)),e.ob(113,49152,null,0,i.hb,[e.h,e.k],null,null),(l()(),e.pb(114,0,null,0,4,"ion-col",[],null,null,null,t.ab,t.k)),e.ob(115,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(116,0,null,0,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e},t.T,t.d)),e.ob(117,49152,null,0,i.j,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),e.Fb(-1,0,["Submit"])),(l()(),e.pb(119,0,null,0,4,"ion-col",[],null,null,null,t.ab,t.k)),e.ob(120,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(121,0,null,0,2,"ion-button",[["color","danger"],["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},t.T,t.d)),e.ob(122,49152,null,0,i.j,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Fb(-1,0,["Cancel"]))],function(l,n){var o=n.component;l(n,12,0,o.addBookFormGroup),l(n,18,0,"medium"),l(n,23,0,"bookname"),l(n,26,0,"text"),l(n,30,0,"medium"),l(n,34,0,"","file"),l(n,37,0,o.imgURL),l(n,41,0,"medium"),l(n,46,0,"booklanguage"),l(n,51,0,o.booklanguage),l(n,55,0,"medium"),l(n,60,0,"bookauthor"),l(n,63,0,"text"),l(n,67,0,"medium"),l(n,72,0,"bookdescription"),l(n,75,0,"text"),l(n,79,0,"medium"),l(n,84,0,"bookrating"),l(n,87,0,"rating","1","5","true","","5"),l(n,91,0,"medium"),l(n,96,0,"bookowneraddress"),l(n,99,0,"text"),l(n,103,0,"medium"),l(n,108,0,"bookownertelnum"),l(n,111,0,"text"),l(n,117,0,o.addBookFormGroup.invalid,"full"),l(n,122,0,"danger","full")},function(l,n){l(n,10,0,e.yb(n,14).ngClassUntouched,e.yb(n,14).ngClassTouched,e.yb(n,14).ngClassPristine,e.yb(n,14).ngClassDirty,e.yb(n,14).ngClassValid,e.yb(n,14).ngClassInvalid,e.yb(n,14).ngClassPending),l(n,20,0,e.yb(n,25).ngClassUntouched,e.yb(n,25).ngClassTouched,e.yb(n,25).ngClassPristine,e.yb(n,25).ngClassDirty,e.yb(n,25).ngClassValid,e.yb(n,25).ngClassInvalid,e.yb(n,25).ngClassPending),l(n,43,0,e.yb(n,48).ngClassUntouched,e.yb(n,48).ngClassTouched,e.yb(n,48).ngClassPristine,e.yb(n,48).ngClassDirty,e.yb(n,48).ngClassValid,e.yb(n,48).ngClassInvalid,e.yb(n,48).ngClassPending),l(n,57,0,e.yb(n,62).ngClassUntouched,e.yb(n,62).ngClassTouched,e.yb(n,62).ngClassPristine,e.yb(n,62).ngClassDirty,e.yb(n,62).ngClassValid,e.yb(n,62).ngClassInvalid,e.yb(n,62).ngClassPending),l(n,69,0,e.yb(n,74).ngClassUntouched,e.yb(n,74).ngClassTouched,e.yb(n,74).ngClassPristine,e.yb(n,74).ngClassDirty,e.yb(n,74).ngClassValid,e.yb(n,74).ngClassInvalid,e.yb(n,74).ngClassPending),l(n,81,0,e.yb(n,86).ngClassUntouched,e.yb(n,86).ngClassTouched,e.yb(n,86).ngClassPristine,e.yb(n,86).ngClassDirty,e.yb(n,86).ngClassValid,e.yb(n,86).ngClassInvalid,e.yb(n,86).ngClassPending),l(n,93,0,e.yb(n,98).ngClassUntouched,e.yb(n,98).ngClassTouched,e.yb(n,98).ngClassPristine,e.yb(n,98).ngClassDirty,e.yb(n,98).ngClassValid,e.yb(n,98).ngClassInvalid,e.yb(n,98).ngClassPending),l(n,105,0,e.yb(n,110).ngClassUntouched,e.yb(n,110).ngClassTouched,e.yb(n,110).ngClassPristine,e.yb(n,110).ngClassDirty,e.yb(n,110).ngClassValid,e.yb(n,110).ngClassInvalid,e.yb(n,110).ngClassPending)})}function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-addbook",[],null,null,null,k,h)),e.ob(1,114688,null,0,g,[i.Eb,i.a,c.a,r.b,d.a],null,null)],function(l,n){l(n,1,0)},null)}var y=e.lb("app-addbook",g,f,{},{},[]),v=o("pMnS"),C=["None","Tel","Email"],B=o("lGQG"),F=o("JhVf"),w=o("fNyx"),x=o("S6gA"),T=o("F/XL"),I=o("9Z1F"),M=o("mI4i"),_=o("lUK6"),L=o("t/Na"),S=function(){function l(l,n,o){this.http=l,this.auth=n,this.processHTTPMsgService=o}return l.prototype.isBorrowed=function(l){var n=this;return this.auth.isLoggedIn()?this.http.get(M.a+"borrowed/"+l).pipe(Object(I.a)(function(l){return n.processHTTPMsgService.handleError(l)})):Object(T.a)({exists:!1,book:null})},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(L.c),e.W(B.a),e.W(_.a))},token:l,providedIn:"root"}),l}(),P=function(){function l(l,n){this.http=l,this.processHTTPMsgService=n}return l.prototype.submitFeedback=function(l){var n={headers:new L.h({"Content-Type":"application/json"})};return this.http.post(M.a+"feedback/",l,n).pipe(Object(I.a)(this.processHTTPMsgService.handleError))},l.prototype.getFeedback=function(){return this.http.get(M.a+"feedback").pipe(Object(I.a)(this.processHTTPMsgService.handleError))},l.prototype.getFeaturedFeedback=function(){return this.http.get(M.a+"feedback?rating=5").pipe(Object(I.a)(this.processHTTPMsgService.handleError))},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(L.c),e.W(_.a))},token:l,providedIn:"root"}),l}(),E=o("LwiL"),D=function(){function l(l,n,o,e,u,t,i,a,s,c,d,g,h,p,m,k,f){this._camera=l,this._alertController=n,this._modalController=o,this.authService=e,this.navCtrl=u,this.readarsService=t,this.baseURL=i,this.router=a,this.route=s,this.searchedMyData=c,this.fb=d,this.feedbackservice=g,this.booksService=h,this.reservedService=p,this.borrowedService=m,this.availableService=k,this.activatedRoute=f,this.searchTerm="",this.name="Angular",this.currentRouter=this.router.url,this.booklanguage=b,this.contactType=C,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.searchControl=new r.c}return l.prototype.ngOnInit=function(){var l=this;this.setFilteredItems(),this.authService.loadUserCredentials(),this.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n})},l.prototype.ngAfterViewInit=function(){},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.booksService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedMyData.filterItems(this.searchTerm),console.log("Searched my data",this.books)},l.prototype.deleteBook=function(l){var n=this;console.log("Deleting Book "+l),this.booksService.deleteBook(l).subscribe(function(l){return n.removebook=l},function(l){return n.errMess=l}),this.booksService.deleteBookImage(l).subscribe(function(l){return console.log(l)},function(l){return n.errMess=l}),this.delete=!1,this.ngOnInit()},l.prototype.lendBook=function(l){var n=this;console.log("Lending Book "+l),this.booksService.getBook(l).subscribe(function(o){n.router.navigate([n.currentRouter]),n.book=o,n.book.bookavailable=!1,n.book.bookreserved=!0,n.book.bookborrowed=!0,n.booksService.lendBook(l,n.book).subscribe(function(l){console.log(l),n.borrowed=!0,n.reserved=!0}),n.ngOnInit()},function(l){return n.errMess=l})},l.prototype.releaseBook=function(l){var n=this;console.log("Releasing Book "+l),this.booksService.getBook(l).subscribe(function(l){n.router.navigate([n.currentRouter]),n.book=l,n.book.bookavailable=!0,n.book.bookreserved=!1,n.book.bookborrowed=!1,n.booksService.releaseBook(n.book._id,n.book).subscribe(function(l){console.log(l),n.available=!0,n.reserved=!1})},function(l){return n.errMess=l}),this.ngOnInit()},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l.prototype.addBookModal=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:g})];case 1:return[2,l.sent().present()]}})})},l}(),q=o("ZYCi"),O=e.nb({encapsulation:0,styles:[[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}"]],data:{}});function j(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/trash.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.deleteBook(l.parent.context.$implicit._id)&&e),e},t.gb,t.q)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/trash.svg")},null)}function A(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/thumbs-up.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.lendBook(l.parent.context.$implicit._id)&&e),e},t.gb,t.q)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/thumbs-up.svg")},null)}function R(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/make-available.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.releaseBook(l.parent.context.$implicit._id)&&e),e},t.gb,t.q)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){l(n,1,0,"../assets/icon/make-available.svg")},null)}function G(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,27,"ion-item-sliding",[],null,null,null,t.mb,t.x)),e.ob(1,49152,null,0,i.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,9,"ion-item",[],null,null,null,t.nb,t.u)),e.ob(3,49152,null,0,i.G,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,7,"ion-label",[],null,null,null,t.ob,t.y)),e.ob(5,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Fb(7,null,["",""])),(l()(),e.pb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(9,null,["",""])),(l()(),e.pb(10,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(11,null,["",""])),(l()(),e.pb(12,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,t.lb,t.w)),e.ob(13,49152,null,0,i.K,[e.h,e.k],{side:[0,"side"]},null),(l()(),e.pb(14,0,null,0,3,"ion-item-option",[],null,null,null,t.kb,t.v)),e.ob(15,49152,null,0,i.J,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,j)),e.ob(17,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(18,0,null,0,9,"ion-item-options",[["side","end"]],null,null,null,t.lb,t.w)),e.ob(19,49152,null,0,i.K,[e.h,e.k],{side:[0,"side"]},null),(l()(),e.pb(20,0,null,0,3,"ion-item-option",[],null,null,null,t.kb,t.v)),e.ob(21,49152,null,0,i.J,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,A)),e.ob(23,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(24,0,null,0,3,"ion-item-option",[],null,null,null,t.kb,t.v)),e.ob(25,49152,null,0,i.J,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,R)),e.ob(27,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,13,0,"start"),l(n,17,0,n.context.$implicit.isAvailable),l(n,19,0,"end"),l(n,23,0,n.context.$implicit.isReserved&&!n.context.$implicit.isBorrowed&&!n.context.$implicit.isAvailable),l(n,27,0,n.context.$implicit.isReserved||n.context.$implicit.isBorrowed&&!n.context.$implicit.isAvailable)},function(l,n){l(n,7,0,n.context.$implicit.bookname),l(n,9,0,n.context.$implicit.bookdescription),l(n,11,0,n.context.$implicit.booklanguage)})}function U(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,t.fb,t.p)),e.ob(1,49152,null,0,i.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.Fb,t.P)),e.ob(3,49152,null,0,i.Ab,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,t.Eb,t.O)),e.ob(5,49152,null,0,i.yb,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" Manage my books "])),(l()(),e.pb(7,0,null,null,57,"ion-content",[],null,null,null,t.bb,t.l)),e.ob(8,49152,null,0,i.t,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,6,"ion-card",[],null,null,null,t.Y,t.f)),e.ob(10,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,4,"ion-button",[["expand","full"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.addBookModal()&&e),e},t.T,t.d)),e.ob(12,49152,null,0,i.j,[e.h,e.k],{expand:[0,"expand"]},null),(l()(),e.Fb(-1,0,[" Add New Book "])),(l()(),e.pb(14,0,null,0,1,"ion-icon",[["src","../assets/icon/add-circle.svg"]],null,null,null,t.gb,t.q)),e.ob(15,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(16,0,null,0,8,"ion-col",[],null,null,null,t.ab,t.k)),e.ob(17,49152,null,0,i.s,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search my books by title or language ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var u=!0,t=l.component;return"ionBlur"===n&&(u=!1!==e.yb(l,20)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,20)._handleInputEvent(o.target.value)&&u),"ngModelChange"===n&&(u=!1!==(t.searchTerm=o)&&u),"ionChange"===n&&(u=!1!==t.setFilteredItems()&&u),u},t.ub,t.E)),e.ob(19,49152,null,0,i.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(20,16384,null,0,i.Lb,[e.k],null,null),e.Cb(1024,null,r.g,function(l){return[l]},[i.Lb]),e.ob(22,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,r.h,null,[r.k]),e.ob(24,16384,null,0,r.i,[[4,r.h]],null,null),(l()(),e.pb(25,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},t.sb,t.B)),e.ob(26,49152,null,0,i.bb,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,t.rb,t.C)),e.ob(28,49152,null,0,i.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(29,0,null,0,27,"ion-card",[],null,null,null,t.Y,t.f)),e.ob(30,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(31,0,null,0,4,"ion-chip",[["color","primary"],["outline",""]],null,null,null,t.Z,t.j)),e.ob(32,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.pb(33,0,null,0,2,"ion-label",[],null,null,null,t.ob,t.y)),e.ob(34,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Slide to.. "])),(l()(),e.pb(36,0,null,0,6,"ion-chip",[["color","danger"]],null,null,null,t.Z,t.j)),e.ob(37,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(38,0,null,0,1,"ion-icon",[["src","../assets/icon/trash.svg"]],null,null,null,t.gb,t.q)),e.ob(39,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(40,0,null,0,2,"ion-label",[],null,null,null,t.ob,t.y)),e.ob(41,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Remove"])),(l()(),e.pb(43,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,t.Z,t.j)),e.ob(44,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(45,0,null,0,1,"ion-icon",[["src","../assets/icon/thumbs-up.svg"]],null,null,null,t.gb,t.q)),e.ob(46,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(47,0,null,0,2,"ion-label",[],null,null,null,t.ob,t.y)),e.ob(48,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Lend"])),(l()(),e.pb(50,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,t.Z,t.j)),e.ob(51,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(52,0,null,0,1,"ion-icon",[["src","../assets/icon/make-available.svg"]],null,null,null,t.gb,t.q)),e.ob(53,49152,null,0,i.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(54,0,null,0,2,"ion-label",[],null,null,null,t.ob,t.y)),e.ob(55,49152,null,0,i.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Return"])),(l()(),e.pb(57,0,null,0,5,"ion-card",[],null,null,null,t.Y,t.f)),e.ob(58,49152,null,0,i.l,[e.h,e.k],null,null),(l()(),e.pb(59,0,null,0,3,"ion-list",[],null,null,null,t.pb,t.z)),e.ob(60,49152,null,0,i.N,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,G)),e.ob(62,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(63,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadMoreBooks(o)&&e),e},t.ib,t.s)),e.ob(64,49152,null,0,i.D,[e.h,e.k],null,null)],function(l,n){var o=n.component;l(n,12,0,"full"),l(n,15,0,"../assets/icon/add-circle.svg"),l(n,19,0,"Search my books by title or language ..."),l(n,22,0,o.searchTerm),l(n,28,0,"pull for update","...updating"),l(n,32,0,"primary",""),l(n,37,0,"danger"),l(n,39,0,"../assets/icon/trash.svg"),l(n,44,0,"primary"),l(n,46,0,"../assets/icon/thumbs-up.svg"),l(n,51,0,"primary"),l(n,53,0,"../assets/icon/make-available.svg"),l(n,62,0,o.books)},function(l,n){l(n,18,0,e.yb(n,24).ngClassUntouched,e.yb(n,24).ngClassTouched,e.yb(n,24).ngClassPristine,e.yb(n,24).ngClassDirty,e.yb(n,24).ngClassValid,e.yb(n,24).ngClassInvalid,e.yb(n,24).ngClassPending)})}function N(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-tab3",[],null,null,null,U,O)),e.ob(1,4308992,null,0,D,[d.a,i.a,i.Eb,B.a,i.Fb,F.a,"baseURL",q.m,q.a,E.a,r.b,P,c.a,x.a,S,w.a,q.a],null,null)],function(l,n){l(n,1,0)},null)}var H=e.lb("app-tab3",D,N,{},{},[]),$=function(){return function(){}}();o.d(n,"Tab3PageModuleNgFactory",function(){return V});var V=e.mb(u,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[y,v.a,H]],[3,e.j],e.x]),e.wb(4608,a.l,a.k,[e.u,[2,a.r]]),e.wb(4608,r.p,r.p,[]),e.wb(4608,i.b,i.b,[e.z,e.g]),e.wb(4608,i.Eb,i.Eb,[i.b,e.j,e.q,a.c]),e.wb(4608,i.Ib,i.Ib,[i.b,e.j,e.q,a.c]),e.wb(4608,r.b,r.b,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,r.n,r.n,[]),e.wb(1073742336,r.f,r.f,[]),e.wb(1073742336,i.Cb,i.Cb,[]),e.wb(1073742336,r.l,r.l,[]),e.wb(1073742336,$,$,[]),e.wb(1073742336,q.o,q.o,[[2,q.u],[2,q.m]]),e.wb(1073742336,u,u,[]),e.wb(1024,q.k,function(){return[[{path:"",component:D}]]},[])])})}}]);