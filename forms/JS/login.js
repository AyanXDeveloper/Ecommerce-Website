import { eyeToggle, sweetAlert1, sweetAlert2 } from "../../Data/data.js"
import { signInAuth } from "../../firebase.js"

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
        sweetAlert1("error", "Fill in both the Fields!!!", "Please Fill in all the Fields!")
        return
    }

    if (password === "") missing.push("Password")
    if (email === "") missing.push("Email")
    if (missing.length > 0) {
        sweetAlert1("error", "Enter your " + missing.join() + "!!!", "Please Enter your: " + missing.join())
        return
    }

    for (let item of usersData) {
        if (email === item.email && password === item.pass) {
            user = true
            sweetAlert2("success", "Successfully Logged In", "You will be redirected shortly")

            signInAuth(email, password)
 
            form.reset()

            localStorage.setItem("loggedInUser", JSON.stringify(email))
            localStorage.setItem("User", JSON.stringify(user))

            setTimeout(function () {
                window.location.href = "../index.html"
            }, 3000)
            return
        }
 
        if (email === item.email && password !== item.pass || email !== item.email && password === item.pass) {
            sweetAlert1("error", "Incorrect Credentials", "Please Enter correct Email or Password")
            return
        }
    }

    if (!user) {
        sweetAlert1("error", "Invalid Credentials", "Please Enter correct Email and Password")
    }
}
btn.addEventListener("click", (event) => {
    event.preventDefault()
    login()
})