import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <ProductCard/>
    </div>
  );
}

export default App;
