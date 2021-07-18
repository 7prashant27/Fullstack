function MyArray() {

    Object.defineProperty(this, "length", {
        value: 0,
        enumerable: false,
        writable: true
    })
}

MyArray.prototype.push = function (elem) {
    this[this.length] = elem
    this.length++
    return (this.length)
}


MyArray.prototype.pop = function () {
    this.length--
    var popElem = this[this.length]
    delete this[this.length]
    return popElem
}

MyArray.prototype.map = function (callback) {
    var result = new MyArray()
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            result.push(callback(this[key], key, this))
        }
    }
    return result
}

MyArray.prototype.forEach = function (callback) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            callback(this[key], key, this)
        }
    }
}

MyArray.prototype.filter = function (callback) {
    var result = new MyArray()
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key, this)) {
                result.push(this[key])
            }
        }
    }
    return result
}

MyArray.prototype.reduce = function (callback) {
    var acc = 0
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            acc = callback(acc, this[key], key, this)
        }
    }
    return acc
}



function Stack(length) {
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


Stack.prototype.push = function (elem) {
    if (this.index != this.length) {
        this[this.index] = elem
        this.index++
        return (this.length)
    }
    else {
        console.log("stack is full")
    }
}


Stack.prototype.pop = function () {
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

Stack.prototype.isEmpty = function () {
    if (this.index == 0) {
        console.log(true)
    }
    else { console.log(false) }
}

Stack.prototype.isFull = function () {
    if (this.index == this.length) {
        console.log(true)
    }
    else { console.log(false) }
}

Stack.prototype.peek = function () {
    console.log(this[this.index - 1])
}


function Queue(length) {
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

Queue.prototype.enqueue = function (elem) {
    if (this.index != this.length) {
        this[this.index] = elem
        this.index++
        return (this.length)
    }
    else {
        console.log("Queue is full")
    }
}

Queue.prototype.dequeue = function (callback) {
    if (this.index == 0) {
        console.log("Queue is empty")
    }
    else {
        var dequeueElem = this[0]
        delete this[0]
        let x = {}
        for (var prop in this) {
            if (this.hasOwnProperty(prop)) {
                x[prop] = this[prop]
                delete this[prop]
            }
        }
        this.index = 0
        for (var key in x) {
            this[this.index] = x[key]
            this.index++
        }
        return dequeueElem
    }
}

Queue.prototype.isEmpty = function () {
    if (this.index == 0) {
        console.log(true)
    }
    else { console.log(false) }
}

