import React, { useState, useEffect } from "react"
import { Line } from 'react-chartjs-2';
import moment from 'moment';


function Charts({ data, time, labels }) {
    //initialise all the month with an expense by 0
    const [expensesByMonth, setExpensesByMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    // get all the expenses by month

    const getAmountByMonth = () => {
        // "this variable" let we know if there was a expense for the month
        let globalyMonth = 1;
        const myExpenseByMonth = [];
        let count = 0;
        for (const key in data) {
            for (const monthKey in data[key]) {
                myExpenseByMonth[count] = 0;
                data[key][monthKey].map(element => {
                    myExpenseByMonth[count] += element.amount;
                });
                count++;
            }
        }
        setExpensesByMonth(myExpenseByMonth);
    }

    const defineTheLabels = () => {
        console.log(time)
    }

    // useEffect(() => {
    //     defineTheLabels();
    //     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //     setLabels(months);
    // }, [])

    useEffect(() => {
        getAmountByMonth();
    }, [data])

    // useEffect(() => {
    //     getAmountByMonth();
    // }, [])

    var dataGraph = {
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
            <Line
                data={dataGraph}
                options={options}
                height={215}
            />
        </div>
    )
}
export default Charts