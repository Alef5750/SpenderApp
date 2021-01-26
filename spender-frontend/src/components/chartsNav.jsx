import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import styles from "../styles/Charts.module.css";
import ChartsGoals from "./chartsGoals";
import ChartsHeader from "./chartsHeader";
import ChartsGraphs from "./chartsGraphs";
import ChartsReports from "./chartsReports";
import ChartsDescription from "./chartsDescription";
import moment from "moment";
import { getExpensesById, getUserById } from "../helpers/api";
import { UserContext } from "./PrivateRoute";

export default function ChartsNav() {
    const userContext = useContext(UserContext);

    const [time, setTime] = useState();
    const [lastTime, setLastTime] = useState();
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);
    const [goal, setGoal] = useState();
    const [income, setIncome] = useState();
    const [dataComparison, setDataComparison] = useState([]);

    // this function is receiving time from ChartsHeader and passes it up to Charts
    const handleTimeRequest = (time) => {
        setTime(time);
    };

    // ------------------------ONE MONTH--------------------------//

    // Calculate how many days we have by the current month for the graph's labels
    const numberDayByMonth = (month, year) => {
        month = moment().format("MM") - 1;
        //console.log(month);
        year = moment().format("YYYY");
        var numberDay = 0;
        if (month <= 6) {
            if (month % 2 === 0) {
                numberDay = 31;
            } else {
                numberDay = 30;
            }
        } else {
            if (month % 2 === 1) {
                numberDay = 30;
            } else {
                numberDay = 31;
            }
        }
        if (month === 1) {
            if (year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 === 0) {
                        numberDay = 29;
                    } else {
                        numberDay = 28;
                    }
                } else {
                    numberDay = 29;
                }
            } else {
                numberDay = 28;
            }
        }
        return numberDay;
    };

    // We create an array with the number of the days like [01,02,03,..,28,29,..]
    const creationOfDays = () => {
        const numberDay = numberDayByMonth();
        const arrayOfDays = [];
        for (let index = 1; index <= numberDay; index++) {
            let day = index;
            if (index < 10) {
                day = "0" + index;
            }
            arrayOfDays.push(day);
        }
        setLabels(arrayOfDays);
    };

    // ------------------------YEAR--------------------------//

    // create an array with the month. For example if the current month is March we will have [April, May,...,December, ...,March]
    const creationOfMonths = () => {
        const months = [];
        for (let index = 11; index >= 0; index--) {
            months.push(moment().subtract(index, "months").format("MMM"));
        }
        setLabels(months);
    };

    // ------------------------3 MONTHS--------------------------//

    // Create an array with the last 3 months

    const creationOfWeeks = () => {
        const labs = [];
        labs.push(
            moment().subtract(5, "months").format("MMM") +
                " / " +
                moment().subtract(2, "months").format("MMM")
        );
        labs.push(
            moment().subtract(4, "months").format("MMM") +
                " / " +
                moment().subtract(1, "months").format("MMM")
        );
        labs.push(
            moment().subtract(3, "months").format("MMM") +
                " / " +
                moment().format("MMM")
        );
        setLabels(labs);
        //console.log(labs);
    };

    const lastTimeRequest = (lastTime) => {
        setLastTime(lastTime);
    };

    // Here when we will get the time thanks to the component ChartsHeader, we will check the last character of the time
    // And in function of this character we will know if we need the labels for a month, 3 months or a year
    // In the component Pie% and Line% we will have algorithms that calculate the amount by categories, get all the categories etc
    useEffect(() => {
        (async function () {
            if (time) {
                // console.log(time)
                const getDataFromUser = await getExpensesById(
                    `/api/users/${userContext._id}/expenses?date=${time}`
                );
                const getDataFromUserComparison = await getExpensesById(
                    `/api/users/${userContext._id}/expenses?date=${lastTime}`
                );
                setDataComparison(getDataFromUserComparison);
                // We have to replace "2020/03/1" By time ***********IMPORTANT********
                console.log(getDataFromUserComparison);
                console.log(getDataFromUser);
                setData(getDataFromUser);
                const amount = time.charAt(time.length - 1);
                switch (amount) {
                    case "1":
                        // console.log(amount);
                        creationOfDays();
                        break;
                    case "3":
                        // console.log(amount);
                        creationOfWeeks();
                        break;
                    case "2":
                        // console.log(amount);
                        creationOfMonths();
                        break;
                    default:
                        break;
                }
            }
        })();
    }, [time]);

    useEffect(() => {
        getUserGoalAndIncome(time);
        // return () => {
        //     cleanup
        // }
    }, [time]);

    const getUserGoalAndIncome = async (time) => {
        if (time) {
            const user = await getUserById(`/api/users/${userContext._id}`);
            // console.log(user);
            const period = time.charAt(time.length - 1);
            let periodIncome = user.monthlyIncome;
            let periodGoal = user.monthlyGoal;
            switch (period) {
                case "1":
                    setIncome(periodIncome);
                    setGoal(periodGoal);
                    break;
                case "3":
                    periodIncome *= 3;
                    periodGoal *= 3;
                    setIncome(periodIncome);
                    setGoal(periodGoal);
                    break;
                case "2":
                    periodIncome *= 12;
                    periodGoal *= 12;
                    setIncome(periodIncome);
                    setGoal(periodGoal);
                    break;
                default:
                    break;
            }
            // console.log("income", income, "goal", goal);
        }
    };

    return (
        <div>
            <ChartsHeader
                timeRequest={handleTimeRequest}
                lastTimeRequest={(lastTime) => lastTimeRequest(lastTime)}
            />
            <Router>
                <Navbar expand="sm" className={styles.nav}>
                    <NavLink
                        to="/charts/goals"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Goals
                    </NavLink>
                    <NavLink
                        to="/charts/graphs"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Graphs
                    </NavLink>
                    <NavLink
                        to="/charts/reports"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Reports
                    </NavLink>
                </Navbar>
                <Switch>
                    <Route exact path="/charts/goals">
                        <ChartsGoals data={data} goal={goal} income={income} />
                    </Route>
                    <Route exact path="/charts/graphs">
                        <ChartsGraphs
                            time={time}
                            labels={labels}
                            data={data}
                            dataComparison={dataComparison}
                        />
                    </Route>
                    <Route exact path="/charts/reports">
                        <ChartsReports data={data} income={income} />
                    </Route>
                    <Route exact path="">
                        <ChartsDescription />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
