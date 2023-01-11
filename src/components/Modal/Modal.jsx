import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { appendStyles } from "../../util";
import styles from "./Modal.module.css";

const Modal = ({ children, className }) => {
  const [wrapperEl, setWrapper] = useState();
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", styles.wrapper);
    const portalElement = document.getElementById("portal");
    portalElement.appendChild(wrapper);
    setWrapper(wrapper);

    return () => {
      portalElement.removeChild(wrapper);
      document.body.style.overflow = "visible";
    };
  }, []);
  if (wrapperEl)
    return createPortal(
      <div className={appendStyles(styles.container, className)}>
        {children}
      </div>,
      wrapperEl
    );
  return null;
};

export default Modal;
