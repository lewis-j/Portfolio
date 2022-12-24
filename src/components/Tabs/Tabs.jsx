import styles from "./Tabs.module.css";

const Tabs = ({ offset }) => {
  const renderTabs = () => {
    return <div className={styles.tab}></div>;
  };
  return <div className={styles.container}>{renderTabs()}</div>;
};

export default Tabs;
