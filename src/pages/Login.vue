<script setup>
    import H1 from '../components/TitleH1.vue';
    import { ref } from 'vue';
    import { useRouter } from "vue-router";

    const router = useRouter();

    //servicios
    import { login } from '../services/auth'

    const user = ref({
        email: '',
        password: ''
    })

    async function handleSubmit(){
        try {
            await login({...user.value});
            router.push('/my-profile')
        } catch (error) {
            console.error("[Login.vue line:18] error en iniciar sesión: ",error);
            
        }
    }
</script>

<template>
    <H1>Página de login</H1>

    <div class="flex justify-center h-3/4 mt-16">
        <div class="w-2/5 px-4 py-2 shadow-md flex flex-col rounded-md">
            <h2 class="text-2xl	">Iniciar Sesión</h2>
    
            <div class="my-3">
                <form action="" @submit.prevent="handleSubmit">
                    <div class="flex flex-col gap-y-3 mb-4">
                        <label for="email">E-mail</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            class="h-10 shadow-md bg-gray-100 shadow-pink-100 focus:border-pink-500 rounded-lg ps-3"
                            v-model="user.email"
                        >
                    </div>
    
                    <div class="flex flex-col gap-y-3 mb-4">
                        <label for="password">Contraseña</label>
                        <input
                            type="password"
                            name="password" 
                            id="password"
                            class="h-10 shadow-md bg-gray-100 shadow-pink-100 focus:border-pink-500 rounded-lg ps-3"
                            v-model="user.password"
                        >
                    </div>
                    
                    <button
                        class="px-3 py-2 w-28 border-4 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white active:border-rose-950 active:text-rose-950 mt-3"
                    >Login</button>
                </form>
            </div>
        </div>
    </div>
</template>