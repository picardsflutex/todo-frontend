import React from "react";

export interface ICollapseMenuProps {
  link: string;
  summingElement?: string;
  title: string;
  elements?: string[];
  children?: typeof React.Children
}