import React from "react";

export default function ChartsReports() {
    return (
        <div className="mx-4">
            <h2>Reports</h2>
            <h3 className="text-primary">Expenses</h3>
            <div className="my-3 py-3 col bg-danger text-white d-flex h3 justify-content-center rounded">
                78$
            </div>

            <h3 className="text-success">Saved</h3>
            <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                22$
            </div>

            <h3 className="text-success">Income</h3>
            <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                100$
            </div>
        </div>
    )
}
