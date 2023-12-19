import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div id="page-loading">
      <div className="three-balls">
        <div className="ball ball1" />
        <div className="ball ball2" />
        <div className="ball ball3" />
      </div>
    </div>
  );
};

export default Loading;
