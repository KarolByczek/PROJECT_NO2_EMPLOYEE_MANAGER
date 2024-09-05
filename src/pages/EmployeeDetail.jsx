//import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../index.scss";
import { t } from "i18next";

export const EmployeeDetail = () => {
  const location = useLocation();
  console.log(location.state);
  const data = location.state;

  const dateFormater = (date0) => {
    const formatedmonth =
      date0.getMonth() < 9
        ? "0" + (date0.getMonth() + 1)
        : date0.getMonth() + 1;
    const formatedday =
      date0.getDate() < 10 ? "0" + date0.getDate() : date0.getDate();
    return date0.getFullYear() + "-" + formatedmonth + "-" + formatedday;
  };

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
            value={dateFormater(data.birthdate.toDate())}
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
