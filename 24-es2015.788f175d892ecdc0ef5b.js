(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{O6GU:function(e,t,o){"use strict";o.r(t),o.d(t,"SelectDemoModule",function(){return te});var n=o("ofXK"),l=o("3Pt+"),a=o("Wp6s"),c=o("bSwM"),r=o("kmnG"),i=o("qFsG"),s=o("QibW"),b=o("tyNb"),u=o("voyI"),d=o("LRne"),h=o("5yfJ"),m=o("z6cu"),g=o("vkgz"),p=o("3E0/"),f=o("fXoL"),T=o("d3UM"),C=o("FKr1"),U=o("xSSo");let v=(()=>{class e{constructor(){this.showToggleAll=!0,this.items$=Object(d.a)(Array.from(Array(500).keys()).map(e=>({value:`id${e}`,label:`Item ${e}`}))),this.form=new l.h({select:new l.e})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-multiselect"]],decls:22,vars:8,consts:[[3,"ngModel","ngModelChange"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource","multiple","showToggleAll"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Multiselect"),f.Tb(),f.Ub(2,"div"),f.Ub(3,"mat-checkbox",0),f.bc("ngModelChange",function(e){return t.showToggleAll=e}),f.Ac(4,"show toggle all"),f.Tb(),f.Tb(),f.Ub(5,"span",1),f.Ub(6,"mat-form-field",2),f.Ub(7,"mat-label"),f.Ac(8,"select"),f.Tb(),f.Pb(9,"ps-select",3),f.Tb(),f.Tb(),f.Ac(10),f.gc(11,"json"),f.Pb(12,"br"),f.Ub(13,"ul"),f.Ub(14,"li"),f.Ac(15,"Multiple items should be selectable"),f.Tb(),f.Ub(16,"li"),f.Ac(17,"On mouseover the selected items should be shown in a tooltip"),f.Tb(),f.Ub(18,"li"),f.Ac(19,"When selecting a item, the dropdown should stay open and shouldnt reorder the items"),f.Tb(),f.Ub(20,"li"),f.Ac(21,"When closing and reopening the dropdown, all selected items should be at the top"),f.Tb(),f.Tb()),2&e&&(f.Cb(3),f.lc("ngModel",t.showToggleAll),f.Cb(2),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.items$)("multiple",!0)("showToggleAll",t.showToggleAll),f.Cb(1),f.Cc(" value: ",f.hc(11,6,t.form.value.select),""))},directives:[c.a,l.n,l.q,l.o,l.i,r.d,r.h,U.a,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{constructor(){this.items=Array.from(Array(50).keys()).map(e=>({value:`id${e}`,label:`Item ${e}`})),this.values=[]}onSelectionChange(e){this.values.push(e.value)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-events-only"]],decls:13,vars:4,consts:[[3,"dataSource","selectionChange"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Event output only (no form)"),f.Tb(),f.Ub(2,"mat-form-field"),f.Ub(3,"mat-label"),f.Ac(4,"selectionChange only"),f.Tb(),f.Ub(5,"ps-select",0),f.bc("selectionChange",function(e){return t.onSelectionChange(e)}),f.Tb(),f.Tb(),f.Ac(6),f.gc(7,"json"),f.Ub(8,"ul"),f.Ub(9,"li"),f.Ac(10,"Initialliy no event should be fired"),f.Tb(),f.Ub(11,"li"),f.Ac(12,"When changing the selection, the id of the selected item should be added to the events values above"),f.Tb(),f.Tb()),2&e&&(f.Cb(5),f.lc("dataSource",t.items),f.Cb(1),f.Cc(" change event values: ",f.hc(7,2,t.values)," "))},directives:[r.d,r.h,U.a],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{constructor(e){this.cd=e,this.items=Array.from(Array(50).keys()).map(e=>({value:`id${e}`,label:`Item ${e}`})),this.ngModelValue="id11"}random(){const e=Math.floor(Math.random()*this.items.length);this.ngModelValue=this.items[e].value,this.cd.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(f.Ob(f.h))},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-ng-model"]],decls:16,vars:5,consts:[[3,"click"],[3,"ngModel","dataSource","ngModelChange"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"ngModel"),f.Tb(),f.Ub(2,"div"),f.Ub(3,"button",0),f.bc("click",function(){return t.random()}),f.Ac(4,"select random value"),f.Tb(),f.Tb(),f.Ub(5,"mat-form-field"),f.Ub(6,"mat-label"),f.Ac(7,"ngModel bound"),f.Tb(),f.Ub(8,"ps-select",1),f.bc("ngModelChange",function(e){return t.ngModelValue=e}),f.Tb(),f.Tb(),f.Ac(9),f.gc(10,"json"),f.Ub(11,"ul"),f.Ub(12,"li"),f.Ac(13,"'Item 11'/'id11' should be initially selected"),f.Tb(),f.Ub(14,"li"),f.Ac(15,"Changing the selection should update the selected value"),f.Tb(),f.Tb()),2&e&&(f.Cb(8),f.lc("ngModel",t.ngModelValue)("dataSource",t.items),f.Cb(1),f.Cc(" value: ",f.hc(10,3,t.ngModelValue)," "))},directives:[r.d,r.h,U.a,l.n,l.q],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{constructor(){this.items$=Object(d.a)(Array.from(Array(50).keys()).map(e=>({value:`id${e}`,label:`Item ${e}`}))),this.form=new l.h({select:new l.e("idx")})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-selected-item-not-in-datasource"]],decls:21,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Initially selected Item is not in DataSource"),f.Tb(),f.Ub(2,"span",0),f.Ub(3,"mat-form-field",1),f.Ub(4,"mat-label"),f.Ac(5,"select"),f.Tb(),f.Pb(6,"ps-select",2),f.Tb(),f.Tb(),f.Ac(7),f.gc(8,"json"),f.Pb(9,"br"),f.Ub(10,"ul"),f.Ub(11,"li"),f.Ac(12,"Initially '??? (ID: idx)' should be selected"),f.Tb(),f.Ub(13,"li"),f.Ac(14,"When first opening the dropdown '??? (ID: idx)' should be the first item and marked as selected"),f.Tb(),f.Ub(15,"li"),f.Ac(16,"the filter should work"),f.Tb(),f.Ub(17,"li"),f.Ac(18," When filtering for 'item' the '??? (ID: idx)' entry should not be visible in the dropdown. When closing the dropdown without clearing the filter, '??? (ID: idx)' should still be thr selected item in the selectbox and no flickering should occur. "),f.Tb(),f.Ub(19,"li"),f.Ac(20,"When selecting a different item, '??? (ID: idx)' should vanish from the selectable items"),f.Tb(),f.Tb()),2&e&&(f.Cb(2),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.items$),f.Cb(1),f.Cc(" value: ",f.hc(8,3,t.form.value.select),""))},directives:[l.o,l.i,r.d,r.h,U.a,l.n,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{constructor(){this.dataSource=new u.a({mode:"id",labelKey:"a",idKey:"b",items:()=>h.a}),this.form=new l.h({select:new l.e("idx")})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-endless-loading-datasource"]],decls:17,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Endless Loading DataSource"),f.Tb(),f.Ub(2,"span",0),f.Ub(3,"mat-form-field",1),f.Ub(4,"mat-label"),f.Ac(5,"select"),f.Tb(),f.Pb(6,"ps-select",2),f.Tb(),f.Tb(),f.Ac(7),f.gc(8,"json"),f.Pb(9,"br"),f.Ub(10,"ul"),f.Ub(11,"li"),f.Ac(12,"Initially '??? (ID: idx)' should be selected"),f.Tb(),f.Ub(13,"li"),f.Ac(14,"When opening the dropdown, there sould be a loading indicator"),f.Tb(),f.Ub(15,"li"),f.Ac(16,"the filter should work"),f.Tb(),f.Tb()),2&e&&(f.Cb(2),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.dataSource),f.Cb(1),f.Cc(" value: ",f.hc(8,3,t.form.value.select),""))},directives:[l.o,l.i,r.d,r.h,U.a,l.n,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.dataSource=new u.a({mode:"id",labelKey:"a",idKey:"b",items:()=>Object(m.a)("Failed to load items")}),this.form=new l.h({select:new l.e("idx")})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-error-in-datasource"]],decls:15,vars:5,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Error while loading items"),f.Tb(),f.Ub(2,"span",0),f.Ub(3,"mat-form-field",1),f.Ub(4,"mat-label"),f.Ac(5,"select"),f.Tb(),f.Pb(6,"ps-select",2),f.Tb(),f.Tb(),f.Ac(7),f.gc(8,"json"),f.Pb(9,"br"),f.Ub(10,"ul"),f.Ub(11,"li"),f.Ac(12,"Initially '??? (ID: idx)' should be selected"),f.Tb(),f.Ub(13,"li"),f.Ac(14,"When opening the dropdown, there sould be a red item with 'Failed to load items' that is not selectable"),f.Tb(),f.Tb()),2&e&&(f.Cb(2),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.dataSource),f.Cb(1),f.Cc(" value: ",f.hc(8,3,t.form.value.select),""))},directives:[l.o,l.i,r.d,r.h,U.a,l.n,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{constructor(e){this.cd=e,this.currentLoadTrigger="initial",this.loadCount=0,this.form=new l.h({select:new l.e("idx")}),this.onTriggerChanged(this.currentLoadTrigger)}onTriggerChanged(e){this.loadCount=0,this.dataSource=this.createDataSource("initial"===e?1:"firstopen"===e?2:4),this.cd.markForCheck()}createDataSource(e){return new u.a({mode:"id",idKey:"value",labelKey:"label",items:()=>{this.loadCount++;const e=Math.random(),t=Math.random();return Object(d.a)([{value:e,label:"item "+e},{value:t,label:"item "+t}]).pipe(Object(p.a)(1e3))},loadTrigger:e})}}return e.\u0275fac=function(t){return new(t||e)(f.Ob(f.h))},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-other-load-trigger"]],decls:30,vars:8,consts:[[3,"ngModel","ngModelChange","change"],["value","initial"],["value","firstopen"],["value","everyopen"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Custom load trigger with 1 second loading delay"),f.Tb(),f.Ub(2,"div"),f.Ub(3,"mat-radio-group",0),f.bc("ngModelChange",function(e){return t.currentLoadTrigger=e})("change",function(e){return t.onTriggerChanged(e.value)}),f.Ub(4,"mat-radio-button",1),f.Ac(5,"initial"),f.Tb(),f.Ub(6,"mat-radio-button",2),f.Ac(7,"first panel open"),f.Tb(),f.Ub(8,"mat-radio-button",3),f.Ac(9,"every panel open"),f.Tb(),f.Tb(),f.Tb(),f.Ub(10,"span",4),f.Ub(11,"mat-form-field",5),f.Ub(12,"mat-label"),f.Ac(13,"select"),f.Tb(),f.Pb(14,"ps-select",6),f.Tb(),f.Tb(),f.Ac(15),f.gc(16,"json"),f.Pb(17,"br"),f.Ac(18),f.Pb(19,"br"),f.Ac(20),f.Ub(21,"ul"),f.Ub(22,"li"),f.Ac(23,"Initially '??? (ID: idx)' should be selected and load trigger should be 'initial' with count 1"),f.Tb(),f.Ub(24,"li"),f.Ac(25,"For load trigger 'first panel open' count should be 0, increase to 1 on first open. It should never go beyond 1"),f.Tb(),f.Ub(26,"li"),f.Ac(27,"For load trigger 'every panel open' count should be 0 and increase by 1 on every open"),f.Tb(),f.Ub(28,"li"),f.Ac(29,"When switching the load trigger, the selected value shouldn't vanish"),f.Tb(),f.Tb()),2&e&&(f.Cb(3),f.lc("ngModel",t.currentLoadTrigger),f.Cb(7),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.dataSource),f.Cb(1),f.Cc(" value: ",f.hc(16,6,t.form.value.select),""),f.Cb(3),f.Cc(" current load trigger: ",t.currentLoadTrigger,""),f.Cb(2),f.Cc(" load trigger count: ",t.loadCount," "))},directives:[s.b,l.n,l.q,s.a,l.o,l.i,r.d,r.h,U.a,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})();const k=function(e){return{mode:"entity",idKey:"Id",labelKey:"Name",items:e}},D=function(e){return{mode:"id",idKey:"Id",labelKey:"Name",items:e}};let P=(()=>{class e extends u.b{constructor(){super()}createDataSource(e,t){return"string"==typeof e&&(e=function(e){if(!/^(id)?lookup:/.test(e))throw new Error(e);const t=e.split(":")[1],o=Object(d.a)(Array.from(Array(50).keys()).map(e=>({Id:`${t}${e}`,Name:`${t} ${e}`})));return{mode:e.startsWith("id")?"id":"entity",idKey:"Id",labelKey:"Name",items:o,loadTrigger:4}}(e)),super.createDataSource(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=f.Kb({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e{constructor(){this.items$=Object(d.a)(Array.from(Array(50).keys()).map(e=>({Id:`id${e}`,Name:`Item ${e}`}))),this.form=new l.h({lookup_entity:new l.e({Id:"country1",Name:"not visible after first open"}),lookup_id:new l.e("country1"),options_entity:new l.e({Id:"id1",Name:"not visible in select"}),options_id:new l.e("id1")})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-custom-select-service"]],features:[f.Bb([{provide:u.d,useClass:P}])],decls:40,vars:21,consts:[[3,"formGroup"],[2,"display","inline-block"],["formControlName","lookup_entity",3,"dataSource"],["formControlName","lookup_id",3,"dataSource"],["formControlName","options_entity",3,"dataSource"],["formControlName","options_id",3,"dataSource"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Custom PsSelectService"),f.Tb(),f.Ub(2,"div",0),f.Ub(3,"mat-form-field",1),f.Ub(4,"mat-label"),f.Ac(5,"lookup (mode: entity)"),f.Tb(),f.Pb(6,"ps-select",2),f.Tb(),f.Ac(7),f.gc(8,"json"),f.Pb(9,"br"),f.Ub(10,"mat-form-field",1),f.Ub(11,"mat-label"),f.Ac(12,"lookup (mode: id)"),f.Tb(),f.Pb(13,"ps-select",3),f.Tb(),f.Ac(14),f.gc(15,"json"),f.Pb(16,"br"),f.Ub(17,"mat-form-field",1),f.Ub(18,"mat-label"),f.Ac(19,"options (mode: entity)"),f.Tb(),f.Pb(20,"ps-select",4),f.Tb(),f.Ac(21),f.gc(22,"json"),f.Pb(23,"br"),f.Ub(24,"mat-form-field",1),f.Ub(25,"mat-label"),f.Ac(26,"options (mode: id)"),f.Tb(),f.Pb(27,"ps-select",5),f.Tb(),f.Ac(28),f.gc(29,"json"),f.Pb(30,"br"),f.Tb(),f.Ub(31,"ul"),f.Ub(32,"li"),f.Ac(33,"The initially visible selections should be 'not visible after first open', '??? (ID: country1)', 'Item 1' and 'Item 1'"),f.Tb(),f.Ub(34,"li"),f.Ac(35,"After first opening the lookup dropdowns (when the items are loaded) the label should update to 'country 1'"),f.Tb(),f.Ub(36,"li"),f.Ac(37,"For mode 'entity' the whole object should be in the form value"),f.Tb(),f.Ub(38,"li"),f.Ac(39,"For mode 'id' only the id should be in the form value"),f.Tb(),f.Tb()),2&e&&(f.Cb(2),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource","lookup:country"),f.Cb(1),f.Cc(" value: ",f.hc(8,9,t.form.value.lookup_entity),""),f.Cb(6),f.lc("dataSource","idlookup:country"),f.Cb(1),f.Cc(" value: ",f.hc(15,11,t.form.value.lookup_id),""),f.Cb(6),f.lc("dataSource",f.nc(17,k,t.items$)),f.Cb(1),f.Cc(" value: ",f.hc(22,13,t.form.value.options_entity),""),f.Cb(6),f.lc("dataSource",f.nc(19,D,t.items$)),f.Cb(1),f.Cc(" value: ",f.hc(29,15,t.form.value.options_id),""))},directives:[l.o,l.i,r.d,r.h,U.a,l.n,l.g],pipes:[n.g],encapsulation:2,changeDetection:0}),e})();var O=o("nBXf"),$=o("uJZY");function j(e,t){if(1&e&&(f.Sb(0),f.Ac(1," color: "),f.Ub(2,"span",3),f.Ac(3),f.Tb(),f.Rb()),2&e){const e=t.$implicit;f.Cb(2),f.vc("color",e.value),f.Cb(1),f.Bc(e.viewValue)}}function _(e,t){if(1&e&&(f.Sb(0),f.Ub(1,"div"),f.Ac(2,"color:"),f.Tb(),f.Ub(3,"span",3),f.Ac(4),f.Tb(),f.Rb()),2&e){const e=t.$implicit;f.Cb(3),f.vc("color",e.value.color)("font-size",e.value.size),f.Cb(1),f.Bc(e.label)}}let K=(()=>{class e{constructor(){this.items=[{value:{color:"red",size:"3em"},label:"Red"},{value:{color:"green",size:"2em"},label:"Green"},{value:{color:"blue",size:"1.5em"},label:"Blue"}],this.ngModelValue=null,this.panelNgClass={"app-select-with-custom-template__custom-panel":!0}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-custom-template"]],decls:13,vars:6,consts:[[3,"ngModel","dataSource","panelClass","ngModelChange"],[4,"psSelectTriggerTemplate"],[4,"psSelectOptionTemplate"],[1,"asdf"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Custom options template"),f.Tb(),f.Ub(2,"mat-form-field"),f.Ub(3,"mat-label"),f.Ac(4,"select"),f.Tb(),f.Ub(5,"ps-select",0),f.bc("ngModelChange",function(e){return t.ngModelValue=e}),f.yc(6,j,4,3,"ng-container",1),f.yc(7,_,5,5,"ng-container",2),f.Tb(),f.Tb(),f.Ac(8),f.gc(9,"json"),f.Ub(10,"ul"),f.Ub(11,"li"),f.Ac(12,"The selectable items should be in the color of their name"),f.Tb(),f.Tb()),2&e&&(f.Cb(5),f.lc("ngModel",t.ngModelValue)("dataSource",t.items)("panelClass",t.panelNgClass),f.Cb(3),f.Cc(" value: ",f.hc(9,4,t.ngModelValue)," "))},directives:[r.d,r.h,U.a,l.n,l.q,O.a,$.a],pipes:[n.g],styles:["\n      .app-select-with-custom-template__custom-panel.mat-select-panel .mat-option {\n        height: auto;\n        min-height: 3em;\n        line-height: 1.5em;\n        padding-top: 3px;\n        padding-bottom: 3px;\n      }\n    "],encapsulation:2,changeDetection:0}),e})();var B=o("JX91"),L=o("7o/Q");class F{constructor(e,t){this.bufferSize=e,this.startBufferEvery=t,this.subscriberClass=t&&e!==t?G:N}call(e,t){return t.subscribe(new this.subscriberClass(e,this.bufferSize,this.startBufferEvery))}}class N extends L.a{constructor(e,t){super(e),this.bufferSize=t,this.buffer=[]}_next(e){const t=this.buffer;t.push(e),t.length==this.bufferSize&&(this.destination.next(t),this.buffer=[])}_complete(){const e=this.buffer;e.length>0&&this.destination.next(e),super._complete()}}class G extends L.a{constructor(e,t,o){super(e),this.bufferSize=t,this.startBufferEvery=o,this.buffers=[],this.count=0}_next(e){const{bufferSize:t,startBufferEvery:o,buffers:n,count:l}=this;this.count++,l%o==0&&n.push([]);for(let a=n.length;a--;){const o=n[a];o.push(e),o.length===t&&(n.splice(a,1),this.destination.next(o))}}_complete(){const{buffers:e,destination:t}=this;for(;e.length>0;){let o=e.shift();o.length>0&&t.next(o)}super._complete()}}class q{isErrorState(e,t){return!(!e||!e.invalid)}}let E=(()=>{class e{constructor(){this.items$=Object(d.a)(Array.from(Array(10).keys()).map(e=>({value:`id${e}`,label:`Item ${e}`}))),this.form=new l.h({select:new l.e(null,[l.u.required])}),this.errorStateMatcher=new q,this.lastFiveValues$=this.form.get("select").valueChanges.pipe(Object(B.a)(null,null,null,null,null),function(e,t=null){return function(o){return o.lift(new F(e,t))}}(5,1)),this.form.disable()}toggleDiabled(){this.form.disabled?this.form.enable():this.form.disable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-with-error-state-matcher"]],decls:22,vars:9,consts:[[3,"click"],[3,"formGroup"],[2,"display","inline-block"],["formControlName","select",3,"dataSource","errorStateMatcher"]],template:function(e,t){1&e&&(f.Ub(0,"h2"),f.Ac(1,"Disabled form with custom error state matcher"),f.Tb(),f.Ub(2,"div"),f.Ub(3,"button",0),f.bc("click",function(){return t.toggleDiabled()}),f.Ac(4,"toggle disabled"),f.Tb(),f.Tb(),f.Ub(5,"span",1),f.Ub(6,"mat-form-field",2),f.Ub(7,"mat-label"),f.Ac(8,"select"),f.Tb(),f.Pb(9,"ps-select",3),f.Tb(),f.Tb(),f.Ac(10),f.gc(11,"json"),f.Pb(12,"br"),f.Ac(13),f.gc(14,"async"),f.Ub(15,"ul"),f.Ub(16,"li"),f.Ac(17,"Should be disabled initially"),f.Tb(),f.Ub(18,"li"),f.Ac(19,"Should be invalid/red on enabling"),f.Tb(),f.Ub(20,"li"),f.Ac(21,"Should be valid/grey when disabling (without choosing value)"),f.Tb(),f.Tb()),2&e&&(f.Cb(5),f.lc("formGroup",t.form),f.Cb(4),f.lc("dataSource",t.items$)("errorStateMatcher",t.errorStateMatcher),f.Cb(1),f.Cc(" value: ",f.hc(11,5,t.form.value.select),""),f.Cb(3),f.Cc(" last 5 values: ",f.hc(14,7,t.lastFiveValues$)," "))},directives:[l.o,l.i,r.d,r.h,U.a,l.n,l.g],pipes:[n.g,n.b],encapsulation:2,changeDetection:0}),e})();function V(e,t){if(1&e&&(f.Sb(0),f.Ac(1),f.gc(2,"json"),f.Rb()),2&e){const e=t.$implicit;f.Cb(1),f.Cc(" ",f.hc(2,1,e)," ")}}function z(e,t){1&e&&(f.Sb(0),f.yc(1,V,3,3,"ng-container",14),f.Rb())}function R(e,t){if(1&e&&(f.Sb(0),f.Ac(1),f.gc(2,"json"),f.Rb()),2&e){const e=t.$implicit;f.Cb(1),f.Cc(" ",f.hc(2,1,e)," ")}}function W(e,t){1&e&&(f.Sb(0),f.yc(1,R,3,3,"ng-container",15),f.Rb())}function J(e,t){if(1&e&&(f.Sb(0),f.Ac(1),f.gc(2,"json"),f.Rb()),2&e){const e=t.$implicit;f.Cb(1),f.Cc(" ",f.hc(2,1,e)," ")}}function X(e,t){1&e&&(f.Sb(0),f.yc(1,J,3,3,"ng-container",14),f.Rb())}function Q(e,t){if(1&e&&(f.Sb(0),f.Ac(1),f.gc(2,"json"),f.Rb()),2&e){const e=t.$implicit;f.Cb(1),f.Cc(" ",f.hc(2,1,e)," ")}}function Y(e,t){1&e&&(f.Sb(0),f.yc(1,Q,3,3,"ng-container",15),f.Rb())}const Z=function(e){return{"app-select-demo__panel":e}};function H(e,t){if(1&e){const e=f.Vb();f.Ub(0,"mat-card",8),f.Ub(1,"mat-form-field",9),f.Ub(2,"mat-label"),f.Ac(3,"ngModel"),f.Tb(),f.Ub(4,"ps-select",10),f.bc("ngModelChange",function(t){return f.sc(e),f.fc().ngModel=t}),f.yc(5,z,2,0,"ng-container",11),f.yc(6,W,2,0,"ng-container",11),f.Tb(),f.Tb(),f.Ub(7,"div",12),f.Ub(8,"mat-form-field",9),f.Ub(9,"mat-label"),f.Ac(10,"FormControl"),f.Tb(),f.Ub(11,"ps-select",13),f.yc(12,X,2,0,"ng-container",11),f.yc(13,Y,2,0,"ng-container",11),f.Tb(),f.Tb(),f.Tb(),f.Tb()}if(2&e){const e=f.fc();f.Cb(4),f.lc("ngModel",e.ngModel)("dataSource",e.ngModelDataSource)("multiple",e.multiple)("clearable",e.clearable)("disabled",e.disabled)("required",e.required)("panelClass",f.nc(18,Z,e.panelClass)),f.Cb(1),f.lc("ngIf",e.customTriggerTpl),f.Cb(1),f.lc("ngIf",e.customOptionTpl),f.Cb(1),f.lc("formGroup",e.form),f.Cb(4),f.lc("dataSource",e.formDataSource)("multiple",e.multiple)("clearable",e.clearable)("disabled",e.disabled)("required",e.required)("panelClass",f.nc(20,Z,e.panelClass)),f.Cb(1),f.lc("ngIf",e.customTriggerTpl),f.Cb(1),f.lc("ngIf",e.customOptionTpl)}}let ee=(()=>{class e{constructor(e){this.cd=e,this.visible=!0,this.ngModel=null,this.form=new l.h({ctrl:new l.e(null)}),this.items=Array.from(Array(500).keys()).map(e=>({id:e,strId:`id${e}`,labelA:`Label A ${e}`,labelB:`Label B ${e}`,disabled:e%5==4})),this.unknowIitem={id:-1,strId:"id-1",labelA:"Label A -1",labelB:"Label B -1"},this.multiple=!1,this.clearable=!0,this.disabled=!1,this.required=!1,this.panelClass=!1,this.customTriggerTpl=!1,this.customOptionTpl=!1,this.dataSourceItems="default",this.dataSourceMode="id",this.dataSourceIdKey="id",this.dataSourceLabelKey="labelA",this.dataSourceSearchDebounce=300,this.loadTriggerInitial=!0,this.loadTriggerFirstPanelOpen=!1,this.loadTriggerEveryPanelOpen=!1,this.sortBySelected=!0,this.sortByComparer=!0,this.reverseSort=!1,this.itemsAsObservable=!1,this.itemsAsFunction=!1,this.ngModelLogs={loadCount:0},this.formLogs={loadCount:0}}ngOnInit(){this.resetDataSource()}createDataSource(e){const t=new u.a({mode:this.dataSourceMode,idKey:this.dataSourceIdKey,labelKey:this.dataSourceLabelKey,disabledKey:"disabled",items:this.getDataSourceItems(e),searchDebounce:this.dataSourceSearchDebounce,loadTrigger:this.getPsSelectLoadTrigger(),sortBy:this.getPsSelectSortBy()});return this.reverseSort&&(t.sortCompare=(e,t)=>t.entity.id-e.entity.id),t}getPsSelectLoadTrigger(){return(this.loadTriggerInitial&&1)|(this.loadTriggerFirstPanelOpen&&2)|(this.loadTriggerEveryPanelOpen&&4)}getPsSelectSortBy(){return(this.sortBySelected&&1)|(this.sortByComparer&&2)}getDataSourceItems(e){switch(e.loadCount=0,this.dataSourceItems){case"default":let t=this.items;if(this.itemsAsObservable&&(t=Object(d.a)(t).pipe(Object(g.a)(()=>{++e.loadCount}),Object(p.a)(1e3))),this.itemsAsFunction){const o=t;t=()=>(++e.loadCount,o)}return t;case"empty":return[];case"loading":return h.a;case"error":return Object(m.a)(new Error("loading failed"))}}resetDataSource(){this.ngModelDataSource=this.createDataSource(this.ngModelLogs),this.formDataSource=this.createDataSource(this.formLogs)}patchUnknownItem(){const e=this.multiple?[this.unknowIitem]:this.unknowIitem;this.ngModel=e,this.form.patchValue({ctrl:e})}disabledChanged(){this.disabled?this.form.disable():this.form.enable()}recreate(){this.visible=!1,setTimeout(()=>{this.resetDataSource(),this.visible=!0,this.cd.markForCheck()},0)}}return e.\u0275fac=function(t){return new(t||e)(f.Ob(f.h))},e.\u0275cmp=f.Ib({type:e,selectors:[["app-select-demo"]],decls:120,vars:39,consts:[[1,"app-select-demo__settings"],[1,"app-select-demo__settings-box"],[3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value"],["matInput","","type","number",3,"ngModel","ngModelChange","change"],["style","margin-bottom: 1em;",4,"ngIf"],[2,"margin-bottom","1em"],[2,"width","100%"],[3,"ngModel","dataSource","multiple","clearable","disabled","required","panelClass","ngModelChange"],[4,"ngIf"],[3,"formGroup"],["formControlName","ctrl",3,"dataSource","multiple","clearable","disabled","required","panelClass"],[4,"psSelectTriggerTemplate"],[4,"psSelectOptionTemplate"]],template:function(e,t){1&e&&(f.Ub(0,"div",0),f.Ub(1,"mat-card",1),f.Ub(2,"strong"),f.Ac(3,"ps-select"),f.Tb(),f.Ub(4,"span"),f.Ac(5,"[dataSource] = new DefaultPsSelectDataSource(...)"),f.Tb(),f.Ub(6,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.multiple=e})("change",function(){return t.recreate()}),f.Ac(7,"[multiple]"),f.Tb(),f.Ub(8,"mat-checkbox",3),f.bc("ngModelChange",function(e){return t.clearable=e}),f.Ac(9,"[clearable]"),f.Tb(),f.Ub(10,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.disabled=e})("change",function(){return t.disabledChanged()}),f.Ac(11,"[disabled]"),f.Tb(),f.Ub(12,"mat-checkbox",3),f.bc("ngModelChange",function(e){return t.required=e}),f.Ac(13,"[required]"),f.Tb(),f.Ub(14,"span"),f.Ac(15,"[errorStateMatcher]"),f.Tb(),f.Ub(16,"mat-checkbox",3),f.bc("ngModelChange",function(e){return t.panelClass=e}),f.Ac(17,"[panelClass] (color: green)"),f.Tb(),f.Ub(18,"div"),f.Ac(19,"(openedChange) $event = boolean"),f.Tb(),f.Ub(20,"div"),f.Ac(21,"(selectionChange) $event = MatSelectChange"),f.Tb(),f.Ub(22,"mat-checkbox",3),f.bc("ngModelChange",function(e){return t.customTriggerTpl=e}),f.Ac(23,'*psSelectTriggerTemplate="let item"'),f.Tb(),f.Ub(24,"mat-checkbox",3),f.bc("ngModelChange",function(e){return t.customOptionTpl=e}),f.Ac(25,'*psSelectOptionTemplate="let item"'),f.Tb(),f.Tb(),f.Ub(26,"mat-card",1),f.Ub(27,"strong"),f.Ac(28,"DefaultPsSelectDataSource"),f.Tb(),f.Ub(29,"mat-form-field"),f.Ub(30,"mat-label"),f.Ac(31,"items"),f.Tb(),f.Ub(32,"mat-select",4),f.bc("ngModelChange",function(e){return t.dataSourceItems=e})("selectionChange",function(){return t.resetDataSource()}),f.Ub(33,"mat-option",5),f.Ac(34,"500 items"),f.Tb(),f.Ub(35,"mat-option",5),f.Ac(36,"error while loading"),f.Tb(),f.Ub(37,"mat-option",5),f.Ac(38,"endless loading"),f.Tb(),f.Ub(39,"mat-option",5),f.Ac(40,"empty result"),f.Tb(),f.Tb(),f.Tb(),f.Ub(41,"strong"),f.Ac(42,"items array"),f.Tb(),f.Ub(43,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.itemsAsObservable=e})("change",function(){return t.resetDataSource()}),f.Ac(44,"wrapped in observable"),f.Tb(),f.Ub(45,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.itemsAsFunction=e})("change",function(){return t.resetDataSource()}),f.Ac(46,"result of load function"),f.Tb(),f.Ub(47,"mat-form-field"),f.Ub(48,"mat-label"),f.Ac(49,"mode"),f.Tb(),f.Ub(50,"mat-select",4),f.bc("ngModelChange",function(e){return t.dataSourceMode=e})("selectionChange",function(){return t.resetDataSource()}),f.Ub(51,"mat-option",5),f.Ac(52,"id"),f.Tb(),f.Ub(53,"mat-option",5),f.Ac(54,"entity"),f.Tb(),f.Tb(),f.Tb(),f.Ub(55,"mat-form-field"),f.Ub(56,"mat-label"),f.Ac(57,"idKey"),f.Tb(),f.Ub(58,"mat-select",4),f.bc("ngModelChange",function(e){return t.dataSourceIdKey=e})("selectionChange",function(){return t.resetDataSource()}),f.Ub(59,"mat-option",5),f.Ac(60,"id property"),f.Tb(),f.Ub(61,"mat-option",5),f.Ac(62,"strId property"),f.Tb(),f.Tb(),f.Tb(),f.Ub(63,"mat-form-field"),f.Ub(64,"mat-label"),f.Ac(65,"labelKey"),f.Tb(),f.Ub(66,"mat-select",4),f.bc("ngModelChange",function(e){return t.dataSourceLabelKey=e})("selectionChange",function(){return t.resetDataSource()}),f.Ub(67,"mat-option",5),f.Ac(68,"labelA property"),f.Tb(),f.Ub(69,"mat-option",5),f.Ac(70,"labelB property"),f.Tb(),f.Tb(),f.Tb(),f.Ub(71,"mat-form-field"),f.Ub(72,"mat-label"),f.Ac(73,"searchDebounce"),f.Tb(),f.Ub(74,"input",6),f.bc("ngModelChange",function(e){return t.dataSourceSearchDebounce=e})("change",function(){return t.resetDataSource()}),f.Tb(),f.Tb(),f.Ub(75,"strong"),f.Ac(76,"loadTrigger"),f.Tb(),f.Ub(77,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.loadTriggerInitial=e})("change",function(){return t.resetDataSource()}),f.Ac(78,"Initial"),f.Tb(),f.Ub(79,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.loadTriggerFirstPanelOpen=e})("change",function(){return t.resetDataSource()}),f.Ac(80,"FirstPanelOpen"),f.Tb(),f.Ub(81,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.loadTriggerEveryPanelOpen=e})("change",function(){return t.resetDataSource()}),f.Ac(82,"EveryPanelOpen"),f.Tb(),f.Ub(83,"strong"),f.Ac(84,"sortBy"),f.Tb(),f.Ub(85,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.sortBySelected=e})("change",function(){return t.resetDataSource()}),f.Ac(86,"Selected"),f.Tb(),f.Ub(87,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.sortByComparer=e})("change",function(){return t.resetDataSource()}),f.Ac(88,"Comparer"),f.Tb(),f.Ub(89,"strong"),f.Ac(90,"sortCompare"),f.Tb(),f.Ub(91,"mat-checkbox",2),f.bc("ngModelChange",function(e){return t.reverseSort=e})("change",function(){return t.resetDataSource()}),f.Ac(92,"custom (reverse by id)"),f.Tb(),f.Tb(),f.Tb(),f.yc(93,H,14,22,"mat-card",7),f.Ub(94,"mat-card",8),f.Ub(95,"strong"),f.Ac(96,"ngModel logs"),f.Tb(),f.Ub(97,"div"),f.Ac(98),f.gc(99,"json"),f.Tb(),f.Ub(100,"div"),f.Ac(101),f.Tb(),f.Tb(),f.Ub(102,"mat-card",8),f.Ub(103,"strong"),f.Ac(104,"FormControl logs"),f.Tb(),f.Ub(105,"div"),f.Ac(106),f.gc(107,"json"),f.Tb(),f.Ub(108,"div"),f.Ac(109),f.Tb(),f.Tb(),f.Pb(110,"app-select-with-multiselect"),f.Pb(111,"app-select-with-events-only"),f.Pb(112,"app-select-with-ng-model"),f.Pb(113,"app-select-with-selected-item-not-in-datasource"),f.Pb(114,"app-select-with-endless-loading-datasource"),f.Pb(115,"app-select-with-error-in-datasource"),f.Pb(116,"app-select-with-other-load-trigger"),f.Pb(117,"app-select-with-custom-select-service"),f.Pb(118,"app-select-with-custom-template"),f.Pb(119,"app-select-with-error-state-matcher")),2&e&&(f.Cb(6),f.lc("ngModel",t.multiple),f.Cb(2),f.lc("ngModel",t.clearable),f.Cb(2),f.lc("ngModel",t.disabled),f.Cb(2),f.lc("ngModel",t.required),f.Cb(4),f.lc("ngModel",t.panelClass),f.Cb(6),f.lc("ngModel",t.customTriggerTpl),f.Cb(2),f.lc("ngModel",t.customOptionTpl),f.Cb(8),f.lc("ngModel",t.dataSourceItems),f.Cb(1),f.lc("value","default"),f.Cb(2),f.lc("value","error"),f.Cb(2),f.lc("value","loading"),f.Cb(2),f.lc("value","empty"),f.Cb(4),f.lc("ngModel",t.itemsAsObservable),f.Cb(2),f.lc("ngModel",t.itemsAsFunction),f.Cb(5),f.lc("ngModel",t.dataSourceMode),f.Cb(1),f.lc("value","id"),f.Cb(2),f.lc("value","entity"),f.Cb(5),f.lc("ngModel",t.dataSourceIdKey),f.Cb(1),f.lc("value","id"),f.Cb(2),f.lc("value","strId"),f.Cb(5),f.lc("ngModel",t.dataSourceLabelKey),f.Cb(1),f.lc("value","labelA"),f.Cb(2),f.lc("value","labelB"),f.Cb(5),f.lc("ngModel",t.dataSourceSearchDebounce),f.Cb(3),f.lc("ngModel",t.loadTriggerInitial),f.Cb(2),f.lc("ngModel",t.loadTriggerFirstPanelOpen),f.Cb(2),f.lc("ngModel",t.loadTriggerEveryPanelOpen),f.Cb(4),f.lc("ngModel",t.sortBySelected),f.Cb(2),f.lc("ngModel",t.sortByComparer),f.Cb(4),f.lc("ngModel",t.reverseSort),f.Cb(2),f.lc("ngIf",t.visible),f.Cb(5),f.Cc("value: ",f.hc(99,35,t.ngModel),""),f.Cb(3),f.Cc("load count: ",t.ngModelLogs.loadCount,""),f.Cb(5),f.Cc("value: ",f.hc(107,37,t.form.value.ctrl),""),f.Cb(3),f.Cc("load count: ",t.formLogs.loadCount,""))},directives:[a.a,c.a,l.n,l.q,r.d,r.h,T.a,C.j,i.a,l.r,l.c,n.m,v,A,y,S,w,M,I,x,K,E,U.a,l.t,l.o,l.i,l.g,O.a,$.a],pipes:[n.g],styles:["\n      .app-select-demo__settings {\n        display: grid !important;\n        grid-auto-flow: column;\n        gap: 1em;\n\n        margin-bottom: 1em;\n      }\n      .app-select-demo__settings-box {\n        display: grid !important;\n        gap: 1em;\n        align-content: start;\n      }\n      .app-select-demo__panel .mat-option-text {\n        color: green;\n      }\n    "],encapsulation:2,changeDetection:0}),e})();o("jwL6");let te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.Mb({type:e}),e.\u0275inj=f.Lb({providers:[],imports:[[l.j,l.s,u.c.forRoot(u.b),n.c,r.f,s.c,c.b,a.e,i.b,b.d.forChild([{path:"",component:ee}])]]}),e})()}}]);