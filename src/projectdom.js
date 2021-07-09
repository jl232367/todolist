import * as taskDOM from "./domtasklist";
import * as dataTransfer from "./datatransfer";
import * as projectFormFuncs from "./projectgenorator";
import * as data from "./data"
import * as generalDOM from "./domtasklist"
import * as simpleTask from "./simpletask"

const generateProjectContainer = () => {
    const getProjectsContainer = document.getElementById("projectContainer");
    const individualProjectContainer = document.createElement("div");
}

const makeAddProjButton = (taskButtonContainingElement) => {
    const taskListCardContainer = document.getElementById(taskButtonContainingElement);
    const plusMoreTaskText = document.createElement("h3");
    taskListCardContainer.appendChild(plusMoreTaskText);
    plusMoreTaskText.innerText = "Add more Project: =>";
    plusMoreTaskText.setAttribute("class", "plusMoreTaskText");
    const plusMoreTaskPlusButton = document.createElement("button");
    taskListCardContainer.appendChild(plusMoreTaskPlusButton);
    plusMoreTaskPlusButton.setAttribute("class", "plusMoreTaskPlusButton");
    plusMoreTaskPlusButton.setAttribute("id", "addTaskPlusButton");
    plusMoreTaskPlusButton.innerHTML = "+";
    plusMoreTaskPlusButton.addEventListener('click', () => {newProjForm(taskButtonContainingElement)});
          //
}

const newProjForm = (projFormContainingElement) => {
    // Need to generate a form when "+" is hit.  Need to capture: title, description, dueDate, priority, notes, completed
    generalDOM.clearList(projFormContainingElement) //clear contents of task list to make space for form
    const taskFormContainer = document.getElementById(projFormContainingElement)
    let simpletaskform = document.createElement("form");
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "taskTitle");
    title.setAttribute("value", "Project Title");

    let descriptionInputFeild = document.createElement("input");
    descriptionInputFeild.setAttribute("type", "text");
    descriptionInputFeild.setAttribute("name", "description");
    descriptionInputFeild.setAttribute("id", "descriptoinInput");
    descriptionInputFeild.setAttribute("value", "Project Description");
    //let dueDateInputFeild = formInput("date", "dueDate", "Task Due Date", "dueDate");
    let dueDateInputFeild = document.createElement("input");
    dueDateInputFeild.setAttribute("type", "date");
    dueDateInputFeild.setAttribute("name", "dueDate");
    dueDateInputFeild.setAttribute("id", "dueDateId");
    dueDateInputFeild.setAttribute("value", "Project Due Date");
    //let priorityInputField = formInput("text", "priority", "Priority of Task?", "priority");
    let priorityInputField = document.createElement("input");
    priorityInputField.setAttribute("type", "text")
    priorityInputField.setAttribute("name", "priority");
    priorityInputField.setAttribute("id", "priorityId");
    priorityInputField.setAttribute("value", "Priority of Project");
    let notes = document.createElement("input");
    notes.setAttribute("type", "textarea");
    notes.setAttribute("name", "notes");
    notes.setAttribute("id", "formNotesId");
    notes.setAttribute("row", "4");
    notes.setAttribute("cols", "50");
    notes.setAttribute("value", "Project Notes");
    let completedFormLabel = document.createElement("label");
    completedFormLabel.setAttribute("for", "complete");
    completedFormLabel.innerText = "Is this Task complete yet?";
    //let incompleteInputField = formInput("radio", "complete", "Incomplete", "Incomplete");
    let incompleteInputField = document.createElement("input");
    incompleteInputField.setAttribute("type", "radio");
    incompleteInputField.setAttribute("name", "taskCompletionCheck");
    incompleteInputField.setAttribute("id", "incompleteInputId");
    incompleteInputField.setAttribute("value", "incomplete");
    let incompleteInputFieldLabel = document.createElement("label");
    incompleteInputFieldLabel.setAttribute("for", "incompleInputId");
    incompleteInputFieldLabel.innerText = ":Incomplete";


    //let completedInputField = formInput("radio", "complete", "completed", "Completed");
    let completedInputField = document.createElement("input");
    completedInputField.setAttribute("type", "radio");
    completedInputField.setAttribute("name", "taskCompletionCheck");
    completedInputField.setAttribute("id", "completedInputId");
    completedInputField.setAttribute("value", "completed");
    let completedInputFieldLabel = document.createElement("label");
    completedInputFieldLabel.setAttribute("for", "completedInputId");
    completedInputFieldLabel.innerText = ":Completed";
    // adding cancel and submit buttons.  cancel will clear the form.  submit will pass data to function to append new task to array
    const submitTaskButton = document.createElement("button");
    submitTaskButton.setAttribute("class", "submitNewTaskFormButton");
    submitTaskButton.setAttribute("id", "submitNewTaskFormButtonId");
    submitTaskButton.innerText = "Add Project!";
    submitTaskButton.addEventListener("click", () => {
        
        projectFormFuncs.pushProjFormDataToTaskArray();
        //pushDataFuncs.pushTaskFormDataToTaskArray();
        generalDOM.clearList(projFormContainingElement);
        makeProjList(projFormContainingElement);
        //makeTaskList(taskFormContainingElement);
        makeAddProjButton("projectContainer");
    });
    const cancelTaskFormButton = document.createElement("button");
    cancelTaskFormButton.setAttribute("class", "cancelTaskFrom");
    cancelTaskFormButton.setAttribute("id", "cancelTaskFormId");
    cancelTaskFormButton.innerText = "Cancel";
    cancelTaskFormButton.addEventListener("click", () => {
            generalDOM.clearList(projFormContainingElement); makeAddProjButton("projectContainer");
        });
    const lineBreak = document.createElement("br");

    taskFormContainer.appendChild(simpletaskform);
    simpletaskform.appendChild(title);
    simpletaskform.appendChild(descriptionInputFeild);
    simpletaskform.appendChild(dueDateInputFeild);
    simpletaskform.appendChild(notes);
    simpletaskform.appendChild(lineBreak);
    simpletaskform.appendChild(priorityInputField);
    simpletaskform.appendChild(lineBreak);
    
    //simpletaskform.appendChild(completedFormLabel);
    //simpletaskform.appendChild(incompleteInputField);
    //simpletaskform.appendChild(incompleteInputFieldLabel);
    //simpletaskform.appendChild(completedInputField);
    //simpletaskform.appendChild(completedInputFieldLabel);
    simpletaskform.appendChild(lineBreak);
    taskFormContainer.appendChild(cancelTaskFormButton);
    taskFormContainer.appendChild(submitTaskButton);

}

