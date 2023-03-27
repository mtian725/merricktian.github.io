import { StaticImageData } from "next/image";

export type WindowDimentions = {
  width: number;
  height: number;
};

export type TabProps = {
  header: string;
  picked: boolean;
  onClick: () => void;
};

export enum Tabs {
  AboutMe,
  Projects,
  ContactMe,
}

export type projectType = {
  name: string;
  image: StaticImageData;
  github?: string;
  webapp?: string;
};
