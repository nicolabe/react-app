import React, { Component } from "react";
import Routes from "../routes";
import "../css/grid.css";

class Content extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="sidebar-left" />
        <div className="middle-container">
          <div>
            <Routes />
          </div>
        </div>
        <div className="sidebar-right" />
      </div>
    );
  }
}

export default Content;
