let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
const submit_btn = document.getElementById("submit");
const form = document.getElementById("myform");
const user_error_msg = document.querySelector("#error1")
const error_msg = document.querySelector("#error")
const password_error_msg = document.querySelector("#error2")



form.addEventListener("submit", e => {
        e.preventDefault();

    if (username.value == ""){
        user_error_msg.innerHTML = "username field cannot be empty";
        // setTimeout(() => user_error_msg.remove(), 3000)
    }else{
        user_error_msg.innerHTML = "";
    }

    if (password.value == ""){
        password_error_msg.innerHTML = "password field cannot be empty";
        // setTimeout(() => password_error_msg.remove(), 3000);
    }else{
        password_error_msg.innerHTML = "";
    }


    if (username.value !== "" && password.value !== ""){
        error_msg.innerHTML = "Login successful";
        location.href = "login.html";
    }
















    })



function allClear(){
    document.getElementById("name").value = "" ;
    document.getElementById("email").value = "" ;
    document.getElementById("password").value = "" ;

}



