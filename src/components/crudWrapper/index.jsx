import React from "react";
import "./crudWrapper.scss";

const CrudWrapper = (props) => {
  const { read, create } = props;
  return (
    <div className="crud-wrapper">
      <div className="crud-read">{read}</div>
      <div className="crud-create">{create}</div>
    </div>
  );
};

export default CrudWrapper;
