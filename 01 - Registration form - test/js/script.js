function registerAlert() {
    var nameInput = document.getElementById('name')
    var emailInput = document.getElementById('email')
    alert('User ' + nameInput.value + ' reistred with email ' + emailInput.value)
}

function backToLogin() {
    var x = document.getElementById('toggleLogin');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else  {
        x.style.display = 'none';
    }
}