const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
let operationResult = document.querySelector('.calculating')
let finalResult = document.querySelector('.finalResult')
let displayOperation = ''


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
}

displayFinalResult = (number) => {
    finalResult.textContent = number
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        displayAll(e.target.textContent)
    })
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {
        num1 = displayOperation
        displayAll(e.target.textContent)
        operator = e.target.textContent
        displayOperation = ''
    })
});

clearButton.addEventListener('click', e => {
    num1 = 0
    num2 = 0
    operator = ''
    operationResult.textContent = ''
    finalResult.textContent = ''
    displayOperation = ''
})

equalButton.addEventListener('click', e => {
    num2 = displayOperation
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    operate(num1, num2, operator)
})