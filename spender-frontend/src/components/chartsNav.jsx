import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styles from "../styles/Charts.module.css";
import ChartsGoals from "./chartsGoals";
import ChartsHeader from "./chartsHeader";
import ChartsGraphs from "./chartsGraphs";
import ChartsReports from "./chartsReports";
import ChartsDescription from "./chartsDescription";

export default function ChartsNav({ timeRequest }) {
    
    const [time, setTime] = useState()

    // this function is receiving time from ChartsHeader and passes it up to Charts
    const handleTimeRequest = (time) => {
        timeRequest(time)
        setTime(time)
    }


    return (
        <div>
            <ChartsHeader timeRequest={handleTimeRequest}/>
            <Router>
                <Navbar expand="sm" className={styles.nav}>
                    <NavLink to="/charts/goals" className={styles.link} activeClassName={styles.activeLink}>
                        Goals
                    </NavLink>
                    <NavLink to="/charts/graphs" className={styles.link} activeClassName={styles.activeLink}>
                        Graphs
                    </NavLink>
                    <NavLink to="/charts/reports" className={styles.link} activeClassName={styles.activeLink}>
                        Reports
                    </NavLink>
                </Navbar>
                <Switch>
                    <Route exact path="/charts/goals">
                        <ChartsGoals time={time}/>
                    </Route>
                    <Route exact path="/charts/graphs">
                        <ChartsGraphs time={time}/>
                    </Route>
                    <Route exact path="/charts/reports">
                        <ChartsReports time={time}/>
                    </Route>
                    <Route exact path="">
                        <ChartsDescription/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}