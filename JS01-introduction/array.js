newline()
newline()

const fruit = [
  'apple', 'pear', 'lemon', 'grapefruit'
]

const vegetables = [
  'onion', 'pepper', 'melon'
]

write("Seznam produktů:")
writeArray(fruit)
writeArray(vegetables)



//POLE OBJEKTU
const email1 = {
  title: "vyhral ste milion",
  message: "Dobry den stal jste vyhercem mobilniho telefonu. Kliknete zde.",
}

const email2 = {
  title: "Ahoj Luciane",
  message: "Ahoj jak se mas. Ja se mam dobre. Honza",
}

const email3 = {
  title: "Nazdar kámo",
  message: "Jak to jde bro?",
}

//vypiseme emaily
// newline()
// newline()
// write("emaily: ")
// renderEmail(email1)
// renderEmail(email2)


//emaily dame do pole at je mame pohromade
const emailArray = [email1, email2, email3]

writeEmails(emailArray)
