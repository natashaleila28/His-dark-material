<script setup>
const props = defineProps({
    feedback: {},
    typeof: Object
})
</script>

<template>
    <div class="card" :style="'background-color:' + feedback.color + ';'">
        <img :src="feedback.photo" alt="">
        <div class="contenido">
            <h1 :style="'color:' + feedback.color2 + ';'">{{ feedback.name }}</h1>
            <p :style="'background-color:' + feedback.color2 + ';color:' + feedback.color + ';'" class="feedback">
                {{ feedback.text }}</p>
            
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 600px;
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(53, 90, 65);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
}
.card img {
    width: 20%;
    height: 40%;
    object-fit: cover;
    padding: 1rem;
}


.feedback {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
}
.contenido {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 5px 5px 5px;
    color: white;
}
.contenido h1 {
    width: 100%;
    text-align: end;
    padding-right: 20px;
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
@media screen and (max-width:500px) {
    .card {
        flex-direction: column;
        height: max-content;
    }
    .card img {
        width: 50%;
        border-radius: 50%;
        margin: 1rem auto 0rem auto;
    }
    .contenido {
        width: 100%;
    }
    .contenido h1 {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
        padding-right: 20px;
    }
    .soy h3 {
        width: 100%;
        text-align: center;
    }
    .feedback {
        padding: 1rem;
        margin: 1rem;
    }
    .stars {
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }
    .stars p {
        width: 100%;
        text-align: center;
    }
}
</style>