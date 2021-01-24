import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//components
import Navigation from "../components/Navigation";
//images
import expenses_monthly from "../images/expenses_monthly.png";
import expenses_food from "../images/expenses_food.png";
import expenses_entertainement from "../images/expenses_entertainement.png";
import expenses_other from "../images/expenses_other.png";
import expenses_add_new from "../images/expenses_add_new.png";
//styles
import { Button } from "react-bootstrap";
import styles from "../styles/Expenses.module.css";

export default function Expenses(prop) {
  const [redirect, setDirect] = useState(null);

  const handleMonthly = () => {
    console.log("monthly");
    setDirect("/expenses/monthly");
  };
  const handleFood = () => {
    console.log("food");
    setDirect("/expenses/food");
  };
  const handleEntertainment = () => {
    console.log("entertainment");
    setDirect("/expenses/entertainment");
  };
  const handleOther = () => {
    console.log("other");
    setDirect("/expenses/other");
  };
  const handleAddNew = () => {
    console.log("addnew");
    setDirect("/expenses/addnew");
  };
  const handleEdit = () => {
    console.log("edit");
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <Navigation />

      <div className="d-flex flex-row mx-4 px-1 mt-5 justify-content-between">
        <div
          className={`d-flex flex-column ${styles.expensesFirstFeaturesDiv}`}
          onClick={() => handleMonthly()}
        >
          <div className="h-50 py-4 ">Monthly</div>
          <div className="h-50">
            <img src={expenses_monthly} alt="monthly" />
          </div>
        </div>
        <div
          className={`d-flex flex-column ${styles.expensesFirstFeaturesDiv}`}
          onClick={() => handleFood()}
        >
          <div className="h-50 py-4">Food</div>
          <div className="h-50">
            <img src={expenses_food} alt="food" />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mx-4 px-1 mt-3 justify-content-between">
        <div
          className={`d-flex flex-column ${styles.expensesFirstFeaturesDiv}`}
          onClick={() => handleEntertainment()}
        >
          <div className="h-50 py-4">Entertainment</div>
          <div className="h-50">
            <img src={expenses_entertainement} alt="entertainment" />
          </div>
        </div>
        <div
          className={`d-flex flex-column ${styles.expensesFirstFeaturesDiv}`}
          onClick={() => handleOther()}
        >
          <div className="h-50 py-4">Other</div>
          <div className="h-50">
            <img src={expenses_other} alt="other" />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mx-4 px-1 mt-3 justify-content-start">
        <div
          className={`d-flex flex-column ${styles.expensesFirstFeaturesDiv}`}
          onClick={() => handleAddNew()}
        >
          <div className="h-50 py-4 ">Add New...</div>
          <div className="h-50">
            <img src={expenses_add_new} alt="Add New" />
          </div>
        </div>
      </div>
      <Button
        className={`w-100 ${styles.buttonBottom}`}
        onClick={() => handleEdit()}
      >
        Edit
      </Button>
    </div>
  );
}
