import { singleUser, multipleUsers, userDetails, deleteUserFirestore } from "./firebase.js";
import { uploadImage } from "./cloudinary.js";

const singleUserBtn = document.getElementById("singleUserBtn");
const allUserBtn = document.getElementById("allUserBtn");
const mainDiv = document.getElementById("mainDiv")

let fullName = document.getElementById("name");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let formFile = document.getElementById("formFile");
let description = document.getElementById("floatingTextarea");
let saveBtn = document.getElementById("saveBtn");

let id = ""

const displayUser = async () => {
    const allUsers = await multipleUsers()
    // console.log(allUsers)

    let mainHTML = allUsers.map(user => {
        console.log(user.image)
        return `   <div data-id=${user.id} class="card" style="width: 20rem;">
  <img src=${user.image || "https://placehold.co/600x400"} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.description || "No Description Added yet!"}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.email}</li>
    <li class="list-group-item"><b>Password: </b>${user.password}</li>
    <li class="list-group-item">,<b>UID: </b>${user.id}</li>
  </ul>
  <div class="card-body d-flex justify-content-evenly">
    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-outline-primary">Update User</button>
    <button class="btn btn-outline-danger" class="card-link">Delete User</button>
  </div>
</div>`
    })
    mainDiv.innerHTML = mainHTML.join("")
}
displayUser()

const saveChanges = async () => {

    console.log(formFile.files[0], "Input File ==>")

    const formData = new FormData();

    let file = formFile.files[0]
    formData.append('file', file);
    formData.append('upload_preset', 'Unsigned Preset');

    let secure_url = await uploadImage(formData)

    console.log(secure_url)

    userDetails(id, {
        name: fullName.value,
        email: email.value,
        password: password.value,
        description: description.value,
        image: secure_url
    })
    console.log("Saving user changes for ID:", id);
}

document.addEventListener("click", async (event) => {

    if (event.target.innerText == "Update User") {
        id = event.target.parentElement.parentElement.dataset.id;
        let userDetail = await singleUser(id);

        console.log(userDetail);

        fullName.value = userDetail.name;
        email.value = userDetail.email;
        password.value = userDetail.password;
        description.value = userDetail?.description || "No Description added";
    }

    if (event.target.innerText == "Delete User") {
        id = event.target.parentElement.parentElement.dataset.id;
        deleteUserFirestore(id);
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }

})

singleUserBtn.addEventListener("click", () => singleUser("zYLpskbpAYX9pyw1Aaf8aZHvlbj1"))
allUserBtn.addEventListener("click", () => multipleUsers())
saveBtn.addEventListener("click", async () => {
    await saveChanges()
    setTimeout(() => {
        window.location.reload()
    }, 3000)

})