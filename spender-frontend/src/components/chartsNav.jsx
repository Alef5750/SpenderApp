import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "../styles/ChartsNav.module.css";

export default function ChartsNav() {
    let Month, Months, Year;
    const On = styles.On
    const Off = styles.Off
    const location = useLocation();
    if (location.pathname === "/charts/month") Month = On;
    else Month=Off;
    if (location.pathname === "/charts/3months") Months = On;
    else Months = Off;
    if (location.pathname === "/charts/year") Year = On;
    else Year = Off;
    return (
        <Navbar bg="secondary" sticky="top" expand="sm" className="py-2 justify-content-around">
            <NavLink to="/charts/month" className="text-decoration-none">
                <span className={Month}>Month</span>
            </NavLink>
            <NavLink to="/charts/3months" className="text-decoration-none">
                <span className={Months}>3 Months</span>
            </NavLink>
            <NavLink to="/charts/year" className="text-decoration-none">
                <span className={Year}>Year</span>
            </NavLink>
        </Navbar>
    );
}