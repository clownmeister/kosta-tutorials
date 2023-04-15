// začátek dat
const email1 = {
  title: 'Pozvánka na pohovor', message: 'Zveme ván na pohovor', date: new Date(), from: 'hr@tyhlefirmy.com'
}
const email2 = {
  title: 'Investujte s námi',
  message: 'Pojďte s námi investovat do fondu.Pojďte s námi investovat do fondu.Pojďte s námi investovat do fondu.',
  date: new Date(),
  from: 'investicka@bohaci.com'
}

const emails = [email1, email2, email1, email2]


//konec dat


// začátek funkcí
function addEmailHtmlToTable(html) {
  const emailWrapper = document.getElementById('emails')
  emailWrapper.innerHTML = emailWrapper.innerHTML + html
}

function createHtmlFromEmail(email) {
  const html = `
    <tr class="email">
    <th>${email.title}</th>
    <td class="email__message">${email.message}</td>
    <td>${email.date}</td>
    <td>${email.from}</td>
    </tr>
  `

  return html
}

function renderEmails(emails) {
  for (const email of emails){
    const html = createHtmlFromEmail(email)
    addEmailHtmlToTable(html)
  }

}

//  konec funkcí


// logika
renderEmails(emails)
