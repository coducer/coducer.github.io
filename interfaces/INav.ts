import { IconType } from "react-icons";

export interface INav {
  title: string;
  description?: string;
  href?: string;
  icon?: IconType;
  children: INav[]
}