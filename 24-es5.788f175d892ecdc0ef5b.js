!function(){function e(t,n,o){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(n):a.value}})(t,n,o||t)}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var l=c(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{O6GU:function(n,a,l){"use strict";l.r(a),l.d(a,"SelectDemoModule",function(){return Ce});var s,b,u,d,h,m,f,p,g,v=l("ofXK"),T=l("3Pt+"),C=l("Wp6s"),y=l("bSwM"),U=l("kmnG"),A=l("qFsG"),S=l("QibW"),w=l("tyNb"),M=l("voyI"),k=l("LRne"),I=l("5yfJ"),D=l("z6cu"),P=l("vkgz"),O=l("3E0/"),j=l("fXoL"),x=l("d3UM"),_=l("FKr1"),B=l("xSSo"),K=((f=function e(){i(this,e),this.showToggleAll=!0,this.items$=Object(k.a)(Array.from(Array(500).keys()).map(function(e){return{value:"id".concat(e),label:"Item ".concat(e)}})),this.form=new T.h({select:new T.e})}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=j.Ib({type:f,selectors:[["app-select-with-multiselect"]],decls:22,vars:8,consts:[[3,"ngModel","ngModelChange"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource","multiple","showToggleAll"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Multiselect"),j.Tb(),j.Ub(2,"div"),j.Ub(3,"mat-checkbox",0),j.bc("ngModelChange",function(e){return t.showToggleAll=e}),j.Ac(4,"show toggle all"),j.Tb(),j.Tb(),j.Ub(5,"span",1),j.Ub(6,"mat-form-field",2),j.Ub(7,"mat-label"),j.Ac(8,"select"),j.Tb(),j.Pb(9,"ps-select",3),j.Tb(),j.Tb(),j.Ac(10),j.gc(11,"json"),j.Pb(12,"br"),j.Ub(13,"ul"),j.Ub(14,"li"),j.Ac(15,"Multiple items should be selectable"),j.Tb(),j.Ub(16,"li"),j.Ac(17,"On mouseover the selected items should be shown in a tooltip"),j.Tb(),j.Ub(18,"li"),j.Ac(19,"When selecting a item, the dropdown should stay open and shouldnt reorder the items"),j.Tb(),j.Ub(20,"li"),j.Ac(21,"When closing and reopening the dropdown, all selected items should be at the top"),j.Tb(),j.Tb()),2&e&&(j.Cb(3),j.lc("ngModel",t.showToggleAll),j.Cb(2),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.items$)("multiple",!0)("showToggleAll",t.showToggleAll),j.Cb(1),j.Cc(" value: ",j.hc(11,6,t.form.value.select),""))},directives:[y.a,T.n,T.q,T.o,T.i,U.d,U.h,B.a,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),f),L=((m=function(){function e(){i(this,e),this.items=Array.from(Array(50).keys()).map(function(e){return{value:"id".concat(e),label:"Item ".concat(e)}}),this.values=[]}return r(e,[{key:"onSelectionChange",value:function(e){this.values.push(e.value)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=j.Ib({type:m,selectors:[["app-select-with-events-only"]],decls:13,vars:4,consts:[[3,"dataSource","selectionChange"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Event output only (no form)"),j.Tb(),j.Ub(2,"mat-form-field"),j.Ub(3,"mat-label"),j.Ac(4,"selectionChange only"),j.Tb(),j.Ub(5,"ps-select",0),j.bc("selectionChange",function(e){return t.onSelectionChange(e)}),j.Tb(),j.Tb(),j.Ac(6),j.gc(7,"json"),j.Ub(8,"ul"),j.Ub(9,"li"),j.Ac(10,"Initialliy no event should be fired"),j.Tb(),j.Ub(11,"li"),j.Ac(12,"When changing the selection, the id of the selected item should be added to the events values above"),j.Tb(),j.Tb()),2&e&&(j.Cb(5),j.lc("dataSource",t.items),j.Cb(1),j.Cc(" change event values: ",j.hc(7,2,t.values)," "))},directives:[U.d,U.h,B.a],pipes:[v.g],encapsulation:2,changeDetection:0}),m),F=((h=function(){function e(t){i(this,e),this.cd=t,this.items=Array.from(Array(50).keys()).map(function(e){return{value:"id".concat(e),label:"Item ".concat(e)}}),this.ngModelValue="id11"}return r(e,[{key:"random",value:function(){var e=Math.floor(Math.random()*this.items.length);this.ngModelValue=this.items[e].value,this.cd.markForCheck()}}]),e}()).\u0275fac=function(e){return new(e||h)(j.Ob(j.h))},h.\u0275cmp=j.Ib({type:h,selectors:[["app-select-with-ng-model"]],decls:16,vars:5,consts:[[3,"click"],[3,"ngModel","dataSource","ngModelChange"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"ngModel"),j.Tb(),j.Ub(2,"div"),j.Ub(3,"button",0),j.bc("click",function(){return t.random()}),j.Ac(4,"select random value"),j.Tb(),j.Tb(),j.Ub(5,"mat-form-field"),j.Ub(6,"mat-label"),j.Ac(7,"ngModel bound"),j.Tb(),j.Ub(8,"ps-select",1),j.bc("ngModelChange",function(e){return t.ngModelValue=e}),j.Tb(),j.Tb(),j.Ac(9),j.gc(10,"json"),j.Ub(11,"ul"),j.Ub(12,"li"),j.Ac(13,"'Item 11'/'id11' should be initially selected"),j.Tb(),j.Ub(14,"li"),j.Ac(15,"Changing the selection should update the selected value"),j.Tb(),j.Tb()),2&e&&(j.Cb(8),j.lc("ngModel",t.ngModelValue)("dataSource",t.items),j.Cb(1),j.Cc(" value: ",j.hc(10,3,t.ngModelValue)," "))},directives:[U.d,U.h,B.a,T.n,T.q],pipes:[v.g],encapsulation:2,changeDetection:0}),h),R=((d=function e(){i(this,e),this.items$=Object(k.a)(Array.from(Array(50).keys()).map(function(e){return{value:"id".concat(e),label:"Item ".concat(e)}})),this.form=new T.h({select:new T.e("idx")})}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=j.Ib({type:d,selectors:[["app-select-with-selected-item-not-in-datasource"]],decls:21,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Initially selected Item is not in DataSource"),j.Tb(),j.Ub(2,"span",0),j.Ub(3,"mat-form-field",1),j.Ub(4,"mat-label"),j.Ac(5,"select"),j.Tb(),j.Pb(6,"ps-select",2),j.Tb(),j.Tb(),j.Ac(7),j.gc(8,"json"),j.Pb(9,"br"),j.Ub(10,"ul"),j.Ub(11,"li"),j.Ac(12,"Initially '??? (ID: idx)' should be selected"),j.Tb(),j.Ub(13,"li"),j.Ac(14,"When first opening the dropdown '??? (ID: idx)' should be the first item and marked as selected"),j.Tb(),j.Ub(15,"li"),j.Ac(16,"the filter should work"),j.Tb(),j.Ub(17,"li"),j.Ac(18," When filtering for 'item' the '??? (ID: idx)' entry should not be visible in the dropdown. When closing the dropdown without clearing the filter, '??? (ID: idx)' should still be thr selected item in the selectbox and no flickering should occur. "),j.Tb(),j.Ub(19,"li"),j.Ac(20,"When selecting a different item, '??? (ID: idx)' should vanish from the selectable items"),j.Tb(),j.Tb()),2&e&&(j.Cb(2),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.items$),j.Cb(1),j.Cc(" value: ",j.hc(8,3,t.form.value.select),""))},directives:[T.o,T.i,U.d,U.h,B.a,T.n,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),d),N=((u=function e(){i(this,e),this.dataSource=new M.a({mode:"id",labelKey:"a",idKey:"b",items:function(){return I.a}}),this.form=new T.h({select:new T.e("idx")})}).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=j.Ib({type:u,selectors:[["app-select-with-endless-loading-datasource"]],decls:17,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Endless Loading DataSource"),j.Tb(),j.Ub(2,"span",0),j.Ub(3,"mat-form-field",1),j.Ub(4,"mat-label"),j.Ac(5,"select"),j.Tb(),j.Pb(6,"ps-select",2),j.Tb(),j.Tb(),j.Ac(7),j.gc(8,"json"),j.Pb(9,"br"),j.Ub(10,"ul"),j.Ub(11,"li"),j.Ac(12,"Initially '??? (ID: idx)' should be selected"),j.Tb(),j.Ub(13,"li"),j.Ac(14,"When opening the dropdown, there sould be a loading indicator"),j.Tb(),j.Ub(15,"li"),j.Ac(16,"the filter should work"),j.Tb(),j.Tb()),2&e&&(j.Cb(2),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.dataSource),j.Cb(1),j.Cc(" value: ",j.hc(8,3,t.form.value.select),""))},directives:[T.o,T.i,U.d,U.h,B.a,T.n,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),u),G=((b=function e(){i(this,e),this.dataSource=new M.a({mode:"id",labelKey:"a",idKey:"b",items:function(){return Object(D.a)("Failed to load items")}}),this.form=new T.h({select:new T.e("idx")})}).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=j.Ib({type:b,selectors:[["app-select-with-error-in-datasource"]],decls:15,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Error while loading items"),j.Tb(),j.Ub(2,"span",0),j.Ub(3,"mat-form-field",1),j.Ub(4,"mat-label"),j.Ac(5,"select"),j.Tb(),j.Pb(6,"ps-select",2),j.Tb(),j.Tb(),j.Ac(7),j.gc(8,"json"),j.Pb(9,"br"),j.Ub(10,"ul"),j.Ub(11,"li"),j.Ac(12,"Initially '??? (ID: idx)' should be selected"),j.Tb(),j.Ub(13,"li"),j.Ac(14,"When opening the dropdown, there sould be a red item with 'Failed to load items' that is not selectable"),j.Tb(),j.Tb()),2&e&&(j.Cb(2),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.dataSource),j.Cb(1),j.Cc(" value: ",j.hc(8,3,t.form.value.select),""))},directives:[T.o,T.i,U.d,U.h,B.a,T.n,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),b),E=((s=function(){function e(t){i(this,e),this.cd=t,this.currentLoadTrigger="initial",this.loadCount=0,this.form=new T.h({select:new T.e("idx")}),this.onTriggerChanged(this.currentLoadTrigger)}return r(e,[{key:"onTriggerChanged",value:function(e){this.loadCount=0,this.dataSource=this.createDataSource("initial"===e?1:"firstopen"===e?2:4),this.cd.markForCheck()}},{key:"createDataSource",value:function(e){var t=this;return new M.a({mode:"id",idKey:"value",labelKey:"label",items:function(){t.loadCount++;var e=Math.random(),n=Math.random();return Object(k.a)([{value:e,label:"item "+e},{value:n,label:"item "+n}]).pipe(Object(O.a)(1e3))},loadTrigger:e})}}]),e}()).\u0275fac=function(e){return new(e||s)(j.Ob(j.h))},s.\u0275cmp=j.Ib({type:s,selectors:[["app-select-with-other-load-trigger"]],decls:30,vars:8,consts:[[3,"ngModel","ngModelChange","change"],["value","initial"],["value","firstopen"],["value","everyopen"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Custom load trigger with 1 second loading delay"),j.Tb(),j.Ub(2,"div"),j.Ub(3,"mat-radio-group",0),j.bc("ngModelChange",function(e){return t.currentLoadTrigger=e})("change",function(e){return t.onTriggerChanged(e.value)}),j.Ub(4,"mat-radio-button",1),j.Ac(5,"initial"),j.Tb(),j.Ub(6,"mat-radio-button",2),j.Ac(7,"first panel open"),j.Tb(),j.Ub(8,"mat-radio-button",3),j.Ac(9,"every panel open"),j.Tb(),j.Tb(),j.Tb(),j.Ub(10,"span",4),j.Ub(11,"mat-form-field",5),j.Ub(12,"mat-label"),j.Ac(13,"select"),j.Tb(),j.Pb(14,"ps-select",6),j.Tb(),j.Tb(),j.Ac(15),j.gc(16,"json"),j.Pb(17,"br"),j.Ac(18),j.Pb(19,"br"),j.Ac(20),j.Ub(21,"ul"),j.Ub(22,"li"),j.Ac(23,"Initially '??? (ID: idx)' should be selected and load trigger should be 'initial' with count 1"),j.Tb(),j.Ub(24,"li"),j.Ac(25,"For load trigger 'first panel open' count should be 0, increase to 1 on first open. It should never go beyond 1"),j.Tb(),j.Ub(26,"li"),j.Ac(27,"For load trigger 'every panel open' count should be 0 and increase by 1 on every open"),j.Tb(),j.Ub(28,"li"),j.Ac(29,"When switching the load trigger, the selected value shouldn't vanish"),j.Tb(),j.Tb()),2&e&&(j.Cb(3),j.lc("ngModel",t.currentLoadTrigger),j.Cb(7),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.dataSource),j.Cb(1),j.Cc(" value: ",j.hc(16,6,t.form.value.select),""),j.Cb(3),j.Cc(" current load trigger: ",t.currentLoadTrigger,""),j.Cb(2),j.Cc(" load trigger count: ",t.loadCount," "))},directives:[S.b,T.n,T.q,S.a,T.o,T.i,U.d,U.h,B.a,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),s),$=function(e){return{mode:"entity",idKey:"Id",labelKey:"Name",items:e}},q=function(e){return{mode:"id",idKey:"Id",labelKey:"Name",items:e}},V=((g=function(n){t(l,n);var a=o(l);function l(){return i(this,l),a.call(this)}return r(l,[{key:"createDataSource",value:function(t,n){return"string"==typeof t&&(t=function(e){if(!/^(id)?lookup:/.test(e))throw new Error(e);var t=e.split(":")[1],n=Object(k.a)(Array.from(Array(50).keys()).map(function(e){return{Id:"".concat(t).concat(e),Name:"".concat(t," ").concat(e)}}));return{mode:e.startsWith("id")?"id":"entity",idKey:"Id",labelKey:"Name",items:n,loadTrigger:4}}(t)),e(c(l.prototype),"createDataSource",this).call(this,t,n)}}]),l}(M.b)).\u0275fac=function(e){return new(e||g)},g.\u0275prov=j.Kb({token:g,factory:g.\u0275fac}),g),z=((p=function e(){i(this,e),this.items$=Object(k.a)(Array.from(Array(50).keys()).map(function(e){return{Id:"id".concat(e),Name:"Item ".concat(e)}})),this.form=new T.h({lookup_entity:new T.e({Id:"country1",Name:"not visible after first open"}),lookup_id:new T.e("country1"),options_entity:new T.e({Id:"id1",Name:"not visible in select"}),options_id:new T.e("id1")})}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=j.Ib({type:p,selectors:[["app-select-with-custom-select-service"]],features:[j.Bb([{provide:M.d,useClass:V}])],decls:40,vars:21,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","lookup_entity",3,"dataSource"],["formControlName","lookup_id",3,"dataSource"],["formControlName","options_entity",3,"dataSource"],["formControlName","options_id",3,"dataSource"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Custom PsSelectService"),j.Tb(),j.Ub(2,"div",0),j.Ub(3,"mat-form-field",1),j.Ub(4,"mat-label"),j.Ac(5,"lookup (mode: entity)"),j.Tb(),j.Pb(6,"ps-select",2),j.Tb(),j.Ac(7),j.gc(8,"json"),j.Pb(9,"br"),j.Ub(10,"mat-form-field",1),j.Ub(11,"mat-label"),j.Ac(12,"lookup (mode: id)"),j.Tb(),j.Pb(13,"ps-select",3),j.Tb(),j.Ac(14),j.gc(15,"json"),j.Pb(16,"br"),j.Ub(17,"mat-form-field",1),j.Ub(18,"mat-label"),j.Ac(19,"options (mode: entity)"),j.Tb(),j.Pb(20,"ps-select",4),j.Tb(),j.Ac(21),j.gc(22,"json"),j.Pb(23,"br"),j.Ub(24,"mat-form-field",1),j.Ub(25,"mat-label"),j.Ac(26,"options (mode: id)"),j.Tb(),j.Pb(27,"ps-select",5),j.Tb(),j.Ac(28),j.gc(29,"json"),j.Pb(30,"br"),j.Tb(),j.Ub(31,"ul"),j.Ub(32,"li"),j.Ac(33,"The initially visible selections should be 'not visible after first open', '??? (ID: country1)', 'Item 1' and 'Item 1'"),j.Tb(),j.Ub(34,"li"),j.Ac(35,"After first opening the lookup dropdowns (when the items are loaded) the label should update to 'country 1'"),j.Tb(),j.Ub(36,"li"),j.Ac(37,"For mode 'entity' the whole object should be in the form value"),j.Tb(),j.Ub(38,"li"),j.Ac(39,"For mode 'id' only the id should be in the form value"),j.Tb(),j.Tb()),2&e&&(j.Cb(2),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource","lookup:country"),j.Cb(1),j.Cc(" value: ",j.hc(8,9,t.form.value.lookup_entity),""),j.Cb(6),j.lc("dataSource","idlookup:country"),j.Cb(1),j.Cc(" value: ",j.hc(15,11,t.form.value.lookup_id),""),j.Cb(6),j.lc("dataSource",j.nc(17,$,t.items$)),j.Cb(1),j.Cc(" value: ",j.hc(22,13,t.form.value.options_entity),""),j.Cb(6),j.lc("dataSource",j.nc(19,q,t.items$)),j.Cb(1),j.Cc(" value: ",j.hc(29,15,t.form.value.options_id),""))},directives:[T.o,T.i,U.d,U.h,B.a,T.n,T.g],pipes:[v.g],encapsulation:2,changeDetection:0}),p),W=l("nBXf"),J=l("uJZY");function X(e,t){if(1&e&&(j.Sb(0),j.Ac(1," color: "),j.Ub(2,"span",3),j.Ac(3),j.Tb(),j.Rb()),2&e){var n=t.$implicit;j.Cb(2),j.vc("color",n.value),j.Cb(1),j.Bc(n.viewValue)}}function Q(e,t){if(1&e&&(j.Sb(0),j.Ub(1,"div"),j.Ac(2,"color:"),j.Tb(),j.Ub(3,"span",3),j.Ac(4),j.Tb(),j.Rb()),2&e){var n=t.$implicit;j.Cb(3),j.vc("color",n.value.color)("font-size",n.value.size),j.Cb(1),j.Bc(n.label)}}var Y,Z,H=((Y=function e(){i(this,e),this.items=[{value:{color:"red",size:"3em"},label:"Red"},{value:{color:"green",size:"2em"},label:"Green"},{value:{color:"blue",size:"1.5em"},label:"Blue"}],this.ngModelValue=null,this.panelNgClass={"app-select-with-custom-template__custom-panel":!0}}).\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=j.Ib({type:Y,selectors:[["app-select-with-custom-template"]],decls:13,vars:6,consts:[[3,"ngModel","dataSource","panelClass","ngModelChange"],[4,"psSelectTriggerTemplate"],[4,"psSelectOptionTemplate"],[1,"asdf"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Custom options template"),j.Tb(),j.Ub(2,"mat-form-field"),j.Ub(3,"mat-label"),j.Ac(4,"select"),j.Tb(),j.Ub(5,"ps-select",0),j.bc("ngModelChange",function(e){return t.ngModelValue=e}),j.yc(6,X,4,3,"ng-container",1),j.yc(7,Q,5,5,"ng-container",2),j.Tb(),j.Tb(),j.Ac(8),j.gc(9,"json"),j.Ub(10,"ul"),j.Ub(11,"li"),j.Ac(12,"The selectable items should be in the color of their name"),j.Tb(),j.Tb()),2&e&&(j.Cb(5),j.lc("ngModel",t.ngModelValue)("dataSource",t.items)("panelClass",t.panelNgClass),j.Cb(3),j.Cc(" value: ",j.hc(9,4,t.ngModelValue)," "))},directives:[U.d,U.h,B.a,T.n,T.q,W.a,J.a],pipes:[v.g],styles:["\n      .app-select-with-custom-template__custom-panel.mat-select-panel .mat-option {\n        height: auto;\n        min-height: 3em;\n        line-height: 1.5em;\n        padding-top: 3px;\n        padding-bottom: 3px;\n      }\n    "],encapsulation:2,changeDetection:0}),Y),ee=l("JX91"),te=l("7o/Q"),ne=function(){function e(t,n){i(this,e),this.bufferSize=t,this.startBufferEvery=n,this.subscriberClass=n&&t!==n?ae:oe}return r(e,[{key:"call",value:function(e,t){return t.subscribe(new this.subscriberClass(e,this.bufferSize,this.startBufferEvery))}}]),e}(),oe=function(n){t(l,n);var a=o(l);function l(e,t){var n;return i(this,l),(n=a.call(this,e)).bufferSize=t,n.buffer=[],n}return r(l,[{key:"_next",value:function(e){var t=this.buffer;t.push(e),t.length==this.bufferSize&&(this.destination.next(t),this.buffer=[])}},{key:"_complete",value:function(){var t=this.buffer;t.length>0&&this.destination.next(t),e(c(l.prototype),"_complete",this).call(this)}}]),l}(te.a),ae=function(n){t(l,n);var a=o(l);function l(e,t,n){var o;return i(this,l),(o=a.call(this,e)).bufferSize=t,o.startBufferEvery=n,o.buffers=[],o.count=0,o}return r(l,[{key:"_next",value:function(e){var t=this.bufferSize,n=this.startBufferEvery,o=this.buffers,a=this.count;this.count++,a%n==0&&o.push([]);for(var c=o.length;c--;){var l=o[c];l.push(e),l.length===t&&(o.splice(c,1),this.destination.next(l))}}},{key:"_complete",value:function(){for(var t=this.buffers,n=this.destination;t.length>0;){var o=t.shift();o.length>0&&n.next(o)}e(c(l.prototype),"_complete",this).call(this)}}]),l}(te.a),ce=function(){function e(){i(this,e)}return r(e,[{key:"isErrorState",value:function(e,t){return!(!e||!e.invalid)}}]),e}(),le=((Z=function(){function e(){i(this,e),this.items$=Object(k.a)(Array.from(Array(10).keys()).map(function(e){return{value:"id".concat(e),label:"Item ".concat(e)}})),this.form=new T.h({select:new T.e(null,[T.u.required])}),this.errorStateMatcher=new ce,this.lastFiveValues$=this.form.get("select").valueChanges.pipe(Object(ee.a)(null,null,null,null,null),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return n.lift(new ne(e,t))}}(5,1)),this.form.disable()}return r(e,[{key:"toggleDiabled",value:function(){this.form.disabled?this.form.enable():this.form.disable()}}]),e}()).\u0275fac=function(e){return new(e||Z)},Z.\u0275cmp=j.Ib({type:Z,selectors:[["app-select-with-error-state-matcher"]],decls:22,vars:9,consts:[[3,"click"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource","errorStateMatcher"]],template:function(e,t){1&e&&(j.Ub(0,"h2"),j.Ac(1,"Disabled form with custom error state matcher"),j.Tb(),j.Ub(2,"div"),j.Ub(3,"button",0),j.bc("click",function(){return t.toggleDiabled()}),j.Ac(4,"toggle disabled"),j.Tb(),j.Tb(),j.Ub(5,"span",1),j.Ub(6,"mat-form-field",2),j.Ub(7,"mat-label"),j.Ac(8,"select"),j.Tb(),j.Pb(9,"ps-select",3),j.Tb(),j.Tb(),j.Ac(10),j.gc(11,"json"),j.Pb(12,"br"),j.Ac(13),j.gc(14,"async"),j.Ub(15,"ul"),j.Ub(16,"li"),j.Ac(17,"Should be disabled initially"),j.Tb(),j.Ub(18,"li"),j.Ac(19,"Should be invalid/red on enabling"),j.Tb(),j.Ub(20,"li"),j.Ac(21,"Should be valid/grey when disabling (without choosing value)"),j.Tb(),j.Tb()),2&e&&(j.Cb(5),j.lc("formGroup",t.form),j.Cb(4),j.lc("dataSource",t.items$)("errorStateMatcher",t.errorStateMatcher),j.Cb(1),j.Cc(" value: ",j.hc(11,5,t.form.value.select),""),j.Cb(3),j.Cc(" last 5 values: ",j.hc(14,7,t.lastFiveValues$)," "))},directives:[T.o,T.i,U.d,U.h,B.a,T.n,T.g],pipes:[v.g,v.b],encapsulation:2,changeDetection:0}),Z);function re(e,t){if(1&e&&(j.Sb(0),j.Ac(1),j.gc(2,"json"),j.Rb()),2&e){var n=t.$implicit;j.Cb(1),j.Cc(" ",j.hc(2,1,n)," ")}}function ie(e,t){1&e&&(j.Sb(0),j.yc(1,re,3,3,"ng-container",14),j.Rb())}function se(e,t){if(1&e&&(j.Sb(0),j.Ac(1),j.gc(2,"json"),j.Rb()),2&e){var n=t.$implicit;j.Cb(1),j.Cc(" ",j.hc(2,1,n)," ")}}function be(e,t){1&e&&(j.Sb(0),j.yc(1,se,3,3,"ng-container",15),j.Rb())}function ue(e,t){if(1&e&&(j.Sb(0),j.Ac(1),j.gc(2,"json"),j.Rb()),2&e){var n=t.$implicit;j.Cb(1),j.Cc(" ",j.hc(2,1,n)," ")}}function de(e,t){1&e&&(j.Sb(0),j.yc(1,ue,3,3,"ng-container",14),j.Rb())}function he(e,t){if(1&e&&(j.Sb(0),j.Ac(1),j.gc(2,"json"),j.Rb()),2&e){var n=t.$implicit;j.Cb(1),j.Cc(" ",j.hc(2,1,n)," ")}}function me(e,t){1&e&&(j.Sb(0),j.yc(1,he,3,3,"ng-container",15),j.Rb())}var fe=function(e){return{"app-select-demo__panel":e}};function pe(e,t){if(1&e){var n=j.Vb();j.Ub(0,"mat-card",8),j.Ub(1,"mat-form-field",9),j.Ub(2,"mat-label"),j.Ac(3,"ngModel"),j.Tb(),j.Ub(4,"ps-select",10),j.bc("ngModelChange",function(e){return j.sc(n),j.fc().ngModel=e}),j.yc(5,ie,2,0,"ng-container",11),j.yc(6,be,2,0,"ng-container",11),j.Tb(),j.Tb(),j.Ub(7,"div",12),j.Ub(8,"mat-form-field",9),j.Ub(9,"mat-label"),j.Ac(10,"FormControl"),j.Tb(),j.Ub(11,"ps-select",13),j.yc(12,de,2,0,"ng-container",11),j.yc(13,me,2,0,"ng-container",11),j.Tb(),j.Tb(),j.Tb(),j.Tb()}if(2&e){var o=j.fc();j.Cb(4),j.lc("ngModel",o.ngModel)("dataSource",o.ngModelDataSource)("multiple",o.multiple)("clearable",o.clearable)("disabled",o.disabled)("required",o.required)("panelClass",j.nc(18,fe,o.panelClass)),j.Cb(1),j.lc("ngIf",o.customTriggerTpl),j.Cb(1),j.lc("ngIf",o.customOptionTpl),j.Cb(1),j.lc("formGroup",o.form),j.Cb(4),j.lc("dataSource",o.formDataSource)("multiple",o.multiple)("clearable",o.clearable)("disabled",o.disabled)("required",o.required)("panelClass",j.nc(20,fe,o.panelClass)),j.Cb(1),j.lc("ngIf",o.customTriggerTpl),j.Cb(1),j.lc("ngIf",o.customOptionTpl)}}var ge,ve=((ge=function(){function e(t){i(this,e),this.cd=t,this.visible=!0,this.ngModel=null,this.form=new T.h({ctrl:new T.e(null)}),this.items=Array.from(Array(500).keys()).map(function(e){return{id:e,strId:"id".concat(e),labelA:"Label A ".concat(e),labelB:"Label B ".concat(e),disabled:e%5==4}}),this.unknowIitem={id:-1,strId:"id-1",labelA:"Label A -1",labelB:"Label B -1"},this.multiple=!1,this.clearable=!0,this.disabled=!1,this.required=!1,this.panelClass=!1,this.customTriggerTpl=!1,this.customOptionTpl=!1,this.dataSourceItems="default",this.dataSourceMode="id",this.dataSourceIdKey="id",this.dataSourceLabelKey="labelA",this.dataSourceSearchDebounce=300,this.loadTriggerInitial=!0,this.loadTriggerFirstPanelOpen=!1,this.loadTriggerEveryPanelOpen=!1,this.sortBySelected=!0,this.sortByComparer=!0,this.reverseSort=!1,this.itemsAsObservable=!1,this.itemsAsFunction=!1,this.ngModelLogs={loadCount:0},this.formLogs={loadCount:0}}return r(e,[{key:"ngOnInit",value:function(){this.resetDataSource()}},{key:"createDataSource",value:function(e){var t=new M.a({mode:this.dataSourceMode,idKey:this.dataSourceIdKey,labelKey:this.dataSourceLabelKey,disabledKey:"disabled",items:this.getDataSourceItems(e),searchDebounce:this.dataSourceSearchDebounce,loadTrigger:this.getPsSelectLoadTrigger(),sortBy:this.getPsSelectSortBy()});return this.reverseSort&&(t.sortCompare=function(e,t){return t.entity.id-e.entity.id}),t}},{key:"getPsSelectLoadTrigger",value:function(){return(this.loadTriggerInitial&&1)|(this.loadTriggerFirstPanelOpen&&2)|(this.loadTriggerEveryPanelOpen&&4)}},{key:"getPsSelectSortBy",value:function(){return(this.sortBySelected&&1)|(this.sortByComparer&&2)}},{key:"getDataSourceItems",value:function(e){switch(e.loadCount=0,this.dataSourceItems){case"default":var t=this.items;if(this.itemsAsObservable&&(t=Object(k.a)(t).pipe(Object(P.a)(function(){++e.loadCount}),Object(O.a)(1e3))),this.itemsAsFunction){var n=t;t=function(){return++e.loadCount,n}}return t;case"empty":return[];case"loading":return I.a;case"error":return Object(D.a)(new Error("loading failed"))}}},{key:"resetDataSource",value:function(){this.ngModelDataSource=this.createDataSource(this.ngModelLogs),this.formDataSource=this.createDataSource(this.formLogs)}},{key:"patchUnknownItem",value:function(){var e=this.multiple?[this.unknowIitem]:this.unknowIitem;this.ngModel=e,this.form.patchValue({ctrl:e})}},{key:"disabledChanged",value:function(){this.disabled?this.form.disable():this.form.enable()}},{key:"recreate",value:function(){var e=this;this.visible=!1,setTimeout(function(){e.resetDataSource(),e.visible=!0,e.cd.markForCheck()},0)}}]),e}()).\u0275fac=function(e){return new(e||ge)(j.Ob(j.h))},ge.\u0275cmp=j.Ib({type:ge,selectors:[["app-select-demo"]],decls:120,vars:39,consts:[[1,"app-select-demo__settings"],[1,"app-select-demo__settings-box"],[3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value"],["matInput","","type","number",3,"ngModel","ngModelChange","change"],["style","margin-bottom: 1em;",4,"ngIf"],[2,"margin-bottom","1em"],[2,"width","100%"],[3,"ngModel","dataSource","multiple","clearable","disabled","required","panelClass","ngModelChange"],[4,"ngIf"],[3,"formGroup"],["formControlName","ctrl",3,"dataSource","multiple","clearable","disabled","required","panelClass"],[4,"psSelectTriggerTemplate"],[4,"psSelectOptionTemplate"]],template:function(e,t){1&e&&(j.Ub(0,"div",0),j.Ub(1,"mat-card",1),j.Ub(2,"strong"),j.Ac(3,"ps-select"),j.Tb(),j.Ub(4,"span"),j.Ac(5,"[dataSource] = new DefaultPsSelectDataSource(...)"),j.Tb(),j.Ub(6,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.multiple=e})("change",function(){return t.recreate()}),j.Ac(7,"[multiple]"),j.Tb(),j.Ub(8,"mat-checkbox",3),j.bc("ngModelChange",function(e){return t.clearable=e}),j.Ac(9,"[clearable]"),j.Tb(),j.Ub(10,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.disabled=e})("change",function(){return t.disabledChanged()}),j.Ac(11,"[disabled]"),j.Tb(),j.Ub(12,"mat-checkbox",3),j.bc("ngModelChange",function(e){return t.required=e}),j.Ac(13,"[required]"),j.Tb(),j.Ub(14,"span"),j.Ac(15,"[errorStateMatcher]"),j.Tb(),j.Ub(16,"mat-checkbox",3),j.bc("ngModelChange",function(e){return t.panelClass=e}),j.Ac(17,"[panelClass] (color: green)"),j.Tb(),j.Ub(18,"div"),j.Ac(19,"(openedChange) $event = boolean"),j.Tb(),j.Ub(20,"div"),j.Ac(21,"(selectionChange) $event = MatSelectChange"),j.Tb(),j.Ub(22,"mat-checkbox",3),j.bc("ngModelChange",function(e){return t.customTriggerTpl=e}),j.Ac(23,'*psSelectTriggerTemplate="let item"'),j.Tb(),j.Ub(24,"mat-checkbox",3),j.bc("ngModelChange",function(e){return t.customOptionTpl=e}),j.Ac(25,'*psSelectOptionTemplate="let item"'),j.Tb(),j.Tb(),j.Ub(26,"mat-card",1),j.Ub(27,"strong"),j.Ac(28,"DefaultPsSelectDataSource"),j.Tb(),j.Ub(29,"mat-form-field"),j.Ub(30,"mat-label"),j.Ac(31,"items"),j.Tb(),j.Ub(32,"mat-select",4),j.bc("ngModelChange",function(e){return t.dataSourceItems=e})("selectionChange",function(){return t.resetDataSource()}),j.Ub(33,"mat-option",5),j.Ac(34,"500 items"),j.Tb(),j.Ub(35,"mat-option",5),j.Ac(36,"error while loading"),j.Tb(),j.Ub(37,"mat-option",5),j.Ac(38,"endless loading"),j.Tb(),j.Ub(39,"mat-option",5),j.Ac(40,"empty result"),j.Tb(),j.Tb(),j.Tb(),j.Ub(41,"strong"),j.Ac(42,"items array"),j.Tb(),j.Ub(43,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.itemsAsObservable=e})("change",function(){return t.resetDataSource()}),j.Ac(44,"wrapped in observable"),j.Tb(),j.Ub(45,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.itemsAsFunction=e})("change",function(){return t.resetDataSource()}),j.Ac(46,"result of load function"),j.Tb(),j.Ub(47,"mat-form-field"),j.Ub(48,"mat-label"),j.Ac(49,"mode"),j.Tb(),j.Ub(50,"mat-select",4),j.bc("ngModelChange",function(e){return t.dataSourceMode=e})("selectionChange",function(){return t.resetDataSource()}),j.Ub(51,"mat-option",5),j.Ac(52,"id"),j.Tb(),j.Ub(53,"mat-option",5),j.Ac(54,"entity"),j.Tb(),j.Tb(),j.Tb(),j.Ub(55,"mat-form-field"),j.Ub(56,"mat-label"),j.Ac(57,"idKey"),j.Tb(),j.Ub(58,"mat-select",4),j.bc("ngModelChange",function(e){return t.dataSourceIdKey=e})("selectionChange",function(){return t.resetDataSource()}),j.Ub(59,"mat-option",5),j.Ac(60,"id property"),j.Tb(),j.Ub(61,"mat-option",5),j.Ac(62,"strId property"),j.Tb(),j.Tb(),j.Tb(),j.Ub(63,"mat-form-field"),j.Ub(64,"mat-label"),j.Ac(65,"labelKey"),j.Tb(),j.Ub(66,"mat-select",4),j.bc("ngModelChange",function(e){return t.dataSourceLabelKey=e})("selectionChange",function(){return t.resetDataSource()}),j.Ub(67,"mat-option",5),j.Ac(68,"labelA property"),j.Tb(),j.Ub(69,"mat-option",5),j.Ac(70,"labelB property"),j.Tb(),j.Tb(),j.Tb(),j.Ub(71,"mat-form-field"),j.Ub(72,"mat-label"),j.Ac(73,"searchDebounce"),j.Tb(),j.Ub(74,"input",6),j.bc("ngModelChange",function(e){return t.dataSourceSearchDebounce=e})("change",function(){return t.resetDataSource()}),j.Tb(),j.Tb(),j.Ub(75,"strong"),j.Ac(76,"loadTrigger"),j.Tb(),j.Ub(77,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.loadTriggerInitial=e})("change",function(){return t.resetDataSource()}),j.Ac(78,"Initial"),j.Tb(),j.Ub(79,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.loadTriggerFirstPanelOpen=e})("change",function(){return t.resetDataSource()}),j.Ac(80,"FirstPanelOpen"),j.Tb(),j.Ub(81,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.loadTriggerEveryPanelOpen=e})("change",function(){return t.resetDataSource()}),j.Ac(82,"EveryPanelOpen"),j.Tb(),j.Ub(83,"strong"),j.Ac(84,"sortBy"),j.Tb(),j.Ub(85,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.sortBySelected=e})("change",function(){return t.resetDataSource()}),j.Ac(86,"Selected"),j.Tb(),j.Ub(87,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.sortByComparer=e})("change",function(){return t.resetDataSource()}),j.Ac(88,"Comparer"),j.Tb(),j.Ub(89,"strong"),j.Ac(90,"sortCompare"),j.Tb(),j.Ub(91,"mat-checkbox",2),j.bc("ngModelChange",function(e){return t.reverseSort=e})("change",function(){return t.resetDataSource()}),j.Ac(92,"custom (reverse by id)"),j.Tb(),j.Tb(),j.Tb(),j.yc(93,pe,14,22,"mat-card",7),j.Ub(94,"mat-card",8),j.Ub(95,"strong"),j.Ac(96,"ngModel logs"),j.Tb(),j.Ub(97,"div"),j.Ac(98),j.gc(99,"json"),j.Tb(),j.Ub(100,"div"),j.Ac(101),j.Tb(),j.Tb(),j.Ub(102,"mat-card",8),j.Ub(103,"strong"),j.Ac(104,"FormControl logs"),j.Tb(),j.Ub(105,"div"),j.Ac(106),j.gc(107,"json"),j.Tb(),j.Ub(108,"div"),j.Ac(109),j.Tb(),j.Tb(),j.Pb(110,"app-select-with-multiselect"),j.Pb(111,"app-select-with-events-only"),j.Pb(112,"app-select-with-ng-model"),j.Pb(113,"app-select-with-selected-item-not-in-datasource"),j.Pb(114,"app-select-with-endless-loading-datasource"),j.Pb(115,"app-select-with-error-in-datasource"),j.Pb(116,"app-select-with-other-load-trigger"),j.Pb(117,"app-select-with-custom-select-service"),j.Pb(118,"app-select-with-custom-template"),j.Pb(119,"app-select-with-error-state-matcher")),2&e&&(j.Cb(6),j.lc("ngModel",t.multiple),j.Cb(2),j.lc("ngModel",t.clearable),j.Cb(2),j.lc("ngModel",t.disabled),j.Cb(2),j.lc("ngModel",t.required),j.Cb(4),j.lc("ngModel",t.panelClass),j.Cb(6),j.lc("ngModel",t.customTriggerTpl),j.Cb(2),j.lc("ngModel",t.customOptionTpl),j.Cb(8),j.lc("ngModel",t.dataSourceItems),j.Cb(1),j.lc("value","default"),j.Cb(2),j.lc("value","error"),j.Cb(2),j.lc("value","loading"),j.Cb(2),j.lc("value","empty"),j.Cb(4),j.lc("ngModel",t.itemsAsObservable),j.Cb(2),j.lc("ngModel",t.itemsAsFunction),j.Cb(5),j.lc("ngModel",t.dataSourceMode),j.Cb(1),j.lc("value","id"),j.Cb(2),j.lc("value","entity"),j.Cb(5),j.lc("ngModel",t.dataSourceIdKey),j.Cb(1),j.lc("value","id"),j.Cb(2),j.lc("value","strId"),j.Cb(5),j.lc("ngModel",t.dataSourceLabelKey),j.Cb(1),j.lc("value","labelA"),j.Cb(2),j.lc("value","labelB"),j.Cb(5),j.lc("ngModel",t.dataSourceSearchDebounce),j.Cb(3),j.lc("ngModel",t.loadTriggerInitial),j.Cb(2),j.lc("ngModel",t.loadTriggerFirstPanelOpen),j.Cb(2),j.lc("ngModel",t.loadTriggerEveryPanelOpen),j.Cb(4),j.lc("ngModel",t.sortBySelected),j.Cb(2),j.lc("ngModel",t.sortByComparer),j.Cb(4),j.lc("ngModel",t.reverseSort),j.Cb(2),j.lc("ngIf",t.visible),j.Cb(5),j.Cc("value: ",j.hc(99,35,t.ngModel),""),j.Cb(3),j.Cc("load count: ",t.ngModelLogs.loadCount,""),j.Cb(5),j.Cc("value: ",j.hc(107,37,t.form.value.ctrl),""),j.Cb(3),j.Cc("load count: ",t.formLogs.loadCount,""))},directives:[C.a,y.a,T.n,T.q,U.d,U.h,x.a,_.j,A.a,T.r,T.c,v.m,K,L,F,R,N,G,E,z,H,le,B.a,T.t,T.o,T.i,T.g,W.a,J.a],pipes:[v.g],styles:["\n      .app-select-demo__settings {\n        display: grid !important;\n        grid-auto-flow: column;\n        gap: 1em;\n\n        margin-bottom: 1em;\n      }\n      .app-select-demo__settings-box {\n        display: grid !important;\n        gap: 1em;\n        align-content: start;\n      }\n      .app-select-demo__panel .mat-option-text {\n        color: green;\n      }\n    "],encapsulation:2,changeDetection:0}),ge);l("jwL6");var Te,Ce=((Te=function e(){i(this,e)}).\u0275fac=function(e){return new(e||Te)},Te.\u0275mod=j.Mb({type:Te}),Te.\u0275inj=j.Lb({providers:[],imports:[[T.j,T.s,M.c.forRoot(M.b),v.c,U.f,S.c,y.b,C.e,A.b,w.d.forChild([{path:"",component:ve}])]]}),Te)}}])}();