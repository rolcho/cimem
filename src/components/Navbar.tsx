import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/react.svg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#080e2f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" />
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div
        onClick={handleClick}
        className="z-10 md:hidden hover:text-[#ffba18]"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          nav && size < 768
            ? "absolute top-0 left-0 w-full h-screen bg-[#080e2f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl hover:text-[#ffba18]">Home</li>
        <li className="py-6 text-4xl hover:text-[#ffba18]">About</li>
        <li className="py-6 text-4xl hover:text-[#ffba18]">Skills</li>
        <li className="py-6 text-4xl hover:text-[#ffba18]">Work</li>
        <li className="py-6 text-4xl hover:text-[#ffba18]">Contact</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] pl-[24px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/roland-nagy-rolcho/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] pl-[24px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/rolcho"
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
