import classes from "../Shop/Shop.module.css";
import React, { useState, useEffect } from "react";
import ItemInventory from "./ItemInventory";
import { connect } from "react-redux";
import PaypalLogo from "../../assets/paypal.png";
const Inventory = (props) => {
    return (
        <ul style={{flexWrap: 'wrap', justifyContent: 'center'}}>
      {props.inventory.map((set) => {
        return (
          <ItemInventory
            url={PaypalLogo}
            value={set.value}
            type="PayPal"
            points={set.value * 100}
            clicked={() =>
              props.addInventory({ value: set[0], type: "PayPal" })
            }
            key={set.value + "PayPal"}
          />
        );
      })}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    inventory: state.inventory,
    options: state.options,
  };
};
export default connect(mapStateToProps)(Inventory);
