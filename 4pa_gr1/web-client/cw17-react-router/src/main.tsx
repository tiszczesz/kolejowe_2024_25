import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import List from "./pages/List.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About/> },
  { path: "/list", element: <List/> },
  {path: "/contact", element: <Contact/>},
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
