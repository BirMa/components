(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+AkL":function(t,e,i){"use strict";i.r(e),i.d(e,"CustomErrorStateMatcher",(function(){return G})),i.d(e,"FormFieldDemoModule",(function(){return X}));var r=i("2kYt"),a=i("nIj0"),n=i("PBFl"),s=i("+Tre"),l=i("mFH5"),o=i("29Wa"),c=i("bFHC"),h=i("Cd2c"),b=i("F1o0"),d=i("R7+U"),m=i("EM62"),u=i("5XID"),p=i("fAiE"),g=i("5lCh"),v=i("cZZj"),f=i("bwdy"),_=i("sg/T"),x=i("E5oP");const k=["sliderWrapper"],y=Object(v.f)({passive:!1}),R={provide:a.l,useExisting:Object(m.U)(()=>z),multi:!0};class T{}class w{constructor(t){this._elementRef=t}}const Q=Object(l.y)(Object(l.t)(Object(l.v)(w),"accent"));let z=(()=>{class t extends Q{constructor(t,e,i,r,a,n,s,l){super(t),this._focusMonitor=e,this._changeDetectorRef=i,this._dir=r,this._ngZone=n,this._animationMode=l,this._invert=!1,this._max=100,this._min=0,this._step=1,this._thumbLabel=!1,this._tickInterval=0,this._value=null,this._vertical=!1,this.change=new m.o,this.input=new m.o,this.valueChange=new m.o,this.onTouched=()=>{},this._percent=0,this._isSliding=!1,this._isActive=!1,this._tickIntervalPercent=0,this._sliderDimensions=null,this._controlValueAccessorChangeFn=()=>{},this._dirChangeSubscription=f.a.EMPTY,this._pointerDown=t=>{this.disabled||this._isSliding||!M(t)&&0!==t.button||this._ngZone.run(()=>{const e=this.value,i=C(t);this._isSliding=!0,this._lastPointerEvent=t,t.preventDefault(),this._focusHostElement(),this._onMouseenter(),this._bindGlobalEvents(t),this._focusHostElement(),this._updateValueFromPosition(i),this._valueOnSlideStart=this.value,this._pointerPositionOnStart=i,e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent())})},this._pointerMove=t=>{if(this._isSliding){t.preventDefault();const e=this.value;this._lastPointerEvent=t,this._updateValueFromPosition(C(t)),e!=this.value&&this._emitInputEvent()}},this._pointerUp=t=>{if(this._isSliding){const e=this._pointerPositionOnStart,i=C(t);t.preventDefault(),this._removeGlobalEvents(),this._valueOnSlideStart=this._pointerPositionOnStart=this._lastPointerEvent=null,this._isSliding=!1,this._valueOnSlideStart==this.value||this.disabled||!e||e.x===i.x&&e.y===i.y||this._emitChangeEvent()}},this._windowBlur=()=>{this._lastPointerEvent&&this._pointerUp(this._lastPointerEvent)},this._document=s,this.tabIndex=parseInt(a)||0,n.runOutsideAngular(()=>{const e=t.nativeElement;e.addEventListener("mousedown",this._pointerDown,y),e.addEventListener("touchstart",this._pointerDown,y)})}get invert(){return this._invert}set invert(t){this._invert=Object(u.c)(t)}get max(){return this._max}set max(t){this._max=Object(u.f)(t,this._max),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get min(){return this._min}set min(t){this._min=Object(u.f)(t,this._min),null===this._value&&(this.value=this._min),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get step(){return this._step}set step(t){this._step=Object(u.f)(t,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set thumbLabel(t){this._thumbLabel=Object(u.c)(t)}get tickInterval(){return this._tickInterval}set tickInterval(t){this._tickInterval="auto"===t?"auto":"number"==typeof t||"string"==typeof t?Object(u.f)(t,this._tickInterval):0}get value(){return null===this._value&&(this.value=this._min),this._value}set value(t){if(t!==this._value){let e=Object(u.f)(t);this._roundToDecimal&&(e=parseFloat(e.toFixed(this._roundToDecimal))),this._value=e,this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}}get vertical(){return this._vertical}set vertical(t){this._vertical=Object(u.c)(t)}get displayValue(){return this.displayWith?this.displayWith(this.value):this._roundToDecimal&&this.value&&this.value%1!=0?this.value.toFixed(this._roundToDecimal):this.value||0}focus(t){this._focusHostElement(t)}blur(){this._blurHostElement()}get percent(){return this._clamp(this._percent)}get _invertAxis(){return this.vertical?!this.invert:this.invert}get _isMinValue(){return 0===this.percent}get _thumbGap(){return this.disabled?7:this._isMinValue&&!this.thumbLabel?this._isActive?10:7:0}get _trackBackgroundStyles(){const t=this.vertical?`1, ${1-this.percent}, 1`:1-this.percent+", 1, 1";return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"-":""}${this._thumbGap}px) scale3d(${t})`}}get _trackFillStyles(){const t=this.percent,e=this.vertical?`1, ${t}, 1`:t+", 1, 1";return{transform:`translate${this.vertical?"Y":"X"}(${this._shouldInvertMouseCoords()?"":"-"}${this._thumbGap}px) scale3d(${e})`,display:0===t?"none":""}}get _ticksContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"-":""}${this._tickIntervalPercent/2*100}%)`}}get _ticksStyles(){let t=100*this._tickIntervalPercent,e={backgroundSize:this.vertical?`2px ${t}%`:t+"% 2px",transform:`translateZ(0) translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"":"-"}${t/2}%)${this.vertical||"rtl"!=this._getDirection()?"":" rotate(180deg)"}`};if(this._isMinValue&&this._thumbGap){let t;t=this.vertical?this._invertAxis?"Bottom":"Top":this._invertAxis?"Right":"Left",e["padding"+t]=this._thumbGap+"px"}return e}get _thumbContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(-${100*(("rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis)?this.percent:1-this.percent)}%)`}}_shouldInvertMouseCoords(){return"rtl"!=this._getDirection()||this.vertical?this._invertAxis:!this._invertAxis}_getDirection(){return this._dir&&"rtl"==this._dir.value?"rtl":"ltr"}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{this._isActive=!!t&&"keyboard"!==t,this._changeDetectorRef.detectChanges()}),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngOnDestroy(){const t=this._elementRef.nativeElement;t.removeEventListener("mousedown",this._pointerDown,y),t.removeEventListener("touchstart",this._pointerDown,y),this._lastPointerEvent=null,this._removeGlobalEvents(),this._focusMonitor.stopMonitoring(this._elementRef),this._dirChangeSubscription.unsubscribe()}_onMouseenter(){this.disabled||(this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent())}_onFocus(){this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent()}_onBlur(){this.onTouched()}_onKeydown(t){if(this.disabled||Object(p.s)(t))return;const e=this.value;switch(t.keyCode){case p.l:this._increment(10);break;case p.k:this._increment(-10);break;case p.e:this.value=this.max;break;case p.h:this.value=this.min;break;case p.i:this._increment("rtl"==this._getDirection()?1:-1);break;case p.p:this._increment(1);break;case p.m:this._increment("rtl"==this._getDirection()?-1:1);break;case p.d:this._increment(-1);break;default:return}e!=this.value&&(this._emitInputEvent(),this._emitChangeEvent()),this._isSliding=!0,t.preventDefault()}_onKeyup(){this._isSliding=!1}_getWindow(){return this._document.defaultView||window}_bindGlobalEvents(t){const e=this._document,i=M(t),r=i?"touchend":"mouseup";e.addEventListener(i?"touchmove":"mousemove",this._pointerMove,y),e.addEventListener(r,this._pointerUp,y),i&&e.addEventListener("touchcancel",this._pointerUp,y);const a=this._getWindow();void 0!==a&&a&&a.addEventListener("blur",this._windowBlur)}_removeGlobalEvents(){const t=this._document;t.removeEventListener("mousemove",this._pointerMove,y),t.removeEventListener("mouseup",this._pointerUp,y),t.removeEventListener("touchmove",this._pointerMove,y),t.removeEventListener("touchend",this._pointerUp,y),t.removeEventListener("touchcancel",this._pointerUp,y);const e=this._getWindow();void 0!==e&&e&&e.removeEventListener("blur",this._windowBlur)}_increment(t){this.value=this._clamp((this.value||0)+this.step*t,this.min,this.max)}_updateValueFromPosition(t){if(!this._sliderDimensions)return;let e=this._clamp(((this.vertical?t.y:t.x)-(this.vertical?this._sliderDimensions.top:this._sliderDimensions.left))/(this.vertical?this._sliderDimensions.height:this._sliderDimensions.width));if(this._shouldInvertMouseCoords()&&(e=1-e),0===e)this.value=this.min;else if(1===e)this.value=this.max;else{const t=this._calculateValue(e),i=Math.round((t-this.min)/this.step)*this.step+this.min;this.value=this._clamp(i,this.min,this.max)}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.value),this.valueChange.emit(this.value),this.change.emit(this._createChangeEvent())}_emitInputEvent(){this.input.emit(this._createChangeEvent())}_updateTickIntervalPercent(){if(this.tickInterval&&this._sliderDimensions)if("auto"==this.tickInterval){let t=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,e=Math.ceil(30/(t*this.step/(this.max-this.min)));this._tickIntervalPercent=e*this.step/t}else this._tickIntervalPercent=this.tickInterval*this.step/(this.max-this.min)}_createChangeEvent(t=this.value){let e=new T;return e.source=this,e.value=t,e}_calculatePercentage(t){return((t||0)-this.min)/(this.max-this.min)}_calculateValue(t){return this.min+t*(this.max-this.min)}_clamp(t,e=0,i=1){return Math.max(e,Math.min(t,i))}_getSliderDimensions(){return this._sliderWrapper?this._sliderWrapper.nativeElement.getBoundingClientRect():null}_focusHostElement(t){this._elementRef.nativeElement.focus(t)}_blurHostElement(){this._elementRef.nativeElement.blur()}writeValue(t){this.value=t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}}return t.\u0275fac=function(e){return new(e||t)(m.Lb(m.l),m.Lb(_.e),m.Lb(m.h),m.Lb(x.b,8),m.Wb("tabindex"),m.Lb(m.A),m.Lb(r.d),m.Lb(g.a,8))},t.\u0275cmp=m.Fb({type:t,selectors:[["mat-slider"]],viewQuery:function(t,e){var i;1&t&&m.Dc(k,!0),2&t&&m.mc(i=m.Zb())&&(e._sliderWrapper=i.first)},hostAttrs:["role","slider",1,"mat-slider","mat-focus-indicator"],hostVars:28,hostBindings:function(t,e){1&t&&m.Yb("focus",(function(){return e._onFocus()}))("blur",(function(){return e._onBlur()}))("keydown",(function(t){return e._onKeydown(t)}))("keyup",(function(){return e._onKeyup()}))("mouseenter",(function(){return e._onMouseenter()}))("selectstart",(function(t){return t.preventDefault()})),2&t&&(m.Ub("tabIndex",e.tabIndex),m.Bb("aria-disabled",e.disabled)("aria-valuemax",e.max)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-orientation",e.vertical?"vertical":"horizontal"),m.Db("mat-slider-disabled",e.disabled)("mat-slider-has-ticks",e.tickInterval)("mat-slider-horizontal",!e.vertical)("mat-slider-axis-inverted",e._invertAxis)("mat-slider-invert-mouse-coords",e._shouldInvertMouseCoords())("mat-slider-sliding",e._isSliding)("mat-slider-thumb-label-showing",e.thumbLabel)("mat-slider-vertical",e.vertical)("mat-slider-min-value",e._isMinValue)("mat-slider-hide-last-tick",e.disabled||e._isMinValue&&e._thumbGap&&e._invertAxis)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",color:"color",tabIndex:"tabIndex",invert:"invert",max:"max",min:"min",value:"value",step:"step",thumbLabel:"thumbLabel",tickInterval:"tickInterval",vertical:"vertical",displayWith:"displayWith"},outputs:{change:"change",input:"input",valueChange:"valueChange"},exportAs:["matSlider"],features:[m.zb([R]),m.xb],decls:13,vars:6,consts:[[1,"mat-slider-wrapper"],["sliderWrapper",""],[1,"mat-slider-track-wrapper"],[1,"mat-slider-track-background",3,"ngStyle"],[1,"mat-slider-track-fill",3,"ngStyle"],[1,"mat-slider-ticks-container",3,"ngStyle"],[1,"mat-slider-ticks",3,"ngStyle"],[1,"mat-slider-thumb-container",3,"ngStyle"],[1,"mat-slider-focus-ring"],[1,"mat-slider-thumb"],[1,"mat-slider-thumb-label"],[1,"mat-slider-thumb-label-text"]],template:function(t,e){1&t&&(m.Rb(0,"div",0,1),m.Rb(2,"div",2),m.Mb(3,"div",3),m.Mb(4,"div",4),m.Qb(),m.Rb(5,"div",5),m.Mb(6,"div",6),m.Qb(),m.Rb(7,"div",7),m.Mb(8,"div",8),m.Mb(9,"div",9),m.Rb(10,"div",10),m.Rb(11,"span",11),m.zc(12),m.Qb(),m.Qb(),m.Qb(),m.Qb()),2&t&&(m.Ab(3),m.ic("ngStyle",e._trackBackgroundStyles),m.Ab(1),m.ic("ngStyle",e._trackFillStyles),m.Ab(1),m.ic("ngStyle",e._ticksContainerStyles),m.Ab(1),m.ic("ngStyle",e._ticksStyles),m.Ab(1),m.ic("ngStyle",e._thumbContainerStyles),m.Ab(5),m.Ac(e.displayValue))},directives:[r.n],styles:['.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n'],encapsulation:2,changeDetection:0}),t})();function M(t){return"t"===t.type[0]}function C(t){const e=M(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.clientX,y:e.clientY}}let A=(()=>{class t{}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},imports:[[r.c,l.h],l.h]}),t})();var S=i("sEIs"),E=i("XoY3"),D=i("eY0o"),I=i("/nyh"),L=i("sxkr"),F=i("ROBh"),O=i("q3Sb");function P(t,e){if(1&t&&(m.Rb(0,"div"),m.Mb(1,"app-reference-column",14),m.Qb()),2&t){const t=m.cc();m.Ab(1),m.ic("appearance",t.appearance)("hint",t.hintText)("hintToggle",t.hintToggle)("subscriptType",t.subscriptType)}}function Y(t,e){1&t&&(m.Rb(0,"mat-label"),m.zc(1,"Custom Label"),m.Qb())}function V(t,e){1&t&&(m.Rb(0,"mat-label"),m.zc(1,"Custom Label"),m.Qb())}function $(t,e){1&t&&(m.Rb(0,"mat-label"),m.zc(1,"Custom Label"),m.Qb())}function j(t,e){if(1&t&&(m.Rb(0,"div"),m.Mb(1,"app-reference-column",14),m.Qb()),2&t){const t=m.cc();m.Ab(1),m.ic("appearance",t.appearance)("hint",t.hintText)("hintToggle",t.hintToggle)("subscriptType",t.subscriptType)}}function N(t,e){1&t&&(m.Rb(0,"mat-label"),m.zc(1,"Custom Label"),m.Qb())}let W=(()=>{class t{constructor(){this.subscriptType="single-line",this.hintToggle=!1,this.hint="hint text",this.appearance="legacy",this.value=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Fb({type:t,selectors:[["app-reference-column"]],inputs:{subscriptType:"subscriptType",hintToggle:"hintToggle",hint:"hint",appearance:"appearance"},decls:4,vars:5,consts:[[3,"appearance","hint","hintToggle","subscriptType"],["matInput","","type","text",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(m.Rb(0,"ps-form-field",0),m.Rb(1,"mat-label"),m.zc(2,"Referenz Column"),m.Qb(),m.Rb(3,"input",1),m.Yb("ngModelChange",(function(t){return e.value=t})),m.Qb(),m.Qb()),2&t&&(m.ic("appearance",e.appearance)("hint",e.hint)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(3),m.ic("ngModel",e.value))},directives:[O.a,o.g,h.a,a.c,a.n,a.q],encapsulation:2}),t})(),B=(()=>{class t{constructor(t){this.cd=t,this.subscriptType="single-line",this.hintToggle=!1,this.hintText="hint text",this.appearance="legacy",this.asyncLabel$=Object(F.a)("Custom Label"),this.ctrlCountNumbers=Array(7).fill(1),this.value="",this.customLabel=!0,this.form=new a.h({Text:new a.e(""),Select:new a.e(""),Checkbox:new a.e(""),Radio:new a.e(""),Prefix_Text:new a.e(""),Slider:new a.e("")}),this._disabled=!1,this._error=!1;for(const e in this.form.controls)this.form.controls.hasOwnProperty(e)&&(this.form.controls[e].psLabel=e)}get disabled(){return this._disabled}set disabled(t){for(const e in this.form.controls){if(!this.form.controls.hasOwnProperty(e))continue;const i=this.form.controls[e];t?i.disable():i.enable()}this._disabled=t,this.cd.markForCheck()}get error(){return this._error}set error(t){for(const e in this.form.controls){if(!this.form.controls.hasOwnProperty(e))continue;const i=this.form.controls[e];i.setValidators(t?()=>({error1:"error value 1",error2:"this is a very long error is will be truncated in this demo"}):null),i.updateValueAndValidity()}this._error=t,this.cd.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(m.Lb(m.h))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-form-field-demo"]],decls:162,vars:97,consts:[["href","https://material.angular.io/components/form-field/overview#form-field-appearance-variants"],[2,"margin",".5em",3,"appearance","hint"],["matInput","","type","text"],[3,"hint"],["type","text"],["matInput","","type","text",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],[2,"margin",".5em",3,"ngModel","ngModelChange"],[2,"margin",".5em"],[3,"ngModel","ngModelChange"],[3,"value"],["type","text","matInput","",3,"ngModel","ngModelChange"],[2,"display","grid","grid-template-columns","repeat(4, min-content)","grid-auto-rows","min-content","grid-gap","5px",3,"formGroup"],[4,"ngFor","ngForOf"],[3,"appearance","hint","hintToggle","subscriptType"],[4,"ngIf"],["formControlName","Select"],["value","item_ok"],["value","item_error"],["matPrefix","",1,"app-form-example__icon"],["matInput","","formControlName","Prefix_Text","type","text"],["matSuffix","",1,"app-form-example__icon"],["formControlName","Slider"],["formControlName","Checkbox"],["formControlName","Radio",2,"display","flex","place-content","end space-between"],[2,"padding-right","8px",3,"value"],["mat-icon-button","",2,"height","20px","width","20px","line-height","20px",3,"disabled","click"],[2,"line-height","20px"]],template:function(t,e){1&t&&(m.Rb(0,"div"),m.Rb(1,"div"),m.Rb(2,"h2"),m.zc(3,"Appearances"),m.Qb(),m.zc(4," For more detail please visit "),m.Rb(5,"a",0),m.zc(6,"https://material.angular.io/components/form-field/overview#form-field-appearance-variants"),m.Qb(),m.Rb(7,"ps-form-field",1),m.Rb(8,"mat-label"),m.zc(9,"Legacy"),m.Qb(),m.Mb(10,"input",2),m.Qb(),m.Rb(11,"ps-form-field",1),m.Rb(12,"mat-label"),m.zc(13,"Standard"),m.Qb(),m.Mb(14,"input",2),m.Qb(),m.Rb(15,"ps-form-field",1),m.Rb(16,"mat-label"),m.zc(17,"Fill"),m.Qb(),m.Mb(18,"input",2),m.Qb(),m.Rb(19,"ps-form-field",1),m.Rb(20,"mat-label"),m.zc(21,"Outline"),m.Qb(),m.Mb(22,"input",2),m.Qb(),m.Rb(23,"h2"),m.zc(24,"No form binding and no hint"),m.Qb(),m.Rb(25,"ps-form-field"),m.Rb(26,"mat-label"),m.zc(27,"Referenz Column"),m.Qb(),m.Mb(28,"input",2),m.Qb(),m.Rb(29,"h2"),m.zc(30,"No form binding and no MatFormFieldControl"),m.Qb(),m.Rb(31,"ps-form-field",3),m.Rb(32,"mat-label"),m.zc(33,"Referenz Column"),m.Qb(),m.Mb(34,"input",4),m.Qb(),m.Rb(35,"h2"),m.zc(36,"NgModel"),m.Qb(),m.Rb(37,"ps-form-field",3),m.Rb(38,"mat-label"),m.zc(39,"Referenz Column"),m.Qb(),m.Rb(40,"input",5),m.Yb("ngModelChange",(function(t){return e.value=t})),m.Qb(),m.Qb(),m.Rb(41,"h2"),m.zc(42,"NgModel without MatFormFieldControl"),m.Qb(),m.Rb(43,"ps-form-field",3),m.Rb(44,"mat-label"),m.zc(45,"Referenz Column"),m.Qb(),m.Rb(46,"input",6),m.Yb("ngModelChange",(function(t){return e.value=t})),m.Qb(),m.Qb(),m.Qb(),m.Rb(47,"div"),m.Rb(48,"h2"),m.zc(49,"Different controls"),m.Qb(),m.Rb(50,"mat-checkbox",7),m.Yb("ngModelChange",(function(t){return e.disabled=t})),m.zc(51,"disabled"),m.Qb(),m.Rb(52,"mat-checkbox",7),m.Yb("ngModelChange",(function(t){return e.customLabel=t})),m.zc(53,"custom label"),m.Qb(),m.Rb(54,"mat-checkbox",7),m.Yb("ngModelChange",(function(t){return e.error=t})),m.zc(55,"error"),m.Qb(),m.Rb(56,"mat-checkbox",7),m.Yb("ngModelChange",(function(t){return e.hintToggle=t})),m.zc(57,"hint toggle button"),m.Qb(),m.Rb(58,"mat-form-field",8),m.Rb(59,"mat-label"),m.zc(60,"subscriptType"),m.Qb(),m.Rb(61,"mat-select",9),m.Yb("ngModelChange",(function(t){return e.subscriptType=t})),m.Rb(62,"mat-option",10),m.zc(63,"material default"),m.Qb(),m.Rb(64,"mat-option",10),m.zc(65,"auto height"),m.Qb(),m.Rb(66,"mat-option",10),m.zc(67,"bubble"),m.Qb(),m.Qb(),m.Qb(),m.Rb(68,"mat-form-field",8),m.Rb(69,"mat-label"),m.zc(70,"appearance"),m.Qb(),m.Rb(71,"mat-select",9),m.Yb("ngModelChange",(function(t){return e.appearance=t})),m.Rb(72,"mat-option",10),m.zc(73,"legacy"),m.Qb(),m.Rb(74,"mat-option",10),m.zc(75,"standard"),m.Qb(),m.Rb(76,"mat-option",10),m.zc(77,"fill"),m.Qb(),m.Rb(78,"mat-option",10),m.zc(79,"outline"),m.Qb(),m.Qb(),m.Qb(),m.Rb(80,"mat-form-field",8),m.Rb(81,"mat-label"),m.zc(82,"hint text"),m.Qb(),m.Rb(83,"input",11),m.Yb("ngModelChange",(function(t){return e.hintText=t})),m.Qb(),m.Qb(),m.Rb(84,"ul"),m.Rb(85,"li"),m.zc(86," Checkbox can't dynamically switch from/to custom label, therefore both are shown separate below. "),m.Qb(),m.Rb(87,"li"),m.zc(88," The reference columns are to make sure all controls have the same height and line up correctly. "),m.Qb(),m.Qb(),m.Qb(),m.Rb(89,"div",12),m.Rb(90,"div"),m.zc(91,"Referenz Column"),m.Qb(),m.Rb(92,"div"),m.zc(93,"Control Column"),m.Qb(),m.Rb(94,"div"),m.zc(95,"Referenz Column"),m.Qb(),m.Rb(96,"div"),m.zc(97,"Control Column"),m.Qb(),m.Rb(98,"div"),m.xc(99,P,2,4,"div",13),m.Qb(),m.Rb(100,"div"),m.Rb(101,"div"),m.Mb(102,"app-reference-column",14),m.Qb(),m.Rb(103,"div"),m.Rb(104,"ps-form-field",14),m.xc(105,Y,2,0,"mat-label",15),m.Rb(106,"mat-select",16),m.Rb(107,"mat-option",10),m.Rb(108,"i"),m.zc(109,"keine Auswahl"),m.Qb(),m.Qb(),m.Rb(110,"mat-option",17),m.zc(111,"Ok"),m.Qb(),m.Rb(112,"mat-option",18),m.zc(113,"Error"),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Rb(114,"div"),m.Mb(115,"app-reference-column",14),m.Qb(),m.Rb(116,"div"),m.Rb(117,"ps-form-field",14),m.xc(118,V,2,0,"mat-label",15),m.Rb(119,"mat-icon",19),m.zc(120,"home"),m.Qb(),m.Mb(121,"input",20),m.Rb(122,"mat-icon",21),m.zc(123,"phone"),m.Qb(),m.Qb(),m.Qb(),m.Rb(124,"div"),m.Mb(125,"app-reference-column",14),m.Qb(),m.Rb(126,"div"),m.Rb(127,"ps-form-field",14),m.xc(128,$,2,0,"mat-label",15),m.Mb(129,"mat-slider",22),m.Qb(),m.Qb(),m.Rb(130,"div"),m.Mb(131,"app-reference-column",14),m.Qb(),m.Qb(),m.Rb(132,"div"),m.xc(133,j,2,4,"div",13),m.Qb(),m.Rb(134,"div"),m.Rb(135,"div"),m.Mb(136,"app-reference-column",14),m.Qb(),m.Rb(137,"div"),m.Rb(138,"ps-form-field",14),m.Mb(139,"mat-checkbox",23),m.Qb(),m.Qb(),m.Rb(140,"div"),m.Mb(141,"app-reference-column",14),m.Qb(),m.Rb(142,"div"),m.Rb(143,"ps-form-field",14),m.Rb(144,"mat-checkbox",23),m.zc(145),m.dc(146,"async"),m.Qb(),m.Qb(),m.Qb(),m.Rb(147,"div"),m.Mb(148,"app-reference-column",14),m.Qb(),m.Rb(149,"div"),m.Rb(150,"ps-form-field",14),m.xc(151,N,2,0,"mat-label",15),m.Rb(152,"mat-radio-group",24),m.Rb(153,"mat-radio-button",25),m.zc(154,"Ja"),m.Qb(),m.Rb(155,"mat-radio-button",25),m.zc(156,"Nein"),m.Qb(),m.Rb(157,"button",26),m.Yb("click",(function(){return e.form.get("Radio").patchValue(null)})),m.Rb(158,"mat-icon",27),m.zc(159,"clear"),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Rb(160,"div"),m.Mb(161,"app-reference-column",14),m.Qb(),m.Qb(),m.Qb(),m.Qb()),2&t&&(m.Ab(7),m.ic("appearance","legacy")("hint","hint text"),m.Ab(4),m.ic("appearance","standard")("hint","hint text"),m.Ab(4),m.ic("appearance","fill")("hint","hint text"),m.Ab(4),m.ic("appearance","outline")("hint","hint text"),m.Ab(12),m.ic("hint","hint text"),m.Ab(6),m.ic("hint","hint text"),m.Ab(3),m.ic("ngModel",e.value),m.Ab(3),m.ic("hint","hint text"),m.Ab(3),m.ic("ngModel",e.value),m.Ab(4),m.ic("ngModel",e.disabled),m.Ab(2),m.ic("ngModel",e.customLabel),m.Ab(2),m.ic("ngModel",e.error),m.Ab(2),m.ic("ngModel",e.hintToggle),m.Ab(5),m.ic("ngModel",e.subscriptType),m.Ab(1),m.ic("value","single-line"),m.Ab(2),m.ic("value","resize"),m.Ab(2),m.ic("value","bubble"),m.Ab(5),m.ic("ngModel",e.appearance),m.Ab(1),m.ic("value","legacy"),m.Ab(2),m.ic("value","standard"),m.Ab(2),m.ic("value","fill"),m.Ab(2),m.ic("value","outline"),m.Ab(5),m.ic("ngModel",e.hintText),m.Ab(6),m.ic("formGroup",e.form),m.Ab(10),m.ic("ngForOf",e.ctrlCountNumbers),m.Ab(3),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(1),m.ic("ngIf",e.customLabel),m.Ab(2),m.ic("value",null),m.Ab(8),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(1),m.ic("ngIf",e.customLabel),m.Ab(7),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(1),m.ic("ngIf",e.customLabel),m.Ab(3),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("ngForOf",e.ctrlCountNumbers),m.Ab(3),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(3),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.Ac(m.ec(146,95,e.asyncLabel$)),m.Ab(3),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(2),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType),m.Ab(1),m.ic("ngIf",e.customLabel),m.Ab(2),m.ic("value",!0),m.Ab(2),m.ic("value",!1),m.Ab(2),m.ic("disabled",e.form.get("Radio").disabled||null===e.form.get("Radio").value),m.Ab(4),m.ic("appearance",e.appearance)("hint",e.hintText)("hintToggle",e.hintToggle)("subscriptType",e.subscriptType))},directives:[O.a,o.g,h.a,a.c,a.n,a.q,s.a,o.c,d.a,l.k,a.o,a.i,r.l,W,r.m,a.g,c.a,o.h,o.i,z,b.b,b.a,n.a],pipes:[r.b],encapsulation:2,changeDetection:0}),t})();i("89kn");let G=(()=>{class t{isErrorState(t,e){return!(!t||!t.invalid)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=m.Hb({token:t,factory:t.\u0275fac}),t})(),X=(()=>{class t{}return t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({factory:function(e){return new(e||t)},providers:[{provide:l.c,useClass:L.a}],imports:[[a.j,a.s,r.c,E.b.forRoot(I.a),D.a,S.d.forChild([{path:"",component:B}]),n.b,c.b,o.e,h.b,d.b,s.b,b.c,A]]}),t})()}}]);