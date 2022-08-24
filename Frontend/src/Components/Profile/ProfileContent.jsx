import React from "react";
import styles from "./ProfileContent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({});

function ProfileContent() {


  const classes = useStyles();

  return (
    <div className={styles.Container}>
      <div className={styles.Container_Left}>
        <div></div>
        <Button className={classes.RightButton}>My profile</Button>
        <Button
          className={classes.RightButton}
        >
          Log out
        </Button>
        <div></div>
      </div>
      <div className={styles.Container_Right}>
        <div className={styles.Container_Right_Top}>
          <h5>Username : {} </h5>
          <h5>Email : {} </h5>
        </div>

        <div className={styles.Container_Right_Mid}>
          <h4>Cars Rented </h4>
          <div className={styles.Container_Right_Bottom_List}>
          </div>
        </div>

        <div className={styles.Container_Right_Bottom}>
          <h4>Cars Subscribed </h4>

          <div className={styles.Container_Right_Bottom_List}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
