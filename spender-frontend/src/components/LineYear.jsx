import React, { useState, useEffect } from "react"
import { Line } from 'react-chartjs-2';
import moment from 'moment';


function Charts({ data, time, labels, dataComparison }) {
    //initialise all the month with an expense by 0
    const [expensesByMonth, setExpensesByMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [expensesByMonthComparison, setExpensesByMonthComparison] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    // get all the expenses by month

    const getAmountByMonth = () => {
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

    const getAmountByMonthComparison = () => {
        const myExpenseByMonthComparison = [];
        let count = 0;
        for (const key in dataComparison) {
            for (const monthKey in dataComparison[key]) {
                myExpenseByMonthComparison[count] = 0;
                dataComparison[key][monthKey].map(element => {
                    myExpenseByMonthComparison[count] += element.amount;
                });
                count++;
            }
        }
        setExpensesByMonthComparison(myExpenseByMonthComparison);
    }
    useEffect(() => {
        if (data) {
            getAmountByMonth();
            getAmountByMonthComparison();
        } else {
            setExpensesByMonth([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setExpensesByMonthComparison([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    }, [data])

    var dataGraph = {
        labels: labels,
        datasets: [
            {
                label: moment().subtract(1, 'year').format('YYYY')+" - "+moment().format('YYYY'),
                data: expensesByMonth,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 2
            },
            {
                label: moment().subtract(2, 'year').format('YYYY')+" - "+moment().subtract(1, 'year').format('YYYY'),
                data: expensesByMonthComparison,
                backgroundColor: "red",
                borderColor: "lightcoral",
                fill: false,
                lineTension: 0,
                radius: 2
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "expenses for "+moment().format('YYYY')+" in comparison with " +moment().subtract(1, 'year').format('YYYY'),
            fontSize: 10,
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