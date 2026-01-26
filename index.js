import { sweetAlert3 } from "./Data/data.js";

// Account Name Functionality
const accountName = () => {
    let accountP = document.getElementsByClassName("account-p")[1];
    let dropDownDiv = document.getElementsByClassName("sn-navbar__dropdown-menu")[0];
    let loggedInUserEmail = JSON.parse(localStorage.getItem("loggedInUser"));
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
            localStorage.setItem("User", JSON.stringify(false))
        })
    }
}
accountName();

// Add To Cart Functionality
const addToCart = (cartBtn) => {
    const cartArray = JSON.parse(localStorage.getItem("Cart")) || []
    let userValue = JSON.parse(localStorage.getItem("User"))
    let cartNum = document.getElementsByClassName("cart-number")[0]
    cartNum.style.display = "block"                                                 

    if (!userValue) {
        sweetAlert3("error", "Login Required!!!", "Please Log In First to Add Products in the Cart")
        return
    }

    let productId = cartBtn.dataset.productId
    console.log(productId)



}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cartBtn")) {
        addToCart(event.target)
    }
})