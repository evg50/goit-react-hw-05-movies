"use strict";(self.webpackChunkhomeWork5=self.webpackChunkhomeWork5||[]).push([[186],{186:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(5861),a=t(885),s=t(7757),u=t.n(s),c=t(6424),i=t(2791),o=t(184);function p(e){var r=e.id,t=(0,i.useState)([]),s=(0,a.Z)(t,2),p=s[0],l=s[1];console.log("props reviews",r);var f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.getMovieReviews(r);case 2:if(t=e.sent,console.log(t),!t){e.next=7;break}return l(t),e.abrupt("return");case 7:console.log("empty reviews");case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){r&&f(r)}),[r]),(0,o.jsx)(o.Fragment,{children:p&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Reviwes"}),(0,o.jsx)("ul",{children:p.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h2",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})," "]})})}},6424:function(e,r,t){var n=t(5861),a=t(7757),s=t.n(a),u=t(4569),c=t.n(u);function i(){return(i=(0,n.Z)(s().mark((function e(){var r,t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:"trending/movie/day"},e.next=3,c()(r);case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"movie/".concat(r)},e.next=3,c()(t);case 3:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"search/movie",params:{query:r}},e.next=3,c()(t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"movie/".concat(r,"/credits")},e.next=3,c()(t);case 3:return n=e.sent,a=n.data,console.log("cast",a.cast),e.abrupt("return",a.cast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"movie/".concat(r,"/reviews"),params:{language:"en-Us"}},e.prev=1,e.next=4,c()(t);case 4:return n=e.sent,a=n.data,console.log("reviews",a.results),e.abrupt("return",a.results);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}c().defaults.baseURL="https://api.themoviedb.org/3/",c().defaults.params={api_key:"3b0a0f3678b03bfe7113d836939cb420",language:"ru-Ru"};var v={trendApi:function(){return i.apply(this,arguments)},getMovieDetails:function(e){return o.apply(this,arguments)},searchMovie:function(e){return p.apply(this,arguments)},getMovieCast:function(e){return l.apply(this,arguments)},getMovieReviews:function(e){return f.apply(this,arguments)}};r.Z=v}}]);
//# sourceMappingURL=186.69e296ae.chunk.js.map