(function(e){function n(n){for(var r,o,c=n[0],i=n[1],d=n[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0af86c":"64427477","chunk-2d0b30ac":"c9f458ae","chunk-2d0d7846":"d1bfa29b","chunk-2d22a14c":"fb98e120","chunk-2d230872":"ef6bf5fb","chunk-2d2315ba":"9939d39b","chunk-675b743f":"c6fb614e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-675b743f":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0af86c":"31d6cfe0","chunk-2d0b30ac":"31d6cfe0","chunk-2d0d7846":"31d6cfe0","chunk-2d22a14c":"31d6cfe0","chunk-2d230872":"31d6cfe0","chunk-2d2315ba":"31d6cfe0","chunk-675b743f":"2b30ff8f"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===a))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],f=d.getAttribute("data-href");if(f===r||f===a)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),t(u)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var l=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var s=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"038f":function(e,n,t){"use strict";t.r(n);t("4de4"),t("45fc"),t("b0c0");n["default"]={namespaced:!0,state:{isShowNavbar:!1,activeRoute:[],activeMaxLen:15},mutations:{PUSHROUTE:function(e,n){n&&!e.activeRoute.some((function(e){return e.name===n.name}))&&e.activeRoute.push(n)},DELETEROUTE:function(e,n){n&&(e.activeRoute=e.activeRoute.filter((function(e){return e.name!==n.name})))}},actions:{pushRoute:function(e,n){var t=e.commit;t("PUSHROUTE",n)},deleteRoute:function(e,n){var t=e.commit;t("DELETEROUTE",n)}}}},"31c2":function(e,n,t){"use strict";t.r(n);var r=t("d046");n["default"]={namespaced:!0,state:{routes:r["b"]},mutations:{},actions:{}}},"56d7":function(e,n,t){"use strict";t.r(n);t("e623"),t("e379"),t("5dc8"),t("37e1");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={name:"App"},c=u,i=t("2877"),d=Object(i["a"])(c,o,a,!1,null,null,null),f=d.exports,l=t("8c4f"),s=t("d046");r["default"].use(l["a"]);var p=new l["a"]({mode:"hash",routes:s["a"]});p.beforeEach((function(e,n,t){if(e.path===n.path)return!1;t()}));var h=p,m=t("5c96"),b=t.n(m),v=(t("0fae"),t("6562"),t("13d5"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0"),t("2f62")),g={permissionRoutes:function(e){return e.permission.routes},mapActiveRoute:function(e){return e.activeRoute.activeRoute}},k=g;r["default"].use(v["a"]);var y=t("c653"),E=y.keys().reduce((function(e,n){var t=n.replace(/^\.\/(.*)\.\w+$/,"$1"),r=y(n);return e[t]=r.default,e}),{}),O=new v["a"].Store({modules:E,getters:k}),w=O;r["default"].use(b.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(f)},router:h,store:w}).$mount("#app")},6562:function(e,n,t){},8303:function(e,n,t){"use strict";t.r(n),n["default"]={namespaced:!0,state:{isCollapse:!1},mutations:{TOGGLECOLLAPSE:function(e){e.isCollapse=!e.isCollapse}},actions:{toggleCollapse:function(e){var n=e.commit;n("TOGGLECOLLAPSE")}}}},c653:function(e,n,t){var r={"./activeRoute.js":"038f","./global.js":"8303","./permission.js":"31c2"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},d046:function(e,n,t){"use strict";t.d(n,"b",(function(){return o}));t("99af"),t("d3b7");var r=[{path:"/login",name:"login",component:function(){return t.e("chunk-2d2315ba").then(t.bind(null,"efcf"))}}],o=[{path:"/",name:"_dashboard",redirect:"/dashboard",component:function(){return t.e("chunk-675b743f").then(t.bind(null,"841d"))},meta:{isSingle:!0},children:[{path:"/dashboard",name:"dashboard",component:function(){return t.e("chunk-2d230872").then(t.bind(null,"ed52"))},meta:{title:"首页",icon:"el-icon-date",lockNavbar:!0}}]},{path:"/component",name:"component",redirect:"/page1",component:function(){return t.e("chunk-675b743f").then(t.bind(null,"841d"))},meta:{title:"组件",icon:"el-icon-menu"},children:[{path:"/page1",name:"page1",component:function(){return t.e("chunk-2d0af86c").then(t.bind(null,"0f66"))},meta:{title:"页面一"}},{path:"/page2",name:"page2",component:function(){return t.e("chunk-2d0b30ac").then(t.bind(null,"274e"))},meta:{title:"页面二"}},{path:"/page3",name:"page3",component:function(){return t.e("chunk-2d22a14c").then(t.bind(null,"dfd8"))},meta:{title:"页面三"}}]},{path:"/_document",name:"_document",meta:{isSingle:!0},component:function(){return t.e("chunk-675b743f").then(t.bind(null,"841d"))},children:[{path:"/document",name:"document",meta:{title:"文档",icon:"el-icon-document",lockNavbar:!0},component:function(){return t.e("chunk-2d0d7846").then(t.bind(null,"76c4"))}}]},{path:"/permission",name:"permission",redirect:"/page4",meta:{title:"权限",icon:"el-icon-lock"},component:function(){return t.e("chunk-675b743f").then(t.bind(null,"841d"))},children:[{path:"/page4",name:"page4",component:function(){return t.e("chunk-2d0af86c").then(t.bind(null,"0f66"))},meta:{title:"页面权限"}},{path:"/page5",name:"page5",component:function(){return t.e("chunk-2d0b30ac").then(t.bind(null,"274e"))},meta:{title:"指令权限"}},{path:"/page6",name:"page6",component:function(){return t.e("chunk-2d22a14c").then(t.bind(null,"dfd8"))},meta:{title:"角色权限"}}]}],a=[].concat(r,o);n["a"]=a}});
//# sourceMappingURL=app.c8dbce50.js.map