/*
Plan to hold the object that will serve as the simple tasks on the primary todo module and the tasks under the different projects. 
*/

const taskFactory = (title, description, dueDate, priority, notes, completed) => {
    const returnInput = () => {
        console.log (title, description, dueDate, priority, notes, completed);
    }
    return {title, description, dueDate, priority, notes, completed, returnInput};
}


const testCon = (s1) => console.log(s1);
export {testCon, taskFactory}