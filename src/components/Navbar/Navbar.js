import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    deleteButton: {
        fontSize: '1.5em',
        color: '#f3f3f3'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        Shopping
                    </Typography>
                    <Button className={classes.deleteButton}>
                        <Delete className={classes.deleteButton}/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
