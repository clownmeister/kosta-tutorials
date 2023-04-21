const ButtonInitializer = () => {
    const init = () => {
        document.getElementById('success').onclick = function () {
            this.remove()
        };
        document.getElementById('error').onclick = function () {
            this.remove()
        };
        document.getElementById('warning').onclick = function () {
            this.remove()
        };
    }

    return {
        init: init
    }
}


document.addEventListener('DOMContentLoaded',() => {
    ButtonInitializer.init();
});
