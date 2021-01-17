import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/footer"
import Navigation from "../components/Navigation";
import $ from "../images/$ icon.png"
import chartsIcon from "../images/charts icon.png"
import settingsIcon from "../images/settings Icon.png"


export default function HomePage() {
  return (
    <div>
      <Navigation />
        <h1>Hey User</h1>
        <div className="mx-4 vh-100">
          <Button className="my-4 py-4 col bg-danger border-white d-flex align-items-center justify-content-around">
            <img src={$} alt={"$"}/>
            <span className="h3 mb-0">New Expense</span>
          </Button>
        
          <Button className="my-4 py-4 col bg-success border-white d-flex align-items-center justify-content-around">
            <img src={chartsIcon} alt={"Charts"} />
            <span className="h3 mb-0">View Reports</span>
          </Button>
        
          <Button className="my-4 py-4 col bg-primary border-white d-flex align-items-center justify-content-start">
            <img className="mx-4" src={settingsIcon} alt={"Settings"} />
            <span className="h3 mb-0 ml-3">Settings</span>
          </Button>
        </div>
        <Footer/>
    </div>
  )
}
