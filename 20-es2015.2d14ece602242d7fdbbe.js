(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Y7gp:function(t,n,c){"use strict";c.r(n),c.d(n,"CardDemoModule",function(){return V});var e=c("ofXK"),o=c("bTqV"),i=c("NFeN"),a=c("tyNb"),r=c("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Jb({type:t,selectors:[["","psCardTopButtonSection",""]]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Jb({type:t,selectors:[["","psCardCaptionSection",""]]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Jb({type:t,selectors:[["","psCardDescriptionSection",""]]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Jb({type:t,selectors:[["","psCardFooterSection",""]]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Jb({type:t,selectors:[["","psCardActionsSection",""]]}),t})();var l=c("Wp6s"),f=c("j2Ip"),m=c("X99e");function g(t,n){if(1&t&&r.Qb(0,7),2&t){const t=r.fc(2);r.lc("ngTemplateOutlet",t.captionSection)}}function h(t,n){if(1&t&&r.Qb(0,7),2&t){const t=r.fc(2);r.lc("ngTemplateOutlet",t.descriptionSection)}}function T(t,n){if(1&t&&r.Qb(0,7),2&t){const t=r.fc(2);r.lc("ngTemplateOutlet",t.topButtonSection)}}function U(t,n){if(1&t&&(r.Ub(0,"ps-header",3),r.yc(1,g,1,1,"ng-container",4),r.yc(2,h,1,1,"ng-container",5),r.yc(3,T,1,1,"ng-container",6),r.Tb()),2&t){const t=r.fc();r.lc("caption",t.caption)("description",t.description)}}function S(t,n){if(1&t&&(r.Ub(0,"mat-card-footer"),r.Qb(1,7),r.Tb()),2&t){const t=r.fc();r.Cb(1),r.lc("ngTemplateOutlet",t.footerSection)}}function y(t,n){if(1&t&&(r.Ub(0,"mat-card-actions"),r.Qb(1,7),r.Tb()),2&t){const t=r.fc();r.Cb(1),r.lc("ngTemplateOutlet",t.actionsSection)}}const C=["*"];let w=(()=>{class t{get showHeader(){return this.caption||this.captionSection||this.description||this.descriptionSection||this.topButtonSection}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["ps-card"]],contentQueries:function(t,n,c){if(1&t&&(r.Hb(c,b,1,r.N),r.Hb(c,d,1,r.N),r.Hb(c,s,1,r.N),r.Hb(c,p,1,r.N),r.Hb(c,u,1,r.N)),2&t){let t;r.pc(t=r.cc())&&(n.captionSection=t.first),r.pc(t=r.cc())&&(n.descriptionSection=t.first),r.pc(t=r.cc())&&(n.topButtonSection=t.first),r.pc(t=r.cc())&&(n.footerSection=t.first),r.pc(t=r.cc())&&(n.actionsSection=t.first)}},hostVars:2,hostBindings:function(t,n){2&t&&r.Gb("ps-card__with-header",n.showHeader)},inputs:{caption:"caption",description:"description",contentPadding:"contentPadding"},ngContentSelectors:C,decls:6,vars:5,consts:[[3,"caption","description",4,"ngIf"],[1,"ps-card__content"],[4,"ngIf"],[3,"caption","description"],[3,"ngTemplateOutlet",4,"psHeaderCaptionSection"],[3,"ngTemplateOutlet",4,"psHeaderDescriptionSection"],[3,"ngTemplateOutlet",4,"psHeaderTopButtonSection"],[3,"ngTemplateOutlet"]],template:function(t,n){1&t&&(r.kc(),r.yc(0,U,4,2,"ps-header",0),r.Ub(1,"mat-card",1),r.Ub(2,"mat-card-content"),r.jc(3),r.Tb(),r.yc(4,S,2,1,"mat-card-footer",2),r.yc(5,y,2,1,"mat-card-actions",2),r.Tb()),2&t&&(r.lc("ngIf",n.showHeader),r.Cb(1),r.vc("padding",n.contentPadding),r.Cb(3),r.lc("ngIf",n.footerSection),r.Cb(1),r.lc("ngIf",n.actionsSection))},directives:[e.m,l.a,l.c,f.a,m.a,m.b,m.c,e.r,l.d,l.b],styles:["ps-card{display:grid}.ps-card__with-header{grid-template-rows:auto 1fr}mat-card.ps-card__content{display:grid;grid-template-rows:1fr auto}"],encapsulation:2,changeDetection:0}),t})();var A=c("SJ3T");let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[e.c,l.e,A.a]]}),t})();function v(t,n){1&t&&(r.Sb(0),r.Ub(1,"button",13),r.Ub(2,"mat-icon"),r.Ac(3,"add"),r.Tb(),r.Tb(),r.Rb())}function H(t,n){1&t&&(r.Sb(0),r.Ub(1,"button",14),r.Ub(2,"mat-icon"),r.Ac(3,"add"),r.Tb(),r.Ac(4," Add "),r.Tb(),r.Ub(5,"button",15),r.Ub(6,"mat-icon"),r.Ac(7,"edit"),r.Tb(),r.Ac(8," Edit "),r.Tb(),r.Rb())}function R(t,n){1&t&&(r.Sb(0),r.Ub(1,"strong"),r.Ac(2,"This is some footer: "),r.Tb(),r.Ac(3,"someValue "),r.Rb())}function O(t,n){1&t&&(r.Sb(0),r.Ub(1,"h1",16),r.Ac(2,"Card with custom caption"),r.Tb(),r.Rb())}function I(t,n){1&t&&(r.Sb(0),r.Ub(1,"span",17),r.Ac(2,"You can also set a custom description"),r.Tb(),r.Rb())}function k(t,n){1&t&&(r.Sb(0),r.Ub(1,"button",13),r.Ub(2,"mat-icon"),r.Ac(3,"add"),r.Tb(),r.Tb(),r.Ub(4,"button",18),r.Ub(5,"mat-icon"),r.Ac(6,"edit"),r.Tb(),r.Tb(),r.Ub(7,"button",19),r.Ub(8,"mat-icon"),r.Ac(9,"clear"),r.Tb(),r.Tb(),r.Rb())}function J(t,n){1&t&&(r.Sb(0),r.Ub(1,"strong"),r.Ac(2,"This is some footer: "),r.Tb(),r.Ac(3,"someValue "),r.Rb())}function N(t,n){1&t&&(r.Sb(0),r.Ub(1,"h1",16),r.Ac(2,"Card with actions"),r.Tb(),r.Rb())}function x(t,n){1&t&&(r.Sb(0),r.Ub(1,"span",17),r.Ac(2,"You can also set a custom description"),r.Tb(),r.Rb())}function B(t,n){1&t&&(r.Sb(0),r.Ub(1,"button",13),r.Ub(2,"mat-icon"),r.Ac(3,"add"),r.Tb(),r.Tb(),r.Ub(4,"button",18),r.Ub(5,"mat-icon"),r.Ac(6,"edit"),r.Tb(),r.Tb(),r.Ub(7,"button",19),r.Ub(8,"mat-icon"),r.Ac(9,"clear"),r.Tb(),r.Tb(),r.Rb())}function P(t,n){1&t&&(r.Sb(0),r.Ub(1,"div",20),r.Ub(2,"button",21),r.Ac(3,"Add"),r.Tb(),r.Ub(4,"button",22),r.Ac(5,"Cancel"),r.Tb(),r.Tb(),r.Rb())}function D(t,n){1&t&&(r.Sb(0),r.Ub(1,"strong"),r.Ac(2,"This is some footer: "),r.Tb(),r.Ac(3,"someValue "),r.Rb())}function M(t,n){1&t&&(r.Sb(0),r.Ac(1,"Is always at the bottom"),r.Rb())}let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["app-card-demo"]],decls:42,vars:7,consts:[[3,"caption","description"],[1,"app-card-demo__content-wrapper"],[1,"app-card-demo__content"],[1,"app-card-demo__ps-card",3,"caption","description"],[4,"psCardTopButtonSection"],[4,"psCardFooterSection"],[1,"app-card-demo__ps-card"],[4,"psCardCaptionSection"],[4,"psCardDescriptionSection"],[4,"psCardActionsSection"],[1,"app-card-demo__ps-card",2,"height","450px"],[1,"app-card-demo__ps-card",2,"height","450px",3,"caption"],[2,"margin-bottom","2em"],["mat-mini-fab","","color","primary"],["mat-raised-button","","color","primary"],["mat-raised-button","","color","accent",2,"margin-left","1em"],[2,"background-color","cyan"],[2,"background-color","lightblue"],["mat-mini-fab","","color","accent",2,"margin-left","1em"],["mat-mini-fab","","color","warn",2,"margin-left","1em"],[2,"text-align","right"],["mat-button","","color","primary"],["mat-stroked-button",""]],template:function(t,n){1&t&&(r.Ub(0,"ps-card",0),r.Ub(1,"div",1),r.Ub(2,"h2",2),r.Ac(3,"Content goes here"),r.Tb(),r.Tb(),r.Tb(),r.Ub(4,"ps-card",3),r.yc(5,v,4,0,"ng-container",4),r.Ub(6,"div",1),r.Ub(7,"h2",2),r.Ac(8,"Content goes here"),r.Tb(),r.Tb(),r.Tb(),r.Ub(9,"ps-card",3),r.yc(10,H,9,0,"ng-container",4),r.Ub(11,"div",1),r.Ub(12,"h2",2),r.Ac(13,"Content goes here"),r.Tb(),r.Tb(),r.yc(14,R,4,0,"ng-container",5),r.Tb(),r.Ub(15,"ps-card",6),r.yc(16,O,3,0,"ng-container",7),r.yc(17,I,3,0,"ng-container",8),r.yc(18,k,10,0,"ng-container",4),r.Ub(19,"div",1),r.Ub(20,"h2",2),r.Ac(21,"Content goes here"),r.Tb(),r.Tb(),r.yc(22,J,4,0,"ng-container",5),r.Tb(),r.Ub(23,"ps-card",6),r.yc(24,N,3,0,"ng-container",7),r.yc(25,x,3,0,"ng-container",8),r.yc(26,B,10,0,"ng-container",4),r.Ub(27,"div",1),r.Ub(28,"h2",2),r.Ac(29,"Content goes here"),r.Tb(),r.Tb(),r.yc(30,P,6,0,"ng-container",9),r.yc(31,D,4,0,"ng-container",5),r.Tb(),r.Ub(32,"ps-card",10),r.Ub(33,"div",1),r.Ub(34,"h2",2),r.Ac(35,"Card without header stretches to full height regardless of content height"),r.Tb(),r.Tb(),r.yc(36,M,2,0,"ng-container",5),r.Tb(),r.Ub(37,"ps-card",11),r.Ub(38,"div",1),r.Ub(39,"h2",2),r.Ac(40,"Content goes here"),r.Tb(),r.Tb(),r.Tb(),r.Pb(41,"div",12)),2&t&&(r.lc("caption","Card with simple caption")("description","Here you see the simple card caption with some description text"),r.Cb(4),r.lc("caption","Card with actions")("description","Here you see the ps-card with an action"),r.Cb(5),r.lc("caption","Card with footer")("description","Here you see the ps-card with a footer"),r.Cb(28),r.lc("caption","Card with header stretches to full height"))},directives:[w,s,p,b,d,u,o.a,i.a],styles:[".app-card-demo__content-wrapper[_ngcontent-%COMP%] {\n        height: 100px;\n        line-height: 100px;\n        text-align: center;\n        background-color: #dfdfdfdf;\n      }\n\n      .app-card-demo__content[_ngcontent-%COMP%] {\n        display: inline-block;\n        vertical-align: middle;\n        line-height: normal;\n      }\n\n      .app-card-demo__ps-card[_ngcontent-%COMP%] {\n        margin-top: 3em;\n      }"],changeDetection:0}),t})(),V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[e.c,a.d.forChild([{path:"",component:Q}]),_,o.b,i.b]]}),t})()}}]);