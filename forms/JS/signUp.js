import { eyeToggle, passwordGenerator, sweetAlert1, sweetAlert2, sweetAlert3 } from "../../Data/data.js"
import { signUpAuth } from "../../firebase.js"

// Toggle Eye Functionality
eyeToggle()

// Password Generator Functionality
passwordGenerator()

// Sign Up Functionality
let btn = document.getElementsByClassName("signup-btn")[0]
let signUp = () => {
    let form = document.getElementById("form")
    let firstName = document.getElementById("firstName").value
    let surName = document.getElementById("surName").value
    let email = document.getElementById("email").value.trim()
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let password = document.getElementById("password").value
    let nunRegEx = /(?=.*\d)/
    let speRegEx = /(?=.*[!@#$%^&()`~\-_'+=,.?":{}|<>])/
    let missing = [];
    let userLoggedIn = false;

    if (firstName === "" && surName === "") {
        sweetAlert2("error", "Enter Your Full Name!!!", "Please Enter Your Full Name!")
        return
    }

    if (firstName.trim() === "") missing.push("First Name")
    if (surName.trim() === "") missing.push("Sur Name")

    if (missing.length > 0) {
        sweetAlert2("error", "Enter Your Full Name Correctly", "Please Enter Your " + missing.join(", "))
        return;
    }

    if (email === "") {
        sweetAlert2("error", "Enter Your Email!!!", "Please Enter Your Email!")
        return
    }

    if (!emailRegEx.test(email)) {
        sweetAlert2("error", "Enter Correct Email!!!", "Please Enter Your Email Correctly!")
        return
    }

    if (password === "") {
        sweetAlert2("error", "Enter Your Password!!!", "Please Enter Your Password!")
        return
    }

    if (password.length < 9) missing.push("Atleast 9 Characters")
    if (!nunRegEx.test(password)) missing.push("Atleast Enter one number")
    if (!speRegEx.test(password)) missing.push("Atleast Enter one Special Character")

    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Enter a Stronger PIN!!!",
            html: "Please enter:<br><br>" + missing.join("<br>") + " in your Password",
        });
        return
    }

    let user = true;
    let usersData = JSON.parse(localStorage.getItem("Data")) || []

    for (let i = 0; i < usersData.length; i++) {
        if (email === usersData[i].email) {
            user = false
            sweetAlert3("error", "User Already Registered", "Log In")
            break
        }
    }

    if (user) {
        sweetAlert2("success", "Succesfully Registered In!!!", "Congrats!!! You Have Succesfully Registered")

        signUpAuth(firstName, surName, email, password)

        let data = {
            fName: firstName,
            sName: surName,
            email: email,
            pass: password,
        }

        localStorage.setItem("loggedInUser", JSON.stringify(email));
        localStorage.setItem("User", JSON.stringify(user));

        console.log(data)

        let usersArr = JSON.parse(localStorage.getItem("Data")) || [];
        usersArr.push(data)
        localStorage.setItem("Data", JSON.stringify(usersArr))

        form.reset()


        setTimeout(function () {
            window.location.href = "../index.html"
        },5000)
    }

}
btn.addEventListener("click", signUp)