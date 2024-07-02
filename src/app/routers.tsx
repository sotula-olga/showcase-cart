import type { RouteObject } from "react-router-dom";
import Layout from "../pages/Layout";
import Showcase from "../pages/Showcase";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

export const routers: RouteObject[] = [
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Showcase,
      },
      {
        path: "showcase",
        Component: Showcase,
      },
      {
        path: "cart",
        Component: Cart
      },

    ]
  },
  {
    path: "*",
    Component: NotFound
  }
];
