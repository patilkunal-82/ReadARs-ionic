(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QJAh:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),e=o("mrSG"),t=o("gIcY"),r=o("15JJ"),i=o("Yttj"),s=o("lGQG"),c=o("5uSc"),a=o("ZZ/e"),b=o("CjQN"),h=o("Z4xi"),p=o("hnS/"),d=o("zA0m"),m=o("Onvx"),k=o("01F9"),g=o("wMzM"),f=o("jcOq"),v=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){this.commentsOnBook=this.bookComments,console.log("Book ID",this.commentsOnBook._id),console.log("Book Name",this.commentsOnBook.bookname)},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),y=o("d5rD"),w=o("JhVf"),C=o("S6gA"),I=o("fNyx"),B=o("+6W9"),R=function(){function l(l,n,o,u){this._modalController=l,this.booksService=n,this._alertController=o,this.authService=u}return l.prototype.ionViewWillAppear=function(){},l.prototype.ngOnInit=function(){var l=this;this.bookname=this.bookName,console.log("RECEIVED BOOK ID IS",this.bookId),console.log("RECEIVED BOOK NAME IS",this.bookName),this.booksService.getBookQRImage(this.bookId).subscribe(function(n){l.urlQR=n,console.log("THIS IS QR URL",l.urlQR)},function(n){l.errMess=n,l.showError()})},l.prototype.showError=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this._alertController.create({header:"Error",message:this.errMess})];case 1:return[2,l.sent().present()]}})})},l.prototype.showServerQRcode=function(){},l.prototype.closeQRModal=function(){this._modalController.dismiss()},l}(),F=o("iWj2"),S=function(){function l(l,n,o){this._modalController=l,this.readarsService=o,this.commentData={comment:"",rating:""},this.commentFormGroup=n.group({comment:["",[t.m.required]],rating:["",[t.m.required]]})}return l.prototype.ngOnInit=function(){this.bookid=this.bookId,console.log("BOOK ID",this.bookId)},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.bookid,this.commentFormGroup.value).subscribe(function(n){l.book=n},function(n){return l.errMess=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),O=function(){function l(l,n,o,u,e,r,i,s,c,a,b,h,p,d,m,k,g,f,v,y,w,C,I,B){this._socialShare=l,this._modalController=n,this.readarsService=e,this.reservedService=r,this.route=i,this.router=s,this.emailComposer=c,this.callNumber=a,this.availableService=h,this.borrowedService=p,this.sanitizer=d,this.barCodeScanner=m,this.base64ToGallery=k,this.file=g,this.filePath=f,this.fileOpener=v,this.base64=y,this.webview=w,this.authService=C,this.booksService=I,this._alertController=B,this.images=[],this.username=void 0,this.qrData=null,this.anyTextData={anytext:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.available=!1,this.borrowed=!1,this.showQRButtonFlag=!1,this.panelOpenState=!1,this.dataReader=new FileReader,this.qrFormGroup=b.group({text:["",[t.m.required]]})}return l.prototype.ionViewWillEnter=function(){var l=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(n){console.log(n),l.username=n}),this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(r.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,l.bookCopy=l.book,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)}),l.availableService.isAvailable(l.book._id).subscribe(function(n){console.log(n),l.available=n.exists},function(l){return console.log(l)}),l.borrowedService.isBorrowed(l.book._id).subscribe(function(n){l.borrowed=n.exists},function(l){return console.log(l)}),console.log("BOOK CURRENT USER",l.book.bookcurrentuser),console.log("CURRENT USER NAME",l.username),console.log("SHOWQRBUTTON FLAG",l.showQRButtonFlag),l.book.bookcurrentuser===l.username&&(console.log("INSIDE IF CONDITION FOR CURRENT USER & CURRERNT USER"),l.showQRButtonFlag=!0,console.log("SHOWQRBUTTON FLAG",l.showQRButtonFlag))},function(n){return l.errMess=n})},l.prototype.ngOnInit=function(){},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/tab1")},l.prototype.onValueChanged=function(l){},l.prototype.displayComments=function(){0!=this.book.comments.length&&(this.showComments=!0)},l.prototype.reserveBook=function(){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(n){switch(n.label){case 0:return console.log("inside reserveBook of BookdetailComponent.ts"),[4,this._alertController.create({header:"Book is reserved for you",message:"Collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"})];case 1:return n.sent().present(),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.book.bookcurrentuser=this.username,this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0,l.createQRcode()}),this.ngOnInit(),[2]}})})},l.prototype.createQRcode=function(){var l=this;this.qrData=this.book._id+this.book.bookowner.username+this.username,console.log("QR data",this.qrData),this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE,this.qrData).then(function(n){console.log(n),l.createdCode=n;var o=l.createdCode.file;console.log(o);var u=o.substring(o.lastIndexOf("/")+1);console.log(u);var e=l.pathForImage(o);console.log(e),l.capturedImagePath=e,l.uploadQRCode(o)},function(l){console.log("Error occured : "+l)})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.contactOwner=function(){return e.b(this,void 0,void 0,function(){var l=this;return e.e(this,function(n){switch(n.label){case 0:return[4,this._alertController.create({header:"Choose your option",message:"Contact the book owner",buttons:[{text:"Call",handler:function(){l.callOwner()}},{text:"Email",handler:function(){l.emailOwner()}}]})];case 1:return n.sent().present(),[2]}})})},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.showServerQRcode=function(){this.openQRModal(this.book._id,this.book.bookname)},l.prototype.deleteServerQRcode=function(){var l=this;this.booksService.deleteQRBookImage(this.book._id,"").subscribe(function(l){return console.log(l)},function(n){return l.errMess=n})},l.prototype.pathForImage=function(l){return null===l?"":this.webview.convertFileSrc(l)},l.prototype.createFileName=function(){return this.book._id+"_"+this.book.bookowner.username+"_"+this.username+".jpg"},l.prototype.uploadQRCode=function(l){var n=this;console.log("inside uploadQRcode"),console.log(l);var o="file://"+l;this.file.resolveLocalFilesystemUrl(o).then(function(l){console.log("inside resolveLocalFilesystemUrl then block, urlToresolve = ",o),l.file(function(l){return n.readFile(l)})}).catch(function(l){console.log("Error while reading file in the function uploadQRCode")})},l.prototype.readFile=function(l){var n=this;console.log("inside readFile");var o=new FileReader;console.log("file type",l.type),console.log("file name",l.name),o.onloadend=function(){if(n.uploadData=new FormData,o.result){var u=new Blob([o.result],{type:l.type});console.log("image blob",u),console.log("newly created filename",n.createFileName()),n.uploadData.append("qrImageFile",u,n.createFileName()),console.log(n.uploadData),n.booksService.uploadQRImage(n.book._id,n.uploadData).subscribe(function(l){console.log(l),n.receivedImageData=l,n.base64Data=n.receivedImageData.pic,n.convertedImage="data:image/jpeg;base64,"+n.base64Data})}},o.readAsArrayBuffer(l)},l.prototype.scanBarcode=function(){var l=this;this.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(n){console.log("Barcode data",n),l.scannedData=n}).catch(function(l){console.log("Error",l)})},l.prototype.share=function(){},l.prototype.addComment=function(){this.addComments=!0,this.showComments=!0},l.prototype.openAddCommentModal=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:S,componentProps:{bookId:this.book._id}})];case 1:return[2,l.sent().present()]}})})},l.prototype.openViewcommentsModal=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:v,componentProps:{bookComments:this.bookCopy}})];case 1:return[2,l.sent().present()]}})})},l.prototype.openModal=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return[2]})})},l.prototype.openQRModal=function(l,n){return e.b(this,void 0,void 0,function(){return e.e(this,function(o){switch(o.label){case 0:return[4,this._modalController.create({component:R,componentProps:{bookId:l,bookName:n}})];case 1:return[4,o.sent().present()];case 2:return[2,o.sent()]}})})},l}(),x=function(){return function(){}}(),_=o("oBZk"),E=u.nb({encapsulation:0,styles:[[""]],data:{}});function D(l){return u.Hb(0,[u.Db(402653184,1,{commentFormDirective:0}),(l()(),u.pb(1,0,null,null,6,"ion-header",[],null,null,null,_.jb,_.q)),u.ob(2,49152,null,0,a.A,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,_.Lb,_.S)),u.ob(4,49152,null,0,a.Ab,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,2,"ion-title",[],null,null,null,_.Kb,_.R)),u.ob(6,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["addcomment"])),(l()(),u.pb(8,0,null,null,43,"ion-content",[],null,null,null,_.fb,_.m)),u.ob(9,49152,null,0,a.t,[u.h,u.k],null,null),(l()(),u.pb(10,0,null,0,35,"ion-card",[],null,null,null,_.cb,_.f)),u.ob(11,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.pb(12,0,null,0,2,"ion-card-title",[],null,null,null,_.bb,_.j)),u.ob(13,49152,null,0,a.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Post your rating, review on this book "])),(l()(),u.pb(15,0,null,0,30,"ion-card-content",[],null,null,null,_.Y,_.g)),u.ob(16,49152,null,0,a.m,[u.h,u.k],null,null),(l()(),u.pb(17,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var e=!0;return"submit"===n&&(e=!1!==u.yb(l,19).onSubmit(o)&&e),"reset"===n&&(e=!1!==u.yb(l,19).onReset()&&e),e},null,null)),u.ob(18,16384,null,0,t.o,[],null,null),u.ob(19,540672,[[1,4],["cform",4]],0,t.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,t.a,null,[t.e]),u.ob(21,16384,null,0,t.j,[[4,t.a]],null,null),(l()(),u.pb(22,0,null,null,8,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(23,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(24,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0;return"ionBlur"===n&&(e=!1!==u.yb(l,25)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,25)._handleInputEvent(o.target.value)&&e),e},_.Ib,_.P)),u.ob(25,16384,null,0,a.Lb,[u.k],null,null),u.Cb(1024,null,t.g,function(l){return[l]},[a.Lb]),u.ob(27,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),u.Cb(2048,null,t.h,null,[t.d]),u.ob(29,16384,null,0,t.i,[[4,t.h]],null,null),u.ob(30,49152,null,0,a.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(31,0,null,null,11,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(32,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(33,0,null,0,2,"ion-text",[],null,null,null,_.Hb,_.O)),u.ob(34,49152,null,0,a.vb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your Rating"])),(l()(),u.pb(36,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0;return"ionBlur"===n&&(e=!1!==u.yb(l,37)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,37)._handleChangeEvent(o.target.value)&&e),e},_.vb,_.C)),u.ob(37,16384,null,0,a.Kb,[u.k],null,null),u.Cb(1024,null,t.g,function(l){return[l]},[a.Kb]),u.ob(39,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),u.Cb(2048,null,t.h,null,[t.d]),u.ob(41,16384,null,0,t.i,[[4,t.h]],null,null),u.ob(42,49152,null,0,a.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),u.pb(43,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u},_.W,_.d)),u.ob(44,49152,null,0,a.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Submit Comment"])),(l()(),u.pb(46,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,_.ib,_.n)),u.ob(47,49152,null,0,a.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(48,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},_.gb,_.o)),u.ob(49,49152,null,0,a.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(50,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,_.kb,_.r)),u.ob(51,49152,null,0,a.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){var o=n.component;l(n,19,0,o.commentFormGroup),l(n,27,0,"comment"),l(n,30,0,"Your Comments"),l(n,39,0,"rating"),l(n,42,0,"rating","1","5","true","","5"),l(n,44,0,o.commentFormGroup.invalid,"full"),l(n,47,0,"center","bottom"),l(n,49,0,"danger"),l(n,51,0,"close")},function(l,n){l(n,17,0,u.yb(n,21).ngClassUntouched,u.yb(n,21).ngClassTouched,u.yb(n,21).ngClassPristine,u.yb(n,21).ngClassDirty,u.yb(n,21).ngClassValid,u.yb(n,21).ngClassInvalid,u.yb(n,21).ngClassPending),l(n,24,0,u.yb(n,29).ngClassUntouched,u.yb(n,29).ngClassTouched,u.yb(n,29).ngClassPristine,u.yb(n,29).ngClassDirty,u.yb(n,29).ngClassValid,u.yb(n,29).ngClassInvalid,u.yb(n,29).ngClassPending),l(n,36,0,u.yb(n,41).ngClassUntouched,u.yb(n,41).ngClassTouched,u.yb(n,41).ngClassPristine,u.yb(n,41).ngClassDirty,u.yb(n,41).ngClassValid,u.yb(n,41).ngClassInvalid,u.yb(n,41).ngClassPending)})}function N(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-addcomment",[],null,null,null,D,E)),u.ob(1,114688,null,0,S,[a.Eb,t.b,w.a],null,null)],function(l,n){l(n,1,0)},null)}var M=u.lb("app-addcomment",S,N,{},{},[]),Q=u.nb({encapsulation:0,styles:[[""]],data:{}});function A(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,_.jb,_.q)),u.ob(1,49152,null,0,a.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,_.Lb,_.S)),u.ob(3,49152,null,0,a.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,_.Kb,_.R)),u.ob(5,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QrcodeActivities"])),(l()(),u.pb(7,0,null,null,21,"ion-content",[],null,null,null,_.fb,_.m)),u.ob(8,49152,null,0,a.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,13,"ion-card",[],null,null,null,_.cb,_.f)),u.ob(10,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.pb(11,0,null,0,7,"ion-card-header",[],null,null,null,_.Z,_.h)),u.ob(12,49152,null,0,a.n,[u.h,u.k],null,null),(l()(),u.pb(13,0,null,0,2,"ion-card-title",[],null,null,null,_.bb,_.j)),u.ob(14,49152,null,0,a.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QR Code from Server"])),(l()(),u.pb(16,0,null,0,2,"ion-card-subtitle",[],null,null,null,_.ab,_.i)),u.ob(17,49152,null,0,a.o,[u.h,u.k],null,null),(l()(),u.Fb(18,0,["Book : ",""])),(l()(),u.pb(19,0,null,0,3,"ion-card",[],null,null,null,_.cb,_.f)),u.ob(20,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.pb(21,0,null,0,1,"ion-img",[],null,null,null,_.lb,_.s)),u.ob(22,49152,null,0,a.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(23,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,_.ib,_.n)),u.ob(24,49152,null,0,a.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(25,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeQRModal()&&u),u},_.gb,_.o)),u.ob(26,49152,null,0,a.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(27,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,_.kb,_.r)),u.ob(28,49152,null,0,a.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,22,0,n.component.urlQR),l(n,24,0,"center","bottom"),l(n,26,0,"danger"),l(n,28,0,"close")},function(l,n){l(n,18,0,n.component.bookname)})}function j(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-qrcode-activities",[],null,null,null,A,Q)),u.ob(1,114688,null,0,R,[a.Eb,y.a,a.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var T=u.lb("app-qrcode-activities",R,j,{},{},[]),P=o("Ip0R"),z=u.nb({encapsulation:0,styles:[[""]],data:{}});function U(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,18,"ion-slide",[],null,null,null,_.Cb,_.J)),u.ob(1,49152,null,0,a.ob,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,16,"ion-card",[["class","comment-card"]],null,null,null,_.cb,_.f)),u.ob(3,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,14,"ion-label",[["color","primary"]],null,null,null,_.tb,_.A)),u.ob(5,49152,null,0,a.M,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,0,5,"ion-chip",[["color","primary"]],null,null,null,_.db,_.k)),u.ob(9,49152,null,0,a.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(10,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(11,null,[" "," "])),(l()(),u.pb(12,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,_.kb,_.r)),u.ob(13,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(14,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.pb(15,0,null,0,3,"ion-chip",[["color","tertiary"]],null,null,null,_.db,_.k)),u.ob(16,49152,null,0,a.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(17,0,[""," "," (",") "])),u.Bb(18,1)],function(l,n){l(n,5,0,"primary"),l(n,9,0,"primary"),l(n,13,0,"warning","../assets/icon/star.svg"),l(n,16,0,"tertiary")},function(l,n){l(n,7,0,n.context.$implicit.comment),l(n,11,0,n.context.$implicit.rating);var o=n.context.$implicit.author.firstname,e=n.context.$implicit.author.lastname,t=u.Gb(n,17,2,l(n,18,0,u.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,17,0,o,e,t)})}function q(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-card-content",[],null,null,null,_.Y,_.g)),u.ob(1,49152,null,0,a.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,_.Z,_.h)),u.ob(3,49152,null,0,a.n,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[["color",""]],null,null,null,_.bb,_.j)),u.ob(5,49152,null,0,a.p,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(-1,0,[" What are readers of this book saying .. ? "])),(l()(),u.pb(7,0,null,0,3,"ion-slides",[],null,null,null,_.Db,_.K)),u.ob(8,49152,null,0,a.pb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,U)),u.ob(10,278528,null,0,P.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,5,0,""),l(n,10,0,o.commentsOnBook.comments)},null)}function G(l){return u.Hb(0,[u.Ab(0,P.d,[u.u]),(l()(),u.pb(1,0,null,null,6,"ion-header",[],null,null,null,_.jb,_.q)),u.ob(2,49152,null,0,a.A,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,_.Lb,_.S)),u.ob(4,49152,null,0,a.Ab,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,2,"ion-title",[],null,null,null,_.Kb,_.R)),u.ob(6,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Readers' comments on this book"])),(l()(),u.pb(8,0,null,null,11,"ion-content",[],null,null,null,_.fb,_.m)),u.ob(9,49152,null,0,a.t,[u.h,u.k],null,null),(l()(),u.pb(10,0,null,0,3,"ion-card",[["expand","full"]],null,null,null,_.cb,_.f)),u.ob(11,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,q)),u.ob(13,16384,null,0,P.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(14,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,_.ib,_.n)),u.ob(15,49152,null,0,a.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(16,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},_.gb,_.o)),u.ob(17,49152,null,0,a.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(18,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,_.kb,_.r)),u.ob(19,49152,null,0,a.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,13,0,n.component.commentsOnBook),l(n,15,0,"center","bottom"),l(n,17,0,"danger"),l(n,19,0,"close")},null)}function L(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,G,z)),u.ob(1,114688,null,0,v,[a.Eb],null,null)],function(l,n){l(n,1,0)},null)}var H=u.lb("app-viewcomments",v,L,{},{},[]),V=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),K=u.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function Y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,_.fb,_.m)),u.ob(1,49152,null,0,a.t,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,_.ib,_.n)),u.ob(5,49152,null,0,a.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},_.gb,_.o)),u.ob(7,49152,null,0,a.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,_.kb,_.r)),u.ob(9,49152,null,0,a.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function J(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,Y,K)),u.ob(1,114688,null,0,V,[a.Gb,a.Eb],null,null)],function(l,n){l(n,1,0)},null)}var Z=u.lb("app-bookvideo",V,J,{},{},[]),W=o("pMnS"),$=o("ZYCi"),X=o("ZYjt"),ll=u.nb({encapsulation:0,styles:[[".book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.comment-card[_ngcontent-%COMP%]{width:30vw;height:30vh;border:1px solid green;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:100%;height:auto;margin:10px auto}"]],data:{}});function nl(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.showServerQRcode()&&u),u},_.gb,_.o)),u.ob(1,49152,null,0,a.w,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/qr-code-sharp.svg"]],null,null,null,_.kb,_.r)),u.ob(3,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,3,0,"primary","../assets/icon/qr-code-sharp.svg")},null)}function ol(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,_.kb,_.r)),u.ob(1,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","checkmark-circle")},null)}function ul(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,_.kb,_.r)),u.ob(1,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","close-circle")},null)}function el(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,17,"ion-list",[],null,null,null,_.ub,_.B)),u.ob(1,49152,null,0,a.N,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,7,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(3,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Reserve"])),(l()(),u.pb(6,0,null,0,3,"ion-chip",[["color","success"]],null,null,null,_.db,_.k)),u.ob(7,49152,null,0,a.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["button",""],["color","success"],["size","large"],["src","../assets/icon/cart.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.reserveBook()&&u),u},_.kb,_.r)),u.ob(9,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null),(l()(),u.pb(10,0,null,0,7,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(11,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(12,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Contact Owner"])),(l()(),u.pb(14,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,_.db,_.k)),u.ob(15,49152,null,0,a.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(16,0,null,0,1,"ion-icon",[["button",""],["color","primary"],["size","large"],["src","../assets/icon/people.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.contactOwner()&&u),u},_.kb,_.r)),u.ob(17,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null)],function(l,n){l(n,7,0,"success"),l(n,9,0,"success","large","../assets/icon/cart.svg"),l(n,15,0,"primary"),l(n,17,0,"primary","large","../assets/icon/people.svg")},null)}function tl(l){return u.Hb(0,[u.Db(402653184,1,{qrFormDirective:0}),(l()(),u.pb(1,0,null,null,10,"ion-header",[],null,null,null,_.jb,_.q)),u.ob(2,49152,null,0,a.A,[u.h,u.k],null,null),(l()(),u.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,_.Lb,_.S)),u.ob(4,49152,null,0,a.Ab,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,_.X,_.e)),u.ob(6,49152,null,0,a.k,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==u.yb(l,9).onClick(o)&&e),e},_.V,_.c)),u.ob(8,49152,null,0,a.f,[u.h,u.k],null,null),u.ob(9,16384,null,0,a.g,[[2,a.gb],a.Fb],null,null),(l()(),u.pb(10,0,null,0,1,"ion-title",[],null,null,null,_.Kb,_.R)),u.ob(11,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.pb(12,0,null,null,68,"ion-content",[],null,null,null,_.fb,_.m)),u.ob(13,49152,null,0,a.t,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.refreshBookList(o)&&u),u},_.xb,_.D)),u.ob(15,49152,null,0,a.bb,[u.h,u.k],null,null),(l()(),u.pb(16,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,_.wb,_.E)),u.ob(17,49152,null,0,a.cb,[u.h,u.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),u.pb(18,0,null,0,62,"ion-card",[],null,null,null,_.cb,_.f)),u.ob(19,49152,null,0,a.l,[u.h,u.k],null,null),(l()(),u.pb(20,0,null,0,17,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,_.ib,_.n)),u.ob(21,49152,null,0,a.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(22,0,null,0,3,"ion-fab-button",[],null,null,null,_.gb,_.o)),u.ob(23,49152,null,0,a.w,[u.h,u.k],null,null),(l()(),u.pb(24,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-down.svg"]],null,null,null,_.kb,_.r)),u.ob(25,49152,null,0,a.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(26,0,null,0,11,"ion-fab-list",[["side","bottom"]],null,null,null,_.hb,_.p)),u.ob(27,49152,null,0,a.x,[u.h,u.k],{side:[0,"side"]},null),(l()(),u.gb(16777216,null,0,1,null,nl)),u.ob(29,16384,null,0,P.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(30,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.openAddCommentModal()&&u),u},_.gb,_.o)),u.ob(31,49152,null,0,a.w,[u.h,u.k],null,null),(l()(),u.pb(32,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/create.svg"]],null,null,null,_.kb,_.r)),u.ob(33,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(34,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.openViewcommentsModal()&&u),u},_.gb,_.o)),u.ob(35,49152,null,0,a.w,[u.h,u.k],null,null),(l()(),u.pb(36,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/eye-sharp.svg"]],null,null,null,_.kb,_.r)),u.ob(37,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(38,0,null,0,7,"ion-card-header",[],null,null,null,_.Z,_.h)),u.ob(39,49152,null,0,a.n,[u.h,u.k],null,null),(l()(),u.pb(40,0,null,0,2,"ion-card-title",[],null,null,null,_.bb,_.j)),u.ob(41,49152,null,0,a.p,[u.h,u.k],null,null),(l()(),u.Fb(42,0,[" "," "])),(l()(),u.pb(43,0,null,0,2,"ion-card-subtitle",[],null,null,null,_.ab,_.i)),u.ob(44,49152,null,0,a.o,[u.h,u.k],null,null),(l()(),u.Fb(45,0,[" Author: "," "])),(l()(),u.pb(46,0,null,0,34,"ion-card-content",[["style","color: green;"]],null,null,null,_.Y,_.g)),u.ob(47,49152,null,0,a.m,[u.h,u.k],null,null),(l()(),u.pb(48,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,_.db,_.k)),u.ob(49,49152,null,0,a.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(-1,0,[" Available? "])),(l()(),u.gb(16777216,null,0,1,null,ol)),u.ob(52,16384,null,0,P.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,ul)),u.ob(54,16384,null,0,P.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(55,0,null,0,23,"ion-list",[],null,null,null,_.ub,_.B)),u.ob(56,49152,null,0,a.N,[u.h,u.k],null,null),(l()(),u.pb(57,0,null,0,5,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(58,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(59,0,null,0,3,"ion-label",[],null,null,null,_.tb,_.A)),u.ob(60,49152,null,0,a.M,[u.h,u.k],null,null),(l()(),u.pb(61,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(62,null,["Book Description: "," "])),(l()(),u.pb(63,0,null,0,5,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(64,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(65,0,null,0,3,"ion-label",[],null,null,null,_.tb,_.A)),u.ob(66,49152,null,0,a.M,[u.h,u.k],null,null),(l()(),u.pb(67,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Fb(68,null,["Book Owner: "," ",""])),(l()(),u.pb(69,0,null,0,9,"ion-item",[],null,null,null,_.sb,_.w)),u.ob(70,49152,null,0,a.G,[u.h,u.k],null,null),(l()(),u.pb(71,0,null,0,7,"ion-label",[],null,null,null,_.tb,_.A)),u.ob(72,49152,null,0,a.M,[u.h,u.k],null,null),(l()(),u.pb(73,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(74,null,[" Owner's Rating: ",""])),(l()(),u.pb(75,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,_.kb,_.r)),u.ob(76,49152,null,0,a.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(77,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(78,null,[" Owner's Address: ",""])),(l()(),u.gb(16777216,null,0,1,null,el)),u.ob(80,16384,null,0,P.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,17,0,"pull for update","...updating"),l(n,21,0,"end","top"),l(n,25,0,"../assets/icon/caret-down.svg"),l(n,27,0,"bottom"),l(n,29,0,(o.reserved||o.borrowed)&&o.showQRButtonFlag),l(n,33,0,"primary","../assets/icon/create.svg"),l(n,37,0,"primary","../assets/icon/eye-sharp.svg"),l(n,49,0,"primary"),l(n,52,0,o.available),l(n,54,0,!o.available),l(n,76,0,"warning","../assets/icon/star.svg"),l(n,80,0,o.available)},function(l,n){var o=n.component;l(n,42,0,null==o.book?null:o.book.bookname),l(n,45,0,null==o.book?null:o.book.bookauthor),l(n,62,0,null==o.book?null:o.book.bookdescription),l(n,68,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,74,0,null==o.book?null:o.book.bookrating),l(n,78,0,null==o.book?null:o.book.bookowneraddress)})}function rl(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,tl,ll)),u.ob(1,114688,null,0,O,[b.a,a.Eb,c.a,$.a,w.a,C.a,$.a,$.m,h.a,p.a,t.b,I.a,B.a,X.c,d.a,m.a,k.a,F.a,g.a,f.a,i.a,s.a,y.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var il=u.lb("app-bookdetail",O,rl,{},{},[]),sl=function(){return function(){}}(),cl=function(){return function(){}}(),al=function(){return function(){}}(),bl=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return hl});var hl=u.mb(x,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[M,T,H,Z,W.a,il]],[3,u.j],u.x]),u.wb(4608,P.l,P.k,[u.u,[2,P.r]]),u.wb(4608,t.p,t.p,[]),u.wb(4608,a.b,a.b,[u.z,u.g]),u.wb(4608,a.Eb,a.Eb,[a.b,u.j,u.q,P.c]),u.wb(4608,a.Ib,a.Ib,[a.b,u.j,u.q,P.c]),u.wb(4608,t.b,t.b,[]),u.wb(1073742336,P.b,P.b,[]),u.wb(1073742336,t.n,t.n,[]),u.wb(1073742336,t.f,t.f,[]),u.wb(1073742336,a.Cb,a.Cb,[]),u.wb(1073742336,t.l,t.l,[]),u.wb(1073742336,sl,sl,[]),u.wb(1073742336,cl,cl,[]),u.wb(1073742336,al,al,[]),u.wb(1073742336,bl,bl,[]),u.wb(1073742336,$.o,$.o,[[2,$.u],[2,$.m]]),u.wb(1073742336,x,x,[]),u.wb(1024,$.k,function(){return[[{path:"",component:O}]]},[])])})}}]);