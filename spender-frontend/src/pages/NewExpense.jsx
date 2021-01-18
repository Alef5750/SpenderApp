import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useLocation } from "react-router-dom";
//styles
import styles from "../styles/NewExpense.module.css";
import { Button, Form, Alert } from "react-bootstrap";

//validation
const formSchema = Yup.object().shape({
  title: Yup.string().required("Oops! You haven't entered a title"),
  amount: Yup.string().required("Oops! You haven't entered an amount"),
  description: Yup.string(),
});

export default function NewExpense() {
  const location = useLocation();
  let category;
  if (location.pathname === "/expenses/addnew")
    category = "Add a new Category!";
  else if (location.pathname === "/expenses/other") category = "Other";
  else if (location.pathname === "/expenses/entertainment")
    category = "Entertainment";
  else if (location.pathname === "/expenses/food") category = "Food";
  else if (location.pathname === "/expenses/entertainment")
    category = "Entertainment";
  else if (location.pathname === "/expenses/monthly")
    category = "Monthly Expenses";
  function handleNewExpense(expense) {
    console.log(expense);
  }
  return (
    <Formik
      initialValues={{
        title: "",
        amount: null,
        description: "",
      }}
      validationSchema={formSchema}
      onSubmit={(expense) => handleNewExpense(expense)}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => {
        return (
          <>
            <h1>{category}</h1>
            <Form className={styles.body} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                name={"title"}
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title && (
                <Alert variant="danger">{errors.title}</Alert>
              )}
              <input
                className={styles.input}
                type="number"
                name={"amount"}
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.amount && touched.amount && (
                <Alert variant="danger">{errors.amount}</Alert>
              )}
              <Button className={styles.saveButton} type="submit">
                Save
              </Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
