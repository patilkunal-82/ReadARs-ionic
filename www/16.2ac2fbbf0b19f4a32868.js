(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,o){"use strict";o.r(n);var e=o("CcnG"),t=function(){return function(){}}(),i=o("pMnS"),u=o("oBZk"),s=o("ZZ/e"),r=o("ZYCi"),a=o("Ip0R"),b=o("gIcY"),c=o("azqb"),h=o("kUbd"),p=o("lGQG"),g=o("d5rD"),d=o("JhVf"),k=o("jjgk"),f=o("01F9"),m=o("Yttj"),v=o("iWj2"),C=function(){function l(l,n,o,e,t,i,u,s,r,a,h,p,g,d){this.navCtrl=l,this.authService=n,this.booksService=o,this.readarsService=e,this.baseURL=t,this.router=i,this.searchedData=u,this.menu=s,this.favoriteService=r,this.fb=a,this.file=h,this.webview=p,this.plt=g,this.filePath=d,this.sliderConfig={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,autoplay:!0},on:{beforeInit:function(){this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0},setTranslate:function(){for(var l=this.width,n=this.height,o=this.slides,e=this.$wrapperEl,t=this.slidesSizesGrid,i=this.params.coverflowEffect,u=this.isHorizontal(),s=this.translate,r=u?l/2-s:n/2-s,a=u?i.rotate:-i.rotate,b=i.depth,c=0,h=o.length;c<h;c+=1){var p=o.eq(c),g=t[c],d=(r-p[0].swiperSlideOffset-g/2)/g*i.modifier,k=u?a*d:0,f=u?0:a*d,m=-b*Math.abs(d),v=u?0:i.stretch*d,C=u?i.stretch*d:0;if(Math.abs(C)<.001&&(C=0),Math.abs(v)<.001&&(v=0),Math.abs(m)<.001&&(m=0),Math.abs(k)<.001&&(k=0),Math.abs(f)<.001&&(f=0),p.transform("translate3d("+C+"px,"+v+"px,"+m+"px)  rotateX("+f+"deg) rotateY("+k+"deg)"),p[0].style.zIndex=1-Math.abs(Math.round(d)),i.slideShadows){var I=p.find(u?".swiper-slide-shadow-left":".swiper-slide-shadow-top"),w=p.find(u?".swiper-slide-shadow-right":".swiper-slide-shadow-bottom");0===I.length&&(I=this.$('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>'),p.append(I)),0===w.length&&(w=this.$('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>'),p.append(w)),I.length&&(I[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}(this.support.pointerEvents||this.support.prefixedPointerEvents)&&(e[0].style.perspectiveOrigin=r+"px 50%")},setTransition:function(l){this.slides.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l)}}},this.pages=[],this.images=[],this.books=[],this.recobooks=[],this.bookGenreCollection=[],this.bookLanguageCollection=[],this.favorites=[],this.favoriteBooks=[],this.bookgenre=c.b,this.booklanguage=c.c,this.collectonCategory=c.d,this.bookIdsImages=new Map,this.bookIdImageMap=new Map,this.searchTerm="",this.descending=!1,this.column="bookgenre",this.searchControl=new b.c}return l.prototype.ngOnInit=function(){var l=this;this.createForm(),this.setFilteredItems(),this.prepareBookIdsImagesMap(),this.readarsService.getBooks().subscribe(function(n){l.books=n,console.log("BOOK COLLECTION IS ----------\x3e",l.books)},function(n){return l.errMess=n}),this.readarsService.getRecommendedBooks().subscribe(function(n){l.recobooks=n,console.log("RECO BOOK COLLECTION IS ----------\x3e",l.recobooks)},function(n){return l.errMess=n})},l.prototype.createForm=function(){this.selectCategoryFormGroup=this.fb.group({bookgenre:["",[b.m.required,b.m.minLength(2),b.m.maxLength(25)]]})},l.prototype.ionViewWillEnter=function(){},l.prototype.prepareBookIdsImagesMap=function(){var l=this;this.readarsService.getBookIds().subscribe(function(n){l.bookIds=n,l.storeBookIds(l.bookIds),l.lbookIds=l.loadBookIds();for(var o=function(n){l.readarsService.getBookImage(l.lbookIds[n]).subscribe(function(o){l.url=o,console.log("this.url",l.url),l.bookIdImageMap.set(l.lbookIds[n],l.url),console.log("book image map",l.bookIdImageMap)},function(l){return console.log(l)})},e=0;e<l.lbookIds.length;e++)o(e)},function(n){return l.errMess=n})},l.prototype.storeBookIds=function(l){console.log("BookIds stored are :",l),localStorage.setItem("bookIds",JSON.stringify(l))},l.prototype.loadBookIds=function(){if(this.bookIds=JSON.parse(localStorage.getItem("bookIds")),console.log("bookIds ",this.bookIds),this.bookIds)return this.bookIds},l.prototype.ngAfterViewInit=function(){},l.prototype.selectCollectionCategory=function(l){this.showGenre=!1,this.showLanguage=!1,"Genre"===l.detail.value&&(this.showGenre=!0),"Language"===l.detail.value&&(this.showLanguage=!0)},l.prototype.displayGenreCollection=function(l){this.bookGenreCollection=[],console.log("EVENT DETAIL VALUE",l.detail.value);for(var n=0,o=0;n<this.books.length;)this.books[n].bookgenre===l.detail.value&&(this.bookGenreCollection[o]=this.books[n],o++),n++;console.log("BOOK GENRE & COLLECTION",l.detail.value,this.bookGenreCollection.length)},l.prototype.displayLanguageCollection=function(l){this.bookLanguageCollection=[],console.log("EVENT DETAIL VALUE",l.detail.value);for(var n=0,o=0;n<this.books.length;)this.books[n].booklanguage===l.detail.value&&(this.bookLanguageCollection[o]=this.books[n],o++),n++;console.log("BOOK LANGUAGE & COLLECTION",l.detail.value,this.bookLanguageCollection)},l.prototype.refreshPage=function(){console.log("inside refreshpage"),window.location.reload()},l.prototype.refreshBookList=function(l){var n=this;setTimeout(function(){n.readarsService.getBooks().subscribe(function(l){n.books=l},function(l){return n.errMess=l}),l.target.complete()},2e3)},l.prototype.setFilteredItems=function(){this.books=this.searchedData.filterItems(this.searchTerm),console.log("Searched data",this.books)},l.prototype.loadMoreBooks=function(l){setTimeout(function(){},3e3)},l}(),I=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.displaycard[_ngcontent-%COMP%]{margin:5px;padding:5px}.displayinnercard[_ngcontent-%COMP%]{margin-top:auto;padding:5px}ion-select[_ngcontent-%COMP%]{width:100%;max-width:100%!important;padding-left:20px}ion-list-header[_ngcontent-%COMP%]{padding-left:0;display:block;text-align:center}.display_heading[_ngcontent-%COMP%]{margin-left:0;padding:0}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.book-image[_ngcontent-%COMP%]{width:300px;height:300px;margin:10px auto}.bookimage[_ngcontent-%COMP%]{width:200%;height:auto;margin:10px auto}.my-custom-menu[_ngcontent-%COMP%]{--width:500px}ion-toolbar[_ngcontent-%COMP%]{--background:#1B4F72}"]],data:{}});function w(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Eb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-img",[["button",""],["class","bookimage"]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,6).onClick(o)&&t),t},u.lb,u.r)),e.ob(3,49152,null,0,s.C,[e.h,e.k],{src:[0,"src"]},null),e.ob(4,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(5,2),e.ob(6,737280,null,0,s.Lb,[a.h,s.Hb,e.k,r.m,[2,r.n]],null,null)],function(l,n){l(n,3,0,n.component.bookIdImageMap.get(n.context.$implicit._id));var o=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,o),l(n,6,0)},null)}function y(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Cb,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function O(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Cb,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function L(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Eb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-img",[["button",""],["class","bookimage"]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,6).onClick(o)&&t),t},u.lb,u.r)),e.ob(3,49152,null,0,s.C,[e.h,e.k],{src:[0,"src"]},null),e.ob(4,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(5,2),e.ob(6,737280,null,0,s.Lb,[a.h,s.Hb,e.k,r.m,[2,r.n]],null,null)],function(l,n){l(n,3,0,n.component.bookIdImageMap.get(n.context.$implicit._id));var o=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,o),l(n,6,0)},null)}function x(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-item-sliding",[],null,null,null,u.qb,u.x)),e.ob(1,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Select genre.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,5)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,5)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.displayGenreCollection(o)&&t),t},u.Db,u.I)),e.Db(5120,null,b.g,function(l){return[l]},[s.Mb]),e.ob(4,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(5,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,O)),e.ob(7,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(8,0,null,0,3,"ion-slides",[],null,null,null,u.Fb,u.L)),e.ob(9,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,L)),e.ob(11,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,4,0,"Select genre..","popover"),l(n,7,0,o.bookgenre),l(n,9,0,o.sliderConfig),l(n,11,0,o.bookGenreCollection)},null)}function M(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,u.Cb,u.J)),e.ob(1,49152,null,0,s.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(2,0,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function B(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Eb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-img",[["button",""],["class","bookimage"]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,6).onClick(o)&&t),t},u.lb,u.r)),e.ob(3,49152,null,0,s.C,[e.h,e.k],{src:[0,"src"]},null),e.ob(4,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(5,2),e.ob(6,737280,null,0,s.Lb,[a.h,s.Hb,e.k,r.m,[2,r.n]],null,null)],function(l,n){l(n,3,0,n.component.bookIdImageMap.get(n.context.$implicit._id));var o=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,o),l(n,6,0)},null)}function E(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-item-sliding",[],null,null,null,u.qb,u.x)),e.ob(1,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Select language.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,5)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,5)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.displayLanguageCollection(o)&&t),t},u.Db,u.I)),e.Db(5120,null,b.g,function(l){return[l]},[s.Mb]),e.ob(4,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(5,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,M)),e.ob(7,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(8,0,null,0,3,"ion-slides",[],null,null,null,u.Fb,u.L)),e.ob(9,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,B)),e.ob(11,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var o=n.component;l(n,4,0,"Select language..","popover"),l(n,7,0,o.booklanguage),l(n,9,0,o.sliderConfig),l(n,11,0,o.bookLanguageCollection)},null)}function F(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-slide",[],null,null,null,u.Eb,u.K)),e.ob(1,49152,null,0,s.ob,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,4,"ion-img",[["button",""],["class","bookimage"]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==e.yb(l,4).onClick()&&t),"click"===n&&(t=!1!==e.yb(l,6).onClick(o)&&t),t},u.lb,u.r)),e.ob(3,49152,null,0,s.C,[e.h,e.k],{src:[0,"src"]},null),e.ob(4,16384,null,0,r.n,[r.m,r.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.zb(5,2),e.ob(6,737280,null,0,s.Lb,[a.h,s.Hb,e.k,r.m,[2,r.n]],null,null)],function(l,n){l(n,3,0,n.component.bookIdImageMap.get(n.context.$implicit._id));var o=l(n,5,0,"bookdetail",n.context.$implicit._id);l(n,4,0,o),l(n,6,0)},null)}function S(l){return e.Ib(0,[e.Eb(402653184,1,{selectCategoryFormDirective:0}),(l()(),e.pb(1,0,null,null,6,"ion-header",[["collapse","condense"],["color","success"]],null,null,null,u.jb,u.p)),e.ob(2,49152,null,0,s.A,[e.h,e.k],{translucent:[0,"translucent"]},null),(l()(),e.pb(3,0,null,0,4,"ion-toolbar",[],null,null,null,u.Nb,u.T)),e.ob(4,49152,null,0,s.Ab,[e.h,e.k],null,null),(l()(),e.pb(5,0,null,0,2,"ion-title",[["size","large"],["style","font:xx-large; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n               color: #FDFEFE  ; font-weight: bolder;"]],null,null,null,u.Mb,u.S)),e.ob(6,49152,null,0,s.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,[" ReadARs "])),(l()(),e.pb(8,0,null,null,61,"ion-content",[],null,null,null,u.fb,u.l)),e.ob(9,49152,null,0,s.t,[e.h,e.k],null,null),(l()(),e.pb(10,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,o){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.refreshBookList(o)&&e),e},u.zb,u.E)),e.ob(11,49152,null,0,s.bb,[e.h,e.k],null,null),(l()(),e.pb(12,0,null,0,1,"ion-refresher-content",[["pullingText","pull for update"],["refreshingText","...updating"]],null,null,null,u.yb,u.F)),e.ob(13,49152,null,0,s.cb,[e.h,e.k],{pullingText:[0,"pullingText"],refreshingText:[1,"refreshingText"]},null),(l()(),e.pb(14,0,null,0,53,"ion-list",[],null,null,null,u.ub,u.z)),e.ob(15,49152,null,0,s.N,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,9,"ion-list-header",[["color",""]],null,null,null,u.tb,u.A)),e.ob(17,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(18,0,null,0,7,"ion-item",[["class","ion-text-center"]],null,null,null,u.rb,u.u)),e.ob(19,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(20,0,null,0,1,"ion-icon",[["src","../assets/icon/list.svg"],["style","color: #1B4F72 ;"]],null,null,null,u.kb,u.q)),e.ob(21,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(22,0,null,0,3,"ion-label",[["style","color:#1B4F72 ;"]],null,null,null,u.sb,u.y)),e.ob(23,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" ALL THE BOOKS "])),(l()(),e.pb(26,0,null,0,5,"ion-item-sliding",[],null,null,null,u.qb,u.x)),e.ob(27,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(28,0,null,0,3,"ion-slides",[],null,null,null,u.Fb,u.L)),e.ob(29,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,w)),e.ob(31,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(32,0,null,0,9,"ion-list-header",[["color",""]],null,null,null,u.tb,u.A)),e.ob(33,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(34,0,null,0,7,"ion-item",[["class","ion-text-center"]],null,null,null,u.rb,u.u)),e.ob(35,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(36,0,null,0,1,"ion-icon",[["src","../assets/icon/albums.svg"],["style","color:#1B4F72 ;"]],null,null,null,u.kb,u.q)),e.ob(37,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(38,0,null,0,3,"ion-label",[["style","color:#1B4F72 ;"]],null,null,null,u.sb,u.y)),e.ob(39,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.pb(40,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" BOOKS BY CATEGORIES "])),(l()(),e.pb(42,0,null,0,5,"ion-select",[["interface","popover"],["placeholder","Choose category.."]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,o){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.yb(l,45)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.yb(l,45)._handleChangeEvent(o.target.value)&&t),"ionChange"===n&&(t=!1!==i.selectCollectionCategory(o)&&t),t},u.Db,u.I)),e.Db(5120,null,b.g,function(l){return[l]},[s.Mb]),e.ob(44,49152,null,0,s.lb,[e.h,e.k],{placeholder:[0,"placeholder"],interface:[1,"interface"]},null),e.ob(45,16384,null,0,s.Mb,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,y)),e.ob(47,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(16777216,null,0,1,null,x)),e.ob(49,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,E)),e.ob(51,16384,null,0,a.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(52,0,null,0,9,"ion-list-header",[["color",""]],null,null,null,u.tb,u.A)),e.ob(53,49152,null,0,s.O,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(54,0,null,0,7,"ion-item",[["class","ion-text-center"]],null,null,null,u.rb,u.u)),e.ob(55,49152,null,0,s.G,[e.h,e.k],null,null),(l()(),e.pb(56,0,null,0,1,"ion-icon",[["src","../assets/icon/star.svg"],["style","color:#1B4F72 ;"]],null,null,null,u.kb,u.q)),e.ob(57,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.pb(58,0,null,0,3,"ion-label",[["style","color:#1B4F72 ;"]],null,null,null,u.sb,u.y)),e.ob(59,49152,null,0,s.M,[e.h,e.k],null,null),(l()(),e.pb(60,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" READERS' RECOMMENDATIONS "])),(l()(),e.pb(62,0,null,0,5,"ion-item-sliding",[],null,null,null,u.qb,u.x)),e.ob(63,49152,null,0,s.L,[e.h,e.k],null,null),(l()(),e.pb(64,0,null,0,3,"ion-slides",[],null,null,null,u.Fb,u.L)),e.ob(65,49152,null,0,s.pb,[e.h,e.k],{options:[0,"options"]},null),(l()(),e.gb(16777216,null,0,1,null,F)),e.ob(67,278528,null,0,a.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(68,0,null,0,1,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,o){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadMoreBooks(o)&&e),e},u.mb,u.s)),e.ob(69,49152,null,0,s.D,[e.h,e.k],null,null)],function(l,n){var o=n.component;l(n,2,0,!0),l(n,13,0,"pull for update","...updating"),l(n,17,0,""),l(n,21,0,"../assets/icon/list.svg"),l(n,29,0,o.sliderConfig),l(n,31,0,o.books),l(n,33,0,""),l(n,37,0,"../assets/icon/albums.svg"),l(n,44,0,"Choose category..","popover"),l(n,47,0,o.collectonCategory),l(n,49,0,o.showGenre),l(n,51,0,o.showLanguage),l(n,53,0,""),l(n,57,0,"../assets/icon/star.svg"),l(n,65,0,o.sliderConfig),l(n,67,0,o.recobooks)},null)}function G(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-tab1",[],null,null,null,S,I)),e.ob(1,4308992,null,0,C,[s.Hb,p.a,g.a,d.a,"baseURL",r.m,k.a,s.Fb,h.a,b.b,f.a,m.a,s.Jb,v.a],null,null)],function(l,n){l(n,1,0)},null)}var _=e.lb("app-tab1",C,G,{},{},[]);o.d(n,"Tab1PageModuleNgFactory",function(){return T});var T=e.mb(t,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,_]],[3,e.j],e.x]),e.wb(4608,a.l,a.k,[e.u,[2,a.r]]),e.wb(4608,s.b,s.b,[e.z,e.g]),e.wb(4608,s.Gb,s.Gb,[s.b,e.j,e.q,a.c]),e.wb(4608,s.Kb,s.Kb,[s.b,e.j,e.q,a.c]),e.wb(4608,b.p,b.p,[]),e.wb(4608,b.b,b.b,[]),e.wb(1073742336,a.b,a.b,[]),e.wb(1073742336,s.Cb,s.Cb,[]),e.wb(1073742336,b.n,b.n,[]),e.wb(1073742336,b.f,b.f,[]),e.wb(1073742336,b.l,b.l,[]),e.wb(1073742336,r.o,r.o,[[2,r.u],[2,r.m]]),e.wb(1073742336,t,t,[]),e.wb(1024,r.k,function(){return[[{path:"",component:C}]]},[])])})}}]);