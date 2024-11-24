import { Project, Stasuses } from "@/types";
import React from "react";

export interface ICollapseMenuProps {
  link: string;
  title: string;
  elements?: Project[] | Stasuses[];
  children?: typeof React.Children;
  isStatuses?: boolean
}