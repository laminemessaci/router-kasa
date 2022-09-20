import "./App.css";
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
