(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{pZl2:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),b=function(){return function(){}}(),o=u("pMnS"),a=u("oBZk"),e=u("ZZ/e"),i=u("lGQG"),r=u("d5rD"),s=u("JhVf"),c=function(){function l(l,n,u,t,b){var o=this;this.authService=l,this.booksService=n,this.readarsService=u,this.baseURL=t,this.router=b,this.readarsService.getBooks().subscribe(function(l){o.books=l},function(l){return o.errMess=l})}return l.prototype.ngOnInit=function(){var l=this;this.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n})},l.prototype.ngAfterViewInit=function(){},l.prototype.logOut=function(){this.username=void 0,this.authService.logOut(),console.log("After authservice logout"),this.router.navigateByUrl("/login")},l}(),p=u("ZYCi"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,32,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,u){var b=!0;return"ionTabButtonClick"===n&&(b=!1!==t.yb(l,1).select(u.detail.tab)&&b),b},a.zb,a.K)),t.ob(1,49152,null,1,e.ub,[e.Fb],null,null),t.Db(335544320,1,{tabBar:0}),(l()(),t.pb(3,0,null,1,29,"ion-tab-bar",[["slot","bottom"]],null,null,null,a.xb,a.I)),t.ob(4,49152,[[1,4]],0,e.sb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,6,"ion-tab-button",[["tab","tab1"]],null,null,null,a.yb,a.J)),t.ob(6,49152,null,0,e.tb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(7,0,null,0,1,"ion-icon",[["src","../assets/icon/library.svg"]],null,null,null,a.eb,a.p)),t.ob(8,49152,null,0,e.B,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(9,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.x)),t.ob(10,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["ReadARs"])),(l()(),t.pb(12,0,null,0,6,"ion-tab-button",[["tab","tab3"]],null,null,null,a.yb,a.J)),t.ob(13,49152,null,0,e.tb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(14,0,null,0,1,"ion-icon",[["src","../assets/icon/book.svg"]],null,null,null,a.eb,a.p)),t.ob(15,49152,null,0,e.B,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(16,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.x)),t.ob(17,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["My Books"])),(l()(),t.pb(19,0,null,0,6,"ion-tab-button",[["tab","tab2"]],null,null,null,a.yb,a.J)),t.ob(20,49152,null,0,e.tb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(21,0,null,0,1,"ion-icon",[["src","../assets/icon/person.svg"]],null,null,null,a.eb,a.p)),t.ob(22,49152,null,0,e.B,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(23,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.x)),t.ob(24,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Profile"])),(l()(),t.pb(26,0,null,0,6,"ion-tab-button",[["tab","logout"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logOut()&&t),t},a.yb,a.J)),t.ob(27,49152,null,0,e.tb,[t.h,t.k],{tab:[0,"tab"]},null),(l()(),t.pb(28,0,null,0,1,"ion-icon",[["name","log-out"]],null,null,null,a.eb,a.p)),t.ob(29,49152,null,0,e.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(30,0,null,0,2,"ion-label",[],null,null,null,a.mb,a.x)),t.ob(31,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Log Out"]))],function(l,n){l(n,6,0,"tab1"),l(n,8,0,"../assets/icon/library.svg"),l(n,13,0,"tab3"),l(n,15,0,"../assets/icon/book.svg"),l(n,20,0,"tab2"),l(n,22,0,"../assets/icon/person.svg"),l(n,27,0,"logout"),l(n,29,0,"log-out")},null)}function k(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-tabs",[],null,null,null,d,h)),t.ob(1,4308992,null,0,c,[i.a,r.a,s.a,"baseURL",p.m],null,null)],function(l,n){l(n,1,0)},null)}var g=t.lb("app-tabs",c,k,{},{},[]),f=u("Ip0R"),v=u("gIcY"),w=u("MKys"),m=function(){return function(){}}();u.d(n,"TabsPageModuleNgFactory",function(){return y});var y=t.mb(b,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,g]],[3,t.j],t.x]),t.wb(4608,f.l,f.k,[t.u,[2,f.r]]),t.wb(4608,e.b,e.b,[t.z,t.g]),t.wb(4608,e.Eb,e.Eb,[e.b,t.j,t.q,f.c]),t.wb(4608,e.Ib,e.Ib,[e.b,t.j,t.q,f.c]),t.wb(4608,v.p,v.p,[]),t.wb(1073742336,f.b,f.b,[]),t.wb(1073742336,e.Cb,e.Cb,[]),t.wb(1073742336,v.n,v.n,[]),t.wb(1073742336,v.f,v.f,[]),t.wb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),t.wb(1073742336,m,m,[]),t.wb(1073742336,b,b,[]),t.wb(1024,p.k,function(){return[[{path:"tabs",component:c,canActivate:[w.a],children:[{path:"tab1",children:[{path:"",loadChildren:"../tab1/tab1.module#Tab1PageModule"},{path:"bookdetail/:bookID",loadChildren:"../bookdetail/bookdetail.module#BookdetailPageModule"}]},{path:"tab2",children:[{path:"",loadChildren:"../tab2/tab2.module#Tab2PageModule"}]},{path:"tab3",children:[{path:"",loadChildren:"../tab3/tab3.module#Tab3PageModule"}]}]},{path:"",redirectTo:"/login",pathMatch:"full"}]]},[])])})}}]);