import type socialIcons from "@assets/socialIcons";
import type techIcons from "@assets/techIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type TechObjects = {
  name: keyof typeof techIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
