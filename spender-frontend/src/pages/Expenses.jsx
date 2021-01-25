import React from "react";
// import { Redirect } from "react-router-dom";

//components
import Navigation from "../components/Navigation";
import CategoriesGrid from "../components/CategoriesGrid";

//styles
import { Button } from "react-bootstrap";
import styles from "../styles/Expenses.module.css";

export default function Expenses(props) {
  let cards = [
    { title: "Monthly", id: Math.random() },
    { title: "Food", id: Math.random() },
    { title: "Entertainment", id: Math.random() },
    { title: "Other", id: Math.random() },
    { title: "Add New", id: Math.random() },
  ];
  // const [redirect, setDirect] = useState(null);

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

  const handleEdit = () => {
    console.log("edit");
  };

  // if (redirect) {
  //   return <Redirect to={redirect} />;
  // }

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
