//import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../index.scss";
import { t } from "i18next";

export const EmployeeDetail = () => {
  const location = useLocation();
  console.log(location.state);
  const data = location.state;

  const renderDetails = (fact) => {
    switch (fact) {
      case true:
        return "✔️";
      case false:
        return "❌";
      default:
        return "?";
    }
  };

  return (
    <div className="detail_container">
      <div className="detail_records">
        <h1>{t("details")}:</h1>
        <label htmlFor="lastname">
          {t("last_name")}:
          <input type="text" id="lastname" readOnly value={data.lastname} />
        </label>
        <label htmlFor="birthdate">
          {t("birthdate")}:
          <input
            type="text"
            id="birthdate"
            readOnly
            value={(new Date(data.birthdate.seconds * 1000).toLocaleDateString('en-EU'))}
          />
        </label>
        <label htmlFor="club_member">
          {t("clubmember")}:
          <input
            type="text"
            id="club_member"
            readOnly
            value={renderDetails(data.club_member)}
          />
        </label>
        <label htmlFor="car_owner">
          {t("carowner")}:
          <input
            type="text"
            id="car_owner"
            readOnly
            value={renderDetails(data.car_owner)}
          />
        </label>
      </div>
      <Link className="detail_return_button" to={"/"}>
        {t("return")}
      </Link>
    </div>
  );
};
