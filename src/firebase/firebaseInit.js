import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWaZTAbO5-eR5cYP587dyYgn85o5MEwn4",
    authDomain: "invoice-app-yt-adc14.firebaseapp.com",
    projectId: "invoice-app-yt-adc14",
    storageBucket: "invoice-app-yt-adc14.firebasestorage.app",
    messagingSenderId: "1028998960795",
    appId: "1:1028998960795:web:c92e4255de4f29bd42d83e"
  };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db ;