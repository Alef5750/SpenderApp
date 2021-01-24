import React, {useEffect, useState} from "react";
import { getExpensesById } from "../helpers/api";
import LineYear from "./LineYear"
export default function ChartsGraphs({ time, labels, data }) {

    // if (time) console.log(time);
    // const [data, setData] = useState([]);
    useEffect( () => {
        console.log("1", time);
        console.log("2", labels);
        console.log("3", data);
    }, [data]);



    return (
        <div className="mx-4">
            {/* <LineYear data = {data} time = {time}/> */}
        </div>
    )
}
