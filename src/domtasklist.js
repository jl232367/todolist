// THIS IS STARTER CODE TO MAKE THE TASK LIST FOR THE TODO LIST. 

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

}

export {makeAddTaskButton}
/*
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