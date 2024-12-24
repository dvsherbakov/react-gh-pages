import { Menu, MenuItems } from "./Menu";

const menuItems: MenuItems = [
  {
    title: "At On In",
    description: "How to use At On In?",
    link: "/eng/AtOnIn",
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
export const EngMenu = () => (
  <>
    <Menu menuItems={menuItems} />
  </>
);
