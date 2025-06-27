import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyDM0NoD6zBwvTSrw6mzdP1MTjokXXC70s4",
  authDomain: "fir-chat-f27cb.firebaseapp.com",
  projectId: "fir-chat-f27cb",
  storageBucket: "fir-chat-f27cb.firebasestorage.app",
  messagingSenderId: "495994315500",
  appId: "1:495994315500:web:b6c531c6834656037c7bc9",
  measurementId: "G-2CG9KKRS6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');