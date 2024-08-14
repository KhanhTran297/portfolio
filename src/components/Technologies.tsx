import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiFirebaseLine } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion";
// const iconVariants = (duration: number) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10] as number[],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });
const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center "
      >
        Techonologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaReact className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiNextjsFill className="bg-black text-7xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiFirebaseLine className="text-orange-500 text-7xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiSocketdotio className="bg-black text-7xl" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 6,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiAntdesign className="text-red-400 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
