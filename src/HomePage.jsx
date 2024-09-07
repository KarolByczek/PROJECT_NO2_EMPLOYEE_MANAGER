import { Table } from "./components/Table";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { collectionRef } from "./firebase";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import React from "react";

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
