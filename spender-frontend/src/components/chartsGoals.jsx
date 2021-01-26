import React, { useEffect, useState } from "react";


export default function ChartsGoals({ data, goal, income }) {
    
    if (!income) { income = 0 }
    if (!goal) {goal = 0 }

    const [sum, setSum] = useState(0)
    const [progress, setProgress] = useState(0)
    const [savings, setSavings] = useState(0)

    useEffect(() => {
        if (data) {getCategories()}
    }, [data])

    const getCategories = () => {
        const arrayOfCategory = [];
        for (const key in data) {
            for (const monthKey in data[key]) {
                for (let index = 0; index < data[key][monthKey].length; index++) {
                    const found = arrayOfCategory.find(element => element.category === data[key][monthKey][index].category);
                    if (!found) {
                        const creationCategory = { category: data[key][monthKey][index].category, amount: 0 };
                        arrayOfCategory.push(creationCategory);
                    }
                }
            }
        }
        getAmountByCategory(arrayOfCategory);
    }
    const getAmountByCategory = (arrayOfCategory) => {
        let amount = 0
        for (const key in data) {
            for (const monthKey in data[key]) {
                for (let index = 0; index < data[key][monthKey].length; index++) {
                    for (let j = 0; j < arrayOfCategory.length; j++) {
                        if (data[key][monthKey][index].category === arrayOfCategory[j].category) {
                            arrayOfCategory[j].amount += data[key][monthKey][index].amount;
                            amount += arrayOfCategory[j].amount
                        }
                    }
                }
            }
        }
        setSum(amount)
        setSavings(income - sum)
        setProgress(savings * 100 / goal)
    }

    return (
        <div className="mx-4 mw-100 mh-100">
                <h3 className="text-primary">Savings Goal</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    {goal}
                </div>
                {savings >= goal ?
                    <span>
                        <h3 className="text-success">Saved</h3>
                        <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                            {savings}
                        </div>
                        <h2 className="bg-success text-white rounded my-4">Good Job!</h2>
                    </span>
                    
                    :
                    <span>
                        <h3 className="text-danger">Saved</h3>
                        <div className="my-3 py-3 col bg-danger text-white d-flex h3 justify-content-center rounded">
                            {savings}
                        </div>
                        <h2 className="bg-warning text-white rounded my-4">You Can Do It!</h2>
                    </span>
                }           
                {/* <div className="progress">
                    <div className="progress-bar" style={{ width: progress }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div> */}
            </div>
    )
}
