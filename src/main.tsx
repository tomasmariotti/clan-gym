import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <router.Provider />
  </StrictMode>
);
