window.addEventListener('DOMContentLoaded', () => {
    let form = document.forms[0];
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // let number = form.querySelector('#number');
        // let text = form.querySelector('#text');
        let number = form['number'].value;
        let text = form['text'].value;

        let displayText = document.querySelector('#displayText');

        for (let i = 0; i <= parseInt(number); i++) {
            let div = document.createElement('span');
            displayText.appendChild(div).innerHTML = text;
        }
    });
});