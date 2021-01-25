import React, { useEffect, useState } from "react";
import ExpensesTable from "./chartsExpensesTable";
export default function ChartsReports({ data, income }) {
    if (!income) {
        income = 0
    }
    const [amountByCategory, setAmountByCategory] = useState([]);
    const [sum, setSum] = useState(0)
    useEffect(() => {
        if (data) {
            getCategories();
        } else {
            setAmountByCategory([])
        }
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
        setAmountByCategory(arrayOfCategory);
    }
    return (
        <div className="mx-4">
            <span>
                <h3 className="text-danger">Expenses</h3>
                {/* {amountByCategory.map(expense => <h6 key={expense.category} className="text-danger mx-1 rounded">{expense.category}-{expense.amount}</h6>)} */}
                <ExpensesTable amountByCategory={amountByCategory} />
                <h3 className="text-white bg-danger rounded">{sum}</h3>
            </span>
            <span>
                <h3 className="text-primary">Income</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    {income}
                </div>
            </span>
            {income >= sum ?
                <span>
                    <h3 className="text-success">Saved</h3>
                    <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                        {income - sum}
                    </div>
                </span>
                :
                <span>
                    <h3 className="text-warning">saved</h3>
                    <div className="my-3 py-3 col bg-warning text-white d-flex h3 justify-content-center rounded">
                        {income - sum}
                    </div>
                </span>
            }
        </div>
    )
}