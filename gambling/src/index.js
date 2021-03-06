import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";
import App from "./App";
import axios from "axios";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
axios.defaults.baseURL = "https://roulette-react.herokuapp.com/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
const store = createStore(reducer, composeEnhancers());
//render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
