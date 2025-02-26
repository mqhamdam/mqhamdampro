import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router";
import { HomePage } from "@/ui/pages/home.page";

export const appRouter = createBrowserRouter(
  /* include base routename `/mqhamdampro */
  createRoutesFromChildren([<Route path="/" element={<HomePage />} />]),
  
);
