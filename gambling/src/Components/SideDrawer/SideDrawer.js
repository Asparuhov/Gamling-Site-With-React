import React from 'react';
import classes from './SideDrawer.module.css';
import {Link} from 'react-router-dom';
const SideDrawer = props => (
    <nav className={classes.SideDrawer}>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/shop'>Shop</a></li>
            <li><a href='/inventory'>Inventory</a></li>
        </ul>
    </nav>
);

export default SideDrawer;