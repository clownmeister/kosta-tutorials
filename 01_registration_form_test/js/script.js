function registerAlert() {
    var nameInput = document.getElementById('name-signup')
    var emailInput = document.getElementById('email-signup')
    alert('User ' + nameInput.value + ' registred with email ' + emailInput.value)
}

function backToLogin() {
    var x = document.getElementById('hiddenLogin');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function showLogin() {
    // První možnost zápisu
    document.getElementById('login').classList.remove('hidden')

    // Druhá možnost zápisu
    var register = document.getElementById('register');
    register.classList.add('hidden')
}
function showRegister() {
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
}