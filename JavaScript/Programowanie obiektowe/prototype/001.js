class Car {
    constructor(vin, regNum) {
        this.vin = vin;
        this.regNum = regNum;
        this.turnedOn = false;
        this.moving = false;
        this.turning = "";
    }
    turnOn() { this.turnedOn = true; }
    turnOff() { this.turnedOn = false; }
    go() { this.moving = true; }
    turn(direction) { this.turning = direction; }
    break() { this.moving = false; }
    status() { return "Samochód" + ((this.turnedOn) ? (" ") : (" nie ")) + "uruchomiony"; }
}

var c1 = new Car("8NACFYP7IN", "RK 234569");

c1.color = "red"

var c2 = new Car("BU7KTRCAC7BT", "KP 935381");

Car.color = "red";

var c3 = new Car("BCF347889", "XX 083745");

Car.prototype.color = "red";

var c4 = new Car("LA347857889PON8", "GG 1234151");