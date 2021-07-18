window.addEventListener("load", add)
var Enter = document.querySelector("#Enter")
Enter.addEventListener("click" , update)



function add(){
    
    var btn = document.querySelectorAll(".btn")
    console.log(btn)
    
    
    for (var i = 0 ; i <=9 ; i++){

        btn[i].addEventListener("click" , reg_input)
    }

}


var input = ""




function reg_input(elem){

    var x = elem.target.textContent
    input += x 
    //console.log(input)
    display(input)
}

function display(input){
    var target = document.querySelector("#display")
    target.textContent = input
    
}

function update(){
    var minbox = document.querySelector("#min_display")
    var maxbox = document.querySelector("#max_display")
    var min = minbox.textContent
    var max = maxbox.textContent
    var query = Number(input)

    if (Number(min) > query){
        minbox.textContent = query
    }
    else if (Number(max) < query){
        maxbox.textContent = query
    }

    input = ""
    display(input)
}