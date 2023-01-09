import { app } from './indexfire.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { posts } from '../Store/Post.js';
import user from '../store/User.js';

const db = getFirestore(app)
const postRef = collection(db, 'users')

const addUser = (user) => {
    addDoc(postRef, user)
}

const updateUser = (user) => {
    // actualizamos los campos que querramos. (foto, nombre, etc).
}

export { addUser }