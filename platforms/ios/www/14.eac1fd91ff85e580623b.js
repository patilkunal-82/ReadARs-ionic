(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QJAh:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),t=o("mrSG"),e=o("gIcY"),i=o("15JJ"),r=o("5uSc"),b=o("ZZ/e"),s=o("CjQN"),a=o("Z4xi"),c=o("hnS/"),p=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),d=o("JhVf"),h=o("S6gA"),m=o("fNyx"),k=function(){function l(l,n,o,u,t,i,r,b,s,a,c,p,d){this._socialShare=l,this._modalController=n,this.readarsService=t,this.reservedService=i,this.route=r,this.router=b,this.emailComposer=s,this.callNumber=a,this.availableService=p,this.sanitizer=d,this.commentData={comment:"",rating:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.available=!1,this.panelOpenState=!1,this.dataReader=new FileReader,this.commentFormGroup=c.group({comment:["",[e.m.required]],rating:["",[e.m.required]]})}return l.prototype.ngOnInit=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(i.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)}),l.availableService.isAvailable(l.book._id).subscribe(function(n){console.log(n),l.available=n.exists},function(l){return console.log(l)}),l.readarsService.getBookImage(l.book._id).subscribe(function(n){return l.url=n})},function(n){return l.errMess=n})},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/tab1")},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.book._id,this.commentFormGroup.value).subscribe(function(n){return l.book=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.onValueChanged=function(l){},l.prototype.displayComments=function(){0!=this.book.comments.length&&(this.showComments=!0)},l.prototype.addComment=function(){this.addComments=!0},l.prototype.reserveBook=function(){var l=this;console.log("inside reserveBook of BookdetailComponent.ts"),alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0}),this.ngOnInit()},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.share=function(){},l.prototype.openViewcommentsModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:p})];case 1:return[2,l.sent().present()]}})})},l.prototype.openModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){return[2]})})},l}(),g=function(){return function(){}}(),f=o("oBZk"),v=u.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,f.fb,f.p)),u.ob(1,49152,null,0,b.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,f.Fb,f.P)),u.ob(3,49152,null,0,b.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,f.Eb,f.O)),u.ob(5,49152,null,0,b.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Readers' comments on this book"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,f.bb,f.l)),u.ob(8,49152,null,0,b.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,f.eb,f.m)),u.ob(10,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},f.cb,f.n)),u.ob(12,49152,null,0,b.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,f.gb,f.q)),u.ob(14,49152,null,0,b.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function C(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,y,v)),u.ob(1,114688,null,0,p,[b.Eb],null,null)],function(l,n){l(n,1,0)},null)}var I=u.lb("app-viewcomments",p,C,{},{},[]),w=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),B=u.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,f.bb,f.l)),u.ob(1,49152,null,0,b.t,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,f.eb,f.m)),u.ob(5,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},f.cb,f.n)),u.ob(7,49152,null,0,b.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,f.gb,f.q)),u.ob(9,49152,null,0,b.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function F(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,x,B)),u.ob(1,114688,null,0,w,[b.Gb,b.Eb],null,null)],function(l,n){l(n,1,0)},null)}var S=u.lb("app-bookvideo",w,F,{},{},[]),O=o("pMnS"),_=o("Ip0R"),P=o("ZYCi"),q=o("ZYjt"),N=u.nb({encapsulation:0,styles:[[".book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}"]],data:{}});function M(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,2,"ion-card-content",[["style","color: red;"]],null,null,null,f.V,f.g)),u.ob(1,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.Fb(2,0,[" "," is currently not available ! Please check later.. "]))],null,function(l,n){var o=n.component;l(n,2,0,null==o.book?null:o.book.bookname)})}function z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,12,"ion-card-content",[["style","color: green;"]],null,null,null,f.V,f.g)),u.ob(1,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.Fb(2,0,[" "," is available. Click "])),(l()(),u.pb(3,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/lock-closed.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.reserveBook()&&u),u},f.gb,f.q)),u.ob(4,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" to reserve ! "])),(l()(),u.pb(6,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),u.pb(7,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/mail.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.emailOwner()&&u),u},f.gb,f.q)),u.ob(8,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" or "])),(l()(),u.pb(10,0,null,0,1,"ion-icon",[["button",""],["src","../assets/icon/call.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.callOwner()&&u),u},f.gb,f.q)),u.ob(11,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(-1,0,[" the book owner "]))],function(l,n){l(n,4,0,"../assets/icon/lock-closed.svg"),l(n,8,0,"../assets/icon/mail.svg"),l(n,11,0,"../assets/icon/call.svg")},function(l,n){var o=n.component;l(n,2,0,null==o.book?null:o.book.bookname)})}function D(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,14,"ion-slide",[],null,null,null,f.xb,f.H)),u.ob(1,49152,null,0,b.ob,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,12,"ion-card",[],null,null,null,f.Y,f.f)),u.ob(3,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,10,"ion-label",[],null,null,null,f.ob,f.y)),u.ob(5,49152,null,0,b.M,[u.h,u.k],null,null),(l()(),u.pb(6,0,null,0,1,"h2",[["color","primary"]],null,null,null,null,null)),(l()(),u.Fb(7,null,["",""])),(l()(),u.pb(8,0,null,0,1,"p",[["color","primary"]],null,null,null,null,null)),(l()(),u.Fb(9,null,[""," Stars"])),(l()(),u.pb(10,0,null,0,1,"h3",[["color","secondary"]],null,null,null,null,null)),(l()(),u.Fb(11,null,["by - "," ",""])),(l()(),u.pb(12,0,null,0,2,"p",[["color","secondary"]],null,null,null,null,null)),(l()(),u.Fb(13,null,[" on - ",""])),u.Bb(14,1)],null,function(l,n){l(n,7,0,n.context.$implicit.comment),l(n,9,0,n.context.$implicit.rating),l(n,11,0,n.context.$implicit.author.firstname,n.context.$implicit.author.lastname);var o=u.Gb(n,13,0,l(n,14,0,u.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,13,0,o)})}function j(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-card",[],null,null,null,f.Y,f.f)),u.ob(1,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,f.W,f.h)),u.ob(3,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[],null,null,null,f.X,f.i)),u.ob(5,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" What are readers of this book saying .. ? "])),(l()(),u.pb(7,0,null,0,3,"ion-slides",[],null,null,null,f.yb,f.I)),u.ob(8,49152,null,0,b.pb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,D)),u.ob(10,278528,null,0,_.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.component.book.comments)},null)}function H(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,35,"ion-card",[["padding",""]],null,null,null,f.Y,f.f)),u.ob(1,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,2,"ion-card-title",[],null,null,null,f.X,f.i)),u.ob(3,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Post your rating, review on this book "])),(l()(),u.pb(5,0,null,0,30,"ion-card-content",[],null,null,null,f.V,f.g)),u.ob(6,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(7,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var t=!0;return"submit"===n&&(t=!1!==u.yb(l,9).onSubmit(o)&&t),"reset"===n&&(t=!1!==u.yb(l,9).onReset()&&t),t},null,null)),u.ob(8,16384,null,0,e.o,[],null,null),u.ob(9,540672,[[1,4],["cform",4]],0,e.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,e.a,null,[e.e]),u.ob(11,16384,null,0,e.j,[[4,e.a]],null,null),(l()(),u.pb(12,0,null,null,8,"ion-item",[],null,null,null,f.nb,f.u)),u.ob(13,49152,null,0,b.G,[u.h,u.k],null,null),(l()(),u.pb(14,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,15)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,15)._handleInputEvent(o.target.value)&&t),t},f.Db,f.N)),u.ob(15,16384,null,0,b.Lb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[b.Lb]),u.ob(17,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(19,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(20,49152,null,0,b.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(21,0,null,null,11,"ion-item",[],null,null,null,f.nb,f.u)),u.ob(22,49152,null,0,b.G,[u.h,u.k],null,null),(l()(),u.pb(23,0,null,0,2,"ion-text",[],null,null,null,f.Cb,f.M)),u.ob(24,49152,null,0,b.vb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your Rating"])),(l()(),u.pb(26,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,27)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,27)._handleChangeEvent(o.target.value)&&t),t},f.qb,f.A)),u.ob(27,16384,null,0,b.Kb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[b.Kb]),u.ob(29,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(31,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(32,49152,null,0,b.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),u.pb(33,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u},f.T,f.d)),u.ob(34,49152,null,0,b.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Submit Comment"]))],function(l,n){var o=n.component;l(n,9,0,o.commentFormGroup),l(n,17,0,"comment"),l(n,20,0,"Your Comments"),l(n,29,0,"rating"),l(n,32,0,"rating","1","5","true","","5"),l(n,34,0,o.commentFormGroup.invalid,"full")},function(l,n){l(n,7,0,u.yb(n,11).ngClassUntouched,u.yb(n,11).ngClassTouched,u.yb(n,11).ngClassPristine,u.yb(n,11).ngClassDirty,u.yb(n,11).ngClassValid,u.yb(n,11).ngClassInvalid,u.yb(n,11).ngClassPending),l(n,14,0,u.yb(n,19).ngClassUntouched,u.yb(n,19).ngClassTouched,u.yb(n,19).ngClassPristine,u.yb(n,19).ngClassDirty,u.yb(n,19).ngClassValid,u.yb(n,19).ngClassInvalid,u.yb(n,19).ngClassPending),l(n,26,0,u.yb(n,31).ngClassUntouched,u.yb(n,31).ngClassTouched,u.yb(n,31).ngClassPristine,u.yb(n,31).ngClassDirty,u.yb(n,31).ngClassValid,u.yb(n,31).ngClassInvalid,u.yb(n,31).ngClassPending)})}function L(l){return u.Hb(0,[u.Ab(0,_.d,[u.u]),u.Db(671088640,1,{commentFormDirective:0}),(l()(),u.pb(2,0,null,null,10,"ion-header",[],null,null,null,f.fb,f.p)),u.ob(3,49152,null,0,b.A,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,8,"ion-toolbar",[],null,null,null,f.Fb,f.P)),u.ob(5,49152,null,0,b.Ab,[u.h,u.k],null,null),(l()(),u.pb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,f.U,f.e)),u.ob(7,49152,null,0,b.k,[u.h,u.k],null,null),(l()(),u.pb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==u.yb(l,10).onClick(o)&&t),t},f.S,f.c)),u.ob(9,49152,null,0,b.f,[u.h,u.k],null,null),u.ob(10,16384,null,0,b.g,[[2,b.gb],b.Fb],null,null),(l()(),u.pb(11,0,null,0,1,"ion-title",[],null,null,null,f.Eb,f.O)),u.ob(12,49152,null,0,b.yb,[u.h,u.k],null,null),(l()(),u.pb(13,0,null,null,56,"ion-content",[],null,null,null,f.bb,f.l)),u.ob(14,49152,null,0,b.t,[u.h,u.k],null,null),(l()(),u.pb(15,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var u=!0;return"ionRefresh"===n&&(u=!1!==l.component.refreshBookList(o)&&u),u},f.sb,f.B)),u.ob(16,49152,null,0,b.bb,[u.h,u.k],null,null),(l()(),u.pb(17,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,f.rb,f.C)),u.ob(18,49152,null,0,b.cb,[u.h,u.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),u.pb(19,0,null,0,46,"ion-card",[],null,null,null,f.Y,f.f)),u.ob(20,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.pb(21,0,null,0,6,"ion-card-header",[],null,null,null,f.W,f.h)),u.ob(22,49152,null,0,b.n,[u.h,u.k],null,null),(l()(),u.pb(23,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/book.svg"]],null,null,null,f.gb,f.q)),u.ob(24,49152,null,0,b.B,[u.h,u.k],{size:[0,"size"],src:[1,"src"]},null),(l()(),u.pb(25,0,null,0,2,"ion-card-title",[],null,null,null,f.X,f.i)),u.ob(26,49152,null,0,b.p,[u.h,u.k],null,null),(l()(),u.Fb(27,0,[" "," "])),(l()(),u.pb(28,0,null,0,11,"ion-card-content",[["style","color: green;"]],null,null,null,f.V,f.g)),u.ob(29,49152,null,0,b.m,[u.h,u.k],null,null),(l()(),u.pb(30,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(31,null,[" Book Description: "," "])),(l()(),u.pb(32,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(33,null,[" Book Owner: "," "," "])),(l()(),u.pb(34,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(35,null,[" Book Owner's rating: "," "])),(l()(),u.pb(36,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(37,null,[" Book Owner's address: "," "])),(l()(),u.pb(38,0,null,0,1,"ion-img",[["class","book-image"]],null,null,null,f.hb,f.r)),u.ob(39,49152,null,0,b.C,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(40,0,null,0,9,"ion-row",[],null,null,null,f.tb,f.D)),u.ob(41,49152,null,0,b.hb,[u.h,u.k],null,null),(l()(),u.pb(42,0,null,0,7,"ion-col",[],null,null,null,f.ab,f.k)),u.ob(43,49152,null,0,b.s,[u.h,u.k],null,null),(l()(),u.pb(44,0,null,0,5,"ion-card",[["no-margin",""]],null,null,null,f.Y,f.f)),u.ob(45,49152,null,0,b.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,M)),u.ob(47,16384,null,0,_.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,z)),u.ob(49,16384,null,0,_.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(50,0,null,0,15,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,f.eb,f.m)),u.ob(51,49152,null,0,b.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(52,0,null,0,3,"ion-fab-button",[],null,null,null,f.cb,f.n)),u.ob(53,49152,null,0,b.w,[u.h,u.k],null,null),(l()(),u.pb(54,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-down.svg"]],null,null,null,f.gb,f.q)),u.ob(55,49152,null,0,b.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(56,0,null,0,9,"ion-fab-list",[["side","bottom"]],null,null,null,f.db,f.o)),u.ob(57,49152,null,0,b.x,[u.h,u.k],{side:[0,"side"]},null),(l()(),u.pb(58,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.addComment()&&u),u},f.cb,f.n)),u.ob(59,49152,null,0,b.w,[u.h,u.k],null,null),(l()(),u.pb(60,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/create.svg"]],null,null,null,f.gb,f.q)),u.ob(61,49152,null,0,b.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.pb(62,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.displayComments()&&u),u},f.cb,f.n)),u.ob(63,49152,null,0,b.w,[u.h,u.k],null,null),(l()(),u.pb(64,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/reader.svg"]],null,null,null,f.gb,f.q)),u.ob(65,49152,null,0,b.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(l()(),u.gb(16777216,null,0,1,null,j)),u.ob(67,16384,null,0,_.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,H)),u.ob(69,16384,null,0,_.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var o=n.component;l(n,18,0,"pull for update","...updating"),l(n,24,0,"large","../assets/icon/book.svg"),l(n,39,0,o.url),l(n,47,0,!o.available),l(n,49,0,o.available),l(n,51,0,"end","top"),l(n,55,0,"../assets/icon/caret-down.svg"),l(n,57,0,"bottom"),l(n,61,0,"primary","../assets/icon/create.svg"),l(n,65,0,"primary","../assets/icon/reader.svg"),l(n,67,0,o.showComments),l(n,69,0,o.addComments)},function(l,n){var o=n.component;l(n,27,0,null==o.book?null:o.book.bookname),l(n,31,0,null==o.book?null:o.book.bookdescription),l(n,33,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,35,0,null==o.book?null:o.book.bookrating),l(n,37,0,null==o.book?null:o.book.bookowneraddress)})}function R(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,L,N)),u.ob(1,114688,null,0,k,[s.a,b.Eb,r.a,P.a,d.a,h.a,P.a,P.m,a.a,c.a,e.b,m.a,q.c],null,null)],function(l,n){l(n,1,0)},null)}var E=u.lb("app-bookdetail",k,R,{},{},[]),G=function(){return function(){}}(),A=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return T});var T=u.mb(g,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[I,S,O.a,E]],[3,u.j],u.x]),u.wb(4608,_.l,_.k,[u.u,[2,_.r]]),u.wb(4608,e.p,e.p,[]),u.wb(4608,b.b,b.b,[u.z,u.g]),u.wb(4608,b.Eb,b.Eb,[b.b,u.j,u.q,_.c]),u.wb(4608,b.Ib,b.Ib,[b.b,u.j,u.q,_.c]),u.wb(4608,e.b,e.b,[]),u.wb(1073742336,_.b,_.b,[]),u.wb(1073742336,e.n,e.n,[]),u.wb(1073742336,e.f,e.f,[]),u.wb(1073742336,b.Cb,b.Cb,[]),u.wb(1073742336,G,G,[]),u.wb(1073742336,A,A,[]),u.wb(1073742336,e.l,e.l,[]),u.wb(1073742336,P.o,P.o,[[2,P.u],[2,P.m]]),u.wb(1073742336,g,g,[]),u.wb(1024,P.k,function(){return[[{path:"",component:k}]]},[])])})}}]);