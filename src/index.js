
import * as taskListDOMFuncstions from "./domtasklist";
import * as projectDomFunctions from "./projectdom";
import * as data from "./data";

//const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")
//const secondTask = taskFactory("something secon", "A second thing to do", "now second", "very second", "some second stuff to do", "no second")
//data.taskArray.push(firstTask);

if (!data.localStorageTaskArray && !data.localStorageProjArray) {
    taskListDOMFuncstions.makeAddTaskButton("taskListContainer");
    projectDomFunctions.makeAddProjButton("projectContainer");
    console.log("First condition on index");
} 
else {
    projectDomFunctions.makeProjList("projectContainer");
    taskListDOMFuncstions.makeTaskList("taskListContainer");
    taskListDOMFuncstions.makeAddTaskButton("taskListContainer");
    projectDomFunctions.makeAddProjButton("projectContainer");
    console.log("default on index");
}


//transfer.pushData(firstTask);
//transfer.pushData(secondTask);
//taskStorage().taskArray[0].returnInput();

//console.log(data.taskArray[0]);
//console.log(data.taskArray[1]);



//console.log(firstTask);

/*
else if (!data.localStorageTaskArray && data.localStorageProjArray) {
    projectDomFunctions.makeProjList("projectContainer");
    taskListDOMFuncstions.makeAddTaskButton("taskListContainer");
    projectDomFunctions.makeAddProjButton("projectContainer");
    console.log("Second Condition on index");
} else if (data.localStorageTaskArray && !data.localStorageProjArray) {
    taskListDOMFuncstions.makeTaskList("taskListContainer");
    taskListDOMFuncstions.makeAddTaskButton("taskListContainer");
    projectDomFunctions.makeAddProjButton("projectContainer");
    console.log("Third condistion on index");
}
*/