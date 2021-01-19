import React from "react";
// import { useState } from 'react';
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

//Icons
import HomeIconWhite from "../images/HomeIconWhite.png";
import HomeIconBlue from "../images/HomeIconBlue.png";
import ReportsIconWhite from "../images/ReportsIconWhite.png";
import ReportsIconBlue from "../images/ReportsIconBlue.png";
import ExpensesIconWhite from "../images/ExpensesIconWhite.png";
import ExpensesIconBlue from "../images/ExpensesIconBlue.png";
import SettingsIconWhite from "../images/SettingsIconWhite.png";
import SettingsIconBlue from "../images/SettingsIconBlue.png";

export default function Navigation() {
  let HomeIcon, ExpensesIcon, ReportsIcon, SettingsIcon;
  const location = useLocation();
  if (location.pathname === "/home") HomeIcon = HomeIconBlue;
  else HomeIcon = HomeIconWhite;
  if (location.pathname === "/expenses") ExpensesIcon = ExpensesIconBlue;
  else ExpensesIcon = ExpensesIconWhite;
  if (location.pathname === "/charts") ReportsIcon = ReportsIconBlue;
  else ReportsIcon = ReportsIconWhite;
  if (location.pathname === "/settings") SettingsIcon = SettingsIconBlue;
  else SettingsIcon = SettingsIconWhite;
  return (
    <Navbar className={styles.navBar} sticky="top" expand="sm">
      <NavLink to="/home">
        <img src={HomeIcon} alt="Home" />
      </NavLink>
      <NavLink to="/expenses">
        <img src={ExpensesIcon} alt="Expenses" />
      </NavLink>
      <NavLink to="/charts">
        <img src={ReportsIcon} alt="Settings" />
      </NavLink>
      <NavLink to="/settings">
        <img src={SettingsIcon} alt="Settings" />
      </NavLink>
    </Navbar>
  );
}
