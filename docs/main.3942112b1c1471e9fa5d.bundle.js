webpackJsonp([1,4],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},1:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function r(t){return _._15(0,[(t()(),_._16(0,null,null,1,"h1",[["class","center"]],null,null,null,null,null)),(t()(),_._17(null,["\n  ","\n"])),(t()(),_._17(null,["\n\n"])),(t()(),_._16(0,null,null,0,"div",[["id","map"]],null,null,null,null,null)),(t()(),_._17(null,["\n\n"])),(t()(),_._16(0,null,null,15,"div",[["class","btn-group"]],null,null,null,null,null)),(t()(),_._17(null,["\n  "])),(t()(),_._16(0,[["btnData",1]],null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.getOrders(_._18(t,7))&&r}return r},null,null)),(t()(),_._17(null,["\n    Get Data\n  "])),(t()(),_._17(null,["\n  "])),(t()(),_._16(0,[["btnRoutes",1]],null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.getRoutes(_._18(t,10))&&r}return r},null,null)),(t()(),_._17(null,["\n    Generate Routes\n  "])),(t()(),_._17(null,["\n  Max Visits "])),(t()(),_._16(0,null,null,6,"input",[["class","form-control"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(t,e,n){var r=!0,i=t.component;if("input"===e){r=!1!==_._18(t,14)._handleInput(n.target.value)&&r}if("blur"===e){r=!1!==_._18(t,14).onTouched()&&r}if("compositionstart"===e){r=!1!==_._18(t,14)._compositionStart()&&r}if("compositionend"===e){r=!1!==_._18(t,14)._compositionEnd(n.target.value)&&r}if("change"===e){r=!1!==_._18(t,15).onChange(n.target.value)&&r}if("input"===e){r=!1!==_._18(t,15).onChange(n.target.value)&&r}if("blur"===e){r=!1!==_._18(t,15).onTouched()&&r}if("ngModelChange"===e){r=!1!==(i.maxVisits=n)&&r}return r},null,null)),_._19(8192,null,0,s.d,[_.W,_.V,[2,s.e]],null,null),_._19(8192,null,0,s.f,[_.W,_.V],null,null),_._20(512,null,s.g,function(t,e){return[t,e]},[s.d,s.f]),_._19(335872,null,0,s.h,[[8,null],[8,null],[8,null],[2,s.g]],{model:[0,"model"]},{update:"ngModelChange"}),_._20(1024,null,s.i,null,[s.h]),_._19(8192,null,0,s.j,[s.i],null,null),(t()(),_._17(null,["\n"])),(t()(),_._17(null,["\n"]))],function(t,e){t(e,17,0,e.component.maxVisits)},function(t,e){t(e,1,0,e.component.title),t(e,13,0,_._18(e,19).ngClassUntouched,_._18(e,19).ngClassTouched,_._18(e,19).ngClassPristine,_._18(e,19).ngClassDirty,_._18(e,19).ngClassValid,_._18(e,19).ngClassInvalid,_._18(e,19).ngClassPending)})}function i(t){return _._15(0,[(t()(),_._16(0,null,null,1,"app-root",[],null,null,null,r,p)),_._19(57344,null,0,l.a,[a.a],null,null)],function(t,e){t(e,1,0)},null)}var o=n("Ni5f"),_=n("3j3K"),l=n("YWx4"),s=n("NVOs"),a=n("Tkm4");n.d(e,"a",function(){return c});var u=[o.a],p=_._14({encapsulation:0,styles:u,data:{}}),c=_._21("app-root",l.a,i,{},{},[])},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=["#map[_ngcontent-%COMP%]{width:100%;height:600px}.btn[_ngcontent-%COMP%]{margin:10px;margin-left:10px}.btn-group[_ngcontent-%COMP%]{padding:10px}"]},Tkm4:function(t,e,n){"use strict";var r=n("Fzro"),i=n("rCTf"),o=(n.n(i),n("+pb+")),_=(n.n(o),n("6Yye"));n.n(_);n.d(e,"a",function(){return l});var l=function(){function t(t){this.http=t}return t.prototype.getOrders=function(){return this.http.get("/DeliveryRouting/assets/data/orders.json").map(function(t){return t.json()}).catch(this.handleError)},t.prototype.getRoutes=function(t,e,n,i){var o=new r.l;o.append("Accept","application/json"),o.append("Content-Type","application/json"),o.append("Authorization","772ea600-78ad-11e6-a56b-0bff586a75e5");for(var _=[],l=0,s=t;l<s.length;l++){var a=s[l],u={id:a.order_id,lat:a.delivery_latitude,lng:a.delivery_longitude,name:"OrderID:"+a.order_id};_.push(u)}var p={service:_,fleet:[{id:1,lat:n.lat,lng:n.lng,latEnd:i.lat,lngEnd:i.lng,returnToStart:0}],maxVisits:e,polylines:!1,distanceCalculation:!1,speed:40,decideFleetSize:0};return this.http.post("https://api.flightmap.io/api/v1/vrp",JSON.stringify(p),{headers:o}).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){var e=t.headers.get("Application-Error"),n=t.json(),r="";if(!n.type){console.log(n);for(var o in n)n[o]&&(r+=n[o]+"\n")}return r=r=r,i.Observable.throw(e||r||"Server error")},t.ctorParameters=function(){return[{type:r.k}]},t}()},YWx4:function(t,e,n){"use strict";var r=n("Tkm4");n.d(e,"a",function(){return i});var i=function(){function t(t){this.ordersService=t,this.title="Delivery Routing Problem",this.orders=[],this.truck_start_pos={lat:30.7188978,lng:76.8102981},this.truck_end_pos={lat:30.7188978,lng:76.8102981},this.maxVisits=6,this.dp=[]}return t.prototype.ngOnInit=function(){this.directionsService=new google.maps.DirectionsService,this.map=new google.maps.Map(document.getElementById("map"),{zoom:3,center:{lat:0,lng:-180},mapTypeId:"terrain"})},t.prototype.getOrders=function(t){var e=this;this.ordersService.getOrders().subscribe(function(t){e.orders=t;var n=_.minBy(e.orders,"delivery_latitude").delivery_latitude,r=_.maxBy(e.orders,"delivery_latitude").delivery_latitude,i=_.minBy(e.orders,"delivery_longitude").delivery_longitude,o=_.maxBy(e.orders,"delivery_longitude").delivery_longitude,l=n+(r-n)/2,s=i+(o-i)/2;e.map.panTo({lat:l,lng:s}),e.map.setZoom(12);for(var a=function(t){var n=new google.maps.InfoWindow({content:t.delivery_address}),r=new google.maps.Marker({position:{lat:t.delivery_latitude,lng:t.delivery_longitude},map:e.map});r.addListener("click",function(){n.open(this.map,r)})},u=0,p=e.orders;u<p.length;u++){a(p[u])}var c="https://cdn3.iconfinder.com/data/icons/classic-icons-1/48/01.png",h=new google.maps.InfoWindow,d=new google.maps.Marker({position:e.truck_start_pos,map:e.map,icon:c});d.addListener("click",function(){h.setContent("Start position"),h.open(this.map,d)});var f=new google.maps.Marker({position:e.truck_end_pos,map:e.map,icon:c});f.addListener("click",function(){h.setContent("Start position"),h.open(this.map,f)})},function(t){return alert("Error loading the data.")})},t.prototype.getRoutes=function(t){var e=this;if(isNaN(this.maxVisits)||this.maxVisits<=0)return void alert("Enter a valid number of visits.");if(this.orders instanceof Array&&this.orders.length){var n=this.orders,r=this.truck_start_pos,i=this.truck_end_pos;if(this.dp.length){for(var o=0,l=this.dp;o<l.length;o++){var s=l[o];s.setMap(null),s=null}this.dp.splice(0,this.dp.length)}this.ordersService.getRoutes(this.orders,this.maxVisits,r,i).subscribe(function(t){if(null==t.error)if(null!=t.data.solutions)for(var o=t.data.solutions[1].length,l=0;l<o-1;l++){var s=t.data.solutions[1][l].id.split(":")[1],a=_.find(n,{order_id:parseInt(s)}),u={lat:a.delivery_latitude,lng:a.delivery_longitude},p=t.data.solutions[1][l+1].id.split(":")[1],c=_.find(n,{order_id:parseInt(p)}),h={lat:c.delivery_latitude,lng:c.delivery_longitude};0==l&&e.displayRoute(r,u),e.displayRoute(u,h),l==o-2&&e.displayRoute(h,i)}else alert("There was no possible to get a feasible route.")},function(t){return alert("Error obtaining the routes. Please try again later.")})}else alert('Please click on the "Get Data" first')},t.prototype.displayRoute=function(t,e){var n=this.map,r=this.dp;this.directionsService.route({origin:t,destination:e,travelMode:"DRIVING"},function(t,e){if("OK"===e){var i=new google.maps.DirectionsRenderer({suppressMarkers:!0});i.setMap(n),i.setDirections(t),r.push(i)}else window.alert("Directions request failed due to "+e)})},t.ctorParameters=function(){return[{type:r.a}]},t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},kke6:function(t,e,n){"use strict";var r=n("3j3K"),i=n("Iksp"),o=n("2Je8"),_=n("Qbdm"),l=n("NVOs"),s=n("Fzro"),a=n("Tkm4"),u=n("1A80");n.d(e,"a",function(){return h});var p=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=function(t){function e(e){return t.call(this,e,[u.a],[u.a])||this}return p(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=r.b(this.parent.get(r.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new o.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new r.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=r.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=r.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=r.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new _.b(this.parent.get(_.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new _.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new _.e(this.parent.get(_.c)),new _.f(this.parent.get(_.c)),new _.g(this.parent.get(_.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new _.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(r.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new _.i(this.parent.get(_.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new _.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new r.i(this.parent.get(r.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new _.k(this.parent.get(_.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new _.l(this.parent.get(_.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new l.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new s.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new s.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=s.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new s.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new s.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=s.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_OrdersService_37",{get:function(){return null==this.__OrdersService_37&&(this.__OrdersService_37=new a.a(this._Http_36)),this.__OrdersService_37},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.b,this._ErrorHandler_1=_.m(),this._APP_INITIALIZER_2=[r.j,_.n(this.parent.get(_.o,null),this.parent.get(r.k,null))],this._ApplicationInitStatus_3=new r.l(this._APP_INITIALIZER_2),this._ɵf_4=new r.m(this.parent.get(r.h),this.parent.get(r.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new r.o(this._ApplicationRef_5),this._BrowserModule_7=new _.p(this.parent.get(_.p,null)),this._ɵba_8=new l.b,this._FormsModule_9=new l.c,this._HttpModule_10=new s.g,this._AppModule_11=new i.a,this._AppModule_11},e.prototype.getInternal=function(t,e){return t===o.b?this._CommonModule_0:t===r.p?this._ErrorHandler_1:t===r.q?this._APP_INITIALIZER_2:t===r.l?this._ApplicationInitStatus_3:t===r.m?this._ɵf_4:t===r.r?this._ApplicationRef_5:t===r.o?this._ApplicationModule_6:t===_.p?this._BrowserModule_7:t===l.b?this._ɵba_8:t===l.c?this._FormsModule_9:t===s.g?this._HttpModule_10:t===i.a?this._AppModule_11:t===r.c?this._LOCALE_ID_12:t===o.c?this._NgLocalization_13:t===r.d?this._Compiler_14:t===r.s?this._APP_ID_15:t===r.t?this._IterableDiffers_16:t===r.u?this._KeyValueDiffers_17:t===_.q?this._DomSanitizer_18:t===r.v?this._Sanitizer_19:t===_.r?this._HAMMER_GESTURE_CONFIG_20:t===_.s?this._EVENT_MANAGER_PLUGINS_21:t===_.h?this._EventManager_22:t===_.i?this._ɵDomSharedStylesHost_23:t===_.j?this._ɵDomRendererFactory2_24:t===r.w?this._RendererFactory2_25:t===_.t?this._ɵSharedStylesHost_26:t===r.i?this._Testability_27:t===_.k?this._Meta_28:t===_.l?this._Title_29:t===l.a?this._ɵi_30:t===s.a?this._BrowserXhr_31:t===s.h?this._ResponseOptions_32:t===s.i?this._XSRFStrategy_33:t===s.d?this._XHRBackend_34:t===s.j?this._RequestOptions_35:t===s.k?this._Http_36:t===a.a?this._OrdersService_37:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},e}(r.x),h=new r.y(c,i.a)},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3j3K"),i=n("kZql"),o=n("Qbdm"),_=n("kke6");i.a.production&&n.i(r.a)(),n.i(o.a)().bootstrapModuleFactory(_.a)}},[1]);