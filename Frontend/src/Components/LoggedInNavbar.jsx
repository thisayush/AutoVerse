import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(9),
    flexGrow: 1,
    justifyContent: "left",
  },
  text: {
    marginRight: theme.spacing(4),
  },
  appbar: {
    height: "60px",
  },
  loginSignup: {
    marginRight: theme.spacing(11),
  },
}));

const styles = {
  fontSize: "14px",
  weight: 500,
  lineHeight: "28px",
};

export default function LoggedInNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.logo}>
            <img
              //   width="100px"
              src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
            />
          </IconButton>
          <Typography className={classes.text}>FAQ</Typography>
          <IconButton>
            <img src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg" />
          </IconButton>
          <Typography
            style={styles}
            variant="subtitle1"
            className={classes.loginSignup}
          >
            Login or Signup
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
