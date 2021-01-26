import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

function Charts(props) {
    //initialise all the month with an expense by 0
    const { data, time, labels, dataComparison } = props;
    const [expensesByMonth, setExpensesByMonth] = useState([0, 0, 0]);
    const [expensesByMonthComparison, setExpensesByMonthComparison] = useState([
        0,
        0,
        0,
    ]);
    const [titleLegend, setTitleLegend] = useState("");
    const [titleLegendComparison, setTitleLegendComparison] = useState("");
    // get all the expenses by month

    const getAmountByMonth = () => {
        const myExpenseByMonth = [];
        let count = 0;
        for (const key in data) {
            for (const monthKey in data[key]) {
                myExpenseByMonth[count] = 0;
                data[key][monthKey].map((element) => {
                    myExpenseByMonth[count] += element.amount;
                });
                count++;
            }
        }
        setExpensesByMonth(myExpenseByMonth);
    };

    const getAmountByMonthComparison = () => {
        const myExpenseByMonthComparison = [];
        let count = 0;
        for (const key in dataComparison) {
            for (const monthKey in dataComparison[key]) {
                myExpenseByMonthComparison[count] = 0;
                dataComparison[key][monthKey].map((element) => {
                    myExpenseByMonthComparison[count] += element.amount;
                });
                count++;
            }
        }
        setExpensesByMonthComparison(myExpenseByMonthComparison);
    };

    const handleTitleLegend = () => {
        const endMonth = moment().format("MMM");
        const startMonth = moment().subtract(2, "months").format("MMM");
        const year = moment().format("YYYY");
        setTitleLegend(startMonth + " - " + endMonth + " " + year);
    };

    const handleTitleLegendComparison = () => {
        const endMonth = moment().subtract(2, "months").format("MMM");
        const startMonth = moment().subtract(5, "months").format("MMM");
        const year = moment().subtract(2, "months").format("YYYY");
        setTitleLegendComparison(startMonth + " - " + endMonth + " " + year);
    };

    const datasetKeyProvider = () => {
        return btoa(Math.random()).substring(0, 12);
    };

    useEffect(() => {
        if (data) {
            getAmountByMonth();
            getAmountByMonthComparison();
        } else {
            setExpensesByMonth([]);
            setExpensesByMonthComparison([]);
        }
    }, [props]);

    useEffect(() => {
        handleTitleLegend();
        handleTitleLegendComparison();
    }, []);

    var dataGraph = {
        labels: labels,
        datasets: [
            {
                label: titleLegend,
                data: expensesByMonth,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 2,
                key: 1,
            },
            {
                label: titleLegendComparison,
                data: expensesByMonthComparison,
                backgroundColor: "red",
                borderColor: "lightcoral",
                fill: false,
                lineTension: 0,
                radius: 2,
                key: 2,
            },
        ],
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "comparison between the last 3 months and the 3 before them",
            fontSize: 10,
            fontColor: "#111",
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 8,
            },
        },
        maintainAspectRatio: false,
    };
    return (
        <div className="ml-4 mr-3 mt-3">
            <Line
                data={dataGraph}
                options={options}
                datasetKeyProvider={datasetKeyProvider}
                height={215}
            />
        </div>
    );
}
export default Charts;
