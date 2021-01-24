import React, { useState, useEffect } from "react"
import { Doughnut } from 'react-chartjs-2';

function Charts(props) {
    const expenseYear = props.mockData;
    const [amountByCategorie, setAmountByCategorie] = useState([]);
    const [labelGraph, setLabelGraph] = useState([]);
    const [dataGraph, setDataGraph] = useState([]);



    const getCategories = () => {
        const arrayOfCategory = [];
        for (const key in expenseYear) {
            for (let index = 0; index < expenseYear[key].length; index++) {
                const found = arrayOfCategory.find(element => element.category == expenseYear[key][index].category);
                if (!found) {
                    const creationCategory = { category: expenseYear[key][index].category, amount: 0};
                    arrayOfCategory.push(creationCategory);
                }
            }
        }
        getAmountByCategories(arrayOfCategory);
    }

    const getAmountByCategories = (arrayOfCategory) => {
        for (const key in expenseYear) {
            for (let index = 0; index < expenseYear[key].length; index++) {
                for (let j = 0; j < arrayOfCategory.length; j++) {
                    if (expenseYear[key][index].category == arrayOfCategory[j].category) {
                        arrayOfCategory[j].amount += expenseYear[key][index].amount;
                    }
                }
            }
        }
        setAmountByCategorie(arrayOfCategory);
    }
    // const getEveryCategory = () => {
    //     const arrayOfCategory = [];
    //     for (let index = 0; index < expenseYear.length; index++) {
    //         const found = arrayOfCategory.find(element => element.category == expenseYear[index].category);
    //         if (!found) {
    //             const creationCategory = { category: expenseUser[index].category, amount: expenseUser[index].amount };
    //             arrayOfCategory.push(creationCategory);
    //         }else{
    //             for (let j = 0; j < arrayOfCategory.length; j++) {
    //                 if (arrayOfCategory[j].category == expenseUser[index].category) {
    //                     arrayOfCategory[j].amount += expenseUser[index].amount;
    //                 }
    //             }
    //         }
    //     }
    //     setAmountByCategorie(arrayOfCategory);
    // }


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
                            'rgba(123, 102, 102, 0.2)',
                            'rgba(155, 159, 64, 0.2)'
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