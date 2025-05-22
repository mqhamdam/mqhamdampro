import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router";
import { HomePage } from "@/ui/pages/home.page";
import ProjectsPage from "@/ui/pages/projects.page"; // Changed to default import

export const appRouter = createBrowserRouter(
  /* include base routename `/mqhamdampro */
  createRoutesFromChildren([
    <Route path="/" element={<HomePage />} />,
    <Route path="/projects" element={<ProjectsPage />} />
  ]),
  
);
