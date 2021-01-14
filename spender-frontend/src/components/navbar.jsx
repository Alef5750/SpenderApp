import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Navbar() {
  return (
    <Router>
      <div className="mt-5">
        <Navbar
          fixed="top"
          className="bg-primary mx-5 rounded d-flex justify-content-around"
        >
          <Link to="/">Home</Link>
        </Navbar>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
