(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{pZl2:function(l,n,b){"use strict";b.r(n);var u=b("CcnG"),t=function(){return function(){}}(),o=b("pMnS"),a=b("oBZk"),e=b("ZZ/e"),i=b("lGQG"),r=b("d5rD"),s=b("JhVf"),c=function(){function l(l,n,b,u,t){var o=this;this.authService=l,this.booksService=n,this.readarsService=b,this.baseURL=u,this.router=t,this.readarsService.getBooks().subscribe(function(l){o.books=l},function(l){return o.errMess=l})}return l.prototype.ngOnInit=function(){var l=this;this.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n})},l.prototype.ngAfterViewInit=function(){},l.prototype.logOut=function(){this.username=void 0,this.authService.logOut(),console.log("After authservice logout"),this.router.navigateByUrl("/login")},l}(),h=b("ZYCi"),p=u.nb({encapsulation:0,styles:[["ion-tab-bar[_ngcontent-%COMP%]{--background:#F7F9F9}ion-tab-button[_ngcontent-%COMP%]{--color-selected:#145A32}"]],data:{}});function d(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,39,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,b){var t=!0;return"ionTabButtonClick"===n&&(t=!1!==u.yb(l,1).select(b.detail.tab)&&t),t},a.Kb,a.P)),u.ob(1,49152,null,1,e.ub,[e.Hb],null,null),u.Eb(335544320,1,{tabBar:0}),(l()(),u.pb(3,0,null,1,36,"ion-tab-bar",[["slot","bottom"]],null,null,null,a.Ib,a.N)),u.ob(4,49152,[[1,4]],0,e.sb,[u.h,u.k],null,null),(l()(),u.pb(5,0,null,0,6,"ion-tab-button",[["tab","tab1"]],null,null,null,a.Jb,a.O)),u.ob(6,49152,null,0,e.tb,[u.h,u.k],{tab:[0,"tab"]},null),(l()(),u.pb(7,0,null,0,1,"ion-icon",[["src","../assets/icon/library.svg"]],null,null,null,a.mb,a.r)),u.ob(8,49152,null,0,e.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(9,0,null,0,2,"ion-label",[],null,null,null,a.ub,a.z)),u.ob(10,49152,null,0,e.M,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["Library"])),(l()(),u.pb(12,0,null,0,6,"ion-tab-button",[["tab","tab5"]],null,null,null,a.Jb,a.O)),u.ob(13,49152,null,0,e.tb,[u.h,u.k],{tab:[0,"tab"]},null),(l()(),u.pb(14,0,null,0,1,"ion-icon",[["src","../assets/icon/scan.svg"]],null,null,null,a.mb,a.r)),u.ob(15,49152,null,0,e.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(16,0,null,0,2,"ion-label",[],null,null,null,a.ub,a.z)),u.ob(17,49152,null,0,e.M,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["AR"])),(l()(),u.pb(19,0,null,0,6,"ion-tab-button",[["tab","tab3"]],null,null,null,a.Jb,a.O)),u.ob(20,49152,null,0,e.tb,[u.h,u.k],{tab:[0,"tab"]},null),(l()(),u.pb(21,0,null,0,1,"ion-icon",[["src","../assets/icon/book.svg"]],null,null,null,a.mb,a.r)),u.ob(22,49152,null,0,e.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(23,0,null,0,2,"ion-label",[],null,null,null,a.ub,a.z)),u.ob(24,49152,null,0,e.M,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["My Books"])),(l()(),u.pb(26,0,null,0,6,"ion-tab-button",[["tab","tab4"]],null,null,null,a.Jb,a.O)),u.ob(27,49152,null,0,e.tb,[u.h,u.k],{tab:[0,"tab"]},null),(l()(),u.pb(28,0,null,0,1,"ion-icon",[["src","../assets/icon/search.svg"]],null,null,null,a.mb,a.r)),u.ob(29,49152,null,0,e.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(30,0,null,0,2,"ion-label",[],null,null,null,a.ub,a.z)),u.ob(31,49152,null,0,e.M,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["Search"])),(l()(),u.pb(33,0,null,0,6,"ion-tab-button",[["tab","tab2"]],null,null,null,a.Jb,a.O)),u.ob(34,49152,null,0,e.tb,[u.h,u.k],{tab:[0,"tab"]},null),(l()(),u.pb(35,0,null,0,1,"ion-icon",[["src","../assets/icon/person.svg"]],null,null,null,a.mb,a.r)),u.ob(36,49152,null,0,e.B,[u.h,u.k],{src:[0,"src"]},null),(l()(),u.pb(37,0,null,0,2,"ion-label",[],null,null,null,a.ub,a.z)),u.ob(38,49152,null,0,e.M,[u.h,u.k],null,null),(l()(),u.Gb(-1,0,["Me"]))],function(l,n){l(n,6,0,"tab1"),l(n,8,0,"../assets/icon/library.svg"),l(n,13,0,"tab5"),l(n,15,0,"../assets/icon/scan.svg"),l(n,20,0,"tab3"),l(n,22,0,"../assets/icon/book.svg"),l(n,27,0,"tab4"),l(n,29,0,"../assets/icon/search.svg"),l(n,34,0,"tab2"),l(n,36,0,"../assets/icon/person.svg")},null)}function k(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"app-tabs",[],null,null,null,d,p)),u.ob(1,4308992,null,0,c,[i.a,r.a,s.a,"baseURL",h.m],null,null)],function(l,n){l(n,1,0)},null)}var g=u.lb("app-tabs",c,k,{},{},[]),f=b("Ip0R"),v=b("gIcY"),M=b("MKys"),w=function(){return function(){}}();b.d(n,"TabsPageModuleNgFactory",function(){return m});var m=u.mb(t,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[o.a,g]],[3,u.j],u.x]),u.wb(4608,f.l,f.k,[u.u,[2,f.r]]),u.wb(4608,e.b,e.b,[u.z,u.g]),u.wb(4608,e.Gb,e.Gb,[e.b,u.j,u.q,f.c]),u.wb(4608,e.Kb,e.Kb,[e.b,u.j,u.q,f.c]),u.wb(4608,v.p,v.p,[]),u.wb(1073742336,f.b,f.b,[]),u.wb(1073742336,e.Cb,e.Cb,[]),u.wb(1073742336,v.n,v.n,[]),u.wb(1073742336,v.f,v.f,[]),u.wb(1073742336,h.o,h.o,[[2,h.u],[2,h.m]]),u.wb(1073742336,w,w,[]),u.wb(1073742336,t,t,[]),u.wb(1024,h.k,function(){return[[{path:"tabs",component:c,canActivate:[M.a],children:[{path:"tab1",children:[{path:"",loadChildren:"../tab1/tab1.module#Tab1PageModule"},{path:"bookdetail/:bookID",loadChildren:"../bookdetail/bookdetail.module#BookdetailPageModule"}]},{path:"tab2",children:[{path:"",loadChildren:"../tab2/tab2.module#Tab2PageModule"}]},{path:"tab3",children:[{path:"",loadChildren:"../tab3/tab3.module#Tab3PageModule"}]},{path:"tab4",children:[{path:"",loadChildren:"../tab4/tab4.module#Tab4PageModule"},{path:"bookdetail/:bookID",loadChildren:"../bookdetail/bookdetail.module#BookdetailPageModule"}]},{path:"tab5",children:[{path:"",loadChildren:"../tab5/tab5.module#Tab5PageModule"}]}]},{path:"",redirectTo:"/login",pathMatch:"full"}]]},[])])})}}]);