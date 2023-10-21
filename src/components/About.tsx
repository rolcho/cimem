function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#080e2f] text-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="pb-8 sm:text-right">
            <p className="text-3xl font-light inline border-b-4 border-[#ffba18]">
              #about
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-4xl font-bold sm:text-right">
              hi there. I'm Roland, a junior full stack developer. please just
              take a look around.
            </p>
          </div>
          <div>
            <p>
              I graduated as a programmer in high school, but life pushed me
              into the creative profession. For 25 years I worked for Hungary's
              biggest print media companies, where I was the manager and
              employer of a small team. I had already achieved everything that
              was possible in this area. I am looking for new challenges in my
              new-old profession with the help of my graphics design, project
              organizing, and teamwork skills acquired from the smallest
              companies to the international organizations level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
