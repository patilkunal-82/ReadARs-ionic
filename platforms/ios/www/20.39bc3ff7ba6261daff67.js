(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{pZl2:function(l,n,u){"use strict";u.r(n);var b=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),a=u("oBZk"),e=u("ZZ/e"),i=u("lGQG"),r=u("d5rD"),s=u("JhVf"),c=function(){function l(l,n,u,b,t){var o=this;this.authService=l,this.booksService=n,this.readarsService=u,this.baseURL=b,this.router=t,this.readarsService.getBooks().subscribe(function(l){o.books=l},function(l){return o.errMess=l})}return l.prototype.ngOnInit=function(){var l=this;this.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n})},l.prototype.ngAfterViewInit=function(){},l.prototype.logOut=function(){this.username=void 0,this.authService.logOut(),console.log("After authservice logout"),this.router.navigateByUrl("/login")},l}(),h=u("ZYCi"),p=b.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return b.Hb(0,[(l()(),b.pb(0,0,null,null,39,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,u){var t=!0;return"ionTabButtonClick"===n&&(t=!1!==b.yb(l,1).select(u.detail.tab)&&t),t},a.Gb,a.N)),b.ob(1,49152,null,1,e.ub,[e.Fb],null,null),b.Db(335544320,1,{tabBar:0}),(l()(),b.pb(3,0,null,1,36,"ion-tab-bar",[["slot","bottom"]],null,null,null,a.Eb,a.L)),b.ob(4,49152,[[1,4]],0,e.sb,[b.h,b.k],null,null),(l()(),b.pb(5,0,null,0,6,"ion-tab-button",[["tab","tab1"]],null,null,null,a.Fb,a.M)),b.ob(6,49152,null,0,e.tb,[b.h,b.k],{tab:[0,"tab"]},null),(l()(),b.pb(7,0,null,0,1,"ion-icon",[["src","../assets/icon/library.svg"]],null,null,null,a.kb,a.r)),b.ob(8,49152,null,0,e.B,[b.h,b.k],{src:[0,"src"]},null),(l()(),b.pb(9,0,null,0,2,"ion-label",[],null,null,null,a.tb,a.A)),b.ob(10,49152,null,0,e.M,[b.h,b.k],null,null),(l()(),b.Fb(-1,0,["ReadARs"])),(l()(),b.pb(12,0,null,0,6,"ion-tab-button",[["tab","tab3"]],null,null,null,a.Fb,a.M)),b.ob(13,49152,null,0,e.tb,[b.h,b.k],{tab:[0,"tab"]},null),(l()(),b.pb(14,0,null,0,1,"ion-icon",[["src","../assets/icon/book.svg"]],null,null,null,a.kb,a.r)),b.ob(15,49152,null,0,e.B,[b.h,b.k],{src:[0,"src"]},null),(l()(),b.pb(16,0,null,0,2,"ion-label",[],null,null,null,a.tb,a.A)),b.ob(17,49152,null,0,e.M,[b.h,b.k],null,null),(l()(),b.Fb(-1,0,["My Books"])),(l()(),b.pb(19,0,null,0,6,"ion-tab-button",[["tab","tab2"]],null,null,null,a.Fb,a.M)),b.ob(20,49152,null,0,e.tb,[b.h,b.k],{tab:[0,"tab"]},null),(l()(),b.pb(21,0,null,0,1,"ion-icon",[["src","../assets/icon/person.svg"]],null,null,null,a.kb,a.r)),b.ob(22,49152,null,0,e.B,[b.h,b.k],{src:[0,"src"]},null),(l()(),b.pb(23,0,null,0,2,"ion-label",[],null,null,null,a.tb,a.A)),b.ob(24,49152,null,0,e.M,[b.h,b.k],null,null),(l()(),b.Fb(-1,0,["Profile"])),(l()(),b.pb(26,0,null,0,6,"ion-tab-button",[["tab","tab4"]],null,null,null,a.Fb,a.M)),b.ob(27,49152,null,0,e.tb,[b.h,b.k],{tab:[0,"tab"]},null),(l()(),b.pb(28,0,null,0,1,"ion-icon",[["src","../assets/icon/search.svg"]],null,null,null,a.kb,a.r)),b.ob(29,49152,null,0,e.B,[b.h,b.k],{src:[0,"src"]},null),(l()(),b.pb(30,0,null,0,2,"ion-label",[],null,null,null,a.tb,a.A)),b.ob(31,49152,null,0,e.M,[b.h,b.k],null,null),(l()(),b.Fb(-1,0,["Search"])),(l()(),b.pb(33,0,null,0,6,"ion-tab-button",[["tab","logout"]],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.logOut()&&b),b},a.Fb,a.M)),b.ob(34,49152,null,0,e.tb,[b.h,b.k],{tab:[0,"tab"]},null),(l()(),b.pb(35,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,a.kb,a.r)),b.ob(36,49152,null,0,e.B,[b.h,b.k],{name:[0,"name"]},null),(l()(),b.pb(37,0,null,0,2,"ion-label",[],null,null,null,a.tb,a.A)),b.ob(38,49152,null,0,e.M,[b.h,b.k],null,null),(l()(),b.Fb(-1,0,["Log Out"]))],function(l,n){l(n,6,0,"tab1"),l(n,8,0,"../assets/icon/library.svg"),l(n,13,0,"tab3"),l(n,15,0,"../assets/icon/book.svg"),l(n,20,0,"tab2"),l(n,22,0,"../assets/icon/person.svg"),l(n,27,0,"tab4"),l(n,29,0,"../assets/icon/search.svg"),l(n,34,0,"logout"),l(n,36,0,"log-out")},null)}function k(l){return b.Hb(0,[(l()(),b.pb(0,0,null,null,1,"app-tabs",[],null,null,null,d,p)),b.ob(1,4308992,null,0,c,[i.a,r.a,s.a,"baseURL",h.m],null,null)],function(l,n){l(n,1,0)},null)}var g=b.lb("app-tabs",c,k,{},{},[]),f=u("Ip0R"),v=u("gIcY"),M=u("MKys"),w=function(){return function(){}}();u.d(n,"TabsPageModuleNgFactory",function(){return m});var m=b.mb(t,[],function(l){return b.vb([b.wb(512,b.j,b.bb,[[8,[o.a,g]],[3,b.j],b.x]),b.wb(4608,f.l,f.k,[b.u,[2,f.r]]),b.wb(4608,e.b,e.b,[b.z,b.g]),b.wb(4608,e.Eb,e.Eb,[e.b,b.j,b.q,f.c]),b.wb(4608,e.Ib,e.Ib,[e.b,b.j,b.q,f.c]),b.wb(4608,v.p,v.p,[]),b.wb(1073742336,f.b,f.b,[]),b.wb(1073742336,e.Cb,e.Cb,[]),b.wb(1073742336,v.n,v.n,[]),b.wb(1073742336,v.f,v.f,[]),b.wb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),b.wb(1073742336,w,w,[]),b.wb(1073742336,t,t,[]),b.wb(1024,h.k,function(){return[[{path:"tabs",component:c,canActivate:[M.a],children:[{path:"tab1",children:[{path:"",loadChildren:"../tab1/tab1.module#Tab1PageModule"},{path:"bookdetail/:bookID",loadChildren:"../bookdetail/bookdetail.module#BookdetailPageModule"}]},{path:"tab2",children:[{path:"",loadChildren:"../tab2/tab2.module#Tab2PageModule"}]},{path:"tab3",children:[{path:"",loadChildren:"../tab3/tab3.module#Tab3PageModule"}]},{path:"tab4",children:[{path:"",loadChildren:"../tab4/tab4.module#Tab4PageModule"},{path:"bookdetail/:bookID",loadChildren:"../bookdetail/bookdetail.module#BookdetailPageModule"}]}]},{path:"",redirectTo:"/login",pathMatch:"full"}]]},[])])})}}]);