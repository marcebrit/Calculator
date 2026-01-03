//operation functions

let add = function (number1, number2) {
    return number1 + number2
}
function substract(number1, number2) {
    return number1 - number2
}
function multiply(number1, number2) {
    return number1 * number2
}
function divide(number1, number2) {
    return number1 / number2
}

//function that calls operation functions with the proper arguments 

function operate(input1, operator, input2) {
    return operations[operator](input1, input2)
}

//main variables

let operatorVariable
let numberToCalculate1
let numberToCalculate2

// operators object for referencing operations functions 

operations = {
    "+": add,
    "-": substract,
    "*": multiply,
    "/": divide,

}

//operator box selector and function


//numbers button and input logic

const numberButtons = document.getElementById("numbers-div")
const calculationScreen = document.getElementById("calculation-screen")


numberButtons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("number-button")) {
        return
    }
    calculationScreen.value += e.target.textContent
})

const operatorButtons = document.getElementById("operators-div")

operatorButtons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("operators-button")) {
        return
    }
    numberToCalculate1 = Number(calculationScreen.value)
    calculationScreen.value = ""
    operatorVariable = e.target.textContent

    console.log(numberToCalculate1)

})


const resultButton = document.getElementById("result-button")
resultButton.addEventListener("click", (e) => {
    numberToCalculate2 = Number(calculationScreen.value)
    let finalResult = (operate(numberToCalculate1, operatorVariable, numberToCalculate2))
    calculationScreen.value = finalResult
    console.log(finalResult)
})

console.log(operate(2, "/", 5))

//operations button functions

