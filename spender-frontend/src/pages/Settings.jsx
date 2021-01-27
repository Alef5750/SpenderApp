import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
//libraries
import { Formik } from "formik";
import * as Yup from "yup";
//styles
import { Form, Button, Alert } from "react-bootstrap";
import styles from "../styles/Settings.module.css";
import { UpdateSettings } from "../helpers/api";
//

//
const formSchema = Yup.object().shape({
  monthlyIncome: Yup.number().required("Oops! You haven't entered your income"),
  monthlyGoal: Yup.number().required("Oops! You haven't entered your goal"),
});

export default function Settings() {
  const user = useContext(UserContext);
  const [redirect, setDirect] = useState(null);

  function handleSettingsUpdate(settings) {
    console.log(settings);
    UpdateSettings(settings, user._id);
    setDirect("/charts/goals");
  }
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <>
      <Formik
        initialValues={{
          monthlyIncome: "",
          monthlyGoal: "",
        }}
        validationSchema={formSchema}
        onSubmit={(settings) => handleSettingsUpdate(settings)}
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
              <h1 className={`${styles.text} ${styles.h1}`}>Settings</h1>
              <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Group controlId="formMonthlyIncome">
                  <h5 className={styles.text}>Monthly Income</h5>
                  <input
                    className={styles.input}
                    type="number"
                    name={"monthlyIncome"}
                    value={values.monthlyIncome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.monthlyIncome && touched.monthlyIncome && (
                    <Alert variant="danger">{errors.monthlyIncome}</Alert>
                  )}
                </Form.Group>
                <Form.Group controlId="formMonthlySavingsGoal">
                  <h5 className={styles.text}>Monthly Savings Goal</h5>
                  <input
                    className={styles.input}
                    type="number"
                    name={"monthlyGoal"}
                    value={values.monthlyGoal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.monthlyGoal && touched.monthlyGoal && (
                    <Alert variant="danger">{errors.monthlyGoal}</Alert>
                  )}
                </Form.Group>
                <Button className={styles.saveButton} size="lg" type="submit">
                  Save
                </Button>
              </Form>
            </div>
          );
        }}
      </Formik>
      <Footer />
    </>
  );
}
