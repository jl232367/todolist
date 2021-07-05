import { taskFactory, testCon } from "./simpletask"
import * as data from "./data";
import * as transfer from "./datatransfer";
import * as taskListDOMFuncstions from "./domtasklist";


//const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")
//const secondTask = taskFactory("something secon", "A second thing to do", "now second", "very second", "some second stuff to do", "no second")
//data.taskArray.push(firstTask);
taskListDOMFuncstions.makeTaskList();
taskListDOMFuncstions.makeAddTaskButton();
//transfer.pushData(firstTask);
//transfer.pushData(secondTask);
//taskStorage().taskArray[0].returnInput();

//console.log(data.taskArray[0]);
//console.log(data.taskArray[1]);



//console.log(firstTask);