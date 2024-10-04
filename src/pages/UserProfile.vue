<script setup>
    import H1 from '../components/TitleH1.vue';
    
    import { onMounted, ref, onUnmounted } from 'vue';
    import { subToAuthChanges } from '../services/auth';
    
    let unsubFromAuth = () =>{};

    const loggedUser = ref({
        id: null,
        mail: null,
        displayName: null,
        bio: null,
        bday: null
    });

    onMounted(()=>{
        unsubFromAuth = subToAuthChanges(newUserData=> loggedUser.value = newUserData);
    });

    onUnmounted( ()=>unsubFromAuth() );
</script>

<template>
    <H1>Tu Perfil</H1>

    <div class="flex flex-col mt-8">
        <div class="flex justify-center">
            <div class="w-1/2 border-b-4 border-rose-300 pb-3 px-10">
                <h2 class="text-2xl">{{ loggedUser.displayName || 'Usuario Anonimo' }}</h2>
            </div>
        </div>

        <div class="flex justify-center mt-8 mx-10 ">
            <div class="w-1/3">
                <img src="" alt="Foto de perfil" class="bg-slate-200 h-20 w-20 rounded-full mb-5">

                <div class="flex flex-col">
                    <h2 class="text-xl font-semibold mb-3">Sobre mi:</h2>
                    <p>{{ loggedUser.bio || 'Áca va mi biografía ....' }}</p>
                </div>
            </div>

            <div class="w-1/3 flex">
                <div class="w-1/2">
                    <div class="flex flex-col justify-around gap-y-5 h-full">
                        <div>
                            <p>Email:</p>
                            <p>{{ loggedUser.mail }}</p>
                        </div>
        
                        <div>
                            <p>Cumpleaños:</p>
                            <p>{{ loggedUser.bday || 'No especificado.' }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 flex h-fit">
                    <router-link to="/my-profile/edit" class="px-5 py-3 border-4 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white active:border-rose-950 active:text-rose-950"> Editar </router-link>
                </div>
            </div>
        </div>
    </div>
</template>