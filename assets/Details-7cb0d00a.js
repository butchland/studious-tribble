import{k as u,a as e,L as x,N as w,j as a,F as E,l as p}from"./index-d209e428.js";import{u as N,a as f,H as y,I as b,g as H}from"./Head-03fc5d4e.js";const _=.4,I=.3;function A(){const s=N("(min-width: 600px)"),{fruitName:r}=u(),{VITE_HOME_PATH:d}={VITE_HOME_PATH:"",BASE_URL:"/studious-tribble/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},{isLoading:o,isError:c,error:m,data:h}=f(["fruits"],H);if(o||c)return e(x,{error:m});const t=h.find(i=>i.name.toLowerCase()===(r==null?void 0:r.toLowerCase()));if(!t)return e(w,{to:"/",replace:!0});const n=(s?window.innerWidth*_:window.innerWidth)*window.devicePixelRatio,l=(s?window.innerHeight:window.innerHeight*I)*window.devicePixelRatio;return a(E,{children:[e(y,{title:t.name}),a("div",{className:"flex min-h-screen flex-col items-center sm:flex-row",children:[a("div",{className:"relative",children:[e("img",{"data-testid":"FruitImage",width:n,height:l,style:{backgroundColor:t.image.color},src:`${t.image.url}&w=${n}&h=${l}`,alt:t.name}),e(b,{author:t.image.author})]}),a("div",{className:"my-8 sm:my-0 sm:ml-16",children:[a(p,{"data-testid":"BackLink",to:`${d}/`,className:"flex items-center",children:[e("img",{src:"/icons/arrow-left.svg",alt:"",className:"h-5 w-5"}),e("span",{className:"ml-4 text-xl",children:"Back"})]}),e("h1",{"data-testid":"FruitName",className:"mt-2 text-6xl font-bold sm:mt-8",children:t.name}),e("h2",{className:"mt-3 text-xl text-gray-500 dark:text-gray-400",children:"Vitamins per 100 g (3.5 oz)"}),a("table",{className:"mt-8 text-lg",children:[e("thead",{children:a("tr",{children:[e("th",{className:"px-4 py-2",children:"Vitamin"}),e("th",{className:"px-4 py-2",children:"Quantity"})]})}),e("tbody",{children:t.metadata.map(({name:i,value:g})=>a("tr",{className:"font-medium",children:[e("td",{className:"border border-gray-300 px-4 py-2",children:i}),e("td",{className:"border border-gray-300 px-4 py-2",children:g})]},`FruitVitamin-${i}`))})]})]})]})]})}export{A as default};
