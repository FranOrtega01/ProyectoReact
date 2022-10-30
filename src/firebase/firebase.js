// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth} from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyC2dh_QNIdX-kb5qufAkqE7BPUZP1QsFmE",
authDomain: "proyecto-react-62e73.firebaseapp.com",
projectId: "proyecto-react-62e73",
storageBucket: "proyecto-react-62e73.appspot.com",
messagingSenderId: "62251517317",
appId: "1:62251517317:web:d2f808bb0a2c4d453bf0ec",
measurementId: "G-632FPT081S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const auth = getAuth(app);
export default app