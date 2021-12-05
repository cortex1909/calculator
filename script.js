const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
let operationResult = document.querySelector('.calculating')
let finalResult = document.querySelector('.finalResult')
let displayOperation = ''
let firstOperationCheck = 0
let secondOperationCheck = 0
let _finalResult = 0


let num1 = 0
let num2 = 0
let operator = ''
add = (num1, num2) => displayFinalResult(num1 + num2);
subtract = (num1, num2) => displayFinalResult(num1 - num2);
multiply = (num1, num2) => displayFinalResult(num1 * num2);
divide = (num1, num2) => displayFinalResult(num1 / num2);

operate = (num1, num2, operator) => {
    switch(operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}

displayAll = (text) => {
    displayOperation = displayOperation + text
    operationResult.textContent = operationResult.textContent + text
    console.log(displayOperation)
}

displayFinalResult = (number) => {
    finalResult.textContent = number
    _finalResult = number
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        displayAll(e.target.textContent)
    })
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {
        if(firstOperationCheck === 0){
            num1 = parseInt(displayOperation)
            displayAll(e.target.textContent)
            operator = e.target.textContent
            displayOperation = ''
            firstOperationCheck++
        } else {
        if(secondOperationCheck === 0) {
            num2 = parseInt(displayOperation)
            displayAll(e.target.textContent)
            operate(num1, num2, operator)
            operator = e.target.textContent
            displayOperation = ''   
            secondOperationCheck++
        } else {
            num1 = parseInt(_finalResult)
            num2 = parseInt(displayOperation)
            displayAll(e.target.textContent)
            operate(num1, num2, operator)
            operator = e.target.textContent
            displayOperation = ''   
        }
        }
    })
});

clearButton.addEventListener('click', e => {
    equalCheck = 0
    firstOperationCheck = 0
    secondOperationCheck = 0
    _finalResult = 0
    num1 = 0
    num2 = 0
    operator = ''
    operationResult.textContent = ''
    finalResult.textContent = ''
    displayOperation = ''
})

equalButton.addEventListener('click', e => {
        if(secondOperationCheck === 0) {
            num2 = parseInt(displayOperation)     
            num1 = parseInt(num1)
            operate(num1, num2, operator)
        } else {
            num2 = parseInt(displayOperation)     
            num1 = parseInt(_finalResult)
            operate(num1, num2, operator)
        }
})