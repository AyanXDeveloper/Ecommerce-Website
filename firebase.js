import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAk2Io6r-Ln6e5fk8ZF0VgUDd8IXbC9W0Y",
    authDomain: "e-commerce-project-ayan.firebaseapp.com",
    projectId: "e-commerce-project-ayan",
    storageBucket: "e-commerce-project-ayan.firebasestorage.app",
    messagingSenderId: "797752125089",
    appId: "1:797752125089:web:2a3d4097efc9e0d1b632e0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const user = auth.currentUser;

// Sign Up Authentication Functionality
const signUpAuth = (firstName, SurName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('%cfirebase.js:21 user', 'color: #007acc;', user);

            // Store user details in Firestore
            userDetails(user.uid, {
                name: firstName + " " + SurName,
                email: email,
                password: password,
                description: "No Description Added"
            });
            console.log("User Details Added to Firestore")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

// Sign In Authentication Functionality
const signInAuth = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('%cfirebase.js:38 user', 'color: #007acc;', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

// Getting Current User Details
const currentUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
            console.log("user login howa wa ha")
        } else {
            console.log("user login nahi howa wa ha")
        }
    });
}

// Sign Out Functionality
const signOutUser = () => {
    signOut(auth).then(() => {
        console.log("User signed out successfully");
    }).catch((error) => {
        console.log(error.code)
        console.log(error.message)
    });
}

// Adding User Details to Firestore Database
const userDetails = async (userId, userDetail) => {
    try {
        await setDoc(doc(db, "userDetails", userId), userDetail);
        console.log("User Details Added Successfully");
    } catch (error) {
        console.log(error)
    }
}

// Get Single User Details
const singleUser = async (userId) => {
    const docRef = doc(db, "userDetails", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
}

// Get Multiple Users Details
const multipleUsers = async () => {
    let userArr = []
    const q = query(collection(db, "userDetails"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        userArr.push({
            ...doc.data(),
            id: doc.id
        })
        console.log(userArr);
    });
    return userArr;
}

// Delete User Functionality
const deleteUserFirestore = async (userId) => {
    try {
        await deleteDoc(doc(db, "userDetails", userId));

        deleteUser(user)
            .then(() => {
                console.log("user deleted successfully ==>");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    } catch (error) {
        console.log(error.code);
        console.log(error.message);
    }
}

export { signInAuth, signUpAuth, currentUser, signOutUser, userDetails, singleUser, multipleUsers, deleteUserFirestore }