import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import Ticket from "./components/ticket/Ticket";
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="App">
      <SideBar />
      <div className="main__area">
        <div className="header">
          <Typography variant="h4">Tickets</Typography>
          <Button variant="contained">New Ticket</Button>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Unassigned" {...a11yProps(0)} />
          <Tab label="All Tickets" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <div className="tickets">
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default App;
