import React, { useEffect, useState } from "react";

export default function ChartsGoals({ data, goal, income }) {
    if (!income) {
        income = 0;
    }
    if (!goal) {
        goal = 0;
    }

    const [sum, setSum] = useState(0)

    useEffect(() => {
        if (data) {
            getAmountByCategory();
        }
    }, [data]);

    const getAmountByCategory = () => {
        let amount = 0;
        for (const key in data) {
            for (const monthKey in data[key]) {
                for (
                    let index = 0;
                    index < data[key][monthKey].length;
                    index++
                ) {
                    amount += data[key][monthKey][index].amount;
                }
            }
        }
        setSum(amount)
    }

    if (income - sum >= goal) {
        return (
            <div className="mx-4 mw-100 mh-100">
                <h3 className="text-primary">Savings Goal</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    {goal}
                </div>
                <h3 className="text-success">Saved</h3>
                <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                    {income - sum}
                </div>
                <h2 className="bg-success text-white rounded my-4">Good Job!</h2>
                <div className="progress">
                    <div className="progress-bar" style={{ width: 315 }} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
    else if (income - sum >= 0) {
        return (
            <div className="mx-4 mw-100 mh-100">
                <h3 className="text-primary">Savings Goal</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    {goal}
                </div>
                <h3 className="text-warning">Saved</h3>
                <div className="my-3 py-3 col bg-warning text-white d-flex h3 justify-content-center rounded">
                    {income - sum}
                </div>
                <h2 className="bg-warning text-white rounded my-4">You Can Do It!</h2>
                {isNaN((income - sum) * 315 / goal) || isFinite((income - sum) * 315 / goal) ?
                    <div className="progress">
                        <div className="progress-bar" style={{ width: (income - sum) * 315 / goal }} role="progressbar" aria-valuenow={(income - sum) * 315 / goal} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                :
                    <div className="progress">
                        <div className="progress-bar" style={{ width: 0 }} role="progressbar" aria-valuenow={(income - sum) * 100 / goal} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                }
            </div>
        )
    }
    else {
        return (
            <div className="mx-4 mw-100 mh-100">
                <h3 className="text-primary">Savings Goal</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    {goal}
                </div>
                <h3 className="text-danger">Saved</h3>
                <div className="my-3 py-3 col bg-danger text-white d-flex h3 justify-content-center rounded">
                    {income - sum}
                </div>
                <h2 className="bg-danger text-white rounded my-4">You Are Doing It All Wrong...</h2>
                <div className="progress">
                    <div className="progress-bar" style={{ width: 0 }} role="progressbar" aria-valuenow={0} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}
