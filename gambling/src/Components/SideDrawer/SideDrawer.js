import React from "react";
import classes from "./SideDrawer.module.css";
import { Link } from "react-router-dom";
const SideDrawer = (props) => (
  <nav className={classes.SideDrawer}>
    <ul>
      <li>
        <Link className={classes.Link} to="/">
          Roulette
        </Link>
      </li>
      <li>
        <Link className={classes.Link} to="/roulette-50x">
          Wheel50X
        </Link>
      </li>
      <li>
        <Link className={classes.Link} to="/shop">
          Shop
        </Link>
      </li>
      <li>
        <Link className={classes.Link} to="/inventory">
          Inventory
        </Link>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
