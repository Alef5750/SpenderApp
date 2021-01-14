import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/footer"
export default function HomePage() {
  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="mx-5">
        <Button className="my-5 py-3 col">sign in using google</Button>
        <Button className="my-5 py-3 col">sign in using facebook</Button>
      </div>
      <Footer/>
    </div>
  )
}
