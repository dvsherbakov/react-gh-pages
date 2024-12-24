import {Menu, MenuItems} from "./Menu";
const menuItems: MenuItems = [
  {
    title: "English",
    description: "Materials for learn language",
    link: "/eng",
  },
  {
    title: "Russian",
    description: "Materials for learn Language",
    link: "/ru",
  },
  {
    title: "Math",
    description: "Materials for learn subject",
    link: "/math",
  },
];

export const MainMenu = () => <><Menu menuItems={menuItems} /></>;
