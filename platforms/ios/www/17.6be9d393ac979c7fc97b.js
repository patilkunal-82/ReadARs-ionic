(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=function(){return function(){}}(),u=l("pMnS"),a=l("oBZk"),i=l("ZZ/e"),r=l("Ip0R"),c=l("mrSG"),s=l("5uSc"),b=l("lGQG"),p=l("Pn9U"),g=l("t8sF"),d=l("d5rD"),f=function(){function n(n,e,l,t,o,u,a){var i=this;this.authService=e,this._camera=l,this._alertController=t,this._modalController=o,this.file=u,this.booksService=a,this.dataReader=new FileReader,this.username=void 0,setTimeout(function(){i.bookList=n.getAllBooks()},3e3)}return n.prototype.ngOnInit=function(){var n=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(e){console.log(e),n.username=e})},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n.prototype.selectImageSource=function(){return c.b(this,void 0,void 0,function(){var n,e,l=this;return c.e(this,function(t){switch(t.label){case 0:return console.log("inside image source"),n={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},e={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your image",buttons:[{text:"Camera",handler:function(){l._camera.getPicture(n).then(function(n){console.log(n);var e=n.substring(n.lastIndexOf("/")+1),t=n.substring(0,n.lastIndexOf("/")+1);console.log("image name",e),console.log("image path",t),console.log("before read as data url"),l.file.readAsDataURL(t,e).then(function(n){return l.capturedImage=n}),console.log("after read as data url"),l.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return l.readFile(n)})}).catch(function(n){console.log("error reading file")}),l.booksService.uploadMyProfileImage(l.username,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data})},function(n){console.log(n)})}},{text:"Gallery",handler:function(){l._camera.getPicture(e).then(function(n){var e=n.substring(n.lastIndexOf("/")+1),t=n.substring(0,n.lastIndexOf("/")+1);l.file.readAsDataURL(t,e).then(function(n){return l.capturedImage=n}),l.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return l.readFile(n)})}).catch(function(n){console.log("error reading file")})},function(n){console.log(n)})}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.readFile=function(n){var e=this,l=new FileReader;console.log("file type",n.type),console.log("file type",n.name),l.onloadend=function(){if(e.uploadData=new FormData,l.result){var t=new Blob([l.result],{type:n.type});e.uploadData.append("imageFile",t,n.name)}},l.readAsArrayBuffer(n)},n}(),m=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.skeleton-image[_ngcontent-%COMP%]{height:175px}.profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}ion-toolbar[_ngcontent-%COMP%]{--background:#145A32}"]],data:{}});function h(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,2,"ion-title",[["size","large"],["style","font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #FDFEFE  ; font-weight: bolder; font-size: 25px;"]],null,null,null,a.Mb,a.S)),t.ob(1,49152,null,0,i.yb,[t.h,t.k],null,null),(n()(),t.Gb(2,0,[" Hello, "," "]))],null,function(n,e){n(e,2,0,e.component.username)})}function y(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"ion-img",[["height","100"]],null,null,null,a.lb,a.r)),t.ob(1,49152,null,0,i.C,[t.h,t.k],{src:[0,"src"]},null)],function(n,e){n(e,1,0,e.component.capturedImage)},null)}function w(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,5,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,a.jb,a.p)),t.ob(1,49152,null,0,i.A,[t.h,t.k],{translucent:[0,"translucent"]},null),(n()(),t.pb(2,0,null,0,3,"ion-toolbar",[],null,null,null,a.Nb,a.T)),t.ob(3,49152,null,0,i.Ab,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,h)),t.ob(5,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(6,0,null,null,19,"ion-content",[],null,null,null,a.fb,a.l)),t.ob(7,49152,null,0,i.t,[t.h,t.k],null,null),(n()(),t.pb(8,0,null,0,3,"ion-thumbnail",[],null,[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.selectImageSource()&&t),t},a.Lb,a.R)),t.ob(9,49152,null,0,i.xb,[t.h,t.k],null,null),(n()(),t.pb(10,0,null,0,1,"ion-img",[],null,null,null,a.lb,a.r)),t.ob(11,49152,null,0,i.C,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.pb(12,0,null,0,3,"ion-thumbnail",[],null,null,null,a.Lb,a.R)),t.ob(13,49152,null,0,i.xb,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,y)),t.ob(15,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(16,0,null,0,9,"ion-card",[],null,null,null,a.cb,a.e)),t.ob(17,49152,null,0,i.l,[t.h,t.k],null,null),(n()(),t.pb(18,0,null,0,4,"ion-card-header",[],null,null,null,a.Z,a.g)),t.ob(19,49152,null,0,i.n,[t.h,t.k],null,null),(n()(),t.pb(20,0,null,0,2,"ion-card-title",[],null,null,null,a.bb,a.i)),t.ob(21,49152,null,0,i.p,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,["Dummy Text"])),(n()(),t.pb(23,0,null,0,2,"ion-card-content",[],null,null,null,a.Y,a.f)),t.ob(24,49152,null,0,i.m,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Dummy Text "]))],function(n,e){var l=e.component;n(e,1,0,!0),n(e,5,0,l.username),n(e,11,0,l.myProfileImage),n(e,15,0,l.capturedImage)},null)}function I(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-tab2",[],null,null,null,w,m)),t.ob(1,245760,null,0,f,[s.a,b.a,p.a,i.a,i.Gb,g.a,d.a],null,null)],function(n,e){n(e,1,0)},null)}var v=t.lb("app-tab2",f,I,{},{},[]),k=l("gIcY"),T=l("t/Na"),x=l("5IZ8"),_=l("Yttj"),O=l("ZYCi");l.d(e,"Tab2PageModuleNgFactory",function(){return C});var C=t.mb(o,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[u.a,v]],[3,t.j],t.x]),t.wb(4608,r.l,r.k,[t.u,[2,r.r]]),t.wb(4608,i.b,i.b,[t.z,t.g]),t.wb(4608,i.Gb,i.Gb,[i.b,t.j,t.q,r.c]),t.wb(4608,i.Kb,i.Kb,[i.b,t.j,t.q,r.c]),t.wb(4608,k.p,k.p,[]),t.wb(4608,T.j,T.p,[r.c,t.B,T.n]),t.wb(4608,T.q,T.q,[T.j,T.o]),t.wb(5120,T.a,function(n){return[n]},[T.q]),t.wb(4608,T.m,T.m,[]),t.wb(6144,T.k,null,[T.m]),t.wb(4608,T.i,T.i,[T.k]),t.wb(6144,T.b,null,[T.i]),t.wb(4608,T.g,T.l,[T.b,t.q]),t.wb(4608,T.c,T.c,[T.g]),t.wb(4608,g.a,g.a,[]),t.wb(4608,x.a,x.a,[]),t.wb(4608,x.b,x.b,[x.a,g.a,T.c,i.Jb,_.a]),t.wb(1073742336,r.b,r.b,[]),t.wb(1073742336,i.Cb,i.Cb,[]),t.wb(1073742336,k.n,k.n,[]),t.wb(1073742336,k.f,k.f,[]),t.wb(1073742336,O.o,O.o,[[2,O.u],[2,O.m]]),t.wb(1073742336,T.e,T.e,[]),t.wb(1073742336,T.d,T.d,[]),t.wb(1073742336,x.d,x.d,[]),t.wb(1073742336,o,o,[]),t.wb(256,T.n,"XSRF-TOKEN",[]),t.wb(256,T.o,"X-XSRF-TOKEN",[]),t.wb(1024,O.k,function(){return[[{path:"",component:f}]]},[])])})}}]);