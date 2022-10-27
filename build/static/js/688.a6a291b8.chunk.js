/*! For license information please see 688.a6a291b8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinfnet_task_manager=self.webpackChunkinfnet_task_manager||[]).push([[688],{9232:function(t,e,n){var r=n(1413),o=n(763),i=n(9345),a=n(2791),c=n(6089);e.Z=function(){var t=(0,c.f)(),e=t.storeTasks,n=t.search,s=t.updateTasks,u=t.resetTasks,l=t.setSearch,f=(0,a.useMemo)((function(){var t=i.ou.utc();return[{label:"Ontem",add:-1,tasks:[]},{label:"Hoje",add:0,tasks:[]},{label:"Amanh\xe3",add:1,tasks:[]}].map((function(n){var r=n.label,a=n.add,c=(0,o.orderBy)(e.filter((function(e){var n=e.date;return i.ou.fromISO(n).toISODate()===t.plus({days:a}).toISODate()})),"date");return{label:r,add:a,tasks:c}}))}),[e]),h=(0,a.useMemo)((function(){return f.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{tasks:t.tasks.filter((function(t){var e=t.category,r=t.date,o=t.title;if(n){var a=i.ou.fromFormat(n,"dd/MM/yyyy");if(a.isValid&&a.toISODate()===i.ou.fromISO(r).toISODate())return!0}return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").indexOf(n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))>-1||o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").indexOf(n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))>-1}))})})).filter((function(t){return!!t.tasks.length}))}),[n,f]);return{storeTasks:e,tasks:f,categories:[{name:"Pessoal",bg:"#C7E7E9E5"},{name:"Profissional",bg:"#E0E34D"},{name:"Outros",bg:"#57A050E5"}],search:n,filtered:h,updateTasks:s,resetTasks:u,setSearch:l}}},734:function(t,e,n){var r=n(6089);e.Z=function(){var t=(0,r.f)(),e=t.storeUser,n=t.updateUser,o=t.resetUser;return{email:e.email,name:e.name,authenticated:e.authenticated,updateUser:n,resetUser:o}}},1688:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var r=n(1002);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=f(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function d(){}function p(){}function v(){}var g={};u(g,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(E([])));m&&m!==e&&n.call(m,a)&&(g=m);var x=v.prototype=d.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,r.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,u(x,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),Z(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;Z(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}var a=n(885),c=n(2791),s=n(7689),u=n(9232),l=n(734),f=n(168),h=n(6863),d=n(8055),p=n(3121),v=n(8385);var g=n.p+"static/media/instagram.6c9cbbf265f5d4e6334feda7127a9735.svg";var y=n.p+"static/media/linked-in.8b3fc1679361d6ecf7dfce5fa554b8d3.svg";var m,x,w,b,k,L,Z,j,E,O,P,_={Instagram:g,LinkedIn:y,Twitter:n.p+"static/media/twitter.b141d41f172d2b0e5eed0355804123e8.svg"},S=(0,h.ZP)("div")(m||(m=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n"]))),C=(0,h.ZP)("div")(x||(x=(0,f.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #545454;\n"]))),T=(0,h.ZP)("form")(w||(w=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  row-gap: 26px;\n  width: 100%;\n  margin-top: 10px;\n  padding-top: 9px;\n"]))),I=(0,h.ZP)(d.Z)(b||(b=(0,f.Z)(["\n  flex: 1 1 auto;\n  width: 100%;\n  height: 48px;\n"]))),N=(0,h.ZP)(p.Z)(k||(k=(0,f.Z)(["\n  width: 100%;\n  height: 40px;\n  background-color: #ebebeb;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 36px;\n  color: #9c9c9c;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n\n  & label {\n    top: -6px;\n  }\n\n  & div {\n    height: 40px;\n  }\n"]))),z=(0,h.ZP)(v.Z)(L||(L=(0,f.Z)(["\n  width: 100%;\n  height: 37px;\n  text-transform: none;\n  border-radius: 5px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #ffffff;\n"]))),F=(0,h.ZP)("div")(Z||(Z=(0,f.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n  margin: 53px 0 36px 0;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #545454;\n"]))),D=(0,h.ZP)("div")(j||(j=(0,f.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  column-gap: 32px;\n  width: 100%;\n  height: 64px;\n"]))),G=(0,h.ZP)("div")(E||(E=(0,f.Z)(["\n  width: 64px;\n  height: 64px;\n  background-image: url(",");\n  background-position-x: center;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n"])),(function(t){var e=t.bg;return"".concat(_[e])})),U=(0,h.ZP)("div")(O||(O=(0,f.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 46px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #545454;\n"]))),A=(0,h.ZP)("div")(P||(P=(0,f.Z)(["\n  cursor: pointer;\n"]))),M=n(184),Y=function(){var t=(0,s.s0)(),e=(0,l.Z)(),n=e.updateUser,r=e.resetUser,f=(0,u.Z)().resetTasks,h=(0,c.useState)("rodrigo@infnet.com.br"),d=(0,a.Z)(h,2),p=d[0],v=d[1],g=(0,c.useState)("xoxota"),y=(0,a.Z)(g,2),m=y[0],x=y[1],w=function(){var e,r=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p&&m){e.next=3;break}return e.abrupt("return");case 3:n({email:p,authenticated:!0}),t("/dashboard"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.debug(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,c.useEffect)((function(){r(),f()}),[]),(0,M.jsxs)(S,{children:[(0,M.jsx)(C,{children:"Login no sistema"}),(0,M.jsxs)(T,{children:[(0,M.jsx)(I,{children:(0,M.jsx)(N,{type:"text",id:"email",label:"Email",value:p,onChange:function(t){return v(t.target.value)},autoComplete:"user-email"})}),(0,M.jsx)(I,{children:(0,M.jsx)(N,{type:"password",id:"password",label:"Senha",values:m,onChange:function(t){return x(t.target.value)},autoComplete:"user-password"})}),(0,M.jsx)(I,{children:(0,M.jsx)(z,{type:"button",variant:"contained",onClick:w,children:"Entrar"})})]}),(0,M.jsx)(F,{children:"- Ou utilize sua rede social -"}),(0,M.jsxs)(D,{children:[(0,M.jsx)(G,{bg:"Instagram"}),(0,M.jsx)(G,{bg:"LinkedIn"}),(0,M.jsx)(G,{bg:"Twitter"})]}),(0,M.jsxs)(U,{children:["N\xe3o tem uma conta?\xa0",(0,M.jsx)(A,{onClick:function(){return t("/cadastro")},children:"Crie aqui"})]})]})},q=Y}}]);
//# sourceMappingURL=688.a6a291b8.chunk.js.map