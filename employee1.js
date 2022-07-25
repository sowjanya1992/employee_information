let userNameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let phoneNumberEl = document.getElementById("phoneNumber");
let genderEl = document.getElementById("gender")
let languageEl = document.getElementById("language");
let myFormEl = document.getElementById("myForm")


let formData = {
  uName:'',
  email:'',
  password:'',
  phoneNumber:'',
  gender:'',
  language:''
}

userNameEl.addEventListener("change",function(event){
  formData.uName = event.target.value
})

emailEl.addEventListener("change",function(event){
  formData.email = event.target.value
})

passwordEl.addEventListener("change",function(event){
  formData.password = event.target.value
})

phoneNumberEl.addEventListener("change",function(event){
  formData.phoneNumber = event.target.value
})

genderEl.addEventListener("change",function(event){
  formData.gender = event.target.value
})

languageEl.addEventListener("change",function(event){
  formData.language = event.target.value
})


function submitHandler(formData){
  console.log(formData)
}

myFormEl.addEventListener("submit",function(event){
  event.preventDefault()
  submitHandler(formData)
})



//function for form varification
function formValidation() {
    console.log("form validation code");
//   // checking length of name
  if (userName.value.length < 2 || userName.value.length > 20) {
     alert("Name length should be more than 2 and less than 21 charaters");
     userName.focus();
    return false;
    
 }
//   // checking email format
   if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
     alert("Please enter a valid email!");
    email.focus();
   return false;
  }
//   // checking password character pattern
  if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
    password.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
   phoneNumber.focus();
    return false;
  }
//   // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  // checking language
   if (language.value === "") {
    alert("Please select your language!")
    return false;
   }

  return true;

