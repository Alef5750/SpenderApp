import React from "react";
// import { Redirect } from "react-router-dom";
//styles
import styles from "../styles/Expenses.module.css";

import CategoryCard from "./CategoryCard";

export default function CategoriesGrid(props) {
  //   const [redirect, setDirect] = useState(null);
  //   if (redirect) {
  //     return <Redirect to={redirect} />;
  //   }
  return (
    <div className={styles.gridContainer}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
    /* // className="d-flex flex-row mx-4 px-1 mt-5 justify-content-between"> */
  );
}
