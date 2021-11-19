// THIS IS STARTER CODE TO MAKE THE TASK LIST FOR THE TODO LIST.
import * as pushDataFuncs from "./simpletask";
import * as data from "./data";

const clearList = (containingElementToClear) => {
  const parentElement = document.getElementById(containingElementToClear);
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const newTaskForm = (taskFormContainingElement) => {
  // Need to generate a form when "+" is hit.  Need to capture: title, description, dueDate, priority, notes, completed
  clearList(taskFormContainingElement); //clear contents of task list to make space for form
  const taskFormContainer = document.getElementById(taskFormContainingElement);
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
  priorityInputField.setAttribute("type", "text");
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
  submitTaskButton.innerText = "Add Task!";
  submitTaskButton.addEventListener("click", () => {
    pushDataFuncs.pushTaskFormDataToTaskArray();
    clearList(taskFormContainingElement);
    makeTaskList(taskFormContainingElement);
    makeAddTaskButton(taskFormContainingElement);
  });
  const cancelTaskFormButton = document.createElement("button");
  cancelTaskFormButton.setAttribute("class", "cancelTaskFrom");
  cancelTaskFormButton.setAttribute("id", "cancelTaskFormId");
  cancelTaskFormButton.innerText = "Cancel";
  cancelTaskFormButton.addEventListener("click", () => {
    clearList(taskFormContainingElement);
    makeTaskList(taskFormContainingElement);
    makeAddTaskButton(taskFormContainingElement);
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
};
const makeAddTaskButton = (taskButtonContainingElement) => {
  const taskListCardContainer = document.getElementById(
    taskButtonContainingElement
  );
  const plusMoreTaskText = document.createElement("h3");
  taskListCardContainer.appendChild(plusMoreTaskText);
  //plusMoreTaskText.innerText = "Add more tasks: =>";
  //plusMoreTaskText.setAttribute("class", "plusMoreTaskText");
  const plusMoreTaskPlusButton = document.createElement("button");
  taskListCardContainer.appendChild(plusMoreTaskPlusButton);
  plusMoreTaskPlusButton.setAttribute("class", "plusMoreTaskPlusButton");
  plusMoreTaskPlusButton.setAttribute("id", "addTaskPlusButton");
  plusMoreTaskPlusButton.innerHTML = "Add Task: +";
  plusMoreTaskPlusButton.addEventListener("click", () => {
    newTaskForm(taskButtonContainingElement);
  }); //
};
const makeTaskList = (containingListElement) => {
  //if (!data.taskArray) {
    //makeAddTaskButton(containingListElement);
//} else {
  for (let i = 0; i < data.taskArray.length; i++) {
    if (data.taskArray[i].completed === "Incomplete") {
      const taskListContainerHolder = document.getElementById(
        containingListElement
      );
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
      //let taskIncomplete = data.projArray[i].title;
      const expandCollapseButton = document.createElement("button");
      expandCollapseButton.addEventListener("click", () => {
        expandCollapseTask(expandedTaskInfo);
      });
      const completedButoon = document.createElement("button");
      completedButoon.dataset.cIndex = i;
      completedButoon.addEventListener("click", () => {
        let numberForArrayPosition = i;
        data.taskArray[numberForArrayPosition].completed = "complete";
        localStorage.setItem("taskArrayKey", JSON.stringify(data.taskArray));
        clearList(containingListElement);
        makeTaskList(containingListElement);
        makeAddTaskButton(containingListElement);
      });

      taskListContainerHolder.appendChild(eachTask);

      eachTask.appendChild(eachTaskTitle);
      eachTask.appendChild(eachTaskDueDate);
      eachTask.appendChild(expandedTaskInfo);
      eachTask.appendChild(expandCollapseButton);
      eachTask.appendChild(completedButoon);
      expandedTaskInfo.appendChild(eachTaskDescription);
      expandedTaskInfo.appendChild(eachTaskNotes);
      expandedTaskInfo.style.display = "none";

      eachTask.setAttribute("class", "eachTask");
      eachTask.setAttribute("id", data.taskArray[i].title + i);
      eachTaskTitle.innerHTML = data.taskArray[i].title;
      eachTaskDueDate.innerHTML = data.taskArray[i].dueDate;
      eachTaskDescription.innerHTML = data.taskArray[i].description;
      eachTaskNotes.innerHTML = data.taskArray[i].notes;
      expandCollapseButton.innerHTML = "Expand/Collapse!";
      completedButoon.innerHTML = "Completed!";
    }
  }
}
  
//};

const expandCollapseTask = (expandedtaskinfocontainer) => {
  if (expandedtaskinfocontainer.style.display === "none") {
    expandedtaskinfocontainer.style.display = "block";
  } else {
    expandedtaskinfocontainer.style.display = "none";
  }
};

export {
  makeAddTaskButton,
  clearList,
  newTaskForm,
  makeTaskList,
  expandCollapseTask,
};
/*
() => {prompt("Hello There! I Did a thing!")}


function displayBooks() {
    clearList();
    // I am making this loop to display all the contents of the array holding the objects that contain the Book data
for (let i = 0; i < myLibrary.length; i++) {
    const bookList = document.querySelector(".bookList");
    const eachBook = document.createElement("div");
    const removeButton = document.createElement("button")
    const readOnOff = document.createElement("button")
    const brk = document.createElement("br");
    bookList.appendChild(eachBook);
    bookList.appendChild(removeButton);
    bookList.appendChild(brk);
    bookList.appendChild(readOnOff);
    removeButton.setAttribute("class", "removeButton");
    removeButton.setAttribute('id',  i);
    removeButton.dataset.rIndexNum = i; 
    removeButton.addEventListener('click', (e) => {removeABook(e)} 
    );
    readOnOff.setAttribute("class", "readOnOffButton");
    readOnOff.setAttribute("id", i);
    readOnOff.dataset.inNum = i;
    readOnOff.addEventListener('click',(e) => {
        let dataNum = e.target.getAttribute("id");
        myLibrary[dataNum].readToggle();
        clearList();
        displayBooks();
    });
        
        
        //alert(dataNum);
        myLibrary.forEach ()
       for (let i = 0; i < myLibrary.length; i++){
           if (dataNum == i) {
               let pos = i;
               myLibrary.splice(i, 1);
               //alert(dataNum);
           }
       }
        
    
       eachBook.setAttribute('class', "eachBook");
       eachBook.setAttribute('id', myLibrary[i].title + i);
       eachBook.innerHTML = myLibrary[i].bookInfo(); 
       removeButton.innerHTML = "Remove Book";
       readOnOff.innerHTML = "Toggle have or Haven't read";
   }
   }
*/
