import classes from './Roulette.module.css';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'


const Roulette = props => {
const data = [
    {option: '0', style: {backgroundColor: 'green', textColor: 'white'}},
    {option: '1', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '2', style: {backgroundColor: 'red', textColor: 'white'}},
    {option: '3', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '4', style: {backgroundColor: 'red', textColor: 'white'}},
    {option: '5', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '6', style: {backgroundColor: 'red', textColor: 'white'}}, 
    {option: '7', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '8', style: {backgroundColor: 'red', textColor: 'white'}},
    {option: '9', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '10', style: {backgroundColor: 'red', textColor: 'white'}},
    {option: '11', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '12', style: {backgroundColor: 'red', textColor: 'white'}},
    {option: '13', style: {backgroundColor: 'black', textColor: 'white'}},
    {option: '14', style: { backgroundColor: 'red', textColor: 'white'}}
]
 
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
    
    let finalNum = null;
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        finalNum = newPrizeNumber;
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true);
    }
    
   console.log(finalNum);
  return (
    <div className={classes.Roulette}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
 
        onStopSpinning={() => {
          setMustSpin(false)
        }}
          />
      <button onClick={handleSpinClick}>SPIN</button>
     </div>
  )
    }


export default Roulette;


