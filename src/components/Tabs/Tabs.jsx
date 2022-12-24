import styles from "./Tabs.module.css";

const Tabs = ({ length, current, handleActive }) => {
  const renderTabs = () => {
    return [...Array(length).keys()].map((idx) => (
      <div
        key={`tab:${idx * Math.random()}`}
        onClick={() => handleActive(idx + 1)}
        className={current === idx ? styles.tabActive : styles.tab}
      >
        {idx + 1}
      </div>
    ));
  };
  return <div className={styles.container}>{renderTabs()}</div>;
};

export default Tabs;
