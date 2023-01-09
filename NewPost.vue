<script setup>
import { ref, computed } from 'vue';
import { addPost } from '../firebase/posts.js';
import user from '../Store/User.js';
const name = ref('')
const email = ref('')
const message = ref('')
const updateData = computed(() => {
    if (user.value) {
        console.log(user);
        name.value = user.value.displayName
        email.value = user.value.email
    }
})
const addNewPost = () => {
    // logica para que los datos ingresados esten bien etc etc etc...
    let newPost = {
        id: crypto.randomUUID(),
        date: Date.now(),
        name: name.value,
        email: email.value,
        body: message.value,
        photo: user.value.photoURL,
    }
    addPost(newPost)
    message.value = ''
}
</script>

<template>
    {{ updateData }}
    <form>
        <div class="header">
            <img :src="user.photoURL" alt="foto de perfil">
            <textarea maxlength="400" required v-model="message" placeholder="¿Que estas pensando?"
                @keyup.enter="addNewPost"></textarea>
        </div>
        <button @click.prevent="addNewPost">Post</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: white;
    margin: 10px auto;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.103);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.166);
}
form img {
    width: 50px;
    border-radius: 50%;
}
input,
textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: sans-serif;
}
.header {
    display: flex;
    gap: 10px;
}
textarea {
    resize: none;
    border: none;
    flex-grow: 1;
}
button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
    width: 5rem;
    align-self: flex-end;
    color: white;
    background-color: pink;
    transition: 0.5s all;
}
@media screen and (max-width: 600px){
    form{
        width: 95%;
    }
}
</style>