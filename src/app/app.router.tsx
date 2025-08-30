import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router";
import { HomePage } from "@/ui/pages/home.page";
import ProjectsPage from "@/ui/pages/projects.page";
import ProjectDetailsPage from "@/ui/pages/project-details.page";

const _HomePageRoute = <Route path="/" element={<HomePage />} />;
const _ProjectsPageRoute = (
  <Route path="/projects" element={<ProjectsPage />} />
);
const _ProjectDetailsPageRoute = (
  <Route path="/projects/:id" element={<ProjectDetailsPage />} />
);

export const appRouter = createBrowserRouter(
  /* include base routename `/mqhamdampro */
  createRoutesFromChildren([
    _HomePageRoute, 
    _ProjectsPageRoute, 
    _ProjectDetailsPageRoute
  ])
);
