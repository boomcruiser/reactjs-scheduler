import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import EventItem from "./eventItem";
import { connect } from "react-redux";

const EventListComponent = ({ events: { eventList } }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.list}>
      {eventList.length === 0 && <EmptyListComponent />}
      {eventList.map((event) => (
        <EventItem key={event.id} event={event}></EventItem>
      ))}
    </Paper>
  );
};
const EmptyListComponent = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.emptyList} variant="h4" component="p">
      No scheduled events yet. Try creating an event.
    </Typography>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps, null)(EventListComponent);
