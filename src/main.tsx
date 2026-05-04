import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { router } from "./router";

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <router.RouterProvider />
  </StrictMode>
);
