import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

function Charts(props) {
    const { data, time, labels, dataComparison } = props;
    const [dataGraph, setDataGraph] = useState([]);
    const [dataGraphComparison, setDataGraphComparison] = useState([]);
    const [titleLegend, setTitleLegend] = useState();

    const creationDataGraph = () => {
        //expensesMonth
        let count = 0;
        const daysByMonth = labels.length;
        const myAmoutByDay = [];
        const getTheYear = moment().format("YYYY");
        const getTheMonth = moment().format("M");
        for (let index = 1; index <= daysByMonth; index++) {
            myAmoutByDay[count] = 0;
            for (let j = 0; j < data[getTheYear][getTheMonth].length; j++) {
                const getDayFromData = moment(
                    data[getTheYear][getTheMonth][j].date
                ).format("D");
                if (getDayFromData == index) {
                    myAmoutByDay[count] +=
                        data[getTheYear][getTheMonth][j].amount;
                }
            }
            count++;
        }
        setDataGraph(myAmoutByDay);
    };
    const creationDataGraphComparison = () => {
        //expensesMonth
        let count = 0;
        const daysByMonth = labels.length;
        const myAmoutByDay = [];
        let getTheYear = moment().format("YYYY");
        const getTheMonth = moment().subtract(1, "months").format("M");
        if (getTheMonth == 12) {
            getTheYear = moment().subtract(1, "year").format("YYYY");
        }
        for (let index = 1; index <= daysByMonth; index++) {
            myAmoutByDay[count] = 0;
            for (
                let j = 0;
                j < dataComparison[getTheYear][getTheMonth].length;
                j++
            ) {
                const getDayFromData = moment(
                    dataComparison[getTheYear][getTheMonth][j].date
                ).format("D");
                if (getDayFromData == index) {
                    myAmoutByDay[count] +=
                        dataComparison[getTheYear][getTheMonth][j].amount;
                }
            }
            count++;
        }
        setDataGraphComparison(myAmoutByDay);
    };

    useEffect(() => {
        const getTheYear = moment().format("YYYY");
        const getTheMonth = moment().format("M");
        if (data[getTheYear] && data[getTheYear][getTheMonth]) {
            creationDataGraph();
        } else {
            setDataGraph([]);
        }
    }, [props]);

    useEffect(() => {
        let getTheYear = moment().format("YYYY");
        const getTheMonth = moment().subtract(1, "months").format("M");
        if (getTheMonth == 12) {
            getTheYear = moment().subtract(1, "year").format("YYYY");
        }
        if (
            dataComparison[getTheYear] &&
            dataComparison[getTheYear][getTheMonth]
        ) {
            creationDataGraphComparison();
        } else {
            setDataGraphComparison([]);
        }
    }, [props]);

    useEffect(() => {
        let getTheYear = moment().format("YYYY");
        const getTheMonth = moment().subtract(1, "months").format("M");
        if (getTheMonth == 12) {
            getTheYear = moment().subtract(1, "year").format("YYYY");
        }
        setTitleLegend(getTheYear);
    }, []);

    var dataG = {
        labels: labels,
        datasets: [
            {
                label: moment().format("MMM") + " - " + moment().format("YYYY"),
                data: dataGraph,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 2,
            },
            {
                label:
                    moment().subtract(1, "months").format("MMM") +
                    " - " +
                    titleLegend,
                data: dataGraphComparison,
                backgroundColor: "red",
                borderColor: "lightcoral",
                fill: false,
                lineTension: 0,
                radius: 2,
            },
        ],
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text:
                "expenses for " +
                moment().format("MMM") +
                " in comparison with " +
                moment().subtract(1, "months").format("MMM"),
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
            <Line data={dataG} options={options} height={215} />
        </div>
    );
}
export default Charts;
