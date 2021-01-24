import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/footer";

import styles from "../styles/Navbar.module.css";

export default function SignIn(props) {
    const initGoogle = () => {
        window.open(`http://localhost:5000/auth/google`, "_self");
    };

    return (
        <div>
            <div
                className={` ${styles.navBar} ${styles.welcome} `}
                sticky="top"
                expand="sm"
            >
                Welcome
            </div>
            <div className="vh-100 d-flex align-items-center">
                <div className="mx-5">
                    <Button
                        className="my-5 py-3 col"
                        onClick={() => initGoogle()}
                    >
                        Sign in using Google
                    </Button>
                    <Button className="my-5 py-3 col">
                        Sign in using Facebook
                    </Button>
                </div>
                <Footer />
            </div>
        </div>
    );
}
