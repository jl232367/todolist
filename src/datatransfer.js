import * as data from "./data";
import * as projgen from "./projectgenorator";

const pushData = (newTask) => {
    data.taskArray.push(newTask);
}

const pushDataProjectTasks = (newTask, arrayLoc) => {
    data.projArray[arrayLoc].push(newTask);
}

const pushProj = (newProj) => {
    data.projArray.push(newProj);
}

export {pushData, pushProj, pushDataProjectTasks}