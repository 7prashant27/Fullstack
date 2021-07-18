window.addEventListener("load", diaplay)

var x = document.getElementById("back")
x.addEventListener("click", back)

function diaplay() {
    var name = document.getElementById("email")
    var token = document.getElementById("token")
    var data = JSON.parse(localStorage.getItem("user"))
    name.textContent = "id : " + data.id
    token.textContent = "token : " + data.token
}

function back() {
    window.location.replace("register.html")
    localStorage.removeItem("user")
}
