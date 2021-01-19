import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//helpers
import { Home, Expenses, Reports, Settings } from "../helpers/conditionals";
//styles
import styles from "../styles/Navbar.module.css";

export default function Navigation() {
  return (
    <Navbar className={styles.navBar} sticky="top" expand="sm">
      <NavLink to="/home">
        <img src={Home()} alt="Home" />
      </NavLink>
      <NavLink to="/expenses">
        <img src={Expenses()} alt="Expenses" />
      </NavLink>
      <NavLink to="/charts">
        <img src={Reports()} alt="Reports" />
      </NavLink>
      <NavLink to="/settings">
        <img src={Settings()} alt="Settings" />
      </NavLink>
    </Navbar>
  );
}
