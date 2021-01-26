import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
//componenets
import Navigation from "../components/Navigation";
//styles
import styles from "../styles/NewExpense.module.css";
import { Button, Form, Alert } from "react-bootstrap";
//images
import expenses_monthly from "../images/expenses_monthly.png";
import expenses_food from "../images/expenses_food.png";
import expenses_entertainement from "../images/expenses_entertainement.png";
import expenses_other from "../images/expenses_other.png";
//validation
const formSchema = Yup.object().shape({
    category: Yup.string().required("Please enter a category name").max(20),
});

let arrayOfCards = [
    {
        title: "Monthly",
        logo: expenses_monthly,
        id: Math.random(),
    },
    { title: "Food", logo: expenses_food, id: Math.random() },
    {
        title: "Entertainment",
        logo: expenses_entertainement,
        id: Math.random(),
    },
    { title: "Other", logo: expenses_other, id: Math.random() },
];
export default function AddCategory() {
    const [redirect, setDirect] = useState(null);

    function handleNewCategory(newCategory) {
        arrayOfCards.push({
            title: newCategory.category,
            logo: expenses_other,
            id: Math.random(),
        });
        setDirect("/expenses");
    }
    if (redirect) {
        return <Redirect to={redirect} />;
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
                                <Alert variant="danger">
                                    {errors.category}
                                </Alert>
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

export { arrayOfCards };
