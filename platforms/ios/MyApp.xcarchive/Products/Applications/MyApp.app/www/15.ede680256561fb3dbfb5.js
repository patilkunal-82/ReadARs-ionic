(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QJAh:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),t=o("mrSG"),e=o("gIcY"),i=o("15JJ"),r=o("5uSc"),s=o("ZZ/e"),b=o("CjQN"),c=o("Z4xi"),a=o("hnS/"),p=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),d=function(){function l(l){this._modalController=l}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){console.log("inside close modal"),this._modalController.dismiss()},l}(),h=o("JhVf"),k=o("F/XL"),m=o("9Z1F"),g=o("mI4i"),f=o("lUK6"),v=o("lGQG"),y=o("t/Na"),I=function(){function l(l,n,o){this.http=l,this.auth=n,this.processHTTPMsgService=o}return l.prototype.getReservedBooks=function(){return this.auth.isLoggedIn()?this.http.get(g.a+"reserved?isReserved=true").pipe(Object(m.a)(this.processHTTPMsgService.handleError)):null},l.prototype.isReserved=function(l){var n=this;return this.auth.isLoggedIn()?this.http.get(g.a+"reserved/"+l).pipe(Object(m.a)(function(l){return n.processHTTPMsgService.handleError(l)})):Object(k.a)({exists:!1,book:null})},l.ngInjectableDef=u.S({factory:function(){return new l(u.W(y.c),u.W(v.a),u.W(f.a))},token:l,providedIn:"root"}),l}(),C=function(){function l(l,n,o,u,t,i,r,s,b,c,a){this._socialShare=l,this._modalController=n,this.readarsService=t,this.reservedService=i,this.route=r,this.router=s,this.emailComposer=b,this.callNumber=c,this.commentData={comment:"",rating:""},this.visibility="shown",this.favorite=!1,this.reserved=!1,this.panelOpenState=!1,this.commentFormGroup=a.group({comment:["",[e.m.required]],rating:["",[e.m.required]]})}return l.prototype.ngOnInit=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds)},function(n){return l.errMess=n}),this.lbookIds=this.loadBookIds(),console.log("BookIds from getBookIds"+this.bookIds),console.log("BookIds from getBookIds"+this.bookIds),this.route.params.pipe(Object(i.a)(function(n){return l.visibility="hidden",l.readarsService.getBook(n.bookID)})).subscribe(function(n){l.book=n,console.log("Book found for id:"+l.book._id),l.setPrevNext(l.book._id),l.visibility="shown",0!=l.book.comments.length&&(l.showComments=!0),l.reservedService.isReserved(l.book._id).subscribe(function(n){console.log(n),l.reserved=n.exists},function(l){return console.log(l)})},function(n){return l.errMess=n})},l.prototype.setPrevNext=function(l){console.log("Into setPreNext"),this.lbookIds=this.loadBookIds(),console.log("BookIds array"+this.lbookIds),console.log("BookIds array length"+this.lbookIds.length),console.log("Specifc BookId:"+l);var n=this.lbookIds.indexOf(l);console.log("Specific BookId after try catch"+l),console.log("Array index"+n),this.prev=this.lbookIds[(this.lbookIds.length+n-1)%this.lbookIds.length],this.next=this.lbookIds[(this.lbookIds.length+n+1)%this.lbookIds.length],console.log("Previous",this.prev),console.log("Next",this.next)},l.prototype.goPrev=function(){this.router.navigateByUrl("/bookdetail/"+this.prev)},l.prototype.goNext=function(){this.router.navigateByUrl("/bookdetail/"+this.next)},l.prototype.goBack=function(){this.router.navigateByUrl("/booklist")},l.prototype.onSubmit=function(){var l=this;this.commentData=this.commentFormGroup.value,console.log("Comment",this.commentData.comment),console.log("Rating",this.commentData.rating),this.readarsService.postComment(this.book._id,this.commentFormGroup.value).subscribe(function(n){return l.book=n}),this.commentFormDirective.resetForm(),this.commentFormGroup.reset({rating:"1",comment:""})},l.prototype.onValueChanged=function(l){},l.prototype.reserveBook=function(){var l=this;console.log("inside reserveBook of BookdetailComponent.ts"),alert("Contact & collect the book from the owner in next 48 hours. Failing which, the book will be made available to others !"),this.book.bookavailable=!1,this.book.bookreserved=!0,this.book.bookborrowed=!1,this.readarsService.reserveBook(this.book._id,this.book).subscribe(function(n){console.log(n),l.reserved=!0})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.emailOwner=function(){this.emailComposer.open({to:this.book.bookowner.email,isHtml:!0})},l.prototype.callOwner=function(){this.callNumber.callNumber(this.book.bookownertelnum,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.share=function(){},l.prototype.openViewcommentsModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:p})];case 1:return[2,l.sent().present()]}})})},l.prototype.openAddcommentModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){switch(l.label){case 0:return[4,this._modalController.create({component:d})];case 1:return[2,l.sent().present()]}})})},l.prototype.openModal=function(){return t.b(this,void 0,void 0,function(){return t.e(this,function(l){return[2]})})},l}(),w=function(){return function(){}}(),B=o("oBZk"),F=u.nb({encapsulation:0,styles:[[""]],data:{}});function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,B.T,B.m)),u.ob(1,49152,null,0,s.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,B.nb,B.G)),u.ob(3,49152,null,0,s.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,B.mb,B.F)),u.ob(5,49152,null,0,s.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your comments on the book.."])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,B.Q,B.j)),u.ob(8,49152,null,0,s.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,B.S,B.k)),u.ob(10,49152,null,0,s.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},B.R,B.l)),u.ob(12,49152,null,0,s.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,B.U,B.n)),u.ob(14,49152,null,0,s.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function O(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-addcomment",[],null,null,null,x,F)),u.ob(1,114688,null,0,d,[s.Eb],null,null)],function(l,n){l(n,1,0)},null)}var S=u.lb("app-addcomment",d,O,{},{},[]),M=u.nb({encapsulation:0,styles:[[""]],data:{}});function P(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,B.T,B.m)),u.ob(1,49152,null,0,s.A,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,B.nb,B.G)),u.ob(3,49152,null,0,s.Ab,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,B.mb,B.F)),u.ob(5,49152,null,0,s.yb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Readers' comments on this book"])),(l()(),u.pb(7,0,null,null,7,"ion-content",[],null,null,null,B.Q,B.j)),u.ob(8,49152,null,0,s.t,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,B.S,B.k)),u.ob(10,49152,null,0,s.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(11,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},B.R,B.l)),u.ob(12,49152,null,0,s.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,B.U,B.n)),u.ob(14,49152,null,0,s.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,10,0,"center","bottom"),l(n,12,0,"danger"),l(n,14,0,"close")},null)}function _(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-viewcomments",[],null,null,null,P,M)),u.ob(1,114688,null,0,p,[s.Eb],null,null)],function(l,n){l(n,1,0)},null)}var U=u.lb("app-viewcomments",p,_,{},{},[]),G=function(){function l(l,n){this._modalController=n,this.videoURL=l.get("videoURL")}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this._modalController.dismiss()},l}(),N=u.nb({encapsulation:0,styles:[[".bookvideo[_ngcontent-%COMP%]{width:100%;height:auto;margin-top:25vh}"]],data:{}});function j(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,9,"ion-content",[["color","dark"]],null,null,null,B.Q,B.j)),u.ob(1,49152,null,0,s.t,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(2,0,null,0,1,"video",[["autoplay",""],["class","bookvideo"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,0,"source",[],[[8,"src",4]],null,null,null,null)),(l()(),u.pb(4,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,B.S,B.k)),u.ob(5,49152,null,0,s.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.pb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.closeModal()&&u),u},B.R,B.l)),u.ob(7,49152,null,0,s.w,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.pb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,B.U,B.n)),u.ob(9,49152,null,0,s.B,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dark"),l(n,5,0,"center","bottom"),l(n,7,0,"danger"),l(n,9,0,"close")},function(l,n){l(n,3,0,n.component.videoURL)})}function z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookvideo",[],null,null,null,j,N)),u.ob(1,114688,null,0,G,[s.Gb,s.Eb],null,null)],function(l,n){l(n,1,0)},null)}var H=u.lb("app-bookvideo",G,z,{},{},[]),R=o("pMnS"),D=o("Ip0R"),E=o("ZYCi"),L=u.nb({encapsulation:0,styles:[[""]],data:{}});function T(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,4,"ion-card-content",[["style","color: red;"]],null,null,null,B.M,B.g)),u.ob(1,49152,null,0,s.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"ion-icon",[["src","../assets/icon/lock-closed.svg"]],null,null,null,B.U,B.n)),u.ob(3,49152,null,0,s.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(4,0,[" "," is currently not available ! Please check later.. "]))],function(l,n){l(n,3,0,"../assets/icon/lock-closed.svg")},function(l,n){var o=n.component;l(n,4,0,null==o.book?null:o.book.bookname)})}function A(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,7,"ion-card-content",[["style","color: green;"]],null,null,null,B.M,B.g)),u.ob(1,49152,null,0,s.m,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,1,"ion-icon",[["src","../assets/icon/lock-open.svg"]],null,null,null,B.U,B.n)),u.ob(3,49152,null,0,s.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.Fb(4,0,[" "," is available. Click "])),(l()(),u.pb(5,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/lock-closed.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.reserveBook()&&u),u},B.U,B.n)),u.ob(6,49152,null,0,s.B,[u.h,u.k],{size:[0,"size"],src:[1,"src"]},null),(l()(),u.Fb(-1,0,[" to reserve ! "]))],function(l,n){l(n,3,0,"../assets/icon/lock-open.svg"),l(n,6,0,"large","../assets/icon/lock-closed.svg")},function(l,n){var o=n.component;l(n,4,0,null==o.book?null:o.book.bookname)})}function J(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,16,"ion-slide",[],null,null,null,B.fb,B.y)),u.ob(1,49152,null,0,s.ob,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,14,"ion-list",[],null,null,null,B.bb,B.u)),u.ob(3,49152,null,0,s.N,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,B.Z,B.s)),u.ob(5,49152,null,0,s.G,[u.h,u.k],{lines:[0,"lines"]},null),(l()(),u.pb(6,0,null,0,10,"ion-label",[],null,null,null,B.ab,B.t)),u.ob(7,49152,null,0,s.M,[u.h,u.k],null,null),(l()(),u.pb(8,0,null,0,1,"h2",[["color","primary"]],null,null,null,null,null)),(l()(),u.Fb(9,null,["",""])),(l()(),u.pb(10,0,null,0,1,"p",[["color","primary"]],null,null,null,null,null)),(l()(),u.Fb(11,null,[""," Stars"])),(l()(),u.pb(12,0,null,0,1,"h3",[["color","secondary"]],null,null,null,null,null)),(l()(),u.Fb(13,null,["by - "," ",""])),(l()(),u.pb(14,0,null,0,2,"p",[["color","secondary"]],null,null,null,null,null)),(l()(),u.Fb(15,null,[" on - ",""])),u.Bb(16,1)],function(l,n){l(n,5,0,"none")},function(l,n){l(n,9,0,n.context.$implicit.comment),l(n,11,0,n.context.$implicit.rating),l(n,13,0,n.context.$implicit.author.firstname,n.context.$implicit.author.lastname);var o=u.Gb(n,15,0,l(n,16,0,u.yb(n.parent.parent,0),n.context.$implicit.updatedAt));l(n,15,0,o)})}function Z(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-card",[],null,null,null,B.P,B.f)),u.ob(1,49152,null,0,s.l,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,B.N,B.h)),u.ob(3,49152,null,0,s.n,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-card-title",[],null,null,null,B.O,B.i)),u.ob(5,49152,null,0,s.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" What are readers of this book saying .. ? "])),(l()(),u.pb(7,0,null,0,3,"ion-slides",[],null,null,null,B.gb,B.z)),u.ob(8,49152,null,0,s.pb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,J)),u.ob(10,278528,null,0,D.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.component.book.comments)},null)}function Q(l){return u.Hb(0,[u.Ab(0,D.e,[u.u]),u.Db(402653184,1,{commentFormDirective:0}),(l()(),u.pb(2,0,null,null,10,"ion-header",[],null,null,null,B.T,B.m)),u.ob(3,49152,null,0,s.A,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,8,"ion-toolbar",[],null,null,null,B.nb,B.G)),u.ob(5,49152,null,0,s.Ab,[u.h,u.k],null,null),(l()(),u.pb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,B.L,B.e)),u.ob(7,49152,null,0,s.k,[u.h,u.k],null,null),(l()(),u.pb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==u.yb(l,10).onClick(o)&&t),t},B.J,B.c)),u.ob(9,49152,null,0,s.f,[u.h,u.k],null,null),u.ob(10,16384,null,0,s.g,[[2,s.gb],s.Fb],null,null),(l()(),u.pb(11,0,null,0,1,"ion-title",[],null,null,null,B.mb,B.F)),u.ob(12,49152,null,0,s.yb,[u.h,u.k],null,null),(l()(),u.pb(13,0,null,null,72,"ion-content",[],null,null,null,B.Q,B.j)),u.ob(14,49152,null,0,s.t,[u.h,u.k],null,null),(l()(),u.pb(15,0,null,0,32,"ion-card",[],null,null,null,B.P,B.f)),u.ob(16,49152,null,0,s.l,[u.h,u.k],null,null),(l()(),u.pb(17,0,null,0,6,"ion-card-header",[],null,null,null,B.N,B.h)),u.ob(18,49152,null,0,s.n,[u.h,u.k],null,null),(l()(),u.pb(19,0,null,0,1,"ion-icon",[["size","large"],["src","../assets/icon/book.svg"]],null,null,null,B.U,B.n)),u.ob(20,49152,null,0,s.B,[u.h,u.k],{size:[0,"size"],src:[1,"src"]},null),(l()(),u.pb(21,0,null,0,2,"ion-card-title",[],null,null,null,B.O,B.i)),u.ob(22,49152,null,0,s.p,[u.h,u.k],null,null),(l()(),u.Fb(23,0,[" "," "])),(l()(),u.pb(24,0,null,0,17,"ion-card-content",[["style","color: green;"]],null,null,null,B.M,B.g)),u.ob(25,49152,null,0,s.m,[u.h,u.k],null,null),(l()(),u.pb(26,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(27,null,[" Book Description: "," "])),(l()(),u.pb(28,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(29,null,[" Book Owner: "," "," "])),(l()(),u.pb(30,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(31,null,[" Book Owner's rating: "," "])),(l()(),u.pb(32,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(33,null,[" Book Owner's address: "," "])),(l()(),u.pb(34,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(35,null,[" Book Owner : "," "])),(l()(),u.pb(36,0,null,null,1,"ion-icon",[["src","../assets/icon/mail.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.emailOwner()&&u),u},B.U,B.n)),u.ob(37,49152,null,0,s.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(38,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),u.Fb(39,null,[" Book Owner Telephone: "," "])),(l()(),u.pb(40,0,null,null,1,"ion-icon",[["src","../assets/icon/call.svg"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.callOwner()&&u),u},B.U,B.n)),u.ob(41,49152,null,0,s.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(42,0,null,0,5,"ion-card",[["no-margin",""]],null,null,null,B.P,B.f)),u.ob(43,49152,null,0,s.l,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,T)),u.ob(45,16384,null,0,D.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,A)),u.ob(47,16384,null,0,D.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,Z)),u.ob(49,16384,null,0,D.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(50,0,null,0,35,"ion-card",[["padding",""]],null,null,null,B.P,B.f)),u.ob(51,49152,null,0,s.l,[u.h,u.k],null,null),(l()(),u.pb(52,0,null,0,2,"ion-card-title",[],null,null,null,B.O,B.i)),u.ob(53,49152,null,0,s.p,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,[" Post your rating, review on this book "])),(l()(),u.pb(55,0,null,0,30,"ion-card-content",[],null,null,null,B.M,B.g)),u.ob(56,49152,null,0,s.m,[u.h,u.k],null,null),(l()(),u.pb(57,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,o){var t=!0;return"submit"===n&&(t=!1!==u.yb(l,59).onSubmit(o)&&t),"reset"===n&&(t=!1!==u.yb(l,59).onReset()&&t),t},null,null)),u.ob(58,16384,null,0,e.o,[],null,null),u.ob(59,540672,[[1,4],["cform",4]],0,e.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,e.a,null,[e.e]),u.ob(61,16384,null,0,e.j,[[4,e.a]],null,null),(l()(),u.pb(62,0,null,null,8,"ion-item",[],null,null,null,B.Z,B.s)),u.ob(63,49152,null,0,s.G,[u.h,u.k],null,null),(l()(),u.pb(64,0,null,0,6,"ion-textarea",[["formControlName","comment"],["placeholder","Your Comments"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,65)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,65)._handleInputEvent(o.target.value)&&t),t},B.lb,B.E)),u.ob(65,16384,null,0,s.Lb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[s.Lb]),u.ob(67,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(69,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(70,49152,null,0,s.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),(l()(),u.pb(71,0,null,null,11,"ion-item",[],null,null,null,B.Z,B.s)),u.ob(72,49152,null,0,s.G,[u.h,u.k],null,null),(l()(),u.pb(73,0,null,0,2,"ion-text",[],null,null,null,B.kb,B.D)),u.ob(74,49152,null,0,s.vb,[u.h,u.k],null,null),(l()(),u.Fb(-1,0,["Your Rating"])),(l()(),u.pb(76,0,null,0,6,"ion-range",[["formControlName","rating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==u.yb(l,77)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u.yb(l,77)._handleChangeEvent(o.target.value)&&t),t},B.cb,B.v)),u.ob(77,16384,null,0,s.Kb,[u.k],null,null),u.Cb(1024,null,e.g,function(l){return[l]},[s.Kb]),u.ob(79,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),u.Cb(2048,null,e.h,null,[e.d]),u.ob(81,16384,null,0,e.i,[[4,e.h]],null,null),u.ob(82,49152,null,0,s.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(l()(),u.pb(83,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.onSubmit()&&u),u},B.K,B.d)),u.ob(84,49152,null,0,s.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),u.Fb(-1,0,["Submit Comment"]))],function(l,n){var o=n.component;l(n,20,0,"large","../assets/icon/book.svg"),l(n,37,0,"../assets/icon/mail.svg"),l(n,41,0,"../assets/icon/call.svg"),l(n,45,0,o.reserved),l(n,47,0,!o.reserved),l(n,49,0,o.showComments),l(n,59,0,o.commentFormGroup),l(n,67,0,"comment"),l(n,70,0,"Your Comments"),l(n,79,0,"rating"),l(n,82,0,"rating","1","5","true","","5"),l(n,84,0,o.commentFormGroup.invalid,"full")},function(l,n){var o=n.component;l(n,23,0,null==o.book?null:o.book.bookname),l(n,27,0,null==o.book?null:o.book.bookdescription),l(n,29,0,null==o.book?null:o.book.bookowner.firstname,null==o.book?null:o.book.bookowner.lastname),l(n,31,0,null==o.book?null:o.book.bookrating),l(n,33,0,null==o.book?null:o.book.bookowneraddress),l(n,35,0,null==o.book?null:o.book.bookowner.email),l(n,39,0,null==o.book?null:o.book.bookownertelnum),l(n,57,0,u.yb(n,61).ngClassUntouched,u.yb(n,61).ngClassTouched,u.yb(n,61).ngClassPristine,u.yb(n,61).ngClassDirty,u.yb(n,61).ngClassValid,u.yb(n,61).ngClassInvalid,u.yb(n,61).ngClassPending),l(n,64,0,u.yb(n,69).ngClassUntouched,u.yb(n,69).ngClassTouched,u.yb(n,69).ngClassPristine,u.yb(n,69).ngClassDirty,u.yb(n,69).ngClassValid,u.yb(n,69).ngClassInvalid,u.yb(n,69).ngClassPending),l(n,76,0,u.yb(n,81).ngClassUntouched,u.yb(n,81).ngClassTouched,u.yb(n,81).ngClassPristine,u.yb(n,81).ngClassDirty,u.yb(n,81).ngClassValid,u.yb(n,81).ngClassInvalid,u.yb(n,81).ngClassPending)})}function q(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-bookdetail",[],null,null,null,Q,L)),u.ob(1,114688,null,0,C,[b.a,s.Eb,r.a,E.a,h.a,I,E.a,E.m,c.a,a.a,e.b],null,null)],function(l,n){l(n,1,0)},null)}var V=u.lb("app-bookdetail",C,q,{},{},[]),Y=function(){return function(){}}(),$=function(){return function(){}}(),K=function(){return function(){}}();o.d(n,"BookdetailPageModuleNgFactory",function(){return W});var W=u.mb(w,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[S,U,H,R.a,V]],[3,u.j],u.x]),u.wb(4608,D.m,D.l,[u.u,[2,D.s]]),u.wb(4608,e.p,e.p,[]),u.wb(4608,s.b,s.b,[u.z,u.g]),u.wb(4608,s.Eb,s.Eb,[s.b,u.j,u.q,D.d]),u.wb(4608,s.Ib,s.Ib,[s.b,u.j,u.q,D.d]),u.wb(4608,e.b,e.b,[]),u.wb(1073742336,D.c,D.c,[]),u.wb(1073742336,e.n,e.n,[]),u.wb(1073742336,e.f,e.f,[]),u.wb(1073742336,s.Cb,s.Cb,[]),u.wb(1073742336,Y,Y,[]),u.wb(1073742336,$,$,[]),u.wb(1073742336,K,K,[]),u.wb(1073742336,e.l,e.l,[]),u.wb(1073742336,E.o,E.o,[[2,E.u],[2,E.m]]),u.wb(1073742336,w,w,[]),u.wb(1024,E.k,function(){return[[{path:"",component:C}]]},[])])})}}]);