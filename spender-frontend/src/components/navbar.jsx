import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// Adding some comments to see if my git commits get pushed

export default function Navbar() {
  return (
    <Nav sticky="top" bg="dark" expand="sm">
      <Link to="/home">Home</Link>
      <Link to="/expenses">Expenses</Link>
    </Nav>
  );
}
