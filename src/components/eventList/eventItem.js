import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Card, CardContent, CardActions, Button, Box } from "@material-ui/core";
import { cancelEvent } from "../../store/actions/events";
const EventItem = ({ event, cancelEvent }) => {
  const deleteEvent = () => {
    cancelEvent(event.id);
  };
  const timeString = moment(event.time).format("LLLL");
  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          {event.title} : {timeString}
        </CardContent>
        <CardActions>
          <Button onClick={deleteEvent} variant="outlined">
            Cancel Event
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
const mapDispatchToProps = { cancelEvent };
export default connect(null, mapDispatchToProps)(EventItem);
