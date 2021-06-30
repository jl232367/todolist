import * as data from "./data"

const pushData = (newTask) => {
    data.taskArray.push(newTask);
}

export {pushData}