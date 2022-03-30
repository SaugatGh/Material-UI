import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core";
import {
  Avatar,
  Badge,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import Search from "@material-ui/icons/Search";
import Cancel from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    //  up means if my screen is bigger than
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    // down means if my screen is smaller than ...
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "50%",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },

  badge: {
    marginRight: theme.spacing(2),
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="initial" className={classes.logoLg}>
            Brand Name
          </Typography>
          <Typography variant="h6" color="initial" className={classes.logoSm}>
            BRAND
          </Typography>

          {/*  Search */}
          <div className={classes.search}>
            <SearchIcon />
            <InputBase placeholder="Search..." className={classes.input} />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          {/* Search Ends */}

          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              {/*  badgeContent show the number of notification icon in mailBox */}
              <Mail />
            </Badge>
            <Badge badgeContent={3} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar alt="Remy sharp" scr="" />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
