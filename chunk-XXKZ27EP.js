import{a as B,b as E,c as I,d as D,e as j,f as G,g as M,h as A,j as O}from"./chunk-YIRWMAFP.js";import{a as N,e as T}from"./chunk-XGDRW7ZU.js";import"./chunk-VWLSPXFT.js";import"./chunk-MIXFBDUP.js";import{b as R}from"./chunk-3BCLD6MB.js";import"./chunk-WODP3O2L.js";import"./chunk-VG5VR7ER.js";import{g as L}from"./chunk-SC6RD57Z.js";import{$a as _,Ib as k,Ja as l,Ka as x,Kb as S,Lb as F,Nb as V,Ua as v,Wa as c,Y as C,Ya as o,Za as a,_a as d,a as y,ab as g,b as w,bb as m,ga as u,ha as f,ib as p,mb as b}from"./chunk-TCK2NVJ2.js";function P(e,i){if(e&1){let n=_();o(0,"app-factory-create-batch-item",8),g("toogle",function(t){u(n);let s=m(2);return f(s.toogleItem(t))}),a()}if(e&2){let n=i.$implicit;c("item",n)}}function Q(e,i){if(e&1){let n=_();o(0,"div")(1,"div",4),v(2,P,1,1,"app-factory-create-batch-item",5),a(),o(3,"div",6)(4,"button",7),g("click",function(){u(n);let t=m();return f(t.next())}),p(5," Avanti "),a()()()}if(e&2){let n=m();l(2),c("ngForOf",n.itemsList)}}function W(e,i){if(e&1){let n=_();o(0,"div")(1,"form",9),g("submit",function(){u(n);let t=m();return f(t.create())}),o(2,"div",10)(3,"div",11),d(4,"input",12),a(),o(5,"button",13),p(6," Crea Lotto "),a()()()()}if(e&2){let n=m();l(),c("formGroup",n.form)}}function $(e,i){e&1&&(o(0,"div",10),d(1,"img",14),o(2,"h1",15),p(3,"Lotto creato correttamente"),a()())}function q(e,i){e&1&&(o(0,"div",10),d(1,"img",16),o(2,"h1",15),p(3,"Lotto non creato"),a()())}var ee=(()=>{let i=class i{constructor(r,t){this.router=r,this.service=t,this.itemsList=[],this.checkDone="not-selected",this.form=new D({serial:new j("")})}ngAfterViewInit(){this.service.getItems().subscribe(r=>{this.itemsList=r.map(t=>w(y({},t),{selected:!1}))})}create(){this.checkDone="success"}toogleItem(r){let t=this.itemsList.map(s=>{let h=y({},s);return s.id===r.id&&(h.selected=!h.selected),h});this.itemsList=t}next(){this.checkDone="serial"}};i.\u0275fac=function(t){return new(t||i)(x(L),x(R))},i.\u0275cmp=C({type:i,selectors:[["app-factory-create-batch"]],standalone:!0,features:[b],decls:6,vars:5,consts:[["title","Crea Lotto","subTitle","Qui vi \xE8 possibile creare un lotto a partire dai token che sono disponibili nella tua dashboard"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","mt-10 flex flex-col items-center justify-center gap-2",4,"ngSwitchCase"],[1,"grid","grid-cols-1","gap-6","lg:grid-cols-2","2xl:grid-cols-3"],[3,"item","toogle",4,"ngFor","ngForOf"],[1,"my-10","mt-10","w-full","flex","justify-center"],["type","button",1,"flex","justify-center","rounded-full","bg-pocket_yellow","px-20","py-2","text-[32px]","font-normal","leading-8","text-black","shadow-sm","hover:bg-pocket_yellow_p-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-pocket_yellow_p-600",3,"click"],[3,"toogle","item"],[3,"submit","formGroup"],[1,"mt-10","flex","flex-col","items-center","justify-center","gap-2"],[1,"px-10"],["type","text","name","serial","id","serial","formControlName","serial","placeholder","Inserisci il numero seriale dello sconto",1,"block","w-full","rounded-full","border-0","px-10","lg:px-20","py-2","text-black","shadow-sm","ring-1","ring-inset","ring-pocket_yellow_p-300","placeholder:text-pocket_yellow_p-700","focus:ring-2","focus:ring-inset","focus:ring-pocket_yellow_p-600","text-2xl","sm:leading-6","bg-pocket_yellow_p-300"],["type","submit",1,"mt-10","flex","justify-center","rounded-full","bg-pocket_yellow","px-20","py-5","text-[32px]","font-normal","leading-8","text-black","shadow-sm","hover:bg-pocket_yellow_p-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-pocket_yellow_p-600"],["src","assets/img/check-ok.png",1,"w-40","md:w-80","p-5"],[1,"text-[32px]"],["src","assets/img/check-fail.png",1,"w-40","md:w-80","p-5"]],template:function(t,s){t&1&&(o(0,"app-factory-page-layout",0)(1,"div",1),v(2,Q,6,1,"div",2)(3,W,7,1,"div",2)(4,$,4,0,"div",3)(5,q,4,0,"div",3),a()()),t&2&&(l(),c("ngSwitch",s.checkDone),l(),c("ngSwitchCase","not-selected"),l(),c("ngSwitchCase","serial"),l(),c("ngSwitchCase","success"),l(),c("ngSwitchCase","fail"))},dependencies:[V,k,S,F,O,G,B,E,I,M,A,N,T]});let e=i;return e})();export{ee as FactoryCreateBatchComponent};
