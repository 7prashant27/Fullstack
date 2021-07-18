window.addEventListener("load", add)

function add(){
    var sub = document.getElementById("select")
    sub.addEventListener("change" ,getData) 
}

function getData() {
    var value = document.getElementById("select").value

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "http://localhost:8080/codenames/"+value)
    xhr.send()
    xhr.onload = function() {
        console.log(this.response)
        var response = JSON.parse(this.response)
        display(response)
        console.log(response)
    }
}

    function display(response){


        var name = document.createElement("h1")
        name.textContent = response.os
        var codenames = response.codenames
        var cont = document.createElement("div")
        for (var i = 0 ; i < codenames.length; i++){
            var version = document.createElement("p")
            version.textContent = codenames[i].version
            //version.style.float = "left"
            var versionName = document.createElement("p")
            versionName.textContent = codenames[i].name
            cont.append(version,versionName)
        }


        var target = document.getElementById("cont")
        target.innerText = ""
        target.append(name,cont)

    }