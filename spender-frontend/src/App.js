import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
