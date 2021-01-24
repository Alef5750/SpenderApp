import React, { useState, useEffect } from "react"
import { Line } from 'react-chartjs-2';
import moment from 'moment';


function Charts(props) {
    const {data, time, labels} = props;
    const [dataGraph, setDataGraph] = useState([]);
    

    const creationDataGraph = () => {
        //expensesMonth
        let count = 0;
        const daysByMonth = labels.length;
        const myAmoutByDay = [];
        const getTheYear = moment("02/02/2020").format('YYYY');
        const getTheMonth = moment("02/02/2020").format('M');
        for (let index = 1; index <= daysByMonth; index++) {
            let find = false;
            myAmoutByDay[count] = 0;
            for (let j = 0; j < data[getTheYear][getTheMonth].length; j++) {
                const getDayFromData = moment(data[getTheYear][getTheMonth][j].date).format('D');
                if (getDayFromData == index) {
                    find = true;
                    myAmoutByDay[count] += data[getTheYear][getTheMonth][j].amount;
                }
            }
            count++;
        }
        setDataGraph(myAmoutByDay);
    }


    useEffect(() => {
        const getTheYear = moment("02/02/2020").format('YYYY');
        const getTheMonth = moment("02/02/2020").format('M');
        setDataGraph([]);
        if (data[getTheYear] && data[getTheYear][getTheMonth]) {
            creationDataGraph();
        }else{
            setDataGraph([]); 
        }
        console.log(data);
    }, [props])

    var dataG = {
        labels: labels,
        datasets: [
            {
                label: moment().format('MMM'),
                data: dataGraph,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Month's expenses",
            fontSize: 12,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 8
            }
        },
        maintainAspectRatio: false,
    };
    return (
        <div className="ml-4 mr-3 mt-3">
            <Line
                data={dataG}
                options={options}
                height={215}
            />
        </div>
    )
}
export default Charts