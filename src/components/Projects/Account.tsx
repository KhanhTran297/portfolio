import type { projectType } from "../../constants/type";
import { motion } from "framer-motion";
const Account = ({ project }: { project: projectType }) => {
  return (
    <div className="pt-4 mt-10 border-t border-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Account for project
      </motion.h1>
      <div className="">
        {project.account?.map((account, index) => {
          return (
            <div className="flex flex-wrap mb-8 lg:justify-center" key={index}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-base text-white">{account.role}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <p className="mb-4 text-neutral-400">email: {account.email}</p>
                <p className="mb-4 text-neutral-400">
                  password: {account.password}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Account;
