import React from "react";

//styles
import styles from "../styles/Expenses.module.css";
//images
import expenses_monthly from "../images/expenses_monthly.png";
// import expenses_food from "../images/expenses_food.png";
// import expenses_entertainement from "../images/expenses_entertainement.png";
// import expenses_other from "../images/expenses_other.png";
export default function CategoryCard(props) {
  // each Category component has 3 props
  // 1. props.categoryName
  // 2. props.categoryLogo
  // 3. props.handleSelect() (which reroutes to NewExpense page, where the <h1> contains the title from the /:title in route)
  return (
    <div className={`${styles.gridElement}`}>
      <div className="h-50 py-4">{props.title}</div>
      <div className="h-50">
        <img src={expenses_monthly} alt="monthly" />
      </div>
    </div>
  );
}
