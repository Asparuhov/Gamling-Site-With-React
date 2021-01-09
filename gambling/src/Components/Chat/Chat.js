import React from "react";
import classes from "./Chat.module.css";
const Chat = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.header}>
        <h2>Messages</h2>
        <a href="/" title="Add Friend to this chat">
        </a>
      </div>
      <div className={classes.chatbox}>
        <div className={classes.entermessage}>
          <input type="text" placeholder="Enter your message.." />
          <a href="/" class={classes.send}>
            Send
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chat;
