
   // let startTaskArray = [];
    //let startProjArray = [];
    //let startProjTaskArray = [];

    //localStorage.setItem("taskArrayKey", JSON.stringify(startTaskArray));
    //localStorage.setItem("projArrayKey", JSON.stringify(startProjArray));
    //localStorage.setItem("projTaskArrayKey", JSON.stringify(startProjTaskArray));
    
    let localStorageTaskArray = localStorage.getItem("taskArrayKey");
    let localStorageProjArray = localStorage.getItem("projArrayKey");
    let localStorageProjTaskArray = localStorage.getItem("projTaskArrayKey");

    let taskArray = JSON.parse(localStorageTaskArray);
    let projArray = JSON.parse(localStorageProjArray);
    let projTaskArray = JSON.parse(localStorageProjTaskArray);
 /*
    if (!localStorageTaskArray) {
        taskArray = [];
    } else {taskArray = localStorageTaskArray; }
    if (!localStorageProjArray) {
        projArray = [];
    } else {projArray = localStorageProjArray;}
    if (!localStorageProjTaskArray) {
        projTaskArray = [];
    } else {projTaskArray = localStorageProjTaskArray;}
*/
    
export {taskArray, projArray, projTaskArray, localStorageTaskArray, localStorageProjArray, localStorageProjTaskArray}