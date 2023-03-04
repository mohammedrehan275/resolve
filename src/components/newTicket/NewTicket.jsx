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
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import FaceIcon from "@mui/icons-material/Face";
import LabelIcon from '@mui/icons-material/Label';


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
          <TicketOptions opt={priorityOptions} icon={<PriorityHighIcon/>}/>
          <TicketOptions opt={options} icon={<FaceIcon/>}/>
          <TicketOptions opt={labelOptions} icon={<LabelIcon/>}/>
        </DialogContent>
        <DialogActions>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <AttachFileIcon />
          </IconButton>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button>Save Issue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewTicket;
