import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * 
 * @param {string} id 
 * @returns {{id: String, email: String, displayName: String, bio: String, bday: String}} 
 */
export async function getUserProfileByID(id) {
    const profileRef = doc(db, `/users/${id}`);

    const profileDoc = await getDoc(profileRef);

    return{
        id: profileDoc.id,
        displayName: profileDoc.data().displayName,
        email: profileDoc.data().email,
        bio: profileDoc.data().bio,
        bday: profileDoc.data().bday,

    }
}

/**
 * 
 * @param {string} id 
 * @param {{displayName: String, bio: String, bday: String}} data 
 */
export async function updateUserProfile(id, {displayName, bio, bday}){

    const profileRef = doc(db, `/users/${id}`);

    await updateDoc(profileRef, {
        displayName, 
        bio, 
        bday
    });
}

/**
 * 
 * @param {string} id 
 * @param {{email: string}} data 
 */
export async function createUserProfile(id, {email}){
    const profileRef = doc(db,`users/${id}`);

    await setDoc(profileRef, {email});
}   