import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router />
    </div>
  );
}

export default App;
