let sum = 0
let displayElement = document.getElementById('display')
let currentOperation = ''
let currentInput = ''

function operation(sign) {
    processLastOperation()
    currentInput = ''
    currentOperation = sign
    if (sign === '=') {
        currentInput = sum.toString()
        sum = 0
        updateDisplay()
    }
    console.log('sum',sum)
    console.log('currentInput',currentInput)
}

function allClear() {
    sum = 0
    currentOperation = ''
    currentInput = ''
    updateDisplay()
}

function updateDisplay() {
    if (currentInput === '') {
        displayElement.innerText = '0'
    } else {
        displayElement.innerText = currentInput
    }
}

function processLastOperation() {
    const parsedInput = parseInt(currentInput)
    if (currentOperation === '+') {
        sum += parsedInput
        return
    }
    if (currentOperation === '-') {
        sum -= parsedInput
        return
    }
    if (currentOperation === '/') {
        sum /= parsedInput
        return
    }
    if (currentOperation === '*') {
        sum *= parsedInput
        return
    }
}

function addInput(input) {
    currentInput += input.toString()
    updateDisplay()

}