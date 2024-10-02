<script setup>
    import H1 from '../components/TitleH1.vue';
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="h-52 w-72 bg-slate-400 mb-8">
        </div>

        <H1>Kitchat</H1>
    </div>

    <div class="flex justify-center">
        <div class="my-8 mt-10 w-5/6">
            <div class="flex justify-center gap-x-10 lg:gap-x-28 ">
                <div class="shadow-lg shadow-red-200/50 bg-red-200 p-4 rounded-md min-w-96 min-h-56 flex flex-col justify-center gap-y-10">
                    <p class="text-2xl font-semibold text-center">¿Ya tenes cuenta?</p>
                    <button class="px-2 py-4 bg-gradient-to-r from-red-600 to-pink-400 rounded-full text-white text-xl hover:shadow-md hover:shadow-pink-950/50 font-bold ">Inicia sesión</button>
                </div>
    
                <div class="shadow-lg shadow-red-200/50 bg-red-200 p-4 rounded-md min-w-96 min-h-56 flex flex-col justify-center gap-y-10">
                    <p class="text-2xl font-semibold text-center">¿Nuevo a Kitchat?</p>
                    <button class="px-2 py-4 bg-gradient-to-r from-red-600 to-pink-400 rounded-full text-white text-xl hover:shadow-md hover:shadow-pink-950/50 font-bold">¡Registrate!</button>
                </div>
            
            </div>
    
        </div>
    </div>

    <div class="flex justify-center">
        <div class="bg-rose-100 mt-10 mb-6 px-4 py-7 rounded w-4/5 2xl:w-2/3">
            <div class="flex flex-row justify-center gap-x-28">
                <div class="w-2/5 px-3 flex items-center">
                    <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis lacus, tristique eu sapien a, viverra ultricies metus. Sed maximus, ex ut commodo porta, leo lectus congue leo, a suscipit erat lorem non turpis. Cras tincidunt purus eu dui posuere dignissim. Nam eu sem mollis sem laoreet molestie ac et felis. Vestibulum sed nisi dolor. Nulla maximus efficitur leo, non scelerisque libero volutpat ut. Cras orci velit, tincidunt id elit sit amet, posuere tempor dolor.</p>
                </div>
    
                <div class="w-80 h-80 bg-slate-200"></div>
            </div>
    
        </div>
    </div>

</template>