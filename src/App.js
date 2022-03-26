import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Coin from "./routes/Coin"
// import Hero from "./components/Hero";
// import Featured from "./components/Featured";
// import Signup from "./components/Signup";
import MoreCoins from "./components/MoreCoins";
import Comp from "./components/comp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Hero />
      <Featured />
      <Signup /> */}
        <Routes>
          <Route exact path="/" element={<Comp />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
