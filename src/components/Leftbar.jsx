import React, { useState } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import {
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddinTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    position: "Sticky",
    top: 0,
    //  Position and top :0 make the left bar stay at its position when we scroll down to bottom or at the top.
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid white",
    },
  },
  items: {
    display: "flex",
    alginItem: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      cursor: "Pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.items}>
          <Home className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Homepage
          </Typography>
        </div>
        <div className={classes.items}>
          <Person className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Friends
          </Typography>
        </div>
        <div className={classes.items}>
          <List className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            List
          </Typography>
        </div>
        <div className={classes.items}>
          <PhotoCamera className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.items}>
          <PlayCircleOutline className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Videos
          </Typography>
        </div>
        <div className={classes.items}>
          <Home className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Homepage
          </Typography>
        </div>
        <div className={classes.items}>
          <TabletMac className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Apps
          </Typography>
        </div>
        <div className={classes.items}>
          <Bookmark className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Collections
          </Typography>
        </div>
        <div className={classes.items}>
          <Storefront className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Market Place
          </Typography>
        </div>
        <div className={classes.items}>
          <Settings className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Settings
          </Typography>
        </div>
        <div className={classes.items}>
          <ExitToApp className={classes.icon} />
          <Typography color="initial" className={classes.text}>
            Logout
          </Typography>
        </div>
      </Container>
    </>
  );
};
export default Leftbar;
