import * as data from "./data"

const pushData = (newTask) => {
    data.taskArray.push(newTask);
}

const pushProj = (newProj) => {
    data.projArray.push(newProj);
}

export {pushData, pushProj}