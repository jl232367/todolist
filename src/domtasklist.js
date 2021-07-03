// THIS IS STARTER CODE TO MAKE THE TASK LIST FOR THE TODO LIST. 



const clearList = (containingElementToClear) => {
    const parentElement = document.querySelector(containingElementToClear);
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

const newTaskForm = (taskFormContainingElement) => {
    // Need to generate a form when "+" is hit.  Need to capture: title, description, dueDate, priority, notes, completed
    clearList(taskFormContainingElement) //clear contents of task list to make space for form
    const taskFormContainer = document.querySelector(taskFormContainingElement)
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
    notes.setAttribute("row", "4");
    notes.setAttribute("cols", "50");
    notes.setAttribute("value", "Task Notes");
    let completedFormLabel = document.createElement("label");
    completedFormLabel.setAttribute("for", "complete");
    completedFormLabel.innerText = "I have completed this task:"
    //let incompleteInputField = formInput("radio", "complete", "Incomplete", "Incomplete");
    let incompleteInputField = document.createElement("input");
    incompleteInputField.setAttribute("type", "radio");
    incompleteInputField.setAttribute("name", "taskCompletionCheck");
    incompleteInputField.setAttribute("id", "incompleteInputId");
    incompleteInputField.setAttribute("value", "Incomplete");

    //let completedInputField = formInput("radio", "complete", "completed", "Completed");

    taskFormContainer.appendChild(simpletaskform);
    simpletaskform.appendChild(title);
    simpletaskform.appendChild(descriptionInputFeild);
    simpletaskform.appendChild(dueDateInputFeild);
    simpletaskform.appendChild(notes);
    simpletaskform.appendChild(priorityInputField);
    simpletaskform.appendChild(completedFormLabel);
    simpletaskform.appendChild(incompleteInputField);
    //simpletaskform.appendChild(completedInputField);


    const formInput = (type, n, placeholder, id) => { // small function to shorten basic form input
        let inputField = document.createElement("input");
        inputField.setAttribute("type", type);
        inputField.setAttribute("id", id);
        inputField.setAttribute("name", n);
        inputField.setAttribute("value", placeholder);
        return inputField; 
    }
}
const makeAddTaskButton = () => {
    const taskListCardContainer = document.getElementById("taskListContainer");
    const plusMoreTaskText = document.createElement("h3");
    taskListCardContainer.appendChild(plusMoreTaskText);
    plusMoreTaskText.innerText = "Add more tasks: =>";
    plusMoreTaskText.setAttribute("class", "plusMoreTaskText");
    const plusMoreTaskPlusButton = document.createElement("button");
    taskListCardContainer.appendChild(plusMoreTaskPlusButton);
    plusMoreTaskPlusButton.setAttribute("class", "plusMoreTaskPlusButton");
    plusMoreTaskPlusButton.setAttribute("id", "addTaskPlusButton");
    plusMoreTaskPlusButton.innerHTML = "+";
    plusMoreTaskPlusButton.addEventListener('click', () => {newTaskForm("#taskListContainer")});  //
}

export {makeAddTaskButton, clearList, newTaskForm}
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