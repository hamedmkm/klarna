import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./SpLayout.css";
const SpLayout = ({ ContainerClass, children, GridClass, img, ...style }) => {
  return (
    <Container
      fixed
      maxWidth='sm'
      className={`containerSpLayout ${ContainerClass}`}>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={`gridSpLayout gridSpItem ${GridClass}`}
        spacing={10}>
        {children}
        <Grid item xs className={`imgSpLayout ${img}`} style={style}></Grid>
      </Grid>
    </Container>
  );
};

export default SpLayout;
