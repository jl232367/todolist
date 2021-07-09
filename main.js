(()=>{"use strict";let t=[],e=[],n=[];const i=t=>{const e=document.getElementById(t);for(;e.firstChild;)e.removeChild(e.firstChild)},d=e=>{const n=document.getElementById(e),r=document.createElement("h3");n.appendChild(r),r.innerText="Add more tasks: =>",r.setAttribute("class","plusMoreTaskText");const s=document.createElement("button");n.appendChild(s),s.setAttribute("class","plusMoreTaskPlusButton"),s.setAttribute("id","addTaskPlusButton"),s.innerHTML="+",s.addEventListener("click",(()=>{(e=>{i(e);const n=document.getElementById(e);let r=document.createElement("form"),s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","title"),s.setAttribute("id","taskTitle"),s.setAttribute("value","Task Title");let u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","description"),u.setAttribute("id","descriptoinInput"),u.setAttribute("value","Task Description");let o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","dueDate"),o.setAttribute("id","dueDateId"),o.setAttribute("value","Task Due Date");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","priority"),a.setAttribute("id","priorityId"),a.setAttribute("value","Priority of Task");let c=document.createElement("input");c.setAttribute("type","textarea"),c.setAttribute("name","notes"),c.setAttribute("id","formNotesId"),c.setAttribute("row","4"),c.setAttribute("cols","50"),c.setAttribute("value","Task Notes");let m=document.createElement("label");m.setAttribute("for","complete"),m.innerText="Is this Task complete yet?";let p=document.createElement("input");p.setAttribute("type","radio"),p.setAttribute("name","taskCompletionCheck"),p.setAttribute("id","incompleteInputId"),p.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let E=document.createElement("label");E.setAttribute("for","completedInputId"),E.innerText=":Completed";const h=document.createElement("button");h.setAttribute("class","submitNewTaskFormButton"),h.setAttribute("id","submitNewTaskFormButtonId"),h.innerText="Add Task!",h.addEventListener("click",(()=>{(()=>{const e=document.getElementById("taskTitle").value,n=document.getElementById("descriptoinInput").value,i=document.getElementById("dueDateId").value,d=document.getElementById("priorityId").value,l=document.getElementById("formNotesId").value;var r,s,u,o,a,c,m;m={title:r=e,description:s=n,dueDate:u=i,priority:o=d,notes:a=l,completed:c="Incomplete",returnInput:()=>{console.log(r,s,u,o,a,c)},completionToggle:()=>{c="complete"}},t.push(m)})(),i(e),l(e),d(e)}));const I=document.createElement("button");I.setAttribute("class","cancelTaskFrom"),I.setAttribute("id","cancelTaskFormId"),I.innerText="Cancel",I.addEventListener("click",(()=>{i(),d()}));const C=document.createElement("br");n.appendChild(r),r.appendChild(s),r.appendChild(u),r.appendChild(o),r.appendChild(c),r.appendChild(C),r.appendChild(a),r.appendChild(C),r.appendChild(C),n.appendChild(I),n.appendChild(h)})(e)}))},l=e=>{for(let n=0;n<t.length;n++)if("Incomplete"===t[n].completed){const s=document.getElementById(e),u=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h2");a.setAttribute("class","tasktitle");const c=document.createElement("h4");c.setAttribute("class","taskdescription");const m=document.createElement("h5");m.setAttribute("class","taskduedate");const p=document.createElement("p");p.setAttribute("class","tasknotes");const b=document.createElement("button");b.addEventListener("click",(()=>{r(o)}));const A=document.createElement("button");A.dataset.cIndex=n,A.addEventListener("click",(()=>{t[n].completed="complete",i(e),l(e),d(e)})),s.appendChild(u),u.appendChild(a),u.appendChild(m),u.appendChild(o),u.appendChild(b),u.appendChild(A),o.appendChild(c),o.appendChild(p),o.style.display="none",u.setAttribute("class","eachTask"),u.setAttribute("id",t[n].title+n),a.innerHTML=t[n].title,m.innerHTML=t[n].dueDate,c.innerHTML=t[n].description,p.innerHTML=t[n].notes,b.innerHTML="Expand/Collapse!",A.innerHTML="Completed!"}},r=t=>{"none"===t.style.display?t.style.display="block":t.style.display="none"},s=t=>{const e=document.getElementById(t),n=document.createElement("h3");e.appendChild(n),n.innerText="Add more Project: =>",n.setAttribute("class","plusMoreTaskText");const i=document.createElement("button");e.appendChild(i),i.setAttribute("class","plusMoreTaskPlusButton"),i.setAttribute("id","addTaskPlusButton"),i.innerHTML="+",i.addEventListener("click",(()=>{u(t)}))},u=t=>{i(t);const n=document.getElementById(t);let d=document.createElement("form"),l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","title"),l.setAttribute("id","taskTitle"),l.setAttribute("value","Project Title");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("id","descriptoinInput"),r.setAttribute("value","Project Description");let u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("name","dueDate"),u.setAttribute("id","dueDateId"),u.setAttribute("value","Project Due Date");let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","priority"),a.setAttribute("id","priorityId"),a.setAttribute("value","Priority of Project");let c=document.createElement("input");c.setAttribute("type","textarea"),c.setAttribute("name","notes"),c.setAttribute("id","formNotesId"),c.setAttribute("row","4"),c.setAttribute("cols","50"),c.setAttribute("value","Project Notes");let m=document.createElement("label");m.setAttribute("for","complete"),m.innerText="Is this Task complete yet?";let p=document.createElement("input");p.setAttribute("type","radio"),p.setAttribute("name","taskCompletionCheck"),p.setAttribute("id","incompleteInputId"),p.setAttribute("value","incomplete");let b=document.createElement("label");b.setAttribute("for","incompleInputId"),b.innerText=":Incomplete";let A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","taskCompletionCheck"),A.setAttribute("id","completedInputId"),A.setAttribute("value","completed");let E=document.createElement("label");E.setAttribute("for","completedInputId"),E.innerText=":Completed";const h=document.createElement("button");h.setAttribute("class","submitNewTaskFormButton"),h.setAttribute("id","submitNewTaskFormButtonId"),h.innerText="Add Project!",h.addEventListener("click",(()=>{var n;n={title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",completionToggle:()=>{}},e.push(n),i(t),o(t),s("projectContainer")}));const I=document.createElement("button");I.setAttribute("class","cancelTaskFrom"),I.setAttribute("id","cancelTaskFormId"),I.innerText="Cancel",I.addEventListener("click",(()=>{i(t),s("projectContainer")}));const C=document.createElement("br");n.appendChild(d),d.appendChild(l),d.appendChild(r),d.appendChild(u),d.appendChild(c),d.appendChild(C),d.appendChild(a),d.appendChild(C),d.appendChild(C),n.appendChild(I),n.appendChild(h)},o=t=>{for(let n=0;n<e.length;n++)if("Incomplete"===e[n].completed){const d=document.getElementById(t),l=document.createElement("div");l.setAttribute("class","eachProj"),l.setAttribute("id",e[n].title+n);const r=document.createElement("h3"),u=document.createElement("h6"),a=document.createElement("h1"),m=document.createElement("p"),p=document.createElement("div");p.setAttribute("class","projectlistcontainer"),p.setAttribute("id",e[n].title+n+"tasks"),p.dataset.projIndex=n;const b=document.createElement("button");b.addEventListener("click",(()=>{e[n].completed="complete",i(t),o(t),s(t)})),l.appendChild(r),l.appendChild(u),l.appendChild(a),l.appendChild(m),l.appendChild(p),l.appendChild(b),d.appendChild(l),r.innerHTML=e[n].title,u.innerHTML=e[n].completed,b.innerHTML="Completed!",c(p.id)}},a=t=>{const e=document.getElementById(t),d=document.createElement("h3");e.appendChild(d),d.innerText="Add more tasks: =>",d.setAttribute("class","plusMoreTaskText");const l=document.createElement("button");e.appendChild(l),l.setAttribute("class","plusMoreTaskPlusButton"),l.setAttribute("id","addProjTaskPlusButton"),l.innerHTML="+",l.addEventListener("click",(()=>{(t=>{i(t);const e=document.getElementById(t);let d=document.createElement("form"),l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("name","title"),l.setAttribute("id","taskTitle"),l.setAttribute("value","Task Title");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("id","descriptoinInput"),r.setAttribute("value","Task Description");let s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("name","dueDate"),s.setAttribute("id","dueDateId"),s.setAttribute("value","Task Due Date");let u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","priority"),u.setAttribute("id","priorityId"),u.setAttribute("value","Priority of Task");let o=document.createElement("input");o.setAttribute("type","textarea"),o.setAttribute("name","notes"),o.setAttribute("id","formNotesId"),o.setAttribute("row","4"),o.setAttribute("cols","50"),o.setAttribute("value","Task Notes");let a=document.createElement("label");a.setAttribute("for","complete"),a.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let p=document.createElement("label");p.setAttribute("for","incompleInputId"),p.innerText="Incomplete";let b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","taskCompletionCheck"),b.setAttribute("id","completedInputId"),b.setAttribute("value","completed");let A=document.createElement("label");A.setAttribute("for","completedInputId"),A.innerText=":Completed";const E=document.createElement("button");E.setAttribute("class","submitNewTaskFormButton"),E.setAttribute("id","submitNewTaskFormButtonId"),E.innerText="Add Task!",E.addEventListener("click",(()=>{var e,d;e=t,d={title:document.getElementById("taskTitle").value,description:document.getElementById("descriptoinInput").value,dueDate:document.getElementById("dueDateId").value,priority:document.getElementById("priorityId").value,notes:document.getElementById("formNotesId").value,completed:"Incomplete",projKeyValue:e,completionToggle:()=>{}},n.push(d),i(t),c(t)}));const h=document.createElement("button");h.setAttribute("class","cancelTaskFrom"),h.setAttribute("id","cancelTaskFormId"),h.innerText="Cancel",h.addEventListener("click",(()=>{clearList(),makeAddTaskButton()}));const I=document.createElement("br");e.appendChild(d),d.appendChild(l),d.appendChild(r),d.appendChild(s),d.appendChild(o),d.appendChild(I),d.appendChild(u),d.appendChild(I),d.appendChild(I),e.appendChild(h),e.appendChild(E)})(t)}))},c=t=>{for(let e=0;e<n.length;e++)if(t==n[e].projKeyValue&&"Incomplete"===n[e].completed){const d=document.getElementById(t),l=document.createElement("div"),s=document.createElement("div"),u=document.createElement("h2");u.setAttribute("class","tasktitle");const o=document.createElement("h4");o.setAttribute("class","taskdescription");const a=document.createElement("h5");a.setAttribute("class","taskduedate");const m=document.createElement("p");m.setAttribute("class","tasknotes");const p=document.createElement("button");p.addEventListener("click",(()=>{r(s)}));const b=document.createElement("button");b.addEventListener("click",(()=>{n[e].completed="complete",i(t),c(t)})),d.appendChild(l),l.appendChild(u),l.appendChild(a),l.appendChild(s),l.appendChild(p),l.appendChild(b),s.appendChild(o),s.appendChild(m),s.style.display="none",l.setAttribute("class","eachTask"),l.setAttribute("id",n[e].title+e),u.innerHTML=n[e].title,a.innerHTML=n[e].dueDate,o.innerHTML=n[e].description,m.innerHTML=n[e].notes,p.innerHTML="Expand/Collapse!",b.innerHTML="Completed!"}a(t)};l("taskListContainer"),d("taskListContainer"),s("projectContainer")})();