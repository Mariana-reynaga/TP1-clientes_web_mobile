<script setup>
    import H1 from '../components/TitleH1.vue';
    import {ref, onMounted, onUnmounted} from 'vue'

    // Services
    import { savePosts, subToPosts } from '../services/post-feeds.js';
    import { subToAuthChanges } from '../services/auth.js';

    const posts = ref([]);

    const loggedUser = ref({
        id:null,
        displayName: null,
        mail: null
    });

    const newPost = ref({
        message: '',
    });

    let unsubFromAuth = () =>{};

    onMounted(async() =>{

        subToPosts(newPosts => posts.value = newPosts);

        unsubFromAuth = subToAuthChanges(userData=> loggedUser.value = userData);
    });

    onUnmounted( ()=>unsubFromAuth() );

    function handleSubmit(){
        savePosts({
            ...newPost.value,
        });
        
        newPost.value.message = ''; 
    };

</script>

<template>

    <H1>Tu Feed</H1>
    <div class="flex justify-between my-8 min-h-full">
        <div class="w-1/4 flex flex-col align-baseline ms-3 pe-3 gap-y-10 border-e-4 border-rose-200/50">
            <div class="flex items-center gap-14">
                <div class="bg-slate-200 rounded-full w-16 h-16"></div>
                <h3>{{ loggedUser.displayName || 'Usuario Anonimo' }}</h3>
            </div>

            <div>
                <form action="#" @submit.prevent="handleSubmit">

                    <div class="mb-4 mx-3">
                        <label for="message" class="sr-only">Mensaje a postear</label>

                        <textarea 
                            name="message"
                            rows="5"
                            id="message" 
                            class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-pink-500 placeholder:text-gray-400  caret-pink-500" 
                            placeholder="Escribe tu mensaje al mundo"
                            v-model="newPost.message"
                            ></textarea>
                    </div>
                    
                    <div class="p-2">
                        <button
                            class="px-3 py-2 w-28 border-4 border-rose-500 rounded-full hover:bg-rose-500 hover:text-white active:border-rose-950 active:text-rose-950 mt-3"> Publicar
                        </button>
                    </div>
                </form>
    
            </div>
        </div>
    
        <div class="w-2/3 max-h-[32rem] overflow-auto">
            <div class="flex items-center flex-col">
                <div class="bg-rose-200 w-3/4 rounded p-4 flex items-center my-3 min-h-10 shadow-md shadow-pink-500/50" v-for="posts in posts">
                    <div class="w-1/6 flex align-baseline justify-start min-h-20">
                        <div class="w-16 h-16 bg-slate-200 rounded-full"></div>
                    </div>

                    <p>{{ posts.message }}</p>
                </div>

            </div>
        </div>
    </div>
</template>