import React from "react";

//styles
import styles from "../styles/Expenses.module.css";
//images

export default function CategoryCard(props) {
  // each Category component has 3 props
  // 1. props.categoryName
  // 2. props.categoryLogo
  // 3. props.handleSelect() (which reroutes to NewExpense page, where the <h1> contains the title from the /:title in route)
  return (
    <div className={`${styles.gridElement}`}>
      <div className="h-50 py-4">{props.title}</div>
      <div className="h-50">
        <img src={props.logo} alt="monthly" />
      </div>
    </div>
  );
}
