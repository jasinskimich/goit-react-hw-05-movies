"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{687:function(n,t,e){e.d(t,{Df:function(){return i},Hx:function(){return a},Y5:function(){return c},xc:function(){return u},z1:function(){return o}});var r="ba80dd2d26907ca844be2662df6ef522";function i(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.json()}))}function o(n){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(n)).then((function(n){return n.json()}))}function c(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))}function u(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function a(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,i,o=e(861),c=e(439),u=e(757),a=e.n(u),s=e(791),f=e(87),h=e(689),p=e(168),d=e(444),l=d.ZP.ul(r||(r=(0,p.Z)(["\nlist-style-type: none;\n  margin: 2rem 0;\n  padding: 0;\n"]))),m=d.ZP.li(i||(i=(0,p.Z)(["\n  margin: 1rem 0;\n"]))),v=e(687),y=e(184),x=function(){var n,t=(0,f.lr)(),e=(0,c.Z)(t,2),r=e[0],i=e[1],u=null!==(n=r.get("name"))&&void 0!==n?n:"",p=(0,s.useState)(""),d=(0,c.Z)(p,2),x=d[0],g=d[1],j=(0,s.useState)([]),k=(0,c.Z)(j,2),b=k[0],w=k[1],_=(0,h.TH)(),Z=function(){var n=(0,o.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,v.z1)(x);case 3:e=n.sent,w(e.results),i({name:x});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){function n(){return n=(0,o.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.z1)(t);case 2:e=n.sent,w(e.results);case 4:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(u),g(u)}),[u]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:(0,y.jsxs)("form",{onSubmit:Z,children:[(0,y.jsx)("input",{type:"text",placeholder:"Type a movie name..",value:x,onChange:function(n){g(n.target.value)},id:"movie_search"}),(0,y.jsx)("button",{type:"submit",children:"Find!"})]})}),(0,y.jsx)(l,{children:b.map((function(n){return(0,y.jsx)(m,{children:(0,y.jsxs)(f.rU,{to:"/movies/".concat(n.id),state:{from:_},children:[n.title," (",new Date(n.release_date).getFullYear(),")"]})},n.id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=310.d336ec1d.chunk.js.map