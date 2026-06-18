import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
  },
]);
