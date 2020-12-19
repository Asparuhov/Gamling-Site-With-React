import React from 'react';
import './Chat.css';
const Chat = props => {
    return (
        <div class="container">
  <div class="header">
    <h2>Messages</h2>
    <a href="#" title="Add Friend to this chat">+</a>
  </div>
  <div class="chat-box">
    <div class="enter-message">
      <input type="text" placeholder="Enter your message.."/>
      <a href="#" class="send">Send</a>
    </div>
  </div>
</div>
    )
}

export default Chat;