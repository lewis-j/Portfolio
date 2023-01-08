import React from "react";
import styles from "./ReadMe.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import { convertMarkDownToJsxLinks } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Project Overview</h3>
        <div className={styles.expand}>
          <FontAwesomeIcon icon={faExpand} />
        </div>
        <div className={styles.closeBtn} onClick={() => handleClose()}>
          <CloseBtn isOpen={isOpen} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.badgeList}>{renderBadges(item.badges)}</div>
        <div className={styles.description}>
          {renderDescription(item.overView)}
        </div>
      </div>
    </div>
  );
};

export default ReadMe;
