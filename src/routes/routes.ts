import { BiGridAlt } from "react-icons/bi";
import { LiaUser } from "react-icons/lia";
import { FiCalendar } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { VscSettings } from "react-icons/vsc";

import { Analytics, Calendar, Profile, Projects, Settings } from "@/page";

export const DASHBOARD_ROUTES = [
  {
    name: "Projects",
    path: "/dashboard/projects",
    component: Projects,
    icon: BiGridAlt,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    component: Profile,
    icon: LiaUser,
  },
  {
    name: "Calendar",
    path: "/dashboard/calendar",
    component: Calendar,
    icon: FiCalendar,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    component: Analytics,
    icon: VscGraph,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    component: Settings,
    icon: VscSettings,
  },
];

export const MENU_ROUTES = [
  {
    name: "Team",
    path: "/dashboard/team",
    component: Projects,
    icon: BiGridAlt,
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    component: Projects,
    icon: BiGridAlt,
  },
  {
    name: "Task",
    path: "/dashboard/task",
    component: Projects,
    icon: BiGridAlt,
  },
  {
    name: "Reminders",
    path: "/dashboard/reminders",
    component: Projects,
    icon: BiGridAlt,
  }
];