import { signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { getUserProfileByID, updateUserProfile, createUserProfile } from "./user-profile";

let observers = [];

export let loggedUser = {
    id: null,
    mail: null,
    displayName: null,
    bio: null,
    bday: null,
    fullyLoaded: false
};

if (localStorage.getItem('user')) {
    loggedUser = JSON.parse(localStorage.getItem('user'));
}; 

// Cada vez que se realize un cambio de autenticación
onAuthStateChanged(auth ,async user => {
    if(user){
        updateLoggedUser({
        id: user.uid,
        mail: user.email,
        displayName: user.displayName,
      });

      getUserProfileByID(user.uid)
        .then(userProfile =>{
            updateLoggedUser ( {
                ...loggedUser,
                bio: userProfile.bio,
                bday: userProfile.bday,
                fullyLoaded: true
            })
        }
    ); 

    }else{
        updateLoggedUser({
        id:null,
        mail: null,
        displayName: null,
        bio: null,
        bday: null,
        fullyLoaded: false
      });

      localStorage.removeItem('user');
    }
});

/**
 * @param {Function} callback 
 * @returns {Function}
 */
export function subToAuthChanges(callback){
    observers.push(callback);
    notify(callback);

    return () => {observers = observers.filter(obs=> obs !== callback);
        console.log("Observer removido, el stack es: ", observers)
    }
};  

/**
 * @param {Function} callback 
 */
export function notify(callback){
    callback({...loggedUser});
};

export function notifyAll(){
    observers.forEach(callback => notify(callback));
};

/**
 * 
 * @param {{}} newData 
 */
function updateLoggedUser(newData){
    loggedUser = {
        ...loggedUser,
        ...newData
    }

    localStorage.setItem('user', JSON.stringify(loggedUser));
    notifyAll();
}

// Iniciar sesión
export async function login({email, password}) {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log("Sesión iniciada: ", user);

    } catch (error) {
        console.error("[auth.js login] error en iniciar sesión: ",error);
        throw error
    }
};

// Cerrar sesión
export async function logout(){
    await signOut(auth);
};

export async function register({email, password}){
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        
        await createUserProfile(credentials.user.uid, { email });

    } catch (error) {
        console.log("[auth.js login] Error al tratar de crear cuenta", error);
        throw error
    }
}

/**
 * 
 * @param {{displayName: String, bio: String, bday: String}} data
 * @returns {Promise<null>}
 */
export async function editUserProfile({displayName, bio, bday}){
    try {
        const promiseAuth =  updateProfile(auth.currentUser, {displayName} );

        const promiseProfile =  updateUserProfile(loggedUser.id, {displayName ,bio, bday});

        await Promise.all([promiseAuth, promiseProfile]);

        updateLoggedUser( {
            ...loggedUser,
            displayName,
            bio,
            bday
        })
    } catch (error) {
        console.error("[auth.js editUserProfile] Error en editar el usuario: ",error);
        throw error
    }
}