(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),o=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),a=e("Ip0R"),c=e("mrSG"),b=e("5uSc"),s=e("lGQG"),p=e("Pn9U"),h=function(){function n(n,l,e,t,u){var o=this;this.authService=l,this._camera=e,this._alertController=t,this._modalController=u,this.username=void 0,setTimeout(function(){o.bookList=n.getAllBooks()},3e3)}return n.prototype.ngOnInit=function(){var n=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(l){console.log(l),n.username=l})},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n.prototype.selectImageSource=function(){return c.b(this,void 0,void 0,function(){var n,l,e=this;return c.e(this,function(t){switch(t.label){case 0:return n={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},l={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){e._camera.getPicture(n).then(function(n){e.myProfileImage="data:image/jpeg;base64,"+n})}},{text:"Gallery",handler:function(){e._camera.getPicture(l).then(function(n){e.myProfileImage="data:image/jpeg;base64,"+n})}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n}(),m=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.skeleton-image[_ngcontent-%COMP%]{height:175px}.profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}"]],data:{}});function g(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-title",[["size","large"]],null,null,null,i.Kb,i.R)),t.ob(1,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.Gb(2,0,[" Hello, "," "]))],null,function(n,l){n(l,2,0,l.component.username)})}function d(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,5,"ion-header",[],null,null,null,i.jb,i.q)),t.ob(1,49152,null,0,r.A,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,3,"ion-toolbar",[],null,null,null,i.Lb,i.S)),t.ob(3,49152,null,0,r.Ab,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,g)),t.ob(5,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(6,0,null,null,15,"ion-content",[],null,null,null,i.fb,i.m)),t.ob(7,49152,null,0,r.t,[t.h,t.k],null,null),(n()(),t.pb(8,0,null,0,3,"ion-avatar",[["class","profile-pic"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectImageSource()&&t),t},i.U,i.b)),t.ob(9,49152,null,0,r.e,[t.h,t.k],null,null),(n()(),t.pb(10,0,null,0,1,"ion-img",[],null,null,null,i.lb,i.s)),t.ob(11,49152,null,0,r.C,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.pb(12,0,null,0,9,"ion-card",[],null,null,null,i.cb,i.f)),t.ob(13,49152,null,0,r.l,[t.h,t.k],null,null),(n()(),t.pb(14,0,null,0,4,"ion-card-header",[],null,null,null,i.Z,i.h)),t.ob(15,49152,null,0,r.n,[t.h,t.k],null,null),(n()(),t.pb(16,0,null,0,2,"ion-card-title",[],null,null,null,i.bb,i.j)),t.ob(17,49152,null,0,r.p,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,["Dummy Text"])),(n()(),t.pb(19,0,null,0,2,"ion-card-content",[],null,null,null,i.Y,i.g)),t.ob(20,49152,null,0,r.m,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Dummy Text "]))],function(n,l){var e=l.component;n(l,5,0,e.username),n(l,11,0,e.myProfileImage)},null)}function f(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-tab2",[],null,null,null,d,m)),t.ob(1,245760,null,0,h,[b.a,s.a,p.a,r.a,r.Fb],null,null)],function(n,l){n(l,1,0)},null)}var y=t.lb("app-tab2",h,f,{},{},[]),T=e("gIcY"),w=e("ZYCi");e.d(l,"Tab2PageModuleNgFactory",function(){return _});var _=t.mb(u,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,y]],[3,t.j],t.x]),t.wb(4608,a.l,a.k,[t.u,[2,a.r]]),t.wb(4608,r.b,r.b,[t.z,t.g]),t.wb(4608,r.Fb,r.Fb,[r.b,t.j,t.q,a.c]),t.wb(4608,r.Jb,r.Jb,[r.b,t.j,t.q,a.c]),t.wb(4608,T.p,T.p,[]),t.wb(1073742336,a.b,a.b,[]),t.wb(1073742336,r.Cb,r.Cb,[]),t.wb(1073742336,T.n,T.n,[]),t.wb(1073742336,T.f,T.f,[]),t.wb(1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),t.wb(1073742336,u,u,[]),t.wb(1024,w.k,function(){return[[{path:"",component:h}]]},[])])})}}]);