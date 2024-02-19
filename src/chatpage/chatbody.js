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
          
         
        </p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Log Out
        </button>
      </header>

      <div className="message__container">
          {messages.map((message) =>
            message.email === localStorage.getItem('email') ? (
              <div className="message__chats" key={message.id}>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
            </div>
              ) : (
              <div className="message__chats" key={message.id}>
                <p>{message.email}</p>
                <div className="message__recipient">
                  <p>{message.text}</p>
                </div>
            </div>
          )
        )}

      </div>
    </>
  );
};

export default ChatBody;