(()=>{"use strict";localStorage.setItem("taskArrayKey",JSON.stringify([])),localStorage.setItem("projArrayKey",JSON.stringify([])),localStorage.setItem("projTaskArrayKey",JSON.stringify([]));let t=localStorage.getItem("taskArrayKey"),e=localStorage.getItem("projArrayKey"),n=localStorage.getItem("projTaskArrayKey"),i=JSON.parse(t),d=JSON.parse(e),l=JSON.parse(n);const r=t=>{const e=document.getElementById(t);for(;e.firstChild;)e.removeChild(e.firstChild)},a=t=>{const e=document.getElementById(t),n=document.createElement("h3");e.appendChild(n);const d=document.createElement("button");e.appendChild(d),d.setAttribute("class","plusMoreTaskPlusButton"),d.setAttribute("id","addTaskPlusButton"),d.innerHTML="Add Task: +",d.addEventListener("click",(()=>{(t=>{r(t);const e=document.getElementById(t);let n=document.createElement("form"),d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","title"),d.setAttribute("id","taskTitle"),d.setAttribute("value","Task Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Task Description");let s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("name","dueDate"),s.setAttribute("id","dueDateId"),s.setAttribute("value","Task Due Date");let u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","priority"),u.setAttribute("id","priorityId"),u.setAttribute("value","Priority of Task");let c=document.createElement("input");c.setAttribute("type","textarea"),c.setAttribute("name","notes"),c.setAttribute("id","formNotesId"),c.setAttribute("row","4"),c.setAttribute("cols","50"),c.setAttribute("value","Task Notes");let p=document.createElement("label");p.setAttribute("for","complete"),p.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let E=document.createElement("label");E.setAttribute("for","completedInputId"),E.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Task!",I.addEventListener("click",(()=>{(()=>{const t=document.getElementById("taskTitle").value,e=document.getElementById("descriptoinInput").value,n=document.getElementById("dueDateId").value,d=document.getElementById("priorityId").value,l=document.getElementById("formNotesId").value;var r,a,o,s,u,c,p;p={title:r=t,description:a=e,dueDate:o=n,priority:s=d,notes:u=l,completed:c="Incomplete",returnInput:()=>{console.log(r,a,o,s,u,c)},completionToggle:()=>{c="complete"}},i.push(p),localStorage.setItem("taskArrayKey",JSON.stringify(i))})(),r(t),o(t),a(t)}));const y=document.createElement("button");y.setAttribute("class","cancelTaskFrom"),y.setAttribute("id","cancelTaskFormId"),y.innerText="Cancel",y.addEventListener("click",(()=>{r(),a()}));const C=document.createElement("br");e.appendChild(n),n.appendChild(d),n.appendChild(l),n.appendChild(s),n.appendChild(c),n.appendChild(C),n.appendChild(u),n.appendChild(C),n.appendChild(C),e.appendChild(y),e.appendChild(I)})(t)}))},o=t=>{for(let e=0;e<i.length;e++)if("Incomplete"===i[e].completed){const n=document.getElementById(t),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("h2");u.setAttribute("class","tasktitle");const c=document.createElement("h4");c.setAttribute("class","taskdescription");const p=document.createElement("h5");p.setAttribute("class","taskduedate");const m=document.createElement("p");m.setAttribute("class","tasknotes");const b=document.createElement("button");b.addEventListener("click",(()=>{s(l)}));const A=document.createElement("button");A.dataset.cIndex=e,A.addEventListener("click",(()=>{i[e].completed="complete",r(t),o(t),a(t)})),n.appendChild(d),d.appendChild(u),d.appendChild(p),d.appendChild(l),d.appendChild(b),d.appendChild(A),l.appendChild(c),l.appendChild(m),l.style.display="none",d.setAttribute("class","eachTask"),d.setAttribute("id",i[e].title+e),u.innerHTML=i[e].title,p.innerHTML=i[e].dueDate,c.innerHTML=i[e].description,m.innerHTML=i[e].notes,b.innerHTML="Expand/Collapse!",A.innerHTML="Completed!"}},s=t=>{"none"===t.style.display?t.style.display="block":t.style.display="none"},u=t=>{const e=document.getElementById(t),n=document.createElement("button");e.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addTaskPlusButton"),n.innerHTML="Add Project: +",n.addEventListener("click",(()=>{c(t)}))},c=t=>{r(t);const e=document.getElementById(t);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Project Title");let l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","description"),l.setAttribute("id","descriptoinInput"),l.setAttribute("value","Project Description");let a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("name","dueDate"),a.setAttribute("id","dueDateId"),a.setAttribute("value","Project Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Project");let s=document.createElement("input");s.setAttribute("type","textarea"),s.setAttribute("name","notes"),s.setAttribute("id","formNotesId"),s.setAttribute("row","4"),s.setAttribute("cols","50"),s.setAttribute("value","Project Notes");let c=document.createElement("label");c.setAttribute("for","complete"),c.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let E=document.createElement("label");E.setAttribute("for","completedInputId"),E.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Project!",I.addEventListener("click",(()=>{var e;e={title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",completionToggle:()=>{}},d.push(e),localStorage.setItem("projArrayKey",JSON.stringify(d)),r(t),p(t),u("projectContainer")}));const y=document.createElement("button");y.setAttribute("class","cancelTaskFrom"),y.setAttribute("id","cancelTaskFormId"),y.innerText="Cancel",y.addEventListener("click",(()=>{r(t),u("projectContainer")}));const C=document.createElement("br");e.appendChild(n),n.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(s),n.appendChild(C),n.appendChild(o),n.appendChild(C),n.appendChild(C),e.appendChild(y),e.appendChild(I)},p=t=>{for(let e=0;e<d.length;e++)if("Incomplete"===d[e].completed){const n=document.getElementById(t),i=document.createElement("div");i.setAttribute("class","eachProj"),i.setAttribute("id",d[e].title+e);const l=document.createElement("h3"),a=document.createElement("h6"),o=document.createElement("h1"),s=document.createElement("p"),c=document.createElement("div");c.setAttribute("class","projectlistcontainer"),c.setAttribute("id",d[e].title+e+"tasks"),c.dataset.projIndex=e;const m=document.createElement("button");m.addEventListener("click",(()=>{d[e].completed="complete",r(t),p(t),u(t)})),i.appendChild(l),i.appendChild(a),i.appendChild(o),i.appendChild(s),i.appendChild(c),i.appendChild(m),n.appendChild(i),l.innerHTML=d[e].title,o.innerHTML=d[e].dueDate,m.innerHTML="Completed!",b(c.id)}},m=t=>{const e=document.getElementById(t),n=document.createElement("button");e.appendChild(n),n.setAttribute("class","plusMoreTaskPlusButton"),n.setAttribute("id","addProjTaskPlusButton"),n.innerHTML="Add Task:+",n.addEventListener("click",(()=>{(t=>{r(t);const e=document.getElementById(t);let n=document.createElement("form"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","title"),i.setAttribute("id","taskTitle"),i.setAttribute("value","Task Title");let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","description"),d.setAttribute("id","descriptoinInput"),d.setAttribute("value","Task Description");let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","dueDate"),o.setAttribute("id","dueDateId"),o.setAttribute("value","Task Due Date");let s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","priority"),s.setAttribute("id","priorityId"),s.setAttribute("value","Priority of Task");let u=document.createElement("input");u.setAttribute("type","textarea"),u.setAttribute("name","notes"),u.setAttribute("id","formNotesId"),u.setAttribute("row","4"),u.setAttribute("cols","50"),u.setAttribute("value","Task Notes");let c=document.createElement("label");c.setAttribute("for","complete"),c.innerText="Is this Task complete yet?";let p=document.createElement("input");p.setAttribute("type","radio"),p.setAttribute("name","taskCompletionCheck"),p.setAttribute("id","incompleteInputId"),p.setAttribute("value","incomplete");let m=document.createElement("label");m.setAttribute("for","incompleInputId"),m.innerText="Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let E=document.createElement("label");E.setAttribute("for","completedInputId"),E.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Task!",I.addEventListener("click",(()=>{var e,n;e=t,n={title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",projKeyValue:e,completionToggle:()=>{}},l.push(n),localStorage.setItem("projTaskArrayKey",JSON.stringify(l)),r(t),b(t)}));const y=document.createElement("button");y.setAttribute("class","cancelTaskFrom"),y.setAttribute("id","cancelTaskFormId"),y.innerText="Cancel",y.addEventListener("click",(()=>{r(),a()}));const C=document.createElement("br");e.appendChild(n),n.appendChild(i),n.appendChild(d),n.appendChild(o),n.appendChild(u),n.appendChild(C),n.appendChild(s),n.appendChild(C),n.appendChild(C),e.appendChild(y),e.appendChild(I)})(t)}))},b=t=>{for(let e=0;e<l.length;e++)if(t==l[e].projKeyValue&&"Incomplete"===l[e].completed){const n=document.getElementById(t),i=document.createElement("div"),d=document.createElement("div"),a=document.createElement("h2");a.setAttribute("class","tasktitle");const o=document.createElement("h4");o.setAttribute("class","taskdescription");const u=document.createElement("h5");u.setAttribute("class","taskduedate");const c=document.createElement("p");c.setAttribute("class","tasknotes");const p=document.createElement("button");p.addEventListener("click",(()=>{s(d)}));const m=document.createElement("button");m.addEventListener("click",(()=>{l[e].completed="complete",r(t),b(t)})),n.appendChild(i),i.appendChild(a),i.appendChild(u),i.appendChild(d),i.appendChild(p),i.appendChild(m),d.appendChild(o),d.appendChild(c),d.style.display="none",i.setAttribute("class","eachTask"),i.setAttribute("id",l[e].title+e),a.innerHTML=l[e].title,u.innerHTML=l[e].dueDate,o.innerHTML=l[e].description,c.innerHTML=l[e].notes,p.innerHTML="Expand/Collapse!",m.innerHTML="Completed!"}m(t)};i||d?(p("projectContainer"),o("taskListContainer"),a("taskListContainer"),u("projectContainer")):(a("taskListContainer"),u("projectContainer"))})();