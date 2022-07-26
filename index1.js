let fnameEl = document.getElementById("fname")
let lnameEl = document.getElementById("lname")
let emailEl = document.getElementById("email")
let statusEl = document.getElementById("status")
let experienceEl = document.getElementById("experience")
let qualificationEl = document.getElementById("qualification")
let genderEl = document.getElementById("gender")


let myFormEl = document.getElementById("myForm")

let empData = {
    firstname:'',
    lastname:'',
    email:'',
    status:'',
    experience:'',
    qualification:'',
    gender:''
}

fnameEl.addEventListener("change",function(event){
    empData.firstname = event.target.value
})

lnameEl.addEventListener("change",function(event){
    empData.lastname = event.target.value
})

emailEl.addEventListener("change",function(event){
    empData.email = event.target.value
})

statusEl.addEventListener("change",function(event){
    empData.status = event.target.value
})

experienceEl.addEventListener("change",function(event){
    empData.experience = event.target.value
})

qualificationEl.addEventListener("change",function(event){
    empData.qualification = event.target.value
})

genderEl.addEventListener("change",function(event){
    empData.gender = event.target.value
})

function submitHandler(empData){
    console.log(empData)
    let x = JSON.stringify(empData)
    localStorage.setItem("Data",x)
}


myFormEl.addEventListener("submit",function(event){
    event.preventDefault()
    submitHandler(empData)
})

