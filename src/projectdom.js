import * as taskDOM from "./domtasklist";
import * as dataTransFuncs from "./datatransfer";
import * as projectFormFuncs from "./projectgenorator";
import * as data from "./data"
import * as generalDOM from "./domtasklist"

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

const newProjForm = (taskFormContainingElement) => {
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
        generalDOM.clearList(taskFormContainingElement);
        makeProjList(taskFormContainingElement);
        //makeTaskList(taskFormContainingElement);
        makeAddProjButton(taskFormContainingElement);
    });
    const cancelTaskFormButton = document.createElement("button");
    cancelTaskFormButton.setAttribute("class", "cancelTaskFrom");
    cancelTaskFormButton.setAttribute("id", "cancelTaskFormId");
    cancelTaskFormButton.innerText = "Cancel";
    cancelTaskFormButton.addEventListener("click", () => {generalDOM.clearList(taskFormContainingElement); makeAddProjButton("projectContainer");});
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
    const projectsContainerHolder = document.getElementById(containingProjElement);
    const eachProj = document.createElement("div");
    const eachProjTitle = document.createElement("h3");
    const eachProjDescription = document.createElement("h6");
    const eachProjDueDate = document.createElement("h1");
    //const eachTaskPriority = document.createElement("p")
    const eachProjNotes = document.createElement("p");
    const ProjTaskListContainer = document.createElement("div")
        
    projectsContainerHolder.appendChild(eachProj);
        //for (let j = 0; j <data.porjArray[i].tasks.length; j++) {
            
         //}

    eachProj.appendChild(eachProjTitle);
    eachProj.appendChild(eachProjDescription);
    eachProj.appendChild(eachProjDueDate);
    eachProj.appendChild(eachProjNotes);
    eachProj.appendChild(ProjTaskListContainer);

    eachProj.setAttribute("class", "eachProj");
    eachProj.setAttribute("id", data.projArray[i].title + i);
    eachProjTitle.innerHTML = data.projArray[i].title; 
    eachProjDescription.innerHTML = data.projArray[i].description;
    }
}
export {generateProjectContainer, makeAddProjButton}