import { Menu, MenuItems } from "./Menu";

const menuItems: MenuItems = [
  {
    title: "To be",
    description: "",
    link: "/eng/tobe",
  },
  {
    title:"Present simple",
    description: "PS usage",
    link:"/eng/PresentSimple",
  },
  {
    title: "At On In",
    description: "How to use At On In?",
    link: "/eng/AtOnIn",
  },
  {
    title: 'Irregular verbs',
    description: 'Irregular verbs list',
    link: "/eng/irregularVerbs",
  },
  {
    title: "Voice",
    description: "Materials for learn Language",
    link: "/eng/voice-input",
  },
  {
    title: "Test",
    description: "Sentences test",
    link: "/eng/sentencesTest",
  },
];
export const EngMenu = () => (
  <>
    <Menu menuItems={menuItems} />
  </>
);
