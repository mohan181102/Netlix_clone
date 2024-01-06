import React from "react";
import "./App.css";

function Loader({ display = true }) {
  return display ? (
    <div>
      <div id="loading">
        <div id="loader"></div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Loader;
