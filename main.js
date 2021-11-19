(()=>{"use strict";let e=localStorage.getItem("taskArrayKey"),t=localStorage.getItem("projArrayKey"),n=localStorage.getItem("projTaskArrayKey"),i=JSON.parse(e),r=JSON.parse(t),l=JSON.parse(n);const d=e=>{const t=document.getElementById(e);for(;t.firstChild;)t.removeChild(t.firstChild)},a=e=>{const t=document.getElementById(e),n=document.createElement("h3");t.appendChild(n);const r=document.createElement("button");t.appendChild(r),r.setAttribute("class","plusMoreTaskPlusButton"),r.setAttribute("id","addTaskPlusButton"),r.innerHTML="Add Task: +",r.addEventListener("click",(()=>{(e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","taskTitle"),r.setAttribute("value","Task Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Task Description");let s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("name","dueDate"),s.setAttribute("id","dueDateId"),s.setAttribute("value","Task Due Date");let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","priority"),c.setAttribute("id","priorityId"),c.setAttribute("value","Priority of Task");let u=document.createElement("input");u.setAttribute("type","textarea"),u.setAttribute("name","notes"),u.setAttribute("id","formNotesId"),u.setAttribute("row","4"),u.setAttribute("cols","50"),u.setAttribute("value","Task Notes");let p=document.createElement("label");p.setAttribute("for","complete"),p.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let y=document.createElement("label");y.setAttribute("for","completedInputId"),y.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Task!",I.addEventListener("click",(()=>{(()=>{const e=document.getElementById("taskTitle").value,t=document.getElementById("descriptoinInput").value,n=document.getElementById("dueDateId").value,r=document.getElementById("priorityId").value,l=document.getElementById("formNotesId").value;var d,a,o,s,c,u;(e=>{if(i){i.push(e),localStorage.setItem("taskArrayKey",JSON.stringify(i));let t=localStorage.getItem("taskArrayKey");i=JSON.parse(t)}else{i=[],i.push(e),localStorage.setItem("TaskArrayKey",JSON.stringify(i));let t=localStorage.getItem("taskArrayKey");i=JSON.parse(t)}})({title:d=e,description:a=t,dueDate:o=n,priority:s=r,notes:c=l,completed:u="Incomplete",returnInput:()=>{console.log(d,a,o,s,c,u)},completionToggle:()=>{u="complete"}})})(),d(e),o(e),a(e)}));const E=document.createElement("button");E.setAttribute("class","cancelTaskFrom"),E.setAttribute("id","cancelTaskFormId"),E.innerText="Cancel",E.addEventListener("click",(()=>{d(e),o(e),a(e)}));const h=document.createElement("br");t.appendChild(n),n.appendChild(r),n.appendChild(l),n.appendChild(s),n.appendChild(u),n.appendChild(h),n.appendChild(c),n.appendChild(h),n.appendChild(h),t.appendChild(E),t.appendChild(I)})(e)}))},o=t=>{for(let n=0;n<e.length;n++)if("Incomplete"===i[n].completed){const e=document.getElementById(t),r=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h2");c.setAttribute("class","tasktitle");const u=document.createElement("h4");u.setAttribute("class","taskdescription");const p=document.createElement("h5");p.setAttribute("class","taskduedate");const m=document.createElement("p");m.setAttribute("class","tasknotes");const b=document.createElement("button");b.addEventListener("click",(()=>{s(l)}));const A=document.createElement("button");A.dataset.cIndex=n,A.addEventListener("click",(()=>{i[n].completed="complete",localStorage.setItem("taskArrayKey",JSON.stringify(i)),d(t),o(t),a(t)})),e.appendChild(r),r.appendChild(c),r.appendChild(p),r.appendChild(l),r.appendChild(b),r.appendChild(A),l.appendChild(u),l.appendChild(m),l.style.display="none",r.setAttribute("class","eachTask"),r.setAttribute("id",i[n].title+n),c.innerHTML=i[n].title,p.innerHTML=i[n].dueDate,u.innerHTML=i[n].description,m.innerHTML=i[n].notes,b.innerHTML="Expand/Collapse!",A.innerHTML="Completed!"}},s=e=>{"none"===e.style.display?e.style.display="block":e.style.display="none"},c=e=>{const t=document.getElementById(e),n=document.createElement("button");t.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addTaskPlusButton"),n.innerHTML="Add Project: +",n.addEventListener("click",(()=>{u(e)}))},u=e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Project Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Project Description");let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDateId"),a.setAttribute("value","Project Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Project");let s=document.createElement("input");s.setAttribute("type","textarea"),s.setAttribute("name","notes"),s.setAttribute("id","formNotesId"),s.setAttribute("row","4"),s.setAttribute("cols","50"),s.setAttribute("value","Project Notes");let u=document.createElement("label");u.setAttribute("for","complete"),u.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let y=document.createElement("label");y.setAttribute("for","completedInputId"),y.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Project!",I.addEventListener("click",(()=>{(e=>{if(r){r.push(e),localStorage.setItem("projArrayKey",JSON.stringify(r));let t=localStorage.getItem("projArrayKey");r=JSON.parse(t)}else{r=[],r.push(e),localStorage.setItem("projArrayKey",JSON.stringify(r));let t=localStorage.getItem("projArrayKey");r=JSON.parse(t)}})({title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",completionToggle:()=>{}}),d(e),p(e),c("projectContainer")}));const E=document.createElement("button");E.setAttribute("class","cancelTaskFrom"),E.setAttribute("id","cancelTaskFormId"),E.innerText="Cancel",E.addEventListener("click",(()=>{d(e),p(e),c("projectContainer")}));const h=document.createElement("br");t.appendChild(n),n.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(s),n.appendChild(h),n.appendChild(o),n.appendChild(h),n.appendChild(h),t.appendChild(E),t.appendChild(I)},p=e=>{if(r){for(let n=0;n<t.length;n++)if("Incomplete"===r[n].completed){const t=document.getElementById(e),i=document.createElement("div");i.setAttribute("class","eachProj"),i.setAttribute("id",r[n].title+n);const l=document.createElement("h3"),a=document.createElement("h6"),o=document.createElement("h1"),s=document.createElement("p"),u=document.createElement("div");u.setAttribute("class","projectlistcontainer"),u.setAttribute("id",r[n].title+n+"tasks"),u.dataset.projIndex=n;const m=document.createElement("button");m.addEventListener("click",(()=>{r[n].completed="complete",localStorage.setItem("projArrayKey",JSON.stringify(r)),d(e),p(e),c(e)})),i.appendChild(l),i.appendChild(a),i.appendChild(o),i.appendChild(s),i.appendChild(u),i.appendChild(m),t.appendChild(i),l.innerHTML=r[n].title,o.innerHTML=r[n].dueDate,m.innerHTML="Completed!",b(u.id)}}else m(e)},m=e=>{const t=document.getElementById(e),n=document.createElement("button");t.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addProjTaskPlusButton"),n.innerHTML="Add Task:+",n.addEventListener("click",(()=>{(e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Task Title");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("id","descriptoinInput"),r.setAttribute("value","Task Description");let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDateId"),a.setAttribute("value","Task Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Task");let s=document.createElement("input");s.setAttribute("type","textarea"),s.setAttribute("name","notes"),s.setAttribute("id","formNotesId"),s.setAttribute("row","4"),s.setAttribute("cols","50"),s.setAttribute("value","Task Notes");let c=document.createElement("label");c.setAttribute("for","complete"),c.innerText="Is this Task complete yet?";let u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","taskCompletionCheck"),u.setAttribute("id","incompleteInputId"),u.setAttribute("value","incomplete");let p=document.createElement("label");p.setAttribute("for","incompleInputId"),p.innerText="Incomplete";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","completedInputId"),m.setAttribute("value","completed");let A=document.createElement("label");A.setAttribute("for","completedInputId"),A.innerText=":Completed";const y=document.createElement("button");y.setAttribute("class","submitNewTaskFormButton"),y.setAttribute("id","submitNewTaskFormButtonId"),y.innerText="Add Task!",y.addEventListener("click",(()=>{var t;t=e,(e=>{if(l){l.push(e),localStorage.setItem("projTaskArrayKey",JSON.stringify(l));let t=localStorage.getItem("projTaskArrayKey");l=JSON.parse(t)}else{l=[],l.push(e),localStorage.setItem("projTaskArrayKey",JSON.stringify(l));let t=localStorage.getItem("projTaskArrayKey");l=JSON.parse(t)}})({title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",projKeyValue:t,completionToggle:()=>{}}),d(e),b(e)}));const I=document.createElement("button");I.setAttribute("class","cancelTaskFrom"),I.setAttribute("id","cancelTaskFormId"),I.innerText="Cancel",I.addEventListener("click",(()=>{d(e),b(e)}));const E=document.createElement("br");t.appendChild(n),n.appendChild(i),n.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(E),n.appendChild(o),n.appendChild(E),n.appendChild(E),t.appendChild(I),t.appendChild(y)})(e)}))},b=e=>{for(let t=0;t<n.length;t++)if(e==l[t].projKeyValue&&"Incomplete"===l[t].completed){const n=document.getElementById(e),i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h2");a.setAttribute("class","tasktitle");const o=document.createElement("h4");o.setAttribute("class","taskdescription");const c=document.createElement("h5");c.setAttribute("class","taskduedate");const u=document.createElement("p");u.setAttribute("class","tasknotes");const p=document.createElement("button");p.addEventListener("click",(()=>{s(r)}));const m=document.createElement("button");m.addEventListener("click",(()=>{l[t].completed="complete",localStorage.setItem("projTaskArrayKey",JSON.stringify(l)),d(e),b(e)})),n.appendChild(i),i.appendChild(a),i.appendChild(c),i.appendChild(r),i.appendChild(p),i.appendChild(m),r.appendChild(o),r.appendChild(u),r.style.display="none",i.setAttribute("class","eachProjTask"),i.setAttribute("id",l[t].title+t),a.innerHTML=l[t].title,c.innerHTML=l[t].dueDate,o.innerHTML=l[t].description,u.innerHTML=l[t].notes,p.innerHTML="Expand/Collapse!",m.innerHTML="Completed!"}m(e)};e||t?(p("projectContainer"),o("taskListContainer"),a("taskListContainer"),c("projectContainer")):(a("taskListContainer"),c("projectContainer"))})();