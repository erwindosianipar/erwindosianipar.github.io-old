(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(t,e,n){var r=n(4);e.f=r},233:function(t,e,n){"use strict";var r=n(2),o=n(3),l=n(28),c=n(23),m=n(10),f=n(109),d=n(160),h=n(5),v=n(9),y=n(74),w=n(11),S=n(6),_=n(21),C=n(26),O=n(51),E=n(36),P=n(52),j=n(53),x=n(70),k=n(234),N=n(108),M=n(31),$=n(18),I=n(71),J=n(20),F=n(15),L=n(106),T=n(72),z=n(73),A=n(107),D=n(4),Z=n(232),G=n(235),H=n(38),Q=n(27),R=n(37).forEach,W=T("hidden"),B=D("toPrimitive"),K=Q.set,U=Q.getterFor("Symbol"),V=Object.prototype,X=o.Symbol,Y=l("JSON","stringify"),tt=M.f,et=$.f,it=k.f,nt=I.f,at=L("symbols"),st=L("op-symbols"),ot=L("string-to-symbol-registry"),lt=L("symbol-to-string-registry"),ct=L("wks"),ut=o.QObject,mt=!ut||!ut.prototype||!ut.prototype.findChild,ft=m&&h((function(){return 7!=P(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=tt(V,e);r&&delete V[e],et(t,e,n),r&&t!==V&&et(V,e,r)}:et,pt=function(t,e){var symbol=at[t]=P(X.prototype);return K(symbol,{type:"Symbol",tag:t,description:e}),m||(symbol.description=e),symbol},ht=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},gt=function(t,e,n){t===V&&gt(st,e,n),S(t);var r=O(e,!0);return S(n),v(at,r)?(n.enumerable?(v(t,W)&&t[W][r]&&(t[W][r]=!1),n=P(n,{enumerable:E(0,!1)})):(v(t,W)||et(t,W,E(1,{})),t[W][r]=!0),ft(t,r,n)):et(t,r,n)},vt=function(t,e){S(t);var n=C(e),r=j(n).concat(St(n));return R(r,(function(e){m&&!yt.call(n,e)||gt(t,e,n[e])})),t},yt=function(t){var e=O(t,!0),n=nt.call(this,e);return!(this===V&&v(at,e)&&!v(st,e))&&(!(n||!v(this,e)||!v(at,e)||v(this,W)&&this[W][e])||n)},bt=function(t,e){var n=C(t),r=O(e,!0);if(n!==V||!v(at,r)||v(st,r)){var o=tt(n,r);return!o||!v(at,r)||v(n,W)&&n[W][r]||(o.enumerable=!0),o}},wt=function(t){var e=it(C(t)),n=[];return R(e,(function(t){v(at,t)||v(z,t)||n.push(t)})),n},St=function(t){var e=t===V,n=it(e?st:C(t)),r=[];return R(n,(function(t){!v(at,t)||e&&!v(V,t)||r.push(at[t])})),r};(f||(F((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===V&&n.call(st,t),v(this,W)&&v(this[W],e)&&(this[W][e]=!1),ft(this,e,E(1,t))};return m&&mt&&ft(V,e,{configurable:!0,set:n}),pt(e,t)}).prototype,"toString",(function(){return U(this).tag})),F(X,"withoutSetter",(function(t){return pt(A(t),t)})),I.f=yt,$.f=gt,M.f=bt,x.f=k.f=wt,N.f=St,Z.f=function(t){return pt(D(t),t)},m&&(et(X.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),c||F(V,"propertyIsEnumerable",yt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:X}),R(j(ct),(function(t){G(t)})),r({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(v(ot,e))return ot[e];var symbol=X(e);return ot[e]=symbol,lt[symbol]=e,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(v(lt,t))return lt[t]},useSetter:function(){mt=!0},useSimple:function(){mt=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!m},{create:function(t,e){return void 0===e?P(t):vt(P(t),e)},defineProperty:gt,defineProperties:vt,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:St}),r({target:"Object",stat:!0,forced:h((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(_(t))}}),Y)&&r({target:"JSON",stat:!0,forced:!f||h((function(){var symbol=X();return"[null]"!=Y([symbol])||"{}"!=Y({a:symbol})||"{}"!=Y(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],l=1;arguments.length>l;)o.push(arguments[l++]);if(r=e,(w(e)||void 0!==t)&&!ht(t))return y(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ht(e))return e}),o[1]=e,Y.apply(null,o)}});X.prototype[B]||J(X.prototype,B,X.prototype.valueOf),H(X,"Symbol"),z[W]=!0},234:function(t,e,n){var r=n(26),o=n(70).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},235:function(t,e,n){var path=n(159),r=n(9),o=n(232),l=n(18).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||l(e,t,{value:o.f(t)})}},236:function(t,e,n){"use strict";var r=n(2),o=n(10),l=n(3),c=n(9),m=n(11),f=n(18).f,d=n(158),h=l.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof y?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};d(y,h);var w=y.prototype=h.prototype;w.constructor=y;var S=w.toString,_="Symbol(test)"==String(h("test")),C=/^Symbol\((.*)\)[^)]+$/;f(w,"description",{configurable:!0,get:function(){var symbol=m(this)?this.valueOf():this,t=S.call(symbol);if(c(v,symbol))return"";var desc=_?t.slice(7,-1):t.replace(C,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:y})}},244:function(t,e,n){"use strict";n.r(e);n(233),n(236),n(50),n(75);var r=n(161),o={data:function(){return{title:"Contact | ".concat("Erwindo Sianipar"),description:"Get in touch with Erwindo Sianipar and Let’s make something great together",url:"".concat("https://erwindosianipar.me").concat(this.$route.fullPath),image:"https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg",username:"@erwindosianipar",name:null,email:null,message:null,error:!1,errorMessage:null}},methods:{validEmail:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},updateErrorState:function(t,e){this.error=t,this.errorMessage=e},updateEmptyState:function(){this.name=null,this.email=null,this.message=null},sendMessage:function(){var t=this;if(null==this.name||null==this.email||null==this.message)this.updateErrorState(!0,"Please complete all field to send message");else if(this.validEmail(this.email)){this.updateErrorState(!1,null),r("button").toggleClass("is-loading"),r("button").prop("disabled",!0);var body=new FormData;body.append("name",this.name),body.append("email",this.email),body.append("message",this.message),this.$axios({method:"POST",url:"https://formspree.io/maypjpvv",data:body}).then((function(e){r("button").toggleClass("is-loading"),r("button").html("Message sent successfully"),t.updateEmptyState()})).catch((function(e){r("button").toggleClass("is-loading"),r("button").prop("disabled",!1),t.updateErrorState(!0,"Failed to send message, please try again")}))}else this.updateErrorState(!0,"Please insert a valid email address")}},head:function(){return{title:this.title,meta:[{name:"description",content:this.description},{name:"og:title",content:this.title},{name:"og:description",content:this.description},{name:"og:image",content:this.image},{name:"og:url",content:this.url},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.image},{name:"twitter:url",content:this.url},{name:"twitter:site",content:this.username},{name:"twitter:creator",content:this.username}],link:[{rel:"canonical",href:this.url}]}}},l=n(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Contact")]),t._v(" "),n("h2",[t._v("Let’s make something great together! 🤩")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("\n    Just send me message from this form, I will receive your message via email and I\n    will reach as soon as possible 📭😉\n  ")]),t._v(" "),n("p",[t._v("\n    Or you can find all my social media account at sidebar of this website. I will be\n    happy to listen to you 😉 If you have a something trouble to find me at internet,\n    you can call my name three times btw hahahaha, feel free to contact me.\n  ")]),t._v(" "),t.error?n("div",[n("div",{staticClass:"notification is-danger is-light mt-5 mb-5"},[n("i",{staticClass:"fal fa-info-circle mr-2"}),t._v(" "+t._s(t.errorMessage)+"\n    ")])]):t._e(),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",autocomplete:"off",placeholder:"e.g. Erwindo Sianipar"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",autocomplete:"off",placeholder:"e.g. erwindosianipar@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Message")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{placeholder:"e.g. Hello world, how area you?"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link",attrs:{id:"button"},on:{click:t.sendMessage}},[t._v("\n        Send me a message\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level mt-5"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("figure",{staticClass:"image is-48x48"},[e("img",{staticClass:"is-rounded",attrs:{src:"https://erwindosianipar.github.io/cdn/images/erwindosianipar.jpeg",alt:"Erwindo Sianipar"}}),this._v(" "),e("i",{staticClass:"c-online-indicator"})])]),this._v(" "),e("div",{staticClass:"level-item"},[e("span",[this._v("Reply time:")]),this._v(" "),e("span",{staticClass:"has-text-weight-bold"},[this._v("1-3 working days")])])])])}],!1,null,null,null);e.default=component.exports}}]);