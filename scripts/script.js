const inputbox = document.getElementById("inputbox");
const insertbtn = document.getElementById("insertbtn");
const ouputbox = document.getElementById("Output");

insertbtn.onclick = function () {
    const value = inputbox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage==null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(value);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showoutput();
}

function showoutput () {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage==null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newTodo = ""
    listArr.forEach((element,index) => {
        newTodo = `${element}`
    })
    ouputbox.textContent += newTodo;
}