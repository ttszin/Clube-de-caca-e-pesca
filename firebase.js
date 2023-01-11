import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOVChD60SDc7IhGgFLZzJmeGTZVc__VSs",
    authDomain: "clubedetiro-2279d.firebaseapp.com",
    projectId: "clubedetiro-2279d",
    storageBucket: "clubedetiro-2279d.appspot.com",
    messagingSenderId: "830852626161",
    appId: "1:830852626161:web:aae12be57888bac5149b50",
    measurementId: "G-WSPGDLLLFC"
});

const db = firebase.firestore();

export {db};