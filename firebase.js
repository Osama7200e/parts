// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2-eh6sLvD9iUd6vXcznB7MjhdZjdrY5w",
    authDomain: "parts-a51c8.firebaseapp.com",
    databaseURL: "https://parts-a51c8-default-rtdb.firebaseio.com/",
    projectId: "parts-a51c8",
    storageBucket: "parts-a51c8.firebasestorage.app",
    messagingSenderId: "503866486340",
    appId: "1:503866486340:web:fcc777e98414973ea55611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Export Firebase services
export { db, auth, getDatabase, ref, onValue, push };