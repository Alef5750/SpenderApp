// despite being in 'pages' folder, this is a component, reused multiple times.
// each time it is used, it is at a different page location,
// and has a different "category"(see variable below)
import React, { useContext } from "react";
import { UserContext } from "../components/PrivateRoute";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
//helpers
// import cards from "../helpers/categories";

//componenets
import Navigation from "../components/Navigation";
// import { NewExpenseCategory } from "../helpers/conditionals";
import { SaveNewExpense } from "../helpers/api";
//styles
import styles from "../styles/NewExpense.module.css";
import { Button, Form, Alert } from "react-bootstrap";

//validation
const formSchema = Yup.object().shape({
    category: Yup.string().required("Please enter a category name").max(20),
    title: Yup.string()
        .required("Oops! You haven't entered a title")
        .min(5)
        .max(20),
    amount: Yup.number().required("Oops! You haven't entered an amount"),
    desc: Yup.string(),
});

export default function NewExpense(props) {
    const user = useContext(UserContext);

    const path = useLocation().pathname;
    console.log(path);
    const category = path.split("/")[2];
    console.log(category);

    function handleNewExpense(expense) {
        console.log(expense);
        SaveNewExpense(expense, user._uid); // used id /////////////////////////////////
    }
    return (
        <Formik
            initialValues={{
                category: category,
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
                            {category}
                        </h1>
                        <Form className={styles.form} onSubmit={handleSubmit}>
                            {errors.category && touched.category && (
                                <Alert variant="danger">
                                    {errors.category}
                                </Alert>
                            )}
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
                                <h5 className={styles.text}>
                                    How much did it cost?
                                </h5>
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
                                <h5 className={styles.text}>
                                    Description (optional):
                                </h5>
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
