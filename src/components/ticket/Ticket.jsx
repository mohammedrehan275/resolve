import { Chip, Paper, Typography } from "@mui/material";
import "./Ticket.css";

function Ticket() {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ padding: "10px", borderRadius: "8px" }}
    >
      <div className="ticket__header">
        <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
          Cannot access the system
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>3h ago</Typography>
      </div>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ut
        deserunt, voluptatem deleniti aspernatur est modi fuga! Cum, eos
        molestias.
      </Typography>
      <div className="tags">
        <Chip label="Urgent" color="warning"/>
      </div>
    </Paper>
  );
}

export default Ticket;
