import React, { useState } from "react";
import { Redirect } from "react-router-dom";

//styles
import styles from "../styles/Expenses.module.css";
//images

// if (redirect) {
//   return <Redirect to={redirect} />;
// }

export default function CategoryCard(props) {
  const [redirect, setDirect] = useState(null);

  const handleSelect = () => {
    if (props.title === "Add New") {
      console.log("You've chosen to add a new category!");
      setDirect("/addcategory");
    } else {
      console.log(`Chosen category: ${props.title}`);
      setDirect(`/expenses/${props.title}`);
    }
  };
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
  // each Category component has 3 props
  // 1. props.categoryName
  // 2. props.categoryLogo
  // 3. props.handleSelect() (which reroutes to NewExpense page, where the <h1> contains the title from the /:title in route)
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <div onClick={() => handleSelect()} className={`${styles.gridElement}`}>
      <div className="h-50 py-4">{props.title}</div>
      <div className="h-50">
        <img src={props.logo} alt="monthly" />
      </div>
    </div>
  );
}
