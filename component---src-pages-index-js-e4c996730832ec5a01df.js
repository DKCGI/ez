"use strict";(self.webpackChunkeznet=self.webpackChunkeznet||[]).push([[678],{6558:function(e,t,n){n.r(t);var i=n(7294),r=n(5468),o=n(8848).default.main.withConfig({displayName:"pages__StyledMain",componentId:"sc-y5vbf0-0"})([""]);t.default=function(){var e=(0,i.useRef)(),t=(0,i.useRef)(),n=(0,i.useRef)(),s=function(e,t){var n=(t.x-e.x)*(t.x-e.x),i=(t.y-e.y)*(t.y-e.y);return Math.sqrt(n+i)};return(0,i.useEffect)((function(){var i=e.current,r=function(){i.width=2*window.innerWidth,i.height=2*window.innerHeight,i.style.width=window.innerWidth+"px",i.style.height=window.innerHeight+"px"};i.style.position="fixed",i.style.top=0,r(),window.addEventListener("resize",r);var o={x:0,y:0},a=i.getContext("2d");a.lineCap="round",a.strokeStyle="#555555";var h=function(e){if(e)if(e.x&&e.y)o.x=2*e.x,o.y=2*e.y;else{if(!e.touches||!e.touches)return;o.x=2*e.touches[0].clientX,o.y=2*e.touches[0].clientY}};window.addEventListener("mousemove",h),window.addEventListener("touchmove",h);for(var u=function(){function e(e,t,n,i){this.pos={x:e,y:t},this.color="rgba(0,0,0,0.2)",this.vel={x:n,y:i},this.acc={x:0,y:0}}var t=e.prototype;return t.draw=function(){a.beginPath(),a.arc(this.pos.x,this.pos.y,3,0,2*Math.PI),a.fill()},t.update=function(){this.draw(),(this.pos.x>i.width||this.pos.x<0)&&(this.vel.x*=-1),(this.pos.y>i.height||this.pos.y<0)&&(this.vel.y*=-1),this.pos.x+=this.vel.x,this.pos.y+=this.vel.y},e}(),c=window.innerWidth/10,d=[],l=0;l<c;l++)d.push(new u(Math.random()*e.current.width,Math.random()*e.current.height,Math.random()>.5?5*Math.random():-5*Math.random(),Math.random()>.5?5*Math.random():-5*Math.random()));var f=function(){};return window.addEventListener("click",f),t.current=function(){a.fillStyle="rgba(255,255,255,0.03)",a.fillRect(0,0,e.current.width,e.current.height),d.forEach((function(e,t,n){var r=s(o,e.pos);if(r>i.width/6){a.fillStyle="rgba(0,75,150,"+r/1e4+")",a.strokeStyle="rgba(0,75,150,"+r/1e4+")";for(var h=0;h<n.length;h++)t!==h&&s(n[h].pos,e.pos)<300&&(a.beginPath(),a.moveTo(n[h].pos.x,n[h].pos.y),a.lineTo(e.pos.x,e.pos.y),a.stroke(),a.fill())}e.update()})),n.current=requestAnimationFrame(t.current)},n.current=requestAnimationFrame(t.current),function(){cancelAnimationFrame(n.current),window.removeEventListener("mousemove",h),window.removeEventListener("resize",r),window.removeEventListener("click",f)}}),[]),i.createElement(r.Z,null,i.createElement(o,null,i.createElement("canvas",{ref:e})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e4c996730832ec5a01df.js.map