(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{t68Q:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),u=function(){return function(){}}(),t=o("pMnS"),i=o("oBZk"),r=o("ZZ/e"),b=o("ZYCi"),s=o("Ip0R"),c=o("gIcY"),a=o("lGQG"),p=o("d5rD"),g=o("JhVf"),d=o("jjgk"),h=function(){function n(n,l,o,e,u,t,i){this.navCtrl=n,this.authService=l,this.booksService=o,this.readarsService=e,this.baseURL=u,this.router=t,this.searchedData=i,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.searchControl=new c.c}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),this.prepareBookIdsImagesMap()},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.readarsService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},e=0;e<n.lbookIds.length;e++)o(e)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n}(),k=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-display[_ngcontent-%COMP%]{margin:5px;padding:5px}.book-image[_ngcontent-%COMP%]{border:1px solid gray;margin:5px}"]],data:{}});function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,i.kb,i.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"success","checkmark-circle")},null)}function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,i.kb,i.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"danger","close-circle")},null)}function I(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/pause-circle.svg"]],null,null,null,i.kb,i.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(n,l){n(l,1,0,"warning","../assets/icon/pause-circle.svg")},null)}function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,21,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==e.yb(n,2).onClick()&&u),"click"===l&&(u=!1!==e.yb(n,4).onClick(o)&&u),u},i.sb,i.w)),e.ob(1,49152,null,0,r.G,[e.h,e.k],{button:[0,"button"]},null),e.ob(2,16384,null,0,b.n,[b.m,b.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(3,2),e.ob(4,737280,null,0,r.Kb,[s.h,r.Gb,e.k,b.m,[2,b.n]],null,null),(n()(),e.pb(5,0,null,0,16,"ion-label",[["class","book-display"]],null,null,null,i.tb,i.A)),e.ob(6,49152,null,0,r.M,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Fb(8,null,["",""])),(n()(),e.pb(9,0,null,0,8,"ion-chip",[["color","primary"],["size","mini"]],null,null,null,i.db,i.k)),e.ob(10,49152,null,0,r.r,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,[" Available ? "])),(n()(),e.gb(16777216,null,0,1,null,f)),e.ob(13,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,m)),e.ob(15,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,I)),e.ob(17,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(18,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Fb(19,null,["",""])),(n()(),e.pb(20,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),e.Fb(21,null,[" in ",". By - ","."]))],function(n,l){n(l,1,0,"");var o=n(l,3,0,"bookdetail",l.context.$implicit._id);n(l,2,0,o),n(l,4,0),n(l,10,0,"primary"),n(l,13,0,l.context.$implicit.isAvailable),n(l,15,0,l.context.$implicit.isBorrowed),n(l,17,0,l.context.$implicit.isReserved)},function(n,l){n(l,8,0,l.context.$implicit.bookname),n(l,19,0,l.context.$implicit.bookdescription),n(l,21,0,l.context.$implicit.booklanguage,l.context.$implicit.bookauthor)})}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,i.jb,i.q)),e.ob(1,49152,null,0,r.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(n()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.Lb,i.S)),e.ob(3,49152,null,0,r.Ab,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,i.Kb,i.R)),e.ob(5,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,[" Search... "])),(n()(),e.pb(7,0,null,null,20,"ion-content",[],null,null,null,i.fb,i.m)),e.ob(8,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search by book title or language or author..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var u=!0,t=n.component;return"ionBlur"===l&&(u=!1!==e.yb(n,11)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.yb(n,11)._handleInputEvent(o.target.value)&&u),"ngModelChange"===l&&(u=!1!==(t.searchTerm=o)&&u),"ionChange"===l&&(u=!1!==t.setFilteredItems()&&u),u},i.zb,i.G)),e.ob(10,49152,null,0,r.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(11,16384,null,0,r.Mb,[e.k],null,null),e.Cb(1024,null,c.g,function(n){return[n]},[r.Mb]),e.ob(13,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,c.h,null,[c.k]),e.ob(15,16384,null,0,c.i,[[4,c.h]],null,null),(n()(),e.pb(16,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.refreshBookList(o)&&e),e},i.xb,i.D)),e.ob(17,49152,null,0,r.bb,[e.h,e.k],null,null),(n()(),e.pb(18,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,i.wb,i.E)),e.ob(19,49152,null,0,r.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.pb(20,0,null,0,3,"ion-list",[],null,null,null,i.ub,i.B)),e.ob(21,49152,null,0,r.N,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(23,278528,null,0,s.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(24,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadMoreBooks(o)&&e),e},i.nb,i.t)),e.ob(25,49152,null,0,r.D,[e.h,e.k],null,null),(n()(),e.pb(26,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","..loading"]],null,null,null,i.mb,i.u)),e.ob(27,49152,null,0,r.E,[e.h,e.k],{loadingText:[0,"loadingText"]},null)],function(n,l){var o=l.component;n(l,1,0,!0),n(l,10,0,"Search by book title or language or author..."),n(l,13,0,o.searchTerm),n(l,19,0,"pull for update","...updating"),n(l,23,0,o.books),n(l,27,0,"..loading")},function(n,l){n(l,9,0,e.yb(l,15).ngClassUntouched,e.yb(l,15).ngClassTouched,e.yb(l,15).ngClassPristine,e.yb(l,15).ngClassDirty,e.yb(l,15).ngClassValid,e.yb(l,15).ngClassInvalid,e.yb(l,15).ngClassPending)})}function w(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-tab4",[],null,null,null,y,k)),e.ob(1,4308992,null,0,h,[r.Gb,a.a,p.a,g.a,"baseURL",b.m,d.a],null,null)],function(n,l){n(l,1,0)},null)}var x=e.lb("app-tab4",h,w,{},{},[]);o.d(l,"Tab4PageModuleNgFactory",function(){return C});var C=e.mb(u,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[t.a,x]],[3,e.j],e.x]),e.wb(4608,s.l,s.k,[e.u,[2,s.r]]),e.wb(4608,r.b,r.b,[e.z,e.g]),e.wb(4608,r.Fb,r.Fb,[r.b,e.j,e.q,s.c]),e.wb(4608,r.Jb,r.Jb,[r.b,e.j,e.q,s.c]),e.wb(4608,c.p,c.p,[]),e.wb(4608,c.b,c.b,[]),e.wb(1073742336,s.b,s.b,[]),e.wb(1073742336,r.Cb,r.Cb,[]),e.wb(1073742336,c.n,c.n,[]),e.wb(1073742336,c.f,c.f,[]),e.wb(1073742336,c.l,c.l,[]),e.wb(1073742336,b.o,b.o,[[2,b.u],[2,b.m]]),e.wb(1073742336,u,u,[]),e.wb(1024,b.k,function(){return[[{path:"",component:h}]]},[])])})}}]);