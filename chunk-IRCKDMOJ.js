import{a as h}from"./chunk-Z6K72RZS.js";import{a as v,b as _,c as w,d as b,e as a,f as y,g as k,h as S,j as C}from"./chunk-KHL3EISQ.js";import{d as x}from"./chunk-QBAHTZL7.js";import"./chunk-TQDOETWO.js";import"./chunk-YYIFK7QY.js";import{$a as r,Ka as c,La as s,Ya as f,Z as u,_a as t,ab as l,cb as d,kb as p,ob as g}from"./chunk-CRBS2SE4.js";var D=(()=>{let i=class i{constructor(e,o){this.router=e,this.userSession=o,this.form=new b({email:new a(""),password:new a("")})}login(){let e=this.form?.value.email;e==="factory"?this.loginUser(e):e==="zecca"&&this.loginPa(e)}loginUser(e){this.userSession.storeUser(e),this.router.navigateByUrl("/factory/home")}loginPa(e){this.userSession.storeUser(e),this.router.navigateByUrl("/zecca/home")}};i.\u0275fac=function(o){return new(o||i)(s(x),s(h))},i.\u0275cmp=u({type:i,selectors:[["app-login"]],standalone:!0,features:[g],decls:16,vars:1,consts:[[1,"h-screen","flex","min-h-full"],[1,"relative","hidden","flex-1","lg:block","w-1/2","bg-pocket_orange"],["src","/assets/img/splash.png","alt","",1,"p-24","absolute","inset-0","h-full","w-full","object-contain"],[1,"flex","flex-1","w-1/2","flex-col","justify-center","bg-pocket_purple","px-4","py-12","sm:px-6","lg:flex-none","lg:px-20","xl:px-24"],[1,"mx-auto","w-full"],[3,"submit","formGroup"],[1,"flex","flex-col","items-center","gap-2"],[1,"text-[48px]","leading-10","text-white","mb-20","text-center"],[1,"px-10"],["type","text","name","email","id","email","formControlName","email","placeholder","Email",1,"block","w-full","rounded-full","border-0","px-4","py-1.5","text-pocket_purple_p-900","shadow-sm","ring-1","ring-inset","ring-pocket_purple_p-300","placeholder:text-pocket_purple_p-400","focus:ring-2","focus:ring-inset","focus:ring-pocket_purple_p-600","text-4xl","sm:leading-6"],["type","password","name","password","id","password","formControlName","password","placeholder","Password",1,"block","w-full","rounded-full","border-0","px-4","py-1.5","text-pocket_purple_p-900","shadow-sm","ring-1","ring-inset","ring-pocket_purple_p-300","placeholder:text-pocket_purple_p-400","focus:ring-2","focus:ring-inset","focus:ring-pocket_purple_p-600","text-4xl","sm:leading-6"],[1,"mt-10","w-full","flex","justify-center"],["type","submit",1,"flex","justify-center","rounded-full","bg-pocket_yellow","px-20","py-5","text-[32px]","font-normal","leading-8","text-black","shadow-sm","hover:bg-pocket_yellow_p-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-pocket_yellow_p-600"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"div",1),l(2,"img",2),r(),t(3,"div",3)(4,"div",4)(5,"form",5),d("submit",function(){return m.login()}),t(6,"div",6)(7,"h2",7),p(8,"Inserisci le tue credenziali"),r(),t(9,"div",8),l(10,"input",9),r(),t(11,"div",8),l(12,"input",10),r(),t(13,"div",11)(14,"button",12),p(15," Login "),r()()()()()()()),o&2&&(c(5),f("formGroup",m.form))},dependencies:[C,y,v,_,w,k,S]});let n=i;return n})();export{D as LoginComponent};
