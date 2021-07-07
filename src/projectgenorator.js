import * as projectDOM from "./projectdom";
import * as dataTransfer from "./datatransfer";
import * as data from "./data"
import * as simpletask from "./simpletask"


const projectFactory = (title, description,tasks = [], dueDate, priority, notes, completed) => {
    
    const returnInput = () => {
        console.log (title, description, dueDate, priority, notes, completed);
    }
    return {title, description, tasks, dueDate, priority, notes, completed, returnInput};
}

const pushProjFormDataToTaskArray = () => {
    // get title, descript, duedate,priority, notes, completed from form
    const newTaskTitle = document.getElementById("taskTitle").value; 
    const newTaskDescription = document.getElementById("descriptoinInput").value;
    const newTaskDueDate = document.getElementById("dueDateId").value;
    const newTaskPriority = document.getElementById("priorityId").value;
    const newTaskNotes = document.getElementById("formNotesId").value;
    const defaultTaskIncomplete = "Incomplete";

    const newTaskToPush = projectFactory(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, defaultTaskIncomplete);
    dataTransfer.pushProj(newTaskToPush);
    //console.log(data.taskArray[0]);
    //console.log(data.taskArray[1]);
}

const pushTaskFormDataToProjectTaskArray = (projArrayLoc) => {
    // get title, descript, duedate,priority, notes, completed from form
    const newTaskTitle = document.getElementById("taskTitle").value; 
    const newTaskDescription = document.getElementById("descriptoinInput").value;
    const newTaskDueDate = document.getElementById("dueDateId").value;
    const newTaskPriority = document.getElementById("priorityId").value;
    const newTaskNotes = document.getElementById("formNotesId").value;
    const defaultTaskIncomplete = "Incomplete";

    const newTaskToPush = simpletask.taskFactory(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, defaultTaskIncomplete);
    dataTransfer.pushDataProjectTasks(newTaskToPush, projArrayLoc);
    //console.log(data.taskArray[0]);
    //console.log(data.taskArray[1]);
}

export{projectFactory, pushProjFormDataToTaskArray, pushTaskFormDataToProjectTaskArray}