import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import ToDo from "../pages/ToDo/ToDo";

import { BiGridAlt } from "react-icons/bi";
import { LiaUser } from "react-icons/lia";
import { FiCalendar } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";

export const ROUTES = [
  {
    name: "Projects",
    path: "/menu",
    component: ToDo,
    icon: BiGridAlt,
    subroutes: [
      {
        path: "team",
        component: Profile,
      },
      {
        path: "projects",
        component: Projects,
      },
      {
        path: "tasks",
        component: Profile,
      },
      {
        path: "reminders",
        component: Profile,
      },
    ]
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    icon: LiaUser,
  },
  {
    name: "Calendar",
    path: "/calendar",
    component: Profile,
    icon: FiCalendar,
  },
  {
    name: "Analytics",
    path: "/analytics",
    component: Profile,
    icon: VscGraph,
  },
  {
    name: "Settings",
    path: "/settings",
    component: Profile,
    icon: VscSettings,
  },
];
