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
        <div className="mx-4 d-block">
          <Button className="my-4 py-4 col bg-danger border-white">
            <img className="mb-2" src={$} alt={"$"}/>
            <span className="h3 ml-4">New Expense</span>
          </Button>
          <Button className="my-4 py-4 col bg-success border-white">
            <img className="mb-2" src={chartsIcon} alt={"Charts"} />
            <span className="h3 ml-4">View Reports</span>
          </Button>
          <Button className="my-4 py-4 pl-4 col bg-primary border-white text-justify">
            <img className="mb-2 ml-4" src={settingsIcon} alt={"Settings"} />
            <span className="h3 ml-4">Settings</span>
          </Button>
        </div>
        <Footer/>
    </div>
  )
}
