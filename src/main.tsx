import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { getRouter } from "./router";

const router = getRouter();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(
  <StrictMode>
    <router.RouterProvider />
  </StrictMode>
);
