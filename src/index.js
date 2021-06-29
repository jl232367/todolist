import { taskFactory, testCon } from "./simpletask";
import * as data from "./data";

const firstTask = taskFactory("Something", "A thing I need to do", "Now", "very", "some stuff I need to do for this task", "no")

data.taskArray.push(firstTask);


//taskStorage().taskArray[0].returnInput();

console.log(data.taskArray[0]);

//console.log(firstTask);