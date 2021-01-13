import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Main from "./Containers/MainPage/Main";
import classes from "./App.module.css";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/BackDrop/Backdrop";
import Shop from "./Containers/Shop/Shop";
import { connect } from "react-redux";
import axios from "axios";
import Inventory from "./Containers/Inventory/Inventory";
import Wheel50xPage from "./Containers/Wheel50x/Wheel50xPage";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
function App(props) {
  let [Show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get("user")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div style={{ height: "100%" }}>
        {Show ? (
          <div>
            <SideDrawer />
            <Backdrop clicked={() => setShow((prev) => !prev)} />
          </div>
        ) : null}
        <div className={classes.App}>
          <header>
            <nav>
              <button
                className={classes.ThreeLines}
                onClick={() => setShow((prev) => !prev)}
              >
                <li>
                  {props.isAuthenticated ? (
                    <button className={classes.Buttons}>Logout</button>
                  ) : (
                    <Link to="/login" className={classes.Buttons}>
                      Login
                    </Link>
                  )}
                </li>
                <div className={classes.Line}></div>
                <div className={classes.Line}></div>
                <div className={classes.Line}></div>
              </button>
              {true ? (
                <li className={classes.Balance}>
                  Balance: {props.balance} <p>logged as: {"krismata"}</p>
                </li>
              ) : null}
              <div className={classes.Spacer} />
              <ul>
                <li>
                  <Link className={classes.Link} to="/">
                    Roulette
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} to="/roulette-50x">
                    Wheel50X
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className={classes.Link} to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li>
                  {props.isAuthenticated ? (
                    <button className={classes.Buttons}>Logout</button>
                  ) : (
                    <Link to="/login" className={classes.Buttons}>
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/roulette-50x" exact component={Wheel50xPage} />
          <Route path="/" exact component={Main} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
