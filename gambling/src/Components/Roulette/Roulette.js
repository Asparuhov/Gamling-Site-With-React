import classes from "./Roulette.module.css";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
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
  const [curretInputValue, setCurrentInputValue] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [finalResult, setFinalResult] = useState({
    number: null,
    color: null,
  });
  useEffect(() => {
    if (progress <= 0) {
      setProgress(100);
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
    setProgressState(false);
  };
  //Spin Cycle
  useEffect(() => {
    console.log(props.bets);
  }, [props.bets]);
  //Start the auto spinnin 10 seconds after reset
  useEffect(handleSpinClick, []);
  //Check for color matches and get of balance
  let progressMessage;
  if (!isAuthenticated) {
    progressMessage = (
      <h1 style={{ color: "white", marginTop: "5px", fontSize: "30px" }}>
        Sign in to play!
      </h1>
    );
  } else if (isAuthenticated && progressState) {
    progressMessage = (
      <h1 style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>
        Place your bets
      </h1>
    );
  } else {
    progressMessage = (
      <h1 style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>
        Good luck !!!
      </h1>
    );
  }

  return (
    <div className={classes.Roulette}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setProgress(100);
          setMustSpin(false);
          props.configureBalance(finalResult.color);
          props.resetBets();
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
          onChange={(e) => setCurrentInputValue(e.target.value)}
        ></input>
      </div>
      <div style={{ textShadow: "white 0px 0px 10px" }}>
        <strong>Balance: {props.balance}</strong>
      </div>
      <button
        className={classes.Button2}
        onClick={() =>
          props.configureBets(
            "black",
            Number(curretInputValue),
            isAuthenticated
          )
        }
        disabled={!progressState || !isAuthenticated ? true : false}
      >
        Black {props.bets.black ? props.bets.black : null}
      </button>
      <button
        className={classes.Button1}
        onClick={() =>
          props.configureBets("red", Number(curretInputValue), isAuthenticated)
        }
        disabled={!progressState || !isAuthenticated ? true : false}
      >
        Red {props.bets.red ? props.bets.red : null}
      </button>
      <button
        className={classes.Button3}
        onClick={() =>
          props.configureBets(
            "green",
            Number(curretInputValue),
            isAuthenticated
          )
        }
        disabled={!progressState || !isAuthenticated ? true : false}
      >
        Green {props.bets.green ? props.bets.green : null}
      </button>
      <Line percent={progress} strokeWidth="4" strokeColor="#D3D3D3" />
      {progressMessage}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    bets: state.bets,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    addBalance: (amount) => dispatch({ type: "ADDBALANCE", amount: amount }),
    removeBalance: (amount) =>
      dispatch({ type: "REMOVEBALANCE", amount: amount }),
    configureBets: (color, amount, isAuth) =>
      dispatch({
        type: "CONFIGUREBETS",
        color: color,
        amount: amount,
        auth: isAuth,
      }),
    resetBets: () => dispatch({ type: "RESETBETS" }),
    configureBalance: (color) =>
      dispatch({ type: "CONFIGUREBALANCE", color: color }),
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Roulette);
