import Typewriter from "typewriter-effect";
import MyPhoto from "../assets/me_gf.png";
import { Link } from "react-scroll";
import { Home } from "../interfaces/Home";

function Home(props: { typing: string; homeText: Home }) {
  return (
    <div
      id="home"
      className="bg-[#080e2f] w-full md:pl-[80px] h-screen duration-500"
    >
      <div
        style={{
          backgroundImage: `url(${MyPhoto})`,
        }}
        className="w-full h-full lg:bg-right lg:bg-no-repeat lg:bg-contain"
      >
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col justify-center h-full ">
          <p className="text-[#ffba18]">{props.homeText.hello}</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#c3cbe7] duration-300">
            {props.homeText.name}
          </h1>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#8892b0] flex gap-3 duration-300">
            {props.homeText.iam}{" "}
            <span className={`text-[#ffba18] ${props.typing}`}>
              <Typewriter
                options={{
                  strings: props.homeText.typewriter,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
          <p className="text-[#8892b0] py-4 sm:max-w-[60%]">
            {props.homeText.long}
          </p>
          <div>
            <button className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f]">
              <Link to="work" smooth={true} duration={500}>
                {props.homeText.submit}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
