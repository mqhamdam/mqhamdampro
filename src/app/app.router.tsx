import { createBrowserRouter } from "react-router";
import { HomePage } from "@/ui/pages/home.page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
