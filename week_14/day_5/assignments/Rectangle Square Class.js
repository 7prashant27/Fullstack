class Rectangle {
    constructor(length, Breadth) {
        this.length = length
        this.Breadth = Breadth
    }
    area() {
        return (`Area of Rectangle is ${this.length * this.Breadth}`)
    }
}

class Square extends Rectangle {
    constructor(size) {
        super()
        this.length = size
        this.Breadth = size
    }
}

const box1 = new Rectangle(10, 8)

console.log(box1)
console.log(box1.area())

const box2 = new Square(10)
console.log(box2)
console.log(box2.area())