import React, { useState } from "react";
import { Redirect } from "react-router-dom";

//styles
import styles from "../styles/Expenses.module.css";

export default function CategoryCard(props) {
    const [redirect, setDirect] = useState(null);

    const handleSelect = () => {
        if (props.title === "Add New") {
            setDirect("/addcategory");
        } else {
            setDirect(`/expenses/${props.title}`);
        }
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }
    return (
        <div onClick={() => handleSelect()} className={`${styles.gridElement}`}>
            <div className="h-50 py-4">{props.title}</div>
            <div className="h-50">
                <img src={props.logo} alt="category" />
            </div>
        </div>
    );
}
