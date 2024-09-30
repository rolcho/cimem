import type { AboutTextProps } from "../interfaces/About";

function AboutText(props: Readonly<{ aboutText: AboutTextProps }>) {
  return (
    <div id="about" className="w-full h-screen bg-[#080e2f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="pb-8 sm:text-right">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              {props.aboutText.title}
            </p>
          </div>
          <div />
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-4xl font-bold sm:text-right">
              {props.aboutText.short}
            </p>
          </div>
          <div>
            <p>{props.aboutText.long}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
