import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import useStyles from "./styles";

import Header from "../components/header";
import EventListComponent from "../components/eventList";
import CreateEventBtn from "../components/createEventBtn";
function Layout(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item>
          <CreateEventBtn></CreateEventBtn>
        </Grid>
        <Grid item>
          <EventListComponent></EventListComponent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
