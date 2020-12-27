import classes from "./Wheel50x.module.css";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const Wheel50x = (props) => {
  const { isAuthenticated } = useAuth0();
  const data = [
    { option: "0", style: { backgroundColor: "yellow", textColor: "white" } },
    { option: "1", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "2", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "3", style: { backgroundColor: "red", textColor: "white" } },
    { option: "4", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "5", style: { backgroundColor: "red", textColor: "white" } },
    { option: "6", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "7", style: { backgroundColor: "red", textColor: "white" } },
    { option: "8", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "9", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "10", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "11", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "12", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "13", style: { backgroundColor: "red", textColor: "white" } },
    { option: "14", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "15", style: { backgroundColor: "red", textColor: "white" } },
    { option: "16", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "17", style: { backgroundColor: "red", textColor: "white" } },
    { option: "18", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "19", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "20", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "21", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "22", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "23", style: { backgroundColor: "red", textColor: "white" } },
    { option: "24", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "25", style: { backgroundColor: "red", textColor: "white" } },
    { option: "26", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "27", style: { backgroundColor: "red", textColor: "white" } },
    { option: "28", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "29", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "30", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "31", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "32", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "33", style: { backgroundColor: "red", textColor: "white" } },
    { option: "34", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "35", style: { backgroundColor: "red", textColor: "white" } },
    { option: "36", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "37", style: { backgroundColor: "red", textColor: "white" } },
    { option: "38", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "39", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "40", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "41", style: { backgroundColor: "cyan", textColor: "white" } },
    { option: "42", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "43", style: { backgroundColor: "red", textColor: "white" } },
    { option: "44", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "45", style: { backgroundColor: "red", textColor: "white" } },
    { option: "46", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "47", style: { backgroundColor: "red", textColor: "white" } },
    { option: "48", style: { backgroundColor: "grey", textColor: "white" } },
    { option: "49", style: { backgroundColor: "cyan", textColor: "white" } },
  ];
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [finalResult, setFinalResult] = useState({
    number: null,
    color: null,
  });
  const [placeBet, setPlaceBet] = useState({
    totalBet: null,
    betSizeRed: null,
    betSizeGrey: null,
    betSizeBlue: null,
    betSizeGold: null,
    betPlaced: false,
  });
  const [payBets, setPayBets] = useState(false);
  const resetBets = {
    totalBet: null,
    betSizeRed: null,
    betSizeGrey: null,
    betSizeBlue: null,
    betSizeGold: null,
    betPlaced: false,
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setFinalResult({
      ...finalResult,
      number: data[newPrizeNumber].option,
      color: data[newPrizeNumber].style.backgroundColor,
    });
    setPlaceBet({ ...placeBet, betPlaced: true });
  };
  const updateBet = (e) => {
    const newValue = Number(e.target.value);
    setPlaceBet({ ...placeBet, totalBet: newValue });
  };
  const colorBet = (color) => {
    if (props.balance > 0 && isAuthenticated) {
      if (color === "red") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeRed: placeBet.betSizeRed + bet });
        props.removeBalance(bet);
      }
      if (color === "grey") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeGrey: placeBet.betSizeGrey + bet });
        props.removeBalance(bet);
      }
      if (color === "blue") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeBlue: placeBet.betSizeBlue + bet });
        props.removeBalance(bet);
      }
      if (color === "gold") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeGold: placeBet.betSizeGold + bet });
        props.removeBalance(bet);
      }
    } else if (isAuthenticated === false) {
      alert("Please log in to place bets");
    } else {
      alert("Not enough balance");
    }
  };
  return (
    <div className={classes.Roulette}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setPayBets(!payBets);
          if (props.balance <= 0) {
            props.removeBalance(0);
          }
          if (placeBet.betPlaced) {
            if (placeBet.betSizeBlack && finalResult.color === "grey") {
              props.addBalance(placeBet.betSizeBlack * 2);
            }
            if (placeBet.betSizeRed && finalResult.color === "red") {
              props.addBalance(placeBet.betSizeRed * 3);
            }
            if (placeBet.betSizeblue && finalResult.color === "blue") {
              props.addBalance(placeBet.betSizeBlue * 5);
            }
            if (placeBet.betSizeGold && finalResult.color === "gold") {
              props.addBalance(placeBet.betSizeGold * 50);
            }
          }
          setPlaceBet({ ...resetBets });
        }}
        fontSize={0}
        textDistance={80}
        innerRadius={60}
        outerBorderColor="black"
        innerBorderColor="black"
        innerBorderWidth={20}
        outerBorderWidth={7}
        radiusLineWidth={2}
      />
      <div className={classes.D1}>
        {" "}
        <p>
          <strong>Bet amount:</strong>
        </p>
        <input
          type="number"
          onChange={updateBet}
          defaultValue={placeBet.betSize}
        ></input>
      </div>
      <div style={{ textShadow: "white 0px 0px 10px" }}>
        <strong>Balance: {props.balance}</strong>
      </div>
      <button className={classes.Button2} onClick={() => colorBet("black")}>
        2x {placeBet.betSizeGrey ? placeBet.betSizeGrey : null}
      </button>
      <button className={classes.Button1} onClick={() => colorBet("red")}>
        3x {placeBet.betSizeRed ? placeBet.betSizeRed : null}
      </button>
      <button className={classes.Button3} onClick={() => colorBet("blue")}>
        5x {placeBet.betSizeBlue ? placeBet.betSizeBlue : null}
      </button>
      <button className={classes.Button4} onClick={() => colorBet("gold")}>
        50x {placeBet.betSizeGold ? placeBet.betSizeGold : null}
      </button>
      <button
        onClick={handleSpinClick}
        className={classes.Button}
        disabled={
          !placeBet.betSizeGrey &&
          !placeBet.betSizeRed &&
          !placeBet.betSizeBlue &&
          !placeBet.betSizeGold
        }
      >
        SPIN
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    addBalance: (amount) => dispatch({ type: "ADDBALANCE", amount: amount }),
    removeBalance: (amount) =>
      dispatch({ type: "REMOVEBALANCE", amount: amount }),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Wheel50x);
