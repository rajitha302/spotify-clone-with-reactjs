(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/logo.70691a02.png"},48:function(e,a,t){e.exports=t(68)},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(53),t(10)),s=(t(54),t(55),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("be9fc269f3aa4ab8b57d837ba4b7b905","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var i=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify logo"}),r.a.createElement("a",{href:s},"LOGIN WITH SPOTIFY"))},m=t(26),u=t.n(m),E=(t(56),t(57),t(27)),d=t.n(E);t(58);var f=function(e){var a=e.title,t=e.Icon;return r.a.createElement("div",{className:"sidebarOptions"},t&&r.a.createElement(t,{className:"sidebarOptions__icon"}),t?r.a.createElement("h4",null,a):r.a.createElement("p",null,a))},p=t(28),v=t.n(p),_=t(19),y=t.n(_),b=t(33),g=t.n(b),h=Object(n.createContext)(),N=function(e){var a=e.initialState,t=e.reducer,l=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(t,a)},l)},S=function(){return Object(n.useContext)(h)},O=S;var k=function(){var e,a=O(),t=Object(o.a)(a,2),n=t[0].playlists;return t[1],r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"sidebar__logo",src:d.a,alt:""}),r.a.createElement(f,{Icon:v.a,title:"Home"}),r.a.createElement(f,{Icon:y.a,title:"Search"}),r.a.createElement(f,{Icon:g.a,title:"Your Library"}),r.a.createElement("br",null),r.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),r.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return r.a.createElement(f,{title:e.name})})))},w=(t(64),t(65),t(82));var j=function(){var e,a=O(),t=Object(o.a)(a,2),n=t[0].user;return t[1],r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__left"},r.a.createElement(y.a,null),r.a.createElement("input",{type:"text",placeholder:"Search for Artists, Songs and Podcasts"})),r.a.createElement("div",{className:"header__right"},r.a.createElement(w.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),r.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))},T=t(34),I=t.n(T),L=t(35),P=t.n(L),R=t(36),x=t.n(R);t(66);var Y=function(e){var a=e.track;return r.a.createElement("div",{className:"songRow"},r.a.createElement("img",{className:"songRow__album",src:a.album.images[0].url,alt:""}),r.a.createElement("div",{className:"songRow__info"},r.a.createElement("h1",null,a.name),r.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(","),".",a.album.name)))};var A=function(e){var a=e.spotify,t=O(),n=Object(o.a)(t,2),l=n[0].discover_weekly;return n[1],r.a.createElement("div",{className:"body"},r.a.createElement(j,{spotify:a}),r.a.createElement("div",{className:"body__info"},r.a.createElement("img",{src:null===l||void 0===l?void 0:l.images[0].url,alt:""}),r.a.createElement("div",{className:"body__infoText"},r.a.createElement("strong",null,"PLAYLIST"),r.a.createElement("h2",null,"Description"),r.a.createElement("p",null,null===l||void 0===l?void 0:l.description))),r.a.createElement("div",{className:"body__songs"},r.a.createElement("div",{className:"body__icons"},r.a.createElement(I.a,{className:"body__shuffle"}),r.a.createElement(P.a,{fontSize:"large"}),r.a.createElement(x.a,null)),null===l||void 0===l?void 0:l.tracks.items.map((function(e){return r.a.createElement(Y,{track:e.track})}))))},C=(t(67),t(39)),K=t.n(C),W=t(38),z=t.n(W),U=t(40),D=t.n(U),V=t(37),B=t.n(V),H=t(41),J=t.n(H),M=t(42),F=t.n(M),G=t(43),Q=t.n(G),X=t(80),Z=t(81);var $=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__left"},r.a.createElement("img",{className:"footer__albumLogo",src:"",alt:""}),r.a.createElement("div",{className:"footer__singInfo"},r.a.createElement("h4",null,"yeah"),r.a.createElement("p",null,"gg"))),r.a.createElement("div",{className:"footer__center"},r.a.createElement(B.a,{className:"footer__pink"}),r.a.createElement(z.a,{className:"footer__icon"}),r.a.createElement(K.a,{fontSize:"large",className:"footer__icon"}),r.a.createElement(D.a,{className:"footer__icon"}),r.a.createElement(J.a,{className:"footer__pink"})),r.a.createElement("div",{className:"footer__right"},r.a.createElement(X.a,{container:!0,spacing:2},r.a.createElement(X.a,{item:!0},r.a.createElement(F.a,null)),r.a.createElement(X.a,{item:!0},r.a.createElement(Q.a,null)),r.a.createElement(X.a,{item:!0,xs:!0},r.a.createElement(Z.a,null)))))};var q=function(e){var a=e.spotify;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__body"},r.a.createElement(k,null),r.a.createElement(A,{spotify:a})),r.a.createElement($,{spotify:a}))},ee=new u.a;var ae=function(){var e=S(),a=Object(o.a)(e,2),t=a[0],l=(t.user,t.token),c=a[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,a){var t=a.split("=");return e[t[0]]=decodeURIComponent(t[1]),e}),{});window.location.hash="";var a=e.access_token;a&&(c({type:"SET_TOKEN",token:a}),ee.setAccessToken(a),ee.getMe().then((function(e){c({type:"SET_USER",user:e})})),ee.getUserPlaylists().then((function(e){return c({type:"SET_PLAYLISTS",playlists:e})})),ee.getPlaylist("37i9dQZEVXcT0IbLzKfIsm").then((function(e){return c({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),r.a.createElement("div",{className:"app"},l?r.a.createElement(q,{spotify:ee}):r.a.createElement(i,null))},te=t(9),ne=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:a.user});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:a.token});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:a.playlists});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:a.discover_weekly});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,{initialState:{user:null,playlists:[],playing:!1,item:null},reducer:ne},r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7b06ff39.chunk.js.map