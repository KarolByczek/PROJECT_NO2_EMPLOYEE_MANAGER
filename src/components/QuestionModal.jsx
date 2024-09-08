import { useTranslation } from "react-i18next";
import { db } from "../firebase";
import { deleteDoc, doc, collection } from "firebase/firestore";
import React from "react";

export const QuestionModal = (props) => {
  const { t } = useTranslation();
  const collectionRef = collection(db, "WORKERS_DATA");

  async function onClickButton01(employee) {
    try {
      const docRef = doc(collectionRef, employee.id);
      await deleteDoc(docRef);
    } catch (error) {
      console.log("The errors are:", error);
    }

    props.setter01(props.dataset.filter((oneof) => oneof !== props.item));
    props.setter03([...props.toDelete, props.item]);
    props.setter02(false);
  }

  return (
    <div>
      <div className="black_background"></div>
      <div className={props.className}>
        {t("delete_confirmation")}
        <div>
          {props.item.firstname} {props.item.lastname}, {t("birthdate")}: {}
          {props.item.birthdate.toDate().toLocaleDateString("pl-US")}
        </div>
        <div className="modbuttons">
          <button onClick={() => onClickButton01(props.item)}>
            {t("confirmation")}
          </button>
          <button
            onClick={() => {
              props.setter02(false);
            }}
          >
            {t("cancellation")}
          </button>
        </div>
      </div>
    </div>
  );
};
