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
import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "../../features/ticketSlice";
import { useForm, Controller } from "react-hook-form";

const options = ["Assignee", "John Doe", "Manager", "Sr Engineer"];
const priorityOptions = ["Priority", "High", "Medium", "Low"];

const defaultValues = {
  title: "",
  description: "",
  assignee: "",
  labels: []
};

function NewTicket() {
  const { handleSubmit, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  const [open, setOpen] = useState(false);

  // console.log(data);

  const todos = useSelector((state) => state.ticket);
  console.log(todos)

  // // initial the dispatch here
  const dispatch = useDispatch();

  const addTicketHandler = (event, data) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTicket(data));
  };

  const onSubmit = (data) => {
    setData(data)
    dispatch(addTicket(data));
  }

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
          {/* <form onSubmit={handleSubmit((data) => {setData(data); addTicketHandler; })}> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <TextField
                  variant="standard"
                  {...field}
                  label="Issue Title"
                  fullWidth
                  sx={{ marginBottom: "10px" }}
                />
              )}
              name="title"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  placeholder="Add Description"
                  variant="standard"
                  {...field}
                  fullWidth
                  multiline
                  minRows="3"
                  sx={{ marginBottom: "10px" }}
                />
              )}
              name="description"
              control={control}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                flexWrap: "wrap",
              }}
            >
              <TicketOptions
                opt={priorityOptions}
                icon={<PriorityHighIcon />}
                control={control}
              />

              {/*ticket assignee options - displays list of people that can be assigned the ticket*/}
              <TicketOptions
                opt={options}
                icon={<FaceIcon />}
                control={control}
              />

              {/* displays list of labels and new labels can be added from this component */}
              <TicketLabelOptions control={control}/>
            </div>
          </form>
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
            <Button type="submit">Save Issue</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewTicket;
