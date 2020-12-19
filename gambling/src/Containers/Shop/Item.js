import React from 'react';
import classes from './Item.module.css';
const Item = props => (
    <div className={classes.Item}>
        <img src={props.url} alt={props.alt}/>
        <p className={classes.Price}>{props.value}$  {props.type}</p>
        <p className={classes.Points}>Buy for: {props.points}p</p>
        <button>Checkout</button>
    </div>
);

export default Item;