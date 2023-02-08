import React from "react";
import "./SideBar.css";
import { Button } from "@mui/material";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AnalyticsIcon from '@mui/icons-material/Analytics';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Resolve</h2>
      </div>
      <div className="sidebar__tabs">
        <Button startIcon={<AutoAwesomeMosaicIcon/>} size="large" sx={{color: "#000"}}>
          Overview
        </Button>
        <Button startIcon={<AnalyticsIcon/>} size="large" sx={{color: "#000"}}>
          Analytics
        </Button>
        <Button startIcon={<ConfirmationNumberIcon/>} size="large" sx={{color: "#000"}}>
          Tickets
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
