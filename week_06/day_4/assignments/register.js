window.addEventListener("load", add)

function add() {
    var form = document.getElementById("form")
    form.addEventListener("submit", post)
}


function post(elem) {
    elem.preventDefault()
    var data = createUser()

    console.log(data)

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8080/auth/register")

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")

    xhr.send(JSON.stringify(data))

    xhr.onload = function(){
        var x = JSON.parse(this.response)
        if(x.error == true){
            alert(x.message)
        }
        else{
            alert(x.message)
            window.location = "login.html"}
    }

}

function User(name, email, password, username, mobile, description) {
    this.name = name
    this.email = email
    this.password = password
    this.username = username
    this.mobile = mobile
    this.description = description
}

function createUser() {
    var data = document.querySelectorAll(".input")
    var newUser = new User()
    var i = 0
    for (key in newUser) {
        if (data[i].value == "") {
            alert("fill all the fields")
            return
        }
        else if (newUser[key] == undefined) {
                newUser[key] = data[i].value
        }
        i++
    }
    return(newUser)
    
}