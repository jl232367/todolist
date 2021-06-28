import { taskFactory, testCon } from "./simpletask";
import { taskStorage } from "./data";

const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")

taskStorage().taskArray.push(firstTask);


//taskStorage().taskArray[0].returnInput();

//console.log(taskStorage().taskArray[0]);

console.log(firstTask);