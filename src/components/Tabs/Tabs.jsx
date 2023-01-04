import styles from "./Tabs.module.css";

const Tabs = ({ length, current, handleActive, list }) => {
  const tabsList = list ? list : [...Array(length).keys()];

  const renderTabs = () => {
    return tabsList.map((item, idx) => (
      <div
        key={`tab:${idx * Math.random()}`}
        onClick={() => handleActive(idx)}
        className={current === idx ? styles.tabActive : styles.tab}
      >
        {list ? <div className={styles.list}>{item}</div> : idx + 1}
      </div>
    ));
  };
  return <div className={styles.container}>{renderTabs()}</div>;
};

export default Tabs;
