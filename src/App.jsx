import "./App.css";
import Home from "./containers/Home/index.jsx";

import Header from "./components/Header/index.jsx";
import Navigation from "./navigation/index.js";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Navigation />
      </div>
    </>
  );
}

export default App;
