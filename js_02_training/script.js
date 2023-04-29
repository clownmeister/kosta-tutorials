const seznamLidi = [
    {firstname: 'Petr', surname: 'Kačer', town: 'Praha', street: 'Pekárenská'},
    {firstname: 'Oldřich', surname: 'Hamouz', town: 'Liberec', street: 'Vodičkova'},
    {firstname: 'Roman', surname: 'Prokop', town: 'Jihlava', street: 'Krenova'}
]

function createHtmlFromSeznamLidi(seznamLidi) {
    return `
    <tr>
        <td>${seznamLidi.firstname}</td>
        <td>${seznamLidi.surname}</td>
        <td>${seznamLidi.town}</td>
        <td>${seznamLidi.street}</td>
    </tr>
    `
}

function renderSeznamLidi() {
    let parent = document.getElementById('people-list')

    for (const item of seznamLidi) {
        const html = createHtmlFromSeznamLidi(item)
        parent.innerHTML = parent.innerHTML + html
    }
}

renderSeznamLidi()

let firstname = 'Honza'
let surname = 'Košta'

console.log(firstname + ' ' + surname)

function write(text) {
    let element = document.createElement('div')
    element.innerHTML = text
    document.body.append(element)
}

function add(a, b) {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let equal = parseInt(number1) + parseInt(number2);
    write(equal);
    if (equal <= 17) {
        alert('You are a child');
    }
        // if (equal >= 18) {
        //     alert('You are an adult');
    // }
    else {
        alert('You are an adult');
    }
}



