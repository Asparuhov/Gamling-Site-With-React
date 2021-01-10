import React from "react";
import classes from "./Message.module.css";
export default function Message(props) {
  return (
    <div>
      <div className={classes.message}>
        <p className={classes.current}>@{props.user}</p>
        <p className={classes.main}>{props.message}</p>
      </div>
    </div>
  );
}
