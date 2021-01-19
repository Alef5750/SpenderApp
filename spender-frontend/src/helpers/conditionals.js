import { useLocation } from "react-router-dom";
//Icons
import HomeIconWhite from "../images/HomeIconWhite.png";
import HomeIconBlue from "../images/HomeIconBlue.png";
import ReportsIconWhite from "../images/ReportsIconWhite.png";
import ReportsIconBlue from "../images/ReportsIconBlue.png";
import ExpensesIconWhite from "../images/ExpensesIconWhite.png";
import ExpensesIconBlue from "../images/ExpensesIconBlue.png";
import SettingsIconWhite from "../images/SettingsIconWhite.png";
import SettingsIconBlue from "../images/SettingsIconBlue.png";

//Expenses.jsx --> NewExpenses.jsx
export function NewExpenseCategory() {
  const location = useLocation();
  let category;
  if (location.pathname === "/expenses/addnew") {
    category = "Add a new Category!";
  } else if (location.pathname === "/expenses/other") category = "Other";
  else if (location.pathname === "/expenses/entertainment")
    category = "Entertainment";
  else if (location.pathname === "/expenses/food") category = "Food";
  else if (location.pathname === "/expenses/entertainment")
    category = "Entertainment";
  else if (location.pathname === "/expenses/monthly")
    category = "Monthly Expenses";
  return category;
}
//Navigation.jsx icons
let HomeIcon, ExpensesIcon, ReportsIcon, SettingsIcon;
export function Home() {
  const location = useLocation();
  if (location.pathname === "/home") HomeIcon = HomeIconBlue;
  else HomeIcon = HomeIconWhite;
  return HomeIcon;
}
export function Expenses() {
  const location = useLocation();
  if (location.pathname === "/expenses") ExpensesIcon = ExpensesIconBlue;
  else ExpensesIcon = ExpensesIconWhite;
  return ExpensesIcon;
}
export function Reports() {
  const location = useLocation();
  if (location.pathname === "/charts") ReportsIcon = ReportsIconBlue;
  else ReportsIcon = ReportsIconWhite;
  return ReportsIcon;
}
export function Settings() {
  const location = useLocation();
  if (location.pathname === "/settings") SettingsIcon = SettingsIconBlue;
  else SettingsIcon = SettingsIconWhite;
  return SettingsIcon;
}
