import React, { useState } from "react";
import styles from "./ReadMe.module.css";
import CloseBtn from "../CloseBtn/CloseBtn";
import { appendStyles, convertMarkDownToJsxLinks } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

const ReadMe = ({ isOpen, handleClose, item }) => {
  const [isExpanded, setExpanded] = useState(false);
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

  const renderReadMe = () => (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>Project Overview</h3>
        <div className={styles.btns}>
          <div
            className={styles.expandBtn}
            onClick={() => setExpanded(!isExpanded)}
          >
            <FontAwesomeIcon icon={faExpand} />
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => {
              if (isExpanded) setExpanded(false);
              handleClose();
            }}
          >
            <CloseBtn isOpen={isOpen} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.badgeList}>{renderBadges(item.badges)}</div>
        <div className={styles.description}>
          {renderDescription(item.overView)}
        </div>
      </div>
    </>
  );

  if (isExpanded)
    return (
      <Modal>
        <div className={appendStyles(styles.container, styles.modalContainer)}>
          {renderReadMe()}
        </div>
      </Modal>
    );

  return (
    <div className={appendStyles(styles.container, styles.smallContainer)}>
      {renderReadMe()}
    </div>
  );
};

export default ReadMe;
