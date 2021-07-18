class data_Arr {
    constructor() {

        Object.defineProperty(this, "length", {
            value: 0,
            enumerable: false,
            writable: true
        })

    }

    addStudentDetails(student_name, marks_object) {
        this[this.length] = {
            id: this.length + 1,
            student_name: student_name,
            marks: marks_object
        }
        this.length++
        return (this.length)
    }

    getStudentDetails(student_name) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].student_name == student_name) {
                return this[i]
            }
        }
    }

    getClassAverage() {
        let avg = 0
        for (let i = 0; i < this.length; i++) {
            avg += (this[i].marks.english + this[i].marks.science + this[i].marks.mathematics)/3
                
            }

            return avg/this.length+1
        }

    getTopStudent() {
        let total = 0
        let index = 0
        for (let i = 0; i < this.length; i++) {
            if ((this[i].marks.english + this[i].marks.science + this[i].marks.mathematics) > total) {
                total = this[i].marks.english + this[i].marks.science + this[i].marks.mathematics
                index = i
            }
        }
        return this[index]
    }
}



let student_data

const handle_form_submit = () => {
    event.preventDefault()
    let studentName = document.getElementById("student_name").value
    let eng_marks = Number(document.getElementById("marks_engilsh").value)
    let sci_marks = Number(document.getElementById("marks_science").value)
    let math_marks = Number(document.getElementById("marks_maths").value)

        marks_object = {english:eng_marks,
                            science:sci_marks,
                            mathematics:math_marks}

        student_data.addStudentDetails(studentName, marks_object)

        update_select_elemet()
        console.log(studentName,marks_object)
        console.log(student_data)
    }

const search_top_student = () => {
    let top = student_data.getTopStudent()
    let target = document.getElementById("display_top")
    if(top != null){
        
    target.innerHTML = `<p class="h4">ID : ${top.id} <br>  Name : ${top.student_name}</p>
    <p>English Marks = ${top.marks.english}<br>
    Science Marks = ${top.marks.science}<br>
    Mathematics Marks = ${top.marks.mathematics}</p>`
    }
    else {target.innerHTML = `<p class="h5">No Data To Be Shown</p>`}
    
}

const handle_select_change = () => {
    let lbl = document.getElementById("select").value
    let target = document.getElementById("student_info")
    for(let i = 0 ; i < student_data.length; i++){
        if(lbl == student_data[i].student_name){
            target.innerHTML = `<p class="h5">ID : ${student_data[i].id} <br> Name : ${student_data[i].student_name}</p>
                                <p>English Marks = ${student_data[i].marks.english}<br>
                                    Science Marks = ${student_data[i].marks.science}<br>
                                    Mathematics Marks = ${student_data[i].marks.mathematics}</p>`
        }
    }
}

const update_select_elemet = () => {
    const target = document.getElementById("select")
    target.innerHTML = ""
    let opt1 = document.createElement("option")
    opt1.value = ""
    opt1.textContent = "Choose..."
    let fag = document.createDocumentFragment()
    fag.append(opt1)
    for(let i = 0 ; i < student_data.length; i++){
        let opt = document.createElement("option")
        opt.value = student_data[i].student_name
        opt.textContent = student_data[i].student_name
        fag.append(opt)
    }
    target.append(fag)
}

const get_avg = () => {
    let total = student_data.getClassAverage()
    if(total != null){
    let target = document.getElementById("display_avg")
    target.innerHTML = `<p class="h5">Class Average = ${total}<p>`}
}

const add = () => {
    student_data = new data_Arr()

    let submit = document.getElementById("submit_form")
    submit.addEventListener("submit", handle_form_submit)

    let search = document.getElementById("search_top_student")
    search.addEventListener("click", search_top_student)

    let avg = document.getElementById("get_avg")
    avg.addEventListener("click", get_avg)

    update_select_elemet()

    let select = document.getElementById("select")
    select.addEventListener("change", handle_select_change)

}

window.addEventListener("DOMContentLoaded", add)



