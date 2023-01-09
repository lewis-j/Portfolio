import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
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
  if (wrapperEl) return createPortal(children, wrapperEl);
  return null;
};

export default Modal;
