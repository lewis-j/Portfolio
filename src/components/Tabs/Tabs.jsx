import styles from "./Tabs.module.css";

const Tabs = ({ length, current, handleActive, list }) => {
  const tabsList = list ? list : [...Array(length).keys()];

  const renderTabs = () => {
    return tabsList.map((item, idx) => {
      const tabClass = current === idx ? styles.tabActive : styles.tab;
      // const tabClass = styles.tab + " " + isActive;
      return (
        <div
          onClick={() => handleActive(idx)}
          className={tabClass}
          key={`tab:${idx * Math.random()}`}
        >
          {list ? <div className={styles.list}>{item}</div> : idx + 1}
        </div>
      );
    });
  };
  return <div className={styles.container}>{renderTabs()}</div>;
};

export default Tabs;
