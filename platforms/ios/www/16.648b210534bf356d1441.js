(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{D6sf:function(n,l,o){"use strict";o.r(l);var e=o("CcnG"),t=o("mrSG"),i=o("gIcY"),s=o("azqb"),u=o("kUbd"),r=o("lGQG"),a=o("d5rD"),c=o("JhVf"),b=o("ZZ/e"),h=o("jjgk"),g=o("t8sF"),p=o("Yttj"),d=o("iWj2"),k=function(){function n(n,l,o,e,t,u,r,a,c,b,h,g,p,d,k,f,m,w,I,C){this.navCtrl=n,this.authService=l,this.booksService=o,this.readarsService=e,this.baseURL=t,this.router=u,this.searchedData=r,this.menu=a,this.favoriteService=c,this.fb=b,this.file=h,this.webview=g,this.plt=p,this.filePath=d,this.httpClient=k,this.imageLoaderService=f,this.toastCtrl=m,this.zone=w,this.loadingController=I,this.alertCtrl=C,this.images=[],this.allbooks=[],this.recobooks=[],this.bookGenreCollection=[],this.bookLanguageCollection=[],this.favorites=[],this.favoriteBooks=[],this.bookgenre=s.c,this.booklanguage=s.d,this.collectonCategory=s.f,this.showBooks=!1,this.showSkeleton=!0,this.showSpinner=!0,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.descending=!1,this.column="bookgenre",this.searchControl=new i.c}return n.prototype.ngOnInit=function(){var n=this;setTimeout(function(){n.showSpinner=!1},3e3),this.readarsService.getBooks().subscribe(function(l){n.showBooks=!0,n.allbooks=l,n.prepareBookIdsImagesMap(),console.log("BOOK COLLECTION IS ----------\x3e",n.allbooks)},function(l){n.showBooks=!1,n.errMess=l})},n.prototype.ionViewDidEnter=function(){},n.prototype.presentLoading=function(){return t.a(this,void 0,void 0,function(){var n;return t.c(this,function(l){switch(l.label){case 0:return[4,this.loadingController.create({cssClass:"my-custom-class",message:"Loading...please wait",duration:2400})];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),[4,n.onDidDismiss()];case 3:return l.sent(),console.log("Loading dismissed!"),[2]}})})},n.prototype.createForm=function(){this.selectCategoryFormGroup=this.fb.group({bookgenre:["",[i.o.required,i.o.minLength(2),i.o.maxLength(25)]]})},n.prototype.presentToast=function(n){return t.a(this,void 0,void 0,function(){return t.c(this,function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:n,duration:4e3,position:"middle"})];case 1:return l.sent().present(),[2]}})})},n.prototype.ionViewWillEnter=function(){},n.prototype.clearCache=function(){this.imageLoaderService.clearCache()},n.prototype.onImageLoad=function(n){console.log("image ready")},n.prototype.prepareBookIdsImagesMap=function(){var n=this;this.readarsService.getBookIds().subscribe(function(l){n.bookIds=l,n.storeBookIds(n.bookIds),n.lbookIds=n.loadBookIds();for(var o=function(l){n.readarsService.getBookImage(n.lbookIds[l]).subscribe(function(o){n.url=o,console.log("this.url",n.url),n.bookIdImageMap.set(n.lbookIds[l],n.url),console.log("book image map",n.bookIdImageMap)},function(n){return console.log(n)})},e=0;e<n.lbookIds.length;e++)o(e)},function(l){return n.errMess=l})},n.prototype.storeBookIds=function(n){console.log("BookIds stored are :",n),localStorage.setItem("bookIds",JSON.stringify(n))},n.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},n.prototype.ngAfterViewInit=function(){},n.prototype.selectCollectionCategory=function(n){this.showGenre=!1,this.showLanguage=!1,"Genre"===n.detail.value&&(this.showGenre=!0),"Language"===n.detail.value&&(this.showLanguage=!0)},n.prototype.showAllBooks=function(){console.log("Inside Show All Books")},n.prototype.alertManagement=function(n){return t.a(this,void 0,void 0,function(){var l,o;return t.c(this,function(e){switch(e.label){case 0:return[4,this.alertCtrl.create({message:n,header:"Please note",buttons:["Ok"]})];case 1:return[4,(l=e.sent()).present()];case 2:return e.sent(),[4,l.onDidDismiss()];case 3:return o=e.sent().role,console.log("onDidDismiss resolved with role",o),[2]}})})},n.prototype.displayGenreCollection=function(n){this.bookGenreCollection=[],console.log("EVENT DETAIL VALUE",n.detail.value);for(var l=0,o=0;l<this.allbooks.length;)this.allbooks[l].bookgenre===n.detail.value&&(this.bookGenreCollection[o]=this.allbooks[l],o++),l++;void 0!==this.bookGenreCollection&&0!=this.bookGenreCollection.length||this.alertManagement("Books of genre "+n.detail.value+" are NOT AVAILABLE in the bookshelf currently"),console.log("BOOK GENRE & COLLECTION",n.detail.value,this.bookGenreCollection.length)},n.prototype.displayLanguageCollection=function(n){this.bookLanguageCollection=[],console.log("EVENT DETAIL VALUE",n.detail.value);for(var l=0,o=0;l<this.allbooks.length;)this.allbooks[l].booklanguage===n.detail.value&&(this.bookLanguageCollection[o]=this.allbooks[l],o++),l++;void 0!==this.bookLanguageCollection&&0!=this.bookLanguageCollection.length||this.alertManagement("Books in "+n.detail.value+" language are NOT AVAILABLE in the bookshelf currently"),console.log("BOOK LANGUAGE & COLLECTION",n.detail.value,this.bookLanguageCollection)},n.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},n.prototype.refreshBookList=function(n){var l=this;setTimeout(function(){l.readarsService.getBooks().subscribe(function(n){l.allbooks=n},function(n){return l.errMess=n}),l.clearCache(),n.target.complete()},2e3)},n.prototype.setFilteredItems=function(){this.allbooks=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.allbooks)},n.prototype.loadMoreBooks=function(n){setTimeout(function(){},3e3)},n}(),f=function(){return function(){}}(),m=o("pMnS"),w=o("oBZk"),I=o("ZYCi"),C=o("Ip0R"),v=o("0mKY"),y=o("5IZ8"),x=o("t/Na"),O=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px}.displayinnercard[_ngcontent-%COMP%]{margin-top:auto;padding:5px}ion-select[_ngcontent-%COMP%]{width:100%;max-width:100%!important;padding-left:20px}ion-list-header[_ngcontent-%COMP%]{padding-left:0;display:block;text-align:center}ion-label[_ngcontent-%COMP%]{margin-left:10px}ion-back-button[_ngcontent-%COMP%]{color:#fdfefe}.display_heading[_ngcontent-%COMP%]{margin-left:0;padding:0}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:225%;height:4%;margin:10px auto}.bookcard[_ngcontent-%COMP%]{width:20%;height:20%;margin:10px;text-align:center}.bookimage1[_ngcontent-%COMP%]{width:50px;height:50px;box-shadow:grey}.bookimage2[_ngcontent-%COMP%]{width:90px;height:100px;box-shadow:grey}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}ion-toolbar[_ngcontent-%COMP%]{--background:#145A32}.my-custom-class[_ngcontent-%COMP%]{--background:#222;--spinner-color:#fff;color:#fff}.center[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:block!important}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.spin[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}ion-spinner[_ngcontent-%COMP%]{width:28px;height:28px;stroke:#444;fill:#222}"]],data:{}});function L(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["class","spin"]],null,null,null,w.Ib,w.M)),e.ob(1,49152,null,0,b.rb,[e.h,e.k],null,null)],null,null)}function M(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,14,"ion-list",[],null,null,null,w.vb,w.y)),e.ob(2,49152,null,0,b.O,[e.h,e.k],null,null),(n()(),e.pb(3,0,null,0,12,"ion-item",[],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.yb(n,5).onClick()&&t),"click"===l&&(t=!1!==e.yb(n,7).onClick(o)&&t),t},w.sb,w.v)),e.ob(4,49152,null,0,b.H,[e.h,e.k],null,null),e.ob(5,16384,null,0,I.n,[I.m,I.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(6,2),e.ob(7,737280,null,0,b.Mb,[C.h,b.Ib,e.k,I.m,[2,I.n]],null,null),(n()(),e.pb(8,0,null,0,1,"img-loader",[["class","bookimage2"],["useImg",""]],null,[[null,"load"]],function(n,l,o){var e=!0;return"load"===l&&(e=!1!==n.component.onImageLoad(o)&&e),e},v.b,v.a)),e.ob(9,114688,null,0,y.c,[e.k,e.D,y.b,y.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"}),(n()(),e.pb(10,0,null,0,5,"ion-label",[],null,null,null,w.tb,w.x)),e.ob(11,49152,null,0,b.N,[e.h,e.k],null,null),(n()(),e.pb(12,0,null,0,1,"h3",[["class","ion-text-wrap"],["style","color: black; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                "]],null,null,null,null,null)),(n()(),e.Gb(13,null,[" "," "])),(n()(),e.pb(14,0,null,0,1,"p",[["style","color:darkgrey; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                  font-size: small;"]],null,null,null,null,null)),(n()(),e.Gb(15,null,[" Author : "," "]))],function(n,l){var o=l.component,e=n(l,6,0,"bookdetail",l.context.$implicit._id);n(l,5,0,e),n(l,7,0),n(l,9,0,"",o.bookIdImageMap.get(l.context.$implicit._id))},function(n,l){n(l,13,0,l.context.$implicit.bookname),n(l,15,0,l.context.$implicit.bookauthor)})}function S(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,8,"ion-list",[],null,null,null,w.vb,w.y)),e.ob(1,49152,null,0,b.O,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,6,"ion-virtual-scroll",[],null,null,null,w.Rb,w.V)),e.ob(3,835584,null,3,b.Cb,[e.z,e.s,e.k],{items:[0,"items"]},null),e.Eb(335544320,2,{itmTmp:0}),e.Eb(335544320,3,{hdrTmp:0}),e.Eb(335544320,4,{ftrTmp:0}),(n()(),e.gb(16777216,null,0,1,null,M)),e.ob(8,16384,[[2,4]],0,b.Qb,[e.L,e.O],null,null)],function(n,l){n(l,3,0,l.component.allbooks)},null)}function B(n){return e.Ib(0,[e.Eb(402653184,1,{selectCategoryFormDirective:0}),(n()(),e.pb(1,0,null,null,10,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,w.mb,w.q)),e.ob(2,49152,null,0,b.B,[e.h,e.k],{translucent:[0,"translucent"]},null),(n()(),e.pb(3,0,null,0,8,"ion-toolbar",[],null,null,null,w.Qb,w.U)),e.ob(4,49152,null,0,b.Bb,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,w.ab,w.e)),e.ob(6,49152,null,0,b.l,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==e.yb(n,9).onClick(o)&&t),t},w.Y,w.c)),e.ob(8,49152,null,0,b.g,[e.h,e.k],null,null),e.ob(9,16384,null,0,b.h,[[2,b.hb],b.Ib],null,null),(n()(),e.pb(10,0,null,0,1,"ion-title",[["size","large"],["style","font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: white; font-weight: bolder;"]],null,null,null,w.Pb,w.T)),e.ob(11,49152,null,0,b.zb,[e.h,e.k],null,null),(n()(),e.pb(12,0,null,null,20,"ion-content",[],null,null,null,w.ib,w.m)),e.ob(13,49152,null,0,b.u,[e.h,e.k],null,null),(n()(),e.pb(14,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.refreshBookList(o)&&e),e},w.yb,w.B)),e.ob(15,49152,null,0,b.cb,[e.h,e.k],null,null),(n()(),e.pb(16,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,w.xb,w.C)),e.ob(17,49152,null,0,b.db,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(n()(),e.pb(18,0,null,0,8,"ion-list-header",[["color",""],["style","margin-bottom: 10px;"]],null,null,null,w.ub,w.z)),e.ob(19,49152,null,0,b.P,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.pb(20,0,null,0,6,"ion-item",[["class",""]],null,null,null,w.sb,w.v)),e.ob(21,49152,null,0,b.H,[e.h,e.k],null,null),(n()(),e.pb(22,0,null,0,1,"ion-icon",[["src","../assets/icon/list.svg"],["style","color: #145A32; margin-right: 5px;"]],null,null,null,w.nb,w.r)),e.ob(23,49152,null,0,b.C,[e.h,e.k],{src:[0,"src"]},null),(n()(),e.pb(24,0,null,0,2,"ion-label",[["style","color: #145A32; margin-left: 5px; "]],null,null,null,w.tb,w.x)),e.ob(25,49152,null,0,b.N,[e.h,e.k],null,null),(n()(),e.Gb(-1,0,[" All books in the shelf "])),(n()(),e.gb(16777216,null,0,1,null,L)),e.ob(28,16384,null,0,C.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,S)),e.ob(30,16384,null,0,C.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(31,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(n,l,o){var e=!0;return"ionInfinite"===l&&(e=!1!==n.component.loadMoreBooks(o)&&e),e},w.pb,w.t)),e.ob(32,49152,null,0,b.E,[e.h,e.k],null,null)],function(n,l){var o=l.component;n(l,2,0,!0),n(l,17,0,"pull for update","...updating"),n(l,19,0,""),n(l,23,0,"../assets/icon/list.svg"),n(l,28,0,o.showSpinner),n(l,30,0,!o.showSpinner)},null)}function P(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"app-showallbooks",[],null,null,null,B,O)),e.ob(1,4308992,null,0,k,[b.Ib,r.a,a.a,c.a,"baseURL",I.m,h.a,b.Gb,u.a,i.b,g.a,p.a,b.Kb,d.a,x.c,y.b,b.Pb,e.z,b.Fb,b.b],null,null)],function(n,l){n(l,1,0)},null)}var T=e.lb("app-showallbooks",k,P,{},{},[]);o.d(l,"ShowallbooksPageModuleNgFactory",function(){return _});var _=e.mb(f,[],function(n){return e.vb([e.wb(512,e.j,e.bb,[[8,[m.a,T]],[3,e.j],e.x]),e.wb(4608,C.l,C.k,[e.u,[2,C.r]]),e.wb(4608,b.c,b.c,[e.z,e.g]),e.wb(4608,b.Hb,b.Hb,[b.c,e.j,e.q,C.c]),e.wb(4608,b.Lb,b.Lb,[b.c,e.j,e.q,C.c]),e.wb(4608,i.r,i.r,[]),e.wb(4608,i.b,i.b,[]),e.wb(4608,x.j,x.p,[C.c,e.B,x.n]),e.wb(4608,x.q,x.q,[x.j,x.o]),e.wb(5120,x.a,function(n){return[n]},[x.q]),e.wb(4608,x.m,x.m,[]),e.wb(6144,x.k,null,[x.m]),e.wb(4608,x.i,x.i,[x.k]),e.wb(6144,x.b,null,[x.i]),e.wb(4608,x.g,x.l,[x.b,e.q]),e.wb(4608,x.c,x.c,[x.g]),e.wb(4608,g.a,g.a,[]),e.wb(4608,y.a,y.a,[]),e.wb(4608,y.b,y.b,[y.a,g.a,x.c,b.Kb,p.a]),e.wb(1073742336,C.b,C.b,[]),e.wb(1073742336,b.Db,b.Db,[]),e.wb(1073742336,i.p,i.p,[]),e.wb(1073742336,i.f,i.f,[]),e.wb(1073742336,i.m,i.m,[]),e.wb(1073742336,I.o,I.o,[[2,I.u],[2,I.m]]),e.wb(1073742336,x.e,x.e,[]),e.wb(1073742336,x.d,x.d,[]),e.wb(1073742336,y.d,y.d,[]),e.wb(1073742336,f,f,[]),e.wb(256,x.n,"XSRF-TOKEN",[]),e.wb(256,x.o,"X-XSRF-TOKEN",[]),e.wb(1024,I.k,function(){return[[{path:"",component:k}]]},[])])})}}]);