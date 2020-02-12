import React from "react";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: "40px 0 50px 0",
        
      },
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      width: "60px",
      height: "60px"
    },
    userName: {
        display: "flex",
        height: "60px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }
  }));
  

function UserProfile (props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar className={classes.purple}>S</Avatar>
            <Typography className={classes.userName}> User Name</Typography>
        </div>
    );
}

export default UserProfile;