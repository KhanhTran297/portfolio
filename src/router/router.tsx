import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import { loader as projectLoader } from "./project";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/project/:id",
        element: <ProjectPage />,
        loader: projectLoader,
      },
    ],
  },
]);
export default router;
