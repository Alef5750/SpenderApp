import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

export const UserContext = React.createContext(null);

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
                console.log(user);
                if (user) {
                    setIsAuthenticated(true);
                    setUser(user);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            });
    }, []);

    const { component: Component, ...rest } = props;
    if (loading) {
        return <div>LOADING</div>;
    } else {
        if (user && props.path === "/") history.goBack();
        else
            return (
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
            );
    }
}

// export default PrivateRoute;

// export class PrivateRoute extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             loading: true,
//             isAuthenticated: false,
//             id: null,
//         };
//     }
//     componentDidMount() {
//         const requestOptions = {
//             method: "GET",
//             credentials: "include",
//         };
//         fetch(`http://localhost:5000/auth`, requestOptions)
//             .then((res) => res.json())
//             .then((id) => {
//                 console.log(id);
//                 if (id) {
//                     this.setState({
//                         loading: false,
//                         isAuthenticated: true,
//                         id: id,
//                     });
//                 } else {
//                     this.setState({
//                         loading: false,
//                     });
//                 }
//             });
//     }
//     render() {
//         const { component: Component, ...rest } = this.props;
//         if (this.state.loading) {
//             return <div>LOADING</div>;
//         } else {
//             if (this.state.id && this.props.path === "/")
//                 this.props.history.goBack();
//             else
//                 return (
//                     <UserContext.Provider value={this.state.id}>
//                         <Route
//                             {...rest}
//                             render={(props) => (
//                                 <div>
//                                     {!this.state.isAuthenticated && (
//                                         <Redirect to="/" />
//                                     )}
//                                     <Component
//                                         {...this.props}
//                                         id={this.state.id}
//                                     />
//                                 </div>
//                             )}
//                         />
//                     </UserContext.Provider>
//                 );
//         }
//     }
// }

// export default withRouter(PrivateRoute);
