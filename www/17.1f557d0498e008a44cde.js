(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){return function(){}}(),b=u("pMnS"),e=u("oBZk"),i=u("ZZ/e"),r=u("Ip0R"),p=u("ZYCi"),s=u("5uSc"),m=u("lGQG"),c=u("Pn9U"),a=function(){function l(l,n,u,o,t,b){var e=this;this.authService=n,this._camera=u,this._alertController=o,this._modalController=t,this.menu=b,this.username=void 0,setTimeout(function(){e.bookList=l.getAllBooks()},3e3)}return l.prototype.ngOnInit=function(){var l=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(n){console.log(n),l.username=n})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.openFirst=function(){this.menu.enable(!0,"first"),this.menu.open("first")},l.prototype.openEnd=function(){this.menu.open("end")},l.prototype.openCustom=function(){this.menu.enable(!0,"custom"),this.menu.open("custom")},l}(),h=o.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.skeleton-image[_ngcontent-%COMP%]{height:175px}.profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}"]],data:{}});function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,2,"ion-title",[["size","large"]],null,null,null,e.Mb,e.S)),o.ob(1,49152,null,0,i.yb,[o.h,o.k],null,null),(l()(),o.Gb(2,0,[" Hello, "," "]))],null,function(l,n){l(n,2,0,n.component.username)})}function k(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,5,"ion-header",[],null,null,null,e.jb,e.p)),o.ob(1,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,3,"ion-toolbar",[],null,null,null,e.Nb,e.T)),o.ob(3,49152,null,0,i.Ab,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(5,16384,null,0,r.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(6,0,null,null,87,"ion-content",[],null,null,null,e.fb,e.l)),o.ob(7,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,27,"ion-menu",[["contentId","main"],["menuId","first"],["side","start"]],null,null,null,e.wb,e.C)),o.ob(9,49152,null,0,i.P,[o.h,o.k],{contentId:[0,"contentId"],menuId:[1,"menuId"],side:[2,"side"]},null),(l()(),o.pb(10,0,null,0,6,"ion-header",[],null,null,null,e.jb,e.p)),o.ob(11,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(12,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,e.Nb,e.T)),o.ob(13,49152,null,0,i.Ab,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(14,0,null,0,2,"ion-title",[],null,null,null,e.Mb,e.S)),o.ob(15,49152,null,0,i.yb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Start Menu"])),(l()(),o.pb(17,0,null,0,18,"ion-content",[],null,null,null,e.fb,e.l)),o.ob(18,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.pb(19,0,null,0,16,"ion-list",[],null,null,null,e.vb,e.A)),o.ob(20,49152,null,0,i.N,[o.h,o.k],null,null),(l()(),o.pb(21,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(22,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(24,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(25,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(27,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(28,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(30,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(31,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(33,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(34,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(36,0,null,0,27,"ion-menu",[["class","my-custom-menu"],["contentId","main"],["menuId","custom"],["side","start"]],null,null,null,e.wb,e.C)),o.ob(37,49152,null,0,i.P,[o.h,o.k],{contentId:[0,"contentId"],menuId:[1,"menuId"],side:[2,"side"]},null),(l()(),o.pb(38,0,null,0,6,"ion-header",[],null,null,null,e.jb,e.p)),o.ob(39,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(40,0,null,0,4,"ion-toolbar",[["color","tertiary"]],null,null,null,e.Nb,e.T)),o.ob(41,49152,null,0,i.Ab,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(42,0,null,0,2,"ion-title",[],null,null,null,e.Mb,e.S)),o.ob(43,49152,null,0,i.yb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Custom Menu"])),(l()(),o.pb(45,0,null,0,18,"ion-content",[],null,null,null,e.fb,e.l)),o.ob(46,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.pb(47,0,null,0,16,"ion-list",[],null,null,null,e.vb,e.A)),o.ob(48,49152,null,0,i.N,[o.h,o.k],null,null),(l()(),o.pb(49,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(50,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(52,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(53,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(55,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(56,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(58,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(59,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(61,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(62,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(64,0,null,0,27,"ion-menu",[["contentId","main"],["side","end"],["type","push"]],null,null,null,e.wb,e.C)),o.ob(65,49152,null,0,i.P,[o.h,o.k],{contentId:[0,"contentId"],type:[1,"type"],side:[2,"side"]},null),(l()(),o.pb(66,0,null,0,6,"ion-header",[],null,null,null,e.jb,e.p)),o.ob(67,49152,null,0,i.A,[o.h,o.k],null,null),(l()(),o.pb(68,0,null,0,4,"ion-toolbar",[["color","danger"]],null,null,null,e.Nb,e.T)),o.ob(69,49152,null,0,i.Ab,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(70,0,null,0,2,"ion-title",[],null,null,null,e.Mb,e.S)),o.ob(71,49152,null,0,i.yb,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["End Menu"])),(l()(),o.pb(73,0,null,0,18,"ion-content",[],null,null,null,e.fb,e.l)),o.ob(74,49152,null,0,i.t,[o.h,o.k],null,null),(l()(),o.pb(75,0,null,0,16,"ion-list",[],null,null,null,e.vb,e.A)),o.ob(76,49152,null,0,i.N,[o.h,o.k],null,null),(l()(),o.pb(77,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(78,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(80,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(81,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(83,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(84,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(86,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(87,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(89,0,null,0,2,"ion-item",[],null,null,null,e.sb,e.v)),o.ob(90,49152,null,0,i.G,[o.h,o.k],null,null),(l()(),o.Gb(-1,0,["Menu Item"])),(l()(),o.pb(92,16777216,null,0,1,"ion-router-outlet",[["id","main"]],null,null,null,null,null)),o.ob(93,212992,null,0,i.gb,[p.b,o.O,o.j,[8,null],[8,null],o.h,i.c,i.Gb,o.k,p.m,o.z,p.a,[3,i.gb]],null,null)],function(l,n){l(n,5,0,n.component.username),l(n,9,0,"main","first","start"),l(n,13,0,"primary"),l(n,37,0,"main","custom","start"),l(n,41,0,"tertiary"),l(n,65,0,"main","push","end"),l(n,69,0,"danger"),l(n,93,0)},null)}function G(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,1,"app-tab2",[],null,null,null,k,h)),o.ob(1,245760,null,0,a,[s.a,m.a,c.a,i.a,i.Fb,i.Eb],null,null)],function(l,n){l(n,1,0)},null)}var I=o.lb("app-tab2",a,G,{},{},[]),f=u("gIcY");u.d(n,"Tab2PageModuleNgFactory",function(){return g});var g=o.mb(t,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[b.a,I]],[3,o.j],o.x]),o.wb(4608,r.l,r.k,[o.u,[2,r.r]]),o.wb(4608,i.b,i.b,[o.z,o.g]),o.wb(4608,i.Fb,i.Fb,[i.b,o.j,o.q,r.c]),o.wb(4608,i.Jb,i.Jb,[i.b,o.j,o.q,r.c]),o.wb(4608,f.p,f.p,[]),o.wb(1073742336,r.b,r.b,[]),o.wb(1073742336,i.Cb,i.Cb,[]),o.wb(1073742336,f.n,f.n,[]),o.wb(1073742336,f.f,f.f,[]),o.wb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),o.wb(1073742336,t,t,[]),o.wb(1024,p.k,function(){return[[{path:"",component:a}]]},[])])})}}]);