import { createRouter, createWebHashHistory  } from "vue-router";

import Home from "../pages/HomeView.vue";
import Fyp from "../pages/ForYouPage.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
    {path:'/',                  component: Home     },
    {path:'/feed',              component: Fyp      },
    {path:'/login',             component: Login    },
    {path:'/register',          component: Register }
]

const router = createRouter({
    routes, 
    history: createWebHashHistory(),
});

export default router;