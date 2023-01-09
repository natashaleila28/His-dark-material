<script setup>
import user from '../Store/User.js'
const emits = defineEmits(['hideMenu'])
</script>

<template>
    <div class="menu1">
        <ul>
            <li v-if="user"><img :src="user.photoURL" alt=""></li>
            <li v-if="user"><h1>{{user.displayName}}</h1></li>
            <li v-if="user"><h2>{{user.email}}</h2></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/">Home</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/about">Abouts Us</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/rules">Rules</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/contact">Contact</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/myposts">Mis post</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/valoraciones">Comentarios</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/login">Login/log out</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.menu1{
    z-index: 13;
    top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;

}
li img{
    width: 50%;
    display: flex;
    justify-content: center;
    border-radius: 50%;
}
li h1, li h2{
    color: rgb(26, 68, 42);
}
li h2{
    font-size: 1rem;
    margin-bottom: 1rem;
}
ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
}
ul li{
    width: 100%;
    color: black;
    list-style: none;
}
li a{
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: rgb(37, 65, 34);
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    transition: all 0.5s;
}
li a:hover{
    background-color: rgb(42, 87, 48);
    transform: scale(1.05);
}
.active{
    animation: brillar 2s infinite ease-in-out;
}
@keyframes brillar{
    0%{
        background-color: rgb(38, 80, 47);
    }
    50%{
        background-color: rgb(51, 107, 72);
        transform: scale(1.05);
    }
    100%{
        background-color: rgb(53, 109, 48);
    }
}
</style>