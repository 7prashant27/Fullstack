var arr = []
var counter = 0
var btn = document.getElementById("btn")
btn.addEventListener("click", add)

function add() {

    for (var i = 1; i <= 81; i++) {
        var x = document.createElement("button")

        x.textContent = i
        x.setAttribute("id", "div" + i)
        x.setAttribute("class", "card")
        x.addEventListener("click", num)


        var position = document.querySelector("#cont")
        position.append(x)
        //console.log(x)
        arr.push("div" + i)
        //console.log(x)
        counter++
        if (counter == 1) {
            btn.removeEventListener("click", add)
        }

    }

}

function num(event) {
    var x = event.target.id
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            var h = document.getElementById("display")
            h.textContent = i + 1

        }
    }
}