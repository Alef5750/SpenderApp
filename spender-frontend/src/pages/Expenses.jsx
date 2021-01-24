import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
//components
import Navigation from "../components/Navigation";
import CategoriesGrid from "../components/CategoriesGrid";

//styles
import { Button } from "react-bootstrap";
import styles from "../styles/Expenses.module.css";

export default function Expenses(props) {
  let initialCategories = ["monthly", "food", "entertainment", "other"];
  //needs to be objects with all 3 props of a category: title, logo, function
  const [currentCategories, setCategories] = useState(initialCategories);

  // const handleMonthly = () => {
  //   console.log("monthly");
  //   setDirect("/expenses/monthly");
  // };
  // const handleFood = () => {
  //   console.log("food");
  //   setDirect("/expenses/food");
  // };
  // const handleEntertainment = () => {
  //   console.log("entertainment");
  //   setDirect("/expenses/entertainment");
  // };
  // const handleOther = () => {
  //   console.log("other");
  //   setDirect("/expenses/other");
  // };
  // const handleAddNew = () => {
  //   console.log("addnew");
  //   setDirect("/addcategory");
  // };
  const handleOnSelect = () => {
    console.log("Category Selected!");
    setCategories([...currentCategories, "another category"]);
  };
  const handleEdit = () => {
    console.log("edit");
  };

  // if (redirect) {
  //   return <Redirect to={redirect} />;
  // }

  return (
    <div>
      <Navigation />

      <CategoriesGrid
        categoryCards={currentCategories}
        onSelect={() => handleOnSelect()}
      />
      <Button
        className={`w-100 ${styles.buttonBottom}`}
        onClick={() => handleEdit()}
      >
        Edit
      </Button>
    </div>
  );
}
