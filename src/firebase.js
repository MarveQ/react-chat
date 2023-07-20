// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth' //ауторизация

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfdkdC8t9UnpNhX47zPO_E0FMKls27PVQ",
    authDomain: "react-chat-5f634.firebaseapp.com",
    projectId: "react-chat-5f634",
    storageBucket: "react-chat-5f634.appspot.com",
    messagingSenderId: "195117716970",
    appId: "1:195117716970:web:850ddd09dbe8a5e26d4e93",
    measurementId: "G-46Z33EWE11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// fireStore

export const auth = getAuth(app); //експорт ауторизации

//db