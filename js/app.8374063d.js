(function(){"use strict";var e={7965:function(e,t,a){var o=a(9242),n=a(1020),i=a(3396),r=a(7139),l=a(4870),s=(a(7658),a(1114)),c=a(9013),u=a(9717);const v=e=>{const t=new s.xsS;return t.background=null,t},d=()=>{const e=new s.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);return e.position.set(1,1,1),e.lookAt(0,0,0),e},p=e=>{const t=new s.Mig(4210752,5);return t.position.set(0,0,5),{light:t}},h=e=>new s.CP7({canvas:e,antialias:!0,alpha:!0}),_=new s.SUY,w=()=>{const e=(0,l.iH)(),t=(0,l.iH)(),a=(0,l.iH)(),o=(0,l.iH)();let n;const i=()=>{n=requestAnimationFrame(i);const e=_.getDelta()||0;o.value&&o.value(e),r()},r=()=>{t.value&&a.value&&e.value&&(0,l.SU)(t.value)?.render((0,l.IU)(a.value),(0,l.IU)(e.value))},s=n=>{e.value=n.camera,t.value=n.renderer,a.value=n.scene,o.value=n.callback,i()},c=()=>{cancelAnimationFrame(n),r()};return{stopAnimation:c,startAnimation:s}},f=(e,t)=>{(0,i.bv)((()=>{window.addEventListener(e,t)})),(0,i.Ah)((()=>{window.removeEventListener(e,t)}))},y=e=>{const t=(0,l.iH)(e.container),a=(0,l.iH)(e.camera),o=(0,l.iH)(e.renderer),n=()=>{if(a.value&&o.value){const[e,n]=t.value?[t.value.clientHeight,t.value.clientWidth]:[window.innerHeight,window.innerWidth];a.value.aspect=n/e,a.value.updateProjectionMatrix(),o.value.setSize(n,e),o.value.setPixelRatio(window.devicePixelRatio)}e.onResize&&e.onResize()};n(),f("resize",n)};var g,m;(function(e){e["primary"]="primary",e["secondary"]="secondary"})(g||(g={})),function(e){e["car"]="car",e["goat"]="goat"}(m||(m={}));const S=Symbol();var k=(0,i.aZ)({__name:"Scene",props:{visible:{type:Boolean},type:null},setup(e){const t=e,a=(0,i.f3)(S),o=(0,l.iH)(),n=(0,l.iH)(),r=(0,l.iH)(),_=(0,l.iH)(),f=(0,l.iH)(),g=(0,l.iH)(),k=(0,l.iH)(),b=(0,l.iH)(),C=(0,l.iH)([]),{startAnimation:D,stopAnimation:U}=w(),H="/monty-hall-problem";m.car,m.goat,t.type;y({camera:o,container:r,renderer:k});const I=(0,l.iH)(),P=()=>{const e=I.value?.getDelta()||0;f?.value?.update(e),c.Vx()},W=()=>{if(!o.value)return;const e=new c.kX({x:2,y:2,z:2}).to({x:1,y:1,z:1},400).onUpdate((e=>{(0,l.IU)(o.value)?.position.set(e.x,e.y,e.z)})).start();C.value.push(e);const a=new c.kX({rotateX:1}).to({rotateX:0},400).onUpdate((({rotateX:e})=>{const a=t.type===m.goat?e:e-1;g.value&&(g.value.rotation.y=Math.PI*a)})).start(),n=new c.kX({rotateX:1}).to({rotateX:-1},2e4).onUpdate((({rotateX:e})=>{g.value&&(g.value.rotation.y=Math.PI*e)})).repeat(1/0);t.type===m.car&&(a.chain(n),C.value.push(n)),C.value.push(a)},$=()=>{if(!b.value||!o.value)return;const e=(0,l.IU)(a.models.value[t.type]);if(!e?.scene)return;const n=u.d9(e.scene);g.value=n,n.position.y=-.2,t.type===m.goat&&(n.scale.set(1.3,1.3,1.3),n.position.y=-.3),(0,l.IU)(b.value).add(n),console.log("Adding model to scene."),f.value=new s.Xcj(n),k.value?.render((0,l.IU)(b.value),(0,l.IU)(o.value)),e.animations.forEach((e=>{f.value?.clipAction(e).play()})),I.value=new s.SUY,W(),D({callback:P,camera:(0,l.IU)(o.value),renderer:k,scene:(0,l.IU)(b.value)})},Z=()=>{const[e,t]=[r?.value?.clientHeight||0,r?.value?.clientWidth||0];b.value=v(new s.Ilk(14540253)),o.value=d(),o.value.aspect=t/e,o.value.updateProjectionMatrix(),_.value=p(new s.Ilk(4210752)).light,k.value=h(n.value),b.value.add(o.value),b.value.add(_.value),k.value.setSize(t,e),k.value.render((0,l.IU)(b.value),(0,l.IU)(o.value))};(0,i.bv)((()=>Z())),(0,i.YP)((()=>a.isLoaded.value),(()=>{O(),a?.isLoaded.value&&t.visible&&$()}));const O=()=>{g.value&&((0,l.IU)(b.value)?.remove((0,l.IU)(g.value)),U(),C.value.forEach((e=>c.Od(e))))};return(0,i.YP)((()=>[t.type,t.visible]),(()=>{console.log("Clearing scene."),O(),a?.isLoaded.value&&t.visible&&$()})),(e,t)=>((0,i.wg)(),(0,i.iD)("div",{ref_key:"container",ref:r},[(0,i._)("canvas",{ref_key:"canvas",ref:n},null,512)],512))}}),b=a(89);const C=(0,b.Z)(k,[["__scopeId","data-v-d0bb87e2"]]);var D=C,U=a(6653),H=(0,i.aZ)({__name:"ParallaxWrapper",props:{active:{type:Boolean,default:!0},threshold:{default:-15}},setup(e){const t=e,a="parallax-wrapper",o=window.matchMedia("(prefers-reduced-motion)"),n=(0,l.iH)(),s=(e,t,a)=>({perspective:`${e}px`,rotateX:`${t}deg`,rotateY:`${a}deg`}),{apply:c}=(0,U.nc)(n),u=(e,t,a,o,n,i)=>n>e&&n<e+a&&i>t&&i<t+o,v=async e=>await c(s(e,0,0)),d=async e=>{if(!o||!t.active||!n.value)return;const{clientX:a,clientY:i}=e,{x:r,y:l,width:d,height:p}=n.value.getBoundingClientRect(),h=(a-r)/d,_=(i-l)/p,w=t.threshold/2-h*t.threshold,f=_*t.threshold-t.threshold/2,y=u(r,l,d,p,a,i);y?await c(s(d,f,w)):await v(d)};(0,i.bv)((()=>{if(!n.value)return;const{width:e}=n.value.getBoundingClientRect();v(e),window.addEventListener("mousemove",d)})),(0,i.Ah)((()=>{window.removeEventListener("mousemove",d)}));const p=(0,i.Fl)((()=>[a]));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)((0,l.SU)(p))},[(0,i._)("div",{ref_key:"wrapperRef",ref:n,class:(0,r.C_)(`${a}__container`)},[(0,i.WI)(e.$slots,"default")],2)],2))}});const I=(0,b.Z)(H,[["__scopeId","data-v-fef9f4ce"]]);var P=I;const W=e=>((0,i.dD)("data-v-a8dcac98"),e=e(),(0,i.Cn)(),e),$=W((()=>(0,i._)("circle",{cx:"50",cy:"50",r:"25"},null,-1))),Z=[$];var O=(0,i.aZ)({__name:"Loader",setup(e){const t="loader";return(e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(t)},[((0,i.wg)(),(0,i.iD)("svg",{class:(0,r.C_)(`${t}__icon`),height:"100",width:"100"},Z,2))]))}});const x=(0,b.Z)(O,[["__scopeId","data-v-a8dcac98"]]);var z=x;const M=e=>((0,i.dD)("data-v-1d34246a"),e=e(),(0,i.Cn)(),e),L=M((()=>(0,i._)("span",null,"?",-1))),F=[L];var j=(0,i.aZ)({__name:"CardsItem",props:{active:{type:Boolean},onClick:{type:Function},picked:{type:Boolean},prize:{type:Boolean}},setup(e){const t=e,a="cards-item",n=(0,i.f3)(S),s=(0,i.Fl)((()=>[a,{[`${a}_active`]:t.active,[`${a}_picked`]:t.picked}]));return(e,c)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)((0,l.SU)(s)),onClick:c[0]||(c[0]=(...e)=>t.onClick&&t.onClick(...e))},[(0,i._)("div",{class:(0,r.C_)(`${a}__inner`)},[(0,i._)("div",{class:(0,r.C_)(`${a}__parallax-item-wrapper`)},[(0,i.Wm)(P,{active:!t.active},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,r.C_)(`${a}__content`)},[(0,i._)("div",{class:(0,r.C_)(`${a}__text`)},F,2)],2)])),_:1},8,["active"])],2),(0,i.wy)((0,i.Wm)(z,{class:(0,r.C_)(`${a}__loader`)},null,8,["class"]),[[o.F8,t.active&&!(0,l.SU)(n).isLoaded.value]]),(0,i.Wm)(D,{visible:t.active,class:(0,r.C_)(`${a}__scene`),type:t.prize?(0,l.SU)(m).car:(0,l.SU)(m).goat},null,8,["visible","class","type"])],2)],2))}});const A=(0,b.Z)(j,[["__scopeId","data-v-1d34246a"]]);var Y,X=A,E=a(466);(function(e){e[e["pick"]=0]="pick",e[e["reveal"]=1]="reveal",e[e["gameOver"]=2]="gameOver"})(Y||(Y={}));const B=e=>{const t=3,a=Math.floor(Math.random()*t%t);return{answer:null,doorsState:new Array(t).fill(!1),doorsCount:t,gameState:Y.pick,pickedDoor:null,prizeDoor:a,totalSwitchPlays:e?.totalSwitchPlays||(0,E.y$C)("totalSwitchPlays",0),totalStayPlays:e?.totalStayPlays||(0,E.y$C)("totalStayPlays",0),totalSwitchWins:e?.totalSwitchWins||(0,E.y$C)("totalSwitchWins",0),totalStayWins:e?.totalStayWins||(0,E.y$C)("totalStayWins",0),win:!1}},T=(0,n.Q_)("gameState",{state:()=>B(),actions:{reset(){Object.assign(this,B(this))},start(){B()},pickDoor(e){switch(this.gameState){case Y.pick:this.gameState=Y.reveal,this.pickedDoor=e,this.revealDoor();break;case Y.reveal:if(this.doorsState[e])return;this.answer=e,this.check();break;case Y.gameOver:this.reset()}},revealDoor(){const e=[];this.doorsState.forEach(((t,a)=>{a!==this.prizeDoor&&a!==this.pickedDoor&&e.push(a)}));const t=e[Math.floor(Math.random()*e.length)];this.doorsState[t]=!0},check(){const e=this.answer===this.prizeDoor;this.pickedDoor===this.answer?(this.totalStayPlays++,e&&this.totalStayWins++):(this.totalSwitchPlays++,e&&this.totalSwitchWins++),this.win=e,this.gameState=Y.gameOver,this.doorsState=this.doorsState.map((()=>!0))}},getters:{getTotalsPlays(e){return e.totalSwitchPlays+e.totalStayPlays}}});var R=a(925),J=a(9469),K=(0,i.aZ)({__name:"ModelProvider",setup(e){const t="/monty-hall-problem",a={[m.car]:`${t}/models/car/scene.gltf`,[m.goat]:`${t}/models/goat/scene.gltf`},o=(0,l.iH)({}),n=(0,l.iH)(!1);return(0,i.bv)((()=>{const e=new R.l,t=new J.E(e);e.onLoad=function(){console.log("Models are loaded."),n.value=!0},Object.keys(a).forEach((e=>{t.load(a[e],(t=>{o.value[e]=t}))}))})),(0,i.JJ)(S,{models:o,isLoaded:n}),(e,t)=>(0,i.WI)(e.$slots,"default")}});const N=K;var q=N,Q=(0,i.aZ)({__name:"Cards",setup(e){const t=T(),a="cards",o=(0,i.Fl)((()=>[a]));return(e,a)=>((0,i.wg)(),(0,i.j4)(q,null,{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,r.C_)((0,l.SU)(o))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(t).doorsState,((e,a)=>((0,i.wg)(),(0,i.j4)(X,{key:a,active:e,"on-click":()=>(0,l.SU)(t).pickDoor(a),picked:a===(0,l.SU)(t).pickedDoor,prize:a===(0,l.SU)(t).prizeDoor},null,8,["active","on-click","picked","prize"])))),128))],2)])),_:1}))}});const V=(0,b.Z)(Q,[["__scopeId","data-v-5476c4d0"]]);var G=V;const ee=e=>((0,i.dD)("data-v-2f393d41"),e=e(),(0,i.Cn)(),e),te=ee((()=>(0,i._)("div",null,[(0,i._)("a",{href:"https://vk.com/newcyberrussia"},"«русский киберслон»")],-1)));var ae=(0,i.aZ)({__name:"Footer",setup(e){const t="footer",a=(0,i.Fl)((()=>(new Date).getFullYear())),o=(0,i.Fl)((()=>[t]));return(e,t)=>((0,i.wg)(),(0,i.iD)("footer",{class:(0,r.C_)((0,l.SU)(o))},[(0,i._)("div",null,"© "+(0,r.zw)((0,l.SU)(a))+" г.",1),te],2))}});const oe=(0,b.Z)(ae,[["__scopeId","data-v-2f393d41"]]);var ne=oe;const ie=e=>((0,i.dD)("data-v-416948bf"),e=e(),(0,i.Cn)(),e),re=ie((()=>(0,i._)("a",{href:"https://en.wikipedia.org/wiki/Monty_Hall_problem",target:"_blank"},[(0,i._)("h1",null,"Monty Hall Problem")],-1))),le=ie((()=>(0,i._)("p",null," Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. ",-1))),se=[re,le];var ce=(0,i.aZ)({__name:"Header",setup(e){const t="header";return(e,a)=>((0,i.wg)(),(0,i.iD)("header",{class:(0,r.C_)(t)},se))}});const ue=(0,b.Z)(ce,[["__scopeId","data-v-416948bf"]]);var ve=ue;const de=e=>Math.round(1e3*e)/1e3||0;var pe=(0,i.aZ)({__name:"Stats",setup(e){const t="stats",a=T(),o=(0,i.Fl)((()=>[{label:"Try:",value:a.getTotalsPlays},{label:"Won after switch:",value:a.totalSwitchWins/a.totalSwitchPlays},{label:"Won after stay:",value:a.totalStayWins/a.totalStayPlays}]));return(e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(t)},[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(o),(({label:e,value:t},a)=>((0,i.wg)(),(0,i.iD)("li",{key:a},[(0,i._)("div",null,(0,r.zw)(e),1),(0,i._)("div",null,(0,r.zw)((0,l.SU)(de)(t)),1)])))),128))])]))}});const he=(0,b.Z)(pe,[["__scopeId","data-v-fb193c88"]]);var _e=he;const we=["innerHTML"];var fe=(0,i.aZ)({__name:"Log",setup(e){const t="log",a=T(),{gameState:o,pickedDoor:s,doorsState:c,win:u}=(0,n.Jk)(a),v=(0,i.Fl)((()=>{const e=[];switch(o.value){case Y.pick:e.push("Choose a prize door.");break;case Y.reveal:{let t=0;c.value.forEach(((e,a)=>{a===s.value||c.value[a]||(t=a)})),e.push(`You picked the door No. ${(s.value||0)+1}.`),e.push(`Do you want to pick the door No. ${t+1}?`);break}case Y.gameOver:e.push(u.value?"You Win! Try again.":"You Loose! Try again.");break}return e}));return(e,a)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)(t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(v),((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,innerHTML:e},null,8,we)))),128))]))}});const ye=(0,b.Z)(fe,[["__scopeId","data-v-009d66f5"]]);var ge=ye,me=(0,i.aZ)({__name:"Layout",setup(e){const t=T(),a="layout",o=(0,i.Fl)((()=>[a,{[`${a}_win`]:t.gameState===Y.gameOver&&t.win,[`${a}_loose`]:t.gameState===Y.gameOver&&!t.win}]));return(e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,r.C_)((0,l.SU)(o))},[(0,i._)("div",null,[(0,i.Wm)(ve),(0,i._)("main",null,[(0,i.Wm)(G),(0,i.Wm)(ge)])]),(0,i._)("div",null,[(0,i.Wm)(_e),(0,i.Wm)(ne)])],2))}});const Se=(0,b.Z)(me,[["__scopeId","data-v-0fa70730"]]);var ke=Se,be=(0,i.aZ)({__name:"App",setup(e){return(e,t)=>((0,i.wg)(),(0,i.j4)(ke))}});const Ce=be;var De=Ce;const Ue=(0,o.ri)(De),He=(0,n.WB)();Ue.use(He),Ue.use(U.tc),Ue.mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],i=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var u=s(a)}for(t&&t(o);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunkmonty_hall_problem"]=self["webpackChunkmonty_hall_problem"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7965)}));o=a.O(o)})();
//# sourceMappingURL=app.8374063d.js.map