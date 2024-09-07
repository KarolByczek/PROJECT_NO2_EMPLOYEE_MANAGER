import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDB9ZO1qAg3JMm6PVK1up8yrNWgBZKNi5Y",
    authDomain: "projectno5-workers-database.firebaseapp.com",
    projectId: "projectno5-workers-database",
    storageBucket: "projectno5-workers-database.appspot.com",
    messagingSenderId: "476845290981",
    appId: "1:476845290981:web:8017cc10c34b73cad5eb0c",
    measurementId: "G-FR61PS7RPS",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const collectionRef = collection(db, "WORKERS_DATA");

