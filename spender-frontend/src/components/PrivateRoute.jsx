import React from "react";
import { Route, Redirect } from "react-router-dom";

export class PrivateRoute extends React.Component {
    state = {
        loading: true,
        isAuthenticated: false,
        id: null,
    };
    componentDidMount() {
        const requestOptions = {
            method: "GET",
            credentials: "include",
        };
        fetch(`http://localhost:5000/auth`, requestOptions)
            .then((res) => res.json())
            .then((id) => {
                console.log(id);
                if (id) {
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                        id: id,
                    });
                } else {
                    this.setState({
                        loading: false,
                    });
                }
            });
    }
    render() {
        const { component: Component, ...rest } = this.props;
        if (this.state.loading) {
            return <div>LOADING</div>;
        } else {
            return (
                <Route
                    {...rest}
                    render={(props) => (
                        <div>
                            {!this.state.isAuthenticated && <Redirect to="/" />}
                            <Component {...this.props} id={this.state.id} />
                        </div>
                    )}
                />
            );
        }
    }
}

export default PrivateRoute;
