(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),t=function(){return function(){}}(),u=o("pMnS"),i=o("oBZk"),r=o("ZZ/e"),c=o("ZYCi"),b=o("Ip0R"),s=o("lGQG"),a=o("d5rD"),p=o("JhVf"),h=o("jjgk"),k=o("gIcY"),d=function(){function n(n,l,o,e,t,u,i){this.navCtrl=n,this.authService=l,this.booksService=o,this.readarsService=e,this.baseURL=t,this.router=u,this.searchedData=i,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.searchControl=new k.c}return n.prototype.ngOnInit=function(){this.setFilteredItems()},n.prototype.ionViewWillEnter=function(){var n=this;this.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),this.prepareBookIdsImagesMap()},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.readarsService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},e=0;e<n.lbookIds.length;e++)o(e)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n}(),f=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}"]],data:{}});function g(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,i.kb,i.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"success","checkmark-circle")},null)}function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,i.kb,i.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(n,l){n(l,1,0,"danger","close-circle")},null)}function I(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,24,"ion-card",[["button",""],["no-margin",""]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.yb(n,2).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,4).onClick(o)&&t),t},i.cb,i.f)),e.ob(1,49152,null,0,r.l,[e.h,e.k],{button:[0,"button"]},null),e.ob(2,16384,null,0,c.n,[c.m,c.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(3,2),e.ob(4,737280,null,0,r.Jb,[b.h,r.Fb,e.k,c.m,[2,c.n]],null,null),(n()(),e.pb(5,0,null,0,11,"ion-card-header",[],null,null,null,i.Z,i.h)),e.ob(6,49152,null,0,r.n,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,9,"ion-card-title",[],null,null,null,i.bb,i.j)),e.ob(8,49152,null,0,r.p,[e.h,e.k],null,null),(n()(),e.Fb(9,0,[" "," "])),(n()(),e.pb(10,0,null,0,6,"ion-chip",[["color","primary"]],null,null,null,i.db,i.k)),e.ob(11,49152,null,0,r.r,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,[" Available? "])),(n()(),e.gb(16777216,null,0,1,null,g)),e.ob(14,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,m)),e.ob(16,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(17,0,null,0,7,"ion-card-content",[],null,null,null,i.Y,i.g)),e.ob(18,49152,null,0,r.m,[e.h,e.k],null,null),(n()(),e.pb(19,0,null,0,5,"ion-row",[],null,null,null,i.yb,i.F)),e.ob(20,49152,null,0,r.hb,[e.h,e.k],null,null),(n()(),e.pb(21,0,null,0,3,"ion-col",[],null,null,null,i.eb,i.l)),e.ob(22,49152,null,0,r.s,[e.h,e.k],null,null),(n()(),e.pb(23,0,null,0,1,"ion-img",[["class","book-image"]],null,null,null,i.lb,i.s)),e.ob(24,49152,null,0,r.C,[e.h,e.k],{src:[0,"src"]},null)],function(n,l){var o=l.component;n(l,1,0,"");var e=n(l,3,0,"bookdetail",l.context.$implicit._id);n(l,2,0,e),n(l,4,0),n(l,11,0,"primary"),n(l,14,0,l.context.$implicit.isAvailable),n(l,16,0,l.context.$implicit.isReserved||l.context.$implicit.isBorrowed),n(l,24,0,o.bookIdImageMap.get(l.context.$implicit._id))},function(n,l){n(l,9,0,l.context.$implicit.bookname)})}function w(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,i.jb,i.q)),e.ob(1,49152,null,0,r.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(n()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.Lb,i.S)),e.ob(3,49152,null,0,r.Ab,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,i.Kb,i.R)),e.ob(5,49152,null,0,r.yb,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,[" Collections.. "])),(n()(),e.pb(7,0,null,null,9,"ion-content",[],null,null,null,i.fb,i.m)),e.ob(8,49152,null,0,r.t,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.refreshBookList(o)&&e),e},i.xb,i.D)),e.ob(10,49152,null,0,r.bb,[e.h,e.k],null,null),(n()(),e.pb(11,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,i.wb,i.E)),e.ob(12,49152,null,0,r.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.gb(16777216,null,0,1,null,I)),e.ob(14,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(15,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadMoreBooks(o)&&e),e},i.nb,i.t)),e.ob(16,49152,null,0,r.D,[e.h,e.k],null,null)],function(n,l){var o=l.component;n(l,1,0,!0),n(l,12,0,"pull for update","...updating"),n(l,14,0,o.books)},null)}function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-tab1",[],null,null,null,w,f)),e.ob(1,4308992,null,0,d,[r.Fb,s.a,a.a,p.a,"baseURL",c.m,h.a],null,null)],function(n,l){n(l,1,0)},null)}var x=e.lb("app-tab1",d,v,{},{},[]);o.d(l,"Tab1PageModuleNgFactory",function(){return y});var y=e.mb(t,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[u.a,x]],[3,e.j],e.x]),e.wb(4608,b.l,b.k,[e.u,[2,b.r]]),e.wb(4608,r.b,r.b,[e.z,e.g]),e.wb(4608,r.Eb,r.Eb,[r.b,e.j,e.q,b.c]),e.wb(4608,r.Ib,r.Ib,[r.b,e.j,e.q,b.c]),e.wb(4608,k.p,k.p,[]),e.wb(4608,k.b,k.b,[]),e.wb(1073742336,b.b,b.b,[]),e.wb(1073742336,r.Cb,r.Cb,[]),e.wb(1073742336,k.n,k.n,[]),e.wb(1073742336,k.f,k.f,[]),e.wb(1073742336,k.l,k.l,[]),e.wb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),e.wb(1073742336,t,t,[]),e.wb(1024,c.k,function(){return[[{path:"",component:d}]]},[])])})}}]);