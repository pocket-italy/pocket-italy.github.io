import{a as F,b as D,c as j,d as V,e as f,f as G,g as I,h as P,j as z}from"./chunk-YIRWMAFP.js";import{a as N}from"./chunk-XGDRW7ZU.js";import"./chunk-VWLSPXFT.js";import"./chunk-MIXFBDUP.js";import"./chunk-WODP3O2L.js";import"./chunk-VG5VR7ER.js";import"./chunk-SC6RD57Z.js";import{$a as h,Ga as w,Ja as r,Jb as C,Kb as S,Lb as E,Nb as T,Ua as y,Wa as c,Y as b,Ya as e,Za as t,_a as s,ab as _,bb as m,ga as u,ha as x,ib as o,kb as g,mb as k}from"./chunk-TCK2NVJ2.js";function M(i,a){if(i&1&&(e(0,"div",25),s(1,"img",26),t()),i&2){let n=m(2);r(),c("src",n.imageSrc,w)}}function R(i,a){if(i&1){let n=h();e(0,"div")(1,"form",5),_("submit",function(){u(n);let l=m();return x(l.createToken())}),e(2,"div",6)(3,"div",7)(4,"div",8),s(5,"input",9),t(),e(6,"div",8),s(7,"input",10),t(),e(8,"div",8),s(9,"input",11),t(),e(10,"div",8),s(11,"input",12),t()(),e(12,"div",13)(13,"div",14)(14,"label",15)(15,"div",16)(16,"p",17)(17,"span",18),o(18,"Foto del prodotto "),t()(),s(19,"img",19),e(20,"p",17)(21,"span",18),o(22,"Clicca per caricare "),t(),o(23," o trascina sopra "),t(),e(24,"p",20),o(25,"PNG, JPEG"),t()(),e(26,"input",21),_("change",function(l){u(n);let d=m();return x(d.onPhotoPicked(l))}),t()()(),y(27,M,2,1,"div",22),t()(),e(28,"div",23)(29,"button",24),o(30," Genera Token "),t()()()()}if(i&2){let n=m();r(),c("formGroup",n.form),r(26),c("ngIf",n.imageSrc)}}function L(i,a){if(i&1&&(e(0,"div",25),s(1,"img",26),t()),i&2){let n=m(2);r(),c("src",n.itemDetail.photo,w)}}function U(i,a){if(i&1){let n=h();e(0,"div",27)(1,"div",6)(2,"div",7)(3,"div",8)(4,"p",28)(5,"label",29),o(6," Nome Prodotto "),t(),e(7,"span"),o(8),t()()(),e(9,"div",8)(10,"p",28)(11,"label",29),o(12," Categoria "),t(),e(13,"span"),o(14),t()()(),e(15,"div",8)(16,"p",28)(17,"label",29),o(18," Descrizione "),t(),e(19,"span"),o(20),t()()(),e(21,"div",8)(22,"p",28)(23,"label",29),o(24," Codice Seriale "),t(),e(25,"span"),o(26),t()()()(),e(27,"div",13),y(28,L,2,1,"div",22),t()(),e(29,"div",23)(30,"button",30),_("click",function(){u(n);let l=m();return x(l.confirm())}),o(31," Conferma "),t()()()}if(i&2){let n=m();r(8),g(" ",n.itemDetail.productName," "),r(6),g(" ",n.itemDetail.category," "),r(6),g(" ",n.itemDetail.description," "),r(6),g(" ",n.itemDetail.serial," "),r(2),c("ngIf",n.itemDetail.photo)}}function A(i,a){i&1&&(e(0,"div",31),s(1,"img",32),e(2,"h1",33),o(3,"Token creato correttamente"),t()())}function H(i,a){i&1&&(e(0,"div",31),s(1,"img",34),e(2,"h1",33),o(3,"Token non creato"),t()())}var J={productName:"Sneakers Bruce",category:"Scarpe",description:"Sneakrs stringata con suola running",serial:"DGR345HJ89LHF",photo:"/assets/img/placeholder-item.png"},Y=(()=>{let a=class a{constructor(){this.status="form",this.itemDetail=J,this.form=new V({productName:new f(""),category:new f(""),description:new f(""),serial:new f(""),photo:new f(null)}),this.imageSrc=null}createToken(){this.status="detail"}confirm(){this.status="success"}onPhotoPicked(p){let l=p.target.files;if(!l||l.length===0)return;let d=l[0];if(d){this.form.patchValue({photo:{name:d.name,file:d}});let v=new FileReader;v.onload=B=>this.imageSrc=v.result,v.readAsDataURL(d)}}};a.\u0275fac=function(l){return new(l||a)},a.\u0275cmp=b({type:a,selectors:[["app-factory-create-token"]],standalone:!0,features:[k],decls:6,vars:5,consts:[["title","Crea Token","subTitle","Qui puoi inserire i dati del tuo prodotto e creare un token associato ad esso"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","flex flex-col gap-3",4,"ngSwitchCase"],["class","mt-10 flex flex-col items-center justify-center gap-2",4,"ngSwitchCase"],[1,"flex","flex-col","gap-3",3,"submit","formGroup"],[1,"w-full","flex","flex-col","lg:flex-row","gap-2"],[1,"flex","flex-col","gap-2"],[1,"mx-5","md:ml-0","md:mr-5"],["type","text","name","productName","id","productName","formControlName","productName","placeholder","Nome prodotto",1,"block","w-full","rounded-full","border-0","bg-pocket_yellow","px-4","py-1.5","text-gray-800","shadow-sm","ring-1","ring-inset","ring-pocket_yellow_p-300","placeholder:text-gray-7gray00","focus:ring-2","focus:ring-inset","focus:ring-pocket_yellow_p-800","text-4xl","sm:leading-6"],["type","text","name","category","id","category","formControlName","category","placeholder","Categoria",1,"block","w-full","rounded-full","border-0","bg-pocket_yellow","px-4","py-1.5","text-gray-800","shadow-sm","ring-1","ring-inset","ring-pocket_yellow_p-300","placeholder:text-gray-7gray00","focus:ring-2","focus:ring-inset","focus:ring-pocket_yellow_p-800","text-4xl","sm:leading-6"],["type","text","name","description","id","description","formControlName","description","placeholder","Descrizione",1,"block","w-full","rounded-full","border-0","bg-pocket_yellow","px-4","py-1.5","text-gray-800","shadow-sm","ring-1","ring-inset","ring-pocket_yellow_p-300","placeholder:text-gray-7gray00","focus:ring-2","focus:ring-inset","focus:ring-pocket_yellow_p-800","text-4xl","sm:leading-6"],["type","text","name","serial","id","serial","formControlName","serial","placeholder","Codice Seriale",1,"block","w-full","rounded-full","border-0","bg-pocket_yellow","px-4","py-1.5","text-gray-800","shadow-sm","ring-1","ring-inset","ring-pocket_yellow_p-300","placeholder:text-gray-7gray00","focus:ring-2","focus:ring-inset","focus:ring-pocket_yellow_p-800","text-4xl","sm:leading-6"],[1,"flex","flex-col","gap-10","mt-20","lg:mt-0"],[1,"flex","items-center","justify-center","w-full"],["for","dropzone-file",1,"flex","flex-col","items-center","justify-center","w-full","h-40","md:w-80","border-2","border-gray-300","border-line","rounded-lg","cursor-pointer","bg-gray-300","dark:hover:bg-bray-800","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500","dark:hover:bg-gray-600"],[1,"flex","flex-col","items-center","justify-center","pt-5","pb-6"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],["src","/assets/img/folder-icon.png","alt","",1,"w-8","h-8","mb-4","text-gray-500","dark:text-gray-400"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["id","dropzone-file","type","file",1,"hidden",3,"change"],["class","p-2 flex justify-center overflow-hidden rounded-xl bg-gray-200",4,"ngIf"],[1,"mt-10","w-full","flex","justify-center"],["type","submit",1,"flex","justify-center","rounded-full","bg-pocket_yellow","px-20","py-5","text-[32px]","font-normal","leading-8","text-black","shadow-sm","hover:bg-pocket_yellow_p-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-pocket_yellow_p-600"],[1,"p-2","flex","justify-center","overflow-hidden","rounded-xl","bg-gray-200"],["alt","",1,"w-72","object-cover",3,"src"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-4","w-full","rounded-xl","border-0","px-4","py-2","text-gray-800","shadow-sm","ring-1","text-2xl","sm:leading-6"],[1,"font-bold"],["type","button",1,"flex","justify-center","rounded-full","bg-pocket_yellow","px-20","py-5","text-[32px]","font-normal","leading-8","text-black","shadow-sm","hover:bg-pocket_yellow_p-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-pocket_yellow_p-600",3,"click"],[1,"mt-10","flex","flex-col","items-center","justify-center","gap-2"],["src","assets/img/check-ok.png",1,"w-40","md:w-80","p-5"],[1,"text-[32px]"],["src","assets/img/check-fail.png",1,"w-40","md:w-80","p-5"]],template:function(l,d){l&1&&(e(0,"app-factory-page-layout",0)(1,"div",1),y(2,R,31,2,"div",2)(3,U,32,5,"div",3)(4,A,4,0,"div",4)(5,H,4,0,"div",4),t()()),l&2&&(r(),c("ngSwitch",d.status),r(),c("ngSwitchCase","form"),r(),c("ngSwitchCase","detail"),r(),c("ngSwitchCase","success"),r(),c("ngSwitchCase","fail"))},dependencies:[N,T,C,S,E,z,G,F,D,j,I,P]});let i=a;return i})();export{Y as FactoryCreateTokenComponent};
