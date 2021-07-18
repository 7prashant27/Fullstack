window.addEventListener("load" , add)

function add(){
    var btn = document.getElementById("search")
    btn.addEventListener("click" , search)
}

function search(){

    var input=document.getElementById("keyword").value
    var option=document.getElementById("option").value
    var sort=document.getElementById("sort").value
    console.log(option,sort)
    


    
    var xhr = new XMLHttpRequest()

    xhr.open("GET","https://api.github.com/search/repositories?q="+input+"&sort="+option+"&order="+sort)

    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")

    xhr.send()

    xhr.onload = function(){
        var x = JSON.parse(this.response)
        if (x.incomplete_results == false){
            console.log(x.items)
            renderDom(x.items)

        }
    }

}

function renderDom(arr){
    var div = document.createElement("div")
    var ol = document.createElement("ol")
    for (var i = 0 ; i < arr.length ; i++){
        var li = document.createElement("li")
        var li1 = document.createElement("p")
            li1.textContent = `language : ${arr[i].language}`
            li2 = document.createElement("a")
            li2.setAttribute("href", arr[i].html_url)
            li2.textContent = `link to repo : ${arr[i].html_url}`
            li3 = document.createElement("p")
            li3.textContent=`description : ${arr[i].description}`
            li.append(li1,li2,li3)
            ol.append(li)
    }
    div.append(ol)
    var x = document.getElementById("cont")
    x.innerHTML = ""
    x.append(div)
}

