import React from "react";
import Hero from "./componentes/Hero";
import "./App.css";
import Programs from "./componentes/Programs/Programs";
import Reasons from "./componentes/Reasons/Reasons";
import Plans from "./componentes/Plans/Plans";
import Testemonials from "./componentes/testemonials/Testemonials";
import Join from "./componentes/Join/Join";
import Footer from "./componentes/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testemonials />
      <Join />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
