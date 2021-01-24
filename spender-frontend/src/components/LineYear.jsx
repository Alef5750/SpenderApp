import React, { useState, useEffect } from "react"
import { Line } from 'react-chartjs-2';
import moment from 'moment';


function Charts(props) {
    const [labels, setLabels] = useState([]);

    //initialise all the month with an expense by 0
    const [expensesByMonth, setExpensesByMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const expenseYear = props.mockData;

    // get all the expenses by month
    const getAmountByMonth = () => {

        // "this variable" let we know if there was a expense for the month
        let globalyMonth = 1;
        const myExpenseByMonth = [];
        for (const key in expenseYear) {
            myExpenseByMonth[key - 1] = 0;
            expenseYear[key].map(element => {
                myExpenseByMonth[key - 1] += element.amount;
            });

        }
        setExpensesByMonth(myExpenseByMonth);
    }

    const defineTheLabels = () => {
        console.log(props.time)
    }

    useEffect(() => {
        defineTheLabels();
        console.log(props.time)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        setLabels(months);
    }, [])

    useEffect(() => {
        console.log(props.mockData);
    }, [])

    useEffect(() => {
        getAmountByMonth();
    }, [])

    var data = {
        labels: labels,
        datasets: [
            {
                label: moment().format('YYYY'),
                data: expensesByMonth,
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
            {console.log(expensesByMonth)}
            <Line
                data={data}
                options={options}
                height={250}
            />
        </div>
    )
}
export default Charts