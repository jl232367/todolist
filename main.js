(()=>{"use strict";let e=localStorage.getItem("taskArrayKey"),t=localStorage.getItem("projArrayKey"),n=localStorage.getItem("projTaskArrayKey"),i=JSON.parse(e),r=JSON.parse(t),l=JSON.parse(n);const d=e=>{const t=document.getElementById(e);for(;t.firstChild;)t.removeChild(t.firstChild)},a=e=>{const t=document.getElementById(e),n=document.createElement("h3");t.appendChild(n);const r=document.createElement("button");t.appendChild(r),r.setAttribute("class","plusMoreTaskPlusButton"),r.setAttribute("id","addTaskPlusButton"),r.innerHTML="Add Task: +",r.addEventListener("click",(()=>{(e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","title"),r.setAttribute("id","taskTitle"),r.setAttribute("value","Task Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Task Description");let s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("name","dueDate"),s.setAttribute("id","dueDateId"),s.setAttribute("value","Task Due Date");let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","priority"),c.setAttribute("id","priorityId"),c.setAttribute("value","Priority of Task");let u=document.createElement("input");u.setAttribute("type","textarea"),u.setAttribute("name","notes"),u.setAttribute("id","formNotesId"),u.setAttribute("row","4"),u.setAttribute("cols","50"),u.setAttribute("value","Task Notes");let p=document.createElement("label");p.setAttribute("for","complete"),p.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let y=document.createElement("label");y.setAttribute("for","completedInputId"),y.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Submit Task!",I.addEventListener("click",(()=>{(()=>{const e=document.getElementById("taskTitle").value,t=document.getElementById("descriptoinInput").value,n=document.getElementById("dueDateId").value,r=document.getElementById("priorityId").value,l=document.getElementById("formNotesId").value;var d,a,o,s,c,u;(e=>{if(i){i.push(e),localStorage.setItem("taskArrayKey",JSON.stringify(i));let t=localStorage.getItem("taskArrayKey");i=JSON.parse(t)}else{i=[],i.push(e),localStorage.setItem("TaskArrayKey",JSON.stringify(i));let t=localStorage.getItem("taskArrayKey");i=JSON.parse(t)}})({title:d=e,description:a=t,dueDate:o=n,priority:s=r,notes:c=l,completed:u="Incomplete",returnInput:()=>{console.log(d,a,o,s,c,u)},completionToggle:()=>{u="complete"}})})(),d(e),o(e),console.log("Not sure why this would execute but trying it.")}));const E=document.createElement("button");E.setAttribute("class","cancelTaskFrom"),E.setAttribute("id","cancelTaskFormId"),E.innerText="Cancel",E.addEventListener("click",(()=>{d(e),o(e),a(e)}));const h=document.createElement("br");t.appendChild(n),n.appendChild(r),n.appendChild(l),n.appendChild(s),n.appendChild(u),n.appendChild(h),n.appendChild(c),n.appendChild(h),n.appendChild(h),t.appendChild(E),t.appendChild(I)})(e)}))},o=e=>{if(i){for(let t=0;t<i.length;t++)if("Incomplete"===i[t].completed){const n=document.getElementById(e),r=document.createElement("div"),l=document.createElement("div"),c=document.createElement("h2");c.setAttribute("class","tasktitle");const u=document.createElement("h4");u.setAttribute("class","taskdescription");const p=document.createElement("h5");p.setAttribute("class","taskduedate");const m=document.createElement("p");m.setAttribute("class","tasknotes");const b=document.createElement("button");b.addEventListener("click",(()=>{s(l)}));const A=document.createElement("button");A.dataset.cIndex=t,A.addEventListener("click",(()=>{i[t].completed="complete",localStorage.setItem("taskArrayKey",JSON.stringify(i)),d(e),o(e),a(e)})),n.appendChild(r),r.appendChild(c),r.appendChild(p),r.appendChild(l),r.appendChild(b),r.appendChild(A),l.appendChild(u),l.appendChild(m),l.style.display="none",r.setAttribute("class","eachTask"),r.setAttribute("id",i[t].title+t),c.innerHTML=i[t].title,p.innerHTML=i[t].dueDate,u.innerHTML=i[t].description,m.innerHTML=i[t].notes,b.innerHTML="Expand/Collapse!",A.innerHTML="Completed!"}}else a(e)},s=e=>{"none"===e.style.display?e.style.display="block":e.style.display="none"},c=e=>{const t=document.getElementById(e),n=document.createElement("button");t.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addTaskPlusButton"),n.innerHTML="Add Project: +",n.addEventListener("click",(()=>{p(e)}))},u=e=>{const t=document.getElementById(e),n=document.createElement("button");t.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addProjTaskPlusButton"),n.innerHTML="Add Task:+",n.addEventListener("click",(()=>{b(e)}))},p=e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Project Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Project Description");let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDateId"),a.setAttribute("value","Project Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Project");let s=document.createElement("input");s.setAttribute("type","textarea"),s.setAttribute("name","notes"),s.setAttribute("id","formNotesId"),s.setAttribute("row","4"),s.setAttribute("cols","50"),s.setAttribute("value","Project Notes");let u=document.createElement("label");u.setAttribute("for","complete"),u.innerText="Is this Task complete yet?";let p=document.createElement("input");p.setAttribute("type","radio"),p.setAttribute("name","taskCompletionCheck"),p.setAttribute("id","incompleteInputId"),p.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let y=document.createElement("label");y.setAttribute("for","completedInputId"),y.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Project!",I.addEventListener("click",(()=>{(e=>{if(r){r.push(e),localStorage.setItem("projArrayKey",JSON.stringify(r));let t=localStorage.getItem("projArrayKey");r=JSON.parse(t)}else{r=[],r.push(e),localStorage.setItem("projArrayKey",JSON.stringify(r));let t=localStorage.getItem("projArrayKey");r=JSON.parse(t)}})({title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",completionToggle:()=>{}}),d(e),m(e),c("projectContainer")}));const E=document.createElement("button");E.setAttribute("class","cancelTaskFrom"),E.setAttribute("id","cancelTaskFormId"),E.innerText="Cancel",E.addEventListener("click",(()=>{d(e),m(e),c("projectContainer")}));const h=document.createElement("br");t.appendChild(n),n.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(s),n.appendChild(h),n.appendChild(o),n.appendChild(h),n.appendChild(h),t.appendChild(E),t.appendChild(I)},m=e=>{if(r){for(let t=0;t<r.length;t++)if("Incomplete"===r[t].completed){const n=document.getElementById(e),i=document.createElement("div");i.setAttribute("class","eachProj"),i.setAttribute("id",r[t].title+t);const l=document.createElement("h3"),a=document.createElement("h6"),o=document.createElement("h1"),s=document.createElement("p"),u=document.createElement("div");u.setAttribute("class","projectlistcontainer"),u.setAttribute("id",r[t].title+t+"tasks"),u.dataset.projIndex=t;const p=document.createElement("button");p.addEventListener("click",(()=>{r[t].completed="complete",localStorage.setItem("projArrayKey",JSON.stringify(r)),d(e),m(e),c(e)})),i.appendChild(l),i.appendChild(a),i.appendChild(o),i.appendChild(s),i.appendChild(u),i.appendChild(p),n.appendChild(i),l.innerHTML=r[t].title,o.innerHTML=r[t].dueDate,p.innerHTML="Completed!",A(u.id)}}else c(e)},b=e=>{d(e);const t=document.getElementById(e);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Task Title");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("id","descriptoinInput"),r.setAttribute("value","Task Description");let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDateId"),a.setAttribute("value","Task Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Task");let s=document.createElement("input");s.setAttribute("type","textarea"),s.setAttribute("name","notes"),s.setAttribute("id","formNotesId"),s.setAttribute("row","4"),s.setAttribute("cols","50"),s.setAttribute("value","Task Notes");let c=document.createElement("label");c.setAttribute("for","complete"),c.innerText="Is this Task complete yet?";let u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","taskCompletionCheck"),u.setAttribute("id","incompleteInputId"),u.setAttribute("value","incomplete");let p=document.createElement("label");p.setAttribute("for","incompleInputId"),p.innerText="Incomplete";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","completedInputId"),m.setAttribute("value","completed");let b=document.createElement("label");b.setAttribute("for","completedInputId"),b.innerText=":Completed";const y=document.createElement("button");y.setAttribute("class","submitNewTaskFormButton"),y.setAttribute("id","submitNewTaskFormButtonId"),y.innerText="Add Task!",y.addEventListener("click",(()=>{var t;t=e,(e=>{if(l){l.push(e),localStorage.setItem("projTaskArrayKey",JSON.stringify(l));let t=localStorage.getItem("projTaskArrayKey");l=JSON.parse(t)}else{l=[],l.push(e),localStorage.setItem("projTaskArrayKey",JSON.stringify(l));let t=localStorage.getItem("projTaskArrayKey");l=JSON.parse(t)}})({title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",projKeyValue:t,completionToggle:()=>{}}),d(e),A(e)}));const I=document.createElement("button");I.setAttribute("class","cancelTaskFrom"),I.setAttribute("id","cancelTaskFormId"),I.innerText="Cancel",I.addEventListener("click",(()=>{d(e),A(e)}));const E=document.createElement("br");t.appendChild(n),n.appendChild(i),n.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(E),n.appendChild(o),n.appendChild(E),n.appendChild(E),t.appendChild(I),t.appendChild(y)},A=e=>{if(l){for(let t=0;t<l.length;t++)if(e==l[t].projKeyValue&&"Incomplete"===l[t].completed){const n=document.getElementById(e),i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h2");a.setAttribute("class","tasktitle");const o=document.createElement("h4");o.setAttribute("class","taskdescription");const c=document.createElement("h5");c.setAttribute("class","taskduedate");const u=document.createElement("p");u.setAttribute("class","tasknotes");const p=document.createElement("button");p.addEventListener("click",(()=>{s(r)}));const m=document.createElement("button");m.addEventListener("click",(()=>{l[t].completed="complete",localStorage.setItem("projTaskArrayKey",JSON.stringify(l)),d(e),A(e)})),n.appendChild(i),i.appendChild(a),i.appendChild(c),i.appendChild(r),i.appendChild(p),i.appendChild(m),r.appendChild(o),r.appendChild(u),r.style.display="none",i.setAttribute("class","eachProjTask"),i.setAttribute("id",l[t].title+t),a.innerHTML=l[t].title,c.innerHTML=l[t].dueDate,o.innerHTML=l[t].description,u.innerHTML=l[t].notes,p.innerHTML="Expand/Collapse!",m.innerHTML="Completed!"}u(e)}else u(e)};e||t?(m("projectContainer"),o("taskListContainer"),a("taskListContainer"),c("projectContainer"),console.log("default on index")):(a("taskListContainer"),c("projectContainer"),console.log("First condition on index"))})();