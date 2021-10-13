// CALCULATOR
let num1 = 10;
let num2 = 2;
let sumTotal = document.getElementById("sum")

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

function add(){
    sumTotal.textContent = `${"Sum: "} ${num1 + num2} `
}
function sub(){
    sumTotal.textContent = `${"Sum: "} ${num1 - num2} `
}
function multiply(){
    sumTotal.textContent = `${"Sum: "} ${num1 * num2} `
}
function divide(){
    sumTotal.textContent = `${"Sum: "} ${num1 / num2} `
}
// Calculator