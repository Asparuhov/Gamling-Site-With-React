import React,{useEffect} from 'react';
import Roulette from '../../Components/Roulette/Roulette';
import Chat from '../../Components/Chat/Chat';
import classes from './Main.module.css';
const Main = props => {
    return (
        <div className={classes.Main}>
            <div><Chat /></div>
            <div> <Roulette /> </div>
            
        </div>
    )
}

export default Main;