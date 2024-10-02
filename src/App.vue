<script setup>
  import Home from "./pages/HomeView.vue";
  import Fyp from "./pages/ForYouPage.vue";
  import login from "./pages/Login.vue";
  import register from "./pages/Register.vue";

</script>

<template>
  <nav class="flex justify-between items-center p-4 bg-rose-300 rounded-b-lg sticky top-0">
    <router-link to="/" class="text-2xl">Red social</router-link>
    
    <ul class="flex gap-4 justify-center w-3/5 lg:w-2/5 xl:w-1/3 flex-row">

      <li><router-link to="/" class="block text-xl">Home</router-link></li>
      <li><router-link to="/feed" class="block text-xl">Feed</router-link></li>
      <li><router-link to="/register" class="block text-xl">Crear Cuenta</router-link></li>
      <li><router-link to="/login" class="block text-xl">Iniciar Sesión</router-link></li>
    </ul>

  </nav>

  <main class="p-4">
    <router-view/>
  </main>

  <footer class="flex justify-center items-center bg-red-950 h-full text-white py-4">
    <p>Copyright: Mariana Reynaga 2024</p>
  </footer>
</template>

<style scoped>

</style>
