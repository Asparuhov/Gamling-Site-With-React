import classes from "./Roulette.module.css";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Line } from "rc-progress";
const Roulette = (props) => {
  const { isAuthenticated } = useAuth0();
  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "white" } },
    { option: "1", style: { backgroundColor: "black", textColor: "white" } },
    { option: "2", style: { backgroundColor: "red", textColor: "white" } },
    { option: "3", style: { backgroundColor: "black", textColor: "white" } },
    { option: "4", style: { backgroundColor: "red", textColor: "white" } },
    { option: "5", style: { backgroundColor: "black", textColor: "white" } },
    { option: "6", style: { backgroundColor: "red", textColor: "white" } },
    { option: "7", style: { backgroundColor: "black", textColor: "white" } },
    { option: "8", style: { backgroundColor: "red", textColor: "white" } },
    { option: "9", style: { backgroundColor: "black", textColor: "white" } },
    { option: "10", style: { backgroundColor: "red", textColor: "white" } },
    { option: "11", style: { backgroundColor: "black", textColor: "white" } },
    { option: "12", style: { backgroundColor: "red", textColor: "white" } },
    { option: "13", style: { backgroundColor: "black", textColor: "white" } },
    { option: "14", style: { backgroundColor: "red", textColor: "white" } },
  ];
  const [progress, setProgress] = useState(100);
  const [progressState, setProgressState] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [timer, setTimer] = useState(10);
  const [finalResult, setFinalResult] = useState({
    number: null,
    color: null,
  });
  const [placeBet, setPlaceBet] = useState({
    totalBet: null,
    betSizeRed: null,
    betSizeBlack: null,
    betSizeGreen: null,
    betPlaced: false,
  });
  const [payBets, setPayBets] = useState(false);
  const resetBets = {
    totalBet: null,
    betSizeRed: null,
    betSizeBlack: null,
    betSizeGreen: null,
    betPlaced: false,
  };

  useEffect(() => {
    if (progress <= 0) {
      setProgress(100);
      setTimer(10);
    }
    let interval;
    if (progressState) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 1);
      }, 96);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progressState, progress]);

  useEffect(() => {
    console.log(progress);
  }, [progress]);
  //Handle Spin Click
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
    setProgressState(false);
  };
  //Spin Cycle
  //Update bet
  const updateBet = (e) => {
    const newValue = Number(e.target.value);
    setPlaceBet({ ...placeBet, totalBet: newValue });
  };
  //Start the auto spinnin 10 seconds after reset
  useEffect(handleSpinClick, []);
  //Check for color matches and get of balance
  const colorBet = (color) => {
    if (props.balance > 0 && isAuthenticated) {
      if (color === "red") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeRed: placeBet.betSizeRed + bet });
        props.removeBalance(bet);
      }
      if (color === "black") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeBlack: placeBet.betSizeBlack + bet });
        props.removeBalance(bet);
      }
      if (color === "green") {
        let bet = placeBet.totalBet;
        setPlaceBet({ ...placeBet, betSizeGreen: placeBet.betSizeGreen + bet });
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
          setProgress(100);
          setMustSpin(false);
          setPayBets(!payBets);
          if (props.balance <= 0) {
            props.removeBalance(0);
          }
          if (placeBet.betPlaced) {
            if (placeBet.betSizeBlack && finalResult.color === "black") {
              props.addBalance(placeBet.betSizeBlack * 2);
            }
            if (placeBet.betSizeRed && finalResult.color === "red") {
              props.addBalance(placeBet.betSizeRed * 2);
            }
            if (placeBet.betSizeGreen && finalResult.color === "green") {
              props.addBalance(placeBet.betSizeGreen * 14);
            }
          }
          setPlaceBet({ ...resetBets });
          setProgressState(true);
          setTimeout(handleSpinClick, 10000);
        }}
        radiusLineColor="white"
        radiusLineWidth={5}
        outerBorderColor="black"
        outerBorderWidth={5}
        innerBorderColor="black"
        innerBorderWidth={25}
        innerRadius={5}
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
        Black {placeBet.betSizeBlack ? placeBet.betSizeBlack : null}
      </button>
      <button className={classes.Button1} onClick={() => colorBet("red")}>
        Red {placeBet.betSizeRed ? placeBet.betSizeRed : null}
      </button>
      <button className={classes.Button3} onClick={() => colorBet("green")}>
        Green {placeBet.betSizeGreen ? placeBet.betSizeGreen : null}
      </button>
      <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />
      <h1 style={{ color: "white", marginTop: "5px" }}>
        {progressState ? `Place your bets` : "Good Luck!!!"}
      </h1>
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
export default connect(mapStateToProps, mapDispatchToState)(Roulette);
