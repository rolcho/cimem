import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import MyPhoto from "../assets/me_gf.png";
import MyPhotoXs from "../assets/me_gf_xs.png";
import type { HomeTextProps } from "../interfaces/Home";

function Home(props: Readonly<{ typing: string; homeText: HomeTextProps }>) {
  return (
    <div
      id="home"
      className="w-full min-h-screen sm:h-screen bg-[#080e2f] text-gray-300 pt-[80px] sm:pt-0 sm:pl-[100px]"
    >
      <div
        style={{
          backgroundImage: `url(${MyPhoto})`,
        }}
        className="w-full h-full lg:bg-right lg:bg-no-repeat lg:bg-contain"
      >
        <div className="max-w-[1600px] mx-auto px-4 flex flex-col justify-center h-full ">
          <img
            src={MyPhotoXs}
            alt="Roland Nagy"
            className="pb-8 rounded-md sm:hidden"
          />
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
            <button
              type="button"
              className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f]"
            >
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
