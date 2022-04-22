const car = {
    name: "VW",
    model: "Golf",
    weight: 1450,
    color: "red",

    start: function() {
        return "Samochód " + this.name + this.model + " uruchomiony.";
    },
    stop: function() {
        return "Samochód " + this.name + this.model + " wyłączony.";
    }
};

console.log(car.name);
console.log(car.start());