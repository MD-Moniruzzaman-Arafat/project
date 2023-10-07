import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCyauIgz5i4BpsfpV5EZos75pDU9-Of90",
    authDomain: "module-53-assignment-9.firebaseapp.com",
    projectId: "module-53-assignment-9",
    storageBucket: "module-53-assignment-9.appspot.com",
    messagingSenderId: "675816153944",
    appId: "1:675816153944:web:6ba06322ff62a58bed7b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;