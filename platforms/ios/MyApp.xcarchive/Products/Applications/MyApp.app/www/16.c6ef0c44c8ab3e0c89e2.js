(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,o){"use strict";o.r(n);var t=o("CcnG"),e=function(){return function(){}}(),i=o("pMnS"),s=o("oBZk"),r=o("ZZ/e"),u=o("ZYCi"),a=o("Ip0R"),c=o("lGQG"),b=o("d5rD"),p=o("JhVf"),d=o("jjgk"),h=o("gIcY"),f=function(){function l(l,n,o,t,e,i,s){this.navCtrl=l,this.authService=n,this.booksService=o,this.readarsService=t,this.baseURL=e,this.router=i,this.searchedData=s,this.sliderConfig={on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var l={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};this.params=Object.assign(this.params,l),this.originalParams=Object.assign(this.originalParams,l)},setTranslate:function(){for(var l=this.slides,n=this.rtlTranslate,o=0;o<l.length;o+=1){var t=l.eq(o),e=t[0].progress;this.params.flipEffect.limitRotation&&(e=Math.max(Math.min(t[0].progress,1),-1));var i=-180*e,s=0,r=-t[0].swiperSlideOffset,u=0;if(this.isHorizontal()?n&&(i=-i):(u=r,r=0,s=-i,i=0),t[0].style.zIndex=-Math.abs(Math.round(e))+l.length,this.params.flipEffect.slideShadows){var a=this.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),c=this.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===a.length&&(a=this.$('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),t.append(a)),0===c.length&&(c=this.$('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),t.append(c)),a.length&&(a[0].style.opacity=Math.max(-e,0)),c.length&&(c[0].style.opacity=Math.max(e,0))}t.transform("translate3d("+r+"px, "+u+"px, 0px) rotateX("+s+"deg) rotateY("+i+"deg)")}},setTransition:function(l){var n=this,o=n.slides,t=n.activeIndex,e=n.$wrapperEl;if(o.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l),n.params.virtualTranslate&&0!==l){var i=!1;o.eq(t).transitionEnd(function(){if(!i&&n&&!n.destroyed){i=!0,n.animating=!1;for(var l=["webkitTransitionEnd","transitionend"],o=0;o<l.length;o+=1)e.trigger(l[o])}})}}}},this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.searchControl=new h.c}return l.prototype.ngOnInit=function(){this.setFilteredItems()},l.prototype.ionViewWillEnter=function(){var l=this;this.readarsService.getBooks().subscribe(function(n){l.books=n},function(n){return l.errMess=n}),this.prepareBookIdsImagesMap()},l.prototype.prepareBookIdsImagesMap=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds),l.lbookIds=l.loadBookIds();for(var o=function(n){l.readarsService.getBookImage(l.lbookIds[n]).subscribe(function(o){l.url=o,console.log("this.url",l.url),l.bookIdImageMap.set(l.lbookIds[n],l.url),console.log("book image map",l.bookIdImageMap)},function(l){return console.log(l)})},t=0;t<l.lbookIds.length;t++)o(t)},function(n){return l.errMess=n})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.ngAfterViewInit=function(){},l.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l}(),g=t.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.display_heading[_ngcontent-%COMP%]{margin:10px auto;padding:10px}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:50%;height:auto;margin:10px auto}.ioncard[_ngcontent-%COMP%]{height:50 px}"]],data:{}});function k(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle"]],null,null,null,s.kb,s.r)),t.ob(1,49152,null,0,r.B,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"success","checkmark-circle")},null)}function m(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[["color","warning"],["src","../assets/icon/pause-circle.svg"]],null,null,null,s.kb,s.r)),t.ob(1,49152,null,0,r.B,[t.h,t.k],{color:[0,"color"],src:[1,"src"]},null)],function(l,n){l(n,1,0,"warning","../assets/icon/pause-circle.svg")},null)}function w(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","close-circle"]],null,null,null,s.kb,s.r)),t.ob(1,49152,null,0,r.B,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"danger","close-circle")},null)}function I(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,28,"ion-slide",[],null,null,null,s.Cb,s.J)),t.ob(1,49152,null,0,r.ob,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,26,"ion-card",[["button",""],["class","bookimage"],["no-margin",""]],null,[[null,"click"]],function(l,n,o){var e=!0;return"click"===n&&(e=!1!==t.yb(l,4).onClick()&&e),"click"===n&&(e=!1!==t.yb(l,6).onClick(o)&&e),e},s.cb,s.f)),t.ob(3,49152,null,0,r.l,[t.h,t.k],{button:[0,"button"]},null),t.ob(4,16384,null,0,u.n,[u.m,u.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(5,2),t.ob(6,737280,null,0,r.Jb,[a.h,r.Fb,t.k,u.m,[2,u.n]],null,null),(l()(),t.pb(7,0,null,0,13,"ion-card-header",[],null,null,null,s.Z,s.h)),t.ob(8,49152,null,0,r.n,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,11,"ion-card-title",[],null,null,null,s.bb,s.j)),t.ob(10,49152,null,0,r.p,[t.h,t.k],null,null),(l()(),t.Fb(11,0,[" "," "])),(l()(),t.pb(12,0,null,0,8,"ion-chip",[["color","primary"]],null,null,null,s.db,s.k)),t.ob(13,49152,null,0,r.r,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Fb(-1,0,[" Available? "])),(l()(),t.gb(16777216,null,0,1,null,k)),t.ob(16,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,m)),t.ob(18,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,w)),t.ob(20,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(21,0,null,0,7,"ion-card-content",[],null,null,null,s.Y,s.g)),t.ob(22,49152,null,0,r.m,[t.h,t.k],null,null),(l()(),t.pb(23,0,null,0,5,"ion-row",[],null,null,null,s.yb,s.F)),t.ob(24,49152,null,0,r.hb,[t.h,t.k],null,null),(l()(),t.pb(25,0,null,0,3,"ion-col",[],null,null,null,s.eb,s.l)),t.ob(26,49152,null,0,r.s,[t.h,t.k],null,null),(l()(),t.pb(27,0,null,0,1,"ion-img",[["class","bookimage"]],null,null,null,s.lb,s.s)),t.ob(28,49152,null,0,r.C,[t.h,t.k],{src:[0,"src"]},null)],function(l,n){var o=n.component;l(n,3,0,"");var t=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,t),l(n,6,0),l(n,13,0,"primary"),l(n,16,0,n.context.$implicit.isAvailable),l(n,18,0,n.context.$implicit.isReserved),l(n,20,0,n.context.$implicit.isBorrowed),l(n,28,0,o.bookIdImageMap.get(n.context.$implicit._id))},function(l,n){l(n,11,0,n.context.$implicit.bookname)})}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,s.jb,s.q)),t.ob(1,49152,null,0,r.A,[t.h,t.k],{translucent:[0,"translucent"]},null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.Lb,s.S)),t.ob(3,49152,null,0,r.Ab,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[["size","large"]],null,null,null,s.Kb,s.R)),t.ob(5,49152,null,0,r.yb,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,[" Collections.. "])),(l()(),t.pb(7,0,null,null,12,"ion-content",[],null,null,null,s.fb,s.m)),t.ob(8,49152,null,0,r.t,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.refreshBookList(o)&&t),t},s.xb,s.D)),t.ob(10,49152,null,0,r.bb,[t.h,t.k],null,null),(l()(),t.pb(11,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,s.wb,s.E)),t.ob(12,49152,null,0,r.cb,[t.h,t.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),t.pb(13,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,3,"ion-slides",[],null,null,null,s.Db,s.K)),t.ob(15,49152,null,0,r.pb,[t.h,t.k],{options:[0,"options"]},null),(l()(),t.gb(16777216,null,0,1,null,I)),t.ob(17,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(18,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadMoreBooks(o)&&t),t},s.nb,s.t)),t.ob(19,49152,null,0,r.D,[t.h,t.k],null,null)],function(l,n){var o=n.component;l(n,1,0,!0),l(n,12,0,"pull for update","...updating"),l(n,15,0,o.sliderConfig),l(n,17,0,o.books)},null)}function x(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-tab1",[],null,null,null,v,g)),t.ob(1,4308992,null,0,f,[r.Fb,c.a,b.a,p.a,"baseURL",u.m,d.a],null,null)],function(l,n){l(n,1,0)},null)}var M=t.lb("app-tab1",f,x,{},{},[]);o.d(n,"Tab1PageModuleNgFactory",function(){return y});var y=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[i.a,M]],[3,t.j],t.x]),t.wb(4608,a.l,a.k,[t.u,[2,a.r]]),t.wb(4608,r.b,r.b,[t.z,t.g]),t.wb(4608,r.Eb,r.Eb,[r.b,t.j,t.q,a.c]),t.wb(4608,r.Ib,r.Ib,[r.b,t.j,t.q,a.c]),t.wb(4608,h.p,h.p,[]),t.wb(4608,h.b,h.b,[]),t.wb(1073742336,a.b,a.b,[]),t.wb(1073742336,r.Cb,r.Cb,[]),t.wb(1073742336,h.n,h.n,[]),t.wb(1073742336,h.f,h.f,[]),t.wb(1073742336,h.l,h.l,[]),t.wb(1073742336,u.o,u.o,[[2,u.u],[2,u.m]]),t.wb(1073742336,e,e,[]),t.wb(1024,u.k,function(){return[[{path:"",component:f}]]},[])])})}}]);