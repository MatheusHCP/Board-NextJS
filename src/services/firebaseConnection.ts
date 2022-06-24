// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAWaWOH3otG0vogXCqWzbt9h432-LuMe4",
  authDomain: "board-nextjs-90451.firebaseapp.com",
  projectId: "board-nextjs-90451",
  storageBucket: "board-nextjs-90451.appspot.com",
  messagingSenderId: "883926193943",
  appId: "1:883926193943:web:1a22a5508e0e05a6998952"
};


if(!firebase.apps.length){ // Verificar se possui já uma conexão aberto, para evitar duplicação de conexão.
    firebase.initializeApp(firebaseConfig);
}


export default firebase;// Initialize Firebase