import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import CategoryCards from "../components/Category";
export default function CategoriesGrid(props) {
  const [redirect, setDirect] = useState(null);
  let categoryName;
  const Select = () => {
    console.log("You've selected ______");
    setDirect(`/expenses/${categoryName}`);
  };
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <div className="d-flex flex-row mx-4 px-1 mt-5 justify-content-between">
      <CategoryCards handleSelect={() => Select()} />
    </div>
  );
}
