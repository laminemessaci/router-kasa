import Navigation from "./navigation/index.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

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
