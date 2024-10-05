// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "@firebase/auth/dist/rn/index"; 
import AsyncStorage from "@react-native-async-storage/async-storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNzrjv7efbK2p389cu7-xwZ90Ak3KgOlI",
  authDomain: "evaluacion-tecnica-89fc1.firebaseapp.com",
  databaseURL: "https://evaluacion-tecnica-89fc1-default-rtdb.firebaseio.com",
  projectId: "evaluacion-tecnica-89fc1",
  storageBucket: "evaluacion-tecnica-89fc1.appspot.com",
  messagingSenderId: "219658083485",
  appId: "1:219658083485:web:2e80a92de9a7c2374f8874"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(appFirebase, {   persistence: getReactNativePersistence(AsyncStorage) });
export default appFirebase;