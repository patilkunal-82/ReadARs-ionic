(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{t68Q:function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),e=function(){return function(){}}(),u=o("pMnS"),i=o("oBZk"),r=o("ZZ/e"),b=o("ZYCi"),s=o("Ip0R"),a=function(){function n(){}return n.prototype.transform=function(n,l){return n.sort(function(n,o){return n[l.property]<o[l.property]?-1*l.order:n[l.property]>o[l.property]?1*l.order:0})},n}(),c=o("gIcY"),p=o("lGQG"),d=o("d5rD"),g=o("JhVf"),h=o("jjgk"),k=function(){function n(n,l,o,t,e,u,i){this.navCtrl=n,this.authService=l,this.booksService=o,this.readarsService=t,this.baseURL=e,this.router=u,this.searchedData=i,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.descending=!1,this.column="booklanguage",this.searchControl=new c.c}return n.prototype.ngOnInit=function(){this.setFilteredItems(),this.prepareBookIdsImagesMap()},n.prototype.ionViewWillEnter=function(){},n.prototype.sort=function(){this.descending=!this.descending,this.order=this.descending?1:-1},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.readarsService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},t=0;t<n.lbookIds.length;t++)o(t)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n}(),f=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-display[_ngcontent-%COMP%]{margin:5px;padding:5px}.book-image[_ngcontent-%COMP%]{margin:5px}"]],data:{}});function m(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-note",[["style","color: green"]],null,null,null,i.xb,i.D)),t.ob(1,49152,null,0,r.W,[t.h,t.k],null,null),(n()(),t.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function I(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-note",[["style","color: red"]],null,null,null,i.xb,i.D)),t.ob(1,49152,null,0,r.W,[t.h,t.k],null,null),(n()(),t.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function y(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-note",[["style","color: orangered"]],null,null,null,i.xb,i.D)),t.ob(1,49152,null,0,r.W,[t.h,t.k],null,null),(n()(),t.Gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.bookcurrentstatus)})}function x(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,20,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,o){var e=!0;return"click"===l&&(e=!1!==t.yb(n,2).onClick()&&e),"click"===l&&(e=!1!==t.yb(n,4).onClick(o)&&e),e},i.sb,i.v)),t.ob(1,49152,null,0,r.G,[t.h,t.k],{button:[0,"button"]},null),t.ob(2,16384,null,0,b.n,[b.m,b.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(3,2),t.ob(4,737280,null,0,r.Lb,[s.h,r.Hb,t.k,b.m,[2,b.n]],null,null),(n()(),t.pb(5,0,null,0,3,"ion-thumbnail",[],null,null,null,i.Lb,i.R)),t.ob(6,49152,null,0,r.xb,[t.h,t.k],null,null),(n()(),t.pb(7,0,null,0,1,"ion-img",[["class",""]],null,null,null,i.lb,i.r)),t.ob(8,49152,null,0,r.C,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.pb(9,0,null,0,11,"ion-label",[["class","ion-text-wrap"]],null,null,null,i.tb,i.z)),t.ob(10,49152,null,0,r.M,[t.h,t.k],null,null),(n()(),t.pb(11,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),t.Gb(12,null,["",""])),(n()(),t.pb(13,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),t.Gb(14,null,[" in ",". By - ","."])),(n()(),t.gb(16777216,null,0,1,null,m)),t.ob(16,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,I)),t.ob(18,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,y)),t.ob(20,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var o=l.component;n(l,1,0,"");var t=n(l,3,0,"bookdetail",l.context.$implicit._id);n(l,2,0,t),n(l,4,0),n(l,8,0,o.bookIdImageMap.get(l.context.$implicit._id)),n(l,16,0,"available"==l.context.$implicit.bookcurrentstatus),n(l,18,0,"borrowed"==l.context.$implicit.bookcurrentstatus),n(l,20,0,"reserved"==l.context.$implicit.bookcurrentstatus)},function(n,l){n(l,12,0,l.context.$implicit.bookname),n(l,14,0,l.context.$implicit.booklanguage,l.context.$implicit.bookauthor)})}function v(n){return t.Ib(0,[t.Ab(0,a,[]),(n()(),t.pb(1,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,i.jb,i.p)),t.ob(2,49152,null,0,r.A,[t.h,t.k],{translucent:[0,"translucent"]},null),(n()(),t.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,i.Nb,i.T)),t.ob(4,49152,null,0,r.Ab,[t.h,t.k],null,null),(n()(),t.pb(5,0,null,0,2,"ion-title",[["size","large"]],null,null,null,i.Mb,i.S)),t.ob(6,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Search "])),(n()(),t.pb(8,0,null,null,22,"ion-content",[],null,null,null,i.fb,i.l)),t.ob(9,49152,null,0,r.t,[t.h,t.k],null,null),(n()(),t.pb(10,0,null,0,6,"ion-searchbar",[["no-margin",""],["placeholder","..."],["shape","round"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,o){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==t.yb(n,12)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.yb(n,12)._handleInputEvent(o.target.value)&&e),"ngModelChange"===l&&(e=!1!==(u.searchTerm=o)&&e),"ionChange"===l&&(e=!1!==u.setFilteredItems()&&e),e},i.Bb,i.H)),t.ob(11,49152,null,0,r.ib,[t.h,t.k],{placeholder:[0,"placeholder"]},null),t.ob(12,16384,null,0,r.Nb,[t.k],null,null),t.Db(1024,null,c.g,function(n){return[n]},[r.Nb]),t.ob(14,671744,null,0,c.k,[[8,null],[8,null],[8,null],[6,c.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,c.h,null,[c.k]),t.ob(16,16384,null,0,c.i,[[4,c.h]],null,null),(n()(),t.pb(17,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var t=!0;return"ionRefresh"===l&&(t=!1!==n.component.refreshBookList(o)&&t),t},i.Ab,i.F)),t.ob(18,49152,null,0,r.bb,[t.h,t.k],null,null),(n()(),t.pb(19,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,i.zb,i.G)),t.ob(20,49152,null,0,r.cb,[t.h,t.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),t.pb(21,0,null,0,5,"ion-list",[],null,null,null,i.vb,i.A)),t.ob(22,49152,null,0,r.N,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,3,null,x)),t.ob(24,278528,null,0,s.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Bb(25,{property:0,order:1}),t.Cb(26,2),(n()(),t.pb(27,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadMoreBooks(o)&&t),t},i.nb,i.s)),t.ob(28,49152,null,0,r.D,[t.h,t.k],null,null),(n()(),t.pb(29,0,null,0,1,"ion-infinite-scroll-content",[["loadingText","..loading"]],null,null,null,i.mb,i.t)),t.ob(30,49152,null,0,r.E,[t.h,t.k],{loadingText:[0,"loadingText"]},null)],function(n,l){var o=l.component;n(l,2,0,!0),n(l,11,0,"..."),n(l,14,0,o.searchTerm),n(l,20,0,"pull for update","...updating");var e=t.Hb(l,24,0,n(l,26,0,t.yb(l,0),o.books,n(l,25,0,o.column,o.order)));n(l,24,0,e),n(l,30,0,"..loading")},function(n,l){n(l,10,0,t.yb(l,16).ngClassUntouched,t.yb(l,16).ngClassTouched,t.yb(l,16).ngClassPristine,t.yb(l,16).ngClassDirty,t.yb(l,16).ngClassValid,t.yb(l,16).ngClassInvalid,t.yb(l,16).ngClassPending)})}function w(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-tab4",[],null,null,null,v,f)),t.ob(1,4308992,null,0,k,[r.Hb,p.a,d.a,g.a,"baseURL",b.m,h.a],null,null)],function(n,l){n(l,1,0)},null)}var C=t.lb("app-tab4",k,w,{},{},[]);o.d(l,"Tab4PageModuleNgFactory",function(){return M});var M=t.mb(e,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[u.a,C]],[3,t.j],t.x]),t.wb(4608,s.l,s.k,[t.u,[2,s.r]]),t.wb(4608,r.b,r.b,[t.z,t.g]),t.wb(4608,r.Gb,r.Gb,[r.b,t.j,t.q,s.c]),t.wb(4608,r.Kb,r.Kb,[r.b,t.j,t.q,s.c]),t.wb(4608,c.p,c.p,[]),t.wb(4608,c.b,c.b,[]),t.wb(1073742336,s.b,s.b,[]),t.wb(1073742336,r.Cb,r.Cb,[]),t.wb(1073742336,c.n,c.n,[]),t.wb(1073742336,c.f,c.f,[]),t.wb(1073742336,c.l,c.l,[]),t.wb(1073742336,b.o,b.o,[[2,b.u],[2,b.m]]),t.wb(1073742336,e,e,[]),t.wb(1024,b.k,function(){return[[{path:"",component:k}]]},[])])})}}]);