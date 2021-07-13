
    let localStorageTaskArray = localStorage.getItem("taskArrayKey");
    let localStorageProjArray = localStorage.getItem("projArrayKey");
    let localStorageProjTaskArray = localStorage.getItem("projTaskArrayKey");
    let taskArray = JSON.parse(localStorageTaskArray);
    let projArray = JSON.parse(localStorageProjArray);
    let projTaskArray = JSON.parse(localStorageProjTaskArray);
    

    /*
let taskArray = JSON.parse(localStorageTaskArray);
    let projArray = JSON.parse(localStorageProjArray);
    let projTaskArray = JSON.parse(localStorageProjTaskArray);


    let taskArray = [];
    let projArray = [];
    let projTaskArray = [];

    */
export {taskArray, projArray, projTaskArray}