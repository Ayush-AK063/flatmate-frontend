import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="overlay">
      <div className="overlayDoor" />
      <div className="overlayContent">
        <div className="loader">
          <div className="inner" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
