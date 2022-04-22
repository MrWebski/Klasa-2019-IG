class Car {
    constructor(vin, regNum) {
        this.vin = vin;
        this.regNum = regNum;
        this.turnedOn = false;
        this.moving = false;
        this.turning = "";
    }
    turnOn() {
        this.turnedOn = true;
    }
    turnOff() {
        this.turnedOn = false;
    }
    go() {
        this.moving = true;
    }
    turn(direction) {
        this.turning = direction;
    }
    break() {
        this.moving = false;
    }
    status() {
        return "Samochód" + ((this.turnedOn) ? (" ") : (" nie ")) + "uruchomiony";
    }
}

class Model extends Car {
    constructor(brand, model, vin, regNum) {
        super(vin, regNum);
        this.brand = brand;
        this.model = model;
    }

    turnOn() {
        return "Samochód " + this.brand + " " + this.model + " uruchomiony."
    }
}

var m1 = new Model("Ford", "Fiesta", "5UXWX7C5XE0111019", "ABC 235781");