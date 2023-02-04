import { Paper } from "@mui/material";
import React from "react";
import "./Ticket.css";

function Ticket() {
  return (
    <Paper elevation={0}>
      <div className="ticket__header">
        <h3>Cannot access the system</h3>
        <h4>3h ago</h4>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ut
        deserunt, voluptatem deleniti aspernatur est modi fuga! Cum, eos
        molestias.
      </p>
      <div className="tags">
        <p>Urgent</p>
      </div>
    </Paper>
  );
}

export default Ticket;
