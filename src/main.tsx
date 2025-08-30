import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { appRouter } from "./app/app.router.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider>
      <RouterProvider router={appRouter} />{" "}
    </ConfigProvider>
  </StrictMode>
);
