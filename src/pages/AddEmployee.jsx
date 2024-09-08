import { useNavigate } from "react-router-dom";
import { statusOptions } from "../AUXILIARY OBJECTS/statusoptions";
import { useTranslation } from "react-i18next";
import { db } from "../firebase";
import { doc, setDoc, Timestamp, collection } from "firebase/firestore";
import React from "react";

export function AddEmployee() {
  const collectionRef = collection(db, "WORKERS_DATA");
  const navigate = useNavigate();
  const { t } = useTranslation();


  function makeEmployee(formdata) {
    return {
      id: Date.now().toString(),
      firstname: formdata.get("firstname"),
      lastname: formdata.get("lastname"),
      birthdate: Timestamp.fromDate(
        new Date(formdata.get("birthdate"))
      ),
      salary: +(formdata.get("salary")),
      club_member: Boolean(formdata.get("club_member")),
      status: formdata.get("status"),
      car_owner: Boolean(formdata.get("car_owner")),
    };
  }

  const handleAddEmployee = async (event) => {
    event.preventDefault();
    const form = event.target;
    const specformdata = new FormData(form);
    const specemployee = makeEmployee(specformdata);

    const employeeRef = doc(collectionRef, specemployee.id);

    try {
      await setDoc(employeeRef, specemployee);
      navigate("/");
    } catch (error) {
      console.error("Error adding employee: ", error);
    }
  };

  return (
    <div className="add_page">
      <h2>{t("add_employee_text")}</h2>
      <form className="add_employee_form" onSubmit={handleAddEmployee}>
        <label htmlFor="firstname">
          {t("first_name")}:
          <input name="firstname" type="text" />
        </label>
        <label htmlFor="lastname">
          {t("last_name")}:
          <input name="lastname" type="text" />
        </label>
        <label htmlFor="salary">
          {t("salary")}:
          <input name="salary" type="number" />
        </label>
        <label htmlFor="status">
          {t("status")}:
          <select name="status">
            {statusOptions.map((opt) => {
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="birthdate">
          {t("birthdate")}:
          <input name="birthdate" type="text" />
        </label>
        <label htmlFor="club_member">
          {t("clubmember")}:
          <select name="club_member">
            <option value="true">{t("confirmation")}</option>
            <option value="">{t("denial")}</option>
          </select>
        </label>
        <label htmlFor="car_owner">
          {t("carowner")}:
          <select name="car_owner">
            <option value="true">{t("confirmation")}</option>
            <option value="">{t("denial")}</option>
          </select>
        </label>
        <button type="submit">{t("add_button")}</button>
      </form>
    </div>
  );
}
