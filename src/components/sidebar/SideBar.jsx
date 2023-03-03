import React from "react";
import "./SideBar.css";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Typography } from "@mui/material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Resolve</h2>
      </div>
      <div className="sidebar__tabs">
        <button className="tab">
          <AutoAwesomeMosaicIcon/>
          <Typography>Overview</Typography>
        </button>
        <button className="tab">
          <AnalyticsIcon/>
          <Typography>Analytics</Typography>
        </button>
        <button className="tab">
          <ConfirmationNumberIcon/>
          <Typography>Tickets</Typography>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
