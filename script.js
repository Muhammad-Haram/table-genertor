let tableForm = document.querySelector("#tableForm");
let inputBox = document.querySelector(".inputBox");
let tableData = document.querySelector(".tables");

tableForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var num = inputBox.value;
    inputBox.value = "";
    tableData.innerHTML = "";

    for (let i = 1; i < 11; i++) {
        let result = `${num} x ${i} = ${num * i} <br>`
        tableData.innerHTML += `${result}`;
    }
})