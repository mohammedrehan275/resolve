import { useState } from "react";
import { Chip, Menu, MenuItem, Tooltip } from "@mui/material";
import { Controller } from "react-hook-form";

function TicketOptions({ opt, icon, control }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleAssignee = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleCloseEl = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title={opt[0]} sx={{ marginRight: "5px", borderRadius: "5px" }}>
        <Chip icon={icon} label={opt[selectedIndex]} onClick={handleAssignee} />
      </Tooltip>
      <Controller
        name="assignee"
        control={control}
        render={({ field: { onChange } }) => (
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseEl}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {opt.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => {
                  handleMenuItemClick(event, index);
                  onChange(option);
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        )}
      />
    </>
  );
}

export default TicketOptions;
