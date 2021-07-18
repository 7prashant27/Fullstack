window.addEventListener("load", add)

function add() {
    var form = document.getElementById("form")
    form.addEventListener("submit", post)
}


function post(elem) {
    elem.preventDefault()

    var log = document.getElementById("log").value
    var pass = document.getElementById("pass").value

    var data = {
        "password": pass,
        "username": log
    }

    var payload = JSON.stringify(data)

    //console.log(payload)

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8080/auth/login")

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")

    xhr.send(payload)

    xhr.onload = function(){
    
    var res = JSON.parse(this.response)

    

    if(res.error == false){
        show(data,res.token)
    }
    else{alert(res.message)}
    }
}

function show(data,token){

    console.log(data)
    console.log(token)
    var xhr = new XMLHttpRequest()
    xhr.open("get" , "http://localhost:8080/user/"+data.username)

    xhr.setRequestHeader("Authorization", "Bearer "+token)

    xhr.send()

    xhr.onload = function(){
    
    var res = JSON.parse(this.response)

    console.log(res)
    if(this.status== 401){
        alert("Something went wrong")
    }
    else{change(res)}
    }
}

function change(res){
    var target = document.querySelector("body")
    target.innerHTML = ""
    var div = document.createElement("div")
    var p = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", back)
    btn.textContent = "back"
    var out=""
    for(key in res){
        out+= key+" : "+res[key]+"\n"
    }
    p.textContent = out
    div.append(p, btn)
    target.append(div)
}

function back(){
    window.location = "login.html"
}