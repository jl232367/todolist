
    let localStorageTaskArray = localStorage.getItem("taskArrayKey");
    let localStorageProjArray = localStorage.getItem("projArrayKey");
    let localStorageProjTaskArray = localStorage.getItem("projTaskArrayKey");
    let taskArray = JSON.parse(localStorageTaskArray);
    let projArray = JSON.parse(localStorageProjArray);
    let projTaskArray = JSON.parse(localStorageProjTaskArray);
export {taskArray, projArray, projTaskArray}