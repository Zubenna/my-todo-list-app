(()=>{"use strict";const e=document.querySelector(".add-task"),t=document.querySelector("#enter-task"),r=document.querySelector("#group-name"),a=document.querySelector("#group-container"),i=document.querySelector(".add-group"),n=document.querySelector("#delete-group"),d=document.querySelector("#gErrMsg"),s=document.querySelector("#submit-task"),o=document.querySelector("#task-name"),c=document.querySelector("#due-date"),l=document.querySelector("#select-priority"),u=document.querySelector("#describe-task"),m=document.querySelector(".task-box");let p;document.querySelector(".fa-edit"),document.querySelector("#del-task");const g=[{id:Date.now().toString(),name:"Travelling",tasks:[{name:"Travell to Lagos"},{dueDate:"2020-01-15"},{description:"Attend an interview for a big job"},{priority:"High Priority"}]}],y=()=>{localStorage.setItem("myTodoArray",JSON.stringify(p))},v=()=>{p=localStorage.getItem("myTodoArray")?JSON.parse(localStorage.getItem("myTodoArray")):g},f=()=>{v(),a.innerHTML="",p.forEach((e=>{const t=`\n    <p id=${e.id}>${e.name}</p>`;a.insertAdjacentHTML("afterbegin",t)}))},L=(e,t)=>e.findIndex((e=>e.id===t)),S=(e,t)=>{const r=L(e,t);e.splice(r,1),y()},k=e=>{v(),m.innerHTML="",e.forEach((e=>{const t=`\n      <div class='task-box-div'><p class='t-title' id='pt-${e.id}'>Title: ${e.name}</p></br>\n      <textarea class='t-describe'>Description: ${e.describe}</textarea><p class='t-priority'>Priority: ${e.priority}</p>\n      <div class='edit-box'><p class='due-date'>Due Date: ${e.dateDue}</p><div class='task-edit'><i class="fa fa-edit" id='${e.id}e'></i>\n      <i class='fa fa-trash-o' id='${e.id}d'></i>\n      </div></div></div></br>`;m.insertAdjacentHTML("afterbegin",t)}))};let b="",E="",q="",D="",T=!1;document.addEventListener("DOMContentLoaded",(()=>{t.classList.add("no-display"),f()})),e.addEventListener("click",(()=>{t.classList.toggle("no-display")})),i.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e={id:Date.now().toString(),name:r.value.toUpperCase(),tasks:[]},t=e.name;0===p.length||""===((e,t)=>{let r="";if(0!==e.length&&null!==e)return e.forEach((a=>{a.name===t&&(r=e.indexOf(t))})),r})(p,t)&&""!==r.value?(v(),p.push(e),y(),d.innerHTML="",r.classList.remove("red-border")):(d.innerHTML="Duplicate or Empty Group Name not Allowed",d.classList.add("group-duplicate"),r.classList.add("red-border"))})(),f()})),a.addEventListener("click",(e=>{var t;e.preventDefault(),t=e.target.innerHTML,m.innerHTML="",p.forEach((e=>{if(t===e.name){b=e.id;let t=e.tasks;E=document.getElementById(b),E.classList.add("active-group"),k(t),T=!0}else q=e.id,D=document.getElementById(q),D.classList.remove("active-group")}))})),n.addEventListener("click",(()=>{T&&S(p,b),T=!1,f()})),s.addEventListener("click",(()=>{((e,t)=>{const r=e[L(e,t)],a={id:Date.now().toString(),name:o.value,dateDue:c.value,priority:l.value,describe:u.value};r.tasks.push(a),y(),k(r.tasks)})(p,b)})),m.addEventListener("click",(e=>{e.preventDefault();const t=e.target.className,r=e.target.id,a=r.slice(0,r.length-1),i=(n=p)[L(n,b)].tasks;var n;i.forEach((e=>{if("fa fa-trash-o"===t&&a===e.id){const t=e.id;S(i,t),k(i)}}))}))})();