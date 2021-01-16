import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
// import Navigation from "./components/Navigation";

// I added the navigation to the App, that way, you can navigate throughout the app

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
