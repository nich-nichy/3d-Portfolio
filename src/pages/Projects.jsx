import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-3 md:px-16 lg:px-24">
      <h1 className="font-semibold text-3xl text-center">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-4 text-center max-w-2xl mx-auto leading-relaxed">
        I've embarked on several projects, many of them are open-source. Here are some of them!
      </p>

      <div className="flex flex-wrap justify-center my-16 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="relative block-container w-12 h-12 mx-auto">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center text-center">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-3 text-slate-500 max-w-sm">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 my-20" />

      <CTA />
    </section>
  );
};

export default Projects;
