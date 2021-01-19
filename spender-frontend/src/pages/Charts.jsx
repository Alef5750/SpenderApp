import React from "react";
import ChartsNav from "../components/chartsNav";
import Navigation from "../components/Navigation";


export default function Charts() {

  // this function is getting the data from the time buttons
  const handleTimeRequest = (time) => {
    // console.log(time);
  }

  return (
    <div>
      <Navigation />
      <ChartsNav timeRequest={handleTimeRequest}/>
    </div>
  );
}


// import { UpdateSettings } from "../helpers/api";
