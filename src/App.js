import React from "react";

// import { About, Skills, Header, Footer, Work, Testimonial } from "./containers";

import { Navbar } from "./components";

import "./app.scss";
import Roadmap from "./components/Roadmap";
import Home from "./components/Home";
import Tokenomics from "./components/Tokenomics";
import Social from "./components/Social";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Tokenomics />
      <Roadmap />
      <Social />
      {/* <About /> */}
      {/* <Header />
      <Skills />
      <Work />
      <Testimonial />
      <Footer /> */}
    </div>
  );
}

export default App;
