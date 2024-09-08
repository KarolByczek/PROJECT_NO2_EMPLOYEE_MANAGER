import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { statusOptions } from "../AUXILIARY OBJECTS/statusoptions";
import { t } from "i18next";
import { db } from "../firebase";
import { Timestamp, doc, updateDoc, collection } from "firebase/firestore";

export function EditEmployee() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  console.log(data);
  const [inputValue0, setInputValue0] = useState(data.firstname);
  const [inputValue1, setInputValue1] = useState(data.lastname);
  const [inputValue2, setInputValue2] = useState(
    data.salary.toString()
  );

  const [inputValue4, setInputValue4] = useState(
    new Date(data.birthdate.seconds * 1000).toLocaleDateString('en-EU')
  );

  const editEmployee = (formdata) => {

    return {
      firstname: formdata.get("firstname"),
      lastname: formdata.get("lastname"),
      salary: +(formdata.get("salary")),
      birthdate: Timestamp.fromDate(
        new Date(formdata.get("birthdate"))
      ),
      club_member: Boolean(formdata.get("club_member")),
      status: formdata.get("status"),
      car_owner: Boolean(formdata.get("car_owner")),
    };
  };

  function handleEdit(event, refdoc) {
    const form = event.target;
    const formData = new FormData(form);
    const editedData = editEmployee(formData);

    try {
      const collectionRef = collection(db, "WORKERS_DATA");
      const employeeRef = doc(collectionRef, refdoc.id);
      updateDoc(employeeRef, editedData);
    } catch (error) {
      console.error(error);
    }

    navigate("/");
  }

  return (
    <div id="edit_page">
      <h1>{t("edit_data")}:</h1>
      <form
        className="edit_employee_form"
        onSubmit={(event) => handleEdit(event, data)}
      >
        <label htmlFor="firstname">
          {t("first_name")}:
          <input
            name="firstname"
            type="text"
            onChange={(event) => setInputValue0(event.target.value)}
            value={inputValue0}
          />
        </label>
        <label htmlFor="lastname">
          {t("last_name")}:
          <input
            name="lastname"
            type="text"
            onChange={(event) => setInputValue1(event.target.value)}
            value={inputValue1}
          />
        </label>
        <label htmlFor="salary">
          {t("salary")}:
          <input
            name="salary"
            type="number"
            onChange={(event) => setInputValue2(event.target.value)}
            value={inputValue2}
          />
        </label>
        <label htmlFor="status">
          {t("status")}:
          <select name="status" id="status">
            {statusOptions.map((option) => {
              return (
                <option
                  key={option.value}
                  value={option.value}
                  selected={data.status === option.label}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="birthdate">
          {t("birthdate")}:
          <input
            name="birthdate"
            type="text"
            onChange={(event) => setInputValue4(event.target.value)}
            value={inputValue4}
          />
        </label>
        <label htmlFor="club_member">
          {t("clubmember")}:
          <select name="club_member">
            <option value="true" selected={data.club_member === true}>
              {t("confirmation")}
            </option>
            <option value="" selected={data.club_member === false}>
              {t("denial")}
            </option>
          </select>
        </label>
        <label htmlFor="car_owner">
          {t("carowner")}:
          <select name="car_owner">
            <option value="true" selected={data.car_owner === true}>
              {t("confirmation")}
            </option>
            <option value="" selected={data.car_owner === false}>
              {t("denial")}
            </option>
          </select>
        </label>
        <button type="submit">{t("save_edited")}</button>
      </form>
    </div>
  );
}
