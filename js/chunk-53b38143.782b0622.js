(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53b38143"],{"04d1":function(e,t,r){var n=r("342f"),c=n.match(/firefox\/(\d+)/i);e.exports=!!c&&+c[1]},1148:function(e,t,r){"use strict";var n=r("a691"),c=r("577e"),o=r("1d80");e.exports=function(e){var t=c(o(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},2532:function(e,t,r){"use strict";var n=r("23e7"),c=r("5a34"),o=r("1d80"),i=r("577e"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~i(o(this)).indexOf(i(c(e)),arguments.length>1?arguments[1]:void 0)}})},2848:function(e,t,r){},"408a":function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}},"44e7":function(e,t,r){var n=r("861d"),c=r("c6b6"),o=r("b622"),i=o("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==c(e))}},"4e82":function(e,t,r){"use strict";var n=r("23e7"),c=r("1c0b"),o=r("7b0b"),i=r("50c4"),a=r("577e"),s=r("d039"),u=r("addb"),l=r("a640"),d=r("04d1"),f=r("d998"),h=r("2d00"),b=r("512c"),v=[],p=v.sort,g=s((function(){v.sort(void 0)})),m=s((function(){v.sort(null)})),x=l("sort"),w=!s((function(){if(h)return h<70;if(!(d&&d>3)){if(f)return!0;if(b)return b<603;var e,t,r,n,c="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)v.push({k:t+n,v:r})}for(v.sort((function(e,t){return t.v-e.v})),n=0;n<v.length;n++)t=v[n].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}})),j=g||!m||!x||!w,O=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:a(t)>a(r)?1:-1}};n({target:"Array",proto:!0,forced:j},{sort:function(e){void 0!==e&&c(e);var t=o(this);if(w)return void 0===e?p.call(t):p.call(t,e);var r,n,a=[],s=i(t.length);for(n=0;n<s;n++)n in t&&a.push(t[n]);a=u(a,O(e)),r=a.length,n=0;while(n<r)t[n]=a[n++];while(n<s)delete t[n++];return t}})},"512c":function(e,t,r){var n=r("342f"),c=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!c&&+c[1]},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"841c":function(e,t,r){"use strict";var n=r("d784"),c=r("825a"),o=r("1d80"),i=r("129f"),a=r("577e"),s=r("14c3");n("search",(function(e,t,r){return[function(t){var r=o(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](a(r))},function(e){var n=c(this),o=a(e),u=r(t,n,o);if(u.done)return u.value;var l=n.lastIndex;i(l,0)||(n.lastIndex=0);var d=s(n,o);return i(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))},"99af":function(e,t,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),i=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),h=r("2d00"),b=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!c((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),m=d("concat"),x=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:o(e)},w=!g||!m;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,c,o,i=a(this),d=l(i,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?i:arguments[t],x(o)){if(c=s(o.length),f+c>v)throw TypeError(p);for(r=0;r<c;r++,f++)r in o&&u(d,f,o[r])}else{if(f>=v)throw TypeError(p);u(d,f++,o)}return d.length=f,d}})},a936:function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c"),r("b0c0");var n=r("7a23");Object(n["z"])("data-v-29322074");var c={class:"mb-10 leaderboard"},o={class:"my-5"},i={class:"mb-4 text-2xl font-bold text-center dark:text-white"},a={class:"p-5 mx-1 bg-gray-200 rounded md:w-1/2 md:mx-auto bg-opacity-60"},s={class:"mt-4"},u={key:0},l=["id"],d={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full  bg-gradient-to-t from-red-400 to-red-600"},f={class:"flex-1 ml-2 md:ml-4"},h={class:"text-lg font-semibold"},b={class:"p-2 border-2 border-red-400"},v={key:1,class:"flex items-center justify-center mt-10 space-x-1 text-sm text-gray-700  dark:text-white"},p=Object(n["h"])("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})],-1),g=Object(n["h"])("div",{class:"text-lg"},"Loading ...",-1),m=[p,g];function x(e,t,r,p,g,x){return Object(n["w"])(),Object(n["g"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("h1",i," Leaderboard-"+Object(n["H"])(this.$route.params.id),1),Object(n["h"])("div",a,[Object(n["h"])("div",null,[Object(n["P"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.search=e}),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=function(){return x.searchResult&&x.searchResult.apply(x,arguments)}),class:"input-block"},null,544),[[n["L"],g.search]])]),Object(n["h"])("div",s,[g.allresult.length>0?(Object(n["w"])(),Object(n["g"])("div",u,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(g.testResults,(function(e,t){return Object(n["w"])(),Object(n["g"])("div",{key:t,id:e.roll,class:Object(n["q"])("".concat(x.getborderStyle(e.position),"  flex justify-between items-center p-5 rounded bg-gray-100 dark:bg-gray-900 dark:text-white shadow-md"))},[Object(n["h"])("span",d,Object(n["H"])(e.position),1),Object(n["h"])("div",f,[Object(n["h"])("h2",h,Object(n["H"])(e.name),1),Object(n["h"])("p",null,Object(n["H"])(e.roll),1),Object(n["h"])("p",null,Object(n["H"])(e.duration)+" minutes",1)]),Object(n["h"])("div",b,Object(n["H"])(e.score),1)],10,l)})),128))])):(Object(n["w"])(),Object(n["g"])("div",v,m))])])])])}Object(n["x"])();var w=r("5530"),j=r("1da1"),O=(r("96cf"),r("d3b7"),r("99af"),r("d81d"),r("4e82"),r("b680"),r("4de4"),r("caad"),r("2532"),r("dce4")),y=r("5502"),R={data:function(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r,n,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(O["c"],"?type=routine&id=").concat(e.$route.params.id));case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.next=8,fetch(O["b"]+n.exam.examsheetid);case 8:return c=t.sent,t.next=11,c.json();case 11:o=t.sent,e.testResults=o.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return t.score-e.score})).map((function(e,t){return{position:t+1,name:e.name,roll:e.roll,duration:(e.duration/6e4).toFixed(2),score:e.score}})),e.allresult=e.testResults,setTimeout((function(){location.hash="#".concat(e.user.roll)}),2e3);case 15:case"end":return t.stop()}}),t)})))()},searchResult:function(){var e=this;this.testResults=this.allresult.filter((function(t){if(t.roll.toLowerCase().includes(e.search.toLowerCase())||t.name.toLowerCase().includes(e.search.toLowerCase()))return t}))},getStyle:function(e){return 1==e?"success":2==e?"orange darken-2":3==e?"indigo":""},getborderStyle:function(e){return 1==e?"s singleResult mb-2":2==e?"f singleResult mb-2":3==e?"d singleResult mb-2":"singleResult mb-2"}},computed:Object(w["a"])({},Object(y["d"])(["user"])),created:function(){this.modeltestResults()}};r("ea71");R.render=x,R.__scopeId="data-v-29322074";t["default"]=R},ab13:function(e,t,r){var n=r("b622"),c=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[c]=!1,"/./"[e](t)}catch(n){}}return!1}},addb:function(e,t){var r=Math.floor,n=function(e,t){var i=e.length,a=r(i/2);return i<8?c(e,t):o(n(e.slice(0,a),t),n(e.slice(a),t),t)},c=function(e,t){var r,n,c=e.length,o=1;while(o<c){n=o,r=e[o];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==o++&&(e[n]=r)}return e},o=function(e,t,r){var n=e.length,c=t.length,o=0,i=0,a=[];while(o<n||i<c)o<n&&i<c?a.push(r(e[o],t[i])<=0?e[o++]:t[i++]):a.push(o<n?e[o++]:t[i++]);return a};e.exports=n},b680:function(e,t,r){"use strict";var n=r("23e7"),c=r("a691"),o=r("408a"),i=r("1148"),a=r("d039"),s=1..toFixed,u=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},d=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=function(e,t,r){var n=-1,c=r;while(++n<6)c+=t*e[n],e[n]=c%1e7,c=u(c/1e7)},h=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=u(n/t),n=n%t*1e7},b=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=String(e[t]);r=""===r?n:r+i.call("0",7-n.length)+n}return r},v=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){s.call({})}));n({target:"Number",proto:!0,forced:v},{toFixed:function(e){var t,r,n,a,s=o(this),u=c(e),v=[0,0,0,0,0,0],p="",g="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(t=d(s*l(2,69,1))-69,r=t<0?s*l(2,-t,1):s/l(2,t,1),r*=4503599627370496,t=52-t,t>0){f(v,0,r),n=u;while(n>=7)f(v,1e7,0),n-=7;f(v,l(10,n,1),0),n=t-1;while(n>=23)h(v,1<<23),n-=23;h(v,1<<n),f(v,1,1),h(v,2),g=b(v)}else f(v,0,r),f(v,1<<-t,0),g=b(v)+i.call("0",u);return u>0?(a=g.length,g=p+(a<=u?"0."+i.call("0",u-a)+g:g.slice(0,a-u)+"."+g.slice(a-u))):g=p+g,g}})},caad:function(e,t,r){"use strict";var n=r("23e7"),c=r("4d64").includes,o=r("44d2");n({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d81d:function(e,t,r){"use strict";var n=r("23e7"),c=r("b727").map,o=r("1dde"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},d998:function(e,t,r){var n=r("342f");e.exports=/MSIE|Trident/.test(n)},ea71:function(e,t,r){"use strict";r("2848")}}]);