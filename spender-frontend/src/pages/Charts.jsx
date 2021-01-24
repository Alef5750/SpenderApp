import React, { useState } from "react";
import ChartsNav from "../components/chartsNav";
import Navigation from "../components/Navigation";

export default function Charts(props) {
    // this function is getting the data from the time buttons
    const handleTimeRequest = async (time) => {
        // console.log(time);
        // const getData = await getExpensesById(`/api/users/600591c5a1e29824c0ef786a/expenses?date=${time}`)
        //     .then(response => console.log(response))
    };

    return (
        <div>
            <Navigation />
            <ChartsNav timeRequest={handleTimeRequest} />
        </div>
    );
}

// import { UpdateSettings } from "../helpers/api";
