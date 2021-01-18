import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Expenses from "./pages/Expenses";
import NewExpense from "./pages/NewExpense";
import Settings from "./pages/Settings";
import Charts from "./pages/Charts";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/expenses/addnew">
          <NewExpense />
        </Route>{" "}
        <Route path="/expenses/other">
          <NewExpense />
        </Route>{" "}
        <Route path="/expenses/entertainment">
          <NewExpense />
        </Route>{" "}
        <Route path="/expenses/food">
          <NewExpense />
        </Route>{" "}
        <Route path="/expenses/monthly">
          <Expenses />
        </Route>
        <Route path="/charts">
          <Charts />
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
