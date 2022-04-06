import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

const Modal = (props) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? ReactDOM.createPortal(
        <div className="modal">{props.children}</div>,
        document.body
      )
    : null;
};

export default Modal;
