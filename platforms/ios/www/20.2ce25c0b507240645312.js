(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{JQOA:function(n,o,e){"use strict";e.r(o);var t=e("CcnG"),l=e("mrSG"),r=e("ZZ/e"),i=e("a3Cf"),a=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return l.b(o,n),o.prototype.add=function(n,o){return Object(i.cordova)(this,"add",{},[{param1:n,param2:o}])},o.prototype.getContacts=function(){return Object(i.cordova)(this,"getContacts",{},[{}])},o.prototype.viewAR=function(n,o,e){return console.log("anchorContentURLsMap",e),Object(i.cordova)(this,"viewAR",{},[{param1:o,param2:[e],param3:n}])},o.pluginName="arplugin",o.plugin="cordova-plugin-arplugin",o.pluginRef="ArPlugin",o.repo="https://github.com/patilkunal-82/arplugin.git",o.platforms=["iOS"],o.ngInjectableDef=t.S({factory:function(){return new o},token:o,providedIn:"root"}),o}(i.IonicNativePlugin),s=e("JhVf"),u=e("d5rD"),c=e("F/XL"),b=e("9Z1F"),p=e("mI4i"),d=e("lUK6"),h=e("lGQG"),g=e("t/Na"),m=function(){function n(n,o,e){this.http=n,this.auth=o,this.processHTTPMsgService=e}return n.prototype.getARenabledBooks=function(){return this.auth.isLoggedIn()?this.http.get(p.a+"arenabled?isARenabled=true").pipe(Object(b.a)(this.processHTTPMsgService.handleError)):null},n.prototype.isARenabled=function(n){var o=this;return this.auth.isLoggedIn()?this.http.get(p.a+"arenabled/"+n).pipe(Object(b.a)(function(n){return o.processHTTPMsgService.handleError(n)})):Object(c.a)({exists:!1,book:null})},n.ngInjectableDef=t.S({factory:function(){return new n(t.W(g.c),t.W(h.a),t.W(d.a))},token:n,providedIn:"root"}),n}(),f=function(){function n(n,o,e,t,l,r,i){this.modalCtrl=n,this.pluginService=o,this.alertController=e,this.readarsService=t,this.imageLoaderService=l,this.booksService=r,this.arenabledService=i,this.contacts=[],this.images=[],this.arbooks=[],this.recobooks=[],this.bookGenreCollection=[],this.bookLanguageCollection=[],this.mapAnchorContentMap=new Map,this.mapAnchorContentMapArray=[],this.mapAnchorContentMapArrayValues=[],this.arrayAnchorContentURLs=[],this.bookIdsImages=new Map,this.bookIdImageMap=new Map}return n.prototype.ngOnInit=function(){var n=this;this.arenabledService.getARenabledBooks().subscribe(function(o){n.arbooks=o,n.prepareBookIdsImagesMap()},function(o){return n.errMess=o})},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(o){n.bookIds=o,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var e=function(o){n.readarsService.getBookImage(n.lbookIds[o]).subscribe(function(e){n.url=e,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[o],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},t=0;t<n.lbookIds.length;t++)e(t)},function(o){return n.errMess=o})},n.prototype.onImageLoad=function(n){console.log("image ready")},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.viewAR=function(n,o){return l.a(this,void 0,void 0,function(){return l.c(this,function(e){return this.getbookARdata(n,o),[2]})})},n.prototype.getbookARdata=function(n,o){var e=this,t=new Map;this.booksService.getBookARContent(n).subscribe(function(l){e.imgURLs=l,e.booksService.getBookPlistXml(n).subscribe(function(l){if(l&&e.imgURLs){e.plistCopy=l,console.log("imgURLs",e.imgURLs),console.log("plist copy",e.plistCopy);var r=(new DOMParser).parseFromString(e.plistCopy.toString(),"text/xml");console.log("xmlDocument from s3",r);for(var i=[],a=[],s=[],u=[],c=(new Map,r.getElementsByTagName("key").length),b=r.getElementsByTagName("value").length,p=0;p<c;p++)i[p]=r.getElementsByTagName("key")[p].childNodes[0].nodeValue;for(p=0;p<b;p++)a[p]=r.getElementsByTagName("value")[p].childNodes[0].nodeValue;for(p=0;p<c;p++){i[p]=r.getElementsByTagName("key")[p].childNodes[0].nodeValue,s.push(i[p]);for(var d=0;d<b;d++)a[d].includes(i[p])&&s.push(a[d])}for(console.log("keyvalues",s),p=0;p<s.length&&p<e.imgURLs.length;p++)t.set(s[p],e.imgURLs[p]);for(var h=0,g=Array.from(t.entries());h<g.length;h++)-1===(R=g[h])[0].indexOf("content")&&u.push(R[0]);for(p=0;p<u.length;p++){for(var m=new Map,f=new Map,k=0,v=Array.from(t.entries());k<v.length;k++)(R=v[k])[0].includes(u[p])&&R[1].includes(u[p])&&R[0].includes("content")&&m.set(R[0],R[1]),R[0].includes(u[p])&&R[1].includes(u[p])&&-1===R[0].indexOf("content")&&f.set(R[0],R[1]);e.mapAnchorContentMap.set(u[p],[f,m])}e.mapAnchorContentMapArray=Array.from(e.mapAnchorContentMap.entries());for(var w=0,y=e.mapAnchorContentMapArray;w<y.length;w++)e.mapAnchorContentMapArrayValues.push(Array.from(y[w][1][1].entries()));console.log("bookAnchorContentURLsMap",t);var I=new Map;for(p=0;p<u.length;p++){for(var A=[],M=void 0,S=0,C=Array.from(t.entries());S<C.length;S++){var R;(R=C[S])[0].includes(u[p])&&R[1].includes(u[p])&&R[0].includes("content")&&R[1].includes(n)&&A.push(R[1]),R[0].includes(u[p])&&R[1].includes(u[p])&&-1===R[0].indexOf("content")&&R[1].includes(n)&&(M=R[1])}I.set(M,A)}console.log("bookID is ",n),console.log("book name is ",o),console.log("Final anchorContentURLsMap",I),e.pluginService.viewAR(n,o,I)}else console.log("plist is empty")})},function(n){return e.errMess=n})},n.prototype.viewAnchors=function(){},n.prototype.close=function(){this.modalCtrl.dismiss()},n.prototype.add=function(){var n=this;this.pluginService.add(5,3).then(function(o){n.total=o,n.presentAlert("The sum is "+o)}).catch(function(n){return console.error("add"+n)})},n.prototype.loadContacts=function(){return l.a(this,void 0,void 0,function(){var n;return l.c(this,function(o){switch(o.label){case 0:return n=this,[4,this.pluginService.getContacts()];case 1:return n.contacts=o.sent(),console.log("my contacts",this.contacts),[2]}})})},n.prototype.presentAlert=function(n){return l.a(this,void 0,void 0,function(){return l.c(this,function(o){switch(o.label){case 0:return[4,this.alertController.create({subHeader:"Alert",message:n,buttons:["OK"]})];case 1:return[4,o.sent().present()];case 2:return o.sent(),[2]}})})},n}(),k=function(){return function(){}}(),v=e("pMnS"),w=e("oBZk"),y=e("0mKY"),I=e("5IZ8"),A=e("Ip0R"),M=t.nb({encapsulation:2,styles:[["ion-toolbar{--background:#145A32}iframe{position:absolute;width:100%;height:100%;border:none}.bookimage{width:225%;height:auto;margin:10px auto}ion-button{--background:#E9F7EF}"]],data:{}});function S(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,10,"ion-item",[],null,null,null,w.vb,w.v)),t.ob(1,49152,null,0,r.G,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,1,"img-loader",[["button",""],["class","bookimage"],["useImg",""]],null,[[null,"load"]],function(n,o,e){var t=!0;return"load"===o&&(t=!1!==n.component.onImageLoad(e)&&t),t},y.b,y.a)),t.ob(3,114688,null,0,I.c,[t.k,t.D,I.b,I.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"}),(n()(),t.pb(4,0,null,0,2,"ion-button",[["expand","block"],["margin",""],["shape","round"],["style","color: #145A32"]],null,[[null,"click"]],function(n,o,e){var t=!0;return"click"===o&&(t=!1!==n.component.viewAR(n.context.$implicit._id,n.context.$implicit.bookname)&&t),t},w.ab,w.d)),t.ob(5,49152,null,0,r.j,[t.h,t.k],{expand:[0,"expand"],shape:[1,"shape"]},null),(n()(),t.Gb(-1,0,["View AR"])),(n()(),t.pb(7,0,null,0,0,"p",[],null,null,null,null,null)),(n()(),t.pb(8,0,null,0,2,"ion-button",[["expand","block"],["margin",""],["shape","round"],["style","color: #145A32"]],null,[[null,"click"]],function(n,o,e){var t=!0;return"click"===o&&(t=!1!==n.component.viewAnchors()&&t),t},w.ab,w.d)),t.ob(9,49152,null,0,r.j,[t.h,t.k],{expand:[0,"expand"],shape:[1,"shape"]},null),(n()(),t.Gb(-1,0,["View Anchor Index"]))],function(n,o){n(o,3,0,"",o.component.bookIdImageMap.get(o.context.$implicit._id)),n(o,5,0,"block","round"),n(o,9,0,"block","round")},null)}function C(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,12,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,w.nb,w.q)),t.ob(1,49152,null,0,r.A,[t.h,t.k],{translucent:[0,"translucent"]},null),(n()(),t.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,w.Tb,w.W)),t.ob(3,49152,null,0,r.Ab,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,2,"ion-title",[["size","large"],["style","font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;"]],null,null,null,w.Sb,w.V)),t.ob(5,49152,null,0,r.yb,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Immerse "])),(n()(),t.pb(7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,w.bb,w.e)),t.ob(8,49152,null,0,r.k,[t.h,t.k],null,null),(n()(),t.pb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,o,e){var t=!0;return"click"===o&&(t=!1!==n.component.close()&&t),t},w.ab,w.d)),t.ob(10,49152,null,0,r.j,[t.h,t.k],null,null),(n()(),t.pb(11,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,w.ob,w.r)),t.ob(12,49152,null,0,r.B,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(13,0,null,null,5,"ion-content",[],null,null,null,w.jb,w.m)),t.ob(14,49152,null,0,r.t,[t.h,t.k],null,null),(n()(),t.pb(15,0,null,0,3,"ion-list",[],null,null,null,w.yb,w.A)),t.ob(16,49152,null,0,r.N,[t.h,t.k],null,null),(n()(),t.gb(16777216,null,0,1,null,S)),t.ob(18,278528,null,0,A.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var e=o.component;n(o,1,0,!0),n(o,12,0,"close"),n(o,18,0,e.arbooks)},null)}function R(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-tab5",[],null,null,null,C,M)),t.ob(1,114688,null,0,f,[r.Gb,a,r.a,s.a,I.b,u.a,m],null,null)],function(n,o){n(o,1,0)},null)}var x=t.lb("app-tab5",f,R,{},{},[]),O=e("gIcY"),B=e("t8sF"),j=e("Yttj"),L=e("ZYCi");e.d(o,"Tab5PageModuleNgFactory",function(){return N});var N=t.mb(k,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[v.a,x]],[3,t.j],t.x]),t.wb(4608,A.l,A.k,[t.u,[2,A.r]]),t.wb(4608,O.p,O.p,[]),t.wb(4608,r.b,r.b,[t.z,t.g]),t.wb(4608,r.Gb,r.Gb,[r.b,t.j,t.q,A.c]),t.wb(4608,r.Kb,r.Kb,[r.b,t.j,t.q,A.c]),t.wb(4608,g.j,g.p,[A.c,t.B,g.n]),t.wb(4608,g.q,g.q,[g.j,g.o]),t.wb(5120,g.a,function(n){return[n]},[g.q]),t.wb(4608,g.m,g.m,[]),t.wb(6144,g.k,null,[g.m]),t.wb(4608,g.i,g.i,[g.k]),t.wb(6144,g.b,null,[g.i]),t.wb(4608,g.g,g.l,[g.b,t.q]),t.wb(4608,g.c,g.c,[g.g]),t.wb(4608,B.a,B.a,[]),t.wb(4608,I.a,I.a,[]),t.wb(4608,I.b,I.b,[I.a,B.a,g.c,r.Jb,j.a]),t.wb(1073742336,A.b,A.b,[]),t.wb(1073742336,O.n,O.n,[]),t.wb(1073742336,O.f,O.f,[]),t.wb(1073742336,r.Cb,r.Cb,[]),t.wb(1073742336,L.o,L.o,[[2,L.u],[2,L.m]]),t.wb(1073742336,g.e,g.e,[]),t.wb(1073742336,g.d,g.d,[]),t.wb(1073742336,I.d,I.d,[]),t.wb(1073742336,k,k,[]),t.wb(256,g.n,"XSRF-TOKEN",[]),t.wb(256,g.o,"X-XSRF-TOKEN",[]),t.wb(1024,L.k,function(){return[[{path:"",component:f}]]},[])])})}}]);