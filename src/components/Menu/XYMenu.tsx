import { Menu, MenuItem } from "./Menu";
import { Preliminary } from "../english/Lessons";
import styles from "./xy.module.scss"

const menuItems: MenuItem[] = [{ title:"Intro", link: "/eng/intro", description:"" },
    ...Array.from(Array(15).keys()).map((idx) => ({
        title: `Lesson ${ idx+1 }`, link: `/eng/lesson${ idx+1 }`, description: ""
    }))
]

export const XYMenu = () =>
    (<div className={styles.wrapper}>
      <Preliminary caption={"XYEnglish"} quote={"Практический курс английского языка"}/>
      <Menu menuItems={menuItems} />
    </div>
); 