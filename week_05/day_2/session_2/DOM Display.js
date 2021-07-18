
//adding EventListener
var form = document.getElementById("form")
form.addEventListener("submit", display)

// Display Function
var tablecounter = 0
function display(event){
    event.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var science = document.getElementById("science").value
    var english = document.getElementById("english").value
    var math = document.getElementById("math").value
    //console.log(name,age,science,english,math)
    
    if (name == ""){
        alert("Add Student Name")
    }
    else{
        if (tablecounter < 1){
            createtable()
        }
        tablecounter++
        addrow(name,age,science,english,math)
    }
}

// table creation

function createtable(){
    var target = document.getElementById("cont")
    var table = document.createElement("table")
    table.setAttribute("id","table")
    table.setAttribute("border", "2px")
    var tablehead = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = "Student Name"
    var td2 = document.createElement("td")
    td2.textContent = "Student Age"
    var td3 = document.createElement("td")
    td3.textContent = "Science Marks"
    var td4 = document.createElement("td")
    td4.textContent = "English Marks"
    var td5 = document.createElement("td")
    td5.textContent = "Mathematics Marks"
    var td6 = document.createElement("td")
    td6.textContent = "Total Marks"
    target.append(table)
    table.append(tablehead)
    tablehead.append(td1,td2,td3,td4,td5,td6)



    // creating ascending button

    var ascending = document.createElement("button")
    ascending.setAttribute("id", "ascending")
    ascending.textContent = "Ascending "
    ascending.addEventListener("click", ascendingsort)


    // creating descending button

    var descending = document.createElement("button")
    descending.setAttribute("id", "descending")
    descending.textContent = "descending "
    descending.addEventListener("click", descendingsort)

    target.append(ascending, descending)
}



var allrow= {}
var rowcounter = 1

// adding row to table

function addrow(name,age,science,english,math){
    var total = Number(science)+Number(english)+Number(math)
    var table = document.getElementById("table")
    var row = document.createElement("tr")
    row.setAttribute("id","row"+rowcounter)
    var td1 = document.createElement("td")
    td1.textContent = name
    var td2 = document.createElement("td")
    td2.textContent = age
    var td3 = document.createElement("td")
    td3.textContent = science
    var td4 = document.createElement("td")
    td4.textContent = english
    var td5 = document.createElement("td")
    td5.textContent = math
    var td6 = document.createElement("td")
    td6.textContent = total
    row.append(td1,td2,td3,td4,td5,td6)
    table.append(row)
    //console.log(name,age,science,english,math)

    //making object key (row id) : value (Total)
    // for sorting
    allrow["row"+rowcounter] = total
    rowcounter++
}


function ascendingsort(){
    /*alltotal.sort(function(a,b){
        return a-b
    })
    console.log(alltotal)
    var table = document.getElementById("table")*/
} 

function descendingsort(){
    /*alltotal.sort(function(a,b){
        return b-a
    })
    var table = document.getElementById("table")*/
} 


