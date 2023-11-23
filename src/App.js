import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Footer from "./Pages/Home/Footer";
import Vet from "./Pages/Home/VetProject"
import FoodMarket from "./Pages/Home/FoodMarketProject"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vetclinic" element={<Vet />}></Route>
            <Route path="/foodmarket" element={<FoodMarket />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
