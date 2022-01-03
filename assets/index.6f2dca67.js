var $=Object.defineProperty,j=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(t,e,a)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))M.call(e,a)&&v(t,a,e[a]);if(b)for(var a of b(e))C.call(e,a)&&v(t,a,e[a]);return t},h=(t,e)=>j(t,w(e));import{s as d,C as S,R as i,r as f,a as _}from"./vendor.ca0833ff.js";const z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};z();const B=d.div`
  position: relative;
  perspective: 1000px;
  border: 1px solid transparent;
  border-radius: 16px;
  opacity: 1;
  transition: all .3s ease-in-out;

  img {
    border-radius: 16px;
    border: 1px solid transparent;
  }

  &:hover {
    opacity: .9;
    transform: scale(1.03);
  }

  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`,x=S`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
`,G=d.img`
  ${x}
  z-index: ${t=>t.flipped?2:1};
  transform: ${t=>t.flipped?"rotate(0deg)":"rotateY(180deg)"};
`,L=d.img`
  ${x}
  z-index: ${t=>t.flipped?1:2};
  transform: ${t=>t.flipped?"rotateY(180deg)":"rotate(360deg)"};
  position: absolute;
  top: 0px;
  left: 0px;
`,O=({card:t,callback:e})=>{const a=()=>{t.clickable&&e(t)};return i.createElement(B,{onClick:a},i.createElement(G,{flipped:t.flipped,src:t.frontImage,alt:"card-front"}),i.createElement(L,{flipped:t.flipped,src:t.backImage,alt:"card-back"}))};var W="./assets/card_1.c21a90db.jpg",N="./assets/card_2.e073055b.jpg",P="./assets/card_3.f0a51297.jpg",A="./assets/card_4.c5f2bf31.jpg",R="./assets/card_5.73a5f437.jpg",Y="./assets/card_6.45799545.jpg",F="./assets/card_back.e23245e3.jpg";const m=[W,N,P,A,R,Y],y=()=>[...m,...m].map((t,e)=>({id:`card${e}`,flipped:!1,backImage:F,frontImage:t,clickable:!0,matchingCardId:e<m.length?`card${e+m.length}`:`card${e-m.length}`})),k=t=>t.map(e=>[Math.random(),e]).sort((e,a)=>e[0]-a[0]).map(e=>e[1]),q=d.div`
  width: 100%;
  max-width: 1240px;
  min-width: 320px;
  margin: 0 auto;
  font-family: 'Metamorphous', cursive;
  text-align: center;
`,D=d.h1`
  font-size: clamp(2rem, 4vw, 8rem);
  text-transform: uppercase;
`,H=d.button`
  padding: 12px 22px;
  margin-bottom: 2.5rem;
  background: rgb(40, 40, 40);
  color: rgb(221, 214, 205);
  font-size: 1.2rem;
  font-family: 'Metamorphous', cursive;
  border: 1px solid #000;
  border-radius: 8px;
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgb(221, 214, 205);
    color: rgb(40, 40, 40);
  }
`,K=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
  margin-bottom: 3rem;

  @media (min-width: 720px) {
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`,T=()=>{const[t,e]=f.exports.useState(k(y())),[a,u]=f.exports.useState(!1),[r,o]=f.exports.useState(0),[n,g]=f.exports.useState(void 0);f.exports.useEffect(()=>{r===t.length/2&&(console.log("Game Won"),u(!0))},[r]);const E=()=>{g(void 0),e(k(y()))},I=l=>{if(e(c=>c.map(s=>s.id===l.id?h(p({},s),{flipped:!0,clickable:!1}):s)),!n){g(p({},l));return}if(n.matchingCardId===l.id){o(c=>c+1),e(c=>c.map(s=>s.id===n.id||s.id===l.id?h(p({},s),{clickable:!1}):s)),g(void 0);return}setTimeout(()=>{e(c=>c.map(s=>s.id===n.id||s.id===l.id?h(p({},s),{flipped:!1,clickable:!0}):s))},1500),g(void 0)};return i.createElement(q,null,i.createElement(D,null,"Charachter Match"),i.createElement(H,{onClick:E},"New Game"),i.createElement(K,null,t.map(l=>i.createElement(O,{key:l.id,card:l,callback:I}))))};_.render(i.createElement(i.StrictMode,null,i.createElement(T,null)),document.getElementById("root"));
