import React from 'react';
import classes from './SideDrawer.module.css';
const SideDrawer = props => (
    <nav className={classes.SideDrawer}>
        <ul>
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Inventory</a></li>
        </ul>
    </nav>
);

export default SideDrawer;