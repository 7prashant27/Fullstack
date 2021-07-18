
const verify_ifsc = async () => {
    let code = document.getElementById("ifsc_input").value
    let target = document.getElementById("display_ifsc")

    if (code != "") {
        let url = "https://ifsc.razorpay.com/" + code

        try {

            fetch(url)

                .then(response => {

                    if (!response.ok) {
                        throw (Error(`Status : ${response.status}  statusText : ${response.statusText}`))
                    }

                    return response.json()
                })
                .then(data => {
                    target.innerHTML = `<p>Bank Name : ${data.BANK}</p>
                                        <p>Branch Name : ${data.BRANCH}</p>
                                        <p>IFSC Code : ${data.IFSC}</p>
                                        <p>Address : ${data.ADDRESS}</p>
                                        <p>City : ${data.CITY}</p>
                                        <p>District : ${data.DISTRICT}</p>
                                        <p>State : ${data.STATE}</p>
                                        <p>Contact No : ${data.CONTACT}</p>`
                })
                .catch((err) => {
                    target.setAttribute("class", "container m-4 text-danger")
                    target.textContent = err
                    setTimeout(function () {
                        target.setAttribute("class", "container m-4 text-dark")
                        target.textContent = ""
                    }, 3000)
                })
        } 
        catch (err) { 
            console.log(err) 
        }
    }
    else {
        target.setAttribute("class", "container m-4 text-danger")
        target.textContent = "Enter IFSC Code"
        setTimeout(function () {
            target.setAttribute("class", "container m-4 text-dark")
            target.textContent = ""
        }, 3000)
    }
}

const display_token = () => {
    let target = document.getElementById("display_token")
    let query = window.location.search
    if (query != "") {
        let url = new URLSearchParams(query)
        target.textContent = `Token : ${url.get("token")}`
    }

}





const add = () => {

    display_token()
    let log_form = document.getElementById("verify_ifsc")
    log_form.addEventListener("click", verify_ifsc)


}


window.addEventListener("load", add)
