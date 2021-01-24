import { BrowserRouter, Switch /* Route */ } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Expenses from "./pages/Expenses";
import NewExpense from "./pages/NewExpense";
import Settings from "./pages/Settings";
import Charts from "./pages/Charts";
import PrivateRoute from "./components/PrivateRoute";

export default function Router() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/expenses/addnew">
    //       <NewExpense />
    //     </Route>{" "}
    //     <Route path="/expenses/other">
    //       <NewExpense />
    //     </Route>{" "}
    //     <Route path="/expenses/entertainment">
    //       <NewExpense />
    //     </Route>{" "}
    //     <Route path="/expenses/food">
    //       <NewExpense />
    //     </Route>{" "}
    //     <Route path="/expenses/monthly">
    //       <Expenses />
    //     </Route>
    //     <Route path="/charts">
    //       <Charts />
    //     </Route>
    //     <Route path="/expenses">
    //       <Expenses />
    //     </Route>
    //     <Route path="/settings">
    //       <Settings />
    //     </Route>
    //     <Route path="/home">
    //       <HomePage />
    //     </Route>
    //     <Route path="/">
    //       <SignIn />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/expenses/addnew" component={NewExpense}>
          {/* <NewExpense /> */}
        </PrivateRoute>
        <PrivateRoute path="/expenses/other" component={NewExpense}>
          {/* <NewExpense /><NewExpense /> */}
        </PrivateRoute>
        <PrivateRoute path="/expenses/entertainment" component={NewExpense}>
          {/* <NewExpense /> */}
        </PrivateRoute>
        <PrivateRoute path="/expenses/food" component={NewExpense}>
          {/* <NewExpense /> */}
        </PrivateRoute>
        <PrivateRoute path="/expenses/monthly" component={NewExpense}>
          {/* <Expenses /> */}
        </PrivateRoute>
        <PrivateRoute path="/charts" component={Charts}>
          {/* <Charts /> */}
        </PrivateRoute>
        <PrivateRoute path="/expenses" component={Expenses}>
          {/* <Expenses /> */}
        </PrivateRoute>
        <PrivateRoute path="/settings" component={Settings}>
          {/* <Settings /> */}
        </PrivateRoute>
        <PrivateRoute path="/home" component={HomePage}>
          {/* <HomePage /> */}
        </PrivateRoute>
        <PrivateRoute path="/" component={SignIn}>
          {/* <SignIn /> */}
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
