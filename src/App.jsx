import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import Navigation from "./navigation/index.js";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Navigation />

        <Footer />
      </div>
    </>
  );
}

export default App;
