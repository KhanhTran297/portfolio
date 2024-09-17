import type { projectType } from "../../constants/type";
import { motion } from "framer-motion";
const About = ({ project }: { project: projectType }) => {
  return (
    <div className="pt-4 mt-10 border-t border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        About Project
      </motion.h1>
      <div className="">
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-base text-white">Description:</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <p className="mb-4 text-neutral-400">{project.description}</p>
          </motion.div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-base text-white">Number of members:</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <p className="mb-4 text-neutral-400">{project.member}</p>
          </motion.div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-base text-white">Position:</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <p className="mb-4 text-neutral-400">{project.role}</p>
          </motion.div>
        </div>
        <div className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-base text-white">Main responsibilities:</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            {/* <p className="mb-4 text-neutral-400">{project.role}</p> */}
            <ul className="mb-4 list-disc text-neutral-400">
              {project.responsibilities.map((responsibility, index) => {
                return <li key={index}>{responsibility}</li>;
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
