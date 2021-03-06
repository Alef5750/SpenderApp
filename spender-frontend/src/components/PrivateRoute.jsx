import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

export const UserContext = React.createContext(null);
export const RefreshUserContext = React.createContext(null);

export function PrivateRoute(props) {
    const history = useHistory();

    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            credentials: "include",
        };
        fetch(`http://localhost:5000/auth`, requestOptions)
            .then((res) => res.json())
            .then((user) => {
                if (user) {
                    setIsAuthenticated(true);
                    setUser(user);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            });
    }, []);

    const refreshContext = () => {
        const requestOptions = {
            method: "GET",
            credentials: "include",
        };
        fetch(`http://localhost:5000/auth`, requestOptions)
            .then((res) => res.json())
            .then((user) => {
                if (user) {
                    setIsAuthenticated(true);
                    setUser(user);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            });
    };

    const { component: Component, ...rest } = props;
    if (loading) {
        return <div>LOADING</div>;
    } else {
        if (user && props.path === "/") history.goBack();
        else
            return (
                <RefreshUserContext.Provider value={refreshContext}>
                    <UserContext.Provider value={user}>
                        <Route
                            {...rest}
                            render={(props) => (
                                <div>
                                    {!isAuthenticated && <Redirect to="/" />}
                                    <Component {...props} />
                                </div>
                            )}
                        />
                    </UserContext.Provider>
                </RefreshUserContext.Provider>
            );
    }
}
