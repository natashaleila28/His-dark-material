<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import user from './Store/User.js';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Rules from './components/Rules.vue';
onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})
</script>

<template>
  <div class="body">
    <Header />
    <RouterView />

  </div>
</template>

<style scoped>
</style>