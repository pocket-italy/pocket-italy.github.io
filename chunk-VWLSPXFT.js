import{$a as y,Hb as b,Ib as C,Ja as n,Nb as v,Ua as c,Wa as d,Y as g,Ya as o,Za as l,ab as u,bb as p,ga as x,ha as f,ib as m,kb as h,mb as _,pa as k}from"./chunk-TCK2NVJ2.js";function w(t,i){if(t&1&&(o(0,"th",5),m(1),l()),t&2){let r=i.$implicit;n(),h(" ",r.label," ")}}function T(t,i){if(t&1&&(o(0,"td",8),m(1),l()),t&2){let r=i.$implicit,e=p().$implicit;n(),h(" ",e[r]," ")}}function F(t,i){if(t&1){let r=y();o(0,"tr",6),u("click",function(){let a=x(r).index,s=p();return f(s.clickRow(a))}),c(1,T,2,1,"td",7),l()}if(t&2){let r=i.index,e=p();d("ngClass",r===e.indexClicked?"bg-pocket_purple text-white":"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800"),n(),d("ngForOf",e.headerKeys)}}var M=(()=>{let i=class i{constructor(){this.detailClick=new k,this.headerList=[],this.dataTable=[],this.indexClicked=null,this._headerKeys=[]}get headerKeys(){return this._headerKeys.length===0&&(this._headerKeys=this.headerList.map(e=>e.id)),this._headerKeys}clickRow(e){console.log(e,this.indexClicked),this.indexClicked===e&&this.detailClick.emit(this.dataTable[this.indexClicked]),this.indexClicked=e}detail(e){this.detailClick.emit(e)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=g({type:i,selectors:[["app-pocket-table"]],inputs:{headerList:"headerList",dataTable:"dataTable"},outputs:{detailClick:"detailClick"},standalone:!0,features:[_],decls:7,vars:2,consts:[[1,"relative","overflow-x-auto","overflow-y-auto","shadow-md","sm:rounded-lg","h-92"],[1,"w-full","text-sm","text-left","rtl:text-right","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-700","uppercase","bg-pocket_yellow","dark:bg-gray-700","dark:text-gray-400"],["scope","col","class","px-6 py-3",4,"ngFor","ngForOf"],["class"," border-b dark:border-gray-700",3,"ngClass","click",4,"ngFor","ngForOf"],["scope","col",1,"px-6","py-3"],[1,"border-b","dark:border-gray-700",3,"click","ngClass"],["class","px-6 py-4",4,"ngFor","ngForOf"],[1,"px-6","py-4"]],template:function(a,s){a&1&&(o(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr"),c(4,w,2,1,"th",3),l()(),o(5,"tbody"),c(6,F,2,2,"tr",4),l()()()),a&2&&(n(4),d("ngForOf",s.headerList),n(2),d("ngForOf",s.dataTable))},dependencies:[v,b,C]});let t=i;return t})();export{M as a};
