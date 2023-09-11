// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMB5ailiClH4ZH1JdgM3NYV03oBRIE1jU",
  authDomain: "fh-react-cursos-e63d7.firebaseapp.com",
  projectId: "fh-react-cursos-e63d7",
  storageBucket: "fh-react-cursos-e63d7.appspot.com",
  messagingSenderId: "10636071903",
  appId: "1:10636071903:web:cb7a346013e96e09a46a6a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );