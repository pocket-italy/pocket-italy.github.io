import{c as h}from"./chunk-3BCLD6MB.js";import"./chunk-VE3FEGGN.js";import"./chunk-CDY7ZTGM.js";import{e as S}from"./chunk-SC6RD57Z.js";import{Ja as a,Jb as u,Ka as c,Ua as p,Wa as f,Y as d,Ya as e,Za as t,_a as x,bb as v,ib as i,kb as o,mb as g}from"./chunk-TCK2NVJ2.js";function E(r,l){if(r&1&&(e(0,"div",5)(1,"h2",6),i(2),t(),e(3,"div",7)(4,"h3",8),i(5,"Dati sulla segnalazione"),t(),e(6,"span"),i(7),t(),e(8,"span"),i(9),t(),e(10,"span"),i(11),t(),e(12,"span"),i(13,"Rivenditore: fratelli rossi srl"),t()(),e(14,"div",7)(15,"h3",8),i(16,"Dati aggregati"),t(),e(17,"span"),i(18),t(),e(19,"span"),i(20),t()()()),r&2){let s=v();a(2),o("Segnalazione n. ",s.item.reportNumber,""),a(5),o("Utente: ",s.item.user,""),a(2),o("Email: ",s.item.email,""),a(2),o("Tipologia di transazione: ",s.item.tradeType==="online"?"Online":"Fisico",""),a(7),o("Segnalazioni positive vicine: ",s.item.positiveCounting,""),a(2),o("Segnalazioni negative vicine: ",s.item.negativeCounting,"")}}var D=(()=>{let l=class l{constructor(m,n){this.route=m,this.service=n}ngOnInit(){this.route.params.subscribe(m=>{this.id=m.id,this.id&&this.service.getManualReportById(this.id).subscribe(n=>{n&&(this.item=n)})})}};l.\u0275fac=function(n){return new(n||l)(c(S),c(h))},l.\u0275cmp=d({type:l,selectors:[["app-zecca-report-full-detail"]],standalone:!0,features:[g],decls:5,vars:1,consts:[[1,"flex"],[1,"flex-1","flex","items-center","justify-center"],["src","/assets/img/placeholder-item.png"],[1,"flex-1"],["class","flex flex-col gap-3",4,"ngIf"],[1,"flex","flex-col","gap-3"],[1,"text-2xl","font-bold"],[1,"flex","flex-col","gap-1"],[1,"text-xl","font-bold"]],template:function(n,I){n&1&&(e(0,"div",0)(1,"div",1),x(2,"img",2),t(),e(3,"div",3),p(4,E,21,6,"div",4),t()()),n&2&&(a(4),f("ngIf",I.item))},dependencies:[u]});let r=l;return r})();export{D as ZeccaReportFullDetailComponent};
