const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear')
const operationResult = document.querySelector('calculating')
const finalResult = document.querySelector('finalResult')
let displayOperation = ''
let displayResult = ''

let num1, num2 = 0
add = (num1, num2) => num1 + num2;
subtract = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 / num2;

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

displayOperation = () => {

}

displayResult = () => {
    
}