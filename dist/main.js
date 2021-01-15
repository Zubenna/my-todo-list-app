(()=>{"use strict";var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{bn:()=>l,gI:()=>r,iE:()=>s,Gr:()=>f,Pr:()=>v,eT:()=>n,Zp:()=>a,S$:()=>p,tk:()=>y,_n:()=>u,hs:()=>g,w:()=>i,Oo:()=>d,qJ:()=>o,pA:()=>c,HO:()=>m});const r=document.querySelector(".add-task"),a=document.querySelector(".form-title"),n=document.querySelector("#update-task"),i=document.querySelector("#sort-item"),d=document.querySelector(".add-group"),s=document.querySelector("#delete-group"),o=document.querySelector("#submit-task"),c=document.querySelector(".task-box"),l=document.querySelector("#enter-task"),u=document.querySelector("#group-name"),p=document.querySelector("#group-container"),y=document.querySelector("#gErrMsg"),m=document.querySelector("#task-name"),v=document.querySelector("#due-date"),g=document.querySelector("#select-priority"),f=document.querySelector("#describe-task");let S;document.querySelector(".fa-edit"),document.querySelector("#del-task"),document.querySelector(".task-box-div");const b=[{id:"3456",name:"Travelling",tasks:[{id:"7893455",name:"Travell to Lagos",dateDue:"2020-01-15",priority:"High",describe:"Attend an interview for a big job"}]},{id:"7865",name:"Study",tasks:[{id:"5768394",name:"Study JavaScript",dateDue:"2020-01-20",priority:"Medium",describe:"Studying this topic is crucial to my next project"}]}],k=()=>{localStorage.setItem("myTodoArray",JSON.stringify(S))},L=()=>{S=localStorage.getItem("myTodoArray")?JSON.parse(localStorage.getItem("myTodoArray")):b},E=()=>{L(),p.innerHTML="",S.forEach((e=>{const t=`\n    <p id=${e.id}>${e.name}</p>`;p.insertAdjacentHTML("afterbegin",t)}))},T=(e,t)=>e.findIndex((e=>e.id===t)),h=(e,t)=>{const r=T(e,t);e.splice(r,1),k()},q=()=>({id:Date.now().toString(),name:m.value,dateDue:v.value,priority:g.value,describe:f.value}),D=(e,t)=>e[T(e,t)].tasks,M=(e,t)=>{const r=t.priority,a=e.priority;let n=0;return r>a?n=1:r<a&&(n=-1),n},H=(e,t)=>{const r=t.dateDue,a=e.dateDue;let n=0;return r>a?n=1:r<a&&(n=-1),n};let O="",$="",x="",j="",A=!1;document.addEventListener("DOMContentLoaded",(()=>{l.classList.add("no-display"),E()})),r.addEventListener("click",(()=>{l.classList.toggle("no-display"),n.style.display="none"})),d.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e={id:Date.now().toString(),name:u.value.toUpperCase(),tasks:[]},t=e.name;0!==S.length&&""!==((e,t)=>{let r="";if(0!==e.length&&null!==e)return e.forEach((a=>{a.name===t&&(r=e.indexOf(t))})),r})(S,t)||""===u.value?(y.innerHTML="Duplicate or Empty Group Name not Allowed",y.classList.add("group-duplicate"),u.classList.add("red-border")):(L(),S.push(e),k(),y.innerHTML="",u.classList.remove("red-border"))})(),E()}));const I=e=>{L(),c.innerHTML="",e.forEach((e=>{const t=`\n      <div class='task-box-div' id='tb-${e.id}'><h5 class='t-title' id='pt-${e.id}'><span>Title:</span> ${e.name}</h5></br>\n      <textarea class='t-describe'>${e.describe}</textarea><p class='t-priority'><span>Priority:</span> ${e.priority}</p>\n      <div class='edit-box'><p class='due-date'><span>Due Date:</span> ${e.dateDue}</p><div class='task-edit'><i class="fa fa-edit" id='${e.id}e'></i>\n      <i class='fa fa-trash-o' id='${e.id}d'></i>\n      </div></div></div></br>`;c.insertAdjacentHTML("afterbegin",t)}))};p.addEventListener("click",(e=>{var t;e.preventDefault(),t=e.target.innerHTML,c.innerHTML="",S.forEach((e=>{if(t===e.name){O=e.id;const t=e.tasks;$=document.getElementById(O),$.classList.add("active-group"),I(t),A=!0,D(S,O).length>=2?i.style.display="block":i.style.display="none"}else x=e.id,j=document.getElementById(x),j.classList.remove("active-group")}))})),s.addEventListener("click",(()=>{A&&h(S,O),A=!1,E()})),o.addEventListener("click",(()=>{((e,r)=>{const a=e[T(e,r)];if(""!==m.value&&""!==v.value&&""!==f.value){const e=q();a.tasks.push(e),k()}(0,t.renderTasks)(a.tasks)})(S,O)})),c.addEventListener("click",(e=>{e.preventDefault();const t=e.target.className,r=e.target.id,i=e.target.parentElement.id,d=r.slice(0,r.length-1),s=D(S,O);s.forEach((e=>{if("fa fa-trash-o"===t&&d===e.id){const t=e.id;h(s,t),I(s)}if("fa fa-edit"===t&&d===e.id){a.innerHTML="Edit Task",o.style.display="none";const t=e.id;((e,t)=>{const r=e[T(e,t)];m.value=r.name,v.value=r.dateDue,g.value=r.priority,f.value=r.describe,l.style.display="block"})(s,t),n.addEventListener("click",(()=>{((e,t)=>{const r=T(e,t),a=q();e.splice(r,1,a),k()})(s,t),I(s)}))}const c=document.getElementById(i),u=r.slice(3,r.length);e.id===u&&c.classList.toggle("task-div")}))})),i.addEventListener("change",(e=>{var r,a;e.preventDefault(),r=D(S,O),"priority"===(a=i.value)&&(0,t.renderTasks)(r.sort(M)),"dateDue"===a&&(0,t.renderTasks)(r.sort(H))}))})();