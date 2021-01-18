import React from "react";
import { useLocation } from "react-router-dom";

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
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}
