import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

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
    },
    link: {
        cursor: 'pointer',
        color: '#f3f3f3',
        textDecoration: 'none'
    },
    addedItems: {
        border: 'red solid 1px',
        borderRadius: '10px',
        fontSize: '13px',
        paddingLeft: '7px',
        paddingRight: '7px',
        backgroundColor: 'red',
        position: 'relative',
        right: '12px',
        bottom: '15px'
    }
}));

const Navbar = () => {
    const { addedItems = [] } = useSelector(state => state.cart);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                       <NavLink className={classes.link} to='/'>Shopping</NavLink>
                    </Typography>
                    <Button className={classes.deleteButton}>
                       <NavLink to='/cart'><ShoppingCartOutlinedIcon className={classes.deleteButton}/></NavLink>
                       <span className={classes.addedItems}>{addedItems.length}</span>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
