import React, { useEffect, useState, useRef } from 'react';
// import { io } from 'socket.io-client';
import ChatBar from './chatbar';
import ChatBody from './chatbody';
import ChatFooter from './chatfooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState(''); 
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });
  
    // Cleanup on component unmount
    return () => {
      socket.off('messageResponse'); // Remove the event listener
    };
  }, [socket]);

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody
            messages={messages}
            typingStatus={typingStatus}
            lastMessageRef={lastMessageRef}
          />
          <ChatFooter socket={socket} />
        </div>
   </div>
  );
};

export default ChatPage;