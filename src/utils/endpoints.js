import { firebaseDb, storage, auth } from "../config/firebase";

export const postsRef = () => firebaseDb.collection('posts');
export const deletePostRef = (id) => firebaseDb.collection('posts').doc(id).delete();
export const addPostRef = (data) => firebaseDb.collection('posts').doc().set(data);
export const postRef = (id) => firebaseDb.collection('posts').doc(id);
export const userRef = (id) => firebaseDb.collection('users').doc(id);