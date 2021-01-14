import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Adding some comments to see if my git commits get pushed

export default function Navbar() {
  return (
    <Nav sticky="top" bg="dark" expand="sm">
      <Link to="/home">Home</Link>
     
      <Link to="/expenses">$</Link>
    </Nav>
  );
}
