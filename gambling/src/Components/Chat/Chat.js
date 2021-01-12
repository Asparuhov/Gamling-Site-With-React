import React, { useState } from "react";
import classes from "./Chat.module.css";
import Message from "./Message";
import { useAuth0 } from "@auth0/auth0-react";
const Chat = (props) => {
  const { user, isAuthenticated } = useAuth0();
  let [currentMessage, setCurrentMessage] = useState("");
  let [messages, setMessages] = useState([]);
  const addMessage = () => {
    setMessages((oldArray) => [
      ...oldArray,
      {
        currentUser: user.nickname,
        message: currentMessage,
      },
    ]);
    setCurrentMessage("");
  };
  return (
    <div className={classes.Container}>
      <div className={classes.header}>
        <h1>Messages</h1>
      </div>

      <div className={classes.content}>
        {messages.map((message) => {
          if (message.message) {
            return (
              <Message user={message.currentUser} message={message.message} />
            );
          }
        })}
      </div>
      <div className={classes.entermessage}>
        <input
          type="text"
          placeholder="Enter your message.."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          value={currentMessage}
        />
        <button
          disabled={!isAuthenticated}
          class={classes.send}
          onClick={() => addMessage()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
