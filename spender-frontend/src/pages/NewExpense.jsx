// despite being in 'pages' folder, this is a component, reused multiple times.
// each time it is used, it is at a different page location,
// and has a different "category"(see variable below)
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
//componenets
import Navigation from "../components/Navigation";
import { NewExpenseCategory } from "../helpers/conditionals";
import { SaveNewExpense } from "../helpers/api";
//styles
import styles from "../styles/NewExpense.module.css";
import { Button, Form, Alert } from "react-bootstrap";

//validation
const formSchema = Yup.object().shape({
  title: Yup.string()
    .required("Oops! You haven't entered a title")
    .min(5)
    .max(15),
  amount: Yup.number().required("Oops! You haven't entered an amount"),
  desc: Yup.string(),
});

export default function NewExpense(props) {
  function handleNewExpense(expense) {
    console.log(expense);
    SaveNewExpense(expense, props.id);
  }
  return (
    <Formik
      initialValues={{
        category: NewExpenseCategory(),
        title: "",
        amount: "",
        desc: "",
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
          <div className={styles.body}>
            <Navigation />
            <h1 className={`${styles.text} ${styles.h1}`}>
              {NewExpenseCategory()}
            </h1>
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Form.Group>
                <h5 className={styles.text}>What was it?</h5>
                <input
                  className={styles.input}
                  type="text"
                  name={"title"}
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              {errors.title && touched.title && (
                <Alert variant="danger">{errors.title}</Alert>
              )}
              <Form.Group>
                <h5 className={styles.text}>How much did it cost?</h5>
                <input
                  className={styles.input}
                  placeholder="$"
                  type="number"
                  name={"amount"}
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              {errors.amount && touched.amount && (
                <Alert variant="danger">{errors.amount}</Alert>
              )}
              <Form.Group>
                <h5 className={styles.text}>Description (optional):</h5>
                <textarea
                  className={styles.textarea}
                  cols="40"
                  rows="5"
                  type="text"
                  name={"desc"}
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Button className={styles.saveButton} type="submit">
                Save
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
