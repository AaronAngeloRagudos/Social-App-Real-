import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAv2q9ewwys4-S7k9yTOxZQ11hv3FHrGgI",
  authDomain: "chatapp-409cd.firebaseapp.com",
  projectId: "chatapp-409cd",
  storageBucket: "chatapp-409cd.appspot.com",
  messagingSenderId: "766629287380",
  appId: "1:766629287380:web:64cd7115d4d49ac60e7241",
  measurementId: "G-LF1J0VNX3Y"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {
    auth, 
    firestore,
    database,
    storage
}