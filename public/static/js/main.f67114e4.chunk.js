(this["webpackJsonpflohorses-frontend"]=this["webpackJsonpflohorses-frontend"]||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),s=t(8),o=(t(76),t(6)),i=(t(77),t(10)),m=t(9),u=t.n(m),d="https://flohorses.herokuapp.com/api",p=t(120),h=t(39);t(95),t(96);function g(e){return r.a.createElement("div",{id:"Home"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"}),r.a.createElement("p",{className:"brand-name"},"Flo Horses")),e.loggedInUser?r.a.createElement("div",{className:"auth-buttons"},r.a.createElement(s.b,{className:"button btn-orange",to:"/horses"},"Mes chevaux"),r.a.createElement(s.b,{className:"button btn-bordeaux",to:"/horses/create"},"Ajouter un cheval")):r.a.createElement("div",{className:"auth-buttons"},r.a.createElement(s.b,{className:"button btn-orange",to:"/login"},"Se connecter"),r.a.createElement(s.b,{className:"button btn-bordeaux",to:"/signup"},"S'inscrire")),r.a.createElement("div",{className:"intro-text"},"Gardez une trace de tous les chevaux avec lesquels vous avez travaill\xe9, ajoutez des notes pour chaque \xe9tape de leur d\xe9veloppement et retrouvez facilement chaque cheval."))}var E=t(12);t(62);function b(e){return r.a.createElement("div",{className:"auth"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"}),r.a.createElement("p",{className:"brand-name"},"Flo Horses"))),r.a.createElement(E.a,{className:"auth-form",onSubmit:e.onLogIn},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Email"),r.a.createElement(E.a.Control,{type:"email",placeholder:"flo@love.fr",name:"email"})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Mot de passe"),r.a.createElement(E.a.Control,{type:"password",placeholder:"******",name:"password"})),r.a.createElement("div",{className:"loginBtn"},r.a.createElement(h.a,{className:"loginBtnClick small-button btn-bordeaux",variant:"primary",type:"submit"},"Se connecter")),r.a.createElement(E.a.Text,{className:"small-text"},"Pas encore inscrit? ",r.a.createElement(s.b,{to:"/signup"},"Cr\xe9er un compte"))))}function f(e){return r.a.createElement("div",{className:"auth"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"}),r.a.createElement("p",{className:"brand-name"},"Flo Horses"))),r.a.createElement(E.a,{className:"auth-form",onSubmit:e.onSignUp},r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Nom d'utilisateur"),r.a.createElement(E.a.Control,{type:"string",placeholder:"Flo",name:"username"})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Email"),r.a.createElement(E.a.Control,{type:"email",placeholder:"flo@love.fr",name:"email"})),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"Mot de passe"),r.a.createElement(E.a.Control,{type:"password",placeholder:"******",name:"password"})),r.a.createElement("div",{className:"loginBtn"},r.a.createElement(h.a,{className:"loginBtnClick small-button btn-bordeaux",variant:"primary",type:"submit"},"Cr\xe9er un compte")),r.a.createElement(E.a.Text,{className:"small-text"},"D\xe9j\xe0 inscrit? ",r.a.createElement(s.b,{to:"/login"},"Se connecter"))))}t(103);function v(e){return r.a.createElement("div",{id:"NavBar"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"logo-img",src:"/images/logo.png",alt:"Logo"}))),r.a.createElement("div",{className:"add-horse"},r.a.createElement(s.b,{to:"/horses/create"},"+",r.a.createElement("img",{className:"horse-img",src:"/images/horse.png",alt:"Cheval"}))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/horses"},"Mes Chevaux")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/account"},r.a.createElement("img",{src:"/images/settings.png",alt:"Settings"}))),r.a.createElement("button",{onClick:e.onLogOut},r.a.createElement("img",{src:"/images/logout.png",alt:"Logout"})))}var N=function(e){var a=new Date(e),t="0"+a.getDate(),n="0"+(a.getMonth()+1),r=a.getFullYear();return isNaN(t)||isNaN(n)||isNaN(r)?"-":"".concat(t.slice(-2),"/").concat(n.slice(-2),"/").concat(r)},y=function(e){var a=new Date(e),t="0"+a.getDate(),n="0"+(a.getMonth()+1),r=a.getFullYear();return isNaN(t)||isNaN(n)||isNaN(r)?"-":"".concat(r,"-").concat(n.slice(-2),"-").concat(t.slice(-2))},O=function(e,a,t){var n=1;e.forEach((function(e){e.phaseName.includes(t)&&n++})),a.phaseName=n>1?t+" "+n:t},w=t(118),j=t(123),C=t(122),k=(t(104),t(116)),D=t(65),S=t(117);t(105);function x(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),g=p[0],E=p[1],b=Object(n.useState)(!1),f=Object(o.a)(b,2),v=f[0],N=f[1],y=function(a){var t={selle:l,breaking:m,pretraining:g};"selle"===a?(c(!l),t.selle=!l):"breaking"===a?(u(!m),t.breaking=!m):"pretraining"===a&&(E(!g),t.pretraining=!g),e.onFilter(t)};return r.a.createElement("div",{id:"SearchBox"},r.a.createElement("div",{className:"search-part"},r.a.createElement(k.a,{className:"mb-3"},r.a.createElement(k.a.Prepend,null,r.a.createElement(k.a.Text,{id:"basic-addon1"},r.a.createElement("span",{role:"img","aria-label":"Recherche"}," ","\ud83d\udd0e"," "))),r.a.createElement(D.a,{onChange:e.onSearch,placeholder:"Cheval, propri\xe9taire, \xe9leveur...","aria-label":"Cheval, propri\xe9taire, \xe9leveur...","aria-describedby":"basic-addon1"}))),r.a.createElement("div",{className:"filter-part"},r.a.createElement(S.a,{"aria-label":"Filters"},r.a.createElement(h.a,{className:l?"filter-btn active":"filter-btn",onClick:function(){return y("selle")}},r.a.createElement("img",{src:"/images/selle.png",alt:"Cheval de Selle"})),r.a.createElement(h.a,{className:m?"filter-btn active":"filter-btn",onClick:function(){return y("breaking")}},r.a.createElement("img",{src:"/images/breaking.png",alt:"D\xe9bourrage"})),r.a.createElement(h.a,{className:g?"filter-btn active":"filter-btn",onClick:function(){return y("pretraining")}},r.a.createElement("img",{src:"/images/pretraining.png",alt:"Pr\xe9-entrainement"}))),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(){N(!v),e.onPresent(!v)},type:"checkbox",id:"active",name:"active"}),r.a.createElement("label",{htmlFor:"active"},"Actuellement au travail"))),r.a.createElement("div",{className:"sort-part"},r.a.createElement("label",{htmlFor:"sortby"},"Trier par :"),r.a.createElement("select",{id:"sortby",name:"sortby"},r.a.createElement("option",{value:"horseName"},"Nom du Cheval (A-Z)"),r.a.createElement("option",{value:"horseAgeYoung"},"\xc2ge du Cheval (+jeune en 1er)"),r.a.createElement("option",{value:"horseAgeOld"},"\xc2ge du Cheval (+\xe2g\xe9 en 1er)"))))}function F(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(null),m=Object(o.a)(i,2),p=m[0],h=m[1],g=Object(n.useState)(""),E=Object(o.a)(g,2),b=E[0],f=E[1],v=Object(n.useState)({breaking:!0,pretraining:!0,selle:!0}),y=Object(o.a)(v,2),O=y[0],k=y[1],D=Object(n.useState)(!1),S=Object(o.a)(D,2),F=S[0],I=S[1];return Object(n.useEffect)((function(){e.loggedInUser&&u.a.get("".concat(d,"/horses/").concat(e.loggedInUser._id,"/all"),{withCredentials:!0}).then((function(e){c(e.data),h(e.data)})).catch((function(e){return console.log("in /horses/userID/all",e)}))}),[e.loggedInUser]),Object(n.useEffect)((function(){if(l&&p){var e=l.filter((function(e){var a=e.name.toLowerCase().includes(b),t=e.breeder&&e.breeder.toLowerCase().includes(b),n=e.owner&&e.owner.toLowerCase().includes(b),r=a||t||n,l=!0;if(O.selle||O.breaking||O.pretraining){var c=e.phases.map((function(e){return e.shortName})),s=O.selle&&c.includes("selle"),o=O.breaking&&c.includes("breaking"),i=O.pretraining&&c.includes("pretraining");l=s||o||i}var m=!0;return F&&(m=!1,e.phases.forEach((function(e){!0===e.active&&(m=!0)}))),r&&l&&m}));h(e)}}),[b,O,l,F]),r.a.createElement("div",{id:"Horses"},r.a.createElement("div",{className:"bienvenue"},"Bienvenue ",e.loggedInUser?r.a.createElement(r.a.Fragment,null,e.loggedInUser.username):""," "),r.a.createElement("div",{className:"search-box"},r.a.createElement(x,{onSearch:function(e){return f(e.currentTarget.value.toLowerCase())},onFilter:function(e){return k(e)},onPresent:function(e){return I(e)}})),r.a.createElement(s.b,{className:"button btn-orange",to:"/horses/create"},"Ajouter un cheval"),r.a.createElement(w.a,{className:"cards-container"},p?p.map((function(e,a){return r.a.createElement(j.a,{key:"horse"+a,className:"horse-card"},r.a.createElement(s.b,{to:"/horses/".concat(e._id)},r.a.createElement(C.a,{controls:!1,indicators:!1,className:"horse-pictures"},e.pictures.map((function(a,t){return r.a.createElement(C.a.Item,{className:"horse-one-picture",key:e.name+"picture"+t,style:{backgroundImage:"url(".concat(a,")")}})}))),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,{className:"horse-name"},e.name),r.a.createElement("div",{className:"horse-infos"},r.a.createElement("p",null,e.sex),r.a.createElement("p",null,"N\xe9","Femelle"===e.sex&&"e"," le :"," ",N(e.birthdate)))),r.a.createElement(j.a.Footer,{className:"phases"},e.phases&&e.phases.map((function(a,t){return r.a.createElement("div",{key:e.name+"phase"+t},r.a.createElement("img",{className:"phase-logo",src:a.phaseName.includes("Cheval de selle")?a.active?"/images/selle.png":"/images/sellebw.png":a.phaseName.includes("D\xe9bourrage")?a.active?"/images/breaking.png":"/images/breakingbw.png":a.active?"/images/pretraining.png":"/images/pretrainingbw.png",alt:a.phaseName}))})))))})):r.a.createElement("div",null,"Loading")))}t(106);function I(){return r.a.createElement("a",{href:"https://elisedjn.github.io/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{id:"Footer"},"Made with \u2665 by Elise | elisedjn.github.io"))}var P=t(121),U=t(119);t(107),t(108);function L(e){var a=Object(n.useState)(0),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement(C.a,{activeIndex:l,onSelect:function(e,a){c(e)},id:"MyCarousel"},e.pictures.map((function(e,a){return r.a.createElement(C.a.Item,{key:"horse picture"+a,className:"horse-one-picture",style:{backgroundImage:"url(".concat(e,")")}})})))}t(63);function M(e){var a=Object(n.useState)({display:"none"}),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)({display:"block"}),i=Object(o.a)(s,2),m=i[0],p=i[1],h=Object(n.useState)(null),g=Object(o.a)(h,2),E=g[0],b=g[1];Object(n.useEffect)((function(){var a=e.infos,t=a.arrivalDate,n=a.departureDate,r=a.phaseNotes,l=a.phaseName;b({arrivalDate:t,departureDate:n,phaseNotes:r,phaseName:l})}),[e.infos]);var f=function(){c({display:"block"}),p({display:"none"})};return E?r.a.createElement("div",{className:"Phase"},r.a.createElement("div",{className:"on-read",style:m},r.a.createElement("p",{className:"field"},"Arriv\xe9e : ",r.a.createElement("strong",null,N(E.arrivalDate))),r.a.createElement("p",{className:"field"},"D\xe9part : ",r.a.createElement("strong",null,N(E.departureDate))),r.a.createElement("p",{className:"field"},"Notes : ")," ",r.a.createElement("p",{onDoubleClick:f,className:"notes"}," ",E.phaseNotes),r.a.createElement("button",{className:"small-button btn-orange",onClick:f},"\xc9diter")),r.a.createElement("div",{className:"on-edit",style:l},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=a.currentTarget,n=t.arrivalDate,r=t.departureDate,l=t.phaseNotes,s={arrivalDate:n.value,departureDate:r.value,phaseNotes:l.value,phaseName:E.phaseName};""!==s.arrivalDate&&""===s.departureDate?s.active=!0:s.active=!1,u.a.patch("".concat(d,"/horses/onehorse/").concat(e.id,"/phase/edit"),s,{withCredentials:!0}).then((function(a){b(s),c({display:"none"}),p({display:"block"}),e.onUpdate(s)})).catch((function(e){return console.log("edit phase on a horse",e)}))}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Arriv\xe9e : "),r.a.createElement("input",{className:"big-input",type:"date",defaultValue:y(E.arrivalDate),name:"arrivalDate"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"D\xe9part : "),r.a.createElement("input",{className:"big-input",type:"date",defaultValue:y(E.departureDate),name:"departureDate"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Notes : "),r.a.createElement("br",null),r.a.createElement("textarea",{className:"notes textarea",defaultValue:E.phaseNotes,name:"phaseNotes"})),r.a.createElement("button",{className:"small-button btn-orange",type:"submit"},"Valider")))):r.a.createElement("div",null,"Loading")}t(109);function T(e){var a=Object(n.useState)({display:"none"}),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)({display:"block"}),i=Object(o.a)(s,2),m=i[0],p=i[1],h=Object(n.useState)(null),g=Object(o.a)(h,2),E=g[0],b=g[1];Object(n.useEffect)((function(){var a=e.infos,t=a.father,n=a.mother,r=a.breeder,l=a.owner,c=a.generalNotes;b({father:t,mother:n,breeder:r,owner:l,generalNotes:c})}),[e.infos]);var f=function(){c({display:"block"}),p({display:"none"})};return E?r.a.createElement("div",{id:"Infos"},r.a.createElement("div",{className:"on-read",style:m},r.a.createElement("p",{className:"field"},"Par ",r.a.createElement("strong",null,E.father)," et ",r.a.createElement("strong",null,E.mother)),r.a.createElement("p",{className:"field"},"\xc9leveur : ",r.a.createElement("strong",null,E.breeder)),r.a.createElement("p",{className:"field"},"Propri\xe9taire : ",r.a.createElement("strong",null,E.owner)),r.a.createElement("p",{className:"field"},"Notes :"),r.a.createElement("p",{className:"notes",onDoubleClick:f},E.generalNotes),r.a.createElement("button",{className:"small-button btn-orange",onClick:f},"\xc9diter")),r.a.createElement("div",{className:"on-edit",style:l},r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=a.currentTarget,n=t.father,r=t.mother,l=t.breeder,s=t.owner,o=t.generalNotes,i={father:n.value,mother:r.value,breeder:l.value,owner:s.value,generalNotes:o.value};u.a.patch("".concat(d,"/horses/onehorse/").concat(e.infos._id,"/infos/edit"),i,{withCredentials:!0}).then((function(e){console.log(e),b(i),c({display:"none"}),p({display:"block"})})).catch((function(e){return console.log("edit infos on a horse",e)}))}},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Par"),r.a.createElement("input",{className:"small-input",type:"string",defaultValue:E.father,name:"father"}),r.a.createElement("label",null,"et"),r.a.createElement("input",{className:"small-input",type:"string",defaultValue:E.mother,name:"mother"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"\xc9leveur : "),r.a.createElement("input",{className:"big-input",type:"string",defaultValue:E.breeder,name:"breeder"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Propri\xe9taire : "),r.a.createElement("input",{className:"big-input",type:"string",defaultValue:E.owner,name:"owner"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Notes : "),r.a.createElement("br",null),r.a.createElement("textarea",{className:"notes textarea",defaultValue:E.generalNotes,name:"generalNotes"})),r.a.createElement("button",{className:"small-button btn-orange",type:"submit"},"Valider")))):r.a.createElement("div",null,"Loading")}function B(e){return r.a.createElement("form",{className:"Phase",onSubmit:e.onCreate},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"shortName"},"Pour : "),r.a.createElement("select",{className:"big-input",id:"shortName",name:"shortName"},r.a.createElement("option",{value:"selle"},"Cheval de selle"),r.a.createElement("option",{value:"breaking"},"D\xe9bourrage"),r.a.createElement("option",{value:"pretraining"},"Pr\xe9 entrainement"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Arriv\xe9e : "),r.a.createElement("input",{className:"big-input",type:"date",name:"arrivalDate"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"D\xe9part : "),r.a.createElement("input",{className:"big-input",type:"date",name:"departureDate"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Notes : "),r.a.createElement("br",null),r.a.createElement("textarea",{className:"notes textarea",name:"phaseNotes"})),r.a.createElement("button",{className:"small-button btn-orange",type:"submit"},"Valider"))}function V(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)("infos-tab"),m=Object(o.a)(i,2),p=m[0],h=m[1];Object(n.useEffect)((function(){u.a.get("".concat(d,"/horses/onehorse/").concat(e.match.params.horseID),{withCredentials:!0}).then((function(e){c(e.data)})).catch((function(e){return console.log("Get one horse",e)}))}),[e.match.params.horseID]);var g=function(e){for(var a=JSON.parse(JSON.stringify(l)),t=0;t<a.phases.length;t++)a.phases[t].phaseName===e.phaseName&&(a.phases[t]=JSON.parse(JSON.stringify(e)));c(a)};if(l){var E=l.name,b=l.birthdate,f=l.sex,v=l.pictures,y=l.phases,w="";return y.forEach((function(e){e.active&&(w=e.phaseName)})),r.a.createElement("div",{id:"OneHorse"},r.a.createElement("div",{className:"top-part"},r.a.createElement("div",{className:"pictures"},r.a.createElement(s.b,{to:"/horses/".concat(l._id,"/pictures")},r.a.createElement(L,{pictures:v}),"Voir la galerie")),r.a.createElement("div",{className:"identity"},r.a.createElement("h2",null,E),r.a.createElement("p",null,f),r.a.createElement("p",null,"N\xe9","Femelle"===f&&"e"," le : ",N(b)),r.a.createElement("p",null,"Pour: ",w),r.a.createElement("img",{className:"phase-logo",src:w.includes("Cheval de selle")?"/images/selle.png":w.includes("D\xe9bourrage")?"/images/breaking.png":w.includes("Pr\xe9-entrainement")?"/images/pretraining.png":"",alt:w}))),r.a.createElement("div",{className:"dividers"},r.a.createElement(P.a,{defaultActiveKey:"infos-tab",activeKey:p,onSelect:function(e){return h(e)}},r.a.createElement(U.a,{eventKey:"infos-tab",title:"Infos"},r.a.createElement(T,{infos:l})),y.map((function(e,a){return r.a.createElement(U.a,{eventKey:e.phaseName+"-tab",title:e.phaseName,key:"divider"+a},r.a.createElement(M,{onUpdate:g,infos:e,id:l._id,className:"one-phase"}))})),r.a.createElement(U.a,{eventKey:"add-phase",title:"+"},r.a.createElement(B,{onCreate:function(e){e.preventDefault();var a=e.currentTarget,t=a.shortName,n=a.arrivalDate,r=a.departureDate,s=a.phaseNotes,o={shortName:t.value,arrivalDate:n.value,departureDate:r.value,phaseNotes:s.value};"selle"===o.shortName?O(l.phases,o,"Cheval de selle"):"breaking"===o.shortName?O(l.phases,o,"D\xe9bourrage"):"pretraining"===o.shortName&&O(l.phases,o,"Pr\xe9-entrainement"),""!==o.arrivalDate&&""===o.departureDate?o.active=!0:o.active=!1,u.a.patch("".concat(d,"/horses/onehorse/").concat(l._id,"/create"),o,{withCredentials:!0}).then((function(){var e=JSON.parse(JSON.stringify(l));e.phases.push(o),c(e),h(o.phaseName+"-tab")})).catch((function(e){return console.log("create phase on a horse",e)}))}})))))}return r.a.createElement("div",null," Loading ")}t(111);function A(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)("/images/addimage.png"),i=Object(o.a)(s,2),m=i[0],p=i[1];Object(n.useEffect)((function(){u.a.get("".concat(d,"/horses/onehorse/").concat(e.match.params.horseID),{withCredentials:!0}).then((function(e){return c(e.data.pictures)})).catch((function(e){return console.log("Get one horse",e)}))}),[e.match.params.horseID]);return l?r.a.createElement("div",{id:"Gallery"},r.a.createElement("div",null,r.a.createElement("a",{href:"/horses/".concat(e.match.params.horseID)},r.a.createElement("img",{className:"back-arrow",src:"/images/back.png",alt:"Back"}))),r.a.createElement("div",{className:"images"},l.map((function(a,t){return r.a.createElement("div",{key:e.match.params.horseID+"picture"+t,className:"image-container"},r.a.createElement("img",{src:a,alt:"picture"+t}))}))),r.a.createElement("div",{className:"add-image"},r.a.createElement("input",{onChange:function(a){p("/images/loading.gif"),a.preventDefault();var t=new FormData;t.append("imageUrl",a.currentTarget.files[0]),u.a.post("".concat(d,"/upload"),t,{withCredentials:!0}).then((function(a){var t=JSON.parse(JSON.stringify(l));t.push(a.data.image),u.a.patch("".concat(d,"/horses/onehorse/").concat(e.match.params.horseID,"/pictures"),t,{withCredentials:!0}).then((function(e){c(t),p("/images/addimage.png")})).catch((function(e){return console.log("update horse images",e)}))})).catch((function(e){return console.log("Upload a picture",e)}))},type:"file",id:"img",name:"img",accept:"image/*"}),r.a.createElement("label",{htmlFor:"img",className:"btn-1"}," ",r.a.createElement("img",{src:m,alt:"Ajouter"})))):r.a.createElement("div",null,"Loading")}t(112);function H(e){var a=Object(n.useState)("/images/addimage.png"),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),m=i[0],g=i[1],E=Object(n.useState)("Une erreur s'est produite. Merci de r\xe9essayer."),b=Object(o.a)(E,2),f=b[0],v=b[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"CreateHorse",onSubmit:function(a){a.preventDefault();var t=a.currentTarget,n=t.name,r=t.sex,c=t.birthdate,s=t.father,o=t.mother,i=t.owner,m=t.breeder,p=t.generalNotes,h={name:n.value,birthdate:c.value,sex:r.value,father:s.value,mother:o.value,owner:i.value,breeder:m.value,generalNotes:p.value,pictures:l};u.a.post("".concat(d,"/horses/").concat(e.loggedInUser._id,"/create"),h,{withCredentials:!0}).then((function(a){e.history.push("/horses/".concat(a.data._id))})).catch((function(e){console.log("Creating a horse",e.response.data),g(!0),"required"===e.response.data.errorMessage.errors.name.kind&&"name"===e.response.data.errorMessage.errors.name.path&&v("Merci de saisir le nom du cheval.")}))}},r.a.createElement("div",{className:"top-part"},r.a.createElement("div",{className:"add-image"},r.a.createElement("input",{onChange:function(e){c("/images/loading.gif");var a=new FormData;a.append("imageUrl",e.currentTarget.files[0]),u.a.post("".concat(d,"/upload"),a,{withCredentials:!0}).then((function(e){c(e.data.image)})).catch((function(e){g(!0),console.log("Uploading picture for new horse",e)}))},type:"file",id:"picture",name:"picture",accept:"image/*"}),r.a.createElement("label",{htmlFor:"picture",className:"btn-1"}," ",r.a.createElement("img",{src:l,alt:"Ajouter"}))),r.a.createElement("div",{className:"identity"},r.a.createElement("h2",null,r.a.createElement("input",{className:"input-name",type:"text",placeholder:"Nom",name:"name"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"sex"},"Sexe :"),r.a.createElement("select",{className:"big-input",id:"sex",name:"sex"},r.a.createElement("option",{value:"Femelle"},"Femelle"),r.a.createElement("option",{value:"M\xe2le"},"M\xe2le"),r.a.createElement("option",{value:"Hongre"},"Hongre"))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"birthdate"},"N\xe9(e) le:"),r.a.createElement("input",{className:"big-input",type:"date",name:"birthdate",id:"birthdate"})))),r.a.createElement("div",{className:"dividers"},r.a.createElement(P.a,{defaultActiveKey:"infos-tab"},r.a.createElement(U.a,{eventKey:"infos-tab",title:"Infos"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"father"},"Par "),r.a.createElement("input",{className:"small-input",type:"string",name:"father",id:"father",placeholder:"P\xe8re"}),r.a.createElement("label",{htmlFor:"mother"},"et"),r.a.createElement("input",{className:"small-input",type:"string",name:"mother",id:"mother",placeholder:"M\xe8re"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"breeder"},"\xc9leveur : "),r.a.createElement("input",{className:"big-input",type:"string",name:"breeder",id:"breeder"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"owner"},"Propri\xe9taire : "),r.a.createElement("input",{className:"big-input",type:"string",name:"owner",id:"owner"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"generalNotes"},"Notes : "),r.a.createElement("textarea",{className:"notes textarea",name:"generalNotes",id:"generalNotes"}))))),r.a.createElement("button",{className:"small-button btn-orange",type:"submit"},"Valider")),r.a.createElement(p.a,{show:m,onHide:function(){return g(!1)},backdrop:"static",keyboard:!1},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Oops...")),r.a.createElement(p.a.Body,null,f),r.a.createElement(p.a.Footer,null,r.a.createElement(h.a,{className:"small-button btn-orange",onClick:function(){return g(!1)}},"Ok"))))}t(113);function J(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),l=t[0],c=t[1];if(e.loggedInUser){var s=e.loggedInUser,i=s.username,m=s.email;return r.a.createElement("div",{id:"UserInfos"},r.a.createElement("h1",null,"Param\xe8tres"),r.a.createElement("form",{onSubmit:e.onEdit},r.a.createElement("input",{className:"username",id:"username",name:"username",type:"string",defaultValue:i}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",name:"email",type:"email",defaultValue:m}),r.a.createElement("label",{htmlFor:"password"},"Mot de passe actuel"),r.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"********"}),r.a.createElement("label",{htmlFor:"newPassword"},"Nouveau mot de passe"),r.a.createElement("input",{id:"newPassword",name:"newPassword",type:"password",placeholder:"********"}),r.a.createElement("button",{className:"btn-orange small-button",type:"submit"},"Valider les changements")),r.a.createElement("button",{className:"btn-bordeaux small-button",onClick:function(){return c(!0)}},"Supprimer mon compte"),r.a.createElement(p.a,{show:l,onHide:function(){return c(!1)},backdrop:"static",keyboard:!1},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"\xcates-vous s\xfbr?")),r.a.createElement(p.a.Body,null,"Cette action supprimera votre compte et tous les chevaux associ\xe9s. ",r.a.createElement("br",null)," Cette action est irr\xe9versible."),r.a.createElement(p.a.Footer,null,r.a.createElement(h.a,{className:"small-button btn-bordeaux",onClick:function(){return c(!1)}},"Annuler"),r.a.createElement(h.a,{className:"small-button btn-orange",onClick:e.onDelete},"Valider"))))}return r.a.createElement("div",null,"Loading")}var _=Object(i.f)((function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),E=m[0],N=m[1],y=Object(n.useState)("Oops, une erreur est survenue"),O=Object(o.a)(y,2),w=O[0],j=O[1];Object(n.useEffect)((function(){l||u.a.get("".concat(d,"/auth/user"),{withCredentials:!0}).then((function(e){u.a.get("".concat(d,"/user/").concat(e.data._id),{withCredentials:!0}).then((function(e){return c(e.data)}))}))}),[l]);var C=function(a){a.preventDefault();var t=a.currentTarget,n=t.username,r=t.email,l=t.password;u.a.post("".concat(d,"/auth/signup"),{username:n.value,email:r.value,password:l.value},{withCredentials:!0}).then((function(a){c(a.data),e.history.push("/horses")})).catch((function(e){N(!0),j(e.response.data.errorMessage)}))},k=function(a){a.preventDefault();var t=a.currentTarget,n=t.email,r=t.password;u.a.post("".concat(d,"/auth/login"),{email:n.value,password:r.value},{withCredentials:!0}).then((function(a){c(a.data),e.history.push("/horses")})).catch((function(e){N(!0),j(e.response.data.errorMessage)}))},D=function(a){a.preventDefault();var t=a.currentTarget,n=t.username,r=t.email,s=t.password,o=t.newPassword,i={username:n.value,email:r.value,password:s.value,newPassword:o.value};u.a.patch("".concat(d,"/user/").concat(l._id),i,{withCredentials:!0}).then((function(){var a=JSON.parse(JSON.stringify(l));a.username=n.value,a.email=r.value,c(a),e.history.push("/horses")})).catch((function(e){N(!0),j(e.response.data.errorMessage)}))},S=function(){u.a.delete("".concat(d,"/user/").concat(l._id),{withCredentials:!0}).then((function(a){c(null),e.history.push("/")})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",{className:"App"},l&&r.a.createElement(v,{onLogOut:function(){u.a.post("".concat(d,"/auth/logout"),{},{withCredentials:!0}).then((function(){c(null),e.history.push("/")}))}}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(g,Object.assign({loggedInUser:l},e))}}),r.a.createElement(i.a,{path:"/login",render:function(e){return r.a.createElement(b,Object.assign({onLogIn:k},e))}}),r.a.createElement(i.a,{path:"/signup",render:function(e){return r.a.createElement(f,Object.assign({onSignUp:C},e))}}),r.a.createElement(i.a,{exact:!0,path:"/horses",render:function(e){return r.a.createElement(F,Object.assign({loggedInUser:l},e))}}),r.a.createElement(i.a,{exact:!0,path:"/horses/create",render:function(e){return r.a.createElement(H,Object.assign({loggedInUser:l},e))}}),r.a.createElement(i.a,{exact:!0,path:"/horses/:horseID",render:function(e){return r.a.createElement(V,Object.assign({loggedInUser:l},e))}}),r.a.createElement(i.a,{exact:!0,path:"/horses/:horseID/pictures",render:function(e){return r.a.createElement(A,Object.assign({loggedInUser:l},e))}}),r.a.createElement(i.a,{path:"/account",render:function(e){return r.a.createElement(J,Object.assign({loggedInUser:l,onEdit:D,onDelete:S},e))}})),r.a.createElement(p.a,{show:E,onHide:function(){return N(!1)},backdrop:"static",keyboard:!1},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Oops...")),r.a.createElement(p.a.Body,null,w),r.a.createElement(p.a.Footer,null,r.a.createElement(h.a,{className:"small-button btn-orange",onClick:function(){return N(!1)}},"Ok"))),r.a.createElement(I,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,a,t){},63:function(e,a,t){},71:function(e,a,t){e.exports=t(114)},76:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.f67114e4.chunk.js.map