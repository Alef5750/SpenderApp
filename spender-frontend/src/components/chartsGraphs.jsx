import React, { useEffect } from "react";
import LineYear from "./LineYear";
import PieYear from "./PieYear";
import Line from "./Line";
import Pie from "./Pie";
import LineMonths from "./LineMonths";
import PieMonths from "./PieMonths";

export default function ChartsGraphs({ time, labels, data, dataComparison }) {
    return (
        <div className="mx-4">
            {time && time.charAt(time.length - 1) == 3 && (
                <LineMonths
                    data={data}
                    time={time}
                    labels={labels}
                    dataComparison={dataComparison}
                />
            )}
            {time && time.charAt(time.length - 1) == 3 && (
                <PieMonths data={data} time={time} labels={labels} />
            )}
            {time && time.charAt(time.length - 1) == 2 && (
                <LineYear
                    data={data}
                    time={time}
                    labels={labels}
                    dataComparison={dataComparison}
                />
            )}
            {time && time.charAt(time.length - 1) == 2 && (
                <PieYear data={data} time={time} labels={labels} />
            )}
            {time && time.charAt(time.length - 1) == 1 && (
                <Line
                    data={data}
                    time={time}
                    labels={labels}
                    dataComparison={dataComparison}
                />
            )}
            {time && time.charAt(time.length - 1) == 1 && (
                <Pie data={data} time={time} labels={labels} />
            )}
        </div>
    );
}
