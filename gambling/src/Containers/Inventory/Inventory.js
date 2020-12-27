import classes from "../Shop/Shop.module.css";
import React, { useState, useEffect } from "react";
import ItemInventory from "./ItemInventory";
import { connect } from "react-redux";
import PaypalLogo from "../../assets/paypal.png";
const Inventory = (props) => {
  return (
    <ul style={{ flexWrap: "wrap", justifyContent: "center" }}>
      {props.inventory
        ? props.inventory.map((set, index) => {
            return (
              <ItemInventory
                url={PaypalLogo}
                value={set.value}
                type="PayPal"
                points={set.value * 100}
                bought={() => props.bought(index)}
                returned={() => props.returned(set.value * 100, index)}
                key={set.value + "PayPal"}
              />
            );
          })
        : null}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    inventory: state.inventory,
    options: state.options,
  };
};
const toActions = (dispatch) => {
  return {
    bought: (index) => dispatch({ type: "BOUGHT", index: index }),
    returned: (value, index) =>
      dispatch({ type: "RETURNED", value: value, index: index }),
  };
};

export default connect(mapStateToProps, toActions)(Inventory);
