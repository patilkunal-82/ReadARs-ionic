(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QJAh:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),u=o("mrSG"),t=o("gIcY"),r=o("15JJ"),i=o("Yttj"),s=o("lGQG"),c=o("5uSc"),a=o("ZZ/e"),b=o("CjQN"),h=o("Z4xi"),p=o("hnS/"),d=o("zA0m"),m=o("Onvx"),g=o("01F9"),k=o("wMzM"),f=o("jcOq"),v=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){this.commentsOnBook=this.bookComments,console.log("Book ID",this.commentsOnBook._id),console.log("Book ",this.commentsOnBook._id)},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),y=o("d5rD"),w=o("JhVf"),I=o("kUbd"),C=o("S6gA"),B=o("fNyx"),S=o("+6W9"),x=o("F/XL"),R=o("9Z1F"),O=o("mI4i"),_=o("lUK6"),F=o("t/Na"),G=function(){function l(l,n,o){this.http=l,this.auth=n,this.processHTTPMsgService=o}return l.prototype.isRecommended=function(l){var n=this;return this.auth.isLoggedIn()?this.http.get(O.a+"recommended/"+l).pipe(Object(R.a)(function(l){return n.processHTTPMsgService.handleError(l)})):Object(x.a)({exists:!1,book:null})},l.ngInjectableDef=e.S({factory:function(){return new l(e.W(F.c),e.W(s.a),e.W(_.a))},token:l,providedIn:"root"}),l}(),M=function(){function l(l,n,o,e){this._modalController=l,this.booksService=n,this._alertController=o,this.authService=e}return l.prototype.ionViewWillAppear=function(){},l.prototype.ngOnInit=function(){var l=this;this.bookname=this.bookName,console.log("RECEIVED BOOK ID IS",this.bookId),console.log("RECEIVED BOOK NAME IS",this.bookName),this.booksService.getBookQRImage(this.bookId).subscribe(function(n){l.urlQR=n,console.log("THIS IS QR URL",l.urlQR)},function(n){l.errMess=n,l.showError()})},l.prototype.showError=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(l){switch(l.label){case 0:return[4,this._alertController.create({header:"Error",message:this.errMess})];case 1:return[2,l.sent().present()]}})})},l.prototype.showServerQRcode=function(){},l.prototype.closeQRModal=function(){this._modalController.dismiss()},l}(),D=o("iWj2"),N=function(){function l(l,n,o){this._modalController=l,this.readarsService=o,this.commentData={comment:"",rating:""},this.commentFormGroup=n.group({comment:["",[t.m.required]],rating:["",[t.m.required]]})}return l.prototype.ngOnInit=function(){this.bookid=this.bookId,console.log("BOOK ID",this.bookId)},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.bookid,this.commentFormGroup.value).subscribe(function(n){l.book=n},function(n){return l.errMess=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),E=function(){function l(l,n,o,e,u,r,i,s,c,a,b,h,p,d,m,g,k,f,v,y,w,I,C,B,S,x){this._socialShare=l,this._modalController=n,this.readarsService=u,this.reservedService=r,this.route=i,this.router=s,this.emailComposer=c,this.callNumber=a,this.availableService=h,this.borrowedService=p,this.sanitizer=d,this.barCodeScanner=m,this.base64ToGallery=g,this.file=k,this.filePath=f,this.fileOpener=v,this.base64=y,this.webview=w,this.authService=I,this.booksService=C,this._alertController=B,this.favoriteService=S,this.recommendService=x,this.images=[],this.username=void 0,this.qrData=null,this.anyTextData={anytext:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.available=!1,this.borrowed=!1,this.recommended=!1,this.showQRButtonFlag=!1,this.showCommentFlag=!0,this.panelOpenState=!1,this.dataReader=new FileReader,this.qrFormGroup=b.group({text:["",[t.m.required]]})}return l.prototype.ionViewWillEnter=function(){var l=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(n){console.log(n),l.username=n}),this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(r.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,l.bookCopy=l.book,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",0==l.bookCopy.comments.length&&(l.showCommentFlag=!1),l.favoriteService.isFavorite(l.book._id).subscribe(function(n){console.log(n),l.favorite=n.exists},function(l){return console.log(l)}),l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)}),l.availableService.isAvailable(l.book._id).subscribe(function(n){console.log(n),l.available=n.exists},function(l){return console.log(l)}),l.borrowedService.isBorrowed(l.book._id).subscribe(function(n){l.borrowed=n.exists},function(l){return console.log(l)}),l.recommendService.isRecommended(l.book._id).subscribe(function(n){l.recommended=n.exists},function(l){return console.log(l)}),console.log("BOOK CURRENT USER",l.book.bookcurrentuser),console.log("CURRENT USER NAME",l.username),console.log("SHOWQRBUTTON FLAG",l.showQRButtonFlag),l.book.bookcurrentuser===l.username&&(console.log("INSIDE IF CONDITION FOR CURRENT USER & CURRERNT USER"),l.showQRButtonFlag=!0,console.log("SHOWQRBUTTON FLAG",l.showQRButtonFlag))},function(n){return l.errMess=n})},l.prototype.ngOnInit=function(){},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.manageFavorites=function(){var l=this;this.favorite||this.favoriteService.postFavorite(this.book._id).subscribe(function(n){console.log(n),l.favorite=!0}),this.favorite&&this.favoriteService.deleteFavorite(this.book._id).subscribe(function(n){console.log(n),l.favorite=!1})},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/tab1")},l.prototype.onValueChanged=function(l){},l.prototype.displayComments=function(){0!=this.book.comments.length&&(this.showComments=!0)},l.prototype.reserveBook=function(){return u.b(this,void 0,void 0,function(){var l=this;return u.e(this,function(n){switch(n.label){case 0:return console.log("inside reserveBook of BookdetailComponent.ts"),[4,this._alertController.create({header:"Book is reserved for you",message:"Collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"})];case 1:return n.sent().present(),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.book.bookcurrentuser=this.username,this.book.bookcurrentstatus="reserved",this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0,l.createQRcode()}),this.ngOnInit(),[2]}})})},l.prototype.recommendBook=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(l){switch(l.label){case 0:return[4,this._alertController.create({header:"Thank You",message:"Your recommendation will now be posted.."})];case 1:return l.sent().present(),console.log("inside recommendBook of BookdetailComponent.ts"),this.book.bookrecommend=!0,this.readarsService.recommendBook(this.book._id,this.book).subscribe(function(l){console.log(l)}),[2]}})})},l.prototype.createQRcode=function(){var l=this;this.qrData=this.book._id+this.book.bookowner.username+this.username,console.log("QR data",this.qrData),this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE,this.qrData).then(function(n){console.log(n),l.createdCode=n;var o=l.createdCode.file;console.log(o);var e=o.substring(o.lastIndexOf("/")+1);console.log(e);var u=l.pathForImage(o);console.log(u),l.capturedImagePath=u,l.uploadQRCode(o)},function(l){console.log("Error occured : "+l)})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.contactOwner=function(){return u.b(this,void 0,void 0,function(){var l=this;return u.e(this,function(n){switch(n.label){case 0:return[4,this._alertController.create({header:"Choose your option",message:"Contact the book owner",buttons:[{text:"Call",handler:function(){l.callOwner()}},{text:"Email",handler:function(){l.emailOwner()}}]})];case 1:return n.sent().present(),[2]}})})},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.showServerQRcode=function(){this.openQRModal(this.book._id,this.book.bookname)},l.prototype.deleteServerQRcode=function(){var l=this;this.booksService.deleteQRBookImage(this.book._id,"").subscribe(function(l){return console.log(l)},function(n){return l.errMess=n})},l.prototype.pathForImage=function(l){return null===l?"":this.webview.convertFileSrc(l)},l.prototype.createFileName=function(){return this.book._id+"_"+this.book.bookowner.username+"_"+this.username+".jpg"},l.prototype.uploadQRCode=function(l){var n=this;console.log("inside uploadQRcode"),console.log(l);var o="file://"+l;this.file.resolveLocalFilesystemUrl(o).then(function(l){console.log("inside resolveLocalFilesystemUrl then block, urlToresolve = ",o),l.file(function(l){return n.readFile(l)})}).catch(function(l){console.log("Error while reading file in the function uploadQRCode")})},l.prototype.readFile=function(l){var n=this;console.log("inside readFile");var o=new FileReader;console.log("file type",l.type),console.log("file name",l.name),o.onloadend=function(){if(n.uploadData=new FormData,o.result){var e=new Blob([o.result],{type:l.type});console.log("image blob",e),console.log("newly created filename",n.createFileName()),n.uploadData.append("qrImageFile",e,n.createFileName()),console.log(n.uploadData),n.booksService.uploadQRImage(n.book._id,n.uploadData).subscribe(function(l){console.log(l),n.receivedImageData=l,n.base64Data=n.receivedImageData.pic,n.convertedImage="data:image/jpeg;base64,"+n.base64Data})}},o.readAsArrayBuffer(l)},l.prototype.scanBarcode=function(){var l=this;this.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(n){console.log("Barcode data",n),l.scannedData=n}).catch(function(l){console.log("Error",l)})},l.prototype.share=function(){},l.prototype.addComment=function(){this.addComments=!0,this.showComments=!0},l.prototype.openAddCommentModal=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:N,componentProps:{bookId:this.book._id}})];case 1:return[2,l.sent().present()]}})})},l.prototype.openViewcommentsModal=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:v,componentProps:{bookComments:this.bookCopy}})];case 1:return[2,l.sent().present()]}})})},l.prototype.openModal=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(l){return[2]})})},l.prototype.openQRModal=function(l,n){return u.b(this,void 0,void 0,function(){return u.e(this,function(o){switch(o.label){case 0:return[4,this._modalController.create({component:M,componentProps:{bookId:l,bookName:n}})];case 1:return[4,o.sent().present()];case 2:return[2,o.sent()]}})})},l}(),Q=function(){return function(){}}(),T=o("oBZk"),j=e.nb({encapsulation:0,styles:[[".displaycard[_ngcontent-%COMP%]{margin:10px;padding:10px}"]],data:{}});function q(l){return e.Ib(0,[e.Eb(402653184,1,{commentFormDirective:0}),(l()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,T.jb,T.p)),e.ob(2,49152,null,0,a.A,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,T.Nb,T.T)),e.ob(4,49152,null,0,a.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,T.Mb,T.S)),e.ob(6,49152,null,0,a.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["Add Comments"])),(l()(),e.pb(8,0,null,null,43,"ion-content",[],null,null,null,T.fb,T.l)),e.ob(9,49152,null,0,a.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,35,"ion-card",[["class","displaycard"]],null,null,null,T.cb,T.e)),e.ob(11,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,0,2,"ion-card-title",[],null,null,null,T.bb,T.i)),e.ob(13,49152,null,0,a.p,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" Post your rating, review on this book "])),(l()(),e.pb(15,0,null,0,30,"ion-card-content",[],null,null,null,T.Y,T.f)),e.ob(16,49152,null,0,a.m,[e.h,e.k],null,null),(l()(),e.pb(17,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var u=!0;return"submit"===n&&(u=!1!==e.yb(l,19).onSubmit(o)&&u),"reset"===n&&(u=!1!==e.yb(l,19).onReset()&&u),u},null,null)),e.ob(18,16384,null,0,t.o,[],null,null),e.ob(19,540672,[[1,4],["cform",4]],0,t.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Db(2048,null,t.a,null,[t.e]),e.ob(21,16384,null,0,t.j,[[4,t.a]],null,null),(l()(),e.pb(22,0,null,null,8,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(23,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,25)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,25)._handleInputEvent(o.target.value)&&u),u},T.Kb,T.Q)),e.ob(25,16384,null,0,a.Nb,[e.k],null,null),e.Db(1024,null,t.g,function(l){return[l]},[a.Nb]),e.ob(27,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),e.Db(2048,null,t.h,null,[t.d]),e.ob(29,16384,null,0,t.i,[[4,t.h]],null,null),e.ob(30,49152,null,0,a.wb,[e.h,e.k],{placeholder:[0,"placeholder"]},null),(l()(),e.pb(31,0,null,null,11,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(32,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(33,0,null,0,2,"ion-text",[],null,null,null,T.Jb,T.P)),e.ob(34,49152,null,0,a.vb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["Your Rating"])),(l()(),e.pb(36,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var u=!0;return"ionBlur"===n&&(u=!1!==e.yb(l,37)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==e.yb(l,37)._handleChangeEvent(o.target.value)&&u),u},T.yb,T.E)),e.ob(37,16384,null,0,a.Mb,[e.k],null,null),e.Db(1024,null,t.g,function(l){return[l]},[a.Mb]),e.ob(39,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),e.Db(2048,null,t.h,null,[t.d]),e.ob(41,16384,null,0,t.i,[[4,t.h]],null,null),e.ob(42,49152,null,0,a.ab,[e.h,e.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),e.pb(43,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""],["shape","round"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e},T.W,T.c)),e.ob(44,49152,null,0,a.j,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Gb(-1,0,["Submit"])),(l()(),e.pb(46,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,T.ib,T.m)),e.ob(47,49152,null,0,a.v,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(48,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},T.gb,T.n)),e.ob(49,49152,null,0,a.w,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(50,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,T.kb,T.q)),e.ob(51,49152,null,0,a.B,[e.h,e.k],{name:[0,"name"]},null)],function(l,n){var o=n.component;l(n,19,0,o.commentFormGroup),l(n,27,0,"comment"),l(n,30,0,"Your Comments"),l(n,39,0,"rating"),l(n,42,0,"rating","1","5","true","","5"),l(n,44,0,o.commentFormGroup.invalid,"full","round"),l(n,47,0,"center","bottom"),l(n,49,0,"danger"),l(n,51,0,"close")},function(l,n){l(n,17,0,e.yb(n,21).ngClassUntouched,e.yb(n,21).ngClassTouched,e.yb(n,21).ngClassPristine,e.yb(n,21).ngClassDirty,e.yb(n,21).ngClassValid,e.yb(n,21).ngClassInvalid,e.yb(n,21).ngClassPending),l(n,24,0,e.yb(n,29).ngClassUntouched,e.yb(n,29).ngClassTouched,e.yb(n,29).ngClassPristine,e.yb(n,29).ngClassDirty,e.yb(n,29).ngClassValid,e.yb(n,29).ngClassInvalid,e.yb(n,29).ngClassPending),l(n,36,0,e.yb(n,41).ngClassUntouched,e.yb(n,41).ngClassTouched,e.yb(n,41).ngClassPristine,e.yb(n,41).ngClassDirty,e.yb(n,41).ngClassValid,e.yb(n,41).ngClassInvalid,e.yb(n,41).ngClassPending)})}function A(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-addcomment",[],null,null,null,q,j)),e.ob(1,114688,null,0,N,[a.Gb,t.b,w.a],null,null)],function(l,n){l(n,1,0)},null)}var P=e.lb("app-addcomment",N,A,{},{},[]),z=e.nb({encapsulation:0,styles:[[""]],data:{}});function U(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,T.jb,T.p)),e.ob(1,49152,null,0,a.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,T.Nb,T.T)),e.ob(3,49152,null,0,a.Ab,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,T.Mb,T.S)),e.ob(5,49152,null,0,a.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["QrcodeActivities"])),(l()(),e.pb(7,0,null,null,21,"ion-content",[],null,null,null,T.fb,T.l)),e.ob(8,49152,null,0,a.t,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,13,"ion-card",[],null,null,null,T.cb,T.e)),e.ob(10,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,7,"ion-card-header",[],null,null,null,T.Z,T.g)),e.ob(12,49152,null,0,a.n,[e.h,e.k],null,null),(l()(),e.pb(13,0,null,0,2,"ion-card-title",[],null,null,null,T.bb,T.i)),e.ob(14,49152,null,0,a.p,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["QR Code from Server"])),(l()(),e.pb(16,0,null,0,2,"ion-card-subtitle",[],null,null,null,T.ab,T.h)),e.ob(17,49152,null,0,a.o,[e.h,e.k],null,null),(l()(),e.Gb(18,0,["Book : ",""])),(l()(),e.pb(19,0,null,0,3,"ion-card",[],null,null,null,T.cb,T.e)),e.ob(20,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.pb(21,0,null,0,1,"ion-img",[],null,null,null,T.lb,T.r)),e.ob(22,49152,null,0,a.C,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(23,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,T.ib,T.m)),e.ob(24,49152,null,0,a.v,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(25,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeQRModal()&&e),e},T.gb,T.n)),e.ob(26,49152,null,0,a.w,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(27,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,T.kb,T.q)),e.ob(28,49152,null,0,a.B,[e.h,e.k],{name:[0,"name"]},null)],function(l,n){l(n,22,0,n.component.urlQR),l(n,24,0,"center","bottom"),l(n,26,0,"danger"),l(n,28,0,"close")},function(l,n){l(n,18,0,n.component.bookname)})}function L(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-qrcode-activities",[],null,null,null,U,z)),e.ob(1,114688,null,0,M,[a.Gb,y.a,a.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var Y=e.lb("app-qrcode-activities",M,L,{},{},[]),V=o("Ip0R"),W=e.nb({encapsulation:0,styles:[[".displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px}"]],data:{}});function J(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,16,"ion-slide",[],null,null,null,T.Eb,T.K)),e.ob(1,49152,null,0,a.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,14,"ion-label",[["color","primary"]],null,null,null,T.tb,T.z)),e.ob(3,49152,null,0,a.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Gb(5,null,["",""])),(l()(),e.pb(6,0,null,0,5,"ion-chip",[["color","primary"]],null,null,null,T.db,T.j)),e.ob(7,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(8,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.Gb(9,null,[" "," "])),(l()(),e.pb(10,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,T.kb,T.q)),e.ob(11,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),e.pb(12,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),e.pb(13,0,null,0,3,"ion-chip",[["color","tertiary"]],null,null,null,T.db,T.j)),e.ob(14,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Gb(15,0,[""," "," (",") "])),e.Cb(16,1)],function(l,n){l(n,3,0,"primary"),l(n,7,0,"primary"),l(n,11,0,"warning","../assets/icon/star.svg"),l(n,14,0,"tertiary")},function(l,n){l(n,5,0,n.context.$implicit.comment),l(n,9,0,n.context.$implicit.rating);var o=n.context.$implicit.author.firstname,u=n.context.$implicit.author.lastname,t=e.Hb(n,15,2,l(n,16,0,e.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,15,0,o,u,t)})}function K(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,5,"ion-card-content",[],null,null,null,T.Y,T.f)),e.ob(1,49152,null,0,a.m,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,3,"ion-slides",[],null,null,null,T.Fb,T.L)),e.ob(3,49152,null,0,a.pb,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,J)),e.ob(5,278528,null,0,V.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.commentsOnBook.comments)},null)}function Z(l){return e.Ib(0,[e.Ab(0,V.d,[e.u]),(l()(),e.pb(1,0,null,null,6,"ion-header",[],null,null,null,T.jb,T.p)),e.ob(2,49152,null,0,a.A,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,T.Nb,T.T)),e.ob(4,49152,null,0,a.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[],null,null,null,T.Mb,T.S)),e.ob(6,49152,null,0,a.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" Readers' comments on the book "])),(l()(),e.pb(8,0,null,null,11,"ion-content",[],null,null,null,T.fb,T.l)),e.ob(9,49152,null,0,a.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,3,"ion-card",[["class","displaycard"]],null,null,null,T.cb,T.e)),e.ob(11,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,K)),e.ob(13,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(14,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,T.ib,T.m)),e.ob(15,49152,null,0,a.v,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(16,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},T.gb,T.n)),e.ob(17,49152,null,0,a.w,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(18,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,T.kb,T.q)),e.ob(19,49152,null,0,a.B,[e.h,e.k],{name:[0,"name"]},null)],function(l,n){l(n,13,0,n.component.commentsOnBook),l(n,15,0,"center","bottom"),l(n,17,0,"danger"),l(n,19,0,"close")},null)}function H(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,Z,W)),e.ob(1,114688,null,0,v,[a.Gb],null,null)],function(l,n){l(n,1,0)},null)}var $=e.lb("app-viewcomments",v,H,{},{},[]),X=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),ll=e.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function nl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,T.fb,T.l)),e.ob(1,49152,null,0,a.t,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,T.ib,T.m)),e.ob(5,49152,null,0,a.v,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.closeModal()&&e),e},T.gb,T.n)),e.ob(7,49152,null,0,a.w,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,T.kb,T.q)),e.ob(9,49152,null,0,a.B,[e.h,e.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function ol(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,nl,ll)),e.ob(1,114688,null,0,X,[a.Ib,a.Gb],null,null)],function(l,n){l(n,1,0)},null)}var el=e.lb("app-bookvideo",X,ol,{},{},[]),ul=o("pMnS"),tl=o("ZYCi"),rl=o("ZYjt"),il=e.nb({encapsulation:0,styles:[[".book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.comment-card[_ngcontent-%COMP%]{width:30vw;height:30vh;border:1px solid green;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:100%;height:auto;margin:10px auto}"]],data:{}});function sl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.showServerQRcode()&&e),e},T.gb,T.n)),e.ob(1,49152,null,0,a.w,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/qr-code-sharp.svg"]],null,null,null,T.kb,T.q)),e.ob(3,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,3,0,"primary","../assets/icon/qr-code-sharp.svg")},null)}function cl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.openViewcommentsModal()&&e),e},T.gb,T.n)),e.ob(1,49152,null,0,a.w,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/eye-sharp.svg"]],null,null,null,T.kb,T.q)),e.ob(3,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,3,0,"primary","../assets/icon/eye-sharp.svg")},null)}function al(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,T.kb,T.q)),e.ob(1,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","checkmark-circle")},null)}function bl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/pause-circle.svg"]],null,null,null,T.kb,T.q)),e.ob(1,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,1,0,"warning","../assets/icon/pause-circle.svg")},null)}function hl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,T.kb,T.q)),e.ob(1,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","close-circle")},null)}function pl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,7,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(1,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" Recommend this book to others ? "])),(l()(),e.pb(4,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,T.db,T.j)),e.ob(5,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(6,0,null,0,1,"ion-icon",[["button",""],["color","primary"],["src","../assets/icon/thumbs-up.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.recommendBook()&&e),e},T.kb,T.q)),e.ob(7,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,5,0,"primary"),l(n,7,0,"primary","../assets/icon/thumbs-up.svg")},null)}function dl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,19,"ion-list",[],null,null,null,T.vb,T.A)),e.ob(1,49152,null,0,a.N,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,7,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(3,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" Reserve"])),(l()(),e.pb(6,0,null,0,3,"ion-chip",[["color","success"]],null,null,null,T.db,T.j)),e.ob(7,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(8,0,null,0,1,"ion-icon",[["button",""],["color","success"],["size","large"],["src","../assets/icon/cart.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.reserveBook()&&e),e},T.kb,T.q)),e.ob(9,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null),(l()(),e.pb(10,0,null,0,7,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(11,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" Contact Owner"])),(l()(),e.pb(14,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,T.db,T.j)),e.ob(15,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(16,0,null,0,1,"ion-icon",[["button",""],["color","primary"],["size","large"],["src","../assets/icon/people.svg"]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.contactOwner()&&e),e},T.kb,T.q)),e.ob(17,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],size:[1,"size"],src:[2,"src"]},null),(l()(),e.gb(16777216,null,0,1,null,pl)),e.ob(19,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,7,0,"success"),l(n,9,0,"success","large","../assets/icon/cart.svg"),l(n,15,0,"primary"),l(n,17,0,"primary","large","../assets/icon/people.svg"),l(n,19,0,!o.recommended)},null)}function ml(l){return e.Ib(0,[e.Eb(402653184,1,{qrFormDirective:0}),(l()(),e.pb(1,0,null,null,10,"ion-header",[],null,null,null,T.jb,T.p)),e.ob(2,49152,null,0,a.A,[e.h,e.k],null,null),(l()(),e.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,T.Nb,T.T)),e.ob(4,49152,null,0,a.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,T.X,T.d)),e.ob(6,49152,null,0,a.k,[e.h,e.k],null,null),(l()(),e.pb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==e.yb(l,9).onClick(o)&&u),u},T.V,T.b)),e.ob(8,49152,null,0,a.f,[e.h,e.k],null,null),e.ob(9,16384,null,0,a.g,[[2,a.gb],a.Hb],null,null),(l()(),e.pb(10,0,null,0,1,"ion-title",[],null,null,null,T.Mb,T.S)),e.ob(11,49152,null,0,a.yb,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,null,64,"ion-content",[],null,null,null,T.fb,T.l)),e.ob(13,49152,null,0,a.t,[e.h,e.k],null,null),(l()(),e.pb(14,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},T.Ab,T.F)),e.ob(15,49152,null,0,a.bb,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,T.zb,T.G)),e.ob(17,49152,null,0,a.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(18,0,null,0,58,"ion-card",[],null,null,null,T.cb,T.e)),e.ob(19,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.pb(20,0,null,0,15,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,T.ib,T.m)),e.ob(21,49152,null,0,a.v,[e.h,e.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(22,0,null,0,3,"ion-fab-button",[],null,null,null,T.gb,T.n)),e.ob(23,49152,null,0,a.w,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-down.svg"]],null,null,null,T.kb,T.q)),e.ob(25,49152,null,0,a.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(26,0,null,0,9,"ion-fab-list",[["side","bottom"]],null,null,null,T.hb,T.o)),e.ob(27,49152,null,0,a.x,[e.h,e.k],{side:[0,"side"]},null),(l()(),e.gb(16777216,null,0,1,null,sl)),e.ob(29,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(30,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==l.component.openAddCommentModal()&&e),e},T.gb,T.n)),e.ob(31,49152,null,0,a.w,[e.h,e.k],null,null),(l()(),e.pb(32,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/create.svg"]],null,null,null,T.kb,T.q)),e.ob(33,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),e.gb(16777216,null,0,1,null,cl)),e.ob(35,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(36,0,null,0,7,"ion-card-header",[],null,null,null,T.Z,T.g)),e.ob(37,49152,null,0,a.n,[e.h,e.k],null,null),(l()(),e.pb(38,0,null,0,2,"ion-card-title",[["class","ion-text-wrap"]],null,null,null,T.bb,T.i)),e.ob(39,49152,null,0,a.p,[e.h,e.k],null,null),(l()(),e.Gb(40,0,[" "," "])),(l()(),e.pb(41,0,null,0,2,"ion-card-subtitle",[["class","ion-text-wrap"]],null,null,null,T.ab,T.h)),e.ob(42,49152,null,0,a.o,[e.h,e.k],null,null),(l()(),e.Gb(43,0,[" Author: "," "])),(l()(),e.pb(44,0,null,0,32,"ion-card-content",[["style","color: green;"]],null,null,null,T.Y,T.f)),e.ob(45,49152,null,0,a.m,[e.h,e.k],null,null),(l()(),e.pb(46,0,null,0,8,"ion-chip",[["color","primary"]],null,null,null,T.db,T.j)),e.ob(47,49152,null,0,a.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Gb(-1,0,[" Available? "])),(l()(),e.gb(16777216,null,0,1,null,al)),e.ob(50,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,bl)),e.ob(52,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,hl)),e.ob(54,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(55,0,null,0,19,"ion-list",[],null,null,null,T.vb,T.A)),e.ob(56,49152,null,0,a.N,[e.h,e.k],null,null),(l()(),e.pb(57,0,null,0,1,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(58,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(59,0,null,0,5,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(60,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(61,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,T.tb,T.z)),e.ob(62,49152,null,0,a.M,[e.h,e.k],null,null),(l()(),e.pb(63,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(64,null,["Book Owner: "," ",""])),(l()(),e.pb(65,0,null,0,9,"ion-item",[],null,null,null,T.sb,T.v)),e.ob(66,49152,null,0,a.G,[e.h,e.k],null,null),(l()(),e.pb(67,0,null,0,7,"ion-label",[["class","ion-text-wrap"]],null,null,null,T.tb,T.z)),e.ob(68,49152,null,0,a.M,[e.h,e.k],null,null),(l()(),e.pb(69,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.Gb(70,null,[" Owner's Rating: ",""])),(l()(),e.pb(71,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,T.kb,T.q)),e.ob(72,49152,null,0,a.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),e.pb(73,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(74,null,[" Owner's Address: ",""])),(l()(),e.gb(16777216,null,0,1,null,dl)),e.ob(76,16384,null,0,V.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,17,0,"pull for update","...updating"),l(n,21,0,"end","top"),l(n,25,0,"../assets/icon/caret-down.svg"),l(n,27,0,"bottom"),l(n,29,0,(o.reserved||o.borrowed)&&o.showQRButtonFlag),l(n,33,0,"primary","../assets/icon/create.svg"),l(n,35,0,o.showCommentFlag),l(n,47,0,"primary"),l(n,50,0,o.available),l(n,52,0,o.reserved),l(n,54,0,o.borrowed),l(n,72,0,"warning","../assets/icon/star.svg"),l(n,76,0,o.available)},function(l,n){var o=n.component;l(n,40,0,null==o.book?null:o.book.bookname),l(n,43,0,null==o.book?null:o.book.bookauthor),l(n,64,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,70,0,null==o.book?null:o.book.bookrating),l(n,74,0,null==o.book?null:o.book.bookowneraddress)})}function gl(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,ml,il)),e.ob(1,114688,null,0,E,[b.a,a.Gb,c.a,tl.a,w.a,C.a,tl.a,tl.m,h.a,p.a,t.b,B.a,S.a,rl.c,d.a,m.a,g.a,D.a,k.a,f.a,i.a,s.a,y.a,a.a,I.a,G],null,null)],function(l,n){l(n,1,0)},null)}var kl=e.lb("app-bookdetail",E,gl,{},{},[]),fl=function(){return function(){}}(),vl=function(){return function(){}}(),yl=function(){return function(){}}(),wl=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return Il});var Il=e.mb(Q,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[P,Y,$,el,ul.a,kl]],[3,e.j],e.x]),e.wb(4608,V.l,V.k,[e.u,[2,V.r]]),e.wb(4608,t.p,t.p,[]),e.wb(4608,a.b,a.b,[e.z,e.g]),e.wb(4608,a.Gb,a.Gb,[a.b,e.j,e.q,V.c]),e.wb(4608,a.Kb,a.Kb,[a.b,e.j,e.q,V.c]),e.wb(4608,t.b,t.b,[]),e.wb(1073742336,V.b,V.b,[]),e.wb(1073742336,t.n,t.n,[]),e.wb(1073742336,t.f,t.f,[]),e.wb(1073742336,a.Cb,a.Cb,[]),e.wb(1073742336,t.l,t.l,[]),e.wb(1073742336,fl,fl,[]),e.wb(1073742336,vl,vl,[]),e.wb(1073742336,yl,yl,[]),e.wb(1073742336,wl,wl,[]),e.wb(1073742336,tl.o,tl.o,[[2,tl.u],[2,tl.m]]),e.wb(1073742336,Q,Q,[]),e.wb(1024,tl.k,function(){return[[{path:"",component:E}]]},[])])})}}]);