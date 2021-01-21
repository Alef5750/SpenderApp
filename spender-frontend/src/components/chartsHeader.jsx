import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
// import { getExpensesByDate } from "../helpers/api";
import styles from "../styles/Charts.module.css";


const handleChange = (event) => {
    let date = new Date()
    let time
    let months
    if (event === "month") time = `${date.getMonth() + 1} ${date.getFullYear()}`
    if (event === "year") time = date.getFullYear() 
    if (event === "3months") {
        months = date.getMonth()
        if (months > 1) time = {
            first: `${months - 1} ${date.getFullYear()}`,
            second: `${months} ${date.getFullYear()}`,
            third: `${months + 1} ${date.getFullYear()}`
        }
        else {
            if (months === 0) time = {
                first: `11 ${date.getFullYear() - 1}`,
                second: `12 ${date.getFullYear() - 1}`,
                third: `${months + 1} ${date.getFullYear()}`
            }
            
            if (months === 1) time = {
                first: `12 ${date.getFullYear() - 1}`,
                second: `${months} ${date.getFullYear()}`,
                third: `${months + 1} ${date.getFullYear()}`
            }
        }
    }
    console.log(time);
    // /api/users/:id/expenses?date=year/month-amount
    // getExpensesByDate(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`)

} 

export default function ChartsHeader() {
    
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