import {
  Autocomplete,
  Box,
  Chip,
  ClickAwayListener,
  Input,
  Popper,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import LabelIcon from "@mui/icons-material/Label";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { Controller } from "react-hook-form";

const labels = [
  {
    name: "good first issue",
    color: "#7057ff",
    description: "Good for newcomers",
  },
  {
    name: "help wanted",
    color: "#008672",
    description: "Extra attention is needed",
  },
  {
    name: "priority: critical",
    color: "#b60205",
    description: "",
  },
  {
    name: "priority: high",
    color: "#d93f0b",
    description: "",
  },
  {
    name: "priority: low",
    color: "#0e8a16",
    description: "",
  },
  {
    name: "priority: medium",
    color: "#fbca04",
    description: "",
  },
  {
    name: "status: can't reproduce",
    color: "#fec1c1",
    description: "",
  },
  {
    name: "status: confirmed",
    color: "#215cea",
    description: "",
  },
  {
    name: "status: duplicate",
    color: "#cfd3d7",
    description: "This issue or pull request already exists",
  },
  {
    name: "status: needs information",
    color: "#fef2c0",
    description: "",
  },
  {
    name: "status: wont do/fix",
    color: "#eeeeee",
    description: "This will not be worked on",
  },
  {
    name: "type: bug",
    color: "#d73a4a",
    description: "Something isn't working",
  },
  {
    name: "type: discussion",
    color: "#d4c5f9",
    description: "",
  },
  {
    name: "type: documentation",
    color: "#006b75",
    description: "",
  },
  {
    name: "type: enhancement",
    color: "#84b6eb",
    description: "",
  },
  {
    name: "type: epic",
    color: "#3e4b9e",
    description: "A theme of work that contain sub-tasks",
  },
  {
    name: "type: feature request",
    color: "#fbca04",
    description: "New feature or request",
  },
  {
    name: "type: question",
    color: "#d876e3",
    description: "Further information is requested",
  },
];

function TicketLabelOptions({control}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pendingValue, setPendingValue] = useState([]);
  const [value, setValue] = useState([labels[1], labels[11]]);

  const handleLabel = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  // console.log(value);

  const handleLabelClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const openLabel = Boolean(anchorEl);
  const id = openLabel ? "issue-label" : undefined;
  return (
    <>
      <Tooltip title={labels[0].name} sx={{ borderRadius: "5px" }}>
        <Chip
          icon={<LabelIcon />}
          label="New Label"
          onClick={handleLabel}
          aria-describedby={id}
        />
      </Tooltip>
      {value.map((label) => (
        <Tooltip title="new labvel" sx={{ borderRadius: "5px" }}>
          <Chip
            icon={<LabelIcon />}
            label={label.name ?? label}
            // onClick={handleLabel}
          />
        </Tooltip>
      ))}
      <Popper
        id={id}
        open={openLabel}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{
          border: "1px solid #e1e4e8",
          boxShadow: "0 8px 24px rgba(149, 157, 165, 0.2)",
          borderRadius: "5px",
          width: "300px",
          zIndex: 10000,
          fontSize: "13px",
          color: "#000",
          backgroundColor: "#fff",
        }}
      >
        <ClickAwayListener onClickAway={handleLabelClose}>
          <div>
            <Box
              sx={{
                borderBottom: "#eaecef",
                padding: "8px 10px",
                fontWeight: 600,
              }}
            >
              Apply labels to this pull request
            </Box>
            <Controller
              control={control}
              name="labels"
              render={({ field }) => (
                <Autocomplete
                  freeSolo
                  open
                  multiple
                  onClose={(event, reason) => {
                    if (reason === "escape") {
                      handleLabelClose();
                    }
                  }}
                  value={pendingValue}
                  onChange={(event, newValue, reason) => {
                    if (
                      event.type === "keydown" &&
                      event.key === "Backspace" &&
                      reason === "removeOption"
                    ) {
                      return;
                    }
                    field.onChange(newValue)
                    setPendingValue(newValue);
                  }}
                  onBlur={field.onBlur}
                  // value={field.value}
                  disableCloseOnSelect
                  PopperComponent={PopperComponent}
                  renderTags={() => null}
                  noOptionsText="No labels"
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Box
                        component={DoneIcon}
                        sx={{
                          width: 17,
                          height: 17,
                          mr: "5px",
                          ml: "-2px",
                        }}
                        style={{
                          visibility: selected ? "visible" : "hidden",
                        }}
                      />
                      <Box
                        component="span"
                        sx={{
                          width: 14,
                          height: 14,
                          flexShrink: 0,
                          borderRadius: "3px",
                          mr: 1,
                          mt: "2px",
                        }}
                        style={{ backgroundColor: option.color }}
                      />
                      <Box
                        sx={{
                          flexGrow: 1,
                          "& span": {
                            color: "#586069",
                          },
                        }}
                      >
                        {option.name}
                        <br />
                        <span>{option.description}</span>
                      </Box>
                      <Box
                        component={CloseIcon}
                        sx={{ opacity: 0.6, width: 18, height: 18 }}
                        style={{
                          visibility: selected ? "visible" : "hidden",
                        }}
                      />
                    </li>
                  )}
                  options={[...labels].sort((a, b) => {
                    // Display the selected labels first.
                    let ai = value.indexOf(a);
                    ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                    let bi = value.indexOf(b);
                    bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                    return ai - bi;
                  })}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <Input
                      ref={params.InputProps.ref}
                      inputProps={params.inputProps}
                      autoFocus
                      placeholder="Filter labels"
                      sx={{
                        padding: "10px",
                        width: "100%",
                        borderBottom: "1px solid #eaecef",
                        "& input": {
                          borderRadius: "5px",
                          backgroundColor: "#fff",
                          padding: "8px",
                          border: "1px solid #eaecef",
                          fontSize: 14,
                          "&:focus": {
                            boxShadow: "0px 0px 0px 3px rgba(3, 102, 214, 0.3)",
                            borderColor: "#0366d6",
                          },
                        },
                      }}
                    />
                  )}
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </Popper>
    </>
  );
}

function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  // return <StyledAutocompletePopper {...other} />;
  return <div style={{ position: "relative" }} {...other} />;
}

export default TicketLabelOptions;
