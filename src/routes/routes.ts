import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";

export const ROUTES = [
  {
    path: "/",
    component: Projects,
  },
  {
    path: "/profile",
    component: Profile,
  },
];
