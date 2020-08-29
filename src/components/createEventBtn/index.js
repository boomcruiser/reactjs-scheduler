import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { addEvent } from "../../store/actions/events";
import { connect } from "react-redux";
import CreateEventDialog from "./createEventDialog";
import { generateUid } from "../../utils";

const CreateEventBtn = ({ addEvent }) => {
  const [open, setOpen] = useState(false);

  const createEvent = ({ title, time }) => {
    addEvent({ id: generateUid(), title, time });
  };
  const openCreateEventDialog = () => {
    setOpen(true);
  };
  const onDialogClose = ({ time, title, isCancel }) => {
    if (!isCancel) {
      createEvent({ title, time });
    }
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={openCreateEventDialog}
      >
        Create an Event
      </Button>
      <CreateEventDialog open={open} onClose={onDialogClose} />
    </>
  );
};

const mapDispatchToProps = { addEvent };
export default connect(null, mapDispatchToProps)(CreateEventBtn);
