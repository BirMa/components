(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0x3v":function(l,n,t){"use strict";t.d(n,"a",function(){return a});var e=t("kZht");let a=(()=>{class l{extractErrorMessage(l){return l?"string"==typeof l?l:l.message:null}}return l.ngInjectableDef=e.Qb({factory:function(){return new l},token:l,providedIn:"root"}),l})()},"7V4E":function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return a}),t("0x3v");class e{constructor(l){this.extractor=l}transform(l){return l?this.extractor.extractErrorMessage(l):""}}class a{}},BwBJ:function(l,n,t){"use strict";var e=t("Efrr"),a=t("5uGe"),r=t("ryP2");function o(l,n=e.a){var t;const a=(t=l)instanceof Date&&!isNaN(+t)?+l-n.now():Math.abs(l);return l=>l.lift(new i(a,n))}t.d(n,"a",function(){return o});class i{constructor(l,n){this.delay=l,this.scheduler=n}call(l,n){return n.subscribe(new u(l,this.delay,this.scheduler))}}class u extends a.a{constructor(l,n,t){super(l),this.delay=n,this.scheduler=t,this.queue=[],this.active=!1,this.errored=!1}static dispatch(l){const n=l.source,t=n.queue,e=l.scheduler,a=l.destination;for(;t.length>0&&t[0].time-e.now()<=0;)t.shift().notification.observe(a);if(t.length>0){const n=Math.max(0,t[0].time-e.now());this.schedule(l,n)}else this.unsubscribe(),n.active=!1}_schedule(l){this.active=!0,this.destination.add(l.schedule(u.dispatch,this.delay,{source:this,destination:this.destination,scheduler:l}))}scheduleNotification(l){if(!0===this.errored)return;const n=this.scheduler,t=new s(n.now()+this.delay,l);this.queue.push(t),!1===this.active&&this._schedule(n)}_next(l){this.scheduleNotification(r.a.createNext(l))}_error(l){this.errored=!0,this.queue=[],this.destination.error(l),this.unsubscribe()}_complete(){this.scheduleNotification(r.a.createComplete()),this.unsubscribe()}}class s{constructor(l,n){this.time=l,this.notification=n}}},ialt:function(l,n,t){"use strict";t.r(n);var e=t("kZht"),a=t("XoY3"),r=t("ROBh");class o extends a.a{getLabel(l){return l.psLabel?Object(r.a)(l.psLabel):null}mapDataToError(l){return Object(r.a)(l.map(l=>({errorText:`${l.controlPath} - ${l.errorKey} - ${JSON.stringify(l.errorValue)}`,data:l})))}}class i{}var u=t("C9Ky"),s=t("An66"),b=t("1P7/"),d=t("gX7W"),c=t("FxgA"),m=t("Kej7"),h=t("1PzT"),p=t("owzC"),g=t("3kIJ"),f=t("Gien"),_=t("8JnZ"),D=t("PSmA"),v=t("tUta"),C=t("Hc9t"),y=t("a+5/"),x=t("2Ogy"),w=t("AZyY"),k=t("ulMw"),S=t("7V4E"),q=t("0x3v"),I=t("bwdy"),B=t("C05f"),N=t("Ohay");const E={IntersectionObserver};class M{constructor(l){this.cd=l,this._dataSourceSub=I.a.EMPTY,this._viewReady=!1,this._errrorInView$=new B.a(!1)}set dataSource(l){this._dataSource&&(this._dataSource.disconnect(),this._dataSourceSub.unsubscribe()),this._dataSource=l,this.updateErrorCardObserver(),this._dataSource&&this.activateDataSource()}get dataSource(){return this._dataSource}get autocomplete(){return this.dataSource.autocomplete}get form(){return this.dataSource.form}get buttons(){return this.dataSource.buttons}get savebarMode(){return this.dataSource.savebarMode||"auto"}get savebarHidden(){return"hide"===this.savebarMode}get savebarSticky(){return"auto"===this.savebarMode?this.form.dirty||this.form.touched:"sticky"===this.savebarMode}get contentVisible(){return this.dataSource.contentVisible}get contentBlocked(){return this.dataSource.contentBlocked}get exception(){return this.dataSource.exception}ngAfterViewInit(){this._viewReady=!0,this.updateErrorCardObserver(),this.activateDataSource()}ngOnDestroy(){this._errorCardObserver&&(this._errorCardObserver.disconnect(),this._errorCardObserver=null),this._errrorInView$.complete(),this._dataSourceSub.unsubscribe(),this._dataSource&&this._dataSource.disconnect()}activateDataSource(){if(!this._viewReady||!this._dataSource)return;const l={errorInView$:this._errrorInView$.pipe(Object(N.a)()),scrollToError:()=>{this.errorCardWrapper.nativeElement.scrollIntoView({behavior:"smooth"})}};this._dataSourceSub=this._dataSource.connect(l).subscribe(()=>{this.cd.markForCheck()})}updateErrorCardObserver(){!this._errorCardObserver&&this._dataSource&&this._viewReady?(this._errorCardObserver=new E.IntersectionObserver((l,n)=>{this._errrorInView$.next(l[0].intersectionRatio>0),this.cd.markForCheck()},{root:null,rootMargin:"-100px",threshold:0}),this._errorCardObserver.observe(this.errorCardWrapper.nativeElement)):this._errorCardObserver&&!this._dataSource&&(this._errorCardObserver.disconnect(),this._errorCardObserver=null)}}var F=e.pb({encapsulation:2,styles:[[".ps-form__main-container{box-sizing:border-box}.ps-form__cards-container{display:grid;grid-gap:1em}.ps-form__error-container{color:var(--ps-error)}.ps-form__error-container--center{display:grid;justify-items:center}.ps-form__error-icon{color:var(--ps-error);font-size:72px;height:72px;width:72px}.ps-form__buttons button{margin:.25em}.ps-form__error-notfier-button{vertical-align:middle;cursor:pointer}.ps-form__savebar{bottom:-1px;margin:1em 0;z-index:5;padding:1em!important;display:flex;justify-content:space-between;border-top:solid var(--ps-accent) 5px}mat-card.ps-form__savebar--sticky{position:-webkit-sticky;position:sticky}.ps-form__savebar-container{display:flex;flex-wrap:wrap;justify-content:flex-end;margin:-.25em;width:100%}.ps-form__savebar-container button{margin:.25em}.ps-form__savebar-spacer{margin-right:auto}@media only screen and (max-width:35em){mat-card.ps-form__savebar--sticky{position:initial}}"]],data:{}});function O(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"ps-block-ui",[],null,null,null,D.b,D.a)),e.qb(1,4767744,null,0,v.a,[],{blocked:[0,"blocked"]},null),e.Cb(0,0)],function(l,n){l(n,1,0,n.component.contentBlocked)},null)}function V(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"mat-icon",[["class","ps-form__error-icon mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,C.b,C.a)),e.qb(1,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],null,null),(l()(),e.Lb(2,0,["",""]))],function(l,n){l(n,1,0)},function(l,n){var t=n.component;l(n,0,0,e.Db(n,1).inline,"primary"!==e.Db(n,1).color&&"accent"!==e.Db(n,1).color&&"warn"!==e.Db(n,1).color),l(n,2,0,t.exception.icon)})}function J(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,6,"mat-card",[["class","ps-form__error-container mat-card"]],[[2,"ps-form__error-container--center",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(1,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.gb(16777216,null,0,1,null,V)),e.qb(3,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(4,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),e.Lb(5,null,["",""])),e.Hb(6,1)],function(l,n){l(n,3,0,n.component.exception.icon)},function(l,n){var t=n.component;l(n,0,0,t.exception.alignCenter,"NoopAnimations"===e.Db(n,1)._animationMode);var a=e.Mb(n,5,0,l(n,6,0,e.Db(n.parent.parent,0),t.exception.errorObject));l(n,5,0,a)})}function T(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,C.b,C.a)),e.qb(1,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],null,null),(l()(),e.Lb(2,0,["",""]))],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Db(n,1).inline,"primary"!==e.Db(n,1).color&&"accent"!==e.Db(n,1).color&&"warn"!==e.Db(n,1).color),l(n,2,0,n.parent.context.$implicit.icon)})}function $(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,4,"button",[["mat-button",""],["type","button"]],[[2,"mat-raised-button",null],[2,"mat-stroked-button",null],[2,"mat-icon-button",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.click()&&e),e},f.b,f.a)),e.qb(1,180224,null,0,_.b,[e.k,p.e,[2,c.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),e.gb(16777216,null,0,1,null,T)),e.qb(3,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.Lb(4,0,[" "," "]))],function(l,n){var t=n.context.$implicit.disabled&&n.context.$implicit.disabled();l(n,1,0,t,n.context.$implicit.color),l(n,3,0,n.context.$implicit.icon)},function(l,n){l(n,0,0,"raised"===n.context.$implicit.type,"stroked"===n.context.$implicit.type,"icon"===n.context.$implicit.type,e.Db(n,1).disabled||null,"NoopAnimations"===e.Db(n,1)._animationMode),l(n,4,0,n.context.$implicit.label)})}function P(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,9,"mat-card",[["class","ps-form__savebar mat-card"]],[[2,"ps-form__savebar--sticky",null],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(1,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.rb(2,0,null,0,7,"div",[["class","ps-form__savebar-container"]],null,null,null,null,null)),(l()(),e.rb(3,0,null,null,1,"ps-form-errors",[],null,null,null,x.b,x.a)),e.qb(4,573440,null,0,w.a,[k.b],{form:[0,"form"]},null),(l()(),e.rb(5,0,null,null,0,"div",[["class","ps-form__savebar-spacer"]],null,null,null,null,null)),(l()(),e.rb(6,0,null,null,3,"div",[["class","ps-form__buttons"]],null,null,null,null,null)),e.Cb(null,1),(l()(),e.gb(16777216,null,null,1,null,$)),e.qb(9,278528,null,0,s.l,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.form),l(n,9,0,t.buttons)},function(l,n){l(n,0,0,n.component.savebarSticky,"NoopAnimations"===e.Db(n,1)._animationMode)})}function L(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,12,"form",[["class","ps-form__main-container"],["novalidate",""]],[[8,"autocomplete",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var a=!0;return"submit"===n&&(a=!1!==e.Db(l,2).onSubmit(t)&&a),"reset"===n&&(a=!1!==e.Db(l,2).onReset()&&a),a},null,null)),e.qb(1,16384,null,0,g.A,[],null,null),e.qb(2,540672,null,0,g.k,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ib(2048,null,g.c,null,[g.k]),e.qb(4,16384,null,0,g.q,[[4,g.c]],null,null),(l()(),e.rb(5,0,null,null,5,"div",[["class","ps-form__cards-container"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(7,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(8,0,[[1,0],["errorCardWrapper",1]],null,2,"div",[],[[4,"display",null]],null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,J)),e.qb(10,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,P)),e.qb(12,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.form),l(n,7,0,t.contentVisible),l(n,10,0,t.exception),l(n,12,0,!t.savebarHidden)},function(l,n){var t=n.component;l(n,0,0,t.autocomplete,e.Db(n,4).ngClassUntouched,e.Db(n,4).ngClassTouched,e.Db(n,4).ngClassPristine,e.Db(n,4).ngClassDirty,e.Db(n,4).ngClassValid,e.Db(n,4).ngClassInvalid,e.Db(n,4).ngClassPending),l(n,8,0,t.exception?"block":"none")})}function A(l){return e.Nb(2,[e.Fb(0,S.a,[q.a]),e.Jb(671088640,1,{errorCardWrapper:0}),(l()(),e.gb(16777216,null,null,1,null,L)),e.qb(3,16384,null,0,s.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,n.component.dataSource)},null)}var j=t("QsvA"),K=t("qBwE"),z=t("ApNh"),R=t("pOQZ"),U=t("4rR8"),Y=t("S/D4"),Z=t("9Z2Q"),W=t("ZTXN"),Q=t("J+dc"),H=t("BwBJ"),X=t("YtkY"),G=t("8j5Y");class ll{constructor(l){this.options=l,this.autocomplete="off",this.buttons=[],this._originalData=null,this._loading=!1,this._hasLoadError=!1,this._saving=!1,this._blockView=!1,this._isEditMode=!1,this._errorInView=!1,this.stateChanges$=new W.a,this._loadParams=null,this.buttonDefs={scrollToError:{type:"icon",icon:"error_outline",color:"warn",click:()=>this._scrollToError()},edit:{label:"bearbeiten",type:"raised",color:"primary",disabled:()=>this.contentBlocked,click:()=>this.edit()},save:{label:"speichern",type:"raised",color:"primary",disabled:()=>this.contentBlocked||!this.form.valid,click:()=>this.save()},cancel:{label:"cancel",type:"stroked",color:null,disabled:()=>!1,click:()=>this.reset()}},this._loadingSub=I.a.EMPTY,this._connectSub=I.a.EMPTY,this._errorInViewSub=I.a.EMPTY}get form(){return this.options.form}get contentVisible(){return!this._hasLoadError}get contentBlocked(){return this._loading||this._saving||this._blockView}get savebarMode(){return this._hasLoadError?"hide":"auto"}connect(l){return this._scrollToError=()=>setTimeout(()=>l.scrollToError(),0),this._errorInViewSub=l.errorInView$.subscribe(l=>{this._errorInView=l,this.updateButtons(),this.stateChanges$.next()}),this._connectSub=this.options.loadTrigger$.subscribe(l=>{this._loadParams=l,this.loadData(l)}),this.stateChanges$}disconnect(){this._connectSub.unsubscribe(),this._errorInViewSub.unsubscribe(),this._loadingSub.unsubscribe()}setViewBlocked(l){this._blockView=l,this.stateChanges$.next()}edit(){this.setEditMode(!0)}save(){this._saving=!0,this.exception=null,this.stateChanges$.next();const l=this.form.getRawValue();this.options.saveFn(l,this._loadParams).pipe(Object(Q.a)(1)).subscribe({next:l=>{this.markDataSaved(),this.setEditMode(!1),this._saving=!1,this.stateChanges$.next()},error:l=>{this._saving=!1,this.exception={errorObject:l},this._errorInView||this._scrollToError(),this.updateButtons(),this.stateChanges$.next()}})}reset(){this.resetData(),this.setEditMode(!1),this.stateChanges$.next()}loadData(l){this._loadingSub.unsubscribe(),this._loading=!0,this._hasLoadError=!1,this.exception=null,this.initializeData(null),this.setEditMode(!1),this.stateChanges$.next(),this._loadingSub=this.options.loadFn(l).pipe(Object(Q.a)(1)).subscribe({next:l=>{this.initializeData(l),this._loading=!1,this.stateChanges$.next()},error:l=>{this._loading=!1,this._hasLoadError=!0,this.exception={errorObject:l,alignCenter:!0,icon:"sentiment_very_dissatisfied"},this.stateChanges$.next()}})}initializeData(l){null==l?this.form.reset():this.form.patchValue(l),this.markDataSaved()}markDataSaved(){this._originalData=this.form.getRawValue(),this.form.markAsPristine(),this.form.markAsUntouched()}resetData(){this.form.patchValue(this._originalData),this.form.markAsPristine(),this.form.markAsUntouched()}setEditMode(l){this._isEditMode=l,l?this.form.enable():this.form.disable(),this.updateButtons()}updateButtons(){this.buttons=[],this.contentVisible&&(this._isEditMode?(this.exception&&!this._errorInView&&this.buttons.push(this.buttonDefs.scrollToError),this.buttons.push(this.buttonDefs.save),this.buttons.push(this.buttonDefs.cancel)):this.buttons.push(this.buttonDefs.edit))}}class nl{constructor(){this.loadError=!1,this.saveError=!1,this.form=new g.j({input1:new g.g("a"),input2:new g.g("b")},[l=>l.value.input1===l.value.input2?null:{equal:"input1 and input2 must be equal"}]),this.counter=0,this.loadTrigger$=new B.a(this.counter),this.logs=[],this.dataSource=new ll({form:this.form,loadTrigger$:this.loadTrigger$,loadFn:l=>(this.logs.push({type:"load",params:l}),Object(r.a)({input1:"input 1 load count "+l,input2:"input 2 load count "+l}).pipe(Object(H.a)(1e3),Object(X.a)(l=>{if(this.loadError)throw new Error("this is the server error (loading)");return l}))),saveFn:(l,n)=>(this.logs.push({type:"save",data:l,params:n}),Object(r.a)(null).pipe(Object(H.a)(1e3),Object(G.a)(l=>{if(this.saveError)throw new Error("this is the server error (saving)");return l})))})}reload(){this.loadTrigger$.next(++this.counter)}}var tl=e.pb({encapsulation:2,styles:["\n      .app-form-data-source-demo__settings {\n        margin-bottom: 1em;\n      }\n\n      .app-form-data-source-demo__settings mat-checkbox {\n        margin: 1em;\n      }\n\n      .app-form-data-source-demo__grid {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        grid-gap: 1em;\n      }\n\n      .app-form-data-source-demo__log-item {\n        margin-bottom: 0.25em;\n        padding-bottom: 0.25em;\n        border-bottom: 1px solid #ccc;\n        font-size: 0.95em;\n      }\n\n      app-form-demo .mat-form-field {\n        display: block;\n      }\n    "],data:{}});function el(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"div",[["class","app-form-data-source-demo__log-item"]],null,null,null,null,null)),(l()(),e.Lb(1,null,["",""])),e.Fb(0,s.g,[])],null,function(l,n){l(n,1,0,e.Mb(n,1,0,e.Db(n,2).transform(n.context.$implicit)))})}function al(l){return e.Nb(2,[(l()(),e.rb(0,0,null,null,18,"mat-card",[["class","app-form-data-source-demo__settings mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(1,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.rb(2,0,null,0,6,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.loadError=t)&&e),e},m.b,m.a)),e.qb(3,8568832,null,0,h.b,[e.k,e.h,p.e,e.x,[8,null],[2,h.a],[2,c.a]],null,null),e.Ib(1024,null,g.n,function(l){return[l]},[h.b]),e.qb(5,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,g.o,null,[g.s]),e.qb(7,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),e.Lb(-1,0,["load error"])),(l()(),e.rb(9,0,null,0,6,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.saveError=t)&&e),e},m.b,m.a)),e.qb(10,8568832,null,0,h.b,[e.k,e.h,p.e,e.x,[8,null],[2,h.a],[2,c.a]],null,null),e.Ib(1024,null,g.n,function(l){return[l]},[h.b]),e.qb(12,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,g.o,null,[g.s]),e.qb(14,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),e.Lb(-1,0,["save error"])),(l()(),e.rb(16,0,null,0,2,"button",[["color","accent"],["mat-flat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reload()&&e),e},f.b,f.a)),e.qb(17,180224,null,0,_.b,[e.k,p.e,[2,c.a]],{color:[0,"color"]},null),(l()(),e.Lb(-1,0,["reload"])),(l()(),e.rb(19,0,null,null,67,"div",[["class","app-form-data-source-demo__grid"]],null,null,null,null,null)),(l()(),e.rb(20,0,null,null,62,"ps-form",[],null,null,null,A,F)),e.qb(21,4374528,null,0,M,[e.h],{dataSource:[0,"dataSource"]},null),(l()(),e.rb(22,0,null,0,50,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(23,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.rb(24,0,null,0,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var a=!0;return"submit"===n&&(a=!1!==e.Db(l,26).onSubmit(t)&&a),"reset"===n&&(a=!1!==e.Db(l,26).onReset()&&a),a},null,null)),e.qb(25,16384,null,0,g.A,[],null,null),e.qb(26,540672,null,0,g.k,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ib(2048,null,g.c,null,[g.k]),e.qb(28,16384,null,0,g.q,[[4,g.c]],null,null),(l()(),e.rb(29,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,j.b,j.a)),e.qb(30,7520256,null,9,K.c,[e.k,e.h,[2,z.j],[2,R.b],[2,K.a],U.a,e.x,[2,c.a]],null,null),e.Jb(603979776,1,{_controlNonStatic:0}),e.Jb(335544320,2,{_controlStatic:0}),e.Jb(603979776,3,{_labelChildNonStatic:0}),e.Jb(335544320,4,{_labelChildStatic:0}),e.Jb(603979776,5,{_placeholderChild:0}),e.Jb(603979776,6,{_errorChildren:1}),e.Jb(603979776,7,{_hintChildren:1}),e.Jb(603979776,8,{_prefixChildren:1}),e.Jb(603979776,9,{_suffixChildren:1}),(l()(),e.rb(40,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.qb(41,16384,[[3,4],[4,4]],0,K.g,[],null,null),(l()(),e.Lb(-1,null,["Input 1"])),(l()(),e.rb(43,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","input1"],["matInput",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Db(l,44)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Db(l,44).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Db(l,44)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Db(l,44)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Db(l,49)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Db(l,49)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Db(l,49)._onInput()&&a),a},null,null)),e.qb(44,16384,null,0,g.d,[e.C,e.k,[2,g.a]],null,null),e.Ib(1024,null,g.n,function(l){return[l]},[g.d]),e.qb(46,671744,null,0,g.i,[[3,g.c],[8,null],[8,null],[6,g.n],[2,g.z]],{name:[0,"name"]},null),e.Ib(2048,null,g.o,null,[g.i]),e.qb(48,16384,null,0,g.p,[[4,g.o]],null,null),e.qb(49,999424,null,0,Y.a,[e.k,U.a,[6,g.o],[2,g.r],[2,g.k],z.d,[8,null],Z.a,e.x],{type:[0,"type"]},null),e.Ib(2048,[[1,4],[2,4]],K.d,null,[Y.a]),(l()(),e.rb(51,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,j.b,j.a)),e.qb(52,7520256,null,9,K.c,[e.k,e.h,[2,z.j],[2,R.b],[2,K.a],U.a,e.x,[2,c.a]],null,null),e.Jb(603979776,10,{_controlNonStatic:0}),e.Jb(335544320,11,{_controlStatic:0}),e.Jb(603979776,12,{_labelChildNonStatic:0}),e.Jb(335544320,13,{_labelChildStatic:0}),e.Jb(603979776,14,{_placeholderChild:0}),e.Jb(603979776,15,{_errorChildren:1}),e.Jb(603979776,16,{_hintChildren:1}),e.Jb(603979776,17,{_prefixChildren:1}),e.Jb(603979776,18,{_suffixChildren:1}),(l()(),e.rb(62,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.qb(63,16384,[[12,4],[13,4]],0,K.g,[],null,null),(l()(),e.Lb(-1,null,["Input 2"])),(l()(),e.rb(65,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","input2"],["matInput",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,t){var a=!0;return"input"===n&&(a=!1!==e.Db(l,66)._handleInput(t.target.value)&&a),"blur"===n&&(a=!1!==e.Db(l,66).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Db(l,66)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Db(l,66)._compositionEnd(t.target.value)&&a),"blur"===n&&(a=!1!==e.Db(l,71)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==e.Db(l,71)._focusChanged(!0)&&a),"input"===n&&(a=!1!==e.Db(l,71)._onInput()&&a),a},null,null)),e.qb(66,16384,null,0,g.d,[e.C,e.k,[2,g.a]],null,null),e.Ib(1024,null,g.n,function(l){return[l]},[g.d]),e.qb(68,671744,null,0,g.i,[[3,g.c],[8,null],[8,null],[6,g.n],[2,g.z]],{name:[0,"name"]},null),e.Ib(2048,null,g.o,null,[g.i]),e.qb(70,16384,null,0,g.p,[[4,g.o]],null,null),e.qb(71,999424,null,0,Y.a,[e.k,U.a,[6,g.o],[2,g.r],[2,g.k],z.d,[8,null],Z.a,e.x],{type:[0,"type"]},null),e.Ib(2048,[[10,4],[11,4]],K.d,null,[Y.a]),(l()(),e.rb(73,0,null,0,2,"mat-card",[["class","mat-card"],["style","height: 500px; margin-top: 1em;"]],[[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(74,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.Lb(-1,0,["dummy card"])),(l()(),e.rb(76,0,null,1,6,null,null,null,null,null,null,null)),(l()(),e.rb(77,0,null,null,2,"button",[["mat-stroked-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),e.qb(78,180224,null,0,_.b,[e.k,p.e,[2,c.a]],null,null),(l()(),e.Lb(-1,0,["dummy button 1"])),(l()(),e.rb(80,0,null,null,2,"button",[["mat-stroked-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),e.qb(81,180224,null,0,_.b,[e.k,p.e,[2,c.a]],null,null),(l()(),e.Lb(-1,0,["dummy button 2"])),(l()(),e.rb(83,0,null,null,3,"mat-card",[["class","app-form-data-source-demo__logs mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(84,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.gb(16777216,null,0,1,null,el)),e.qb(86,278528,null,0,s.l,[e.N,e.K,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.loadError),l(n,12,0,t.saveError),l(n,17,0,"accent"),l(n,21,0,t.dataSource),l(n,26,0,t.form),l(n,46,0,"input1"),l(n,49,0,"text"),l(n,68,0,"input2"),l(n,71,0,"text"),l(n,86,0,t.logs)},function(l,n){l(n,0,0,"NoopAnimations"===e.Db(n,1)._animationMode),l(n,2,1,[e.Db(n,3).id,null,e.Db(n,3).indeterminate,e.Db(n,3).checked,e.Db(n,3).disabled,"before"==e.Db(n,3).labelPosition,"NoopAnimations"===e.Db(n,3)._animationMode,e.Db(n,7).ngClassUntouched,e.Db(n,7).ngClassTouched,e.Db(n,7).ngClassPristine,e.Db(n,7).ngClassDirty,e.Db(n,7).ngClassValid,e.Db(n,7).ngClassInvalid,e.Db(n,7).ngClassPending]),l(n,9,1,[e.Db(n,10).id,null,e.Db(n,10).indeterminate,e.Db(n,10).checked,e.Db(n,10).disabled,"before"==e.Db(n,10).labelPosition,"NoopAnimations"===e.Db(n,10)._animationMode,e.Db(n,14).ngClassUntouched,e.Db(n,14).ngClassTouched,e.Db(n,14).ngClassPristine,e.Db(n,14).ngClassDirty,e.Db(n,14).ngClassValid,e.Db(n,14).ngClassInvalid,e.Db(n,14).ngClassPending]),l(n,16,0,e.Db(n,17).disabled||null,"NoopAnimations"===e.Db(n,17)._animationMode),l(n,22,0,"NoopAnimations"===e.Db(n,23)._animationMode),l(n,24,0,e.Db(n,28).ngClassUntouched,e.Db(n,28).ngClassTouched,e.Db(n,28).ngClassPristine,e.Db(n,28).ngClassDirty,e.Db(n,28).ngClassValid,e.Db(n,28).ngClassInvalid,e.Db(n,28).ngClassPending),l(n,29,1,["standard"==e.Db(n,30).appearance,"fill"==e.Db(n,30).appearance,"outline"==e.Db(n,30).appearance,"legacy"==e.Db(n,30).appearance,e.Db(n,30)._control.errorState,e.Db(n,30)._canLabelFloat,e.Db(n,30)._shouldLabelFloat(),e.Db(n,30)._hasFloatingLabel(),e.Db(n,30)._hideControlPlaceholder(),e.Db(n,30)._control.disabled,e.Db(n,30)._control.autofilled,e.Db(n,30)._control.focused,"accent"==e.Db(n,30).color,"warn"==e.Db(n,30).color,e.Db(n,30)._shouldForward("untouched"),e.Db(n,30)._shouldForward("touched"),e.Db(n,30)._shouldForward("pristine"),e.Db(n,30)._shouldForward("dirty"),e.Db(n,30)._shouldForward("valid"),e.Db(n,30)._shouldForward("invalid"),e.Db(n,30)._shouldForward("pending"),!e.Db(n,30)._animationsEnabled]),l(n,43,1,[e.Db(n,48).ngClassUntouched,e.Db(n,48).ngClassTouched,e.Db(n,48).ngClassPristine,e.Db(n,48).ngClassDirty,e.Db(n,48).ngClassValid,e.Db(n,48).ngClassInvalid,e.Db(n,48).ngClassPending,e.Db(n,49)._isServer,e.Db(n,49).id,e.Db(n,49).placeholder,e.Db(n,49).disabled,e.Db(n,49).required,e.Db(n,49).readonly&&!e.Db(n,49)._isNativeSelect||null,e.Db(n,49)._ariaDescribedby||null,e.Db(n,49).errorState,e.Db(n,49).required.toString()]),l(n,51,1,["standard"==e.Db(n,52).appearance,"fill"==e.Db(n,52).appearance,"outline"==e.Db(n,52).appearance,"legacy"==e.Db(n,52).appearance,e.Db(n,52)._control.errorState,e.Db(n,52)._canLabelFloat,e.Db(n,52)._shouldLabelFloat(),e.Db(n,52)._hasFloatingLabel(),e.Db(n,52)._hideControlPlaceholder(),e.Db(n,52)._control.disabled,e.Db(n,52)._control.autofilled,e.Db(n,52)._control.focused,"accent"==e.Db(n,52).color,"warn"==e.Db(n,52).color,e.Db(n,52)._shouldForward("untouched"),e.Db(n,52)._shouldForward("touched"),e.Db(n,52)._shouldForward("pristine"),e.Db(n,52)._shouldForward("dirty"),e.Db(n,52)._shouldForward("valid"),e.Db(n,52)._shouldForward("invalid"),e.Db(n,52)._shouldForward("pending"),!e.Db(n,52)._animationsEnabled]),l(n,65,1,[e.Db(n,70).ngClassUntouched,e.Db(n,70).ngClassTouched,e.Db(n,70).ngClassPristine,e.Db(n,70).ngClassDirty,e.Db(n,70).ngClassValid,e.Db(n,70).ngClassInvalid,e.Db(n,70).ngClassPending,e.Db(n,71)._isServer,e.Db(n,71).id,e.Db(n,71).placeholder,e.Db(n,71).disabled,e.Db(n,71).required,e.Db(n,71).readonly&&!e.Db(n,71)._isNativeSelect||null,e.Db(n,71)._ariaDescribedby||null,e.Db(n,71).errorState,e.Db(n,71).required.toString()]),l(n,73,0,"NoopAnimations"===e.Db(n,74)._animationMode),l(n,77,0,e.Db(n,78).disabled||null,"NoopAnimations"===e.Db(n,78)._animationMode),l(n,80,0,e.Db(n,81).disabled||null,"NoopAnimations"===e.Db(n,81)._animationMode),l(n,83,0,"NoopAnimations"===e.Db(n,84)._animationMode)})}var rl=t("rW4h"),ol=t("5ohT"),il=t("tBgR"),ul=t("QH8h");class sl{constructor(){this.demoType="dataSource"}}var bl=e.pb({encapsulation:0,styles:[".app-form-demo__settings[_ngcontent-%COMP%] {\n        margin-bottom: 1em;\n      }"],data:{}});function dl(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"app-form-data-source-demo",[],null,null,null,al,tl)),e.qb(1,49152,null,0,nl,[],null,null)],null,null)}function cl(l){return e.Nb(2,[(l()(),e.rb(0,0,null,null,25,"mat-card",[["class","app-form-demo__settings mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),e.qb(1,49152,null,0,d.a,[[2,c.a]],null,null),(l()(),e.rb(2,0,null,0,23,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,j.b,j.a)),e.qb(3,7520256,null,9,K.c,[e.k,e.h,[2,z.j],[2,R.b],[2,K.a],U.a,e.x,[2,c.a]],null,null),e.Jb(603979776,1,{_controlNonStatic:0}),e.Jb(335544320,2,{_controlStatic:0}),e.Jb(603979776,3,{_labelChildNonStatic:0}),e.Jb(335544320,4,{_labelChildStatic:0}),e.Jb(603979776,5,{_placeholderChild:0}),e.Jb(603979776,6,{_errorChildren:1}),e.Jb(603979776,7,{_hintChildren:1}),e.Jb(603979776,8,{_prefixChildren:1}),e.Jb(603979776,9,{_suffixChildren:1}),(l()(),e.rb(13,0,null,1,12,"mat-select",[["class","mat-select"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,t){var a=!0,r=l.component;return"keydown"===n&&(a=!1!==e.Db(l,17)._handleKeydown(t)&&a),"focus"===n&&(a=!1!==e.Db(l,17)._onFocus()&&a),"blur"===n&&(a=!1!==e.Db(l,17)._onBlur()&&a),"ngModelChange"===n&&(a=!1!==(r.demoType=t)&&a),a},rl.b,rl.a)),e.qb(14,671744,null,0,g.s,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,g.o,null,[g.s]),e.qb(16,16384,null,0,g.p,[[4,g.o]],null,null),e.qb(17,2080768,null,3,ol.c,[il.e,e.h,e.x,z.d,e.k,[2,R.b],[2,g.r],[2,g.k],[2,K.c],[6,g.o],[8,null],ol.a,p.g],null,null),e.Jb(603979776,10,{options:1}),e.Jb(603979776,11,{optionGroups:1}),e.Jb(603979776,12,{customTrigger:0}),e.Ib(2048,[[1,4],[2,4]],K.d,null,[ol.c]),e.Ib(2048,null,z.l,null,[ol.c]),(l()(),e.rb(23,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,n,t){var a=!0;return"click"===n&&(a=!1!==e.Db(l,24)._selectViaInteraction()&&a),"keydown"===n&&(a=!1!==e.Db(l,24)._handleKeydown(t)&&a),a},ul.c,ul.a)),e.qb(24,8568832,[[10,4]],0,z.r,[e.k,e.h,[2,z.l],[2,z.q]],{value:[0,"value"]},null),(l()(),e.Lb(-1,0,["dataSource"])),(l()(),e.rb(26,0,null,null,3,null,null,null,null,null,null,null)),e.qb(27,16384,null,0,s.q,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.gb(16777216,null,null,1,null,dl)),e.qb(29,278528,null,0,s.r,[e.N,e.K,s.q],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){var t=n.component;l(n,14,0,t.demoType),l(n,17,0),l(n,24,0,"dataSource"),l(n,27,0,t.demoType),l(n,29,0,"dataSource")},function(l,n){l(n,0,0,"NoopAnimations"===e.Db(n,1)._animationMode),l(n,2,1,["standard"==e.Db(n,3).appearance,"fill"==e.Db(n,3).appearance,"outline"==e.Db(n,3).appearance,"legacy"==e.Db(n,3).appearance,e.Db(n,3)._control.errorState,e.Db(n,3)._canLabelFloat,e.Db(n,3)._shouldLabelFloat(),e.Db(n,3)._hasFloatingLabel(),e.Db(n,3)._hideControlPlaceholder(),e.Db(n,3)._control.disabled,e.Db(n,3)._control.autofilled,e.Db(n,3)._control.focused,"accent"==e.Db(n,3).color,"warn"==e.Db(n,3).color,e.Db(n,3)._shouldForward("untouched"),e.Db(n,3)._shouldForward("touched"),e.Db(n,3)._shouldForward("pristine"),e.Db(n,3)._shouldForward("dirty"),e.Db(n,3)._shouldForward("valid"),e.Db(n,3)._shouldForward("invalid"),e.Db(n,3)._shouldForward("pending"),!e.Db(n,3)._animationsEnabled]),l(n,13,1,[e.Db(n,16).ngClassUntouched,e.Db(n,16).ngClassTouched,e.Db(n,16).ngClassPristine,e.Db(n,16).ngClassDirty,e.Db(n,16).ngClassValid,e.Db(n,16).ngClassInvalid,e.Db(n,16).ngClassPending,e.Db(n,17).id,e.Db(n,17).tabIndex,e.Db(n,17)._getAriaLabel(),e.Db(n,17)._getAriaLabelledby(),e.Db(n,17).required.toString(),e.Db(n,17).disabled.toString(),e.Db(n,17).errorState,e.Db(n,17).panelOpen?e.Db(n,17)._optionIds:null,e.Db(n,17).multiple,e.Db(n,17)._ariaDescribedby||null,e.Db(n,17)._getAriaActiveDescendant(),e.Db(n,17).disabled,e.Db(n,17).errorState,e.Db(n,17).required,e.Db(n,17).empty]),l(n,23,0,e.Db(n,24)._getTabIndex(),e.Db(n,24).selected,e.Db(n,24).multiple,e.Db(n,24).active,e.Db(n,24).id,e.Db(n,24)._getAriaSelected(),e.Db(n,24).disabled.toString(),e.Db(n,24).disabled)})}function ml(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"app-form-demo",[],null,null,null,cl,bl)),e.qb(1,49152,null,0,sl,[],null,null)],null,null)}var hl=e.nb("app-form-demo",sl,ml,{},{},[]),pl=t("OcC5"),gl=t("D4FV"),fl=t("89kn"),_l=t("ENSU"),Dl=t("eEhu"),vl=t("MQ2t"),Cl=t("OCbr"),yl=t("0S3s"),xl=t("PD8F");class wl{}var kl=t("1VvW"),Sl=t("DiCn"),ql=t("K5Xz");t.d(n,"FormDemoModuleNgFactory",function(){return Il});var Il=e.ob(i,[],function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[u.a,hl]],[3,e.j],e.v]),e.Bb(4608,g.y,g.y,[]),e.Bb(4608,g.f,g.f,[]),e.Bb(4608,s.o,s.n,[e.s,[2,s.E]]),e.Bb(4608,z.d,z.d,[]),e.Bb(4608,pl.c,pl.c,[]),e.Bb(4608,gl.c,gl.c,[gl.i,gl.e,e.j,gl.h,gl.f,e.p,e.x,s.d,R.b,[2,s.i]]),e.Bb(5120,gl.j,gl.k,[gl.c]),e.Bb(5120,ol.a,ol.b,[gl.c]),e.Bb(4608,k.b,o,[]),e.Bb(1073742336,g.x,g.x,[]),e.Bb(1073742336,g.l,g.l,[]),e.Bb(1073742336,g.u,g.u,[]),e.Bb(1073742336,s.c,s.c,[]),e.Bb(1073742336,fl.a,fl.a,[]),e.Bb(1073742336,R.a,R.a,[]),e.Bb(1073742336,z.n,z.n,[[2,z.f],[2,_l.f]]),e.Bb(1073742336,d.d,d.d,[]),e.Bb(1073742336,U.b,U.b,[]),e.Bb(1073742336,z.w,z.w,[]),e.Bb(1073742336,_.c,_.c,[]),e.Bb(1073742336,Dl.d,Dl.d,[]),e.Bb(1073742336,vl.a,vl.a,[]),e.Bb(1073742336,Cl.a,Cl.a,[]),e.Bb(1073742336,y.c,y.c,[]),e.Bb(1073742336,yl.c,yl.c,[]),e.Bb(1073742336,xl.a,xl.a,[]),e.Bb(1073742336,S.b,S.b,[]),e.Bb(1073742336,wl,wl,[]),e.Bb(1073742336,kl.m,kl.m,[[2,kl.r],[2,kl.k]]),e.Bb(1073742336,Z.c,Z.c,[]),e.Bb(1073742336,pl.d,pl.d,[]),e.Bb(1073742336,K.e,K.e,[]),e.Bb(1073742336,Y.b,Y.b,[]),e.Bb(1073742336,h.d,h.d,[]),e.Bb(1073742336,h.c,h.c,[]),e.Bb(1073742336,Sl.c,Sl.c,[]),e.Bb(1073742336,il.c,il.c,[]),e.Bb(1073742336,gl.g,gl.g,[]),e.Bb(1073742336,z.u,z.u,[]),e.Bb(1073742336,z.s,z.s,[]),e.Bb(1073742336,ol.d,ol.d,[]),e.Bb(1073742336,i,i,[]),e.Bb(256,Dl.a,{separatorKeyCodes:[ql.f]},[]),e.Bb(1024,kl.i,function(){return[[{path:"",component:sl}]]},[])])})}}]);