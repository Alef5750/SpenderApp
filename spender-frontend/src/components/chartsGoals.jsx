import React, { useEffect, useState } from "react";

export default function ChartsGoals({ data, goal, income }) {
    if (!income) {
        income = 0;
    }
    if (!goal) {
        goal = 0;
    }

    const [sum, setSum] = useState(0);

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
        setSum(amount);
    };

    return (
        <div className="mx-4 mw-100 mh-100">
            <h3 className="text-primary">Savings Goal</h3>
            <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                {goal}
            </div>
            {income - sum >= goal ? (
                <span>
                    <h3 className="text-success">Saved</h3>
                    <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                        {income - sum}
                    </div>
                    <h2 className="bg-success text-white rounded my-4">
                        Good Job!
                    </h2>
                </span>
            ) : (
                <span>
                    <h3 className="text-danger">Saved</h3>
                    <div className="my-3 py-3 col bg-danger text-white d-flex h3 justify-content-center rounded">
                        {income - sum}
                    </div>
                    <h2 className="bg-warning text-white rounded my-4">
                        You Can Do It!
                    </h2>
                </span>
            )}
        </div>
    );
}
