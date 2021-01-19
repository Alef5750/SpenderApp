import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import styles from "../styles/Charts.module.css";


const handleChange = (event) => {
    console.log(event);
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