import { json } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { PROJECTS } from "../constants";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = PROJECTS.find((project) => project.id === params.id);
  return json({ project });
};
