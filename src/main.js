import './style.css';

// Importo el router
import router from './router/router';

// Importa el componente App
import App from './App.vue'; 
// Importa el metodo para crear la app
import { createApp } from 'vue';

const app = createApp(App);

// Registro el router para poder usarlo
app.use(router);

// Monto la aplicación
app.mount("#app");