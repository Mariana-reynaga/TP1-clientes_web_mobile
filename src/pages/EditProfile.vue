<script setup>
    import H1 from '../components/TitleH1.vue';
    import { onMounted , ref, onUnmounted } from 'vue';
    import { editUserProfile, subToAuthChanges } from '../services/auth';
    import { useRouter } from "vue-router";

    const router = useRouter();

    const loading = ref(false)

    const editData = ref({
        displayName: '',
        bio: '',
        bday: ''
    });

    let unsubFromAuth = () =>{};

    onMounted(()=>{
        unsubFromAuth = subToAuthChanges(newUserData => editData.value = {
            displayName: newUserData.displayName || '',
            bio: newUserData.bio || '',
            bday: newUserData.bday || ''
        });
    });

    onUnmounted( ()=>unsubFromAuth() );

    const handleSubmit = async () => {
        loading.value = true;

        try {
            await editUserProfile({...editData.value});
            router.push('/my-profile')
        } catch (error) {
            console.log('[EditProfile.vue handlesubmit] Error al editar el perfil.');
            throw error
        }

        loading.value = false;
    }
</script>

<template>
    <H1>Editar tu perfil</H1>

    <div class="flex flex-col my-8">
        <div class="flex justify-center">
            <div class="w-1/2 border-b-4 border-rose-300 pb-3 px-10">
                <h2 class="text-2xl">Editar el perfil</h2>
            </div>
        </div>

        <div class="flex justify-center h-3/4 mt-8">
            <div class="w-2/5 px-4 py-2 shadow-md flex flex-col rounded-md">

                <div class="my-3">
                    <form action="" @submit.prevent="handleSubmit">
                    
                        <div class="flex flex-col gap-y-3 mb-4">
                            <label for="displayName">Nombre de Usuario</label>
                            <input
                                type="text"
                                name="displayName" 
                                id="displayName"
                                class="h-10 shadow-md bg-gray-100 shadow-pink-100 focus:border-pink-500 rounded-lg ps-3 read-only:bg-slate-200"
                                v-model="editData.displayName"
                            >
                        </div>

                        <div class="flex flex-col gap-y-3 mb-4">
                            <label for="birth">Cumpleaños</label>
                            <input
                                type="date"
                                name="birth" 
                                id="birth"
                                class="h-10 shadow-md bg-gray-100 shadow-pink-100 focus:border-pink-500 rounded-lg ps-3 read-only:bg-slate-200"
                                v-model="editData.bday"
                            >
                        </div>
                        
                        <div class="flex flex-col gap-y-3 mb-4">
                            <label for="bio">Biografia</label>

                            <textarea 
                                name="bio" 
                                id="bio" 
                                v-model="editData.bio"
                                class="h-20 shadow-md bg-gray-100 shadow-pink-100 focus:border-pink-500 rounded-lg ps-3 pt-3 read-only:bg-slate-200" 
                            ></textarea>
                           
                        </div>

                        <button
                            class="px-3 py-2 w-28 border-4 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white active:border-rose-950 active:text-rose-950 mt-3"
                        >{{!loading ? 'Editar' : 'Cargando....'}}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>