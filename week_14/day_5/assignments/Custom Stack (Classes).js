class Stack {
    constructor(length) {

        Object.defineProperty(this, "length", {
            value: length,
            enumerable: false,
            writable: false
        })

        Object.defineProperty(this, "index", {
            value: 0,
            enumerable: false,
            writable: true
        })
    }

    push(elem) {
        if (this.index != this.length) {
            this[this.index] = elem
            this.index++
            return (this.length)
        }
        else {
            console.log("stack is full")
        }
    }

    pop() {
        if (this.index == 0) {
            console.log("stack is empty")
        }
        else {
            this.index--
            var popElem = this[this.index]
            delete this[this.index]
            return popElem
        }
    }

    isEmpty() {
        if (this.index == 0) {
            console.log(true)
        }
        else { console.log(false) }
    }

    isFull() {
        if (this.index == this.length) {
            console.log(true)
        }
        else { console.log(false) }
    }

    top() {
        console.log(this[this.index - 1])
    }
}



    // push
    // pop
    // top
    // add a limit to the stack, if you try to push, let the user know that the stack has reached its limit with isFull
    // isEmpty


    let mystack = new Stack (5)

    console.log(mystack)

    mystack.pop()

    mystack.push(4)
    mystack.push(8)
    mystack.push(7)
    mystack.push(3)
    mystack.push(9)
    mystack.push(4)

    console.log(mystack)

    mystack.top()

    mystack.isEmpty()

    mystack.isFull()