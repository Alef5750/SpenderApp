import React from "react";
//styles
import styles from "../styles/Expenses.module.css";

import CategoryCard from "./CategoryCard";

export default function CategoriesGrid(props) {

  return (
    <div className={styles.gridContainer}>
      {props.cards.map((card) => (
        <CategoryCard title={card.title} logo={card.logo} key={card.id} />
      ))}
    </div>
  );
}
