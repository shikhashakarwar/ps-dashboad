import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {  AppBar, Toolbar } from '@material-ui/core';
import logo from "../../../img/bidgely.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      height: 50.54 
    }
  }),
);

export default function DashboardHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} alt="dashboard Logo"/> 
        </Toolbar>
      </AppBar>
    </div>
  );
}