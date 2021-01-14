import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      {/* why i see the navbar only in the main page? shouldn't it be throughout the app in all the pages? how can you navigate? */}
      <Router />
    </div>
  );
}

export default App;
