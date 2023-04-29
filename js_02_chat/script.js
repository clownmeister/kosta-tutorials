function createHtmlFromMessage(message, isResponse = false) {
    // const modifier = isResponse === true ? 'chat__row--response' : ''
    let modifier = ''
    if (isResponse === true) {
        modifier = 'chat__row--response'
    }
    return `<div class="chat__row ${modifier}">
                <div class="chat__avatar"></div>
                <div class="chat__message">${message.value}</div>
            </div>`
}


function renderMessageFromInput(inputElement, isResponse = false) {
    const parent = document.getElementById('chat-body')
    let htmlMessage = createHtmlFromMessage(inputElement, isResponse)
    parent.innerHTML += htmlMessage

}

let input = document.getElementById('chat-input');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        event.preventDefault()
        renderMessageFromInput(input)
        input.value = ''
    }

})


const button = document.getElementById('responseMessage')
button.addEventListener('click', function () {
    renderMessageFromInput(input, true)
    input.value = ''

})

