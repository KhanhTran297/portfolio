import type { projectType } from "../../constants/type";
import { motion } from "framer-motion";

const TechStack = ({ project }: { project: projectType }) => {
  return (
    <div className="pt-4 mt-10 border-t border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <div className="grid grid-cols-2">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-3xl text-white ">Front-end</h2>
          <ul className="list-disc ">
            {project.technologies.frontend.map((tech, index) => {
              return (
                <li className="pt-2 text-base text-neutral-400" key={index}>
                  {tech}
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-3xl text-white ">Backend</h2>
          {project.technologies.backend.length > 0 ? (
            <ul className="list-disc ">
              {project.technologies.backend.map((tech, index) => {
                return (
                  <li className="pt-2 text-base text-neutral-400" key={index}>
                    {tech}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>None</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
