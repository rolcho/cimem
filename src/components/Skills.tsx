import IconAngular from "../assets/icons/angular.png";
import IconCsharp from "../assets/icons/csharp.png";
import IconDotnet from "../assets/icons/dotnet.png";
import IconReact from "../assets/icons/react.png";
import IconCss from "../assets/icons/css.png";
import IconIonic from "../assets/icons/ionic.png";
import IconJavascript from "../assets/icons/javascript.png";
import IconMysql from "../assets/icons/mysql.png";
import IconPostgres from "../assets/icons/postgres.png";
import IconTypescript from "../assets/icons/typescript.png";
import IconGithub from "../assets/icons/github.png";
import IconHtml from "../assets/icons/html.png";

function Skills() {
  return (
    <div id="skills" className="w-full h-screen bg-[#080e2f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="pb-8">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              #expreience
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div>
            <p className="text-4xl font-bold">
              technologies I have already used in some of my projects.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-4 py-8 text-center sm:grid-cols-6">
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconHtml} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconCss} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconJavascript} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconTypescript} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconCsharp} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconDotnet} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconAngular} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconReact} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconIonic} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconMysql} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconPostgres} className="w-full h-full p-2" />
            </div>
            <div className="font-medium duration-500 text-1xl hover:scale-125">
              <img src={IconGithub} className="w-full h-full p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
