import React from "react";
import { Link } from "react-router-dom";
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
        
          <Link
            className="btn btn-danger my-4 py-4 col bg-danger d-flex align-items-center justify-content-around"
            to="/expenses"
          >
            <img src={$} alt={"$"}/>
            <span className="h3 mb-0">New Expense</span>
          </Link>
        
          <Link
            className="btn btn-success my-4 py-4 col bg-success d-flex align-items-center justify-content-around"
            to="/charts"
          >
            <img src={chartsIcon} alt={"Charts"} />
            <span className="h3 mb-0">View Reports</span>
          </Link>

          <Link
            className="btn btn-primary my-4 py-4 col bg-primary d-flex align-items-center justify-content-start"
            to="/settings"
          >
            <img className="mx-4" src={settingsIcon} alt={"Settings"} />
            <span className="h3 mb-0 ml-3">Settings</span>
          </Link>
        
        </div>
        <Footer/>
    </div>
  )
}
