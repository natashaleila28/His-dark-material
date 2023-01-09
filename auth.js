import { app } from './indexfire.js';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { ref } from 'vue';
import user from '../Store/User.js';
import { addUser } from './userF.js';

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log('result', result);
        // logica de buscar el usuario por email en la base de datos de usuarios
        // si no tengo el usuario, lo creo y si lo tengo me lo traigo
        let newUser = {
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email,
        }

        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        }
        /* addUser(newUser) */
    })
    .catch((error) => {
        console.log('error', error);
    });
};

const logout = () => {
    auth.signOut(auth)
    .then(() => {
        console.log('logged out');
        user.value = null;
        localStorage.setItem('user',null)
    }
    )
    .catch((error) => {
        console.log('error', error);
    });
};

export { loginWithGoogle, logout, user };