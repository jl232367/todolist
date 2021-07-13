
import * as taskListDOMFuncstions from "./domtasklist";
import * as projectDomFunctions from "./projectdom";

//const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")
//const secondTask = taskFactory("something secon", "A second thing to do", "now second", "very second", "some second stuff to do", "no second")
//data.taskArray.push(firstTask);
projectDomFunctions.makeProjList("projectContainer");
taskListDOMFuncstions.makeTaskList("taskListContainer");
taskListDOMFuncstions.makeAddTaskButton("taskListContainer");
projectDomFunctions.makeAddProjButton("projectContainer");
//transfer.pushData(firstTask);
//transfer.pushData(secondTask);
//taskStorage().taskArray[0].returnInput();

//console.log(data.taskArray[0]);
//console.log(data.taskArray[1]);



//console.log(firstTask);