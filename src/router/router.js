import { createRouter, createWebHashHistory  } from "vue-router";

import Home from "../pages/HomeView.vue";
import Fyp from "../pages/ForYouPage.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Profile from "../pages/UserProfile.vue";
import EditProfile from "../pages/EditProfile.vue";
import { subToAuthChanges } from "../services/auth";

const routes = [
    {path:'/',                          component: Home                                             },
    {path:'/feed',                      component: Fyp,             meta: {requiresAuth: true}      },
    {path:'/login',                     component: Login                                            },
    {path:'/register',                  component: Register                                         },
    {path:'/my-profile',                component: Profile,         meta: {requiresAuth: true}      },
    {path:'/my-profile/edit',           component: EditProfile,     meta: {requiresAuth: true}      },
]

const router = createRouter({
    routes, 
    history: createWebHashHistory(),
});

let loggedUser = {
    id: null,
    email: null,
    displayName: null,
    bio: null,
    bday: null
};

subToAuthChanges(newUserData => loggedUser = newUserData);

router.beforeEach((to, from)=>{
    if (to.meta.requiresAuth && loggedUser.id === null) {
        return{
            path: '/login'
        }
    }    
});

export default router;