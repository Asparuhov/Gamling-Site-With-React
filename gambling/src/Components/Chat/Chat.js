import React, { useState } from "react";
import classes from "./Chat.module.css";
import Message from "./Message";
const Chat = (props) => {
  let [messages, setMessages] = useState({
    currentUser: "",
    message: "",
    date: "",
  });
  const addMessage = () => {};
  return (
    <div className={classes.Container}>
      <div className={classes.header}>
        <h2>Messages</h2>
        <a href="/" title="Add Friend to this chat"></a>
      </div>
      <div className={classes.chatbox}>
        <Message
          user="krismata"
          message="kvo pravish ti be"
          date="22 january"
        />
        <div className={classes.entermessage}>
          <input type="text" placeholder="Enter your message.." />
          <button class={classes.send} onClick={() => addMessage()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
