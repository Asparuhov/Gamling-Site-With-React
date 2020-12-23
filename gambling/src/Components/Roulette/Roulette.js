import classes from './Roulette.module.css';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import {connect} from 'react-redux';
import {useAuth0} from '@auth0/auth0-react';
const Roulette = props => {
    const {isAuthenticated} = useAuth0();
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
  const [placeBet, setPlaceBet] = useState({
        totalBet: null,
        betSizeRed: null,
        betSizeBlack: null,
        betSizeGreen: null,
        betPlaced: false
  })
  const [payBets, setPayBets] = useState(false);
  const resetBets = {
        totalBet: null,
        betSizeRed: null,
        betSizeBlack: null,
        betSizeGreen: null,
        betPlaced: false
    }

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true);
        setFinalResult({...finalResult, number: data[newPrizeNumber].option, color: data[newPrizeNumber].style.backgroundColor});
        setPlaceBet({...placeBet, betPlaced: true});
    }
    const updateBet = e => {
        const newValue = Number(e.target.value);
        setPlaceBet({...placeBet, totalBet: newValue});
    }
    const colorBet = (color) => {
        if (props.balance > 0 && isAuthenticated) {
            if (color === 'red') {
                let bet = placeBet.totalBet;
                setPlaceBet({...placeBet, betSizeRed: placeBet.betSizeRed + bet});
                props.removeBalance(bet);
            }
            if (color === 'black') {
                let bet = placeBet.totalBet;
                setPlaceBet({...placeBet, betSizeBlack: placeBet.betSizeBlack + bet});
                props.removeBalance(bet);
            }
            if (color === 'green') {
                let bet = placeBet.totalBet;
                setPlaceBet({...placeBet, betSizeGreen: placeBet.betSizeGreen + bet});
                props.removeBalance(bet);
            }
        }
        else if (isAuthenticated === false) {
            alert('Please log in to place bets')
        }
        else{alert('Not enough balance')}
    }
  return (
      <div className={classes.Roulette}>
          <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                  setMustSpin(false)
                  setPayBets(!payBets);
                  if (props.balance <= 0) {
                      props.removeBalance(0);
                  }
                  if (placeBet.betPlaced) {
                      if (placeBet.betSizeBlack && finalResult.color === 'black') {
                          props.addBalance(placeBet.betSizeBlack * 2);
                      }
                      if (placeBet.betSizeRed && finalResult.color === 'red') {
                          props.addBalance(placeBet.betSizeRed * 2);
                      }
                      if (placeBet.betSizeGreen && finalResult.color === 'green') {
                          props.addBalance(placeBet.betSizeGreen * 14);
                      }
                  }
                  setPlaceBet({...resetBets})
              }}
          />
         <div className={classes.D1}> <p><strong>Bet amount:</strong></p><input type='number' onChange={updateBet} defaultValue={placeBet.betSize}></input></div>
          <div style={{textShadow: 'white 0px 0px 10px'}}><strong>Balance: {props.balance}</strong></div>
          <button className={classes.Button2} onClick={() => colorBet('black')}>Black {placeBet.betSizeBlack ? placeBet.betSizeBlack :null}</button>
          <button className={classes.Button1} onClick={() => colorBet('red')}>Red {placeBet.betSizeRed ? placeBet.betSizeRed :null}</button>
          <button className={classes.Button3} onClick={() => colorBet('green')}>Green {placeBet.betSizeGreen ? placeBet.betSizeGreen :null}</button>
          <button onClick={handleSpinClick} className={classes.Button} disabled={!placeBet.betSizeBlack && !placeBet.betSizeRed && !placeBet.betSizeGreen}>SPIN</button>
     </div>
  )}

const mapStateToProps = state => {
    return {
        balance: state.balance
    }
}
const mapDispatchToState = dispatch => {
    return {
        addBalance: (amount) => dispatch({type: 'ADDBALANCE', amount: amount}),
        removeBalance: (amount) => dispatch({type: 'REMOVEBALANCE', amount: amount})
    }
}
export default connect(mapStateToProps, mapDispatchToState)(Roulette);


