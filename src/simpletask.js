/*
Plan to hold the object that will serve as the simple tasks on the primary todo module and the tasks under the different projects. 
*/
import * as dataTransferFuncs from "./datatransfer"
import * as data from "./data"

const taskFactory = (title, description, dueDate, priority, notes, completed) => {
    let getCompleted = completed
    const completionToggle = () => {
        completed = "complete";
    }
    const returnInput = () => {
        console.log (title, description, dueDate, priority, notes, completed);
    }
    return {title, description, dueDate, priority, notes, completed, returnInput, completionToggle};
}
// function to take in form information and push new task to the task data array

const pushTaskFormDataToTaskArray = () => {
    // get title, descript, duedate,priority, notes, completed from form
    const newTaskTitle = document.getElementById("taskTitle").value; 
    const newTaskDescription = document.getElementById("descriptoinInput").value;
    const newTaskDueDate = document.getElementById("dueDateId").value;
    const newTaskPriority = document.getElementById("priorityId").value;
    const newTaskNotes = document.getElementById("formNotesId").value;
    const defaultTaskIncomplete = "Incomplete";

    const newTaskToPush = taskFactory(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, defaultTaskIncomplete);
    dataTransferFuncs.pushData(newTaskToPush);
    //console.log(data.taskArray[0]);
    //console.log(data.taskArray[1]);
}



const testCon = (s1) => console.log(s1);
export {testCon, taskFactory, pushTaskFormDataToTaskArray}