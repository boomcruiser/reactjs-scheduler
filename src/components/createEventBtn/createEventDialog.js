import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import {
  TextField,
  DialogTitle,
  Dialog,
  Button,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
function CreateEventDialog(props) {
  const { onClose, open } = props;
  const [title, setTitle] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleClose = (isCancel) => {
    setTitle("");
    handleDateChange(new Date());
    onClose({ time: selectedDate, title, isCancel });
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Create a schedule</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Enter a title"
          value={title}
          onChange={handleChange}
        ></TextField>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            margin="dense"
            autoOk
            fullWidth
            ampm={true}
            disableFuture
            value={selectedDate}
            onChange={handleDateChange}
            label="Select a date"
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleClose(true)}
          variant="outlined"
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={() => handleClose(false)} color="primary" autoFocus>
          Create Event
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default CreateEventDialog;
