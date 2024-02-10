import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Keunggulan from "./components/Keunggulan";
import ProductCard from "./components/ProductCard";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Keunggulan />
      {/* <ProductCard/> */}
      <Menu />
      
    </div>
  );
}

export default App;
