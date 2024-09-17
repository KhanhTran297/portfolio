import { PROJECTS } from "../constants";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center "
      >
        Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div
          className="flex flex-wrap gap-6 mb-8 lg:justify-center"
          key={index}
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center w-full lg:w-1/4"
          >
            <img
              src={project.image[0]}
              alt={project.title}
              // width={300}
              // height={300}
              className="w-full h-full rounded"
            />
            {/* <div
              className={`bg-[url(${project.image})] w-[300px] h-[300px]`}
            ></div> */}

            <motion.div
              className="absolute flex flex-row items-center justify-center w-full h-full gap-8 rounded cursor-pointer bg-slate-400 "
              whileHover={{ opacity: 0.75, y: 0 }}
              initial={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <a href={project.github}>
                <FaGithub className="text-3xl text-white cursor-pointer hover:text-purple-800" />
              </a>
              <div onClick={() => navigate(`/project/${project.id}`)}>
                <FaEye className="text-3xl text-white cursor-pointer hover:text-purple-800" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold ">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {/* {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900"
              >
                {tech}
              </span>
            ))} */}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
