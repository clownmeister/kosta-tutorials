//text je parametr a počítáme že je to string, když jich mám víc tak to jede popořadě
//funkce místo console.log abychom viděli veci na strance
newline()
function write(text) {


    let element = document.createElement('div');
    //innerHTML - vypíše pomocí html, inertext- vypíše text
    element.innerHTML = text
    //tato funkce říká kam dáme element, který jsme si vytvořili výše
    document.body.append(element);
}
function writeArray(stringArray) {
    for (const item of stringArray) {
        write(item);
    }
}

// Když mám array se složitějšími "atributy?" jako firstName atd. musím udat jak se mají informace zobrazit
function renderUser(user) {
    write(user.firstName + ' ' + user.lastName)
}



