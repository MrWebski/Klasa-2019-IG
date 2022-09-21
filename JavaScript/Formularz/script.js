window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#form-1');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach((input) => {
            console.log(input.value);
        });
    });
    let forms = document.forms;
});