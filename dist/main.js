(()=>{"use strict";let t=[];const e=t=>{const e=document.querySelector(t);for(;e.firstChild;)e.removeChild(e.firstChild)},n=()=>{const i=document.getElementById("taskListContainer"),r=document.createElement("h3");i.appendChild(r),r.innerText="Add more tasks: =>",r.setAttribute("class","plusMoreTaskText");const u=document.createElement("button");i.appendChild(u),u.setAttribute("class","plusMoreTaskPlusButton"),u.setAttribute("id","addTaskPlusButton"),u.innerHTML="+",u.addEventListener("click",(()=>{(i=>{e(i);const r=document.querySelector(i);let u=document.createElement("form"),d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","title"),d.setAttribute("id","taskTitle"),d.setAttribute("value","Task Title");let s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","description"),s.setAttribute("id","descriptoinInput"),s.setAttribute("value","Task Description");let l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","dueDate"),l.setAttribute("id","dueDateId"),l.setAttribute("value","Task Due Date");let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","priority"),o.setAttribute("id","priorityId"),o.setAttribute("value","Priority of Task");let a=document.createElement("input");a.setAttribute("type","textarea"),a.setAttribute("name","notes"),a.setAttribute("id","formNotesId"),a.setAttribute("row","4"),a.setAttribute("cols","50"),a.setAttribute("value","Task Notes");let c=document.createElement("label");c.setAttribute("for","complete"),c.innerText="Is this Task complete yet?";let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","taskCompletionCheck"),m.setAttribute("id","incompleteInputId"),m.setAttribute("value","incomplete");let p=document.createElement("label");p.setAttribute("for","incompleInputId"),p.innerText=":Incomplete";let b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","taskCompletionCheck"),b.setAttribute("id","completedInputId"),b.setAttribute("value","completed");let A=document.createElement("label");A.setAttribute("for","completedInputId"),A.innerText=":Completed";const I=document.createElement("button");I.setAttribute("class","submitNewTaskFormButton"),I.setAttribute("id","submitNewTaskFormButtonId"),I.innerText="Add Task!",I.addEventListener("click",(()=>{(()=>{const e=document.getElementById("taskTitle").value,n=document.getElementById("descriptoinInput").value,i=document.getElementById("dueDateId").value,r=document.getElementById("priorityId").value,u=document.getElementById("formNotesId").value;var d,s,l,o,a,c;c={title:d=e,description:s=n,dueDate:l=i,priority:o=r,notes:a=u,completed:"Incomplete",returnInput:()=>{console.log(d,s,l,o,a,"Incomplete")}},t.push(c)})(),e(i),n()}));const k=document.createElement("button");k.setAttribute("class","cancelTaskFrom"),k.setAttribute("id","cancelTaskFormId"),k.innerText="Cancel",k.addEventListener("click",(()=>{e(),n()}));const E=document.createElement("br");r.appendChild(u),u.appendChild(d),u.appendChild(s),u.appendChild(l),u.appendChild(a),u.appendChild(E),u.appendChild(o),u.appendChild(E),u.appendChild(E),r.appendChild(k),r.appendChild(I)})("#taskListContainer")}))};n()})();