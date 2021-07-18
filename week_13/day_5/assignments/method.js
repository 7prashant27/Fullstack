import $ from './jQuery.js'

window.onload=function(){
    var showBtn=document.getElementById("show")
    showBtn.addEventListener("click",show)

    var hideBtn=document.getElementById("hide")
    hideBtn.addEventListener("click",hide)
}
function show(){
    event.preventDefault()
let div=$("div")
div.show()
}
function hide(){
    event.preventDefault()
    let div=$("div")
    div.hide()
    }