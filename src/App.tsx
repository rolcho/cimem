import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutText from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import LanguageEn from "./assets/texts-en.json";
import LanugageHu from "./assets/texts-hu.json";
import Slider from "./components/Slider";

function App() {
  const browserLanguage = navigator.language;

  const [typing, setTyping] = useState("");
  const [english, setEnglish] = useState(
    browserLanguage !== "hu-HU" && browserLanguage !== "hu"
  );

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
      <AboutText aboutText={texts.about} />
      <Skills skillsText={texts.skills} />
      <Slider logoText={texts.logo} />
      <Work workText={texts.work} />
      <Contact contactText={texts.contact} />
    </div>
  );
}

export default App;
