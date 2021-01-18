import React from "react";
//components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
//styles
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Settings.module.css";

export default function Settings() {
  return (
    <div className={styles.body}>
      <Navigation />
      <h1 className={`${styles.text} ${styles.h1}`}>Settings</h1>
      <Form className={styles.form}>
        <Form.Group controlId="formMonthlyIncome">
          <h5 className={styles.text}>Monthly Income</h5>
          <input className={styles.input} type="text" />
        </Form.Group>
        <Form.Group controlId="formMonthlySavingsGoal">
          <h5 className={styles.text}>Monthly Savings Goal</h5>
          <input className={styles.input} type="text" />
        </Form.Group>
        <Button className={styles.saveButton} size="lg" type="submit">
          Save
        </Button>
      </Form>
      <Footer />
    </div>
  );
}
