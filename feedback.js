import { app } from './indexfire.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { feedbacks } from '../Store/Post.js'

const db = getFirestore(app)
const commentRef = collection(db, 'feedbacks')

const addComment = (comment) => {
    addDoc(commentRef, comment)
}

const getComments = () => {
    onSnapshot(commentRef, (snapshot) => {
        feedbacks.value = []
        snapshot.forEach(commentData => {
            let newComment = {
                id: commentData.id,
                date: commentData.data().date,
                name: commentData.data().name,
                email: commentData.data().email,
                text: commentData.data().text,
                photo: commentData.data().photo,
                color: commentData.data().color,
                color2: commentData.data().color2,
                calificacion: commentData.data().calificacion,
                soy: commentData.data().soy,
                

            }
            feedbacks.value.push(newComment)
        })
    })
}

export { addComment, getComments }