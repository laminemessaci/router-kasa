import "./App.css";
import Home from "./containers/Home/index.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/index.jsx";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
