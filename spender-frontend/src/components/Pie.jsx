import React, { useState, useEffect } from "react"
import { Doughnut } from 'react-chartjs-2';
import moment from "moment";
function Charts(props) {
    // const expenseMonth = props.mockData;
    const { data, time, labels } = props;
    const [amountByCategorie, setAmountByCategorie] = useState([]);
    const [labelGraph, setLabelGraph] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);

    const getCategories = () => {
        const getTheYear = moment("02/02/2020").format('YYYY');
        const getTheMonth = moment("02/02/2020").format('M');

        const arrayOfCategory = [];
        for (let index = 0; index < data[getTheYear][getTheMonth].length; index++) {
            const found = arrayOfCategory.find(element => element.category == data[getTheYear][getTheMonth][index].category);
            if (!found) {
                const creationCategory = { category: data[getTheYear][getTheMonth][index].category, amount: 0 };
                arrayOfCategory.push(creationCategory);
            }
        }

        getAmountByCategories(arrayOfCategory);
    }

    const getAmountByCategories = (arrayOfCategory) => {
        const getTheYear = moment("02/02/2020").format('YYYY');
        const getTheMonth = moment("02/02/2020").format('M');
        for (let index = 0; index < data[getTheYear][getTheMonth].length; index++) {
            for (let j = 0; j < arrayOfCategory.length; j++) {
                if (data[getTheYear][getTheMonth][index].category == arrayOfCategory[j].category) {
                    arrayOfCategory[j].amount += data[getTheYear][getTheMonth][index].amount;
                }
            }
        }
        console.log(arrayOfCategory);
        setAmountByCategorie(arrayOfCategory);
    }


    useEffect(() => {
        const getTheYear = moment("02/02/2020").format('YYYY');
        const getTheMonth = moment("02/02/2020").format('M');
        if (data[getTheYear] && data[getTheYear][getTheMonth]) {
            getCategories();
            console.log(data);
        }else{
            setAmountByCategorie([]);
        }
    }, [props])

    useEffect(() => {
        const categories = amountByCategorie.map(element => element.category);
        setLabelGraph(categories);
    }, [amountByCategorie])

    useEffect(() => {
        const amounts = amountByCategorie.map(element => element.amount);
        setDataGraph(amounts);
    }, [amountByCategorie])

    return (

        <div className="mx-4 mt-3">
            <Doughnut
                data={{
                    labels: labelGraph,
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        data: dataGraph
                    }]
                }}
                height={225}

                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}
export default Charts