import * as data from "./data";
import * as projgen from "./projectgenorator";

const pushData = (newTask) => {
    data.taskArray.push(newTask);
}

const pushDataProjectTasks = (newTask) => {
    data.projTaskArray.push(newTask);
}

const pushProj = (newProj) => {
    data.projArray.push(newProj);
}

export {pushData, pushProj, pushDataProjectTasks}