"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{687:function(n,t,e){e.d(t,{Df:function(){return c},Hx:function(){return a},Y5:function(){return o},xc:function(){return u},z1:function(){return i}});var r="ba80dd2d26907ca844be2662df6ef522";function c(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))}function i(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(n)).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c=e(861),i=e(439),o=e(757),u=e.n(o),a=e(791),f=e(87),s=e(687),h=e(168),d=e(444).ZP.ul(r||(r=(0,h.Z)(["\nlist-style-type: none;\n  margin: 2rem 0;\n  padding: 0;\n"]))),p=e(184),v=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,a.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Df)();case 2:t=n.sent,r(t.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)(d,{children:e.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,c,i,o){try{var u=n[i](o),a=u.value}catch(f){return void e(f)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,i){var o=n.apply(t,e);function u(n){r(o,c,i,u,a,"next",n)}function a(n){r(o,c,i,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=304.211d40b7.chunk.js.map