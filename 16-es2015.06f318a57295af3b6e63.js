(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/nyh":function(t,a,r){"use strict";r.d(a,"a",(function(){return o}));var n=r("XoY3"),i=r("ROBh");class o extends n.a{getLabel(t){return t.psLabel?Object(i.a)(t.psLabel):null}mapDataToError(t){return Object(i.a)(t.map(t=>({errorText:`${t.controlPath} - ${t.errorKey} - ${JSON.stringify(t.errorValue)}`,data:t})))}}},"J+BS":function(t,a,r){"use strict";r.r(a),r.d(a,"SavebarDemoModule",(function(){return g}));var n=r("2kYt"),i=r("nIj0"),o=r("Meci"),e=r("29Wa"),c=r("Cd2c"),d=r("sEIs"),m=r("XoY3"),s=r("/BkX"),l=r("/nyh"),p=r("EM62"),u=r("Ctw6"),b=r("/G61");function h(t,a){if(1&t){const t=p.Sb();p.Pb(0),p.Rb(1,"button",6),p.Yb("click",(function(){return p.pc(t),p.cc().onButtonClick("custom")})),p.zc(2," Custom Button "),p.Qb(),p.Ob()}}let f=(()=>{class t{constructor(){this.form=new i.h({input1:new i.e("a"),input2:new i.e("b")},[t=>t.value.input1===t.value.input2?null:{equal:"input1 and input2 must be equal"}])}onButtonClick(t){alert(t+" button clicked")}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p.Fb({type:t,selectors:[["app-savebar-demo"]],decls:13,vars:2,consts:[[3,"form","save","saveAndClose","cancel"],[3,"formGroup"],["type","text","matInput","","formControlName","input1"],[2,"height","100vh"],["type","text","matInput","","formControlName","input2"],[4,"psSavebarRightContent"],["mat-stroked-button","","type","button",3,"click"]],template:function(t,a){1&t&&(p.Rb(0,"ps-savebar",0),p.Yb("save",(function(){return a.onButtonClick("save")}))("saveAndClose",(function(){return a.onButtonClick("saveAndClose")}))("cancel",(function(){return a.onButtonClick("cancel")})),p.Rb(1,"mat-card"),p.Rb(2,"form",1),p.Rb(3,"mat-form-field"),p.Rb(4,"mat-label"),p.zc(5,"Input 1"),p.Qb(),p.Mb(6,"input",2),p.Qb(),p.Mb(7,"div",3),p.Rb(8,"mat-form-field"),p.Rb(9,"mat-label"),p.zc(10,"Input 2"),p.Qb(),p.Mb(11,"input",4),p.Qb(),p.Qb(),p.Qb(),p.xc(12,h,3,0,"ng-container",5),p.Qb()),2&t&&(p.ic("form",a.form),p.Ab(2),p.ic("formGroup",a.form))},directives:[u.a,o.a,i.v,i.o,i.i,e.c,e.g,c.a,i.c,i.n,i.g,b.a],encapsulation:2,changeDetection:0}),t})();r("89kn");let g=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(a){return new(a||t)},providers:[],imports:[[i.j,i.s,n.c,m.b.forRoot(l.a),s.a,d.d.forChild([{path:"",component:f}]),c.b,e.e,o.c]]}),t})()},Meci:function(t,a,r){"use strict";r.d(a,"a",(function(){return m})),r.d(a,"b",(function(){return d})),r.d(a,"c",(function(){return s}));var n=r("5lCh"),i=r("mFH5"),o=r("EM62");const e=["*",[["mat-card-footer"]]],c=["*","mat-card-footer"];let d=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=o.Gb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,a){2&t&&o.Db("mat-card-actions-align-end","end"===a.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),m=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(a){return new(a||t)(o.Lb(n.a,8))},t.\u0275cmp=o.Fb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,a){2&t&&o.Db("_mat-animation-noopable","NoopAnimations"===a._animationMode)},exportAs:["matCard"],ngContentSelectors:c,decls:2,vars:0,template:function(t,a){1&t&&(o.hc(e),o.gc(0),o.gc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),s=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(a){return new(a||t)},imports:[[i.h],i.h]}),t})()}}]);