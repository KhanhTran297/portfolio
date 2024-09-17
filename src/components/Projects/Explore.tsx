import { Link } from "react-router-dom";
import type { projectType } from "../../constants/type";
import { AiOutlineGlobal } from "react-icons/ai";
const Explore = ({ project }: { project: projectType }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mt-4 mb-4 ">
      <p className="text-base font-bold text-red-600 ">{project.info}</p>
      <Link
        to={project.deploy}
        className=" hover:scale-105 duration-100  lg:w-max px-4 h-[70px] rounded-2xl gap-3 flex flex-row justify-center items-center bg-white"
      >
        <AiOutlineGlobal className="text-4xl text-black" />
        <p className="text-base text-black">let's explore</p>
      </Link>
    </div>
  );
};

export default Explore;
