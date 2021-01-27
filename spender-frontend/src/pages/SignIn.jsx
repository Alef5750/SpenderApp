import React from "react";
import GoogleButton from "react-google-button";

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
            <div className=" d-flex flex-column align-items-center">
                <img className="my-4" src={spenderLogo} alt="Logo" />
                <GoogleButton className="my-4" onClick={() => initGoogle()} />
                <Footer />
            </div>
        </div>
    );
}
