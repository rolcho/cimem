import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import MeBay from "../assets/mebay.png";

function Work() {
  return (
    <div id="work" className="w-full h-screen bg-[#080e2f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="pb-8">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              #projects
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div>
            <p className="pb-8 text-4xl font-bold">
              some experimental projects
            </p>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-2">
            <div
              className="bg-[#ffba18] h-[250px] border-b4 rounded-md bg-cover bg-center hover:scale-105 duration-300"
              style={{
                backgroundImage: `url(${MeBay})`,
              }}
            ></div>
            <div>
              <h2 className="text-4xl font-bold text-[#ffba18]"> mebay</h2>
              <p className="my-4">
                experimental project to create buy and sell application for used
                items using typescript.
              </p>
              <h6>
                <strong>techstack:</strong> #ionic #dotnet #postgres
              </h6>
              <div className="flex gap-4 my-4">
                <a href="https://github.com/rolcho/mebay" target="_blank">
                  <button className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
                    <FaGithub />
                    source
                  </button>
                </a>
                <a href="https://mebay-app.fly.dev" target="_blank">
                  <button className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
                    <CgWebsite />
                    open
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
