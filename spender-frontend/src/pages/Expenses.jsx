import React from "react";
// import { Redirect } from "react-router-dom";

//components
import Navigation from "../components/Navigation";
import CategoriesGrid from "../components/CategoriesGrid";
//helpers
import cards from "../helpers/categories";
//styles
import { Button } from "react-bootstrap";
import styles from "../styles/Expenses.module.css";
// import NewExpense from "./NewExpense";

export default function Expenses(props) {
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <div>
      <Navigation />

      <CategoriesGrid cards={cards} />
      <Button
        className={`w-100 ${styles.buttonBottom}`}
        onClick={() => handleEdit()}
      >
        Edit
      </Button>
    </div>
  );
}
