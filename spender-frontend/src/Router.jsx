import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import Charts from "./pages/categories-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/charts">
          <Charts/>
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
