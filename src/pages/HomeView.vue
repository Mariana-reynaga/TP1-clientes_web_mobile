<script setup>
    import { RouterLink } from 'vue-router';
    import H1 from '../components/TitleH1.vue';
    import { ref, onMounted, onUnmounted } from 'vue';
    import { subToAuthChanges } from "../services/auth";

    const loggedUser = ref({
        id:null,
        mail: null
    });

    let unsubFromAuth = () =>{};

    onMounted(()=>{
        unsubFromAuth = subToAuthChanges(newUserData=> loggedUser.value = newUserData);
    });

    onUnmounted( ()=>unsubFromAuth() );
</script>

<template>
    <div class="flex flex-col items-center">
        <img src="/public/img/pawprint.png" class="h-72 w-72 mb-8">
        <!-- <div class="h-52 w-72 bg-slate-400 mb-8">
        </div> -->

        <H1>Página landing</H1>

        <h1 class="text-4xl">Kitchat</h1>
    </div>

    <div class="flex justify-center">
        <div class="my-8 mt-10 w-5/6">
            <div class="flex justify-center gap-x-10 lg:gap-x-28 ">
                <div class="shadow-lg shadow-red-200/50 bg-red-200 p-4 rounded-md min-w-96 min-h-56 flex flex-col justify-center gap-y-10">
                    <p class="text-2xl font-semibold text-center">¿Ya tenes cuenta?</p>
                    <template v-if="loggedUser.id !== null">
                    
                        <RouterLink to="/my-profile" class="px-2 py-4 bg-gradient-to-r from-red-600 to-pink-400 rounded-full text-white text-xl hover:shadow-md hover:shadow-pink-950/50 font-bold text-center">Ir a perfil</RouterLink>
                    </template>

                    <template v-else>
                        <RouterLink to="/login" class="px-2 py-4 bg-gradient-to-r from-red-600 to-pink-400 rounded-full text-white text-xl hover:shadow-md hover:shadow-pink-950/50 font-bold text-center">Inicia sesión</RouterLink>
                    </template>
                </div>
                
                <template v-if="loggedUser.id == null">
                    <div class="shadow-lg shadow-red-200/50 bg-red-200 p-4 rounded-md min-w-96 min-h-56 flex flex-col justify-center gap-y-10">
                        <p class="text-2xl font-semibold text-center">¿Nuevo a Kitchat?</p>
                        <button class="px-2 py-4 bg-gradient-to-r from-red-600 to-pink-400 rounded-full text-white text-xl hover:shadow-md hover:shadow-pink-950/50 font-bold">¡Registrate!</button>
                    </div>
                </template>

            
            </div>
    
        </div>
    </div>

    <div class="flex justify-center">
        <div class="bg-rose-100 mt-10 mb-6 px-4 py-7 rounded w-4/5 2xl:w-2/3">
            <div class="flex flex-row justify-center gap-x-28">
                <div class="w-2/5 px-3 flex items-center">
                    <p class="leading-relaxed">¡Bienvenido a Kitchat! Esta es la red social perfecta para los amantes de los gatos, donde puedes compartir anécdotas, fotos y consejos sobre tus felinos favoritos. Kitchat te permite conectarte con otros entusiastas, participar en debates sobre razas, salud y comportamiento, y descubrir contenido divertido que hará ronronear a tu corazón. 
                    ¡Únete a la comunidad y comparte el amor por los gatos! </p>
                </div>
    
                <!-- <div class="w-80 h-80 bg-slate-200"></div> -->
                <img src="/public/img/cat-logo.png" alt="" class="w-80 h-80 rounded-full">
            </div>
    
        </div>
    </div>

</template>