(function(){"use strict";var e={1591:function(e,t,r){var n=r(5130),a=r(6768);function o(e,t,r,n,o,s){const l=(0,a.g2)("Players"),i=(0,a.g2)("Rotations");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(l,{onUpdatePlayers:s.handlePlayers},null,8,["onUpdatePlayers"]),(0,a.bF)(i,{players:o.players,ref:"rotations"},null,8,["players"])],64)}var s=r(4232);const l={class:"rotation-wrapper"},i=["onClick"];function u(e,t,r,n,o,u){return(0,a.uX)(),(0,a.CE)("div",l,[t[1]||(t[1]=(0,a.eW)(" PLAYERS ")),(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>u.addPlayer&&u.addPlayer(...e))},"Add Player"),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.players,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:t,class:"player",onClick:e=>u.removePlayer(t)},(0,s.v_)(e.name),9,i)))),128))])])}r(4114);var p={name:"Rotations",data(){return{players:[]}},methods:{addPlayer(){if(6===this.players.length)return;const e=prompt("Enter player name:");this.players.push({name:e}),this.$emit("updatePlayers",this.players)},removePlayer(e){this.players.splice(e,1),this.$emit("updatePlayers",this.players)}}},c=r(1241);const y=(0,c.A)(p,[["render",u],["__scopeId","data-v-e8c879e8"]]);var d=y;const f={class:"rotation-wrapper"};function h(e,t,r,n,o,l){const i=(0,a.g2)("Court");return(0,a.uX)(),(0,a.CE)("div",f,[(0,a.eW)(" ROTATION WRAPPER "+(0,s.v_)(r.players.length?r.players:"No players")+" ",1),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.playerRotations,((e,t)=>((0,a.uX)(),(0,a.Wv)(i,{key:t,players:e,class:"court"},null,8,["players"])))),128))])}const v={class:"court"},m={class:"rotation"};function P(e,t,r,n,o,l){return(0,a.uX)(),(0,a.CE)("div",v,[t[0]||(t[0]=(0,a.eW)(" COURT ")),(0,a.Lk)("ul",m,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.players,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:t,class:"player"},(0,s.v_)(e.name),1)))),128))])])}var b={name:"Rotations",props:{players:{type:Array,required:!0,defualt:[]}}};const R=(0,c.A)(b,[["render",P],["__scopeId","data-v-5e72c59c"]]);var g=R,C={name:"Rotations",components:{Court:g},props:{players:{type:Array,required:!0,defualt:[]}},data(){return{playerRotations:[]}},methods:{buildPlayerRotations(){this.playerRotations=[];for(let e=0;e<this.players.length;e++){const t=this.players.slice(e).concat(this.players.slice(0,e));this.playerRotations.push(t)}console.log(this.playerRotations,this.players)}}};const k=(0,c.A)(C,[["render",h],["__scopeId","data-v-3eda2a52"]]);var E=k,O={name:"App",components:{Rotations:E,Players:d},data(){return{players:[]}},methods:{handlePlayers(e){this.players=e,6===this.players.length?this.$refs.rotations.buildPlayerRotations():this.players.length<6&&(this.$refs.rotations.playerRotations=[])}},mounted(){}};const _=(0,c.A)(O,[["render",o]]);var A=_;(0,n.Ef)(A).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(p=0;p<e.length;p++){n=e[p][0],a=e[p][1],o=e[p][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(p--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var p=i(r)}for(t&&t(n);u<s.length;u++)o=s[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},n=self["webpackChunkvolleyball_rotations"]=self["webpackChunkvolleyball_rotations"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(1591)}));n=r.O(n)})();
//# sourceMappingURL=app.9187667a.js.map