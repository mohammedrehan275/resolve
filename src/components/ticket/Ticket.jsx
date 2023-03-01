import { Avatar, Chip, Paper, Typography } from "@mui/material";
import "./Ticket.css";

function Ticket() {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ padding: "10px", borderRadius: "8px", cursor: "pointer" }}
    >
      <div className="ticket__header">
        <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
          Cannot access the system
        </Typography>
        <div className="tags">
          <Chip
            label="Unassigned"
            variant="outlined"
            // color="secondary"
            size="small"
            avatar={<Avatar>P</Avatar>}
          />
          <Chip label="Urgent" color="error" variant="outlined" size="small" />
          <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
            3h ago
          </Typography>
        </div>
      </div>
      <Typography
        variant="body2"
        sx={{
          textAlign: "justify",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ut
        deserunt, voluptatem deleniti aspernatur est modi fuga! Cum, eos
        molestias. deserunt, voluptatem deleniti aspernatur est modi fuga! Cum,
        eos molestias.
      </Typography>
    </Paper>
  );
}

export default Ticket;
