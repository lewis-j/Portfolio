import styles from "./CloseBtn.module.css";

const CloseBtn = ({ isOpen = true }) => {
  const line = isOpen ? styles.isOpen : styles.isClosed;

  return (
    <div className={styles.container}>
      <div className={line} />
      <div className={line} />
    </div>
  );
};
export default CloseBtn;
