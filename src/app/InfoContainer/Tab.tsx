import { TabProps } from "../types";
import styles from "../page.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Tab = (props: TabProps): JSX.Element => {
  const tabStyle = props.picked ? styles.tab_selected : styles.tabOutline;

  return (
    <div className={styles.tabContainer} onClick={props.onClick}>
      <div className={tabStyle}>
        <div className={styles.tab}>
          <h2 className={inter.className}>{props.header}</h2>
        </div>
      </div>
    </div>
  );
};

export default Tab;
