import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji'

const ChatFooter = ({ socket }) => {

  const [message, setMessage] = useState('');

  

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  };
  
  // const [ text, setText ] = useState('')
  
      function handleOnEnter (text) {
        console.log('enter', text)
      }
      

 
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
      <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
          className="message"
        />
         {/* <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /> */}
           
        <button className="sendBtn" >
          SEND 
         </button>
      </form>
    </div>
  );
};

export default ChatFooter;