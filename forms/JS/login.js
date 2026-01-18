import { eyeToggle } from "../../Data/data.js"

// Toggle Eye Functionality
eyeToggle()

// Login Functionality

let btn = document.getElementsByClassName("login-btn")[0]
let login = () => {
    let form = document.getElementById("form")
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let usersData = JSON.parse(localStorage.getItem("Data")) || []
    let userNameValue = JSON.parse(localStorage.getItem("loggedInUser"))
    let user = false
    let missing = []

    if (email === "" && password === "") {
        Swal.fire({
            icon: "error",
            title: "Fill in both the Fields!!!",
            text: "Please Fill in all the Fields!",
            footer: '<a class="forgot-link-2" href="../forms/Signup.html">Register your account</a>'
        });
        return
    }

    if (password === "") missing.push("Password")
    if (email === "") missing.push("Email")
    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Enter your " + missing.join() + "!!!",
            text: "Please Enter your: " + missing.join(),
            footer: '<a class="forgot-link-2" href="../forms/Signup.html">Register your account</a>'
        });
        return
    }

    for (let i = 0; i < usersData.length; i++) {
        // console.log(usersData[i].email)
        if (email === usersData[i].email && password === usersData[i].pass) {
            user = true
            Swal.fire({
                icon: "success",
                title: "Successfully Logged In",
                text: "You will be redirected shortly"
            });
            
            form.reset()

            userNameValue = true
            localStorage.setItem("loggedInUser", JSON.stringify(userNameValue))

            setTimeout(function () {
                window.location.href = "../index.html"
            }, 3000)
            break
        }
        if (email === usersData[i].email && password !== usersData[i].pass) {
            user = false
            Swal.fire({
                icon: "error",
                title: "Incorrect Password",
                text: "Please Enter correct Password",
                footer: '<a class="forgot-link-2" href="../forms/Signup.html">Register your account</a>'
            });
            break
        }
        if (email !== usersData[i].email && password === usersData[i].pass) {
            user = false
            Swal.fire({
                icon: "error",
                title: "Incorrect Email",
                text: "Please Enter correct Email",
                footer: '<a class="forgot-link-2" href="../forms/Signup.html">Register your account</a>'
            });
            break
        }

    }
    
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Please Enter correct Email and Password",
            footer: '<a class="forgot-link-2" href="../forms/Signup.html">Register your account</a>'
        });
    }
}
btn.addEventListener("click", (event) => {
    event.preventDefault()
    login()
})