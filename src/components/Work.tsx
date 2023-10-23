import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Work } from "../interfaces/Work";

function Work(props: { workText: Work }) {
  return (
    <div id="work" className="w-full h-screen bg-[#080e2f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="pb-8">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              {props.workText.title}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <div>
            <p className="pb-8 text-4xl font-bold">{props.workText.short}</p>
          </div>
          {props.workText.project.map((project) => (
            <div
              key={project.name}
              className="grid w-full gap-8 sm:grid-cols-2"
            >
              <div
                className="bg-[#ffba18] h-[250px] border-b4 rounded-md bg-cover bg-center hover:scale-105 duration-300"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>
              <div>
                <h2 className="text-4xl font-bold text-[#ffba18]">
                  {" "}
                  {project.name}
                </h2>
                <p className="my-4">{project.description}</p>
                <h6>{project.techstack}</h6>
                <div className="flex gap-4 my-4">
                  <a href={project.sourceLink} target="_blank">
                    <button className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
                      <FaGithub />
                      {project.source}
                    </button>
                  </a>
                  <a href={project.deployLink} target="_blank">
                    <button className="rounded-lg px-6 py-3 text-white border-2 hover:bg-[#ffba18] hover:border-[#ffba18] hover:text-[#080e2f] flex justify-center items-center gap-2">
                      <CgWebsite />
                      {project.open}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
