<script setup>
import { user } from '../firebase/auth.js'
import SideMenu from './SideMenu.vue';
import { ref } from 'vue';
const menu = ref(false)
const hideMenu = () => {
  menu.value = false
}
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="hamburguesa">
        <input type="checkbox" id="checkbox" v-model="menu">
        <label for="checkbox"></label>
        <div class="menu">
          <SideMenu @hide-menu="hideMenu" />
        </div>
        <div id="hidden" @click="hideMenu"></div>
      </div>
      <RouterLink @click="hideMenu" to="/login">
        <div class="userPhoto">
          <img :src="user ? user.photoURL : 'https://picsum.photos/200'" alt="user photo" />
        </div>
      </RouterLink>
    </div>
  </header>
</template>


<style scoped>
header {
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 10;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburguesa {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

input {
  display: none;
}

.menu {
  position: absolute;
  height: 100vh;
  width: 300px;
  top: -22px;
  left: -322px;
  background-color: black;
  transition: all 0.5s;
  z-index: 5;
}

#hidden {
  position: absolute;
  height: 0px;
  width: 0px;
  top: -22px;
  left: -105vw;
  background-color: rgba(0, 0, 0, 0.109);
  z-index: 1;
  transition: all 0.5s;
}

label,
label::after,
label::before {
  z-index: 11;
  height: 2px;
  width: 30px;
  border: 2px solid white;
  background-color: white;
  border-radius: 3px;
  display: block;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
}

label::after,
label::before {
  position: absolute;
  content: '';
  transform: translateX(2px);
  left: -2px;
}

label::after {
  transform: translateY(8px);
}

label::before {
  transform: translateY(-12px);
}

#checkbox:checked~label::after {
  transform: rotate(225deg);
  border-color: rgb(20, 34, 20);
  background-color: rgb(13, 39, 13);
  top: -2px;
}

#checkbox:checked~label::before {
  transform: rotate(-225deg);
  border-color: rgb(20, 34, 20);
  background-color: rgb(13, 39, 13);
  top: -2px;
}

#checkbox:checked~label {
  border: none;
}

#checkbox:checked~.menu {
  left: -22px;
}

#checkbox:checked~h1 {
  color: #2b7246;
}

#checkbox:checked~#hidden {
  left: 0px;
  width: 100vw;
  height: 100vh;
}

h1 {
  position: absolute;
  left: 40px;
  color: white;
  cursor: pointer;
  flex-grow: 1;
  text-align: start;
  z-index: 12;
}

.userPhoto {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.userPhoto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  text-decoration: none;
}
</style>