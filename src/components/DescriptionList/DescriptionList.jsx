import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DescriptionList.module.css";

const DescriptionList = ({ icon, title, data }) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} />
      <div className={styles.desriptionList}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.data}>{data}</div>
      </div>
    </div>
  );
};
export default DescriptionList;
