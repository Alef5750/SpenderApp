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
        //     <Route path="/expenses/*" />
        //     <Route path="/charts" />
        //     <Route path="/expenses" />
        //     <Route path="/settings" />
        //     <Route path="/home" />
        //     <Route path="/" />
        //   </Switch>
        // </BrowserRouter>
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/expenses/*" component={NewExpense} />
                <PrivateRoute path="/charts" component={Charts} />
                <PrivateRoute path="/expenses" component={Expenses} />
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="/home" component={HomePage} />
                <PrivateRoute path="/" component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
}
