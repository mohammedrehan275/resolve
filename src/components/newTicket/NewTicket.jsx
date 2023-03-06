import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useState } from "react";
import TicketOptions from "../ticketOptions/TicketOptions";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FaceIcon from "@mui/icons-material/Face";
import LabelIcon from "@mui/icons-material/Label";
import TicketLabelOptions from "../ticketOptions/TicketLabelOptions";

const options = ["Assignee", "John Doe", "Manager", "Sr Engineer"];
const priorityOptions = ["Priority", "High", "Medium", "Low"];
const labelOptions = ["Label", "Bug", "Feature", "UI/UX"];

function NewTicket() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained">
        New Issue
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Issue</DialogTitle>
        <DialogContent>
          <TextField
            variant="standard"
            label="Issue Title"
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            placeholder="Add Description"
            variant="standard"
            fullWidth
            multiline
            minRows="3"
            sx={{ marginBottom: "10px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              flexWrap: "wrap",
            }}
          >
            <TicketOptions opt={priorityOptions} icon={<PriorityHighIcon />} />

            {/*ticket assignee options - displays list of people that can be assigned the ticket*/}
            <TicketOptions opt={options} icon={<FaceIcon />} />

            {/* displays list of labels and new labels can be added from this component */}
            <TicketLabelOptions />
          </div>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <AttachFileIcon />
          </IconButton>
          <div>
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button>Save Issue</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewTicket;
