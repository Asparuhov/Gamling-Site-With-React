import React from 'react';
import classes from './SideDrawer.module.css';

const SideDrawer = props => (
    <nav className={classes.SideDrawer}>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Shop</a></li>
            <li><a href='/'>Inventory</a></li>
        </ul>
    </nav>
);

export default SideDrawer;