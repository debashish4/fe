(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b9b":function(e,t,n){"use strict";var r=n("580d"),o=n.n(r);o.a},"14c3":function(e,t,n){var r=n("c6b6"),o=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"199a":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),o=n("825a"),i=n("7b0b"),a=n("50c4"),s=n("a691"),c=n("1d80"),u=n("8aa5"),d=n("14c3"),l=Math.max,h=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=r.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(n,r){var o=c(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!g&&w||"string"===typeof r&&-1===r.indexOf(x)){var i=n(t,e,this,r);if(i.done)return i.value}var c=o(e),f=String(this),p="function"===typeof r;p||(r=String(r));var v=c.global;if(v){var y=c.unicode;c.lastIndex=0}var _=[];while(1){var I=d(c,f);if(null===I)break;if(_.push(I),!v)break;var k=String(I[0]);""===k&&(c.lastIndex=u(f,a(c.lastIndex),y))}for(var C="",E=0,O=0;O<_.length;O++){I=_[O];for(var A=String(I[0]),S=l(h(s(I.index),f.length),0),Q=[],q=1;q<I.length;q++)Q.push(m(I[q]));var T=I.groups;if(p){var R=[A].concat(Q,S,f);void 0!==T&&R.push(T);var N=String(r.apply(void 0,R))}else N=b(A,f,S,Q,T,r);S>=E&&(C+=f.slice(E,S)+N,E=S+A.length)}return C+f.slice(E)}];function b(e,n,r,o,a,s){var c=r+e.length,u=o.length,d=v;return void 0!==a&&(a=i(a),d=p),t.call(s,d,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var d=+i;if(0===d)return t;if(d>u){var l=f(d/10);return 0===l?t:l<=u?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):t}s=o[d-1]}return void 0===s?"":s}))}}))},"580d":function(e,t,n){},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),i=function(e){return function(t,n){var i,a,s=String(o(t)),c=r(n),u=s.length;return c<0||c>=u?e?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):i:e?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,s=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],l=c||d||u;l&&(s=function(e){var t,n,o,s,l=this,h=u&&l.sticky,f=r.call(l),p=l.source,v=0,m=e;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==e[l.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,v++),n=new RegExp("^(?:"+p+")",f)),d&&(n=new RegExp("^"+p+"$(?!\\s)",f)),c&&(t=l.lastIndex),o=i.call(h?n:l,m),h?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=l.lastIndex,l.lastIndex+=o[0].length):l.lastIndex=0:c&&o&&(l.lastIndex=l.global?o.index+o[0].length:t),d&&o&&o.length>1&&a.call(o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),e.exports=s},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),h=n("b622"),f=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),w=l("concat"),x=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:i(e)},b=!g||!w;r({target:"Array",proto:!0,forced:b},{concat:function(e){var t,n,r,o,i,a=s(this),l=d(a,0),h=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],x(i)){if(o=c(i.length),h+o>v)throw TypeError(m);for(n=0;n<o;n++,h++)n in i&&u(l,h,i[n])}else{if(h>=v)throw TypeError(m);u(l,h++,i)}return l.length=h,l}})},"9f7f":function(e,t,n){"use strict";var r=n("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},acbe:function(e,t,n){},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ba44:function(e,t,n){"use strict";var r=n("199a"),o=n.n(r);o.a},c975:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,i=n("a640"),a=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=i("indexOf"),d=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!u||!d},{indexOf:function(e){return c?s.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},c9ae:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),i=n("b622"),a=n("9263"),s=n("9112"),c=i("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),h=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),f=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,l){var p=i(e),v=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!m||"replace"===e&&(!u||!d||h)||"split"===e&&!f){var g=/./[p],w=n(p,""[e],(function(e,t,n,r,o){return t.exec===a?v&&!o?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=w[0],b=w[1];r(String.prototype,e,x),r(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}l&&s(RegExp.prototype[p],"sham",!0)}},e254:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cmp-question"},[n("p",{staticClass:"question"},[e._v(e._s(e.displayQuestion))]),n("div",{staticClass:"q-option-container is-flex",class:{"disable-click":null!==e.selectedOptionIndex}},e._l(e.currentQuestion.options,(function(t,r){return n("div",{key:r,staticClass:"q-option",class:{"selected-option":e.selectedOptionIndex===r,"correct-answer":r===e.correctAnswerIndex,"wrong-answer":e.wrongAnswerIndex===r}},[n("Option",{on:{click:function(n){return e.handleAnswerClick(e.currentQuestion.id,t,r)}}},[e._v(e._s(t))])],1)})),0)])},o=[],i=(n("c975"),n("b0c0"),n("5530")),a=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card cmp-option",on:{click:e.handleOptionClick}},[n("p",{staticClass:"title is-4"},[e._t("default")],2)])},c=[],u={methods:{handleOptionClick:function(){this.$emit("click")}}},d=u,l=(n("e52f"),n("2877")),h=Object(l["a"])(d,s,c,!1,null,"2afd5621",null),f=h.exports,p=[{question:"Which of these describe your character?",friendQuestion:"Which of these describe %friendName% character ?",id:"q_1",options:["Funny","Kind","Serious","Happy"]},{question:"Which one of these you prefer most ?",friendQuestion:"Which one of these would %friendName% prefer ?",id:"q_2",options:["Cat","Dog","Parrot","None"]},{question:"What did you wanted to be when you were a kid?",friendQuestion:"What %friendName% would wanted to be in his/her childhood",id:"q_3",options:["Doctor","Actor","Teacher","Singer","Engineer","none"]},{question:"If you get an opportunity for an adventurous journey, who would you prefer?",friendQuestion:"If %friendName% get an opportunity for an adventurous journey, who would he/she prefer?",id:"q_4",options:["Friends","Family","Alone","Soulmate"]},{question:"What is your favorite ice cream flavor?",friendQuestion:"What is %friendName%'s favorite ice cream flavor?",id:"q_5",options:["Chocolate","Vanilla","Butterscotch","Strawberry"]},{question:"What is your favorite thing to do with your leisure time?",friendQuestion:"What is %friendName%'s favorite thing to do in his/her leisure time?",id:"q_6",options:["Reading","Walking","Gardening","Sewing","Writing","Drawing"]},{question:"What is one thing/activity that makes you relax?",friendQuestion:"What is one thing/activity that makes %friendName% relax?",id:"q_7",options:["Dancing","Listening music","Go for a drive","Sleeping","Reading"]},{question:"What is something you look forward to doing when you retire?",friendQuestion:"What is something %friendName% look forward to do when he/she retires?",id:"q_8",options:["Spend quality time","Travel","Get a hobby","Volunteer"]},{question:"What season is your favorite?",friendQuestion:"What season is %friendName%'s favorite?",id:"q_9",options:["Summer","Rainy","Winter","Autumn"]},{question:"What do you use the most ?",friendQuestion:"What does %friendName% use the most ?",id:"q_10",options:["Instagram","WhatsApp","Tiktok","Facebook"]},{question:"What is one thing you are always losing?",friendQuestion:"What is one thing that %friendName% is always losing?",id:"q_11",options:["Keys","Headphones","Umbrella","Password","Pen caps"]},{question:"What is your favorite music genre?",friendQuestion:"What is %friendName%'s favorite music genre?",id:"q_12",options:["Hip Hop","Rock","Pop","Heavy Metal","Folk"]},{question:"What is your favorite movie genre?",friendQuestion:"What is %friendName%'s favorite movie genre?",id:"q_13",options:["Horror","Action","Romantic","Comedy"]},{question:"Do you prefer the beach or the mountains?",friendQuestion:"What would %friendName% prefer ?",id:"q_14",options:["Beach","Mountain"]},{question:"What is your favorite sport?",friendQuestion:"What is %friendName%'s favorite sport?",id:"q_15",options:["Tennis","Hockey","Football","Cricket"]}],v=p,m=n("c22e"),g=(n("ac1f"),n("5319"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={"%friendName%":t,"his/her":"m"===n?"his":"her","he/she":"m"===n?"he":"she","himself/herself":"m"===n?"himself":"herself"};return e.replace(/%friendName%|his\/her|he\/she|himself\/herself/gi,(function(e){return r[e]}))}),w=function(e,t){var n=0;for(var r in e)e[r]===t[r]&&n++;return n},x={name:"Question",data:function(){return{currentQuestion:{},currentQuestionIndex:0,answers:{},selectedOptionIndex:null,correctAnswerIndex:null,wrongAnswerIndex:null}},created:function(){var e=this;e.authorInfo.name||e.$router.push({path:"/"})},mounted:function(){var e=this;e.loadQustion(this.currentQuestionIndex),e.showLoader({show:!1})},computed:Object(i["a"])(Object(i["a"])({},Object(a["c"])(["authorInfo","authorAnswers","friendAnswers","friendInfo","isFriend"])),{},{displayQuestion:function(){var e=this;return e.isFriend?g(e.currentQuestion.friendQuestion,e.authorInfo.name,e.authorInfo.gender):e.currentQuestion.question}}),methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["showLoader","saveAuthorInfo","saveAuthorAnswers","saveFriendInfo","saveFriendAnswers","saveNumberOfQuestions"])),{},{loadQustion:function(e){var t=this;t.selectedOptionIndex=null,t.correctAnswerIndex=null,t.wrongAnswerIndex=null,t.currentQuestion=Object(i["a"])({},v[e])},handleAnswerClick:function(e,t,n){var r=this;r.selectedOptionIndex=n,r.isFriend?t===r.authorAnswers[e]?r.correctAnswerIndex=n:(r.wrongAnswerIndex=n,r.correctAnswerIndex=r.currentQuestion.options.indexOf(r.authorAnswers[e])):r.selectedOptionIndex=n,r.answers[e]=t,setTimeout((function(){if(r.currentQuestionIndex<v.length-1)r.currentQuestionIndex++,r.loadQustion(r.currentQuestionIndex);else{if(console.log(r.answers),r.saveNumberOfQuestions(v.length),r.isFriend){r.showLoader({show:!0,text:"Please wait! Saving answers."}),r.saveFriendAnswers(r.answers);var e=m["a"].database().ref("/".concat(r.authorInfo.key,"/friendData")).push({answered:w(r.authorAnswers,r.friendAnswers),name:r.friendInfo.name,gender:r.friendInfo.gender});return e.then((function(e){r.saveFriendInfo({key:e.key}),r.$router.push({path:"/result"})})),void r.showLoader({show:!1,text:""})}r.showLoader({show:!0,text:"Saving your answers."});var t=m["a"].database().ref("/").push({authorData:{authorAnswers:r.answers,name:r.authorInfo.name,gender:r.authorInfo.gender}});t.then((function(e){r.saveAuthorInfo({key:e.key}),r.saveAuthorAnswers(r.answers),r.$router.push({path:"./share"})}))}}),r.isFriend?1200:5e3)}}),components:{Option:f}},b=x,y=(n("ba44"),Object(l["a"])(b,r,o,!1,null,"5d1b8196",null));t["default"]=y.exports},e52f:function(e,t,n){"use strict";var r=n("acbe"),o=n.n(r);o.a},e5c6:function(e,t,n){"use strict";var r=n("c9ae"),o=n.n(r);o.a},eeac:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cmp-result"},[e.showEmptyDataText?n("p",{staticClass:"msg"},[e._v("Oops! no data")]):n("table",{staticClass:"table"},[e._m(0),n("tbody",e._l(e.result,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.answered)+" / "+e._s(e.numberOfQuestions))])])})),0)]),e.showEmptyDataText?e._e():n("p",{staticClass:"msg"},[e._v("Thank you for playing!")]),n("p",{staticClass:"create-new"},[n("Button",{attrs:{otherClass:"is-outlined"},on:{click:e.handleNewChallenge}},[e._v("Create new challenge")])],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Score")])])])}],i=(n("99af"),n("b0c0"),n("5530")),a=n("2f62"),s=n("fe43"),c=n("c22e"),u={data:function(){return{result:[]}},mounted:function(){var e=this;e.showLoader({show:!0,text:"Fetching result"});var t=[];c["a"].database().ref("/".concat(e.authorInfo.key,"/friendData")).once("value",(function(n){var r=n.val();for(var o in r)t.push({name:r[o].name,answered:r[o].answered});e.result=[].concat(t),e.showLoader({show:!1})}))},methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["resetTheStore","showLoader"])),{},{handleNewChallenge:function(){var e=this;localStorage.removeItem("FE_Info"),e.resetTheStore(),e.$router.push({path:"/"})}}),computed:Object(i["a"])(Object(i["a"])({},Object(a["c"])(["authorInfo","isCompleted","numberOfQuestions"])),{},{showEmptyDataText:function(){var e=this;return!e.result.length}}),components:{Button:s["a"]}},d=u,l=(n("0b9b"),n("2877")),h=Object(l["a"])(d,r,o,!1,null,"23afd5ec",null);t["default"]=h.exports},fbd8:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cmp-share"},[r("div",{staticClass:"share-link-container"},[r("p",{staticClass:"msg-thanks"},[e._v("Thanks for playing!")]),r("p",{staticClass:"msg-info"},[e._v("Share the link with all your friends and let's see how many they get right about you.")]),r("p",{staticClass:"share-link-code has-background-light",attrs:{disabled:"{true}"}},[e._v(" "+e._s(e.shareLink)+" "),r("span",{staticClass:"copy-link-button",on:{click:function(t){return e.copyToClipboard(e.shareLink)}}},[e._v(e._s(e.copyLinkText))])]),e._v(" Share link: "),r("div",{staticClass:"social-share"},[r("div",{staticClass:"whatsapp"},[r("a",{staticClass:"button is-primary is-medium is-outlined",attrs:{href:"whatsapp://send?text="+e.encodeURIComonentShareLink,"data-action":"share/whatsapp/share"}},[e._v(" Share via "),r("img",{attrs:{width:"50",src:n("39b5"),alt:""}})])]),r("div",{staticClass:"fb"},[r("a",{staticClass:"button is-info is-medium is-outlined",attrs:{href:"fb-messenger://share/?link="+e.encodeURIComonentShareLink}},[e._v(" Share via "),r("img",{attrs:{width:"50",src:n("fcd5"),alt:""}})])])]),r("div",{staticClass:"view-result"},[r("p",{},[e._v(' Once above link is shared, you can view the score of your friends by clicking "view result" button from '),r("router-link",{attrs:{to:"/"}},[e._v("login")]),e._v(" page. ")],1)])])])},o=[],i=(n("99af"),n("5530")),a=n("2f62"),s={data:function(){return{copyLinkText:"copy"}},mounted:function(){var e=this;e.updateExamCreated(!0),e.showLoader({show:!1})},computed:Object(i["a"])(Object(i["a"])({},Object(a["c"])(["authorInfo"])),{},{shareLink:function(){return"".concat(window.location.href,"/").concat(this.authorInfo.key)},encodeURIComonentShareLink:function(){var e=this;return encodeURIComponent(e.shareLink)}}),methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["updateExamCreated","showLoader"])),{},{copyToClipboard:function(e){var t=this,n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n),t.copyLinkText="copied",setTimeout((function(){t.copyLinkText="Copy"}),5e3)}})},c=s,u=(n("e5c6"),n("2877")),d=Object(u["a"])(c,r,o,!1,null,null,null);t["default"]=d.exports}}]);