var btn = document.getElementById("add")

btn.addEventListener("click", add)


function add() {
    var name = document.getElementById("input").value

    var div = document.createElement("div")
    div.style.float = "left"
    div.style.border = "2px solid black"
    var p = document.createElement("p")
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")
    var button3 = document.createElement("button")
    p.textContent = name
    button1.textContent = "Remove"
    button1.addEventListener("click", remove)
    button2.textContent = "Task Done"
    button2.addEventListener("click", done)
    button3.textContent = "Edit Task"
    button3.addEventListener("click", edit)


    div.append(p, button2, button3, button1)

    render(div)

}

function render(div) {
    var target = document.getElementById("cont")
    target.append(div)
}


function remove(elem) {
    elem.target.parentElement.remove()
}

function done(elem) {
    elem.target.parentElement.style.textDecoration = "line-through"
    elem.target.nextSibling.nextSibling.remove()
    elem.target.nextSibling.remove()
    elem.target.remove()
}

function edit(elem) {
    var target = elem.target
    var x = target.previousSibling.previousSibling


    var input = document.createElement("input")
    input.value = x.textContent
    target.textContent = "update"
    x.remove()

    target.removeEventListener("click",edit)
    target.addEventListener("click", update)
    var ref = target.previousSibling
    var parent = target.parentElement

    parent.insertBefore(input, ref)


}

function update(elem) {
    console.log("we are here")
    var target = elem.target
    var x = target.previousSibling.previousSibling


    var input = document.createElement("p")
    input.textContent = x.value
    target.textContent = "Edit Task"
    x.remove()

    target.removeEventListener("click",update)
    target.addEventListener("click", edit)
    var ref = target.previousSibling
    var parent = target.parentElement

    parent.insertBefore(input, ref)


}