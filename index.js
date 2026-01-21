import { sweetAlert3 } from "./Data/data.js";

// Account Name Functionality
const accountName = () => {
    let accountP = document.getElementsByClassName("account-p")[1];
    let dropDownDiv = document.getElementsByClassName("sn-navbar__dropdown-menu")[0];
    let loggedInUserEmail = JSON.parse(localStorage.getItem("loggedInUser"))[1];
    let usersData = JSON.parse(localStorage.getItem("Data")) || [];

    let firstChar = (sUName) => {
        return sUName.charAt(0).toUpperCase();
    }

    if (loggedInUserEmail && typeof loggedInUserEmail === 'string') {
        // Find the user object that matches the logged-in email
        let loggedInUser = usersData.find(user => user.email === loggedInUserEmail);

        if (loggedInUser) {
            accountP.innerText = `${loggedInUser.fName} ${firstChar(loggedInUser.sName)}.`;
        }

        dropDownDiv.innerHTML = `<li><a id="logOut" href="../forms/login.html">Log Out</a></li>`;

        let logOut = document.getElementById("logOut")
        logOut.addEventListener("click", () => {
            localStorage.setItem("loggedInUser", JSON.stringify(false))
        })
    }
}
accountName();

// Add To Cart Functionality
const addToCart = (cartBtn) => {
    let userValue = JSON.parse(localStorage.getItem("loggedInUser"))[0]

    if(userValue === undefined) {
        sweetAlert3("error", "Login Required!!!", "Please Log In First to Add Products in the Cart")
    } 
}

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("cartBtn")){
        addToCart(event.target)
    }
})