(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(2),r=t.n(l),s=(t(15),t(3)),i=t(4),o=t(7),m=t(5),u=t(8),b=function(e){var a=e.onCategoryClick;return c.a.createElement("div",{className:"mb4"},c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"people"),c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"films"),c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"starships"),c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"vehicles"),c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"species"),c.a.createElement("button",{onClick:a,className:"grow button-categories b pa3 ma2 f4 ttu bg-animate bn pointer br1"},"planets"))},p=function(e){e.searchfield;var a=e.searchChange;return c.a.createElement("div",{className:"pa2 mb3"},c.a.createElement("input",{className:"border pa3 bn bw1 br-pill bg-white",type:"search",placeholder:"search films",onChange:a}))},d=function(e){var a=e.object;switch(e.category){case"people":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.name),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu "},"gender:")," ",a.gender),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"birth year:")," ",a.birth_year),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"height:")," ",a.height),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"mass:")," ",a.mass),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"eye color:")," ",a.eye_color),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"hair color:")," ",a.hair_color))));case"films":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.title),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"Episode:")," ",a.episode_id),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"Director:")," ",a.director),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"Producer:")," ",a.producer),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"Release date:")," ",a.release_date))));case"starships":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.name),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"model:")," ",a.model),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"starshipclass:")," ",a.starship_class),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"length:")," ",a.length))));case"vehicles":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.name),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"manufacturer:")," ",a.manufacturer),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"model:")," ",a.model),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"vehicle class:")," ",a.vehicle_class),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"length:")," ",a.length))));case"species":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.name),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"language:")," ",a.language),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"average height:")," ",a.average_height),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"classification:")," ",a.classification),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"designation:")," ",a.designation),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"eye colors:")," ",a.eye_colors),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"skin colors:")," ",a.skin_colors),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"hair colors:")," ",a.hair_colors))));case"planets":return c.a.createElement("div",{className:" dib br3 br4 ma2 bw1"},c.a.createElement("div",{style:{lineHeight:"1.8"}},c.a.createElement("h2",{className:"bg-card-title tc pa3"},a.name),c.a.createElement("div",{className:"bg-card-content"},c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"climate:")," ",a.climate),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"terrain:")," ",a.terrain),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"gravity:")," ",a.gravity),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"diameter:")," ",a.diameter),c.a.createElement("p",{className:"tl"},c.a.createElement("span",{className:"b ttu"},"population:")," ",a.population))));default:return c.a.createElement("div",null)}},E=function(e){var a=e.object,t=e.category;return c.a.createElement("div",{className:"pa3"},a.map(function(e,a){return c.a.createElement(d,{key:a,object:e,category:t})}))},g=function(e){return c.a.createElement("div",{className:"mt3",style:{overflowY:"scroll",height:"65vh",boxShadow:"0 0 8px 5px rgba( 209,229,255, 0.8 )"}}," ",e.children)},h=t(6),N=t.n(h),f=(t(16),{particles:{number:{value:150,density:{enable:!0,value_area:300}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1.5,opacity_min:0,sync:!1}},size:{value:2.5,random:!0,anim:{enable:!1}},line_linked:{enable:!1},move:{enable:!0,speed:.1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",modes:{repulse:{distance:100,duration:.4}}},retina_detect:!0}),v=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.onCategoryClick=function(a){var t=a.target.textContent;fetch("https://swapi.co/api/".concat(t)).then(function(e){return e.json()}).then(function(a){e.setState({data:a.results,category:t})})},e.state={category:"",data:[],searchfield:""},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.category,t=e.data,n=e.searchfield,l=t.filter(function(e){return(e.name?e.name:e.title).toLowerCase().includes(n.toLowerCase())});return c.a.createElement("div",null,c.a.createElement(N.a,{className:"particles",params:f}),c.a.createElement("div",{className:"tc"},c.a.createElement("h1",{className:"color-orange font-huge"},"STARWARS"),c.a.createElement(p,{searchChange:this.onSearchChange}),c.a.createElement(b,{onCategoryClick:this.onCategoryClick}),c.a.createElement(g,null,c.a.createElement(E,{object:l,category:a}))))}}]),a}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(17);r.a.render(c.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/starwars_api",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/starwars_api","/service-worker.js");w?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(a,e)})}}()},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.041022dc.chunk.js.map