class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    coords() {
        return "X = " + this.x + ", Y = " + this.y;
    }
}

// let p1 = new Point(1, 7);

// console.log(p1.coords());

class Rectangle {
    constructor(p1, p2) {
        this.vertex1 = new Point(p1.x, p1.y);
        this.vertex3 = new Point(p2.x, p2.y);
        this.vertex2 = new Point(this.vertex3.x, this.vertex1.y);
        this.vertex4 = new Point(this.vertex1.x, this.vertex3.y);
    }

    vertices() {
        return "Współrzędne wierzchołków:\n" + 
        "Wierzchołek 1:\nX = " + this.vertex1.x + ", Y = " + this.vertex1.y + "\n" +
        "Wierzchołek 2:\nX = " + this.vertex2.x + ", Y = " + this.vertex2.y + "\n" +
        "Wierzchołek 3:\nX = " + this.vertex3.x + ", Y = " + this.vertex3.y + "\n" +
        "Wierzchołek 4:\nX = " + this.vertex4.x + ", Y = " + this.vertex4.y + "\n";
    }

    perimeter() {
        let a = Math.abs(this.vertex1.y - this.vertex2.y);
        let b = Math.abs(this.vertex1.x - this.vertex4.x);

        return 2 * a + 2 * b;
    }
}

let r1 = new Rectangle(new Point(1, 3), new Point(7, 9));
r1.vertices();