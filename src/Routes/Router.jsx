import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Find from "../pages/Find/Find";
import Contact from "../pages/Contact/Contact";
import MyMap from "../components/MyMap/MyMap";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/find",
        Component: Find,
      },
      {
        path: "/my-map",
        Component: MyMap,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
