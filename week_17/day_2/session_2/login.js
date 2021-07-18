

const remove = (x) => {
    var elem = x
    setTimeout(function () {
        elem.textContent = ""
    }, 3000)

}

const auth_check = async () => {
    let email = document.getElementById("log_id").value
    let pass = document.getElementById("log_pass").value

    if (email != "" && pass != "") {

        let payload = {
            email: email,
            password: pass
        }

        payload = JSON.stringify(payload)

        try {
            let response = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload,
            })
                .then(response => {
                    if (!response.ok) {
                        throw (Error(`Status : ${response.status}  statusText : ${response.statusText}`))
                    }
                    return response.json()
                })
                .then(data => {
                    let params = new URLSearchParams()
                    params.append("token", data.token)
                    let url = "dashboard.html"
                    window.location.assign(url + "?" + params.toString())
                })
                .catch((err) => {
                    var log_error = document.getElementById("log_error")
                    log_error.textContent = err
                    remove(log_error)
                })
        }
        catch (err) {

            console.log(err)
        }

    }
    else {
        var log_error = document.getElementById("log_error")
        log_error.textContent = "Wrong Credincials / Fill All Fields "
        remove(log_error)
    }
}


const add = () => {
    let log_form = document.getElementById("log_submit")
    log_form.addEventListener("click", auth_check)
}


window.addEventListener("load", add)
