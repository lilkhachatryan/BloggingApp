import { firebaseDb, storage, auth } from "../config/firebase";

export const postsRef = () => firebaseDb.collection('posts');
export const deletePostRef = (id) => firebaseDb.collection('posts').doc(id).delete();
export const addPostRef = (data) => firebaseDb.collection('posts').doc().set(data);
export const postRef = (id) => firebaseDb.collection('posts').doc(id);
export const userRef = (id) => firebaseDb.collection('users').doc(id);
export const getPostsRef = (data) => firebaseDb.collection("posts").doc().ref(data);
export const addBookmark = (data) => firebaseDb.collection("bookmarks").doc().set(data);
export const editBookmark = (id, data) => firebaseDb.collection("bookmarks").doc(id).update(data);
export const bookmarkRef = () => firebaseDb.collection("bookmarks");
export const deleteBookmark = (id) => firebaseDb.collection('bookmarks').doc(id).delete();
