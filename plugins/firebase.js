// Import the functions you need from the SDKs you need
// import { indexOf } from "core-js/core/array";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtSz4xQHfOI7WVh1J282iImkUrAR1ofSQ",
  authDomain: "nuxt-spa-book-app-fd74f.firebaseapp.com",
  projectId: "nuxt-spa-book-app-fd74f",
  storageBucket: "nuxt-spa-book-app-fd74f.appspot.com",
  messagingSenderId: "262099705109",
  appId: "1:262099705109:web:acc41b79c0fe5374df1d1c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default(context, inject) => {
  inject('firebase', firebaseApp)
}