(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],{40:function(s,e,a){},42:function(s,e,a){},49:function(s,e,a){"use strict";a.r(e);var t=a(2),c=a.n(t),i=a(29),n=a.n(i),r=(a(40),a(41),a(42),a(0)),l=function(){return Object(r.jsxs)("div",{className:"page-flows",children:[Object(r.jsx)("span",{className:"page-flows__flow",children:Object(r.jsx)("i",{className:"fas fa-chevron-left"})}),Object(r.jsx)("span",{className:"page-flows__flow",children:Object(r.jsx)("i",{className:"fas fa-chevron-right disabled"})})]})},j=function(){return Object(r.jsxs)("div",{className:"search-form",children:[Object(r.jsx)("span",{className:"search-form__icon",children:Object(r.jsx)("i",{className:"fas fa-search"})}),Object(r.jsx)("input",{type:"text",placeholder:"Search"})]})},o=a(8),d=a(15),b=a.n(d),m=["Private Session","Account","Settings","Log Out"],h=function(s){var e=s.list,a=s.className;return Object(r.jsx)("ul",{className:a,children:e.map((function(s,e){return Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(){},children:s})},e)}))})},u=function(){var s=Object(t.useState)(!1),e=Object(o.a)(s,2),a=e[0],c=e[1];return Object(r.jsxs)("div",{className:"user",children:[Object(r.jsx)("span",{className:"user__notification",children:Object(r.jsx)("i",{className:"fas fa-bell"})}),Object(r.jsx)("span",{className:"user__download",children:Object(r.jsx)("i",{className:"fas fa-download"})}),Object(r.jsxs)("div",{className:"user__info",children:[Object(r.jsx)("span",{className:"user__info__img",children:Object(r.jsx)("img",{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=Overall&clotheColor=Gray01&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Yellow",alt:"random avatar"})}),Object(r.jsx)("span",{className:"user__name",children:"Alex Fedorchenko"})]}),Object(r.jsxs)("div",{className:"user__actions",children:[Object(r.jsx)("button",{onClick:function(){return c((function(s){return!s}))},className:b()("dropdown-toggle",{"is-open":a}),type:"button",children:Object(r.jsx)("span",{className:"page-flows__flow",children:Object(r.jsx)("i",{className:"fas fa-chevron-down"})})}),a&&Object(r.jsx)(h,{list:m,className:"dropdown-list"})]})]})},O=function(){return Object(r.jsxs)("section",{className:"header",children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{}),Object(r.jsx)(u,{})]})},x=function(s){var e=s.title,a=s.children,c=Object(t.useState)(!0),i=Object(o.a)(c,2),n=i[0],l=i[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("button",{onClick:function(){return l((function(s){return!s}))},className:"dropdown-toggle",type:"button",children:[Object(r.jsx)("span",{className:"navigation__list__title",children:e}),Object(r.jsx)("span",{className:"navigation__list__icon",children:Object(r.jsx)("i",{className:b()("fas",{"fa-chevron-down":!n,"fa-chevron-up":n})})})]}),n&&a]})},_=[["Browse","fas fa-window-restore"],["Activity","fas fa-user-friends"],["Radio","fas fa-broadcast-tower"]],f=[["Songs","fas fa-headphones"],["Albums","fas fa-music"],["Artists","fas fa-user"],["Local Files","fas fa-file"]],p=[["Doo Wop","fas fa-record-vinyl"],["Pop Classics","fas fa-record-vinyl"],["Love $ongs","fas fa-record-vinyl"],["Hipster","fas fa-record-vinyl"],["New Music Friday","fas fa-record-vinyl"],["Techno Poppers","fas fa-record-vinyl"],["Summer Soothers","fas fa-record-vinyl"],["Doo Wop","fas fa-record-vinyl"],["Pop Classics","fas fa-record-vinyl"],["Love $ongs","fas fa-record-vinyl"],["Hipster","fas fa-record-vinyl"],["New Music Friday","fas fa-record-vinyl"],["Techno Poppers","fas fa-record-vinyl"],["Summer Soothers","fas fa-record-vinyl"],["Hard Rap","fas fa-record-vinyl"]],v=function(s){var e=s.list,a=s.className;return Object(r.jsx)("ul",{className:a,children:e.map((function(s,e){return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"dropdown-list__item",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"".concat(s[1])})}),Object(r.jsx)("button",{onClick:function(){},children:s[0]})]})},e)}))})},N=function(){return Object(r.jsxs)("div",{className:"content__left",children:[Object(r.jsxs)("section",{className:"navigation",children:[Object(r.jsx)("div",{className:"navigation__list",children:Object(r.jsx)(x,{title:"Main",children:Object(r.jsx)(v,{list:_,className:"dropdown-list"})})}),Object(r.jsx)("div",{className:"navigation__list",children:Object(r.jsx)(x,{title:"Your music",children:Object(r.jsx)(v,{list:f,className:"dropdown-list"})})}),Object(r.jsx)("div",{className:"navigation__list",children:Object(r.jsx)(x,{title:"Playlist",children:Object(r.jsx)(v,{list:p,className:"dropdown-list"})})})]}),Object(r.jsxs)("section",{className:"playlist",children:[Object(r.jsx)("div",{className:"playlist__btn",children:Object(r.jsx)("i",{className:"fas fa-plus"})}),Object(r.jsx)("span",{children:"New Playlist"})]}),Object(r.jsxs)("section",{className:"playing",children:[Object(r.jsx)("div",{className:"playing__artist",children:Object(r.jsx)("span",{className:"playing__artist__img",children:Object(r.jsx)("img",{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Red&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=Blue02&eyeType=Side&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Tanned",alt:"random avatar"})})}),Object(r.jsxs)("div",{className:"playing__song",children:[Object(r.jsx)("button",{className:"playing__song__name",children:"Some Type of Love"}),Object(r.jsx)("button",{className:"playing__song__artist",children:"Charlie Puth"})]}),Object(r.jsx)("div",{className:"playing__add",children:Object(r.jsx)("i",{className:"fas fa-check"})})]})]})},g=function(s){var e=s.currentTab,a=s.setCurrentTab;return Object(r.jsxs)("div",{className:"artist__header",children:[Object(r.jsxs)("div",{className:"artist__info",children:[Object(r.jsxs)("div",{className:"profile__img",children:[Object(r.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg",alt:"G-Eazy"}),Object(r.jsx)("i",{className:"fas fa-check"})]}),Object(r.jsxs)("div",{className:"artist__info__meta",children:[Object(r.jsx)("div",{className:"artist__info__type",children:"artist"}),Object(r.jsx)("div",{className:"artist__info__name",children:"G-Eazy"}),Object(r.jsxs)("div",{className:"artist__info__actions",children:[Object(r.jsxs)("button",{className:"btn-play",children:[Object(r.jsx)("i",{className:"fas fa-play"}),"Play"]}),Object(r.jsx)("button",{className:"btn-follow",children:"Follow"}),Object(r.jsx)("button",{className:"btn-more",children:Object(r.jsx)("i",{className:"fas fa-ellipsis-h"})})]})]})]}),Object(r.jsxs)("div",{className:"artist__listeners",children:[Object(r.jsx)("div",{className:"artist__listeners__count",children:"15,662,810"}),Object(r.jsx)("div",{className:"artist__listeners__label",children:"MONTHLY LISTENERS"})]}),Object(r.jsx)("div",{className:"artist__navigation",children:Object(r.jsxs)("ul",{className:"nav nav-tabs",children:[Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:b()("nav-tabs__tab",{"is-active":"overview"===e}),onClick:function(){return a("overview")},children:"overview"})}),Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:b()("nav-tabs__tab",{"is-active":"related-artist"===e}),onClick:function(){return a("related-artist")},children:"related artist"})})]})})]})},w=function(){return Object(r.jsxs)("div",{className:"album__info",children:[Object(r.jsx)("div",{className:"album__info__img",children:Object(r.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg",alt:"When It's Dark Out"})}),Object(r.jsxs)("div",{className:"album__info__meta",children:[Object(r.jsx)("div",{className:"album__year",children:"2015"}),Object(r.jsx)("div",{className:"album__name",children:"When It's Dark Out"}),Object(r.jsxs)("div",{className:"album__actions",children:[Object(r.jsx)("button",{className:"btn-rounded btn-save",children:"Save"}),Object(r.jsx)("button",{className:"btn-rounded btn-more",children:Object(r.jsx)("i",{className:"fas fa-ellipsis-h"})})]})]})]})},y=function(s){var e=s.tracks;return Object(r.jsxs)("div",{className:"album__tracks",children:[Object(r.jsxs)("div",{className:"album__tracks__head",children:[Object(r.jsx)("div",{className:"album__tracks__head__number",children:"#"}),Object(r.jsx)("div",{className:"album__tracks__head__title",children:" Song"}),Object(r.jsx)("div",{className:"album__tracks__head__length",children:Object(r.jsx)("i",{className:"fas fa-clock"})}),Object(r.jsx)("div",{className:"album__tracks__head__popularity",children:Object(r.jsx)("i",{className:"fas fa-thumbs-up"})})]}),e.map((function(s,e){return Object(r.jsxs)("div",{className:"track",children:[Object(r.jsx)("div",{className:"track__number",children:e+1}),Object(r.jsx)("div",{className:"track__added",children:Object(r.jsx)("i",{className:e%3===0?"fas fa-check":"fas fa-plus"})}),Object(r.jsxs)("div",{className:"track__title",children:[Object(r.jsx)("div",{className:"title",children:s[0]}),s.length>2&&Object(r.jsx)("div",{className:"featured",children:s[1]})]}),Object(r.jsx)("div",{className:"track__explicit",children:Object(r.jsx)("span",{className:"label",children:"Explicit"})}),Object(r.jsx)("div",{className:"track__length",children:s.length>2?s[2]:s[1]}),Object(r.jsx)("div",{className:"track__popularity",children:Object(r.jsx)("i",{className:e%2===0?"fas fa-level-up-alt":"fas fa-level-down-alt"})})]})}))]})},k=function(){return Object(r.jsxs)("div",{className:"tab-overview__albums",children:[Object(r.jsxs)("div",{className:"tab-overview__albums__head",children:[Object(r.jsx)("div",{className:"title",children:"Albums"}),Object(r.jsxs)("div",{className:"view-style",children:[Object(r.jsx)("i",{className:"fas fa-list is-active"}),Object(r.jsx)("i",{className:"fas fa-th-large"})]})]}),Object(r.jsxs)("div",{className:"album",children:[Object(r.jsx)(w,{}),Object(r.jsx)(y,{tracks:[["Intro","1:11"],["Random","3:00"],["Me, Myself & I","Bebe Rexha","4:11"],["One Of Them","Big Sean","3:20"],["Drifting"," Chris Brown Tory Lanez","4:33"],["Of All Things","Too $hort","3:34"],["Order More","Starrah","3:29"],["Calm Down","2:07"],["Don`t Let Me Go","Grace","3:11"],["You Got Me","3:28"],["What If","Gizzle","4:13"],["Sad Boy","3:28"],["Some Kind Of Drug","Marc E. Bassy","2:41"],["Think About You","Quin","2:54"],["Everything Will Be OK","Kehlani","3:34"],["For This","2:21"],["Nothing to Me","E-40","5:30"]]})]})]})},S=function(s){var e=s.tracks;return Object(r.jsx)("div",{className:"tracks",children:e.map((function(s,e){return Object(r.jsxs)("div",{className:"track",children:[Object(r.jsx)("div",{className:"track__img",children:Object(r.jsx)("img",{src:"".concat(s[0]),alt:"".concat(e+1)})}),Object(r.jsx)("div",{className:"track__number",children:e+1}),Object(r.jsx)("div",{className:"track__added",children:Object(r.jsx)("i",{className:"".concat(s[1])})}),Object(r.jsx)("div",{className:"track__title",children:s[2]}),Object(r.jsx)("div",{className:"track__explicit",children:Object(r.jsx)("span",{className:"label",children:"Explicit"})}),Object(r.jsx)("div",{className:"track__plays",children:s[3]})]},s[e])}))})},T=function(){return Object(r.jsxs)("div",{className:"tab-overview__artist",children:[Object(r.jsx)("div",{className:"title",children:"latest release"}),Object(r.jsxs)("div",{className:"latest-release",children:[Object(r.jsx)("div",{className:"latest-release__img",children:Object(r.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg",alt:"When It's Dark Out"})}),Object(r.jsxs)("div",{className:"latest-release__song",children:[Object(r.jsx)("div",{className:"latest-release__song__title",children:"Drifting (Track Commentary)"}),Object(r.jsx)("div",{className:"latest-release__song__date",children:"4 December 2015"})]})]}),Object(r.jsx)("div",{className:"title",children:"popular"}),Object(r.jsx)(S,{tracks:[["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg","fas fa-check","Me, Myself & I","147,544,165"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg","fas fa-plus","I Mean It","74,568,782"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg","fas fa-check","Calm Down","13,737,506"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg","fas fa-plus","Some Kind Of Drug","12,234,881"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg","fas fa-check","Let`s Get Lost","40,882,954"]]}),Object(r.jsx)("button",{className:"btn-rounded showmore",children:"Show 5 more"})]})},C=function(){var s=function(s){var e=s.artists;return Object(r.jsx)("div",{className:"related-artists",children:e.map((function(s){return Object(r.jsxs)("button",{className:"related-artist",children:[Object(r.jsx)("span",{className:"related-artist__img",children:Object(r.jsx)("img",{src:"".concat(s[0]),alt:s[1]})}),Object(r.jsx)("span",{className:"related-artist__name",children:s[1]})]})}))})};return Object(r.jsxs)("div",{className:"tab-overview__related",children:[Object(r.jsx)("div",{className:"title",children:"Related Artists"}),Object(r.jsx)(s,{artists:[["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg","Hoodie Allen"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg","Mike Stud"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg","Drake"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg","J. Cole"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg","Big Sean"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg","Wiz Khalifa"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg","Yonas"]]})]})},z=function(){return Object(r.jsxs)("div",{className:"tab-overview",children:[Object(r.jsx)(T,{}),Object(r.jsx)(C,{}),Object(r.jsx)(k,{})]})},D=[["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg","Hoodie Allen"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg","Mike Stud"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg","Drake"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg","J. Cole"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg","Big Sean"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg","Wiz Khalifa"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg","Yonas"],["https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg","Childish Gambino"]],M=function(){return Object(r.jsx)("div",{className:"tab-related-artists",children:Object(r.jsx)("div",{className:"media-cards",children:D.map((function(s,e){return Object(r.jsxs)("div",{className:"media-card",children:[Object(r.jsxs)("div",{className:"media-card__img",children:[Object(r.jsx)("img",{src:"".concat(s[0]),alt:"".concat(s[1])}),Object(r.jsx)("i",{className:"fas fa-play"})]}),Object(r.jsx)("button",{className:"media-card__title",children:s[1]})]},e)}))})})},B=function(s){return"related-artist"===s.currentTab?Object(r.jsx)("div",{className:"artist__content",children:Object(r.jsx)(M,{})}):Object(r.jsx)("div",{className:"artist__content",children:Object(r.jsx)(z,{})})},F=function(){var s=Object(t.useState)("overview"),e=Object(o.a)(s,2),a=e[0],c=e[1];return Object(r.jsx)("section",{className:"content__middle",children:Object(r.jsxs)("div",{className:"artist",children:[Object(r.jsx)(g,{currentTab:a,setCurrentTab:c}),Object(r.jsx)(B,{currentTab:a})]})})},L=["Sam Smith","Tarah Forsyth","Ricahrd Tomkins","Tony Russo","Alyssa Marist","Ron Samson"],R=function(){return Object(r.jsx)("section",{className:"content__right",children:Object(r.jsxs)("div",{className:"social",children:[Object(r.jsx)("div",{className:"friends",children:L.map((function(s){return Object(r.jsxs)("div",{className:"friend",children:[Object(r.jsx)("i",{className:"fas fa-user"}),Object(r.jsx)("span",{children:s})]},s)}))}),Object(r.jsx)("button",{className:"btn-rounded find-friends",children:"Find friends"})]})})},A=function(){return Object(r.jsxs)("section",{className:"content",children:[Object(r.jsx)(N,{}),Object(r.jsx)(F,{}),Object(r.jsx)(R,{})]})},H=a(73),I=a(74),E=function(){var s=c.a.useState(30),e=Object(o.a)(s,2),a=e[0],t=e[1];return Object(r.jsxs)("div",{className:"current-track__options",children:[Object(r.jsx)("span",{children:"Lirics"}),Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-bars"})}),Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-random"})}),Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-sync-alt"})}),Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fas fa-mobile-alt"}),"Devices Available"]}),Object(r.jsxs)("span",{className:"volume",children:[Object(r.jsx)("i",{className:"fas fa-volume-up"}),Object(r.jsx)("div",{className:"volume__scale",children:Object(r.jsx)(I.a,{item:!0,children:Object(r.jsx)(H.a,{value:a,onChange:function(s,e){t(e)},"aria-labelledby":"continuous-slider"})})})]})]})},P=function(){return Object(r.jsxs)("div",{className:"current-track__actions",children:[Object(r.jsx)("i",{className:"fas fa-step-backward back"}),Object(r.jsx)("i",{className:"fas fa-play play"}),Object(r.jsx)("i",{className:"fas fa-step-forward forward"})]})},G=a(72),W=Object(G.a)({root:{color:"#1ed760 !important",height:8},thumb:{height:24,width:24,backgroundColor:"#1ed760",border:"2px solid currentColor","&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{backgroundColor:"#4688d7 !important",left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(H.a),Y=function(s){var e=s.totalTime,a=s.currentTime,c=Object(t.useMemo)((function(){return e/100}),[e]),i=Object(t.useState)(a),n=Object(o.a)(i,2),l=n[0],j=n[1],d=function(s){var e=Math.floor(s/60),a=s%60>=10?Math.ceil(s%60):"0".concat(Math.ceil(s%60));return"".concat(e,":").concat(a)};return Object(r.jsxs)("div",{className:"current-track__scale",children:[Object(r.jsx)("div",{className:"current-track__scale__current-time",children:d(l*c)}),Object(r.jsx)(W,{valueLabelFormat:function(s){return d(+s*c)},valueLabelDisplay:"auto","aria-label":"pretto slider",value:l,onChange:function(s,e){return j(+e)}}),Object(r.jsx)("div",{className:"current-track__scale__total-time",children:d(e)})]})},K=function(){return Object(r.jsxs)("section",{className:"current-track",children:[Object(r.jsx)(P,{}),Object(r.jsx)(Y,{totalTime:241,currentTime:34}),Object(r.jsx)(E,{})]})};var J=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(O,{}),Object(r.jsx)(A,{}),Object(r.jsx)(K,{})]})},$=function(s){s&&s instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(e){var a=e.getCLS,t=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;a(s),t(s),c(s),i(s),n(s)}))};n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),$()}},[[49,1,2]]]);
//# sourceMappingURL=main.5acee7d7.chunk.js.map