const makeProjList = (containingProjElement) => {
    for (let i = 0; i < data.projArray.length; i++) {
        if (data.projArray[i].completed === "Incomplete") {
            const projectsContainerHolder = document.getElementById(containingProjElement);
    const eachProj = document.createElement("div");
    eachProj.setAttribute("class", "eachProj");
    eachProj.setAttribute("id", data.projArray[i].title + i);
    const eachProjTitle = document.createElement("h3");
    const eachProjDescription = document.createElement("h6");
    const eachProjDueDate = document.createElement("h1");
    //const eachTaskPriority = document.createElement("p")
    const eachProjNotes = document.createElement("p");
    const projTaskListContainer = document.createElement("div")
    projTaskListContainer.setAttribute("class", "projectlistcontainer");
    projTaskListContainer.setAttribute("id", data.projArray[i].title + i + "tasks");
    makeProjectTaskList
    projTaskListContainer.dataset.projIndex = i;
    const completedButoon = document.createElement("button");
            completedButoon.addEventListener("click", () => {
                let numberForArrayPosition = i;
                    data.projArray[numberForArrayPosition].completed = "complete"
                    generalDOM.clearList(containingProjElement);
                    makeProjList(containingProjElement);
                    makeAddProjButton(containingProjElement);
                    //makeAddTaskButton(containingListElement);
            });
    eachProj.appendChild(eachProjTitle);
    eachProj.appendChild(eachProjDescription);
    eachProj.appendChild(eachProjDueDate);
    eachProj.appendChild(eachProjNotes);
    eachProj.appendChild(projTaskListContainer);
    eachProj.appendChild(completedButoon)
    
    projectsContainerHolder.appendChild(eachProj);
        
        
    

    
    eachProjTitle.innerHTML = data.projArray[i].title; 
    eachProjDueDate.innerHTML = data.projArray[i].dueDate;
    completedButoon.innerHTML = "Completed!"
    makeProjectTaskList(projTaskListContainer.id);
    //makeAddProjectTaskButton(projTaskListContainer.id);
        }
    }
}

