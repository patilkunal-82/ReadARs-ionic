(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{W9vR:function(n,l,o){"use strict";o.r(l);var u=o("CcnG"),e=function(){return function(){}}(),t=o("oBZk"),i=o("ZZ/e"),r=o("gIcY"),a=o("Ip0R"),b=["English","Hindi","Marathi","German","Tamil","Spanish","French","Telugu","Latin","Malyalam"],s=o("d5rD"),c=function(){function n(n,l,o){this._modalController=n,this.booksService=l,this.fb=o,this.booklanguage=b,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.formErrors={bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"",bookauthor:""},this.validationMessages={bookname:{required:"Book Name is required.",minlength:"Book Name must be at least 1 character long.",maxlength:"BookName cannot be more than 40 characters long."},booklanguage:{required:"Book Language is required.",minlength:"Book Language must be at least 2 characters long.",maxlength:"Book Language cannot be more than 25 characters long."},bookowneraddress:{required:"Address is required."},bookownertelnum:{required:"Contact number is required.",pattern:"Contact number must contain only numbers."},booauthor:{required:"Author Name is required.",minlength:"Author Name must be at least 1 character long.",maxlength:"Author Name cannot be more than 40 characters long."}}}return n.prototype.ngOnInit=function(){var n=this;this.createForm(),this.booksService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l})},n.prototype.createForm=function(){var n=this;this.addBookFormGroup=this.fb.group({bookname:["",[r.m.required,r.m.minLength(1),r.m.maxLength(40)]],booklanguage:["",[r.m.required,r.m.minLength(2),r.m.maxLength(25)]],bookowneraddress:["",[r.m.required]],bookdescription:["",[r.m.required,r.m.minLength(2),r.m.maxLength(200)]],bookownertelnum:["",[r.m.required,r.m.pattern]],bookrating:"5",bookauthor:["",[r.m.required,r.m.minLength(1),r.m.maxLength(200)]]}),this.addBookFormGroup.valueChanges.subscribe(function(l){return n.onValueChanged(l)})},n.prototype.onValueChanged=function(n){if(this.addBookFormGroup){var l=this.addBookFormGroup;for(var o in this.formErrors)if(this.formErrors.hasOwnProperty(o)){this.formErrors[o]="";var u=l.get(o);if(u&&u.dirty&&!u.valid){var e=this.validationMessages[o];for(var t in u.errors)u.errors.hasOwnProperty(t)&&(this.formErrors[o]+=e[t]+" ")}}}},n.prototype.onSubmit=function(){var n=this;this.addbook=this.addBookFormGroup.value,console.log(this.addbook),this.showForm=!1,this.booksService.addBook(this.addbook).subscribe(function(l){console.log("response received"),n.submitted=l,console.log(n.submitted),n.addbook=null,setTimeout(function(){n.submitted=null,n.showForm=!0},5e3)},function(n){return console.log(n.status,n.message)}),this.addBookFormGroup.reset({bookname:"",booklanguage:"",bookowneraddress:"",bookdescription:"",bookownertelnum:"",bookrating:"5"}),this.addbookDetailsFormDirective.resetForm(),this.ngOnInit(),this._modalController.dismiss()},n}(),g=u.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,t.sb,t.E)),u.ob(1,49152,null,0,i.mb,[u.h,u.k],{value:[0,"value"]},null),(n()(),u.Fb(2,0,[" "," "]))],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,2,0,l.context.$implicit)})}function h(n){return u.Hb(0,[u.Db(402653184,1,{addbookDetailsFormDirective:0}),(n()(),u.pb(1,0,null,null,6,"ion-header",[],null,null,null,t.cb,t.n)),u.ob(2,49152,null,0,i.A,[u.h,u.k],null,null),(n()(),u.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,t.Db,t.O)),u.ob(4,49152,null,0,i.Ab,[u.h,u.k],null,null),(n()(),u.pb(5,0,null,0,2,"ion-title",[],null,null,null,t.Cb,t.N)),u.ob(6,49152,null,0,i.yb,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Add new book in the library.."])),(n()(),u.pb(8,0,null,null,95,"ion-content",[],null,null,null,t.Y,t.j)),u.ob(9,49152,null,0,i.t,[u.h,u.k],null,null),(n()(),u.pb(10,0,null,0,93,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var e=!0;return"submit"===l&&(e=!1!==u.yb(n,12).onSubmit(o)&&e),"reset"===l&&(e=!1!==u.yb(n,12).onReset()&&e),e},null,null)),u.ob(11,16384,null,0,r.o,[],null,null),u.ob(12,540672,null,0,r.e,[[8,null],[8,null]],{form:[0,"form"]},null),u.Cb(2048,null,r.a,null,[r.e]),u.ob(14,16384,null,0,r.j,[[4,r.a]],null,null),(n()(),u.pb(15,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(16,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(17,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(18,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Book Name"])),(n()(),u.pb(20,0,null,0,6,"ion-input",[["formControlName","bookname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,21)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,21)._handleInputEvent(o.target.value)&&e),e},t.gb,t.r)),u.ob(21,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(23,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(25,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(26,49152,null,0,i.F,[u.h,u.k],{type:[0,"type"]},null),(n()(),u.pb(27,0,null,null,13,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(28,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(29,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(30,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Book Language"])),(n()(),u.pb(32,0,null,0,8,"ion-select",[["formControlName","booklanguage"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,33)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,33)._handleChangeEvent(o.target.value)&&e),e},t.tb,t.D)),u.ob(33,16384,null,0,i.Kb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Kb]),u.ob(35,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(37,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(38,49152,null,0,i.lb,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,d)),u.ob(40,278528,null,0,a.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(41,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(42,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(43,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(44,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Book's Author"])),(n()(),u.pb(46,0,null,0,6,"ion-input",[["formControlName","bookauthor"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,47)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,47)._handleInputEvent(o.target.value)&&e),e},t.gb,t.r)),u.ob(47,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(49,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(51,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(52,49152,null,0,i.F,[u.h,u.k],{type:[0,"type"]},null),(n()(),u.pb(53,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(54,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(55,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(56,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Book Description"])),(n()(),u.pb(58,0,null,0,6,"ion-input",[["formControlName","bookdescription"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,59)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,59)._handleInputEvent(o.target.value)&&e),e},t.gb,t.r)),u.ob(59,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(61,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(63,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(64,49152,null,0,i.F,[u.h,u.k],{type:[0,"type"]},null),(n()(),u.pb(65,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(66,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(67,0,null,0,2,"ion-text",[],null,null,null,t.Ab,t.L)),u.ob(68,49152,null,0,i.vb,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Your Rating for the book"])),(n()(),u.pb(70,0,null,0,6,"ion-range",[["formControlName","bookrating"],["max","5"],["min","1"],["name","rating"],["pin","true"],["snaps",""],["tickInterval","1"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,71)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,71)._handleChangeEvent(o.target.value)&&e),e},t.nb,t.y)),u.ob(71,16384,null,0,i.Kb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Kb]),u.ob(73,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(75,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(76,49152,null,0,i.ab,[u.h,u.k],{name:[0,"name"],min:[1,"min"],max:[2,"max"],pin:[3,"pin"],snaps:[4,"snaps"],value:[5,"value"]},null),(n()(),u.pb(77,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(78,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(79,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(80,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Your address"])),(n()(),u.pb(82,0,null,0,6,"ion-input",[["formControlName","bookowneraddress"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,83)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,83)._handleInputEvent(o.target.value)&&e),e},t.gb,t.r)),u.ob(83,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(85,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(87,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(88,49152,null,0,i.F,[u.h,u.k],{type:[0,"type"]},null),(n()(),u.pb(89,0,null,null,11,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(90,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(91,0,null,0,2,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(92,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Your contact number"])),(n()(),u.pb(94,0,null,0,6,"ion-input",[["formControlName","bookownertelnum"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var e=!0;return"ionBlur"===l&&(e=!1!==u.yb(n,95)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,95)._handleInputEvent(o.target.value)&&e),e},t.gb,t.r)),u.ob(95,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(97,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Cb(2048,null,r.h,null,[r.d]),u.ob(99,16384,null,0,r.i,[[4,r.h]],null,null),u.ob(100,49152,null,0,i.F,[u.h,u.k],{type:[0,"type"]},null),(n()(),u.pb(101,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.onSubmit()&&u),u},t.R,t.c)),u.ob(102,49152,null,0,i.j,[u.h,u.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),u.Fb(-1,0,["Add"]))],function(n,l){var o=l.component;n(l,12,0,o.addBookFormGroup),n(l,23,0,"bookname"),n(l,26,0,"text"),n(l,35,0,"booklanguage"),n(l,40,0,o.booklanguage),n(l,49,0,"bookauthor"),n(l,52,0,"text"),n(l,61,0,"bookdescription"),n(l,64,0,"text"),n(l,73,0,"bookrating"),n(l,76,0,"rating","1","5","true","","5"),n(l,85,0,"bookowneraddress"),n(l,88,0,"text"),n(l,97,0,"bookownertelnum"),n(l,100,0,"text"),n(l,102,0,o.addBookFormGroup.invalid,"full")},function(n,l){n(l,10,0,u.yb(l,14).ngClassUntouched,u.yb(l,14).ngClassTouched,u.yb(l,14).ngClassPristine,u.yb(l,14).ngClassDirty,u.yb(l,14).ngClassValid,u.yb(l,14).ngClassInvalid,u.yb(l,14).ngClassPending),n(l,20,0,u.yb(l,25).ngClassUntouched,u.yb(l,25).ngClassTouched,u.yb(l,25).ngClassPristine,u.yb(l,25).ngClassDirty,u.yb(l,25).ngClassValid,u.yb(l,25).ngClassInvalid,u.yb(l,25).ngClassPending),n(l,32,0,u.yb(l,37).ngClassUntouched,u.yb(l,37).ngClassTouched,u.yb(l,37).ngClassPristine,u.yb(l,37).ngClassDirty,u.yb(l,37).ngClassValid,u.yb(l,37).ngClassInvalid,u.yb(l,37).ngClassPending),n(l,46,0,u.yb(l,51).ngClassUntouched,u.yb(l,51).ngClassTouched,u.yb(l,51).ngClassPristine,u.yb(l,51).ngClassDirty,u.yb(l,51).ngClassValid,u.yb(l,51).ngClassInvalid,u.yb(l,51).ngClassPending),n(l,58,0,u.yb(l,63).ngClassUntouched,u.yb(l,63).ngClassTouched,u.yb(l,63).ngClassPristine,u.yb(l,63).ngClassDirty,u.yb(l,63).ngClassValid,u.yb(l,63).ngClassInvalid,u.yb(l,63).ngClassPending),n(l,70,0,u.yb(l,75).ngClassUntouched,u.yb(l,75).ngClassTouched,u.yb(l,75).ngClassPristine,u.yb(l,75).ngClassDirty,u.yb(l,75).ngClassValid,u.yb(l,75).ngClassInvalid,u.yb(l,75).ngClassPending),n(l,82,0,u.yb(l,87).ngClassUntouched,u.yb(l,87).ngClassTouched,u.yb(l,87).ngClassPristine,u.yb(l,87).ngClassDirty,u.yb(l,87).ngClassValid,u.yb(l,87).ngClassInvalid,u.yb(l,87).ngClassPending),n(l,94,0,u.yb(l,99).ngClassUntouched,u.yb(l,99).ngClassTouched,u.yb(l,99).ngClassPristine,u.yb(l,99).ngClassDirty,u.yb(l,99).ngClassValid,u.yb(l,99).ngClassInvalid,u.yb(l,99).ngClassPending)})}function p(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-addbook",[],null,null,null,h,g)),u.ob(1,114688,null,0,c,[i.Eb,s.a,r.b],null,null)],function(n,l){n(l,1,0)},null)}var k=u.lb("app-addbook",c,p,{},{},[]),m=o("pMnS"),f=o("mrSG"),v=o("Pn9U"),y=["None","Tel","Email"],C=o("lGQG"),B=o("JhVf"),w=o("fNyx"),x=o("S6gA"),F=o("F/XL"),I=o("9Z1F"),L=o("mI4i"),M=o("lUK6"),T=o("t/Na"),S=function(){function n(n,l,o){this.http=n,this.auth=l,this.processHTTPMsgService=o}return n.prototype.isBorrowed=function(n){var l=this;return this.auth.isLoggedIn()?this.http.get(L.a+"borrowed/"+n).pipe(Object(I.a)(function(n){return l.processHTTPMsgService.handleError(n)})):Object(F.a)({exists:!1,book:null})},n.ngInjectableDef=u.S({factory:function(){return new n(u.W(T.c),u.W(C.a),u.W(M.a))},token:n,providedIn:"root"}),n}(),P=function(){function n(n,l){this.http=n,this.processHTTPMsgService=l}return n.prototype.submitFeedback=function(n){var l={headers:new T.h({"Content-Type":"application/json"})};return this.http.post(L.a+"feedback/",n,l).pipe(Object(I.a)(this.processHTTPMsgService.handleError))},n.prototype.getFeedback=function(){return this.http.get(L.a+"feedback").pipe(Object(I.a)(this.processHTTPMsgService.handleError))},n.prototype.getFeaturedFeedback=function(){return this.http.get(L.a+"feedback?rating=5").pipe(Object(I.a)(this.processHTTPMsgService.handleError))},n.ngInjectableDef=u.S({factory:function(){return new n(u.W(T.c),u.W(M.a))},token:n,providedIn:"root"}),n}(),_=o("LwiL"),E=function(){function n(n,l,o,u,e,t,i,a,s,c,g,d,h,p,k,m,f){this._camera=n,this._alertController=l,this._modalController=o,this.authService=u,this.navCtrl=e,this.readarsService=t,this.baseURL=i,this.router=a,this.route=s,this.searchedMyData=c,this.fb=g,this.feedbackservice=d,this.booksService=h,this.reservedService=p,this.borrowedService=k,this.availableService=m,this.activatedRoute=f,this.searchTerm="",this.name="Angular",this.currentRouter=this.router.url,this.booklanguage=b,this.contactType=y,this.submitted=null,this.showForm=!0,this.panelOpenState=!1,this.searchControl=new r.c}return n.prototype.ngOnInit=function(){var n=this;this.setFilteredItems(),this.authService.loadUserCredentials(),this.booksService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l})},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.booksService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedMyData.filterItems(this.searchTerm),console.log("Searched my data",this.books)},n.prototype.deleteBook=function(n){var l=this;console.log("Deleting Book "+n),this.booksService.deleteBook(n).subscribe(function(n){return l.removebook=n},function(n){return l.errMess=n}),this.delete=!1,this.ngOnInit()},n.prototype.lendBook=function(n){var l=this;console.log("Lending Book "+n),this.booksService.getBook(n).subscribe(function(o){l.router.navigate([l.currentRouter]),l.book=o,l.book.bookavailable=!1,l.book.bookreserved=!0,l.book.bookborrowed=!0,l.booksService.lendBook(n,l.book).subscribe(function(n){console.log(n),l.borrowed=!0,l.reserved=!0}),l.ngOnInit()},function(n){return l.errMess=n})},n.prototype.releaseBook=function(n){var l=this;console.log("Releasing Book "+n),this.booksService.getBook(n).subscribe(function(n){l.router.navigate([l.currentRouter]),l.book=n,l.book.bookavailable=!0,l.book.bookreserved=!1,l.book.bookborrowed=!1,l.booksService.releaseBook(l.book._id,l.book).subscribe(function(n){console.log(n),l.available=!0,l.reserved=!1})},function(n){return l.errMess=n}),this.ngOnInit()},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n.prototype.addBookModal=function(){return f.b(this,void 0,void 0,function(){return f.e(this,function(n){switch(n.label){case 0:return[4,this._modalController.create({component:c})];case 1:return[2,n.sent().present()]}})})},n}(),O=o("ZYCi"),q=u.nb({encapsulation:0,styles:[[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}"]],data:{}});function D(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/trash.svg"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.deleteBook(n.parent.context.$implicit._id)&&u),u},t.db,t.o)),u.ob(1,49152,null,0,i.B,[u.h,u.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/trash.svg")},null)}function G(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/book.svg"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.lendBook(n.parent.context.$implicit._id)&&u),u},t.db,t.o)),u.ob(1,49152,null,0,i.B,[u.h,u.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/book.svg")},null)}function N(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"ion-icon",[["slot","icon-only"],["src","../assets/icon/make-available.svg"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.releaseBook(n.parent.context.$implicit._id)&&u),u},t.db,t.o)),u.ob(1,49152,null,0,i.B,[u.h,u.k],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../assets/icon/make-available.svg")},null)}function A(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,27,"ion-item-sliding",[],null,null,null,t.jb,t.v)),u.ob(1,49152,null,0,i.L,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,9,"ion-item",[],null,null,null,t.kb,t.s)),u.ob(3,49152,null,0,i.G,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,7,"ion-label",[],null,null,null,t.lb,t.w)),u.ob(5,49152,null,0,i.M,[u.h,u.k],null,null),(n()(),u.pb(6,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Fb(7,null,["",""])),(n()(),u.pb(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.Fb(9,null,["",""])),(n()(),u.pb(10,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),u.Fb(11,null,["",""])),(n()(),u.pb(12,0,null,0,5,"ion-item-options",[["side","start"]],null,null,null,t.ib,t.u)),u.ob(13,49152,null,0,i.K,[u.h,u.k],{side:[0,"side"]},null),(n()(),u.pb(14,0,null,0,3,"ion-item-option",[],null,null,null,t.hb,t.t)),u.ob(15,49152,null,0,i.J,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,D)),u.ob(17,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(18,0,null,0,9,"ion-item-options",[["side","end"]],null,null,null,t.ib,t.u)),u.ob(19,49152,null,0,i.K,[u.h,u.k],{side:[0,"side"]},null),(n()(),u.pb(20,0,null,0,3,"ion-item-option",[],null,null,null,t.hb,t.t)),u.ob(21,49152,null,0,i.J,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,G)),u.ob(23,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(24,0,null,0,3,"ion-item-option",[],null,null,null,t.hb,t.t)),u.ob(25,49152,null,0,i.J,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,N)),u.ob(27,16384,null,0,a.k,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,13,0,"start"),n(l,17,0,l.context.$implicit.isAvailable),n(l,19,0,"end"),n(l,23,0,l.context.$implicit.isReserved&&!l.context.$implicit.isBorrowed&&!l.context.$implicit.isAvailable),n(l,27,0,l.context.$implicit.isReserved||l.context.$implicit.isBorrowed&&!l.context.$implicit.isAvailable)},function(n,l){n(l,7,0,l.context.$implicit.bookname),n(l,9,0,l.context.$implicit.bookdescription),n(l,11,0,l.context.$implicit.booklanguage)})}function j(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,t.cb,t.n)),u.ob(1,49152,null,0,i.A,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.Db,t.O)),u.ob(3,49152,null,0,i.Ab,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,t.Cb,t.N)),u.ob(5,49152,null,0,i.yb,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,[" My Books "])),(n()(),u.pb(7,0,null,null,35,"ion-content",[],null,null,null,t.Y,t.j)),u.ob(8,49152,null,0,i.t,[u.h,u.k],null,null),(n()(),u.pb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var u=!0;return"ionRefresh"===l&&(u=!1!==n.component.refreshBookList(o)&&u),u},t.pb,t.z)),u.ob(10,49152,null,0,i.bb,[u.h,u.k],null,null),(n()(),u.pb(11,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,t.ob,t.A)),u.ob(12,49152,null,0,i.cb,[u.h,u.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),u.pb(13,0,null,0,16,"ion-card",[],null,null,null,t.W,t.e)),u.ob(14,49152,null,0,i.l,[u.h,u.k],null,null),(n()(),u.pb(15,0,null,0,2,"ion-card-title",[["class","display_heading"],["style","color: green;"]],null,null,null,t.V,t.h)),u.ob(16,49152,null,0,i.p,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Your books in ReadARs Library"])),(n()(),u.pb(18,0,null,0,11,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,t.bb,t.k)),u.ob(19,49152,null,0,i.v,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),u.pb(20,0,null,0,3,"ion-fab-button",[],null,null,null,t.Z,t.l)),u.ob(21,49152,null,0,i.w,[u.h,u.k],null,null),(n()(),u.pb(22,0,null,0,1,"ion-icon",[["src","../assets/icon/caret-back.svg"]],null,null,null,t.db,t.o)),u.ob(23,49152,null,0,i.B,[u.h,u.k],{src:[0,"src"]},null),(n()(),u.pb(24,0,null,0,5,"ion-fab-list",[["side","start"]],null,null,null,t.ab,t.m)),u.ob(25,49152,null,0,i.x,[u.h,u.k],{side:[0,"side"]},null),(n()(),u.pb(26,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.addBookModal()&&u),u},t.Z,t.l)),u.ob(27,49152,null,0,i.w,[u.h,u.k],null,null),(n()(),u.pb(28,0,null,0,1,"ion-icon",[["color","primary"],["src","../assets/icon/add-circle.svg"]],null,null,null,t.db,t.o)),u.ob(29,49152,null,0,i.B,[u.h,u.k],{color:[0,"color"],src:[1,"src"]},null),(n()(),u.pb(30,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search by book title or language ..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var e=!0,t=n.component;return"ionBlur"===l&&(e=!1!==u.yb(n,32)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.yb(n,32)._handleInputEvent(o.target.value)&&e),"ngModelChange"===l&&(e=!1!==(t.searchTerm=o)&&e),"ionChange"===l&&(e=!1!==t.setFilteredItems()&&e),e},t.rb,t.C)),u.ob(31,49152,null,0,i.ib,[u.h,u.k],{placeholder:[0,"placeholder"]},null),u.ob(32,16384,null,0,i.Lb,[u.k],null,null),u.Cb(1024,null,r.g,function(n){return[n]},[i.Lb]),u.ob(34,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,r.h,null,[r.k]),u.ob(36,16384,null,0,r.i,[[4,r.h]],null,null),(n()(),u.pb(37,0,null,0,3,"ion-list",[],null,null,null,t.mb,t.x)),u.ob(38,49152,null,0,i.N,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,A)),u.ob(40,278528,null,0,a.j,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(41,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var u=!0;return"ionInfinite"===l&&(u=!1!==n.component.loadMoreBooks(o)&&u),u},t.fb,t.q)),u.ob(42,49152,null,0,i.D,[u.h,u.k],null,null)],function(n,l){var o=l.component;n(l,12,0,"pull for update","...updating"),n(l,19,0,"end","top"),n(l,23,0,"../assets/icon/caret-back.svg"),n(l,25,0,"start"),n(l,29,0,"primary","../assets/icon/add-circle.svg"),n(l,31,0,"Search by book title or language ..."),n(l,34,0,o.searchTerm),n(l,40,0,o.books)},function(n,l){n(l,30,0,u.yb(l,36).ngClassUntouched,u.yb(l,36).ngClassTouched,u.yb(l,36).ngClassPristine,u.yb(l,36).ngClassDirty,u.yb(l,36).ngClassValid,u.yb(l,36).ngClassInvalid,u.yb(l,36).ngClassPending)})}function R(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-tab3",[],null,null,null,j,q)),u.ob(1,4308992,null,0,E,[v.a,i.a,i.Eb,C.a,i.Fb,B.a,"baseURL",O.m,O.a,_.a,r.b,P,s.a,x.a,S,w.a,O.a],null,null)],function(n,l){n(l,1,0)},null)}var H=u.lb("app-tab3",E,R,{},{},[]),$=function(){return function(){}}();o.d(l,"Tab3PageModuleNgFactory",function(){return U});var U=u.mb(e,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[k,m.a,H]],[3,u.j],u.x]),u.wb(4608,a.m,a.l,[u.u,[2,a.s]]),u.wb(4608,r.p,r.p,[]),u.wb(4608,i.b,i.b,[u.z,u.g]),u.wb(4608,i.Eb,i.Eb,[i.b,u.j,u.q,a.d]),u.wb(4608,i.Ib,i.Ib,[i.b,u.j,u.q,a.d]),u.wb(4608,r.b,r.b,[]),u.wb(1073742336,a.c,a.c,[]),u.wb(1073742336,r.n,r.n,[]),u.wb(1073742336,r.f,r.f,[]),u.wb(1073742336,i.Cb,i.Cb,[]),u.wb(1073742336,r.l,r.l,[]),u.wb(1073742336,$,$,[]),u.wb(1073742336,O.o,O.o,[[2,O.u],[2,O.m]]),u.wb(1073742336,e,e,[]),u.wb(1024,O.k,function(){return[[{path:"",component:E}]]},[])])})}}]);