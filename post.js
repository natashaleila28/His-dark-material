import { app } from './indexfire.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { posts } from '../Store/Post.js';

const db = getFirestore(app)
const postRef = collection(db, 'posts')

const addPost = (post) => {
    addDoc(postRef, post)
}

const getPosts = () => {
    onSnapshot(postRef, (snapshot) => {
        posts.value = []
        snapshot.forEach(postData => {
            let newPost = {
                id: postData.id,
                date: postData.data().date,
                name: postData.data().name,
                email: postData.data().email,
                body: postData.data().body,
                photo: postData.data().photo,
            }
            posts.value.push(newPost)
            posts.value.sort((a,b)=> b.date - a.date)
        })
    })
}

export { addPost, getPosts }