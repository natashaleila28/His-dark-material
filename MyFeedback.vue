<script setup>
import { ref } from 'vue';
import user from '../Store/User.js';
import { addComment } from '../firebase/feedback.js';

const texto = ref('')
const color = ref('')
const color2 = ref('')
const calificacion = ref(0)
const soy = ref('')
const saveMyFeedback = () => {
    let newComment = {
        id: crypto.randomUUID(),
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
        photo: user.value.photoURL,
        color: color.value,
        color2: color2.value,
        calificacion: calificacion.value,
        soy: soy.value,
    }
    addComment(newComment)
    texto.value = ''
}
const calificar = (nota)=>{
    if(nota == calificacion.value){
        calificacion.value = 0
    } else {
        calificacion.value = nota
    }
}
</script>

<template>
    <div class="editor">
        <h1>post a commentary</h1>
        <form :style="'background-color:' + color + ';'">
            <img :src="user.photoURL" alt="">
            <div class="contenido">
                <h1 :style="'color:' + color2 + ';'">{{ user.displayName }}</h1>
                <div class="soy">
                    <h4>Soy</h4>
                    <input maxlength="20" v-model="soy" type="text">
                </div>
                <textarea placeholder="Dejanos un comentario" required maxlength="100" v-model="texto" name="" id="" cols="30" rows="10"></textarea>
                <div class="botones">
                    <input type="color" v-model="color2">
                    <input type="color" v-model="color">
                    <button @click.prevent="saveMyFeedback">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.editor {
    width: 600px;
    height: max-content;
    background-color: rgb(64, 109, 52);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px rgb(19, 46, 25);
    margin-bottom: 1rem;
}
.editor h1 {
    width: 100%;
}
.editor form {
    width: 90%;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(18, 53, 24);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
}
.stars{
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    text-shadow: 1px 1px 1px white;
}
.stars span{
    transition: all 0.5s;
}
.stars span:hover{
    transform: scale(1.5);
}
.shine{
    color: yellow;
    font-variation-settings: 'FILL' 1;
    filter: drop-shadow(2px 2px 10px yellow);
}
form img {
    width: 30%;
    object-fit: cover;
    border-radius: 20px 0 0 20px;
}
.contenido {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 5px 5px 5px;
}
.contenido h1 {
    width: 100%;
    text-align: end;
    padding-right: 20px;
}
.soy {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    text-shadow: 1px 1px 3px white;
}
h4{
    font-weight:  bold;
    color: black;    
}
.soy h3{
    font-weight: bold;
}
.botones {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}
input,
textarea {
    border: none;
    border-radius: 5px;
    resize: none;
}
button {
    border: none;
    border-radius: 5px;
}
@media screen and (max-width: 600px) {
    .editor {
        width: 300px;
        flex-direction: column;
    }
    .editor img{
        width: 100%;
        border-radius: 25px 25px 0 0;
    }
    .contenido{
        width: 100%;
    }
    .contenido h1{
        font-size: 1.2rem;
        text-align: center;
    }

}
</style>