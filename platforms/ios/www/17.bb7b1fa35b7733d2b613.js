(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),a=e("0mKY"),c=e("5IZ8"),s=e("Ip0R"),b=e("mrSG"),g=e("5uSc"),p=e("lGQG"),f=e("Pn9U"),d=e("t8sF"),h=e("d5rD"),m=function(){function n(n,l,e,o,t,u,i,r,a){var c=this;this.authService=l,this._camera=e,this._alertController=o,this._modalController=t,this.file=u,this.booksService=i,this.imageLoaderService=r,this.router=a,this.dataReader=new FileReader,this.username=void 0,setTimeout(function(){c.bookList=n.getAllBooks()},3e3)}return n.prototype.ngOnInit=function(){var n=this;this.authService.loadUserCredentials(),this.subscription=this.authService.getUsername().subscribe(function(l){console.log(l),n.username=l,n.booksService.getMyProfileImage(n.username).subscribe(function(l){n.url=l,console.log("this.url",n.url)},function(l){console.log("inside err mess"),console.log(l),n.url=void 0})})},n.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n.prototype.clearCache=function(n){this.imageLoaderService.clearCache(),n.complete()},n.prototype.onImageLoad=function(n){console.log("image ready")},n.prototype.selectImageSource=function(){return b.b(this,void 0,void 0,function(){var n,l,e=this;return b.e(this,function(o){switch(o.label){case 0:return console.log("inside image source"),n={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.CAMERA},l={quality:100,destinationType:this._camera.DestinationType.FILE_URI,encodingType:this._camera.EncodingType.PNG,mediaType:this._camera.MediaType.PICTURE,targetHeight:180,targetWidth:100,correctOrientation:!0,sourceType:this._camera.PictureSourceType.SAVEDPHOTOALBUM},[4,this._alertController.create({header:"Select Source",message:"Pick a source for your profile image",buttons:[{text:"Camera",handler:function(){e._camera.getPicture(n).then(function(n){console.log(n);var l=n.substring(n.lastIndexOf("/")+1),o=n.substring(0,n.lastIndexOf("/")+1);console.log("image name",l),console.log("image path",o),console.log("before read as data url"),e.file.readAsDataURL(o,l).then(function(n){return e.capturedImage=n}),console.log("after read as data url"),e.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return e.readFile(n)})}).catch(function(n){console.log("error reading file")})},function(n){console.log(n)})}},{text:"Gallery",handler:function(){e._camera.getPicture(l).then(function(n){var l=n.substring(n.lastIndexOf("/")+1),o=n.substring(0,n.lastIndexOf("/")+1);e.file.readAsDataURL(o,l).then(function(n){return e.capturedImage=n}),e.file.resolveLocalFilesystemUrl(n).then(function(n){console.log("inside resolve local file system url"),n.file(function(n){return e.readFile(n)})}).catch(function(n){console.log("error reading file")})},function(n){console.log(n)})}}]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),this.refreshPage(),[2]}})})},n.prototype.readFile=function(n){var l=this,e=new FileReader;console.log("file type",n.type),console.log("file type",n.name),e.onloadend=function(){if(l.uploadData=new FormData,e.result){var o=new Blob([e.result],{type:n.type});l.uploadData.append("imageFile",o,n.name),l.booksService.uploadMyProfileImage(l.username,l.uploadData).subscribe(function(n){console.log(n),l.receivedImageData=n,l.base64Data=l.receivedImageData.pic,l.convertedImage="data:image/jpeg;base64,"+l.base64Data})}},e.readAsArrayBuffer(n)},n.prototype.logOut=function(){this.username=void 0,this.authService.logOut(),console.log("After authservice logout"),this.router.navigateByUrl("/login")},n}(),y=e("ZYCi"),w=o.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.skeleton-image[_ngcontent-%COMP%]{height:175px}.profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid gray;margin:10px auto}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}ion-toolbar[_ngcontent-%COMP%]{--background:#145A32}ion-button[_ngcontent-%COMP%]{--background:#FDFEFE}"]],data:{}});function v(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,2,"ion-avatar",[],null,null,null,i.W,i.b)),o.ob(1,49152,null,0,r.e,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,0,"img",[["style","margin-right: 10px;"]],[[8,"src",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.selectImageSource()&&o),o},null,null))],null,function(n,l){n(l,2,0,l.component.url)})}function I(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,8,"ion-toolbar",[],null,null,null,i.Pb,i.U)),o.ob(1,49152,null,0,r.Ab,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,3,"img-loader",[["button",""],["useImg",""]],null,[[null,"load"]],function(n,l,e){var o=!0;return"load"===l&&(o=!1!==n.component.onImageLoad(e)&&o),o},a.b,a.a)),o.ob(3,114688,null,0,c.c,[o.k,o.D,c.b,c.a],{useImg:[0,"useImg"]},{load:"load"}),(n()(),o.gb(16777216,null,0,1,null,v)),o.ob(5,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(6,0,null,0,2,"ion-title",[["size","large"],["style","font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #FDFEFE  ; font-weight: bolder; font-size: 25px; white-space: normal;"]],null,null,null,i.Ob,i.T)),o.ob(7,49152,null,0,r.yb,[o.h,o.k],null,null),(n()(),o.Gb(8,0,["Hello, "," "]))],function(n,l){var e=l.component;n(l,3,0,""),n(l,5,0,e.url)},function(n,l){n(l,8,0,l.component.username)})}function k(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,3,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,i.lb,i.q)),o.ob(1,49152,null,0,r.A,[o.h,o.k],{translucent:[0,"translucent"]},null),(n()(),o.gb(16777216,null,0,1,null,I)),o.ob(3,16384,null,0,s.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(4,0,null,null,20,"ion-content",[],null,null,null,i.hb,i.m)),o.ob(5,49152,null,0,r.t,[o.h,o.k],null,null),(n()(),o.pb(6,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,e){var o=!0;return"ionRefresh"===l&&(o=!1!==n.component.clearCache(e)&&o),o},i.Ab,i.E)),o.ob(7,49152,null,0,r.bb,[o.h,o.k],null,null),(n()(),o.pb(8,0,null,0,1,"ion-refresher-content",[],null,null,null,i.zb,i.F)),o.ob(9,49152,null,0,r.cb,[o.h,o.k],null,null),(n()(),o.pb(10,0,null,0,14,"ion-list",[],null,null,null,i.wb,i.A)),o.ob(11,49152,null,0,r.N,[o.h,o.k],null,null),(n()(),o.pb(12,0,null,0,1,"ion-item",[],null,null,null,i.tb,i.v)),o.ob(13,49152,null,0,r.G,[o.h,o.k],null,null),(n()(),o.pb(14,0,null,0,1,"ion-item",[],null,null,null,i.tb,i.v)),o.ob(15,49152,null,0,r.G,[o.h,o.k],null,null),(n()(),o.pb(16,0,null,0,1,"ion-item",[],null,null,null,i.tb,i.v)),o.ob(17,49152,null,0,r.G,[o.h,o.k],null,null),(n()(),o.pb(18,0,null,0,1,"ion-item",[],null,null,null,i.tb,i.v)),o.ob(19,49152,null,0,r.G,[o.h,o.k],null,null),(n()(),o.pb(20,0,null,0,4,"ion-item",[],null,null,null,i.tb,i.v)),o.ob(21,49152,null,0,r.G,[o.h,o.k],null,null),(n()(),o.pb(22,0,null,0,2,"ion-button",[["fill","clear"],["name","log-out"],["style","color: #7B7D7D"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.logOut()&&o),o},i.Y,i.d)),o.ob(23,49152,null,0,r.j,[o.h,o.k],{fill:[0,"fill"]},null),(n()(),o.Gb(-1,0,["Log Out"]))],function(n,l){var e=l.component;n(l,1,0,!0),n(l,3,0,e.username),n(l,23,0,"clear")},null)}function O(n){return o.Ib(0,[(n()(),o.pb(0,0,null,null,1,"app-tab2",[],null,null,null,k,w)),o.ob(1,245760,null,0,m,[g.a,p.a,f.a,r.a,r.Gb,d.a,h.a,c.b,y.m],null,null)],function(n,l){n(l,1,0)},null)}var P=o.lb("app-tab2",m,O,{},{},[]),_=e("gIcY"),C=e("t/Na"),S=e("Yttj");e.d(l,"Tab2PageModuleNgFactory",function(){return T});var T=o.mb(t,[],function(n){return o.vb([o.wb(512,o.j,o.bb,[[8,[u.a,P]],[3,o.j],o.x]),o.wb(4608,s.l,s.k,[o.u,[2,s.r]]),o.wb(4608,r.b,r.b,[o.z,o.g]),o.wb(4608,r.Gb,r.Gb,[r.b,o.j,o.q,s.c]),o.wb(4608,r.Kb,r.Kb,[r.b,o.j,o.q,s.c]),o.wb(4608,_.p,_.p,[]),o.wb(4608,C.j,C.p,[s.c,o.B,C.n]),o.wb(4608,C.q,C.q,[C.j,C.o]),o.wb(5120,C.a,function(n){return[n]},[C.q]),o.wb(4608,C.m,C.m,[]),o.wb(6144,C.k,null,[C.m]),o.wb(4608,C.i,C.i,[C.k]),o.wb(6144,C.b,null,[C.i]),o.wb(4608,C.g,C.l,[C.b,o.q]),o.wb(4608,C.c,C.c,[C.g]),o.wb(4608,d.a,d.a,[]),o.wb(4608,c.a,c.a,[]),o.wb(4608,c.b,c.b,[c.a,d.a,C.c,r.Jb,S.a]),o.wb(1073742336,s.b,s.b,[]),o.wb(1073742336,r.Cb,r.Cb,[]),o.wb(1073742336,_.n,_.n,[]),o.wb(1073742336,_.f,_.f,[]),o.wb(1073742336,y.o,y.o,[[2,y.u],[2,y.m]]),o.wb(1073742336,C.e,C.e,[]),o.wb(1073742336,C.d,C.d,[]),o.wb(1073742336,c.d,c.d,[]),o.wb(1073742336,t,t,[]),o.wb(256,C.n,"XSRF-TOKEN",[]),o.wb(256,C.o,"X-XSRF-TOKEN",[]),o.wb(1024,y.k,function(){return[[{path:"",component:m}]]},[])])})}}]);