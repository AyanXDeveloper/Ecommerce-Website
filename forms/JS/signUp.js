import { eyeToggle, passwordGenerator } from "../../Data/data.js"

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
        Swal.fire({
            icon: "error",
            title: "Enter Your Full Name!!!",
            text: "Please Enter Your Full Name!",
        });
        return
    }

    if (firstName.trim() === "") missing.push("First Name")
    if (surName.trim() === "") missing.push("Sur Name")

    if (missing.length > 0) {
        Swal.fire({
            icon: "error",
            title: "Enter Your Full Name Correctly",
            text: "Please Enter Your " + missing.join(", ")
        });
        return;
    }


    if (email === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Email!!!",
            text: "Please Enter Your Email!",
        });
        return
    }

    if (!emailRegEx.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Enter Correct Email!!!",
            text: "Please Enter Your Email Correctly!",
        });
        return
    }

    if (password === "") {
        Swal.fire({
            icon: "error",
            title: "Enter Your Password!!!",
            text: "Please Enter Your Password!",
        });
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
            Swal.fire({
                icon: "error",
                title: "User Already Registered",
                text: "Log In",
                footer: '<a class="forgot-link-2" href="../forms/login.html">Log In</a>'
            });
            break
        }
    }

    if (user) {
        Swal.fire({
            icon: "success",
            title: "Succesfully Registered In!!!",
            text: "Congrats!!! You Have Succesfully Registered",
        });

        let data = {
            fName: firstName,
            sName: surName,
            email: email,
            pass: password,
        }

        userLoggedIn = true;
        localStorage.setItem("loggedInUser", JSON.stringify(userLoggedIn));

        console.log(data)

        let usersArr = JSON.parse(localStorage.getItem("Data")) || [];
        usersArr.push(data)
        localStorage.setItem("Data", JSON.stringify(usersArr))

        form.reset()

        setTimeout(function () {
            window.location.href = "../index.html"
        }, 3000)
    }
}
btn.addEventListener("click", signUp)
