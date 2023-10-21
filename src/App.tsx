import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [typing, setTyping] = useState("");

  return (
    <>
      <Navbar typing={typing} setTyping={setTyping} />
      <Home typing={typing} />
    </>
  );
}

export default App;
