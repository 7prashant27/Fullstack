var alldata = []
var counterForTable = 0
var activePage = 1
var totalPage = 1
var totalItem = 1
var perPage = 5
var srNo=1
var current_array

window.addEventListener("load", add)

function add() {
    var form = document.getElementById("tkt")
    form.addEventListener("submit", createData)
    var search = document.getElementById("search")
    search.addEventListener("click", filter)
    var date = document.getElementById("date")
    var x = Date().split(" ")
    x = x.slice(0, 5)
    date.placeholder = x.join(" ")
    var ul = document.querySelector("#pagination")
    ul.addEventListener("click",handlePageChange)
}


// constructor for card object

function Ticket(no,issues, Discription, date) {
    this.SrNo = no
    this.issues = issues
    this.Discription = Discription
    this.date = date
}

// function for creating card and pushing to alldata array

function createData(elem) {
    elem.preventDefault()
    var issue_elem = document.getElementById("issues")
    var text_elem = document.getElementById("textarea")
    var date_elem = document.getElementById("date")

    var issue = issue_elem.value
    var text = text_elem.value
    var date = date_elem.placeholder

    issue_elem.value = "none"
    text_elem.value = ""
    date_elem.value = ""

    if (issue == "none") {
        alert("Please select a issue")
        return
    }

    var data = new Ticket(srNo,issue, text, date)
    srNo++
    alldata.push(data)

    totalItem = alldata.length
    totalPage = Math.ceil(totalItem/perPage)
    activePage = 1
    createPagination()
    renderDom()
    current_array = alldata
    createTBody(current_array,activePage)
}



function renderDom() {

    var target = document.querySelector("#cont")

    if (counterForTable === 0) {
        var table = document.createElement("table")
        table.setAttribute("class", "table")
        var thead = document.createElement("thead")
        thead.setAttribute("class", "thead-dark")
        var thead_tr = document.createElement("tr")
        var thead_th_text = ["S.no", "issues", "description", "date"]
        for (var i = 0; i < 4; i++) {
            var th = document.createElement("th")
            th.setAttribute("scope", "col")
            th.textContent = thead_th_text[i]
            thead_tr.append(th)
        }
        thead.append(thead_tr)
        table.append(thead)
        target.append(table)
        counterForTable++
    }

}

function createTBody(arr,start) {
    var clear = document.getElementById("tableBody")||0
    if(clear != 0){
        clear.remove()
    }
    var target = document.querySelector(".table")
    var tbody = document.createElement("tbody")
    tbody.setAttribute("id", "tableBody")

    var x
    var end 
    if(start == 1){
        x = 0
        end = 5
    }
    else{
     x = (start*5)-5
     end = start*5
    }

    if(activePage == totalPage){
        end = arr.length
    }
    console.log(x,end)
    for (var i = x; i < end; i++) {
        console.log(arr[i])
        var tbody_tr = document.createElement("tr")
        for (var key in arr[i]) {
            var th = document.createElement("th")
            if (key == "SrNo") {
                th.setAttribute("scope", "row")
            }
            th.textContent = arr[i][key]
            tbody_tr.append(th)
        }
        tbody.append(tbody_tr)
    }
        target.append(tbody)
}


function handlePageChange(){
    if(!event.target.name){
        return
    }
    var value = Number(event.target.name)
    activePage = activePage + value
    if (activePage < 1){
        activePage = 1
    }
    if(activePage > totalPage){
        activePage = totalPage
    }
    createPagination()
    createTBody(current_array,activePage)

}

function createPagination() {

    var ul = document.querySelector("#pagination")
    ul.innerHTML = ""
    var fragment = document.createDocumentFragment()
    var prev = createPageButton("previous", activePage === 1?true:false , false, -1)
    fragment.append(prev)

    for (var i = 1; i <= totalPage; i++) {
        var page = createPageButton(i, false, activePage === i ? true : false, i-activePage)
        fragment.append(page)
    }

    if (activePage !== totalPage) {
        var next = createPageButton("Next", false, false, 1)
        fragment.append(next)
    }

    ul.append(fragment)
}

function createPageButton(text, isDisabled, isActive,name) {

    var cls;
    var pageItem = document.createElement("li")
    cls = isDisabled ? "page-item disabled" : isActive ? "page-item active" : "page-item"
    pageItem.setAttribute("class", cls)

    var pagelink = document.createElement("a")
    pagelink.setAttribute("class", "page-link")
    pagelink.textContent = text
    pagelink.name = name
    pageItem.append(pagelink)

    return (pageItem)
}

// filter function 

function filter(){
    var arr

    var issue_elem = document.getElementById("filterRef")

    var issue = issue_elem.value

    issue_elem.value = "none"

    if (issue == "none") {
        alert("Please select a issue")
        return
    }

    console.log(issue)
    arr = alldata.filter(function(elem){return (elem.issues == issue)})

    if(arr.length !== 0){
        activePage = 1
    totalItem = arr.length
    totalPage = Math.ceil(totalItem/perPage)
    current_array = arr
    createTBody(current_array,activePage)
    createPagination()
    }
    else {
        alert("No Record Found")
    }
    
}