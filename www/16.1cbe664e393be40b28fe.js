(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),t=function(){return function(){}}(),i=o("pMnS"),u=o("oBZk"),s=o("ZZ/e"),r=o("0mKY"),a=o("ZYCi"),b=o("Ip0R"),c=o("5IZ8"),p=o("gIcY"),h=o("azqb"),g=o("kUbd"),d=o("lGQG"),k=o("d5rD"),f=o("JhVf"),m=o("jjgk"),I=o("t8sF"),v=o("Yttj"),w=o("iWj2"),C=function(){function l(l,n,o,e,t,i,u,s,r,a,b,c,g,d,k,f){this.navCtrl=l,this.authService=n,this.booksService=o,this.readarsService=e,this.baseURL=t,this.router=i,this.searchedData=u,this.menu=s,this.favoriteService=r,this.fb=a,this.file=b,this.webview=c,this.plt=g,this.filePath=d,this.httpClient=k,this.imageLoaderService=f,this.sliderConfig={slidesPerView:4,coverflowEffect:{rotate:30,stretch:0,depth:100,modifier:1,autoplay:!0},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0},setTranslate:function(){for(var l=this.width,n=this.height,o=this.slides,e=this.$wrapperEl,t=this.slidesSizesGrid,i=this.params.coverflowEffect,u=this.isHorizontal(),s=this.translate,r=u?l/2-s:n/2-s,a=u?i.rotate:-i.rotate,b=i.depth,c=0,p=o.length;c<p;c+=1){var h=o.eq(c),g=t[c],d=(r-h[0].swiperSlideOffset-g/2)/g*i.modifier,k=u?a*d:0,f=u?0:a*d,m=-b*Math.abs(d),I=u?0:i.stretch*d,v=u?i.stretch*d:0;if(Math.abs(v)<.001&&(v=0),Math.abs(I)<.001&&(I=0),Math.abs(m)<.001&&(m=0),Math.abs(k)<.001&&(k=0),Math.abs(f)<.001&&(f=0),h.transform("translate3d("+v+"px,"+I+"px,"+m+"px)  rotateX("+f+"deg) rotateY("+k+"deg)"),h[0].style.zIndex=1-Math.abs(Math.round(d)),i.slideShadows){var w=h.find(u?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),C=h.find(u?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===w.length&&(w=this.$('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>'),h.append(w)),0===C.length&&(C=this.$('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>'),h.append(C)),w.length&&(w[0].style.opacity=d>0?d:0),C.length&&(C[0].style.opacity=-d>0?-d:0)}}(this.support.pointerEvents||this.support.prefixedPointerEvents)&&(e[0].style.perspectiveOrigin=r+"px 50%")},setTransition:function(l){this.slides.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l)}}},this.pages=[],this.images=[],this.books=[],this.recobooks=[],this.bookGenreCollection=[],this.bookLanguageCollection=[],this.favorites=[],this.favoriteBooks=[],this.bookgenre=h.c,this.booklanguage=h.d,this.collectonCategory=h.e,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.descending=!1,this.column="bookgenre",this.searchControl=new p.c}return l.prototype.ngOnInit=function(){var l=this;this.createForm(),this.setFilteredItems(),this.readarsService.getBooks().subscribe(function(n){l.books=n,l.prepareBookIdsImagesMap(),console.log("BOOK COLLECTION IS ----------\x3e",l.books)},function(n){return l.errMess=n}),this.readarsService.getRecommendedBooks().subscribe(function(n){l.recobooks=n,console.log("RECO BOOK COLLECTION IS ----------\x3e",l.recobooks)},function(n){return l.errMess=n})},l.prototype.createForm=function(){this.selectCategoryFormGroup=this.fb.group({bookgenre:["",[p.m.required,p.m.minLength(2),p.m.maxLength(25)]]})},l.prototype.ionViewWillEnter=function(){this.prepareBookIdsImagesMap()},l.prototype.clearCache=function(){this.imageLoaderService.clearCache()},l.prototype.onImageLoad=function(l){console.log("image ready")},l.prototype.prepareBookIdsImagesMap=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds),l.lbookIds=l.loadBookIds();for(var o=function(n){l.readarsService.getBookImage(l.lbookIds[n]).subscribe(function(o){l.url=o,console.log("this.url",l.url),l.bookIdImageMap.set(l.lbookIds[n],l.url),console.log("book image map",l.bookIdImageMap)},function(l){return console.log(l)})},e=0;e<l.lbookIds.length;e++)o(e)},function(n){return l.errMess=n})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.ngAfterViewInit=function(){},l.prototype.selectCollectionCategory=function(l){this.showGenre=!1,this.showLanguage=!1,"Genre"===l.detail.value&&(this.showGenre=!0),"Language"===l.detail.value&&(this.showLanguage=!0)},l.prototype.displayGenreCollection=function(l){this.bookGenreCollection=[],console.log("EVENT DETAIL VALUE",l.detail.value);for(var n=0,o=0;n<this.books.length;)this.books[n].bookgenre===l.detail.value&&(this.bookGenreCollection[o]=this.books[n],o++),n++;console.log("BOOK GENRE & COLLECTION",l.detail.value,this.bookGenreCollection.length)},l.prototype.displayLanguageCollection=function(l){this.bookLanguageCollection=[],console.log("EVENT DETAIL VALUE",l.detail.value);for(var n=0,o=0;n<this.books.length;)this.books[n].booklanguage===l.detail.value&&(this.bookLanguageCollection[o]=this.books[n],o++),n++;console.log("BOOK LANGUAGE & COLLECTION",l.detail.value,this.bookLanguageCollection)},l.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),n.clearCache(),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l}(),y=o("t/Na"),O=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px}.displayinnercard[_ngcontent-%COMP%]{margin-top:auto;padding:5px}ion-select[_ngcontent-%COMP%]{width:100%;max-width:100%!important;padding-left:20px}ion-list-header[_ngcontent-%COMP%]{padding-left:0;display:block;text-align:center}.display_heading[_ngcontent-%COMP%]{margin-left:0;padding:0}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:225%;height:auto;margin:10px auto}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}ion-toolbar[_ngcontent-%COMP%]{--background:#145A32}"]],data:{}});function L(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Fb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"img-loader",[["button",""],["class","bookimage"],["useImg",""]],null,[[null,"load"],[null,"click"]],function(l,n,o){var t=!0,i=l.component;return"click"===n&&(t=!1!==e.yb(l,3).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,5).onClick(o)&&t),"load"===n&&(t=!1!==i.onImageLoad(o)&&t),t},r.b,r.a)),e.ob(3,16384,null,0,a.n,[a.m,a.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(4,2),e.ob(5,737280,null,0,s.Lb,[b.h,s.Hb,e.k,a.m,[2,a.n]],null,null),e.ob(6,114688,null,0,c.c,[e.k,e.D,c.b,c.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"})],function(l,n){var o=n.component,e=l(n,4,0,"bookdetail",n.context.$implicit._id);l(n,3,0,e),l(n,5,0),l(n,6,0,"",o.bookIdImageMap.get(n.context.$implicit._id))},null)}function M(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Db,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function x(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Db,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function E(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Fb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"img-loader",[["button",""],["class","bookimage"],["useImg",""]],null,[[null,"load"],[null,"click"]],function(l,n,o){var t=!0,i=l.component;return"click"===n&&(t=!1!==e.yb(l,3).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,5).onClick(o)&&t),"load"===n&&(t=!1!==i.onImageLoad(o)&&t),t},r.b,r.a)),e.ob(3,16384,null,0,a.n,[a.m,a.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(4,2),e.ob(5,737280,null,0,s.Lb,[b.h,s.Hb,e.k,a.m,[2,a.n]],null,null),e.ob(6,114688,null,0,c.c,[e.k,e.D,c.b,c.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"})],function(l,n){var o=n.component,e=l(n,4,0,"bookdetail",n.context.$implicit._id);l(n,3,0,e),l(n,5,0),l(n,6,0,"",o.bookIdImageMap.get(n.context.$implicit._id))},null)}function B(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-item-sliding",[],null,null,null,u.sb,u.y)),e.ob(1,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Select genre.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,5)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,5)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.displayGenreCollection(o)&&t),t},u.Eb,u.I)),e.Db(5120,null,p.g,function(l){return[l]},[s.Mb]),e.ob(4,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(5,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,x)),e.ob(7,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(8,0,null,0,3,"ion-slides",[],null,null,null,u.Gb,u.L)),e.ob(9,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,E)),e.ob(11,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,4,0,"Select genre..","popover"),l(n,7,0,o.bookgenre),l(n,9,0,o.sliderConfig),l(n,11,0,o.bookGenreCollection)},null)}function S(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Db,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function G(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Fb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"img-loader",[["button",""],["class","bookimage"],["useImg",""]],null,[[null,"load"],[null,"click"]],function(l,n,o){var t=!0,i=l.component;return"click"===n&&(t=!1!==e.yb(l,3).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,5).onClick(o)&&t),"load"===n&&(t=!1!==i.onImageLoad(o)&&t),t},r.b,r.a)),e.ob(3,16384,null,0,a.n,[a.m,a.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(4,2),e.ob(5,737280,null,0,s.Lb,[b.h,s.Hb,e.k,a.m,[2,a.n]],null,null),e.ob(6,114688,null,0,c.c,[e.k,e.D,c.b,c.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"})],function(l,n){var o=n.component,e=l(n,4,0,"bookdetail",n.context.$implicit._id);l(n,3,0,e),l(n,5,0),l(n,6,0,"",o.bookIdImageMap.get(n.context.$implicit._id))},null)}function F(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-item-sliding",[],null,null,null,u.sb,u.y)),e.ob(1,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Select language.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,5)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,5)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.displayLanguageCollection(o)&&t),t},u.Eb,u.I)),e.Db(5120,null,p.g,function(l){return[l]},[s.Mb]),e.ob(4,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(5,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,S)),e.ob(7,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(8,0,null,0,3,"ion-slides",[],null,null,null,u.Gb,u.L)),e.ob(9,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,G)),e.ob(11,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,4,0,"Select language..","popover"),l(n,7,0,o.booklanguage),l(n,9,0,o.sliderConfig),l(n,11,0,o.bookLanguageCollection)},null)}function T(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Fb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"img-loader",[["button",""],["class","bookimage"],["useImg",""]],null,[[null,"load"],[null,"click"]],function(l,n,o){var t=!0,i=l.component;return"click"===n&&(t=!1!==e.yb(l,3).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,5).onClick(o)&&t),"load"===n&&(t=!1!==i.onImageLoad(o)&&t),t},r.b,r.a)),e.ob(3,16384,null,0,a.n,[a.m,a.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(4,2),e.ob(5,737280,null,0,s.Lb,[b.h,s.Hb,e.k,a.m,[2,a.n]],null,null),e.ob(6,114688,null,0,c.c,[e.k,e.D,c.b,c.a],{useImg:[0,"useImg"],src:[1,"src"]},{load:"load"})],function(l,n){var o=n.component,e=l(n,4,0,"bookdetail",n.context.$implicit._id);l(n,3,0,e),l(n,5,0),l(n,6,0,"",o.bookIdImageMap.get(n.context.$implicit._id))},null)}function _(l){return e.Ib(0,[e.Eb(402653184,1,{selectCategoryFormDirective:0}),(l()(),e.pb(1,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,u.lb,u.q)),e.ob(2,49152,null,0,s.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,u.Pb,u.U)),e.ob(4,49152,null,0,s.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[["size","large"],["style","font:xx-large; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n               color: #FDFEFE  ; font-weight: bolder; font-size: 25px;"]],null,null,null,u.Ob,u.T)),e.ob(6,49152,null,0,s.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" ReadARs "])),(l()(),e.pb(8,0,null,null,58,"ion-content",[],null,null,null,u.hb,u.m)),e.ob(9,49152,null,0,s.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},u.Ab,u.E)),e.ob(11,49152,null,0,s.bb,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,u.zb,u.F)),e.ob(13,49152,null,0,s.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(14,0,null,0,50,"ion-list",[],null,null,null,u.wb,u.A)),e.ob(15,49152,null,0,s.N,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,8,"ion-list-header",[["color",""]],null,null,null,u.vb,u.B)),e.ob(17,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(18,0,null,0,6,"ion-item",[["class","ion-text-center"]],null,null,null,u.tb,u.v)),e.ob(19,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(20,0,null,0,1,"ion-icon",[["src","../assets/icon/list.svg"],["style","color:  #2C3E50"]],null,null,null,u.mb,u.r)),e.ob(21,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(22,0,null,0,2,"ion-label",[["style","color: #17202A   "]],null,null,null,u.ub,u.z)),e.ob(23,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" ALL THE BOOKS "])),(l()(),e.pb(25,0,null,0,5,"ion-item-sliding",[],null,null,null,u.sb,u.y)),e.ob(26,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,3,"ion-slides",[],null,null,null,u.Gb,u.L)),e.ob(28,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,L)),e.ob(30,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(31,0,null,0,8,"ion-list-header",[["color",""]],null,null,null,u.vb,u.B)),e.ob(32,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(33,0,null,0,6,"ion-item",[["class","ion-text-center"]],null,null,null,u.tb,u.v)),e.ob(34,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(35,0,null,0,1,"ion-icon",[["src","../assets/icon/albums.svg"],["style","color: #2C3E50 ;"]],null,null,null,u.mb,u.r)),e.ob(36,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(37,0,null,0,2,"ion-label",[["style","color:  #17202A ;"]],null,null,null,u.ub,u.z)),e.ob(38,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" BOOKS BY CATEGORIES "])),(l()(),e.pb(40,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Choose category.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,43)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,43)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.selectCollectionCategory(o)&&t),t},u.Eb,u.I)),e.Db(5120,null,p.g,function(l){return[l]},[s.Mb]),e.ob(42,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(43,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,M)),e.ob(45,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(16777216,null,0,1,null,B)),e.ob(47,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,F)),e.ob(49,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(50,0,null,0,8,"ion-list-header",[["color",""]],null,null,null,u.vb,u.B)),e.ob(51,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(52,0,null,0,6,"ion-item",[["class","ion-text-center"]],null,null,null,u.tb,u.v)),e.ob(53,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(54,0,null,0,1,"ion-icon",[["src","../assets/icon/thumbs-up.svg"],["style","color: #2C3E50  ;"]],null,null,null,u.mb,u.r)),e.ob(55,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(56,0,null,0,2,"ion-label",[["style","color: #17202A ;"]],null,null,null,u.ub,u.z)),e.ob(57,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["READERS' RECOMMENDATIONS"])),(l()(),e.pb(59,0,null,0,5,"ion-item-sliding",[],null,null,null,u.sb,u.y)),e.ob(60,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(61,0,null,0,3,"ion-slides",[],null,null,null,u.Gb,u.L)),e.ob(62,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,T)),e.ob(64,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(65,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadMoreBooks(o)&&e),e},u.ob,u.t)),e.ob(66,49152,null,0,s.D,[e.h,e.k],null,null)],function(l,n){var o=n.component;l(n,2,0,!0),l(n,13,0,"pull for update","...updating"),l(n,17,0,""),l(n,21,0,"../assets/icon/list.svg"),l(n,28,0,o.sliderConfig),l(n,30,0,o.books),l(n,32,0,""),l(n,36,0,"../assets/icon/albums.svg"),l(n,42,0,"Choose category..","popover"),l(n,45,0,o.collectonCategory),l(n,47,0,o.showGenre),l(n,49,0,o.showLanguage),l(n,51,0,""),l(n,55,0,"../assets/icon/thumbs-up.svg"),l(n,62,0,o.sliderConfig),l(n,64,0,o.recobooks)},null)}function D(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-tab1",[],null,null,null,_,O)),e.ob(1,4308992,null,0,C,[s.Hb,d.a,k.a,f.a,"baseURL",a.m,m.a,s.Fb,g.a,p.b,I.a,v.a,s.Jb,w.a,y.c,c.b],null,null)],function(l,n){l(n,1,0)},null)}var P=e.lb("app-tab1",C,D,{},{},[]);o.d(n,"Tab1PageModuleNgFactory",function(){return A});var A=e.mb(t,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,P]],[3,e.j],e.x]),e.wb(4608,b.l,b.k,[e.u,[2,b.s]]),e.wb(4608,s.b,s.b,[e.z,e.g]),e.wb(4608,s.Gb,s.Gb,[s.b,e.j,e.q,b.c]),e.wb(4608,s.Kb,s.Kb,[s.b,e.j,e.q,b.c]),e.wb(4608,p.p,p.p,[]),e.wb(4608,p.b,p.b,[]),e.wb(4608,y.j,y.p,[b.c,e.B,y.n]),e.wb(4608,y.q,y.q,[y.j,y.o]),e.wb(5120,y.a,function(l){return[l]},[y.q]),e.wb(4608,y.m,y.m,[]),e.wb(6144,y.k,null,[y.m]),e.wb(4608,y.i,y.i,[y.k]),e.wb(6144,y.b,null,[y.i]),e.wb(4608,y.g,y.l,[y.b,e.q]),e.wb(4608,y.c,y.c,[y.g]),e.wb(4608,I.a,I.a,[]),e.wb(4608,c.a,c.a,[]),e.wb(4608,c.b,c.b,[c.a,I.a,y.c,s.Jb,v.a]),e.wb(1073742336,b.b,b.b,[]),e.wb(1073742336,s.Cb,s.Cb,[]),e.wb(1073742336,p.n,p.n,[]),e.wb(1073742336,p.f,p.f,[]),e.wb(1073742336,p.l,p.l,[]),e.wb(1073742336,a.o,a.o,[[2,a.u],[2,a.m]]),e.wb(1073742336,y.e,y.e,[]),e.wb(1073742336,y.d,y.d,[]),e.wb(1073742336,c.d,c.d,[]),e.wb(1073742336,t,t,[]),e.wb(256,y.n,"XSRF-TOKEN",[]),e.wb(256,y.o,"X-XSRF-TOKEN",[]),e.wb(1024,a.k,function(){return[[{path:"",component:C}]]},[])])})}}]);