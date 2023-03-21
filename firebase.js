// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWb1X18V3AV2l2HKl5st7zLI76ygNkHMY",
  authDomain: "createstyle-a4228.firebaseapp.com",
  projectId: "createstyle-a4228",
  storageBucket: "createstyle-a4228.appspot.com",
  messagingSenderId: "447186607126",
  appId: "1:447186607126:web:3997ed9963f11b2ea2a937",
  measurementId: "G-9045XM46T3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    const app = firebase.initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};  