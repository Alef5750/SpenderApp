import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ChartsNav from "../components/chartsNav";
import Navigation from "../components/Navigation";


export default function Charts() {
  return (
    <div>
      <Navigation />
      <ChartsNav />
    </div>
  );
}
