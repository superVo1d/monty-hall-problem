(function(){"use strict";var e={9697:function(e,t,a){var n=a(9242),o=a(1020),r=a(3396),i=a(7139),s=a(4870),l=a(1114),c=a(9013),u=a(9469);const d=new l.SUY,v=e=>{const t=(0,s.iH)(e.renderer),a=((0,s.iH)(e.mixer),()=>{requestAnimationFrame(a);const n=d.getDelta()||0;e.callback&&e.callback(n),t?.value?.render(e.scene,e.camera)});a()},p=()=>{const e=new l.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);return e.position.set(1,1,1),e.lookAt(0,0,0),e},h=e=>{const t=new l.xsS;return t.background=null,t},w=e=>new l.CP7({canvas:e,antialias:!0,alpha:!0}),_=e=>{const t=new l.Mig(4210752,5);return t.position.set(0,0,5),{light:t}},y=e=>Math.round(1e3*e)/1e3||0,f=(e,t)=>{(0,r.bv)((()=>{window.addEventListener(e,t)})),(0,r.Ah)((()=>{window.removeEventListener(e,t)}))},g=e=>{const t=(0,s.iH)(e.container),a=(0,s.iH)(e.camera),n=(0,s.iH)(e.renderer),o=()=>{if(console.log("set size"),a.value&&n.value){const[e,o]=t.value?[t.value.clientHeight,t.value.clientWidth]:[window.innerHeight,window.innerWidth];a.value.aspect=o/e,a.value.updateProjectionMatrix(),n.value.setSize(o,e),n.value.setPixelRatio(window.devicePixelRatio)}e.onResize&&e.onResize()};o(),f("resize",o)};var m,k;(function(e){e["primary"]="primary",e["secondary"]="secondary"})(m||(m={})),function(e){e["car"]="car",e["goat"]="goat"}(k||(k={}));var S=(0,r.aZ)({__name:"Scene",props:{type:null},setup(e){const t=e,a=(0,s.iH)(),n=(0,s.iH)(),o=(0,s.iH)(),i=(0,s.iH)(),d=(0,s.iH)(),y=(0,s.iH)(),f=(0,s.iH)(),m=(0,s.iH)(),S="/monty-hall-problem",b={[k.car]:`${S}/models/car/scene.gltf`,[k.goat]:`${S}/models/goat/scene.gltf`}[t.type];g({camera:a,container:o,onResize:()=>{},renderer:f});const D=new l.SUY,C=()=>{const e=D.getDelta()||0;d?.value?.update(e),c.Vx()},P=e=>{new c.kX({x:2,y:2,z:2}).to({x:1,y:1,z:1},400).onUpdate((t=>{e.position.set(t.x,t.y,t.z)})).start(),t.type===k.goat?new c.kX({rotateX:1}).to({rotateX:0},400).onUpdate((({rotateX:e})=>{y.value&&(y.value.scene.rotation.y=Math.PI*e)})).start():new c.kX({rotateX:0}).to({rotateX:-1},400).onUpdate((({rotateX:e})=>{y.value&&(y.value.scene.rotation.y=Math.PI*e)})).start().chain(new c.kX({rotateX:1}).to({rotateX:-1},2e4).onUpdate((({rotateX:e})=>{y.value&&(y.value.scene.rotation.y=Math.PI*e)})).repeat(1/0))};return(0,r.bv)((()=>{const[e,r]=[o?.value?.clientHeight||0,o?.value?.clientWidth||0],s=h(new l.Ilk(14540253));m.value=s;const c=p();a.value=c,a.value.aspect=r/e,a.value.updateProjectionMatrix(),i.value=_(new l.Ilk(4210752)).light,f.value=w(n.value),m.value.add(a.value),m.value.add(i.value),f.value.setSize(r,e),f.value.render(s,c);const g=new u.E;g.load(b,(e=>{e.scene.position.y=-.2,t.type===k.goat&&(e.scene.scale.set(1.3,1.3,1.3),e.scene.position.y=-.3),y.value=e,s.add(e.scene),d.value=new l.Xcj(e.scene),f?.value?.render(s,c),e.animations.forEach((e=>{d?.value?.clipAction(e).play()}))})),P(c),v({callback:C,camera:c,renderer:f,scene:s})})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",{ref_key:"container",ref:o},[(0,r._)("canvas",{ref_key:"canvas",ref:n},null,512)],512))}}),b=a(89);const D=(0,b.Z)(S,[["__scopeId","data-v-0f8795ac"]]);var C=D,P=a(6653),H=(0,r.aZ)({__name:"ParallaxWrapper",props:{active:{type:Boolean,default:!0},threshold:{default:-15}},setup(e){const t=e,a="parallax-wrapper",n=window.matchMedia("(prefers-reduced-motion)"),o=(0,s.iH)(),l=(e,t,a)=>({perspective:`${e}px`,rotateX:`${t}deg`,rotateY:`${a}deg`}),{apply:c}=(0,P.nc)(o),u=(e,t,a,n,o,r)=>o>e&&o<e+a&&r>t&&r<t+n,d=async e=>await c(l(e,0,0)),v=async e=>{if(!n||!t.active||!o.value)return;const{clientX:a,clientY:r}=e,{x:i,y:s,width:v,height:p}=o.value.getBoundingClientRect(),h=(a-i)/v,w=(r-s)/p,_=t.threshold/2-h*t.threshold,y=w*t.threshold-t.threshold/2,f=u(i,s,v,p,a,r);f?await c(l(v,y,_)):await d(v)};(0,r.bv)((()=>{if(!o.value)return;const{width:e}=o.value.getBoundingClientRect();d(e),window.addEventListener("mousemove",v)})),(0,r.Ah)((()=>{window.removeEventListener("mousemove",v)}));const p=(0,r.Fl)((()=>[a]));return(e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)((0,s.SU)(p))},[(0,r._)("div",{ref_key:"wrapperRef",ref:o,class:(0,i.C_)(`${a}__container`)},[(0,r.WI)(e.$slots,"default")],2)],2))}});const W=(0,b.Z)(H,[["__scopeId","data-v-47f7fe2c"]]);var z=W;const U=e=>((0,r.dD)("data-v-33bec00e"),e=e(),(0,r.Cn)(),e),$=U((()=>(0,r._)("span",null,"?",-1))),x=[$];var O=(0,r.aZ)({__name:"CardsItem",props:{active:{type:Boolean},onClick:{type:Function},picked:{type:Boolean},prize:{type:Boolean}},setup(e){const t=e,a="cards-item",n=(0,r.Fl)((()=>[a,{[`${a}_active`]:t.active,[`${a}_picked`]:t.picked}]));return(e,o)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)((0,s.SU)(n)),onClick:o[0]||(o[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,r._)("div",{class:(0,i.C_)(`${a}__inner`)},[(0,r.Wm)(z,{active:!t.active},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,i.C_)(`${a}__content`)},[(0,r._)("div",{class:(0,i.C_)(`${a}__text`)},x,2)],2)])),_:1},8,["active"]),t.active?((0,r.wg)(),(0,r.j4)(C,{key:0,class:(0,i.C_)(`${a}__scene`),type:t.prize?(0,s.SU)(k).car:(0,s.SU)(k).goat},null,8,["class","type"])):(0,r.kq)("",!0)],2)],2))}});const Z=(0,b.Z)(O,[["__scopeId","data-v-33bec00e"]]);var M,I=Z,X=(a(7658),a(466));(function(e){e[e["pick"]=0]="pick",e[e["reveal"]=1]="reveal",e[e["gameOver"]=2]="gameOver"})(M||(M={}));const j=e=>{const t=3,a=Math.floor(Math.random()*t%t);return{answer:null,doorsState:new Array(t).fill(!1),doorsCount:t,gameState:M.pick,pickedDoor:null,prizeDoor:a,totalSwitchPlays:e?.totalSwitchPlays||(0,X.y$C)("totalSwitchPlays",0),totalStayPlays:e?.totalStayPlays||(0,X.y$C)("totalStayPlays",0),totalSwitchWins:e?.totalSwitchWins||(0,X.y$C)("totalSwitchWins",0),totalStayWins:e?.totalStayWins||(0,X.y$C)("totalStayWins",0),win:!1}},F=(0,o.Q_)("gameState",{state:()=>j(),actions:{reset(){Object.assign(this,j(this))},start(){j()},pickDoor(e){switch(this.gameState){case M.pick:this.gameState=M.reveal,this.pickedDoor=e,this.revealDoor();break;case M.reveal:if(this.doorsState[e])return;this.answer=e,this.check();break;case M.gameOver:this.reset()}},revealDoor(){const e=[];this.doorsState.forEach(((t,a)=>{a!==this.prizeDoor&&a!==this.pickedDoor&&e.push(a)}));const t=e[Math.floor(Math.random()*e.length)];this.doorsState[t]=!0},check(){const e=this.answer===this.prizeDoor;this.pickedDoor===this.answer?(this.totalStayPlays++,e&&this.totalStayWins++):(this.totalSwitchPlays++,e&&this.totalSwitchWins++),this.win=e,this.gameState=M.gameOver,this.doorsState=this.doorsState.map((()=>!0))}},getters:{getTotalsPlays(e){return e.totalSwitchPlays+e.totalStayPlays}}});var Y=(0,r.aZ)({__name:"Cards",setup(e){const t=F(),a="cards",n=(0,r.Fl)((()=>[a]));return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)((0,s.SU)(n))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(t).doorsState,((e,a)=>((0,r.wg)(),(0,r.j4)(I,{key:a,active:e,"on-click":()=>(0,s.SU)(t).pickDoor(a),picked:a===(0,s.SU)(t).pickedDoor,prize:a===(0,s.SU)(t).prizeDoor},null,8,["active","on-click","picked","prize"])))),128))],2))}});const E=(0,b.Z)(Y,[["__scopeId","data-v-fd623670"]]);var L=E;const T=e=>((0,r.dD)("data-v-2f393d41"),e=e(),(0,r.Cn)(),e),B=T((()=>(0,r._)("div",null,[(0,r._)("a",{href:"https://vk.com/newcyberrussia"},"«русский киберслон»")],-1)));var R=(0,r.aZ)({__name:"Footer",setup(e){const t="footer",a=(0,r.Fl)((()=>(new Date).getFullYear())),n=(0,r.Fl)((()=>[t]));return(e,t)=>((0,r.wg)(),(0,r.iD)("footer",{class:(0,i.C_)((0,s.SU)(n))},[(0,r._)("div",null,"© "+(0,i.zw)((0,s.SU)(a))+" г.",1),B],2))}});const A=(0,b.Z)(R,[["__scopeId","data-v-2f393d41"]]);var K=A;const q=e=>((0,r.dD)("data-v-416948bf"),e=e(),(0,r.Cn)(),e),N=q((()=>(0,r._)("a",{href:"https://en.wikipedia.org/wiki/Monty_Hall_problem",target:"_blank"},[(0,r._)("h1",null,"Monty Hall Problem")],-1))),J=q((()=>(0,r._)("p",null," Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. ",-1))),Q=[N,J];var V=(0,r.aZ)({__name:"Header",setup(e){const t="header";return(e,a)=>((0,r.wg)(),(0,r.iD)("header",{class:(0,i.C_)(t)},Q))}});const G=(0,b.Z)(V,[["__scopeId","data-v-416948bf"]]);var ee=G,te=(0,r.aZ)({__name:"Stats",setup(e){const t="stats",a=F(),n=(0,r.Fl)((()=>[{label:"Try:",value:a.getTotalsPlays},{label:"Won after switch:",value:a.totalSwitchWins/a.totalSwitchPlays},{label:"Won after stay:",value:a.totalStayWins/a.totalStayPlays}]));return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(t)},[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(n),(({label:e,value:t},a)=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r._)("div",null,(0,i.zw)(e),1),(0,r._)("div",null,(0,i.zw)((0,s.SU)(y)(t)),1)])))),128))])]))}});const ae=(0,b.Z)(te,[["__scopeId","data-v-97bb15d8"]]);var ne=ae;const oe=["innerHTML"];var re=(0,r.aZ)({__name:"Log",setup(e){const t="log",a=F(),{gameState:n,pickedDoor:l,doorsState:c,win:u}=(0,o.Jk)(a),d=(0,r.Fl)((()=>{const e=[];switch(n.value){case M.pick:e.push("Choose a prize door.");break;case M.reveal:{let t=0;c.value.forEach(((e,a)=>{a===l.value||c.value[a]||(t=a)})),e.push(`You picked the door No. ${(l.value||0)+1}`),e.push(`Do you want to pick door No. ${t+1}?`);break}case M.gameOver:e.push(u.value?"You Win! Try again.":"You Loose! Try again.");break}return e}));return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(t)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(d),((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,innerHTML:e},null,8,oe)))),128))]))}});const ie=(0,b.Z)(re,[["__scopeId","data-v-c8d16d5c"]]);var se=ie,le=(0,r.aZ)({__name:"Layout",setup(e){const t=F(),a="layout",n=(0,r.Fl)((()=>[a,{[`${a}_win`]:t.gameState===M.gameOver&&t.win,[`${a}_loose`]:t.gameState===M.gameOver&&!t.win}]));return(e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)((0,s.SU)(n))},[(0,r._)("div",null,[(0,r.Wm)(ee),(0,r._)("main",null,[(0,r.Wm)(L),(0,r.Wm)(se)])]),(0,r._)("div",null,[(0,r.Wm)(ne),(0,r.Wm)(K)])],2))}});const ce=(0,b.Z)(le,[["__scopeId","data-v-30d5a7e0"]]);var ue=ce,de=(0,r.aZ)({__name:"App",setup(e){return(e,t)=>((0,r.wg)(),(0,r.j4)(ue))}});const ve=de;var pe=ve;const he=(0,n.ri)(pe),we=(0,o.WB)();he.use(we),he.use(P.tc),he.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkmonty_hall_problem"]=self["webpackChunkmonty_hall_problem"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9697)}));n=a.O(n)})();
//# sourceMappingURL=app.9a429a40.js.map