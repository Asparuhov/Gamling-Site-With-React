import classes from './Backdrop.module.css';
import React from 'react';
const Backdrop = props => (
    <div className={classes.Backdrop} onClick={props.clicked}/>
)

export default Backdrop