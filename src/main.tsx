import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { appRouter } from "./app/app.router.tsx";
import { ConfigProvider } from "antd";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ConfigProvider>
        <RouterProvider router={appRouter} />{" "}
      </ConfigProvider>
    </HelmetProvider>
  </StrictMode>
);
