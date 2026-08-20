let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el") 
let subEl = document.getElementById("sub-el") 
let divideEl = document.getElementById("divide-el") 
let multiplyEl = document.getElementById("multiply-el") 

function add(){
    let answer = num1 + num2
    sumEl.innerText = "Sum: " + answer
}
function subtract(){
    let answer = num1 - num2
    subEl.innerText = "Sub: " + answer
}
function divide(){
    let answer = num1 / num2
    divideEl.innerText = "Div: " + answer
}
function multiply(){
    let answer = num1 * num2
    multiplyEl.innerText = "Mul: " + answer
}

