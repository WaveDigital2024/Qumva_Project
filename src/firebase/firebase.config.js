// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUMxzUQo95-eYIgP4II_09anskNguGlI",
  authDomain: "qumva-official.firebaseapp.com",
  projectId: "qumva-official",
  storageBucket: "qumva-official.appspot.com",
  messagingSenderId: "758630525455",
  appId: "1:758630525455:web:8b6fe3e31ab9606258917a",
  measurementId: "G-38PMCSTKKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
