import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import LanguageEn from "./assets/texts-en.json";
import LanugageHu from "./assets/texts-hu.json";

function App() {
  const browserLanguage = navigator.language;

  const [typing, setTyping] = useState("");
  const [english, setEnglish] = useState(browserLanguage !== "hu-HU");

  const texts = english ? LanguageEn : LanugageHu;

  return (
    <div>
      <Navbar
        typing={typing}
        setTyping={setTyping}
        navText={texts.navbar}
        english={english}
        setEnglish={setEnglish}
      />
      <Home typing={typing} homeText={texts.home} />
      <About aboutText={texts.about} />
      <Skills skillsText={texts.skills} />
      <Work workText={texts.work} />
      <Contact contactText={texts.contact} />
    </div>
  );
}

export default App;
