import React, {useEffect, useState} from "react";
import { getExpensesById } from "../helpers/api";
import LineYear from "./LineYear";
import PieYear from "./PieYear";
import Line from "./Line";
import Pie from "./Pie";

export default function ChartsGraphs({ time, labels, data }) {

    // if (time) console.log(time);
    // const [data, setData] = useState([]);
    useEffect( () => {
        console.log("data: ", data);
    }, [data]);

    useEffect( () => {
        console.log("labels: ", labels);
    }, [labels]);
    useEffect( () => {
        console.log("time: ", time);
    }, [time]);

    return (
        <div className="mx-4">
            {time && time.charAt(time.length-1)==2 && <LineYear data = {data} time = {time} labels = {labels}/>}
            {time && time.charAt(time.length-1)==2 && <PieYear data = {data} time = {time} labels = {labels}/>}
            {time && time.charAt(time.length-1)==1 && <Line data = {data} time = {time} labels = {labels}/>}
            {time && time.charAt(time.length-1)==1 && <Pie data = {data} time = {time} labels = {labels}/>}
        </div>
    )
}
