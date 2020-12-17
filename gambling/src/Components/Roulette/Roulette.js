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
  const [finalResult, setFinalResult] = useState({
        number: null,
        color: null
  })
    const [balance, setBalance] = useState(3000);
    const [placeBet, setPlaceBet] = useState({
        betSize: null,
        betPlaced: false
    })
  const [payBets, setPayBets] = useState(false);
    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true);
        setFinalResult({...finalResult, number: data[newPrizeNumber].option, color: data[newPrizeNumber].style.backgroundColor});
    }
    
    const updateBet = e => {
        const newValue = Number(e.target.value);
        setPlaceBet({...placeBet, betSize: newValue});
        console.log(placeBet);
    }
    
  return (
      <div className={classes.Roulette}>
          {console.log(finalResult)}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
 
        onStopSpinning={() => {
            setMustSpin(false)
            setPayBets(!payBets);
            console.log(finalResult);
        }}
          />
         <div className={classes.D1}> <p><strong>Bet amount:</strong></p><input type='number' onChange={updateBet} defaultValue={placeBet.betSize}></input></div>
          <div><strong>Balance: {balance}</strong></div>
          <button className={classes.Button2}>Black</button> <button className={classes.Button1}>Red</button>
      <button onClick={handleSpinClick} className={classes.Button}>SPIN</button>
     </div>
  )
    }


export default Roulette;


