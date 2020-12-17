import React from 'react';
import classes from './Main.module.css';
import Roulette from '../../Components/Roulette/Roulette';

const Main = props => {
    return (
        <div>
            <div>Chat</div>
            <div><Roulette {...props} /></div>
            <p>{props.prizeNumber}</p>
        </div>
    )
}

export default Main;