import{u as y}from"./vue-kakuyaku.a530ead7.js";import{_ as b}from"./CompatibilityMatrixTableIcon.vue_vue_type_style_index_0_lang.db34105e.js";import{d as k,g as v,o as t,c as e,k as i,F as d,D as u,t as _,H as x,l as p,e as g,p as C,m as S,_ as T}from"./framework.1293becd.js";import"./IconCheck.ce061fbd.js";const I=l=>(C("data-v-ba4f590a"),l=l(),S(),l),M={key:0},j=["title"],B={key:1,class:"border rounded p-2 my-4"},F={key:0,class:"flex space-x-2 items-center"},L=I(()=>i("span",null,"Loading data...",-1)),N=[L],V={key:1},w=k({__name:"CompatibilityMatrixTable",setup(l){const f="https://docs-compat.iroha2.tachi.soramitsu.co.jp/compat-matrix",o=y(()=>fetch(f,{}).then(r=>r.json()),{immediate:!0}),c=v(()=>{if(!o.state.fulfilled)return null;const r=o.state.fulfilled.value,m=["Story",...r.included_sdks.map(s=>s.name)],a=r.stories.map(s=>({story:s.name,results:s.results.map(n=>n.status)}));return{headers:m,rows:a}});return(r,m)=>c.value?(t(),e("table",M,[i("thead",null,[(t(!0),e(d,null,u(c.value.headers,a=>(t(),e("th",{key:a},_(a),1))),128))]),i("tbody",null,[(t(!0),e(d,null,u(c.value.rows,(a,s)=>(t(),e("tr",{key:s},[i("td",null,_(a.story),1),(t(!0),e(d,null,u(a.results,(n,h)=>(t(),e("td",{key:h,class:"status-cell",title:`Status: ${n}`},[x(b,{status:n},null,8,["status"])],8,j))),128))]))),128))])])):(t(),e("div",B,[p(o).state.pending?(t(),e("div",F,N)):p(o).state.rejected?(t(),e("div",V," Failed to load compatibility matrix data: "+_(p(o).state.rejected.reason),1)):g("",!0)]))}});const E=T(w,[["__scopeId","data-v-ba4f590a"]]);export{E as default};
