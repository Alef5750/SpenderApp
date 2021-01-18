import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div
      className={`position-fixed fixed-bottom py-3 text-white ${styles.footer}`}
    >
      Spender
    </div>
  );
}
