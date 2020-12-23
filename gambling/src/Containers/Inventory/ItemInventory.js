import React from 'react';
import classes from '../Shop/Item.module.css';
const ItemInventory = props => (
    <div className={classes.Item}>
        <img src={props.url} alt={props.alt}/>
        <p className={classes.Price}>{props.value}$  {props.type}</p>
        <p className={classes.Points}>Purchased!</p>
        <button onClick={props.clicked}>Checkout</button>
        <button className={classes.Inventory}onClick={props.sold}>Return for: {props.points}p</button>
    </div>
);

export default ItemInventory;