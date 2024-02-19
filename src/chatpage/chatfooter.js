import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji'

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('email')) {
      socket.emit('message',
       {
        text: message,
        email: localStorage.getItem('email'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      }
      );
    }
    setMessage('');
  };
  
  const handleOnEnter = (text)=> {
        console.log('enter', text)
  }
      
  return (
    <div className="chat__footer">
      <form className="form" onClick={handleSendMessage}>
       <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
          className="message"
        />
         
           
        <button className="sendBtn"  >
          SEND 
         </button>
      </form>
    </div>
  );
};

export default ChatFooter;