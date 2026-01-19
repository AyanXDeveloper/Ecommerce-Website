import { fragrance, cardLogic } from "./Data/data.js";

// Executive Range Cards
cardLogic("executiveRange", "executiveRange", fragrance.executiveRange.items);

// Sensory Range Cards
cardLogic("sensoryRange", "sensoryRange", fragrance.sensoryRange.items);

// Poetic Range Cards
cardLogic("poeticRange", "poeticRange", fragrance.poeticRange.items);

// Summer Deals Cards
cardLogic("summerDeals", "summerDeals", fragrance.summerDeals.items);

// OUD Cards
cardLogic("oud", "oud", fragrance.oud.items);

// Ahl E Oud Cards
cardLogic("ahl_E_Oud", "ahl_E_Oud", fragrance.ahl_E_Oud.items);

// Account Name Functionality
let accountName = () => {
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

        dropDownDiv.innerHTML = `<li><a id="logOut" href="./forms/login.html">Log Out</a></li>`;

        let logOut = document.getElementById("logOut")
        logOut.addEventListener("click", () => {
            localStorage.setItem("loggedInUser", JSON.stringify(false))
        })
    }
}
accountName();