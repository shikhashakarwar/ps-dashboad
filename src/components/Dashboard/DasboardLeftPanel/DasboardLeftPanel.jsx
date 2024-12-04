
import React from "react";
import {Drawer, Divider, List, ListItem, ListItemText, Button, makeStyles, withStyles }  from "@material-ui/core";
import classNames from "classnames";

import UserProfile from "./UserProfile/UserProfile";
import "./DasboardLeftPanel.scss";

const useStyles = makeStyles(theme => (
    {
        drawer: {
            width: "255px",
            flexShrink: 0,
        },
        drawerPaper: {
            width: "255px",
            padding: "0 20px"
        },
        toolBar: theme.mixins.toolbar,
        content:{
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3)
        },
        regionButton: {
            margin: "8px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "14px",
            width: "60px",
            height: "40px",
            backgroundColor: "#9FAECC",
            color: "#ffffff",
            padding: "0",
            "&:hover": {
                backgroundColor: "#334D6E"
            },
            "&:first-child": {
                margin: 0
            },
            "&:last-child": {
                margin: 0
            }
        },
        selectedRegion: {
            backgroundColor: "#334D6E"
        },
        menusContainer: {
            margin: "70px 0"
        },
        menu: {
            
            
            marginBottom: "10px",
            textAlign: "center",
            borderRadius: "8px",
            fontWeight: "600",
            "&:hover": {
                backgroundColor: "#334D6E",
                color: "#fff"
            },
            color: "#000"
        },
        selectedMenu: {
            backgroundColor: "#334D6E",
            color: "#fff"
        }
    }
));

function DashboardLeftPanel(props) {

    const classes = useStyles();

    return (
        <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            <div>
                <Divider/>
                <UserProfile/>
                <Divider/>
                <List>
                    { props.regions.map((region, index) => {
                        return <Button key={index} className={classNames(classes.regionButton, {[classes.selectedRegion]: region.value == props.selectedRegion})} onClick={() => props.updateRegion(region.value)}>{region.text}</Button>
                    })}
                </List>
                <Divider variant="middle"/>
                <List className={classes.menusContainer}>
                    {props.menuItems.map((menu, index) => (
                    <ListItem button key={menu} className={classNames(classes.menu, {[classes.selectedMenu]: menu == props.selectedMenu})} onClick={()=> props.updateMenuItem(menu)}>
                        <ListItemText primary={menu} />
                    </ListItem>
                ))}
            </List>
            </div>
        </Drawer>
    ) 
}

export default DashboardLeftPanel;