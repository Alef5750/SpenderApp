import React from "react";
import Footer from "./footer"


export default function QuarterCharts() {
    return (
        <div>
            <div className="mx-4">
                <h3 className="text-primary">Quarter Savings</h3>
                <div className="my-3 py-3 col bg-primary text-white d-flex h3 justify-content-center rounded">
                    2022$
                    {/* fetched from backend */}
                </div>

                <h3 className="text-success">Quarter Goals</h3>
                <div className="my-3 py-3 col bg-success text-white d-flex h3 justify-content-center rounded">
                    2022$
                    {/* fetched from backend */}
                </div>

                <h3>You have made It! now go buy this stupid thing you wanted</h3>
                {/* a message for the user, based on on the data fetched from the backend */}

            </div>
            <Footer />
        </div>
    )
}
