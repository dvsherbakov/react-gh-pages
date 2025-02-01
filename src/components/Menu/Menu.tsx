import { useNavigate } from "react-router-dom";
import styles from "./main.module.scss";

export type MenuItem = { title: string; description: string; link: string };
export type MenuItems = MenuItem[];

export type MenuProps = {
  menuItems: MenuItems;
};

export const Menu = ({ menuItems }: MenuProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {menuItems.map((x: MenuItem) => (
        <div
          className={styles.menuCard}
          key={x.title}
          onClick={() => {
            navigate(x.link);
          }}
        >
          <h1>{x.title}</h1>
          <span>{x.description}</span>
        </div>
      ))}
    </div>
  );
};

