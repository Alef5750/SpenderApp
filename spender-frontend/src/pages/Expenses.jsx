import React, { useContext } from "react";
import { UserContext } from "../components/PrivateRoute";

//components
import Navigation from "../components/Navigation";
import CategoriesGrid from "../components/CategoriesGrid";
//helpers
import { arrayOfCards } from "../pages/AddCategory";
//styles
import { Button } from "react-bootstrap";
import styles from "../styles/Expenses.module.css";

export default function Expenses() {
  const user = useContext(UserContext);

  console.log(user);

  const handleEdit = () => {};
  return (
    <div>
      <Navigation />
      <CategoriesGrid cards={arrayOfCards} />
      <Button
        className={`w-100 ${styles.buttonBottom}`}
        onClick={() => handleEdit()}
      >
        Edit
      </Button>
    </div>
  );
}
