import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styles from "../styles/Charts.module.css";
import ChartsGoals from "./chartsGoals";
import ChartsHeader from "./chartsHeader";
import ChartsGraphs from "./chartsGraphs";
import ChartsReports from "./chartsReports";
import ChartsDescription from "./chartsDescription";
import moment from "moment";
import { getExpensesById, getUserById } from "../helpers/api";
import { IdContext } from "./PrivateRoute";

export default function ChartsNav() {
    
    const userId = useContext(IdContext)
    const [time, setTime] = useState()
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([])
    const [goal, setGoal] = useState()
    const [income, setIncome] = useState()

    // this function is receiving time from ChartsHeader and passes it up to Charts
    const handleTimeRequest = (time) => {setTime(time)}
    // ------------------------MONTHS--------------------------//
    const numberDayByMonth = (month, year) => {
        month = moment().format('MM') - 1;
        //console.log(month);
        year = moment().format('YYYY');
        var numberDay = 0;
        if (month <= 6) {
            if (month % 2 == 0) {
                numberDay = 31;
            }
            else {
                numberDay = 30;
            }
        }
        else {
            if (month % 2 == 1) {
                numberDay = 30;
            }
            else {
                numberDay = 31;
            }
        }
        if (month == 1) {
            if (year % 4 == 0) {
                if (year % 100 == 0) {
                    if (year % 400 == 0) {
                        numberDay = 29;
                    }
                    else {
                        numberDay = 28;
                    }
                }
                else {
                    numberDay = 29;
                }
            }
            else {
                numberDay = 28;
            }
        }
        return numberDay;
    }

    const creationOfDays = () => {
        const numberDay = numberDayByMonth();
        const arrayOfDays = [];
        for (let index = 1; index <= numberDay; index++) {
            let day = index;
            if (index < 10) {
                day = '0' + index;
            }
            arrayOfDays.push(day);
        }
        setLabels(arrayOfDays);
    }

    // ------------------------YEAR--------------------------//

    const creationOfMonths = () => {
        const months = [];
        for (let index = 11; index >= 0; index--) {
            months.push(moment().subtract(index, 'months').format('MMM'));
        }
        // console.log(months);
        setLabels(months);
    }

    // ------------------------3 MONTHS--------------------------//

    const creationOfWeeks = () => {
        const labs = [];
        labs.push(moment().subtract(2, 'months').format('MMM'))
        labs.push(moment().subtract(1, 'months').format('MMM'));
        labs.push(moment().format('MMM'));
        setLabels(labs);
        //console.log(labs);
    }

    useEffect(async () => {
        if (time) {
            // console.log(time)
            const getDataFromUser = await getExpensesById(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`);
            // We have to replace "2020/03/1" By time ***********IMPORTANT********
            // console.log(getDataFromUser);
            setData(getDataFromUser);
            const amount = time.charAt(time.length - 1)
            switch (amount) {
                case '1':
                    // console.log(amount);
                    creationOfDays();
                    break;
                case '3':
                    // console.log(amount);
                    creationOfWeeks();
                    break;
                case '2':
                    // console.log(amount);
                    creationOfMonths();
                    break;
            }
        }

    }, [time])

    useEffect(() => {
        getUserGoalAndIncome(time)
        // return () => {
        //     cleanup
        // }
    }, [time])

    const getUserGoalAndIncome = async (time) => {
        if(time){
            const user = await getUserById(`/api/users/${userId}`)
            // console.log(user);
            const period = time.charAt(time.length - 1)
            let periodIncome = user.monthlyIncome
            let periodGoal = user.monthlyGoal
            switch (period) {
                case '1':
                    setIncome(periodIncome)
                    setGoal(periodGoal)
                    break;
                case '3':
                    periodIncome *= 3
                    periodGoal *= 3
                    setIncome(periodIncome)
                    setGoal(periodGoal)
                    break;
                case '2':
                    periodIncome *= 12
                    periodGoal *= 12
                    setIncome(periodIncome)
                    setGoal(periodGoal)
                    break;
            }
            // console.log("income", income, "goal", goal);
        }
    }

    return (
        <div>
            <ChartsHeader timeRequest={handleTimeRequest} />
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
                        <ChartsGoals time={time} labels={labels} data={data} />
                    </Route>
                    <Route exact path="/charts/graphs">
                        <ChartsGraphs time={time} labels={labels} data={data} />
                    </Route>
                    <Route exact path="/charts/reports">
                        <ChartsReports data={data} goal={goal} income={income} />
                    </Route>
                    <Route exact path="">
                        <ChartsDescription />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}