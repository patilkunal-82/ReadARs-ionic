(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),t=function(){return function(){}}(),i=o("pMnS"),s=o("oBZk"),r=o("ZZ/e"),u=o("ZYCi"),a=o("Ip0R"),c=o("lGQG"),b=o("d5rD"),p=o("JhVf"),h=o("jjgk"),d=o("gIcY"),f=function(){function l(l,n,o,e,t,i,s){this.navCtrl=l,this.authService=n,this.booksService=o,this.readarsService=e,this.baseURL=t,this.router=i,this.searchedData=s,this.sliderConfig={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0},setTranslate:function(){for(var l=this.width,n=this.height,o=this.slides,e=this.$wrapperEl,t=this.slidesSizesGrid,i=this.params.coverflowEffect,s=this.isHorizontal(),r=this.translate,u=s?l/2-r:n/2-r,a=s?i.rotate:-i.rotate,c=i.depth,b=0,p=o.length;b<p;b+=1){var h=o.eq(b),d=t[b],f=(u-h[0].swiperSlideOffset-d/2)/d*i.modifier,g=s?a*f:0,k=s?0:a*f,m=-c*Math.abs(f),w=s?0:i.stretch*f,I=s?i.stretch*f:0;if(Math.abs(I)<.001&&(I=0),Math.abs(w)<.001&&(w=0),Math.abs(m)<.001&&(m=0),Math.abs(g)<.001&&(g=0),Math.abs(k)<.001&&(k=0),h.transform("translate3d("+I+"px,"+w+"px,"+m+"px)  rotateX("+k+"deg) rotateY("+g+"deg)"),h[0].style.zIndex=1-Math.abs(Math.round(f)),i.slideShadows){var v=h.find(s?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),M=h.find(s?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===v.length&&(v=this.$('<div class="swiper-slide-shadow-'+(s?"left":"top")+'"></div>'),h.append(v)),0===M.length&&(M=this.$('<div class="swiper-slide-shadow-'+(s?"right":"bottom")+'"></div>'),h.append(M)),v.length&&(v[0].style.opacity=f>0?f:0),M.length&&(M[0].style.opacity=-f>0?-f:0)}}(this.support.pointerEvents||this.support.prefixedPointerEvents)&&(e[0].style.perspectiveOrigin=u+"px 50%")},setTransition:function(l){this.slides.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l)}}},this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.searchControl=new d.c}return l.prototype.ngOnInit=function(){this.setFilteredItems()},l.prototype.ionViewWillEnter=function(){var l=this;this.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),this.prepareBookIdsImagesMap()},l.prototype.prepareBookIdsImagesMap=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds),l.lbookIds=l.loadBookIds();for(var o=function(n){l.readarsService.getBookImage(l.lbookIds[n]).subscribe(function(o){l.url=o,console.log("this.url",l.url),l.bookIdImageMap.set(l.lbookIds[n],l.url),console.log("book image map",l.bookIdImageMap)},function(l){return console.log(l)})},e=0;e<l.lbookIds.length;e++)o(e)},function(n){return l.errMess=n})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.ngAfterViewInit=function(){},l.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l}(),g=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:50%;height:auto;margin:10px auto}.ioncard[_ngcontent-%COMP%]{height:50 px}"]],data:{}});function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,s.kb,s.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","checkmark-circle")},null)}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/pause-circle.svg"]],null,null,null,s.kb,s.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,1,0,"warning","../assets/icon/pause-circle.svg")},null)}function w(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,s.kb,s.r)),e.ob(1,49152,null,0,r.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","close-circle")},null)}function I(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,28,"ion-slide",[],null,null,null,s.Cb,s.J)),e.ob(1,49152,null,0,r.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,26,"ion-card",[["button",""],["class","bookimage"],["no-margin",""]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,6).onClick(o)&&t),t},s.cb,s.f)),e.ob(3,49152,null,0,r.l,[e.h,e.k],{button:[0,"button"]},null),e.ob(4,16384,null,0,u.n,[u.m,u.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(5,2),e.ob(6,737280,null,0,r.Jb,[a.h,r.Fb,e.k,u.m,[2,u.n]],null,null),(l()(),e.pb(7,0,null,0,13,"ion-card-header",[],null,null,null,s.Z,s.h)),e.ob(8,49152,null,0,r.n,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,11,"ion-card-title",[],null,null,null,s.bb,s.j)),e.ob(10,49152,null,0,r.p,[e.h,e.k],null,null),(l()(),e.Fb(11,0,[" "," "])),(l()(),e.pb(12,0,null,0,8,"ion-chip",[["color","primary"]],null,null,null,s.db,s.k)),e.ob(13,49152,null,0,r.r,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(-1,0,[" Available? "])),(l()(),e.gb(16777216,null,0,1,null,k)),e.ob(16,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,m)),e.ob(18,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,w)),e.ob(20,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(21,0,null,0,7,"ion-card-content",[],null,null,null,s.Y,s.g)),e.ob(22,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(23,0,null,0,5,"ion-row",[],null,null,null,s.yb,s.F)),e.ob(24,49152,null,0,r.hb,[e.h,e.k],null,null),(l()(),e.pb(25,0,null,0,3,"ion-col",[],null,null,null,s.eb,s.l)),e.ob(26,49152,null,0,r.s,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,1,"ion-img",[["class","bookimage"]],null,null,null,s.lb,s.s)),e.ob(28,49152,null,0,r.C,[e.h,e.k],{src:[0,"src"]},null)],function(l,n){var o=n.component;l(n,3,0,"");var e=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,e),l(n,6,0),l(n,13,0,"primary"),l(n,16,0,n.context.$implicit.isAvailable),l(n,18,0,n.context.$implicit.isReserved),l(n,20,0,n.context.$implicit.isBorrowed),l(n,28,0,o.bookIdImageMap.get(n.context.$implicit._id))},function(l,n){l(n,11,0,n.context.$implicit.bookname)})}function v(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,s.jb,s.q)),e.ob(1,49152,null,0,r.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.Lb,s.S)),e.ob(3,49152,null,0,r.Ab,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,s.Kb,s.R)),e.ob(5,49152,null,0,r.yb,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,[" Collections.. "])),(l()(),e.pb(7,0,null,null,12,"ion-content",[],null,null,null,s.fb,s.m)),e.ob(8,49152,null,0,r.t,[e.h,e.k],null,null),(l()(),e.pb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},s.xb,s.D)),e.ob(10,49152,null,0,r.bb,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,s.wb,s.E)),e.ob(12,49152,null,0,r.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(13,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),e.pb(14,0,null,null,3,"ion-slides",[],null,null,null,s.Db,s.K)),e.ob(15,49152,null,0,r.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,I)),e.ob(17,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(18,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadMoreBooks(o)&&e),e},s.nb,s.t)),e.ob(19,49152,null,0,r.D,[e.h,e.k],null,null)],function(l,n){var o=n.component;l(n,1,0,!0),l(n,12,0,"pull for update","...updating"),l(n,15,0,o.sliderConfig),l(n,17,0,o.books)},null)}function M(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-tab1",[],null,null,null,v,g)),e.ob(1,4308992,null,0,f,[r.Fb,c.a,b.a,p.a,"baseURL",u.m,h.a],null,null)],function(l,n){l(n,1,0)},null)}var x=e.lb("app-tab1",f,M,{},{},[]);o.d(n,"Tab1PageModuleNgFactory",function(){return y});var y=e.mb(t,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,x]],[3,e.j],e.x]),e.wb(4608,a.l,a.k,[e.u,[2,a.r]]),e.wb(4608,r.b,r.b,[e.z,e.g]),e.wb(4608,r.Eb,r.Eb,[r.b,e.j,e.q,a.c]),e.wb(4608,r.Ib,r.Ib,[r.b,e.j,e.q,a.c]),e.wb(4608,d.p,d.p,[]),e.wb(4608,d.b,d.b,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,r.Cb,r.Cb,[]),e.wb(1073742336,d.n,d.n,[]),e.wb(1073742336,d.f,d.f,[]),e.wb(1073742336,d.l,d.l,[]),e.wb(1073742336,u.o,u.o,[[2,u.u],[2,u.m]]),e.wb(1073742336,t,t,[]),e.wb(1024,u.k,function(){return[[{path:"",component:f}]]},[])])})}}]);