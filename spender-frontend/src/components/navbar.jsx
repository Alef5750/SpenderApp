import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Navbar() {
  return (
    <Router>
      <div className="mt-5">
        <Navbar
          fixed="top"
          className="bg-primary mx-5 rounded d-flex justify-content-around"
        >
          <Link to="/">Home</Link>
          <Link to="/money">$</Link>
          <Link to="/charts">Charts</Link>
          <Link to="/settings">Settings</Link>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
