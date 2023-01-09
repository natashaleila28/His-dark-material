import { initializeApp } from "firebase/app";
/* import { getFirestore } from 'firebase/firestore'; */
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBGx4wHlnDEPwRzeEKjWMNvZFtnbgLc_Xc",
  authDomain: "vueapp-cba11.firebaseapp.com",
  projectId: "vueapp-cba11",
  storageBucket: "vueapp-cba11.appspot.com",
  messagingSenderId: "874590227514",
  appId: "1:874590227514:web:b3ac633202d5ea1d7bb903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const db = getFirestore(app);
const auth = getAuth(app); */

export { app };