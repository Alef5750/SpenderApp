import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//componenets
import Navigation from "../components/Navigation";
//styles
import styles from "../styles/NewExpense.module.css";
import { Button, Form, Alert } from "react-bootstrap";

//validation
const formSchema = Yup.object().shape({
  category: Yup.string().required("Please enter a category name").max(20),
});

export default function NewExpense(props) {
  function handleNewCategory(newCategory) {
    console.log(newCategory);
    // AddNewCategory();
  }
  return (
    <Formik
      initialValues={{
        category: "",
      }}
      validationSchema={formSchema}
      onSubmit={(newCategory) => handleNewCategory(newCategory)}
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
              Add a new category of your choice!
            </h1>
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Form.Group>
                <input
                  className={styles.input}
                  type="text"
                  name={"category"}
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              {errors.category && touched.category && (
                <Alert variant="danger">{errors.category}</Alert>
              )}

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
