// @pages
import DetailsPage from "../pages/details-page";
import HomePage from "../pages/home-page";
import Layout from "../layout";
import NotFoundPage from "../pages/not-found-page";
import SearchResultsPage from "../pages/search-results-page";
import { LazyExoticComponent } from "react";

interface Route {
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  layout: () => JSX.Element;
  path: string;
}

const routes: Route[] = [
  {
    component: HomePage,
    layout: Layout,
    path: "/",
  },
  {
    component: SearchResultsPage,
    layout: Layout,
    path: "/items",
  },
  {
    component: DetailsPage,
    layout: Layout,
    path: "/items/:id",
  },
  {
    component: NotFoundPage,
    layout: Layout,
    path: "/*",
  },
];

export default routes;
