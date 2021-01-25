import React, { useState, useEffect } from "react"
import { Doughnut } from 'react-chartjs-2';

function Charts({ data, time, labels }) {
    const [amountByCategorie, setAmountByCategorie] = useState([]);
    const [labelGraph, setLabelGraph] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);



    const getCategories = () => {
        const arrayOfCategory = [];
        for (const key in data) {
            for (const monthKey in data[key]) {
                for (let index = 0; index < data[key][monthKey].length; index++) {
                    const found = arrayOfCategory.find(element => element.category == data[key][monthKey][index].category);
                    if (!found) {
                        const creationCategory = { category: data[key][monthKey][index].category, amount: 0 };
                        arrayOfCategory.push(creationCategory);
                    }
                }
            }

        }
        console.log(arrayOfCategory)
        getAmountByCategories(arrayOfCategory);
    }

    const getAmountByCategories = (arrayOfCategory) => {
        for (const key in data) {
            for (const monthKey in data[key]) {
                for (let index = 0; index < data[key][monthKey].length; index++) {
                    for (let j = 0; j < arrayOfCategory.length; j++) {
                        if (data[key][monthKey][index].category == arrayOfCategory[j].category) {
                            arrayOfCategory[j].amount += data[key][monthKey][index].amount;
                        }
                    }
                }
            }
        }
        setAmountByCategorie(arrayOfCategory);
    }


    useEffect(() => {
        if (data) {
            getCategories();
        } else {
            setAmountByCategorie([])
        }
    }, [data])

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
            {console.log(amountByCategorie)}
            {console.log(labelGraph)}
            {console.log(dataGraph)}
            <Doughnut
                data={{
                    labels: labelGraph,
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(14, 153, 49, 1)',
                            'rgba(155, 159, 64, 1)'
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