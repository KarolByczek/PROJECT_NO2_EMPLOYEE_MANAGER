import { Table } from "./components/Table";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [dbdata, setDbdata] = useState([]);
  const { t } = useTranslation();
  const initArray = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'WORKERS_DATA'));
        const initArray = []; // Create a new array for storing fetched data
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data()); // Log data for debugging
          initArray.push(doc.data()); // Push document data, not the entire doc object
        });
        setDbdata(initArray); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching Firestore data: ", error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, [setDbdata]); // Empty dependency array, runs only once after component mounts

  return (
    <div className="home_page">
      <Link className="link" to="add_form">
        <div className="add_employee_link">{t("add_a_new")}</div>
      </Link>
       {dbdata.length > 0 ? <Table data={dbdata} /> : null}
    </div>
  );
}

export default App;
