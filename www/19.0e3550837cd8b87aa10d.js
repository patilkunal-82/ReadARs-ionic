(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{W9vR:function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=function(){return function(){}}(),i=e("pMnS"),a=e("oBZk"),o=e("ZZ/e"),r=e("mrSG"),c=e("Pn9U"),b=e("lGQG"),p=function(){function n(n,l,e){this._camera=n,this._alertController=l,this.authService=e}return n.prototype.selectImageSource=function(){return r.b(this,void 0,void 0,function(){var n,l,e=this;return r.e(this,function(u){switch(u.label){case 0:return n={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},l={quality:100,destinationType:this._camera.DestinationType.DATA_URL,encodingType:this._camera.EncodingType.JPEG,mediaType:this._camera.MediaType.PICTURE,targetHeight:200,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){e._camera.getPicture(n).then(function(n){e.myProfileImage="data:image/jpeg;base64,"+n})}},{text:"Gallery",handler:function(){e._camera.getPicture(l).then(function(n){e.myProfileImage="data:image/jpeg;base64,"+n})}}]})];case 1:return[4,u.sent().present()];case 2:return u.sent(),[2]}})})},n.prototype.ngOnInit=function(){this.authService.loadUserCredentials()},n}(),s=u.nb({encapsulation:0,styles:[[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}"]],data:{}});function h(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,a.Y,a.o)),u.ob(1,49152,null,0,o.A,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.tb,a.J)),u.ob(3,49152,null,0,o.Ab,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.sb,a.I)),u.ob(5,49152,null,0,o.yb,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,[" Profile "])),(n()(),u.pb(7,0,null,null,15,"ion-content",[],null,null,null,a.U,a.k)),u.ob(8,49152,null,0,o.t,[u.h,u.k],null,null),(n()(),u.pb(9,0,null,0,3,"ion-avatar",[["class","profile-pic"]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.selectImageSource()&&u),u},a.L,a.b)),u.ob(10,49152,null,0,o.e,[u.h,u.k],null,null),(n()(),u.pb(11,0,null,0,1,"ion-img",[],null,null,null,a.ab,a.q)),u.ob(12,49152,null,0,o.C,[u.h,u.k],{src:[0,"src"]},null),(n()(),u.pb(13,0,null,0,9,"ion-card",[],null,null,null,a.S,a.f)),u.ob(14,49152,null,0,o.l,[u.h,u.k],null,null),(n()(),u.pb(15,0,null,0,4,"ion-card-header",[],null,null,null,a.Q,a.h)),u.ob(16,49152,null,0,o.n,[u.h,u.k],null,null),(n()(),u.pb(17,0,null,0,2,"ion-card-title",[],null,null,null,a.R,a.i)),u.ob(18,49152,null,0,o.p,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,["Dummy Text"])),(n()(),u.pb(20,0,null,0,2,"ion-card-content",[],null,null,null,a.P,a.g)),u.ob(21,49152,null,0,o.m,[u.h,u.k],null,null),(n()(),u.Fb(-1,0,[" Dummy Text "]))],function(n,l){n(l,12,0,l.component.myProfileImage)},null)}function m(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-tab3",[],null,null,null,h,s)),u.ob(1,114688,null,0,p,[c.a,o.a,b.a],null,null)],function(n,l){n(l,1,0)},null)}var d=u.lb("app-tab3",p,m,{},{},[]),g=e("Ip0R"),f=e("gIcY"),y=e("ZYCi");e.d(l,"Tab3PageModuleNgFactory",function(){return T});var T=u.mb(t,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,d]],[3,u.j],u.x]),u.wb(4608,g.m,g.l,[u.u,[2,g.s]]),u.wb(4608,o.b,o.b,[u.z,u.g]),u.wb(4608,o.Eb,o.Eb,[o.b,u.j,u.q,g.d]),u.wb(4608,o.Ib,o.Ib,[o.b,u.j,u.q,g.d]),u.wb(4608,f.p,f.p,[]),u.wb(1073742336,g.c,g.c,[]),u.wb(1073742336,o.Cb,o.Cb,[]),u.wb(1073742336,f.n,f.n,[]),u.wb(1073742336,f.f,f.f,[]),u.wb(1073742336,y.o,y.o,[[2,y.u],[2,y.m]]),u.wb(1073742336,t,t,[]),u.wb(1024,y.k,function(){return[[{path:"",component:p}]]},[])])})}}]);