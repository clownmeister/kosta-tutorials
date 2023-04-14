function closesucces() {
    document.getElementById('success').onclick = function () {
        this.remove()
    };
}

function closeerror() {
    document.getElementById('error').onclick = function () {
        this.remove()
    };
}

function closewarning() {
    document.getElementById('warning').onclick = function () {
        this.remove()
    };
}
