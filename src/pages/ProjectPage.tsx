import { useLoaderData, useLocation } from "react-router-dom";
import type { projectType } from "../constants/type";
import Navbar from "../components/Navbar";
import Slider from "../components/Projects/Slider";
import About from "../components/Projects/About";
import TechStack from "../components/Projects/TechStack";
import Account from "../components/Projects/Account";
import Explore from "../components/Projects/Explore";
import { useEffect, useRef } from "react";
type LoaderData = {
  project: projectType;
};
const ProjectPage = () => {
  const { project } = useLoaderData() as LoaderData;
  const windowTopRef = useRef(null);
  const { pathname } = useLocation();
  const scrollToTop = (windowTopRef: React.RefObject<HTMLElement>) => {
    windowTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    scrollToTop(windowTopRef);
  }, [pathname]);
  return (
    <div className="" ref={windowTopRef}>
      <Navbar />
      <h1 className="mb-10 text-3xl text-center text-white">{project.title}</h1>
      <Slider project={project} />
      <About project={project} />
      <TechStack project={project} />
      {project.account && <Account project={project} />}
      <Explore project={project} />
    </div>
  );
};

export default ProjectPage;
