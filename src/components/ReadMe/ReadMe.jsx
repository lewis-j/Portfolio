import React from "react";
import styles from "./ReadMe.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import { convertMarkDownToJsxLinks } from "../../util";

const ReadMe = ({ isOpen, handleClose, item }) => {
  const renderBadges = (badgeList) =>
    badgeList.map((badge, index) => (
      <span
        key={`${badge}${index}${Math.random() * index}`}
        className={styles.badge}
      >
        {badge}
      </span>
    ));

  const renderDescription = (overView) => {
    if (!overView) return null;
    return overView.map(({ title, text }, idx) => (
      <div key={idx + title}>
        <h3 className={styles.overViewTitle}>{title}</h3>
        <div className={styles.overViewContent}>
          {convertMarkDownToJsxLinks(text)}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.readMe}>
      <div className={styles.closeBtn} onClick={() => handleClose()}>
        <CloseBtn isOpen={isOpen} />
      </div>
      <h3 className={styles.readMeTitle}>Project Overview</h3>
      <div className={styles.badgeList}>{renderBadges(item.badges)}</div>
      <div className={styles.description}>
        {renderDescription(item.overView)}
      </div>
    </div>
  );
};

export default ReadMe;
