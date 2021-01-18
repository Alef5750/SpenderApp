import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import MonthCharts from "../components/monthCharts"
import QuarterCharts from "./QuarterCharts";
import styles from "../styles/ChartsNav.module.css";
import YearCharts from "./yearCharts";
import ChartsDescription from "./chartsDescription";

export default function ChartsNav() {

    return (
        <Router>
            <Navbar bg="secondary" sticky="top" expand="sm" className="py-2 mb-2 justify-content-between">
                <NavLink to="/charts/month" className={styles.links}>
                    Month
                </NavLink>
                <NavLink to="/charts/3months" className={styles.links}>
                    3-Months
                </NavLink>
                <NavLink to="/charts/year" className={styles.links}>
                    Year
                </NavLink>
            </Navbar>
            <Switch>
                <Route path="/charts/month">
                    <MonthCharts />
                </Route>
                <Route path="/charts/3months">
                    <QuarterCharts/>
                </Route>
                <Route path="/charts/year">
                    <YearCharts/>
                </Route>
                <Route path="/">
                    <ChartsDescription/>
                </Route>
            </Switch>
        </Router>
    );
}