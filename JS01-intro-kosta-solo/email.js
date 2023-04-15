// začátek funkcí
function createHtmlFromEmail(email) {
  return `
    <tr class="email">
    <th>${email.title}</th>
    <td class="email__message">${email.message}</td>
    <td>${email.date.toLocaleDateString()} - ${email.date.toLocaleTimeString()}</td>
    <td>${email.from}</td>
    </tr>
  `
}

function addEmailHtmlToTable(html) {
  const emailWrapper = document.getElementById('emails')
  emailWrapper.innerHTML = emailWrapper.innerHTML + html
}

function renderEmails(emails) {
  for (const email of emails){
    const html = createHtmlFromEmail(email)
    addEmailHtmlToTable(html)
  }
}
//  konec funkcí


// příprava dat
const email1 = {
  title: 'Pozvánka na pohovor',
  message: 'Zveme ván na pohovor',
  date: new Date(),
  from: 'hr@tyhlefirmy.com'
}
const email2 = {
  title: 'Investujte s námi',
  message: 'Pojďte s námi investovat do fondu.Pojďte s námi investovat do fondu.Pojďte s námi investovat do fondu.',
  date: new Date(),
  from: 'investicka@bohaci.com'
}
const emails = [email1, email2, email1, email2]

// logika
renderEmails(emails)
