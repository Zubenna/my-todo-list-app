(()=>{"use strict";const e=document.querySelector(".add-task"),t=document.querySelector("#enter-task"),r=document.querySelector("#group-name"),a=document.querySelector("#group-container"),n=document.querySelector(".add-group"),o=document.querySelector("#delete-group"),s=document.querySelector("#gErrMsg"),i=document.querySelector("#submit-task"),d=document.querySelector("#task-name"),c=document.querySelector("#due-date"),l=document.querySelector("#select-priority"),u=document.querySelector("#describe-task"),m=document.querySelector(".task-box");let p;const g=[{id:Date.now().toString(),name:"Travelling",tasks:[{name:"Travell to Lagos"},{dueDate:"2020-01-15"},{description:"Attend an interview for a big job"},{priority:"High Priority"}]}],y=()=>{localStorage.setItem("myTodoArray",JSON.stringify(p))},v=()=>{p=localStorage.getItem("myTodoArray")?JSON.parse(localStorage.getItem("myTodoArray")):g},L=()=>{v(),a.innerHTML="",p.forEach((e=>{const t=`\n    <p id=${e.id}>${e.name}</p>`;a.insertAdjacentHTML("afterbegin",t)}))},S=(e,t)=>e.findIndex((e=>e.id===t)),b=e=>{v(),m.innerHTML="",e.forEach((e=>{const t=`\n      <div class='task-box-div'><p class='t-title'>Title: ${e.name}</p></br>\n      <textarea class='t-describe'>Description: ${e.describe}</textarea><p class='t-priority'>Priority: ${e.priority}</p><p class='due-date'>Due Date: ${e.dateDue}</p></div></br>`;m.insertAdjacentHTML("afterbegin",t)}))};let k="",f="",E="",T="",q=!1;document.addEventListener("DOMContentLoaded",(()=>{t.classList.add("no-display"),L()})),e.addEventListener("click",(()=>{t.classList.toggle("no-display")})),n.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e={id:Date.now().toString(),name:r.value.toUpperCase(),tasks:[]},t=e.name;0===p.length||""===((e,t)=>{let r="";if(0!==e.length&&null!==e)return e.forEach((a=>{a.name===t&&(r=e.indexOf(t))})),r})(p,t)&&""!==r.value?(v(),p.push(e),y(),s.innerHTML="",r.classList.remove("red-border")):(s.innerHTML="Duplicate or Empty Group Name not Allowed",s.classList.add("group-duplicate"),r.classList.add("red-border"))})(),L()})),a.addEventListener("click",(e=>{var t;e.preventDefault(),t=e.target.innerHTML,m.innerHTML="",p.forEach((e=>{if(t===e.name){k=e.id;let t=e.tasks;f=document.getElementById(k),f.classList.add("active-group"),b(t),q=!0}else E=e.id,T=document.getElementById(E),T.classList.remove("active-group")}))})),o.addEventListener("click",(()=>{q&&((e,t)=>{const r=S(e,t);e.splice(r,1),y()})(p,k),q=!1,L()})),i.addEventListener("click",(()=>{((e,t)=>{const r=e[S(e,t)],a={name:d.value,dateDue:c.value,priority:l.value,describe:u.value};r.tasks.push(a),y(),b(r.tasks)})(p,k),console.log(k),console.log("submit-one clicked")}))})();