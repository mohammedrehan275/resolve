import React from "react";
import "./SideBar.css";
import ticket from "../../assets/ticket.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Resolve</h2>
      </div>
      <div className="sidebar__tabs">
        <button className="tab">
          <img src={ticket} alt="image" className="tab__logo" />
          <p className="tab__text">Overview</p>
        </button>
        <div className="tab">
          <img src={ticket} alt="image" className="tab__logo" />
          <p className="tab__text">Analytics</p>
        </div>
        <div className="tab">
          <img src={ticket} alt="image" className="tab__logo" />
          <p className="tab__text">Tickets</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