const newProjTaskForm = (taskFormContainingElement) => {
    // Need to generate a form when "+" is hit.  Need to capture: title, description, dueDate, priority, notes, completed
    generalDOM.clearList(taskFormContainingElement) //clear contents of task list to make space for form
    const taskFormContainer = document.getElementById(taskFormContainingElement)
    let simpletaskform = document.createElement("form");
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("id", "taskTitle");
    title.setAttribute("value", "Task Title");

    let descriptionInputFeild = document.createElement("input");
    descriptionInputFeild.setAttribute("type", "text");
    descriptionInputFeild.setAttribute("name", "description");
    descriptionInputFeild.setAttribute("id", "descriptoinInput");
    descriptionInputFeild.setAttribute("value", "Task Description");
    //let dueDateInputFeild = formInput("date", "dueDate", "Task Due Date", "dueDate");
    let dueDateInputFeild = document.createElement("input");
    dueDateInputFeild.setAttribute("type", "date");
    dueDateInputFeild.setAttribute("name", "dueDate");
    dueDateInputFeild.setAttribute("id", "dueDateId");
    dueDateInputFeild.setAttribute("value", "Task Due Date");
    //let priorityInputField = formInput("text", "priority", "Priority of Task?", "priority");
    let priorityInputField = document.createElement("input");
    priorityInputField.setAttribute("type", "text")
    priorityInputField.setAttribute("name", "priority");
    priorityInputField.setAttribute("id", "priorityId");
    priorityInputField.setAttribute("value", "Priority of Task");
    let notes = document.createElement("input");
    notes.setAttribute("type", "textarea");
    notes.setAttribute("name", "notes");
    notes.setAttribute("id", "formNotesId");
    notes.setAttribute("row", "4");
    notes.setAttribute("cols", "50");
    notes.setAttribute("value", "Task Notes");
    let completedFormLabel = document.createElement("label");
    completedFormLabel.setAttribute("for", "complete");
    completedFormLabel.innerText = "Is this Task complete yet?";
    //let incompleteInputField = formInput("radio", "complete", "Incomplete", "Incomplete");
    let incompleteInputField = document.createElement("input");
    incompleteInputField.setAttribute("type", "radio");
    incompleteInputField.setAttribute("name", "taskCompletionCheck");
    incompleteInputField.setAttribute("id", "incompleteInputId");
    incompleteInputField.setAttribute("value", "incomplete");
    let incompleteInputFieldLabel = document.createElement("label");
    incompleteInputFieldLabel.setAttribute("for", "incompleInputId");
    incompleteInputFieldLabel.innerText = "Incomplete";


    //let completedInputField = formInput("radio", "complete", "completed", "Completed");
    let completedInputField = document.createElement("input");
    completedInputField.setAttribute("type", "radio");
    completedInputField.setAttribute("name", "taskCompletionCheck");
    completedInputField.setAttribute("id", "completedInputId");
    completedInputField.setAttribute("value", "completed");
    let completedInputFieldLabel = document.createElement("label");
    completedInputFieldLabel.setAttribute("for", "completedInputId");
    completedInputFieldLabel.innerText = ":Completed";
    // adding cancel and submit buttons.  cancel will clear the form.  submit will pass data to function to append new task to array
    const submitTaskButton = document.createElement("button");
    submitTaskButton.setAttribute("class", "submitNewTaskFormButton");
    submitTaskButton.setAttribute("id", "submitNewTaskFormButtonId");
    submitTaskButton.innerText = "Add Task!";
    submitTaskButton.addEventListener("click", () => {
        
        projectFormFuncs.pushTaskFormDataToProjectTaskArray(taskFormContainingElement);
        generalDOM.clearList(taskFormContainingElement);
        makeProjectTaskList(taskFormContainingElement);
        //makeProjList("projectContainer");
        //clearList(taskFormContainingElement);
        //generalDOM.makeTaskList(taskFormContainingElement)
        //makeTaskList(taskFormContainer);
        //makeAddProjectTaskButton(taskFormContainingElement);
        //makeAddTaskButton(taskFormContainer);
    });
    const cancelTaskFormButton = document.createElement("button");
    cancelTaskFormButton.setAttribute("class", "cancelTaskFrom");
    cancelTaskFormButton.setAttribute("id", "cancelTaskFormId");
    cancelTaskFormButton.innerText = "Cancel";
    cancelTaskFormButton.addEventListener("click", () => {clearList(); makeAddTaskButton();});
    const lineBreak = document.createElement("br");

    taskFormContainer.appendChild(simpletaskform);
    simpletaskform.appendChild(title);
    simpletaskform.appendChild(descriptionInputFeild);
    simpletaskform.appendChild(dueDateInputFeild);
    simpletaskform.appendChild(notes);
    simpletaskform.appendChild(lineBreak);
    simpletaskform.appendChild(priorityInputField);
    simpletaskform.appendChild(lineBreak);
    
    //simpletaskform.appendChild(completedFormLabel);
    //simpletaskform.appendChild(incompleteInputField);
    //simpletaskform.appendChild(incompleteInputFieldLabel);
    //simpletaskform.appendChild(completedInputField);
    //simpletaskform.appendChild(completedInputFieldLabel);
    simpletaskform.appendChild(lineBreak);
    taskFormContainer.appendChild(cancelTaskFormButton);
    taskFormContainer.appendChild(submitTaskButton);


    const formInput = (type, n, placeholder, id) => { // small function to shorten basic form input
        let inputField = document.createElement("input");
        inputField.setAttribute("type", type);
        inputField.setAttribute("id", id);
        inputField.setAttribute("name", n);
        inputField.setAttribute("value", placeholder);
        return inputField; 
    }
}

