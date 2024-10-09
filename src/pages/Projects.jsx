import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-3 md:px-16 lg:px-24">
      <h1 className="font-semibold text-3xl text-center">
        My{" "}
        <span className="sky-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-4 text-center max-w-2xl mx-auto leading-relaxed">
        I've embarked on several projects, many of them are open-source. Here are some of them!
      </p>

      <div className="flex flex-wrap justify-center my-16 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="relative block-container">
              <div className={`rounded-xl ${project.theme}`} />
              <div className="rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="object-contain rounded"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center text-center">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-3 text-slate-500 max-w-sm">{project.description}</p>
              <div className="flex gap-4">
                {/* View Button */}
                <div className="mt-5 p-3 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <FaEye />
                      <span>Live Demo</span>
                    </span>
                  </Link>
                </div>

                {/* Source Code Button */}
                <div className="mt-5 p-3 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <FaCode />
                      <span>Source Code</span>
                    </span>
                  </Link>
                </div>
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
