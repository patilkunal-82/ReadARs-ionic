(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("gIcY"),t=u("lGQG"),i=function(){function l(l,n,u){this.authService=n,this.router=u,this.username=void 0,this.user={username:"",password:"",remember:!1},this.loginFormGroup=l.group({username:["",[e.m.required]],password:["",[e.m.required]]})}return l.prototype.ngOnInit=function(){var l=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(n){console.log(n),l.username=n,l.username?(console.log("Success"),l.router.navigateByUrl("/tabs")):console.log("Could not Log In")},function(n){console.log(n),l.errMess=n})},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.prototype.logIn=function(){var l=this;this.user=this.loginFormGroup.value,console.log("User: ",this.user),this.authService.logIn(this.user).subscribe(function(n){n.success?(console.log("Success"),l.router.navigateByUrl("/tabs")):console.log(n)},function(n){console.log(n),l.errMess=n})},l}(),b=function(){return function(){}}(),s=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),g=u("ZYCi"),c=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,6,"ion-header",[],null,null,null,r.Y,r.o)),o.ob(1,49152,null,0,a.A,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.tb,r.J)),o.ob(3,49152,null,0,a.Ab,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,r.sb,r.I)),o.ob(5,49152,null,0,a.yb,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Login"])),(l()(),o.pb(7,0,null,null,37,"ion-content",[],null,null,null,r.U,r.k)),o.ob(8,49152,null,0,a.t,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,35,"ion-card",[],null,null,null,r.S,r.f)),o.ob(10,49152,null,0,a.l,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,33,"ion-card-content",[],null,null,null,r.P,r.g)),o.ob(12,49152,null,0,a.m,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,31,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==o.yb(l,15).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.yb(l,15).onReset()&&e),e},null,null)),o.ob(14,16384,null,0,e.o,[],null,null),o.ob(15,540672,null,0,e.e,[[8,null],[8,null]],{form:[0,"form"]},null),o.Cb(2048,null,e.a,null,[e.e]),o.ob(17,16384,null,0,e.j,[[4,e.a]],null,null),(l()(),o.pb(18,0,null,null,11,"ion-item",[],null,null,null,r.eb,r.u)),o.ob(19,49152,null,0,a.G,[o.h,o.k],null,null),(l()(),o.pb(20,0,null,0,2,"ion-label",[],null,null,null,r.fb,r.v)),o.ob(21,49152,null,0,a.M,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Username"])),(l()(),o.pb(23,0,null,0,6,"ion-input",[["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.yb(l,24)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.yb(l,24)._handleInputEvent(u.target.value)&&e),e},r.db,r.t)),o.ob(24,16384,null,0,a.Lb,[o.k],null,null),o.Cb(1024,null,e.g,function(l){return[l]},[a.Lb]),o.ob(26,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),o.Cb(2048,null,e.h,null,[e.d]),o.ob(28,16384,null,0,e.i,[[4,e.h]],null,null),o.ob(29,49152,null,0,a.F,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.pb(30,0,null,null,11,"ion-item",[],null,null,null,r.eb,r.u)),o.ob(31,49152,null,0,a.G,[o.h,o.k],null,null),(l()(),o.pb(32,0,null,0,2,"ion-label",[],null,null,null,r.fb,r.v)),o.ob(33,49152,null,0,a.M,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Password"])),(l()(),o.pb(35,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.yb(l,36)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.yb(l,36)._handleInputEvent(u.target.value)&&e),e},r.db,r.t)),o.ob(36,16384,null,0,a.Lb,[o.k],null,null),o.Cb(1024,null,e.g,function(l){return[l]},[a.Lb]),o.ob(38,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.q]],{name:[0,"name"]},null),o.Cb(2048,null,e.h,null,[e.d]),o.ob(40,16384,null,0,e.i,[[4,e.h]],null,null),o.ob(41,49152,null,0,a.F,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.pb(42,0,null,null,2,"ion-button",[["expand","full"],["margin-top",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logIn()&&o),o},r.N,r.d)),o.ob(43,49152,null,0,a.j,[o.h,o.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),o.Fb(-1,0,["Login"]))],function(l,n){var u=n.component;l(n,15,0,u.loginFormGroup),l(n,26,0,"username"),l(n,29,0,"text"),l(n,38,0,"password"),l(n,41,0,"password"),l(n,43,0,u.loginFormGroup.invalid,"full")},function(l,n){l(n,13,0,o.yb(n,17).ngClassUntouched,o.yb(n,17).ngClassTouched,o.yb(n,17).ngClassPristine,o.yb(n,17).ngClassDirty,o.yb(n,17).ngClassValid,o.yb(n,17).ngClassInvalid,o.yb(n,17).ngClassPending),l(n,23,0,o.yb(n,28).ngClassUntouched,o.yb(n,28).ngClassTouched,o.yb(n,28).ngClassPristine,o.yb(n,28).ngClassDirty,o.yb(n,28).ngClassValid,o.yb(n,28).ngClassInvalid,o.yb(n,28).ngClassPending),l(n,35,0,o.yb(n,40).ngClassUntouched,o.yb(n,40).ngClassTouched,o.yb(n,40).ngClassPristine,o.yb(n,40).ngClassDirty,o.yb(n,40).ngClassValid,o.yb(n,40).ngClassInvalid,o.yb(n,40).ngClassPending)})}function p(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,d,c)),o.ob(1,245760,null,0,i,[e.b,t.a,g.m],null,null)],function(l,n){l(n,1,0)},null)}var h=o.lb("app-login",i,p,{},{},[]),y=u("Ip0R");u.d(n,"LoginPageModuleNgFactory",function(){return m});var m=o.mb(b,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[s.a,h]],[3,o.j],o.x]),o.wb(4608,e.b,e.b,[]),o.wb(4608,e.p,e.p,[]),o.wb(4608,y.m,y.l,[o.u,[2,y.s]]),o.wb(4608,a.b,a.b,[o.z,o.g]),o.wb(4608,a.Eb,a.Eb,[a.b,o.j,o.q,y.d]),o.wb(4608,a.Ib,a.Ib,[a.b,o.j,o.q,y.d]),o.wb(1073742336,e.n,e.n,[]),o.wb(1073742336,e.l,e.l,[]),o.wb(1073742336,y.c,y.c,[]),o.wb(1073742336,e.f,e.f,[]),o.wb(1073742336,a.Cb,a.Cb,[]),o.wb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),o.wb(1073742336,b,b,[]),o.wb(1024,g.k,function(){return[[{path:"",component:i}]]},[])])})}}]);