import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

//components etc.
import Footer from "../components/footer";
import Navigation from "../components/Navigation";
// import { IdContext } from "../components/PrivateRoute";
//api
// import { getDisplayName } from "../helpers/api";
//images
import $ from "../images/ExpensesIconWhite.png";
import chartsIcon from "../images/ReportsIconWhite.png";
import settingsIcon from "../images/SettingsIconWhite.png";
//styles
import styles from "../styles/HomePage.module.css";

// const backendURL = "http://localhost:5000";

export default function HomePage(props) {
  // const userId = useContext(IdContext);
  // const [displayName, setDisplayName] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(`${backendURL}/api/users/${userId}`);
  //     console.log(result.data);
  //     setDisplayName(result.data);
  //   };

  //   fetchData();
  // }, [userId]);

  return (
    <div>
      <Navigation />
      <h1 className={`${styles.text} ${styles.h1}`}>Hey User</h1>
      <div className="mx-4 vh-100">
        <Link
          className={`btn btn-danger my-4 py-4 col bg-danger d-flex align-items-center justify-content-around ${styles.buttons}`}
          to="/expenses"
        >
          <img src={$} alt={"$"} />
          <span className="h3 mb-0">New Expense</span>
        </Link>

        <Link
          className={`btn btn-danger my-4 py-4 col bg-success d-flex align-items-center justify-content-around ${styles.buttons}`}
          to="/charts"
        >
          <img src={chartsIcon} alt={"Charts"} />
          <span className="h3 mb-0">View Reports</span>
        </Link>

        <Link
          className={`btn btn-danger my-4 py-4 col bg-primary d-flex align-items-center ${styles.buttons}`}
          to="/settings"
        >
          <img className="ml-3 mr-5" src={settingsIcon} alt={"Settings"} />
          <span className="h3 mb-0 ml-0">Settings</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
