import { icons } from "../assets/icons";
import type { SkillsTextProps } from "../interfaces/Skills";

function Skills(props: Readonly<{ skillsText: SkillsTextProps }>) {
  return (
    <div
      id="skills"
      className="w-full min-h-screen sm:h-screen bg-[#080e2f] text-gray-300 pt-[80px] sm:pt-0"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="pb-8">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              {props.skillsText.title}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div>
            <p className="text-4xl font-bold">{props.skillsText.short}</p>
          </div>
          <div className="grid w-full grid-cols-3 gap-4 py-8 text-center sm:grid-cols-6">
            {icons.map((icon) => (
              <div
                key={icon.name}
                className="font-medium duration-500 text-1xl scale-80 hover:scale-125"
              >
                <img
                  src={icon.name}
                  alt={icon.alt}
                  title={icon.alt}
                  className="w-full h-full p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
