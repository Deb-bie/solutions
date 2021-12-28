import { initializeApp } from 'firebase/app';
import { getAuth } from  "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";




const app = initializeApp({
    apiKey: "AIzaSyAnQSrWZRz7XtAsHiOmqIJfN0XO_uf0kAc",
    authDomain: "ecommerce-61af1.firebaseapp.com",
    projectId: "ecommerce-61af1",
    storageBucket: "ecommerce-61af1.appspot.com",
    messagingSenderId: "1041408680267",
    appId: "1:1041408680267:web:f41b2d26ab143ceb0288ce"
});


export const auth = getAuth(app) 

export const db = getFirestore(app)

export const storage = getStorage(app);


export default app