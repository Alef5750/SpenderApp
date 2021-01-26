import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../components/footer";

import spenderLogo from "../images/spenderLogo.png";
import styles from "../styles/Navbar.module.css";

export default function SignIn() {
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
                Welcome to
            </div>
            <div className=" d-flex align-items-center">
                <div className="mx-5">
                    <img src={spenderLogo} alt="Logo" />
                    <Button
                        className="my-5 py-3 col"
                        onClick={() => initGoogle()}
                    >
                        Sign in using Google
                    </Button>
                </div>
                <Footer />
            </div>
        </div>
    );
}
