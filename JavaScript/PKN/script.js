let items = ['toilet-paper', 'hill-rockslide', 'scissors'];

window.addEventListener("DOMContentLoaded", () => {
    let form = document.forms[0];
    let result = document.querySelector("#result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let user = form.game.value;
        let comp = Math.floor(Math.random() * 3);
        result.classList.remove("hidden");
        result.classList.add("flex");

        while(result.firstChild)
            result.removeChild(result.firstChild);

        result.appendChild(
            document.createElement("div")
        ).appendChild(document.createElement("span").classList.add("fa-solid", items[user]));
            
        result.appendChild(
            document.createElement("div")
        ).innerHTML = "Przeciwnik: " + items[comp];
    });
});