import React, { useState, useEffect } from "react"
import { Doughnut } from 'react-chartjs-2';

function Charts(props) {
    const expenseMonth = props.mockData;
    const [amountByCategorie, setAmountByCategorie] = useState([]);
    const [labelGraph, setLabelGraph] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);

    const getCategories = () => {
        const arrayOfCategory = [];
        for (let index = 0; index < expenseMonth.length; index++) {
            const found = arrayOfCategory.find(element => element.category == expenseMonth[index].category);
            if (!found) {
                const creationCategory = { category: expenseMonth[index].category, amount: 0 };
                arrayOfCategory.push(creationCategory);
            }
        }
        
        getAmountByCategories(arrayOfCategory);
    }

    const getAmountByCategories = (arrayOfCategory) => {
        for (let index = 0; index < expenseMonth.length; index++) {
            for (let j = 0; j < arrayOfCategory.length; j++) {
                if (expenseMonth[index].category == arrayOfCategory[j].category) {
                    arrayOfCategory[j].amount += expenseMonth[index].amount;
                }
            }
        }
        setAmountByCategorie(arrayOfCategory);
    }

    useEffect(() => {
        getCategories();
    }, [])

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
                height={250}

                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}
export default Charts