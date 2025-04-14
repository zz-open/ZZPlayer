import{h as m,r as h,o as f,j as r,l as k,m as t,v as w,p as P,k as o,q as L,x as b,_,u as l,F as d,y as g,z as C,A as c}from"./index-DY8hqqhL.js";import{u as x}from"./useRouter-Cx65-gF2.js";import{g as $,c as B,d as S}from"./conf-DeAlgiNn.js";const z={style:{display:"flex","flex-direction":"column","align-items":"center","margin-top":"20px"}},N=m({__name:"custom-playlist",setup(u){const{goServerPage:a}=x(),n=h("123");f(()=>{const e={host:"https://api.injahow.cn/meting/",name:"我的歌单",server:"netease",id:"12554572272"};n.value=JSON.stringify(e,null,2)});function p(){const e=JSON.parse(n.value);e.type="playlist",a(e)}return(e,s)=>(o(),r("div",z,[k(t("textarea",{"onUpdate:modelValue":s[0]||(s[0]=i=>n.value=i),placeholder:"Paste your custom playlist here",style:{width:"400px",height:"100px"}},null,512),[[w,n.value]]),s[1]||(s[1]=t("div",null,[P(" 感谢以下站点提供的API，排名不分先后："),t("br"),t("a",{href:"https://meting.zhheo.com"},"meting.zhheo.com"),t("br"),t("a",{href:"https://meting-api.zdog.top/meting/api"},"meting-api.zdog.top/meting/api"),t("br"),t("a",{href:"https://api.injahow.cn/meting/"},"api.injahow.cn/meting/")],-1)),t("button",{onClick:p}," 播放 ")]))}}),j=""+new URL("background-BZAhfg-8.webp",import.meta.url).href,A=m({name:"PlayListBtn",inheritAttrs:!1,__name:"index",props:{text:{default:"按钮"},style:{default:void 0}},emits:["click"],setup(u){const a=u;return(n,p)=>(o(),r("div",{class:"play-list-btn",style:L(a.style),onClick:p[0]||(p[0]=e=>n.$emit("click"))},b(a.text),5))}}),I=_(A,[["__scopeId","data-v-32f8d7d8"]]),v=I,V={class:"bg-all"},T=["src"],D={class:"play-list-wrapper"},E={class:"row"},F={class:"row"},J={class:"row"},M={class:"row"},O=m({__name:"home-page",setup(u){const{goLocalPage:a,goServerPage:n}=x();return(p,e)=>(o(),r(d,null,[t("div",V,[t("img",{id:"bg",onerror:"this.classList.add('error');",src:l(j)},null,8,T),e[0]||(e[0]=t("div",{class:"cover"},null,-1))]),t("div",D,[t("div",null,[e[1]||(e[1]=t("h1",{style:{"text-align":"center"}}," 本地歌单(local) ",-1)),t("div",E,[(o(!0),r(d,null,g(l($)(),(s,i)=>(o(),c(l(v),{key:i,text:s.name,onClick:y=>l(a)(s)},null,8,["text","onClick"]))),128))])]),e[5]||(e[5]=t("div",{style:{height:"40px"}},null,-1)),t("div",null,[e[2]||(e[2]=t("h1",{style:{"text-align":"center"}}," 网易云歌单(netease) ",-1)),t("div",F,[(o(!0),r(d,null,g(l(B)(),(s,i)=>(o(),c(l(v),{key:i,text:s.name,onClick:y=>l(n)(s)},null,8,["text","onClick"]))),128))])]),e[6]||(e[6]=t("div",{style:{height:"40px"}},null,-1)),t("div",null,[e[3]||(e[3]=t("h1",{style:{"text-align":"center"}}," 企鹅音乐歌单(tencent) ",-1)),t("div",J,[(o(!0),r(d,null,g(l(S)(),(s,i)=>(o(),c(l(v),{key:i,text:s.name,onClick:y=>l(n)(s)},null,8,["text","onClick"]))),128))])]),t("div",null,[e[4]||(e[4]=t("h1",{style:{"text-align":"center"}}," 自定义歌单(custom) ",-1)),t("div",M,[C(N)])])])],64))}}),R=_(O,[["__scopeId","data-v-a8e01aa9"]]),Z=m({__name:"index",setup(u){return(a,n)=>(o(),c(R))}});export{Z as default};
