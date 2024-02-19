import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/login');
    window.location.reload();
  };
  

  return (
    <>
      <header className="chat__mainHeader">
        <p>
          
          {/* <div className="message__chats" key={messages.id}>
                <p>{messages.name}</p>
          </div>      
           */}
        </p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Log Out
        </button>
      </header>

      <div className="message__container">
          {messages.map((message) =>
            message.name === localStorage.getItem('email','password') ? (
              <div className="message__chats" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
            </div>
              ) : (
              <div className="message__chats" key={message.id}>
                <p>{message.name}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;