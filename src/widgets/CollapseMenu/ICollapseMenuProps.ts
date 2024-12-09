import { Project, Collapse } from "@/lib/types";
import React from "react";

export interface ICollapseMenuProps {
  link: string;
  title: string;
  elements?: Project[] | Collapse[];
  children?: typeof React.Children;
  isStatuses?: boolean
}