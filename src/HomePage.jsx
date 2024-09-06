import { Table } from "./components/Table";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import React from "react";

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

function App() {
  const [dbdata, setDbdata] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function unsub() {
      onSnapshot(
        collectionRef,
        (QuerySnapshot) => {
          const items = [];
          QuerySnapshot.forEach((doc) => {
            console.log(doc.data()); // Add this to inspect the fetched data
            items.push(doc.data());
          });
          setDbdata(items);
        },
        (error) => {
          console.error("Error fetching Firestore data: ", error);
        }
      );
    }
    return () => {
      unsub();
    };
  }, [onSnapshot]);

  return (
    <div className="home_page">
      <Link className="link" to="add_form">
        <div className="add_employee_link">{t("add_a_new")}</div>
      </Link>
      <h1>{t("employees")}</h1>
      {dbdata.length > 0 ? <Table data={dbdata} /> : null}
    </div>
  );
}

export default App;
