import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import type { NavbarText } from "../interfaces/Navbar";

import Logo from "../assets/cimem.png";

function Navbar(props: {
  typing: string;
  setTyping: (arg0: string) => unknown;
  navText: NavbarText;
  english: boolean;
  setEnglish: (arg0: boolean) => unknown;
}) {
  const [nav, setNav] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const navItems = ["home", "about", "skills", "slider", "work", "contact"];

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setNav(!nav);
    props.typing === "" ? props.setTyping("hidden") : props.setTyping("");
  };

  const changeNav = () => {
    setNav(!nav);
    props.setTyping("");
  };

  const changeLanguage = () => {
    props.setEnglish(!props.english);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#080e2f] text-gray-300 z-[9999]">
      <div>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center justify-center gap-2"
        >
          <img src={Logo} alt="Logo image" width={"40px"} height={"40px"} />
          <p className="text-2xl font-light">cimem</p>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {navItems.map((item, itemIndex) => (
          <li className="hover:text-[#ffba18]" key={itemIndex}>
            <Link to={item} smooth={true} duration={500}>
              {props.navText[item]}
            </Link>
          </li>
        ))}
        <li onClick={changeLanguage} className="z-10  hover:text-[#ffba18]">
          HU/EN
        </li>
      </ul>

      <div className="flex items-center gap-4 md:hidden">
        <div
          onClick={changeLanguage}
          className="z-10 md:hidden hover:text-[#ffba18]"
        >
          HU/EN
        </div>
        <div onClick={handleClick} className="z-10 hover:text-[#ffba18]">
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul
        key="hambruger"
        className={
          nav && size < 768
            ? "absolute top-0 left-0 w-full h-screen bg-[#080e2f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        {navItems.map((item, itemIndex) => (
          <li className="py-6 text-4xl hover:text-[#ffba18]" key={itemIndex}>
            <Link onClick={changeNav} to={item}>
              {props.navText[item]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] pl-[24px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/roland-nagy-rolcho/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pl-[24px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/rolcho"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pl-[24px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ffba18]">
            <a
              className="flex items-center justify-between w-full text-[#08192f]"
              href="mailto:roland@cimem.hu"
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
