import * as projectDOM from "./projectdom";
import * as dataTransfer from "./datatransfer";
import * as data from "./data"
import * as simpletask from "./simpletask"


const projectFactory = (title, description, dueDate, priority, notes, completed) => {
    
    const returnInput = () => {
        console.log (title, description, dueDate, priority, notes, completed);
    }
    return {title, description, dueDate, priority, notes, completed, returnInput};
}

const projectTaskFactory = (title, description, dueDate, priority, notes, completed, projKeyValue) => { 
    return {title, description, dueDate, priority, notes, completed, projKeyValue};
}
// Pushes Project form data to project array
const pushProjFormDataToTaskArray = () => {
    // get title, descript, duedate,priority, notes, completed from form
    const newTaskTitle = document.getElementById("taskTitle").value; 
    const newTaskDescription = document.getElementById("descriptoinInput").value;
    const newTaskDueDate = document.getElementById("dueDateId").value;
    const newTaskPriority = document.getElementById("priorityId").value;
    const newTaskNotes = document.getElementById("formNotesId").value;
    const defaultTaskIncomplete = "Incomplete";
    //
    const newProjToPush = projectFactory(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, defaultTaskIncomplete);
    dataTransfer.pushProj(newProjToPush);
    //console.log(data.taskArray[0]);
    //console.log(data.taskArray[1]);
}

const pushTaskFormDataToProjectTaskArray = (taskProjKeyValue) => {
    // get title, descript, duedate,priority, notes, completed from form
    const newTaskTitle = document.getElementById("taskTitle").value; 
    const newTaskDescription = document.getElementById("descriptoinInput").value;
    const newTaskDueDate = document.getElementById("dueDateId").value;
    const newTaskPriority = document.getElementById("priorityId").value;
    const newTaskNotes = document.getElementById("formNotesId").value;
    const defaultTaskIncomplete = "Incomplete";
    const projectKeyValueForTasks = taskProjKeyValue

    const newTaskToPush = projectTaskFactory(newTaskTitle, newTaskDescription, newTaskDueDate, newTaskPriority, newTaskNotes, defaultTaskIncomplete, projectKeyValueForTasks);
    dataTransfer.pushDataProjectTasks(newTaskToPush);
    //console.log(data.taskArray[0]);
    //console.log(data.taskArray[1]);
}

export{projectFactory, pushProjFormDataToTaskArray, pushTaskFormDataToProjectTaskArray, projectTaskFactory}