import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
function Charts(props) {
    // const expenseMonth = props.mockData;
    const { data, time, labels } = props;
    const [amountByCategory, setAmountByCategory] = useState([]);
    const [labelGraph, setLabelGraph] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);

    const getCategories = () => {
        const getTheYear = moment().format("YYYY");
        const getTheMonth = moment().format("M");

        const arrayOfCategory = [];
        for (
            let index = 0;
            index < data[getTheYear][getTheMonth].length;
            index++
        ) {
            const found = arrayOfCategory.find(
                (element) =>
                    element.category ==
                    data[getTheYear][getTheMonth][index].category
            );
            if (!found) {
                const creationCategory = {
                    category: data[getTheYear][getTheMonth][index].category,
                    amount: 0,
                };
                arrayOfCategory.push(creationCategory);
            }
        }

        getAmountByCategories(arrayOfCategory);
    };

    const getAmountByCategories = (arrayOfCategory) => {
        const getTheYear = moment().format("YYYY");
        const getTheMonth = moment().format("M");
        for (
            let index = 0;
            index < data[getTheYear][getTheMonth].length;
            index++
        ) {
            for (let j = 0; j < arrayOfCategory.length; j++) {
                if (
                    data[getTheYear][getTheMonth][index].category ==
                    arrayOfCategory[j].category
                ) {
                    arrayOfCategory[j].amount +=
                        data[getTheYear][getTheMonth][index].amount;
                }
            }
        }
        setAmountByCategory(arrayOfCategory);
    };

    useEffect(() => {
        const getTheYear = moment().format("YYYY");
        const getTheMonth = moment().format("M");
        if (data[getTheYear] && data[getTheYear][getTheMonth]) {
            getCategories();
        } else {
            setAmountByCategory([]);
        }
    }, [props]);

    useEffect(() => {
        const categories = amountByCategory.map((element) => element.category);
        setLabelGraph(categories);
    }, [amountByCategory]);

    useEffect(() => {
        const amounts = amountByCategory.map((element) => element.amount);
        setDataGraph(amounts);
    }, [amountByCategory]);

    return (
        <div className="mx-4 mt-3">
            <Doughnut
                data={{
                    labels: labelGraph,
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(14, 153, 49, 1)",
                                "rgba(155, 159, 64, 1)",
                                "rgba(92, 109, 22, 1)",
                                "rgba(74, 102, 235, 1)",
                                "rgba(205, 106, 36, 1)",
                                "rgba(102, 82, 202, 1)",
                                "rgba(140, 53, 109, 1)",
                                "rgba(55, 269, 34, 1)",
                            ],
                            data: dataGraph,
                        },
                    ],
                }}
                height={225}
                options={{
                    maintainAspectRatio: false,
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var dataset =
                                    data.datasets[tooltipItem.datasetIndex];
                                var meta =
                                    dataset._meta[
                                        Object.keys(dataset._meta)[0]
                                    ];
                                var total = meta.total;
                                var currentValue =
                                    dataset.data[tooltipItem.index];
                                var percentage = parseFloat(
                                    ((currentValue / total) * 100).toFixed(0)
                                );
                                return currentValue + " (" + percentage + "%)";
                            },
                            title: function (tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                            },
                        },

                        mode: "nearest",
                    },
                    title: {
                        display: true,
                        position: "top",
                        text: "expenses by category for the current month",
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
                }}
            />
        </div>
    );
}
export default Charts;