const makeAddProjectTaskButton = (taskButtonContainingElement) => {
    const taskListCardContainer = document.getElementById(taskButtonContainingElement);
    const plusMoreTaskText = document.createElement("h3");
    taskListCardContainer.appendChild(plusMoreTaskText);
    plusMoreTaskText.innerText = "Add more tasks: =>";
    plusMoreTaskText.setAttribute("class", "plusMoreTaskText");
    const plusMoreTaskPlusButton = document.createElement("button");
    taskListCardContainer.appendChild(plusMoreTaskPlusButton);
    plusMoreTaskPlusButton.setAttribute("class", "plusMoreTaskPlusButton");
    plusMoreTaskPlusButton.setAttribute("id", "addProjTaskPlusButton");
    plusMoreTaskPlusButton.innerHTML = "+";
    plusMoreTaskPlusButton.addEventListener('click', () => {newProjTaskForm(taskButtonContainingElement)});  //
}

const makeProjectTaskList = (projectIdKey) => {
    for (let j = 0; j <data.projTaskArray.length; j++) {
        if (projectIdKey == data.projTaskArray[j].projKeyValue && data.projTaskArray[j].completed === "Incomplete") {
            //projTaskListContainer.appendChild()
            const projTaskListContainer = document.getElementById(projectIdKey);
            const eachTask = document.createElement("div");
            const expandedTaskInfo = document.createElement("div");
            const eachTaskTitle = document.createElement("h2");
            eachTaskTitle.setAttribute("class", "tasktitle");
            const eachTaskDescription = document.createElement("h4");
            eachTaskDescription.setAttribute("class", "taskdescription");
            const eachTaskDueDate = document.createElement("h5");
            eachTaskDueDate.setAttribute("class", "taskduedate");
            //const eachTaskPriority = document.createElement("p")
            const eachTaskNotes = document.createElement("p");
            eachTaskNotes.setAttribute("class", "tasknotes");
            const expandCollapseButton = document.createElement("button");
            //let taskIncomplete = data.projArray[j].completed;
            expandCollapseButton.addEventListener("click", () => {
                generalDOM.expandCollapseTask(expandedTaskInfo)
            });
            const completedButoon = document.createElement("button");
            completedButoon.addEventListener("click", () => {
                let numberForArrayPosition = j;
                    data.projTaskArray[numberForArrayPosition].completed = "complete"
                    generalDOM.clearList(projectIdKey);
                    makeProjectTaskList(projectIdKey);
                    //makeAddTaskButton(containingListElement);
            });

            projTaskListContainer.appendChild(eachTask);

            eachTask.appendChild(eachTaskTitle);
            eachTask.appendChild(eachTaskDueDate);
            eachTask.appendChild(expandedTaskInfo);
            eachTask.appendChild(expandCollapseButton);
            eachTask.appendChild(completedButoon);
            expandedTaskInfo.appendChild(eachTaskDescription);
            expandedTaskInfo.appendChild(eachTaskNotes);
            expandedTaskInfo.style.display = "none";

            eachTask.setAttribute("class", "eachTask");
            eachTask.setAttribute("id", data.projTaskArray[j].title + j);
            eachTaskTitle.innerHTML = data.projTaskArray[j].title;
            eachTaskDueDate.innerHTML = data.projTaskArray[j].dueDate;
            eachTaskDescription.innerHTML = data.projTaskArray[j].description;
            eachTaskNotes.innerHTML = data.projTaskArray[j].notes;
            expandCollapseButton.innerHTML = "Expand/Collapse!";
            completedButoon.innerHTML = "Completed!"
                }
            }
            makeAddProjectTaskButton(projectIdKey);
}


export {generateProjectContainer, makeAddProjButton, makeProjList}

/*
const eachTask = document.createElement("div");
            const eachTaskTitle = document.createElement("h3");
            const eachTaskDescription = document.createElement("h6");
            const eachTaskDueDate = document.createElement("h1");
            //const eachTaskPriority = document.createElement("p")
            const eachTaskNotes = document.createElement("p");



eachTask.appendChild(eachTaskTitle);
            eachTask.appendChild(eachTaskDescription);
            eachTask.appendChild(eachTaskDueDate);
            eachTask.appendChild(eachTaskNotes);

            eachTask.setAttribute("class", "eachTask");
            eachTask.setAttribute("id", data.projTaskArray[j].title + j);
            eachTaskTitle.innerHTML = data.projTaskArray[j].title; 
            eachTaskDescription.innerHTML = data.projTaskArray[j].description;
*/