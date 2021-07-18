window.addEventListener("load", add)

function add() {
    var submit = document.getElementById("submit")
    submit.addEventListener("click", post)
}


function post() {

    var user_elem = document.getElementById("userid")
    var pass_elem = document.getElementById("pass")

    user = user_elem.value
    pass = pass_elem.value

    if (user != "" && pass != "") {

        user_elem.value = ""
        pass_elem.value = ""

        var payload = {
            email: user,
            password: pass
        }

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://reqres.in/api/register")

        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")

        xhr.send(JSON.stringify(payload))

        xhr.onload = function () {
            if (this.status == 200) {
                localStorage.setItem("user", this.response)
                window.location.replace("dashboard.html")
            }
            else {
                var x = document.getElementById("error")
                x.textContent = ""
                x.textContent = "wrong username or password\n" + "error code is : " + this.status

                setTimeout(function(){
                    x.textContent=""
                },3000)
            }
        }
        xhr.onerror = function () {
            alert("something went wrong")
        }
    }
    else{
        var x = document.getElementById("error")
        x.textContent = "Fill all the fields"
        
        setTimeout(function(){
            x.textContent=""
        },3000)
    }
}