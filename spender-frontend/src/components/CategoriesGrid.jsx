import React from "react";
//styles
import styles from "../styles/Expenses.module.css";
//logo
import expenses_add_new from "../images/expenses_add_new.png";

import CategoryCard from "./CategoryCard";

export default function CategoriesGrid(props) {
  return (
    <div className={styles.gridContainer}>
      {props.cards.map((card) => (
        <CategoryCard title={card.title} logo={card.logo} key={card.id} />
      ))}
      <CategoryCard title="Add New" logo={expenses_add_new} />
    </div>
  );
}
