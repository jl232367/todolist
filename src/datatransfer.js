import * as data from "./data";


const pushData = (newTask) => {
    //console.log(newTask);
    data.taskArray.push(newTask);
    localStorage.setItem("taskArrayKey", JSON.stringify(data.taskArray));
    //let localStorageTaskArray = localStorage.getItem("taskArrayKey");
    //data.taskArray = JSON.parse(localStorageTaskArray); 
    
}

const pushDataProjectTasks = (newTask) => {

    //if (data)
    //console.log(newTask);
    data.projTaskArray.push(newTask);
    localStorage.setItem("projTaskArrayKey", JSON.stringify(data.projTaskArray));
    //let localStorageProjTaskArray = localStorage.getItem("projTaskArrayKey");
    //data.projTaskArray = JSON.parse(localStorageProjTaskArray);
    
}

const pushProj = (newProj) => {
   
        //let tempProjectArray = [];
        data.projArray.push(newProj);
        localStorage.setItem("projArrayKey", JSON.stringify(data.projArray));
   
       // let localStorageProjArray = localStorage.getItem("projArrayKey");

       // data.projArray = JSON.parse(localStorageProjArray);
    
    //console.log(newProj);
   //data.projArray.push(newProj);
    
    
    //let localStorageProjArray = localStorage.getItem("projArrayKey");
    //localStorageProjArray.push(newProj);
    //localStorage.setItem("projArrayKey", JSON.stringify(localStorageProjArray));

    //data.projArray = JSON.parse(localStorageProjArray);
    
}

export {pushData, pushProj, pushDataProjectTasks}