(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QJAh:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),e=o("mrSG"),t=o("gIcY"),r=o("15JJ"),i=o("Yttj"),a=o("lGQG"),b=o("5uSc"),c=o("ZZ/e"),s=o("CjQN"),p=o("Z4xi"),d=o("hnS/"),h=o("zA0m"),g=o("Onvx"),m=o("01F9"),k=o("wMzM"),f=o("jcOq"),v=o("JhVf"),y=o("S6gA"),C=o("fNyx"),w=o("iWj2"),I=function(){function l(l,n,o,u,e,r,i,a,b,c,s,p,d,h,g,m,k,f,v,y,C){this._socialShare=l,this._modalController=n,this.readarsService=e,this.reservedService=r,this.route=i,this.router=a,this.emailComposer=b,this.callNumber=c,this.availableService=p,this.sanitizer=d,this.barCodeScanner=h,this.base64ToGallery=g,this.file=m,this.filePath=k,this.fileOpener=f,this.base64=v,this.webview=y,this.authService=C,this.username=void 0,this.qrData=null,this.commentData={comment:"",rating:""},this.anyTextData={anytext:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.available=!1,this.panelOpenState=!1,this.dataReader=new FileReader,this.commentFormGroup=s.group({comment:["",[t.m.required]],rating:["",[t.m.required]]}),this.qrFormGroup=s.group({text:["",[t.m.required]]})}return l.prototype.ionViewWillEnter=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(r.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)}),l.availableService.isAvailable(l.book._id).subscribe(function(n){console.log(n),l.available=n.exists},function(l){return console.log(l)}),l.readarsService.getBookImage(l.book._id).subscribe(function(n){return l.url=n})},function(n){return l.errMess=n})},l.prototype.ngOnInit=function(){var l=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(n){console.log(n),l.username=n})},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/tab1")},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.book._id,this.commentFormGroup.value).subscribe(function(n){l.book=n},function(n){return l.errMess=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.onValueChanged=function(l){},l.prototype.displayComments=function(){0!=this.book.comments.length&&(this.showComments=!0)},l.prototype.addComment=function(){this.addComments=!0,this.showComments=!0},l.prototype.reserveBook=function(){var l=this;console.log("inside reserveBook of BookdetailComponent.ts"),alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0}),this.ngOnInit()},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.createBarcode=function(){var l=this;console.log("QR data",this.qrData),this.barCodeScanner.encode(this.barCodeScanner.Encode.TEXT_TYPE,this.qrData).then(function(n){console.log(n),l.createdCode=n;var o=l.createdCode.file;console.log(o);var u=o.substring(o.lastIndexOf("/")+1);console.log(u);var e=l.pathForImage(o);console.log(e),l.capturedImagePath=e,l.uploadQRCode(o)},function(l){console.log("Error occured : "+l)})},l.prototype.pathForImage=function(l){return null===l?"":this.webview.convertFileSrc(l)},l.prototype.createFileName=function(){return this.book.bookowner+"_"+this.username+".jpg"},l.prototype.uploadQRCode=function(l){console.log("inside uploadQRcode"),console.log(l),this.file.resolveLocalFilesystemUrl(l).then(function(l){console.log("inside resolveLocalFilesystemUrl then block",l)}).catch(function(l){console.log("Error while reading file in the function uploadQRCode")})},l.prototype.readFile=function(l){var n=this;console.log("inside readFile");var o=new FileReader;console.log("file type",l),console.log("file type",l.type),console.log("file type",l.name),o.onloadend=function(){var u=new FormData,e=new Blob([o.result],{type:l.type});console.log("image blob",e),n.uploadData.append("qrImgFile",e,l.name),console.log(u)},o.readAsArrayBuffer(l)},l.prototype.scanBarcode=function(){var l=this;this.barCodeScanner.scan({preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"EAN_13,EAN_8,QR_CODE,PDF_417 ",orientation:"portrait"}).then(function(n){console.log("Barcode data",n),l.scannedData=n}).catch(function(l){console.log("Error",l)})},l.prototype.share=function(){},l.prototype.openViewcommentsModal=function(l){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return[2]})})},l.prototype.openModal=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(l){return[2]})})},l}(),F=function(){return function(){}}(),x=o("oBZk"),B=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeQRModal=function(){this._modalController.dismiss()},l}(),S=u.nb({encapsulation:0,styles:[[""]],data:{}});function O(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,x.jb,x.q)),u.ob(1,49152,null,0,c.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,x.Lb,x.S)),u.ob(3,49152,null,0,c.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,x.Kb,x.R)),u.ob(5,49152,null,0,c.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QrcodeActivities"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,x.fb,x.m)),u.ob(8,49152,null,0,c.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,x.ib,x.n)),u.ob(10,49152,null,0,c.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeQRModal()&&u),u},x.gb,x.o)),u.ob(12,49152,null,0,c.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,x.kb,x.r)),u.ob(14,49152,null,0,c.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function D(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-qrcode-activities",[],null,null,null,O,S)),u.ob(1,114688,null,0,B,[c.Eb],null,null)],function(l,n){l(n,1,0)},null)}var _=u.lb("app-qrcode-activities",B,D,{},{},[]),j=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),R=u.nb({encapsulation:0,styles:[[""]],data:{}});function E(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,x.jb,x.q)),u.ob(1,49152,null,0,c.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,x.Lb,x.S)),u.ob(3,49152,null,0,c.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,x.Kb,x.R)),u.ob(5,49152,null,0,c.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Readers' comments on this book"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,x.fb,x.m)),u.ob(8,49152,null,0,c.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,x.ib,x.n)),u.ob(10,49152,null,0,c.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},x.gb,x.o)),u.ob(12,49152,null,0,c.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,x.kb,x.r)),u.ob(14,49152,null,0,c.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function P(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,E,R)),u.ob(1,114688,null,0,j,[c.Eb],null,null)],function(l,n){l(n,1,0)},null)}var A=u.lb("app-viewcomments",j,P,{},{},[]),M=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),L=u.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function q(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,x.fb,x.m)),u.ob(1,49152,null,0,c.t,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,x.ib,x.n)),u.ob(5,49152,null,0,c.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},x.gb,x.o)),u.ob(7,49152,null,0,c.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,x.kb,x.r)),u.ob(9,49152,null,0,c.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function N(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,q,L)),u.ob(1,114688,null,0,M,[c.Gb,c.Eb],null,null)],function(l,n){l(n,1,0)},null)}var T=u.lb("app-bookvideo",M,N,{},{},[]),H=o("pMnS"),z=o("Ip0R"),G=o("ZYCi"),Q=o("ZYjt"),Y=u.nb({encapsulation:0,styles:[[".book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.comment-card[_ngcontent-%COMP%]{width:30vw;height:30vh;border:1px solid green;margin:10px auto}"]],data:{}});function U(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Scanned Code Text : "])),(l()(),u.pb(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.pb(5,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Scanned Code Format : "])),(l()(),u.pb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(8,null,["",""]))],null,function(l,n){var o=n.component;l(n,4,0,o.scannedData.text),l(n,8,0,o.scannedData.format)})}function Z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Created Code Image : "])),(l()(),u.pb(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(4,null,["",""])),(l()(),u.pb(5,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,[" Created Code Format : "])),(l()(),u.pb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Fb(8,null,["",""]))],null,function(l,n){var o=n.component;l(n,4,0,o.createdCode.file),l(n,8,0,o.createdCode.format)})}function J(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,4,"ion-card-content",[["style","color: red;"]],null,null,null,x.Y,x.g)),u.ob(1,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.Fb(-1,0,[" is currently not available ! Please check later.. "]))],null,function(l,n){var o=n.component;l(n,3,0,null==o.book?null:o.book.bookname)})}function V(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,19,"ion-card-content",[["style","color: green;"]],null,null,null,x.Y,x.g)),u.ob(1,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(3,null,["",""])),(l()(),u.Fb(-1,0,[" is available. Click "])),(l()(),u.pb(5,0,null,0,3,"ion-chip",[["color","success"]],null,null,null,x.db,x.k)),u.ob(6,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(7,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/lock-closed.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.reserveBook()&&u),u},x.kb,x.r)),u.ob(8,49152,null,0,c.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" to reserve ! and "])),(l()(),u.pb(10,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,x.db,x.k)),u.ob(11,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(12,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/mail.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.emailOwner()&&u),u},x.kb,x.r)),u.ob(13,49152,null,0,c.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" or "])),(l()(),u.pb(15,0,null,0,3,"ion-chip",[["color","primary"]],null,null,null,x.db,x.k)),u.ob(16,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(17,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/call.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.callOwner()&&u),u},x.kb,x.r)),u.ob(18,49152,null,0,c.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" the book owner to collect the book.. "]))],function(l,n){l(n,6,0,"success"),l(n,8,0,"../assets/icon/lock-closed.svg"),l(n,11,0,"primary"),l(n,13,0,"../assets/icon/mail.svg"),l(n,16,0,"primary"),l(n,18,0,"../assets/icon/call.svg")},function(l,n){var o=n.component;l(n,3,0,null==o.book?null:o.book.bookname)})}function K(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,18,"ion-slide",[],null,null,null,x.Cb,x.J)),u.ob(1,49152,null,0,c.ob,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,16,"ion-card",[["class","comment-card"]],null,null,null,x.cb,x.f)),u.ob(3,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,14,"ion-label",[["color","primary"]],null,null,null,x.tb,x.A)),u.ob(5,49152,null,0,c.M,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(6,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,0,5,"ion-chip",[["color","primary"]],null,null,null,x.db,x.k)),u.ob(9,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(10,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(11,null,[" "," "])),(l()(),u.pb(12,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/star.svg"]],null,null,null,x.kb,x.r)),u.ob(13,49152,null,0,c.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(14,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.pb(15,0,null,0,3,"ion-chip",[["color","tertiary"]],null,null,null,x.db,x.k)),u.ob(16,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(17,0,[""," "," (",") "])),u.Bb(18,1)],function(l,n){l(n,5,0,"primary"),l(n,9,0,"primary"),l(n,13,0,"warning","../assets/icon/star.svg"),l(n,16,0,"tertiary")},function(l,n){l(n,7,0,n.context.$implicit.comment),l(n,11,0,n.context.$implicit.rating);var o=n.context.$implicit.author.firstname,e=n.context.$implicit.author.lastname,t=u.Gb(n,17,2,l(n,18,0,u.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,17,0,o,e,t)})}function W(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-card-content",[],null,null,null,x.Y,x.g)),u.ob(1,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,x.Z,x.h)),u.ob(3,49152,null,0,c.n,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[["color",""]],null,null,null,x.bb,x.j)),u.ob(5,49152,null,0,c.p,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(-1,0,[" What are readers of this book saying .. ? "])),(l()(),u.pb(7,0,null,0,3,"ion-slides",[],null,null,null,x.Db,x.K)),u.ob(8,49152,null,0,c.pb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,K)),u.ob(10,278528,null,0,z.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,5,0,""),l(n,10,0,o.book.comments)},null)}function $(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,35,"ion-card",[["padding",""]],null,null,null,x.cb,x.f)),u.ob(1,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,2,"ion-card-title",[],null,null,null,x.bb,x.j)),u.ob(3,49152,null,0,c.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Post your rating, review on this book "])),(l()(),u.pb(5,0,null,0,30,"ion-card-content",[],null,null,null,x.Y,x.g)),u.ob(6,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var e=!0;return"submit"===n&&(e=!1!==u.yb(l,9).onSubmit(o)&&e),"reset"===n&&(e=!1!==u.yb(l,9).onReset()&&e),e},null,null)),u.ob(8,16384,null,0,t.o,[],null,null),u.ob(9,540672,[[1,4],["cform",4]],0,t.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,t.a,null,[t.e]),u.ob(11,16384,null,0,t.j,[[4,t.a]],null,null),(l()(),u.pb(12,0,null,null,8,"ion-item",[],null,null,null,x.sb,x.w)),u.ob(13,49152,null,0,c.G,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0;return"ionBlur"===n&&(e=!1!==u.yb(l,15)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,15)._handleInputEvent(o.target.value)&&e),e},x.Ib,x.P)),u.ob(15,16384,null,0,c.Lb,[u.k],null,null),u.Cb(1024,null,t.g,function(l){return[l]},[c.Lb]),u.ob(17,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),u.Cb(2048,null,t.h,null,[t.d]),u.ob(19,16384,null,0,t.i,[[4,t.h]],null,null),u.ob(20,49152,null,0,c.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(21,0,null,null,11,"ion-item",[],null,null,null,x.sb,x.w)),u.ob(22,49152,null,0,c.G,[u.h,u.k],null,null),(l()(),u.pb(23,0,null,0,2,"ion-text",[],null,null,null,x.Hb,x.O)),u.ob(24,49152,null,0,c.vb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your Rating"])),(l()(),u.pb(26,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0;return"ionBlur"===n&&(e=!1!==u.yb(l,27)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,27)._handleChangeEvent(o.target.value)&&e),e},x.vb,x.C)),u.ob(27,16384,null,0,c.Kb,[u.k],null,null),u.Cb(1024,null,t.g,function(l){return[l]},[c.Kb]),u.ob(29,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.g],[2,t.q]],{name:[0,"name"]},null),u.Cb(2048,null,t.h,null,[t.d]),u.ob(31,16384,null,0,t.i,[[4,t.h]],null,null),u.ob(32,49152,null,0,c.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),u.pb(33,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u},x.W,x.d)),u.ob(34,49152,null,0,c.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Submit Comment"]))],function(l,n){var o=n.component;l(n,9,0,o.commentFormGroup),l(n,17,0,"comment"),l(n,20,0,"Your Comments"),l(n,29,0,"rating"),l(n,32,0,"rating","1","5","true","","5"),l(n,34,0,o.commentFormGroup.invalid,"full")},function(l,n){l(n,7,0,u.yb(n,11).ngClassUntouched,u.yb(n,11).ngClassTouched,u.yb(n,11).ngClassPristine,u.yb(n,11).ngClassDirty,u.yb(n,11).ngClassValid,u.yb(n,11).ngClassInvalid,u.yb(n,11).ngClassPending),l(n,14,0,u.yb(n,19).ngClassUntouched,u.yb(n,19).ngClassTouched,u.yb(n,19).ngClassPristine,u.yb(n,19).ngClassDirty,u.yb(n,19).ngClassValid,u.yb(n,19).ngClassInvalid,u.yb(n,19).ngClassPending),l(n,26,0,u.yb(n,31).ngClassUntouched,u.yb(n,31).ngClassTouched,u.yb(n,31).ngClassPristine,u.yb(n,31).ngClassDirty,u.yb(n,31).ngClassValid,u.yb(n,31).ngClassInvalid,u.yb(n,31).ngClassPending)})}function X(l){return u.Hb(0,[u.Ab(0,z.d,[u.u]),u.Db(671088640,1,{commentFormDirective:0}),u.Db(402653184,2,{qrFormDirective:0}),(l()(),u.pb(3,0,null,null,10,"ion-header",[],null,null,null,x.jb,x.q)),u.ob(4,49152,null,0,c.A,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,8,"ion-toolbar",[],null,null,null,x.Lb,x.S)),u.ob(6,49152,null,0,c.Ab,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,x.X,x.e)),u.ob(8,49152,null,0,c.k,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==u.yb(l,11).onClick(o)&&e),e},x.V,x.c)),u.ob(10,49152,null,0,c.f,[u.h,u.k],null,null),u.ob(11,16384,null,0,c.g,[[2,c.gb],c.Fb],null,null),(l()(),u.pb(12,0,null,0,1,"ion-title",[],null,null,null,x.Kb,x.R)),u.ob(13,49152,null,0,c.yb,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,null,106,"ion-content",[],null,null,null,x.fb,x.m)),u.ob(15,49152,null,0,c.t,[u.h,u.k],null,null),(l()(),u.pb(16,0,null,0,16,"ion-card",[],null,null,null,x.cb,x.f)),u.ob(17,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.pb(18,0,null,0,7,"ion-card-header",[],null,null,null,x.Z,x.h)),u.ob(19,49152,null,0,c.n,[u.h,u.k],null,null),(l()(),u.pb(20,0,null,0,2,"ion-card-title",[],null,null,null,x.bb,x.j)),u.ob(21,49152,null,0,c.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Barcode/QR Scanning"])),(l()(),u.pb(23,0,null,0,2,"ion-card-subtitle",[],null,null,null,x.ab,x.i)),u.ob(24,49152,null,0,c.o,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["In Angular Cordova Apps"])),(l()(),u.pb(26,0,null,0,6,"ion-card-content",[],null,null,null,x.Y,x.g)),u.ob(27,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(28,0,null,0,2,"ion-button",[["color","success"],["expand","full"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.scanBarcode()&&u),u},x.W,x.d)),u.ob(29,49152,null,0,c.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Scan a Code"])),(l()(),u.gb(16777216,null,0,1,null,U)),u.ob(32,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(33,0,null,0,27,"ion-card",[],null,null,null,x.cb,x.f)),u.ob(34,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.pb(35,0,null,0,7,"ion-card-header",[],null,null,null,x.Z,x.h)),u.ob(36,49152,null,0,c.n,[u.h,u.k],null,null),(l()(),u.pb(37,0,null,0,2,"ion-card-title",[],null,null,null,x.bb,x.j)),u.ob(38,49152,null,0,c.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["QR Code Creation"])),(l()(),u.pb(40,0,null,0,2,"ion-card-subtitle",[],null,null,null,x.ab,x.i)),u.ob(41,49152,null,0,c.o,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["In Angular Cordova Apps"])),(l()(),u.pb(43,0,null,0,17,"ion-card-content",[],null,null,null,x.Y,x.g)),u.ob(44,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(45,0,null,0,6,"ion-input",[["placeholder","Enter any text"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==u.yb(l,46)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.yb(l,46)._handleInputEvent(o.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.qrData=o)&&e),e},x.ob,x.v)),u.ob(46,16384,null,0,c.Lb,[u.k],null,null),u.Cb(1024,null,t.g,function(l){return[l]},[c.Lb]),u.ob(48,671744,null,0,t.k,[[8,null],[8,null],[8,null],[6,t.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,t.h,null,[t.k]),u.ob(50,16384,null,0,t.i,[[4,t.h]],null,null),u.ob(51,49152,null,0,c.F,[u.h,u.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),u.pb(52,0,null,0,2,"ion-button",[["color","success"],["expand","full"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.createBarcode()&&u),u},x.W,x.d)),u.ob(53,49152,null,0,c.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Create a QR code"])),(l()(),u.pb(55,0,null,0,5,"ion-card",[],null,null,null,x.cb,x.f)),u.ob(56,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,Z)),u.ob(58,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(59,0,null,0,1,"ion-img",[],null,null,null,x.lb,x.s)),u.ob(60,49152,null,0,c.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(61,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.refreshBookList(o)&&u),u},x.xb,x.D)),u.ob(62,49152,null,0,c.bb,[u.h,u.k],null,null),(l()(),u.pb(63,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,x.wb,x.E)),u.ob(64,49152,null,0,c.cb,[u.h,u.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),u.pb(65,0,null,0,49,"ion-card",[],null,null,null,x.cb,x.f)),u.ob(66,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.pb(67,0,null,0,6,"ion-card-header",[],null,null,null,x.Z,x.h)),u.ob(68,49152,null,0,c.n,[u.h,u.k],null,null),(l()(),u.pb(69,0,null,0,2,"ion-card-title",[],null,null,null,x.bb,x.j)),u.ob(70,49152,null,0,c.p,[u.h,u.k],null,null),(l()(),u.Fb(71,0,[" "," "])),(l()(),u.pb(72,0,null,0,1,"ion-img",[["class","book-image"]],null,null,null,x.lb,x.s)),u.ob(73,49152,null,0,c.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(74,0,null,0,18,"ion-card-content",[["style","color: green;"]],null,null,null,x.Y,x.g)),u.ob(75,49152,null,0,c.m,[u.h,u.k],null,null),(l()(),u.pb(76,0,null,0,4,"ion-chip",[["color","primary"]],null,null,null,x.db,x.k)),u.ob(77,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(78,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Book Description:"])),(l()(),u.Fb(80,0,[" ",""])),(l()(),u.pb(81,0,null,0,0,"p",[],null,null,null,null,null)),(l()(),u.pb(82,0,null,0,4,"ion-chip",[["color","primary"]],null,null,null,x.db,x.k)),u.ob(83,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(84,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Book Owner:"])),(l()(),u.Fb(86,0,[" "," "," "])),(l()(),u.pb(87,0,null,0,2,"ion-chip",[["color",""]],null,null,null,x.db,x.k)),u.ob(88,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(89,0,[" Owner's rating: "," "])),(l()(),u.pb(90,0,null,0,2,"ion-chip",[["color",""]],null,null,null,x.db,x.k)),u.ob(91,49152,null,0,c.r,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Fb(92,0,[" Owner's address: "," "])),(l()(),u.pb(93,0,null,0,9,"ion-row",[],null,null,null,x.yb,x.F)),u.ob(94,49152,null,0,c.hb,[u.h,u.k],null,null),(l()(),u.pb(95,0,null,0,7,"ion-col",[],null,null,null,x.eb,x.l)),u.ob(96,49152,null,0,c.s,[u.h,u.k],null,null),(l()(),u.pb(97,0,null,0,5,"ion-card",[["no-margin",""]],null,null,null,x.cb,x.f)),u.ob(98,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,J)),u.ob(100,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,V)),u.ob(102,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(103,0,null,0,11,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,x.ib,x.n)),u.ob(104,49152,null,0,c.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(105,0,null,0,3,"ion-fab-button",[],null,null,null,x.gb,x.o)),u.ob(106,49152,null,0,c.w,[u.h,u.k],null,null),(l()(),u.pb(107,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-down.svg"]],null,null,null,x.kb,x.r)),u.ob(108,49152,null,0,c.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(109,0,null,0,5,"ion-fab-list",[["side","bottom"]],null,null,null,x.hb,x.p)),u.ob(110,49152,null,0,c.x,[u.h,u.k],{side:[0,"side"]},null),(l()(),u.pb(111,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.addComment()&&u),u},x.gb,x.o)),u.ob(112,49152,null,0,c.w,[u.h,u.k],null,null),(l()(),u.pb(113,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/create.svg"]],null,null,null,x.kb,x.r)),u.ob(114,49152,null,0,c.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(115,0,null,0,3,"ion-card",[["expand","full"]],null,null,null,x.cb,x.f)),u.ob(116,49152,null,0,c.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,W)),u.ob(118,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,$)),u.ob(120,16384,null,0,z.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,29,0,"success","full"),l(n,32,0,o.scannedData),l(n,48,0,o.qrData),l(n,51,0,"Enter any text","text"),l(n,53,0,"success","full"),l(n,58,0,o.createdCode),l(n,60,0,o.capturedImagePath),l(n,64,0,"pull for update","...updating"),l(n,73,0,o.url),l(n,77,0,"primary"),l(n,83,0,"primary"),l(n,88,0,""),l(n,91,0,""),l(n,100,0,!o.available),l(n,102,0,o.available),l(n,104,0,"end","top"),l(n,108,0,"../assets/icon/caret-down.svg"),l(n,110,0,"bottom"),l(n,114,0,"primary","../assets/icon/create.svg"),l(n,118,0,o.book),l(n,120,0,o.addComments)},function(l,n){var o=n.component;l(n,45,0,u.yb(n,50).ngClassUntouched,u.yb(n,50).ngClassTouched,u.yb(n,50).ngClassPristine,u.yb(n,50).ngClassDirty,u.yb(n,50).ngClassValid,u.yb(n,50).ngClassInvalid,u.yb(n,50).ngClassPending),l(n,71,0,null==o.book?null:o.book.bookname),l(n,80,0,null==o.book?null:o.book.bookdescription),l(n,86,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,89,0,null==o.book?null:o.book.bookrating),l(n,92,0,null==o.book?null:o.book.bookowneraddress)})}function ll(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,X,Y)),u.ob(1,114688,null,0,I,[s.a,c.Eb,b.a,G.a,v.a,y.a,G.a,G.m,p.a,d.a,t.b,C.a,Q.c,h.a,g.a,m.a,w.a,k.a,f.a,i.a,a.a],null,null)],function(l,n){l(n,1,0)},null)}var nl=u.lb("app-bookdetail",I,ll,{},{},[]),ol=function(){return function(){}}(),ul=function(){return function(){}}(),el=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return tl});var tl=u.mb(F,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[_,A,T,H.a,nl]],[3,u.j],u.x]),u.wb(4608,z.l,z.k,[u.u,[2,z.r]]),u.wb(4608,t.p,t.p,[]),u.wb(4608,c.b,c.b,[u.z,u.g]),u.wb(4608,c.Eb,c.Eb,[c.b,u.j,u.q,z.c]),u.wb(4608,c.Ib,c.Ib,[c.b,u.j,u.q,z.c]),u.wb(4608,t.b,t.b,[]),u.wb(1073742336,z.b,z.b,[]),u.wb(1073742336,t.n,t.n,[]),u.wb(1073742336,t.f,t.f,[]),u.wb(1073742336,c.Cb,c.Cb,[]),u.wb(1073742336,ol,ol,[]),u.wb(1073742336,ul,ul,[]),u.wb(1073742336,el,el,[]),u.wb(1073742336,t.l,t.l,[]),u.wb(1073742336,G.o,G.o,[[2,G.u],[2,G.m]]),u.wb(1073742336,F,F,[]),u.wb(1024,G.k,function(){return[[{path:"",component:I}]]},[])])})}}]);