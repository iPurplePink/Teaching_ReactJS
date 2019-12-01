import Home from "../../modules/Home";
import About from "../../modules/About";

const publicRoutes = [
  {
    component: Home,
    path: "/home",
    id: "home"
  },
  {
    component: About,
    path: "/about",
    id: "about"
  }
];

export default publicRoutes;
