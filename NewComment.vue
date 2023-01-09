<script setup>
import user from '../Store/User.js';
import { addComment } from '../firebase/comments.js';
import { ref } from 'vue';
const texto = ref('');
const props = defineProps({
    postId: '',
    typeOf: String
})
const addNewComment = () => {
    let newComment = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
        photo: user.value.photoURL,
    }
    addComment(newComment)
    texto.value = ''
}
</script>

<template>
    <form @submit.prevent="addNewComment">
        <input maxlength="80" required v-model="texto" type="text" :placeholder="'comentar como '+user.displayName.split(' ')[0]">
        <button>Enviar</button>
    </form>
</template>

<style scoped>
    form{
        margin-top: 10px;
        display: flex;
        width: 100%;
        height: 2rem;
    }
    form input{
        flex-grow: 1;
        border: none;
        border-bottom: 1px solid black;
    }
    form button{
        color: white;
        border: none;
        margin-left: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s all;
    }
</style>