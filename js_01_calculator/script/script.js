let sum = 0
let displayElement = document.getElementById('display')
let currentOperation = ''
let currentInput = ''

function operation(sign) {
    processLastOperation()
    currentInput = ''
    currentOperation = sign
    if (sign === '=') {
        currentInput = sum.toLocaleString('cs-CZ', {maximumFractionDigits:9})
        // sum = 0
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
        displayElement.innerText = parseFloat(currentInput).toString()
    }
}

function processLastOperation() {
    let parsedInput = parseFloat(currentInput)
    if (isNaN(parsedInput)) {
        parsedInput = 0
    }
    if (currentOperation === '') {
       sum = parsedInput
        return
    }
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