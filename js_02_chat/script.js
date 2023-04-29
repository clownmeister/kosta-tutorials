function createHtmlFromMessage() {
    const parent = document.getElementById('chat-body')
    let textMessage = document.getElementById('chat-input')
    return `<div class="chat__row">
        <div class="chat__avatar chat__avatar--user1"></div>
        <div class="chat__message">textMessage</div>
    </div>
    `
}

function renderMessageFromInput() {

}
