import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import Expenses from "./pages/Expenses";
import Settings from "./pages/Settings";
import Charts from "./pages/Charts";
import PrivateRoute from "./components/PrivateRoute";

export default function Router() {
    return (
        // <BrowserRouter>
        //     <Switch>
        //         <Route path="/charts">
        //             <Charts />
        //         </Route>
        //         <Route path="/expenses">
        //             <Expenses />
        //         </Route>
        //         <Route path="/settings">
        //             <Settings />
        //         </Route>
        //         <Route path="/home">
        //             <HomePage />
        //         </Route>
        //         <Route path="/">
        //             <SignIn />
        //         </Route>
        //     </Switch>
        // </BrowserRouter>
        <BrowserRouter>
            <Switch>
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
