import React,{useEffect} from 'react';

import Chat from '../../Components/Chat/Chat';
import classes from './Wheel50x.module.css';
import Wheel50x from '../../Components/Wheel50x/Wheel50x';
const Wheel50xPage = props => {
    return (
        <div className={classes.Main}>
            <div><Chat /></div>
            <div> <Wheel50x/> </div>
        </div>
    )
}

export default Wheel50xPage ;