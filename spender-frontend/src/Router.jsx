import { BrowserRouter, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Expenses from "./pages/Expenses";
import NewExpense from "./pages/NewExpense";
import Settings from "./pages/Settings";
import Charts from "./pages/Charts";
import { PrivateRoute } from "./components/PrivateRoute";
import AddCategory from "./pages/AddCategory";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/expenses/*" component={NewExpense} />
                <PrivateRoute path="/charts" component={Charts} />
                <PrivateRoute path="/addcategory" component={AddCategory} />
                <PrivateRoute path="/expenses" component={Expenses} />
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="/home" component={HomePage} />
                <PrivateRoute path="/" component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
}
