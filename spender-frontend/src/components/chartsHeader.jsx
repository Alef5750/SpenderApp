import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { getExpensesById } from "../helpers/api";
import styles from "../styles/Charts.module.css";
import moment from "moment";


export default function ChartsHeader({ timeRequest }) {

    const handleChange = (event) => {
        let date = new Date()
        let time
        let months
        if (event === "month") time = `${date.getFullYear()}/${moment(date).format('MM')}-1`
        if (event === "year") time = `${date.getFullYear()}/${moment(date).format('MM')}-12`
        if (event === "3months") time = `${date.getFullYear()}/${moment(date).format('MM')}-3`
        timeRequest(time);
        getExpensesById(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`)
           .then(response => console.log(response))
    }
    // console.log(time);
    // /api/users/:id/expenses?date=year/month-amount
    // getExpensesByDate(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`)



    // /api/users/:id/expenses?date=year/month-amount

    return (
        <ToggleButtonGroup
            type="radio"
            name="timePeriods"
            className="d-flex"
            onChange={(event) => handleChange(event)}
        >
            <ToggleButton className={styles.headerButtons} value={"month"}>Month</ToggleButton>
            <ToggleButton className={styles.headerButtons} value={"3months"}>3-Months</ToggleButton>
            <ToggleButton className={styles.headerButtons} value={"year"}>Year</ToggleButton>
        </ToggleButtonGroup>
    );
}