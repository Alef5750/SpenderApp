import React from "react";
import Navigation from "../components/Navigation";
import { Button } from "react-bootstrap";
import expenses_monthly from "../images/expenses_monthly.png";
import expenses_food from "../images/expenses_food.png";
import expenses_entertainement from "../images/expenses_entertainement.png";
import expenses_other from "../images/expenses_other.png";
import expenses_add_new from "../images/expenses_add_new.png";
import "./Expenses.css";

export default function Expenses() {

  const handleMonthly = () => {
    console.log("monthly");
  }
  const handleFood = () => {
    console.log("food");
  }
  const handleEntertainment = () => {
    console.log("entertainment");
  }
  const handleOther = () => {
    console.log("other");
  }
  const handleAddNew = () => {
    console.log("addnew");
  }
  const handleEdit = () => {
    console.log("edit");
  }

  return (
    <div>
      <Navigation />

      <div className="d-flex flex-row mx-4 px-1 mt-5 justify-content-between">
        <div className=" d-flex flex-column expenses-first-features-div" onClick = {() => handleMonthly()}>
          <div className= "h-50 py-4 ">
          Monthly
              
          </div>
          <div className= "h-50">
              <img src = { expenses_monthly }/>
          </div>
        </div>
        <div className=" d-flex flex-column expenses-first-features-div" onClick = {() => handleFood()}>
        <div className= "h-50 py-4">
          Food
              
          </div>
          <div className= "h-50">
              <img src = { expenses_food }/>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mx-4 px-1 mt-3 justify-content-between">
        <div className=" d-flex flex-column expenses-first-features-div" onClick = {() => handleEntertainment()}>
        <div className= "h-50 py-4">
          Entertainment
              
          </div>
          <div className= "h-50">
              <img src = { expenses_entertainement }/>
          </div>
        </div>
        <div className=" d-flex flex-column expenses-first-features-div" onClick = {() => handleOther()}>
        <div className= "h-50 py-4">
          Other
              
          </div>
          <div className= "h-50">
              <img src = { expenses_other }/>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mx-4 px-1 mt-3 justify-content-start" >
        <div className=" d-flex flex-column expenses-first-features-div" onClick = {() => handleAddNew()}>
        <div className= "h-50 py-4 ">
          Add New...
          
              
          </div>
          <div className= "h-50">
              <img src = { expenses_add_new }/>
          </div>
        </div>
        
      </div>
    <Button className = "w-100 button-bottom"  onClick = {() => handleEdit()}>Edit</Button>
    </div>
    
  );
  
}
