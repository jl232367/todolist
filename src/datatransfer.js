import * as data from "./data";
import * as projgen from "./projectgenorator";

const pushData = (newTask) => {
    data.taskArray.push(newTask);
    localStorage.setItem("taskArrayKey", JSON.stringify(data.taskArray));
    let localStorageTaskArray = localStorage.getItem("taskArrayKey");
    data.taskArray = JSON.parse(localStorageTaskArray); 
}

const pushDataProjectTasks = (newTask) => {
    data.projTaskArray.push(newTask);
    localStorage.setItem("projTaskArrayKey", JSON.stringify(data.projTaskArray));
    let localStorageProjTaskArray = localStorage.getItem("projTaskArrayKey");
    data.projTaskArray = JSON.parse(localStorageProjTaskArray);
}

const pushProj = (newProj) => {
    data.projArray.push(newProj);
    localStorage.setItem("projArrayKey", JSON.stringify(data.projArray));
    let localStorageProjArray = localStorage.getItem("projArrayKey");
    data.projArray = JSON.parse(localStorageProjArray);
}

export {pushData, pushProj, pushDataProjectTasks}