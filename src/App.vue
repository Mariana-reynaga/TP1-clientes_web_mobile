<script setup>
  import { onMounted, ref } from "vue";
  import { logout, subToAuthChanges } from "./services/auth";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const loggedUser = ref({
    id:null,
    mail: null
  });

  onMounted(()=>{
    subToAuthChanges(newUserData=> loggedUser.value = newUserData);
  });

  const handleLogout = ()=>{
    logout();
    router.push('/login')
  }
</script>

<template>
  <div class="relative">
    <nav class="flex justify-between items-center p-4 bg-rose-300 rounded-b-lg fixed top-0 w-full">
      <router-link to="/" class="text-2xl">Kitchat</router-link>
      
      <ul class="flex gap-4 justify-center w-3/5 lg:w-2/5 xl:w-1/3 flex-row">
        
        <template v-if="loggedUser.id !== null">
        
          <li><router-link to="/feed" class="block text-xl">Feed</router-link></li>

          <li><router-link to="/my-profile" class="block text-xl">Profile</router-link></li>

          <li class="ms-2">
            <form action="#" @submit.prevent="handleLogout">
              <button type="submit" class="block text-xl">{{ loggedUser.displayName || 'Usuario Anonimo' }} Cerrar Sesión </button>
            </form>
          </li>

        </template>

        <template v-else>
          <li><router-link to="/login" class="block text-xl">Iniciar Sesión</router-link></li>

          <li><router-link to="/register" class="block text-xl">Crear Cuenta</router-link></li>
        </template>
      </ul>
  
    </nav>

  </div>

  <main class="p-4">
    <router-view/>
  </main>

  <footer class="flex justify-center items-center h-25 bg-red-950 text-white py-4">
    <p>Copyright: Mariana Reynaga 2024</p>
  </footer>
</template>

<style scoped>

</style>
