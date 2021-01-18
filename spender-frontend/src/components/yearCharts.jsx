import React from "react";
import Footer from "../components/footer"


export default function YearCharts() {
    return (
        <div>
            <div className="mx-4">
                <h3 className="text-primary">Annual Savings</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    12021$
                    {/* fetched from backend */}
                </div>

                <h3 className="text-success">Annual Goals</h3>
                <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                    2022$
                    {/* fetched from backend */}
                </div>

                <h3>Keep On Going</h3>
                {/* a message for the user, based on on the data fetched from the backend */}

            </div>
            <Footer />
        </div>
    )
}
