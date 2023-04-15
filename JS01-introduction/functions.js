function write(text) {
  //funkce misto console.log abychom videli veci na strance

  let element = document.createElement("div");
  element.innerHTML = text;
  document.body.append(element);
}

function newline() {
  let element = document.createElement("br");
  document.body.append(element);
}

function renderUser(user) {
  write(user.firstName + " " + user.lastName)
}



function writeArray(stringArray) {
  //funkce pro vypis polozek z pole
  //do funkce prijde pole ovoce

  //Stejnej zapis jako nize
  // stringArray.forEach((element) => {
  //     write(element)
  // })

  // bacha nezamenit "of" za "in"
  //za me hezci zapis ale vic lidi asi pouziva ten nahore foreach
  for (const item of stringArray) {
    write(item);
  }
}
function renderEmail(email) {
  write("<b>" + email.title + "</b>: " + email.message)
}
function writeEmails(emails){
  for (const email of emails) {
    renderEmail(email)
  }
}

