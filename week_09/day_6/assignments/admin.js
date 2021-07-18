window.addEventListener("load" , addrecord)

let x = document.getElementById("log_out")
x.addEventListener("click" , logout)

function logout(){
    alert(`You are logged out`)
    window.location.replace("index.html")
}



let auth_customer_arr = [
    {
        user: "ritesh@gmail.com",
        admin: "adminritesh@abc.com",
        pass: "12345"
    },
    {
        user: "ram@gmail.com",
        admin: "adminram@abc.com",
        pass: "5500"
    },
    {
        user: "ravi",
        pass: "87898"
    },
    {
        user: "qwerty",
        pass: "55500"
    },
]

function addrecord() {
    let target = document.getElementById("all_user")

    let div = document.createElement("div")

    for (let i = 0  ; i <  auth_customer_arr.length; i++){
        let x = auth_customer_arr[i]
        let h4 = document.createElement("h4")
        h4.setAttribute("name", x.user)
        h4.textContent = x.user
        h4.addEventListener("click" , display_record)
        div.append(h4)
    }

    target.append(div)
}

function display_record(elem){
    let target = document.getElementById("history")
    target.innerHTML = ""
    let request = elem.target.textContent
    //console.log(elem.target.textContent)
    let data = localStorage.getItem("record")
    data = JSON.parse(data)


    let div = document.createElement("div")

    for (let i = 0 ; i < data.length; i++){
        let x = data[i]
        //console.log(x)
        if (request == x.user){
            let p = document.createElement("p")
            p.textContent = x.time
            div.append(p)
        }
    }
    target.append(div)
}