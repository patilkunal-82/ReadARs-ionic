(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QJAh:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),t=o("mrSG"),e=o("gIcY"),r=o("15JJ"),i=o("5uSc"),b=o("ZZ/e"),a=o("CjQN"),c=o("Z4xi"),s=o("hnS/"),d=o("zA0m"),p=o("Onvx"),h=o("01F9"),g=o("wMzM"),k=o("JhVf"),m=o("S6gA"),f=o("fNyx"),v=function(){function l(l,n,o,u,t,r,i,b,a,c,s,d,p,h,g,k,m){this._socialShare=l,this._modalController=n,this.readarsService=t,this.reservedService=r,this.route=i,this.router=b,this.emailComposer=a,this.callNumber=c,this.availableService=d,this.sanitizer=p,this.barCodeScanner=h,this.base64ToGallery=g,this.file=k,this.fileOpener=m,this.value="This is my barcode secret data",this.qrData=null,this.createdCode=null,this.commentData={comment:"",rating:""},this.anyTextData={anytext:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.available=!1,this.panelOpenState=!1,this.dataReader=new FileReader,this.commentFormGroup=s.group({comment:["",[e.m.required]],rating:["",[e.m.required]]}),this.qrFormGroup=s.group({text:["",[e.m.required]]})}return l.prototype.ionViewWillEnter=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(r.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)}),l.availableService.isAvailable(l.book._id).subscribe(function(n){console.log(n),l.available=n.exists},function(l){return console.log(l)}),l.readarsService.getBookImage(l.book._id).subscribe(function(n){return l.url=n})},function(n){return l.errMess=n})},l.prototype.ngOnInit=function(){},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/tab1")},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.book._id,this.commentFormGroup.value).subscribe(function(n){l.book=n},function(n){return l.errMess=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.onValueChanged=function(l){},l.prototype.displayComments=function(){0!=this.book.comments.length&&(this.showComments=!0)},l.prototype.addComment=function(){this.addComments=!0,this.showComments=!0},l.prototype.reserveBook=function(){var l=this;console.log("inside reserveBook of BookdetailComponent.ts"),alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0}),this.ngOnInit()},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.scanCode=function(){},l.prototype.downloadQR=function(){},l.prototype.createBarcode=function(){var l=this;console.log("QR data",this.qrData),this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE,this.qrData).then(function(n){console.log(n),l.createdCode=n,l.capturedImage="data:image/jpeg;base64,"+l.createdCode.FILE_URI;var o=n.substring(n.lastIndexOf("/")+1),u=n.substring(0,n.lastIndexOf("/")+1);console.log("image name",o),console.log("image path",u),l.file.readAsDataURL(u,o).then(function(n){return l.capturedImage=n})},function(l){console.log("Error occured : "+l)})},l.prototype.scanBarcode=function(){var l=this;this.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(n){console.log("Barcode data",n),l.scannedData=n}).catch(function(l){console.log("Error",l)})},l.prototype.share=function(){},l.prototype.openViewcommentsModal=function(l){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){return[2]})})},l.prototype.openModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){return[2]})})},l}(),y=function(){return function(){}}(),C=o("oBZk"),I=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeQRModal=function(){this._modalController.dismiss()},l}(),w=u.nb({encapsulation:0,styles:[[""]],data:{}});function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,C.jb,C.q)),u.ob(1,49152,null,0,b.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,C.Lb,C.S)),u.ob(3,49152,null,0,b.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,C.Kb,C.R)),u.ob(5,49152,null,0,b.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QrcodeActivities"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,C.fb,C.m)),u.ob(8,49152,null,0,b.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,C.ib,C.n)),u.ob(10,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeQRModal()&&u),u},C.gb,C.o)),u.ob(12,49152,null,0,b.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,C.kb,C.r)),u.ob(14,49152,null,0,b.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function B(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-qrcode-activities",[],null,null,null,x,w)),u.ob(1,114688,null,0,I,[b.Eb],null,null)],function(l,n){l(n,1,0)},null)}var F=u.lb("app-qrcode-activities",I,B,{},{},[]),S=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),O=u.nb({encapsulation:0,styles:[[""]],data:{}});function D(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,C.jb,C.q)),u.ob(1,49152,null,0,b.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,C.Lb,C.S)),u.ob(3,49152,null,0,b.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,C.Kb,C.R)),u.ob(5,49152,null,0,b.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Readers' comments on this book"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,C.fb,C.m)),u.ob(8,49152,null,0,b.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,C.ib,C.n)),u.ob(10,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},C.gb,C.o)),u.ob(12,49152,null,0,b.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,C.kb,C.r)),u.ob(14,49152,null,0,b.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function _(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,D,O)),u.ob(1,114688,null,0,S,[b.Eb],null,null)],function(l,n){l(n,1,0)},null)}var E=u.lb("app-viewcomments",S,_,{},{},[]),R=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),j=u.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function M(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,C.fb,C.m)),u.ob(1,49152,null,0,b.t,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,C.ib,C.n)),u.ob(5,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},C.gb,C.o)),u.ob(7,49152,null,0,b.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,C.kb,C.r)),u.ob(9,49152,null,0,b.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function P(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,M,j)),u.ob(1,114688,null,0,R,[b.Gb,b.Eb],null,null)],function(l,n){l(n,1,0)},null)}var A=u.lb("app-bookvideo",R,P,{},{},[]),L=o("pMnS"),q=o("Ip0R"),T=o("ZYCi"),N=o("ZYjt"),z=u.nb({encapsulation:0,styles:[[".book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.comment-card[_ngcontent-%COMP%]{width:30vw;height:30vh;border:1px solid green;margin:10px auto}"]],data:{}});function H(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Scanned Code Text : "])),(l()(),u.pb(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.pb(5,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Scanned Code Format : "])),(l()(),u.pb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(8,null,["",""]))],null,function(l,n){var o=n.component;l(n,4,0,o.scannedData.text),l(n,8,0,o.scannedData.format)})}function G(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,4,"ion-card-content",[["style","color: red;"]],null,null,null,C.Y,C.g)),u.ob(1,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.Fb(-1,0,[" is currently not available ! Please check later.. "]))],null,function(l,n){var o=n.component;l(n,3,0,null==o.book?null:o.book.bookname)})}function Y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,19,"ion-card-content",[["style","color: green;"]],null,null,null,C.Y,C.g)),u.ob(1,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.Fb(-1,0,[" is available. Click "])),(l()(),u.pb(5,0,null,0,3,"ion-chip",[["color","success"]],null,null,null,C.db,C.k)),u.ob(6,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(7,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/lock-closed.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.reserveBook()&&u),u},C.kb,C.r)),u.ob(8,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" to reserve ! and "])),(l()(),u.pb(10,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,C.db,C.k)),u.ob(11,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(12,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/mail.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.emailOwner()&&u),u},C.kb,C.r)),u.ob(13,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" or "])),(l()(),u.pb(15,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,C.db,C.k)),u.ob(16,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(17,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/call.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.callOwner()&&u),u},C.kb,C.r)),u.ob(18,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" the book owner to collect the book.. "]))],function(l,n){l(n,6,0,"success"),l(n,8,0,"../assets/icon/lock-closed.svg"),l(n,11,0,"primary"),l(n,13,0,"../assets/icon/mail.svg"),l(n,16,0,"primary"),l(n,18,0,"../assets/icon/call.svg")},function(l,n){var o=n.component;l(n,3,0,null==o.book?null:o.book.bookname)})}function U(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,18,"ion-slide",[],null,null,null,C.Cb,C.J)),u.ob(1,49152,null,0,b.ob,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,16,"ion-card",[["class","comment-card"]],null,null,null,C.cb,C.f)),u.ob(3,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,14,"ion-label",[["color","primary"]],null,null,null,C.tb,C.A)),u.ob(5,49152,null,0,b.M,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,0,5,"ion-chip",[["color","primary"]],null,null,null,C.db,C.k)),u.ob(9,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(10,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(11,null,[" "," "])),(l()(),u.pb(12,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,C.kb,C.r)),u.ob(13,49152,null,0,b.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(14,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.pb(15,0,null,0,3,"ion-chip",[["color","tertiary"]],null,null,null,C.db,C.k)),u.ob(16,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(17,0,[""," "," (",") "])),u.Bb(18,1)],function(l,n){l(n,5,0,"primary"),l(n,9,0,"primary"),l(n,13,0,"warning","../assets/icon/star.svg"),l(n,16,0,"tertiary")},function(l,n){l(n,7,0,n.context.$implicit.comment),l(n,11,0,n.context.$implicit.rating);var o=n.context.$implicit.author.firstname,t=n.context.$implicit.author.lastname,e=u.Gb(n,17,2,l(n,18,0,u.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,17,0,o,t,e)})}function Q(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-card-content",[],null,null,null,C.Y,C.g)),u.ob(1,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,C.Z,C.h)),u.ob(3,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[["color",""]],null,null,null,C.bb,C.j)),u.ob(5,49152,null,0,b.p,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(-1,0,[" What are readers of this book saying .. ? "])),(l()(),u.pb(7,0,null,0,3,"ion-slides",[],null,null,null,C.Db,C.K)),u.ob(8,49152,null,0,b.pb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,U)),u.ob(10,278528,null,0,q.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,5,0,""),l(n,10,0,o.book.comments)},null)}function Z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,35,"ion-card",[["padding",""]],null,null,null,C.cb,C.f)),u.ob(1,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,2,"ion-card-title",[],null,null,null,C.bb,C.j)),u.ob(3,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Post your rating, review on this book "])),(l()(),u.pb(5,0,null,0,30,"ion-card-content",[],null,null,null,C.Y,C.g)),u.ob(6,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var t=!0;return"submit"===n&&(t=!1!==u.yb(l,9).onSubmit(o)&&t),"reset"===n&&(t=!1!==u.yb(l,9).onReset()&&t),t},null,null)),u.ob(8,16384,null,0,e.o,[],null,null),u.ob(9,540672,[[1,4],["cform",4]],0,e.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,e.a,null,[e.e]),u.ob(11,16384,null,0,e.j,[[4,e.a]],null,null),(l()(),u.pb(12,0,null,null,8,"ion-item",[],null,null,null,C.sb,C.w)),u.ob(13,49152,null,0,b.G,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,15)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,15)._handleInputEvent(o.target.value)&&t),t},C.Ib,C.P)),u.ob(15,16384,null,0,b.Lb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[b.Lb]),u.ob(17,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(19,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(20,49152,null,0,b.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(21,0,null,null,11,"ion-item",[],null,null,null,C.sb,C.w)),u.ob(22,49152,null,0,b.G,[u.h,u.k],null,null),(l()(),u.pb(23,0,null,0,2,"ion-text",[],null,null,null,C.Hb,C.O)),u.ob(24,49152,null,0,b.vb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your Rating"])),(l()(),u.pb(26,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,27)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,27)._handleChangeEvent(o.target.value)&&t),t},C.vb,C.C)),u.ob(27,16384,null,0,b.Kb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[b.Kb]),u.ob(29,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(31,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(32,49152,null,0,b.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),u.pb(33,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u},C.W,C.d)),u.ob(34,49152,null,0,b.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Submit Comment"]))],function(l,n){var o=n.component;l(n,9,0,o.commentFormGroup),l(n,17,0,"comment"),l(n,20,0,"Your Comments"),l(n,29,0,"rating"),l(n,32,0,"rating","1","5","true","","5"),l(n,34,0,o.commentFormGroup.invalid,"full")},function(l,n){l(n,7,0,u.yb(n,11).ngClassUntouched,u.yb(n,11).ngClassTouched,u.yb(n,11).ngClassPristine,u.yb(n,11).ngClassDirty,u.yb(n,11).ngClassValid,u.yb(n,11).ngClassInvalid,u.yb(n,11).ngClassPending),l(n,14,0,u.yb(n,19).ngClassUntouched,u.yb(n,19).ngClassTouched,u.yb(n,19).ngClassPristine,u.yb(n,19).ngClassDirty,u.yb(n,19).ngClassValid,u.yb(n,19).ngClassInvalid,u.yb(n,19).ngClassPending),l(n,26,0,u.yb(n,31).ngClassUntouched,u.yb(n,31).ngClassTouched,u.yb(n,31).ngClassPristine,u.yb(n,31).ngClassDirty,u.yb(n,31).ngClassValid,u.yb(n,31).ngClassInvalid,u.yb(n,31).ngClassPending)})}function J(l){return u.Hb(0,[u.Ab(0,q.d,[u.u]),u.Db(671088640,1,{commentFormDirective:0}),u.Db(402653184,2,{qrFormDirective:0}),(l()(),u.pb(3,0,null,null,10,"ion-header",[],null,null,null,C.jb,C.q)),u.ob(4,49152,null,0,b.A,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,8,"ion-toolbar",[],null,null,null,C.Lb,C.S)),u.ob(6,49152,null,0,b.Ab,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,C.X,C.e)),u.ob(8,49152,null,0,b.k,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==u.yb(l,11).onClick(o)&&t),t},C.V,C.c)),u.ob(10,49152,null,0,b.f,[u.h,u.k],null,null),u.ob(11,16384,null,0,b.g,[[2,b.gb],b.Fb],null,null),(l()(),u.pb(12,0,null,0,1,"ion-title",[],null,null,null,C.Kb,C.R)),u.ob(13,49152,null,0,b.yb,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,null,104,"ion-content",[],null,null,null,C.fb,C.m)),u.ob(15,49152,null,0,b.t,[u.h,u.k],null,null),(l()(),u.pb(16,0,null,0,16,"ion-card",[],null,null,null,C.cb,C.f)),u.ob(17,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(18,0,null,0,7,"ion-card-header",[],null,null,null,C.Z,C.h)),u.ob(19,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(20,0,null,0,2,"ion-card-title",[],null,null,null,C.bb,C.j)),u.ob(21,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Barcode/QR Scanning"])),(l()(),u.pb(23,0,null,0,2,"ion-card-subtitle",[],null,null,null,C.ab,C.i)),u.ob(24,49152,null,0,b.o,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["In Angular Cordova Apps"])),(l()(),u.pb(26,0,null,0,6,"ion-card-content",[],null,null,null,C.Y,C.g)),u.ob(27,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(28,0,null,0,2,"ion-button",[["color","success"],["expand","full"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.scanBarcode()&&u),u},C.W,C.d)),u.ob(29,49152,null,0,b.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Scan a Code"])),(l()(),u.gb(16777216,null,0,1,null,H)),u.ob(32,16384,null,0,q.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(33,0,null,0,25,"ion-card",[],null,null,null,C.cb,C.f)),u.ob(34,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(35,0,null,0,7,"ion-card-header",[],null,null,null,C.Z,C.h)),u.ob(36,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(37,0,null,0,2,"ion-card-title",[],null,null,null,C.bb,C.j)),u.ob(38,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QR Code Creation"])),(l()(),u.pb(40,0,null,0,2,"ion-card-subtitle",[],null,null,null,C.ab,C.i)),u.ob(41,49152,null,0,b.o,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["In Angular Cordova Apps"])),(l()(),u.pb(43,0,null,0,15,"ion-card-content",[],null,null,null,C.Y,C.g)),u.ob(44,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(45,0,null,0,6,"ion-input",[["placeholder","Enter any text"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==u.yb(l,46)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,46)._handleInputEvent(o.target.value)&&t),"ngModelChange"===n&&(t=!1!==(e.qrData=o)&&t),t},C.ob,C.v)),u.ob(46,16384,null,0,b.Lb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[b.Lb]),u.ob(48,671744,null,0,e.k,[[8,null],[8,null],[8,null],[6,e.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,e.h,null,[e.k]),u.ob(50,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(51,49152,null,0,b.F,[u.h,u.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),u.pb(52,0,null,0,2,"ion-button",[["color","success"],["expand","full"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.createBarcode()&&u),u},C.W,C.d)),u.ob(53,49152,null,0,b.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Create a QR code"])),(l()(),u.pb(55,0,null,0,3,"ion-card",[],null,null,null,C.cb,C.f)),u.ob(56,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(57,0,null,0,1,"ion-img",[["height","100"]],null,null,null,C.lb,C.s)),u.ob(58,49152,null,0,b.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(59,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.refreshBookList(o)&&u),u},C.xb,C.D)),u.ob(60,49152,null,0,b.bb,[u.h,u.k],null,null),(l()(),u.pb(61,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,C.wb,C.E)),u.ob(62,49152,null,0,b.cb,[u.h,u.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),u.pb(63,0,null,0,49,"ion-card",[],null,null,null,C.cb,C.f)),u.ob(64,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(65,0,null,0,6,"ion-card-header",[],null,null,null,C.Z,C.h)),u.ob(66,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(67,0,null,0,2,"ion-card-title",[],null,null,null,C.bb,C.j)),u.ob(68,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(69,0,[" "," "])),(l()(),u.pb(70,0,null,0,1,"ion-img",[["class","book-image"]],null,null,null,C.lb,C.s)),u.ob(71,49152,null,0,b.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(72,0,null,0,18,"ion-card-content",[["style","color: green;"]],null,null,null,C.Y,C.g)),u.ob(73,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(74,0,null,0,4,"ion-chip",[["color","primary"]],null,null,null,C.db,C.k)),u.ob(75,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(76,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Book Description:"])),(l()(),u.Fb(78,0,[" ",""])),(l()(),u.pb(79,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.pb(80,0,null,0,4,"ion-chip",[["color","primary"]],null,null,null,C.db,C.k)),u.ob(81,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(82,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Book Owner:"])),(l()(),u.Fb(84,0,[" "," "," "])),(l()(),u.pb(85,0,null,0,2,"ion-chip",[["color",""]],null,null,null,C.db,C.k)),u.ob(86,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(87,0,[" Owner's rating: "," "])),(l()(),u.pb(88,0,null,0,2,"ion-chip",[["color",""]],null,null,null,C.db,C.k)),u.ob(89,49152,null,0,b.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(90,0,[" Owner's address: "," "])),(l()(),u.pb(91,0,null,0,9,"ion-row",[],null,null,null,C.yb,C.F)),u.ob(92,49152,null,0,b.hb,[u.h,u.k],null,null),(l()(),u.pb(93,0,null,0,7,"ion-col",[],null,null,null,C.eb,C.l)),u.ob(94,49152,null,0,b.s,[u.h,u.k],null,null),(l()(),u.pb(95,0,null,0,5,"ion-card",[["no-margin",""]],null,null,null,C.cb,C.f)),u.ob(96,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,G)),u.ob(98,16384,null,0,q.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,Y)),u.ob(100,16384,null,0,q.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(101,0,null,0,11,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,C.ib,C.n)),u.ob(102,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(103,0,null,0,3,"ion-fab-button",[],null,null,null,C.gb,C.o)),u.ob(104,49152,null,0,b.w,[u.h,u.k],null,null),(l()(),u.pb(105,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-down.svg"]],null,null,null,C.kb,C.r)),u.ob(106,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(107,0,null,0,5,"ion-fab-list",[["side","bottom"]],null,null,null,C.hb,C.p)),u.ob(108,49152,null,0,b.x,[u.h,u.k],{side:[0,"side"]},null),(l()(),u.pb(109,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.addComment()&&u),u},C.gb,C.o)),u.ob(110,49152,null,0,b.w,[u.h,u.k],null,null),(l()(),u.pb(111,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/create.svg"]],null,null,null,C.kb,C.r)),u.ob(112,49152,null,0,b.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(113,0,null,0,3,"ion-card",[["expand","full"]],null,null,null,C.cb,C.f)),u.ob(114,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,Q)),u.ob(116,16384,null,0,q.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,Z)),u.ob(118,16384,null,0,q.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,29,0,"success","full"),l(n,32,0,o.scannedData),l(n,48,0,o.qrData),l(n,51,0,"Enter any text","text"),l(n,53,0,"success","full"),l(n,58,0,o.capturedImage),l(n,62,0,"pull for update","...updating"),l(n,71,0,o.url),l(n,75,0,"primary"),l(n,81,0,"primary"),l(n,86,0,""),l(n,89,0,""),l(n,98,0,!o.available),l(n,100,0,o.available),l(n,102,0,"end","top"),l(n,106,0,"../assets/icon/caret-down.svg"),l(n,108,0,"bottom"),l(n,112,0,"primary","../assets/icon/create.svg"),l(n,116,0,o.book),l(n,118,0,o.addComments)},function(l,n){var o=n.component;l(n,45,0,u.yb(n,50).ngClassUntouched,u.yb(n,50).ngClassTouched,u.yb(n,50).ngClassPristine,u.yb(n,50).ngClassDirty,u.yb(n,50).ngClassValid,u.yb(n,50).ngClassInvalid,u.yb(n,50).ngClassPending),l(n,69,0,null==o.book?null:o.book.bookname),l(n,78,0,null==o.book?null:o.book.bookdescription),l(n,84,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,87,0,null==o.book?null:o.book.bookrating),l(n,90,0,null==o.book?null:o.book.bookowneraddress)})}function V(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,J,z)),u.ob(1,114688,null,0,v,[a.a,b.Eb,i.a,T.a,k.a,m.a,T.a,T.m,c.a,s.a,e.b,f.a,N.c,d.a,p.a,h.a,g.a],null,null)],function(l,n){l(n,1,0)},null)}var K=u.lb("app-bookdetail",v,V,{},{},[]),W=function(){return function(){}}(),$=function(){return function(){}}(),X=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return ll});var ll=u.mb(y,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[F,E,A,L.a,K]],[3,u.j],u.x]),u.wb(4608,q.l,q.k,[u.u,[2,q.r]]),u.wb(4608,e.p,e.p,[]),u.wb(4608,b.b,b.b,[u.z,u.g]),u.wb(4608,b.Eb,b.Eb,[b.b,u.j,u.q,q.c]),u.wb(4608,b.Ib,b.Ib,[b.b,u.j,u.q,q.c]),u.wb(4608,e.b,e.b,[]),u.wb(1073742336,q.b,q.b,[]),u.wb(1073742336,e.n,e.n,[]),u.wb(1073742336,e.f,e.f,[]),u.wb(1073742336,b.Cb,b.Cb,[]),u.wb(1073742336,W,W,[]),u.wb(1073742336,$,$,[]),u.wb(1073742336,X,X,[]),u.wb(1073742336,e.l,e.l,[]),u.wb(1073742336,T.o,T.o,[[2,T.u],[2,T.m]]),u.wb(1073742336,y,y,[]),u.wb(1024,T.k,function(){return[[{path:"",component:v}]]},[])])})}}]);