import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "../styles/ChartsNav.module.css";
import ChartsGoals from "./chartsGoals";
import ChartsHeader from "./chartsHeader";
import ChartsGraphs from "./chartsGraphs";
import ChartsReports from "./chartsReports";
import ChartsDescription from "./chartsDescription";

export default function ChartsNav() {
    
    return (
        <div>
            <ChartsHeader/>
            <Router>
                <Navbar expand="sm" className="fixed-bottom py-2 justify-content-between bg-warning">
                    <NavLink to="/charts/goals" className="text-decoration-none">
                        <span className={styles.link}>Goals</span>
                    </NavLink>
                    <NavLink to="/charts/graphs" className="text-decoration-none">
                        <span className={styles.link}>Graphs</span>
                    </NavLink>
                    <NavLink to="/charts/reports" className="text-decoration-none">
                        <span className={styles.link}>Reports</span>
                    </NavLink>
                </Navbar>
                <Switch>
                    <Route path="/charts/goals">
                        <ChartsGoals />
                    </Route>
                    <Route path="/charts/graphs">
                        <ChartsGraphs />
                    </Route>
                    <Route path="/charts/reports">
                        <ChartsReports />
                    </Route>
                    <Route path="/">
                        <ChartsDescription/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}