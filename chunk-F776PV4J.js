import"./chunk-XGDRW7ZU.js";import{a as h}from"./chunk-VWLSPXFT.js";import"./chunk-MIXFBDUP.js";import{c as v}from"./chunk-3BCLD6MB.js";import"./chunk-WODP3O2L.js";import"./chunk-VG5VR7ER.js";import{g as f}from"./chunk-SC6RD57Z.js";import{Ja as s,Ka as o,Wa as c,Y as d,Ya as p,Za as m,a as n,ab as b,b as l,mb as u}from"./chunk-TCK2NVJ2.js";var y=(()=>{let i=class i{constructor(t,e){this.service=t,this.router=e,this.headerList=[{id:"reportNumber",label:"ID"},{id:"domain",label:"Dominio"},{id:"urlProduct",label:"URL Prodotto"},{id:"levelFake",label:"Grado"},{id:"date",label:"Data"}],this.dataTable=[]}ngAfterViewInit(){this.service.getWebReports().subscribe(t=>{this.dataTable=t.map(e=>l(n({},e),{date:new Date(e.date).toDateString()}))})}openDetail(t){this.router.navigateByUrl("zecca/web-site/"+t.id)}};i.\u0275fac=function(e){return new(e||i)(o(v),o(f))},i.\u0275cmp=d({type:i,selectors:[["app-zecca-web-sites"]],standalone:!0,features:[u],decls:2,vars:2,consts:[[1,"mx-10","mt-10"],[3,"detailClick","headerList","dataTable"]],template:function(e,r){e&1&&(p(0,"div",0)(1,"app-pocket-table",1),b("detailClick",function(D){return r.openDetail(D)}),m()()),e&2&&(s(),c("headerList",r.headerList)("dataTable",r.dataTable))},dependencies:[h]});let a=i;return a})();export{y as ZeccaWebSitesComponent};
