import { db } from '../services/firebase.js';
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';

/**
* @param {{message: String }} newPost
*@returns {Promise}
*/

export async function savePosts({ message }){
    const postRef = collection(db, 'public-post');

    await addDoc(postRef, {
        message,
        created_at: serverTimestamp(),
    });
}

/**
 * Sube los posts a Firestore
 * @param {{}}
 * @returns
 */
export function subToPosts(callback){
    const postRef = collection(db, 'public-post');
        
    const postQuery = query(postRef, orderBy('created_at', 'desc'));

    onSnapshot(postQuery, snapshot=>{
        const post = snapshot.docs.map(doc =>{
            return {
                id: doc.id,
                message: doc.data().message,
                date: doc.data().created_at
            }
        });

        callback(post);
    });
}