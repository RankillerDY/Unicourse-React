import { lazy } from "react";

interface pathsType {
  path: string;
  exact: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>;
}
const Home = lazy(() => import("./Home/index"));

const pathArray: pathsType[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export default pathArray;
