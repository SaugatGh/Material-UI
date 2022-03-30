import React from "react";
import { Button } from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    background: theme.palette.primary.main,
  },
}));
const Index = () => {
  const classes = useStyles();
  return (
    <>
      <Button vairant="contained" size="large" className={classes.button}>
        Material Ui
      </Button> 
    </>
  );
};

export default Index;
