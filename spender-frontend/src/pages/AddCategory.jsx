import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../components/PrivateRoute";

import { Formik } from "formik";
import * as Yup from "yup";
//componenets
import Navigation from "../components/Navigation";
//api
import { UpdateCategories } from "../helpers/api";
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
  const user = useContext(UserContext);
  const history = useHistory();
  const [redirect, setDirect] = useState(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios.get(`${backendURL}/api/users/${user._id}`, {
  //         withCredentials: true,
  //       });
  //       const data = JSON.stringify(result.data);
  //       setData(data);
  //     };

  //     fetchData();
  //   }, [user._id]);
  function handleNewCategory(newCategory) {
    //PUT newCategory in backend
    console.log(user.categories);
    const updatedCategories = [...user.categories, newCategory.category];
    console.log(updatedCategories);
    UpdateCategories(updatedCategories, user._id);
    //retrieve user's categories array from backend
    console.log(user.categories);

    //push this array/it's data to local array
    arrayOfCards.push({
      title: newCategory.category,
      logo: expenses_other,
      id: Math.random(),
    });
    setDirect("/expenses");
    window.location.reload();
    console.log(user);
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
                <Alert variant="danger">{errors.category}</Alert>
              )}

              <Button className={styles.saveButton} type="submit">
                Save
              </Button>
            </Form>
            <Button
              className={`w-100 ${styles.buttonBottom}`}
              onClick={() => {
                history.push("/expenses");
              }}
            >
              Cancel
            </Button>
          </div>
        );
      }}
    </Formik>
  );
}

export { arrayOfCards };
