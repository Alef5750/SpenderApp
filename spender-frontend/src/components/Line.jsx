import React, { useState, useEffect } from "react"
import { Line } from 'react-chartjs-2';
import moment from 'moment';


function Charts(props) {
    const [labels, setLabels] = useState([]);
    const [dataGraph, setDataGraph] = useState([])
    const [expenses, setExpenses] = useState([]);
    const expensesMonth = [];
    if (props.mockData) {
        expensesMonth = props.mockData;
    }
    

    const numberDayByMonth = (month, year) => {
        month = moment().format('MM') - 1;
        console.log(month);
        year = moment().format('YYYY');
        var numberDay = 0;
        if (month <= 6) {
            if (month % 2 == 0) {
                numberDay = 31;
            }
            else {
                numberDay = 30;
            }
        }
        else {
            if (month % 2 == 1) {
                numberDay = 30;
            }
            else {
                numberDay = 31;
            }
        }
        if (month == 1) {
            if (year % 4 == 0) {
                if (year % 100 == 0) {
                    if (year % 400 == 0) {
                        numberDay = 29;
                    }
                    else {
                        numberDay = 28;
                    }

                }
                else {
                    numberDay = 29;
                }
            }
            else {
                numberDay = 28;
            }

        }
        return numberDay;
    }

    const creationOfDays = () => {
        const numberDay = numberDayByMonth();
        const arrayOfDays = [];
        for (let index = 1; index <= numberDay; index++) {
            let day = index;
            if (index < 10) {
                day = '0' + index;
            }
            arrayOfDays.push(day);
        }
        console.log(arrayOfDays)
        setLabels(arrayOfDays);
    }

    const GetDistinctDate = () => {
        const arrayOfDate = [];
        for (let index = 0; index < expensesMonth.length; index++) {
            const found = arrayOfDate.find(element => element.date == expensesMonth[index].date);
            if (!found) {
                const creationDate = { date: expensesMonth[index].date, amount: 0 };
                arrayOfDate.push(creationDate);
            }
        }
        groupAmountByDate(arrayOfDate);
    }

    const groupAmountByDate = (arrayOfDate) => {
        for (let index = 0; index < expensesMonth.length; index++) {
            for (let j = 0; j < arrayOfDate.length; j++) {
                if (expensesMonth[index].date == arrayOfDate[j].date) {
                    arrayOfDate[j].amount += expensesMonth[index].amount;
                }
            }
        }
        setExpenses(arrayOfDate);
    }

    const creationDataGraph = () => {
        //expensesMonth
        const myNumberDayByMonth = numberDayByMonth();
        const myAmoutByDay = [];
        for (let index = 1; index <= myNumberDayByMonth; index++) {
            let find = false;
            for (let j = 0; j < expenses.length; j++) {
                const getDayFromExpenses = moment(expenses[j].date).format('D');
                if (getDayFromExpenses == index) {
                    find = true;
                    myAmoutByDay.push(expenses[j].amount);
                }
            }
            if (!find) {
                myAmoutByDay.push(0);
            }
            
        }
        setDataGraph(myAmoutByDay);
    }


    // const getDates = () => {
    //     const date = expensesMonth.map(expense => {
    //         const changeInDate = new Date(expense.date);
    //         console.log(changeInDate)
    //         const getDate = changeInDate.getDate();
    //         console.log(getDate);
    //         return getDate;
    //     });
    //     return date;
    // }
    // const getExpenses = () => {
    //     const expenses = expensesMonth.map(expense => expense.amount);
    //     return expenses;
    // }

    useEffect(() => {
        creationOfDays();
        GetDistinctDate();
    }, []);
    useEffect(() => {
        creationDataGraph();
    }, [expenses]);

    // useEffect(() => {
    //     const expenseArray = getExpenses();
    //     setExpenses(expenseArray);
    // }, []);

    var data = {
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
            {console.log(expensesMonth)}
            <Line
                data={data}
                options={options}
                height={250}
            />
        </div>
    )
}
export default Charts