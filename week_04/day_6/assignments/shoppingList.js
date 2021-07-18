var btn = document.getElementById("add")
btn.addEventListener("click", add)

var shopping_list = []


function add() {
    var name = document.getElementById("name").value
    var quanity = document.getElementById("quanity").value

    var item = {
        name: name,
        quanity: quanity
    }
    shopping_list.push(item)

    

    render()

}

function remove(elem){
    var index = Number(elem.target.name)
    console.log(index)
    shopping_list = shopping_list.filter(function(a,i){ 
        return (i!== index)
    })

    render()
}



function render() {
    var target = document.getElementById("target")
        target.innerHTML = ""

        var cont = document.createElement("div")
        cont.setAttribute("id" , "cont")

    for (var i = 0; i < shopping_list.length; i++) {


        var item = shopping_list[i]


        var div = document.createElement("div")
        var p = document.createElement("p")
        var button1 = document.createElement("button")

        div.style.border = "1px solid black"
        
        p.textContent = "item : "+item.name+ " quanity : "+item.quanity 
  
        button1.textContent = "Remove"
        button1.addEventListener("click", remove)
        button1.setAttribute("name" , i)

        div.append(p,button1)
        cont.append(div)
        
    }
    target.append(div)
}

