import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { getExpensesById } from "../helpers/api";
import styles from "../styles/Charts.module.css";
import moment from "moment";


export default function ChartsHeader({ timeRequest, lastTimeRequest }) {

    const handleChange = async (event) => {
        let date = new Date()
        let time;
        let lastTime="";
        if (event === "month") time = `${date.getFullYear()}/${moment(date).format('M')}-1`
        if (event === "year") time = `${date.getFullYear()}/${moment(date).format('M')}-12`
        if (event === "3months") time = `${date.getFullYear()}/${moment(date).format('M')}-3`
        if (event === "month") {
            if(moment().subtract(1, 'months').format('M')==12){
                lastTime = `${moment().subtract(1, 'year').format('YYYY')}/${moment().subtract(1, 'months').format('M')}-1`;
            }else{
                lastTime = `${date.getFullYear()}/${moment().subtract(1, 'months').format('M')}-1`;
            }
        }
        if (event === "3months"){
            const lastThreeMonth = moment().subtract(3, 'months').format('M');
            if(lastThreeMonth==12 || lastThreeMonth==11 || lastThreeMonth==10) {
                lastTime = `${moment().subtract(1, 'year').format('YYYY')}/${moment().subtract(3, 'months').format('M')}-3`; 
            }else{
                lastTime = `${date.getFullYear()}/${moment().subtract(3, 'months').format('M')}-3`;
            }
        } 
        if (event === "year") lastTime = `${moment().subtract(1, 'year').format('YYYY')}/${moment(date).format('M')}-12`;
        timeRequest(time);
        lastTimeRequest(lastTime);
        // await getData(time);
        // getExpensesById(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`)
        //    .then(response => console.log(response))
    }

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