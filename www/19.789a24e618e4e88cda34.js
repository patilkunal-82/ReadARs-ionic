(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{t68Q:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),u=function(){return function(){}}(),t=o("pMnS"),r=o("oBZk"),i=o("ZZ/e"),s=o("ZYCi"),c=o("Ip0R"),b=function(){function n(){}return n.prototype.transform=function(n,l){return n.sort(function(n,o){return n[l.property]<o[l.property]?-1*l.order:n[l.property]>o[l.property]?1*l.order:0})},n}(),a=o("gIcY"),p=o("lGQG"),g=o("d5rD"),d=o("JhVf"),h=o("jjgk"),k=function(){function n(n,l,o,e,u,t,r){this.navCtrl=n,this.authService=l,this.booksService=o,this.readarsService=e,this.baseURL=u,this.router=t,this.searchedData=r,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.descending=!1,this.column="booklanguage",this.searchControl=new a.c}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),this.prepareBookIdsImagesMap()},n.prototype.sort=function(){this.descending=!this.descending,this.order=this.descending?1:-1},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.readarsService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},e=0;e<n.lbookIds.length;e++)o(e)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n}(),f=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-display[_ngcontent-%COMP%]{margin:5px;padding:5px}.book-image[_ngcontent-%COMP%]{border:1px solid gray;margin:5px}"]],data:{}});function m(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,r.kb,r.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"success","checkmark-circle")},null)}function I(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,r.kb,r.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"danger","close-circle")},null)}function y(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/pause-circle.svg"]],null,null,null,r.kb,r.r)),e.ob(1,49152,null,0,i.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(n,l){n(l,1,0,"warning","../assets/icon/pause-circle.svg")},null)}function v(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,21,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==e.yb(n,2).onClick()&&u),"click"===l&&(u=!1!==e.yb(n,4).onClick(o)&&u),u},r.sb,r.w)),e.ob(1,49152,null,0,i.G,[e.h,e.k],{button:[0,"button"]},null),e.ob(2,16384,null,0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(3,2),e.ob(4,737280,null,0,i.Kb,[c.h,i.Gb,e.k,s.m,[2,s.n]],null,null),(n()(),e.pb(5,0,null,0,16,"ion-label",[["class","book-display"]],null,null,null,r.tb,r.A)),e.ob(6,49152,null,0,i.M,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Gb(8,null,["",""])),(n()(),e.pb(9,0,null,0,8,"ion-chip",[["color","primary"],["size","mini"]],null,null,null,r.db,r.k)),e.ob(10,49152,null,0,i.r,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,[" Available ? "])),(n()(),e.gb(16777216,null,0,1,null,m)),e.ob(13,16384,null,0,c.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,I)),e.ob(15,16384,null,0,c.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,y)),e.ob(17,16384,null,0,c.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(18,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),e.Gb(19,null,["",""])),(n()(),e.pb(20,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),e.Gb(21,null,[" in ",". By - ","."]))],function(n,l){n(l,1,0,"");var o=n(l,3,0,"bookdetail",l.context.$implicit._id);n(l,2,0,o),n(l,4,0),n(l,10,0,"primary"),n(l,13,0,l.context.$implicit.isAvailable),n(l,15,0,l.context.$implicit.isBorrowed),n(l,17,0,l.context.$implicit.isReserved)},function(n,l){n(l,8,0,l.context.$implicit.bookname),n(l,19,0,l.context.$implicit.bookdescription),n(l,21,0,l.context.$implicit.booklanguage,l.context.$implicit.bookauthor)})}function w(n){return e.Ib(0,[e.Ab(0,b,[]),(n()(),e.pb(1,0,null,null,8,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,r.jb,r.q)),e.ob(2,49152,null,0,i.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(n()(),e.pb(3,0,null,0,6,"ion-toolbar",[],null,null,null,r.Lb,r.S)),e.ob(4,49152,null,0,i.Ab,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,4,"ion-title",[["size","large"]],null,null,null,r.Kb,r.R)),e.ob(6,49152,null,0,i.yb,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,2,"h1",[["style","font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,[" Search"])),(n()(),e.pb(10,0,null,null,22,"ion-content",[],null,null,null,r.fb,r.m)),e.ob(11,49152,null,0,i.t,[e.h,e.k],null,null),(n()(),e.pb(12,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","Search by book title or language or author..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var u=!0,t=n.component;return"ionBlur"===l&&(u=!1!==e.yb(n,14)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.yb(n,14)._handleInputEvent(o.target.value)&&u),"ngModelChange"===l&&(u=!1!==(t.searchTerm=o)&&u),"ionChange"===l&&(u=!1!==t.setFilteredItems()&&u),u},r.zb,r.G)),e.ob(13,49152,null,0,i.ib,[e.h,e.k],{placeholder:[0,"placeholder"]},null),e.ob(14,16384,null,0,i.Mb,[e.k],null,null),e.Db(1024,null,a.g,function(n){return[n]},[i.Mb]),e.ob(16,671744,null,0,a.k,[[8,null],[8,null],[8,null],[6,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,a.h,null,[a.k]),e.ob(18,16384,null,0,a.i,[[4,a.h]],null,null),(n()(),e.pb(19,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.refreshBookList(o)&&e),e},r.xb,r.D)),e.ob(20,49152,null,0,i.bb,[e.h,e.k],null,null),(n()(),e.pb(21,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,r.wb,r.E)),e.ob(22,49152,null,0,i.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.pb(23,0,null,0,5,"ion-list",[],null,null,null,r.ub,r.B)),e.ob(24,49152,null,0,i.N,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,3,null,v)),e.ob(26,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),e.Bb(27,{property:0,order:1}),e.Cb(28,2),(n()(),e.pb(29,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadMoreBooks(o)&&e),e},r.nb,r.t)),e.ob(30,49152,null,0,i.D,[e.h,e.k],null,null),(n()(),e.pb(31,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","..loading"]],null,null,null,r.mb,r.u)),e.ob(32,49152,null,0,i.E,[e.h,e.k],{loadingText:[0,"loadingText"]},null)],function(n,l){var o=l.component;n(l,2,0,!0),n(l,13,0,"Search by book title or language or author..."),n(l,16,0,o.searchTerm),n(l,22,0,"pull for update","...updating");var u=e.Hb(l,26,0,n(l,28,0,e.yb(l,0),o.books,n(l,27,0,o.column,o.order)));n(l,26,0,u),n(l,32,0,"..loading")},function(n,l){n(l,12,0,e.yb(l,18).ngClassUntouched,e.yb(l,18).ngClassTouched,e.yb(l,18).ngClassPristine,e.yb(l,18).ngClassDirty,e.yb(l,18).ngClassValid,e.yb(l,18).ngClassInvalid,e.yb(l,18).ngClassPending)})}function x(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-tab4",[],null,null,null,w,f)),e.ob(1,4308992,null,0,k,[i.Gb,p.a,g.a,d.a,"baseURL",s.m,h.a],null,null)],function(n,l){n(l,1,0)},null)}var C=e.lb("app-tab4",k,x,{},{},[]);o.d(l,"Tab4PageModuleNgFactory",function(){return M});var M=e.mb(u,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[t.a,C]],[3,e.j],e.x]),e.wb(4608,c.l,c.k,[e.u,[2,c.r]]),e.wb(4608,i.b,i.b,[e.z,e.g]),e.wb(4608,i.Fb,i.Fb,[i.b,e.j,e.q,c.c]),e.wb(4608,i.Jb,i.Jb,[i.b,e.j,e.q,c.c]),e.wb(4608,a.p,a.p,[]),e.wb(4608,a.b,a.b,[]),e.wb(1073742336,c.b,c.b,[]),e.wb(1073742336,i.Cb,i.Cb,[]),e.wb(1073742336,a.n,a.n,[]),e.wb(1073742336,a.f,a.f,[]),e.wb(1073742336,a.l,a.l,[]),e.wb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),e.wb(1073742336,u,u,[]),e.wb(1024,s.k,function(){return[[{path:"",component:k}]]},[])])})}}]);