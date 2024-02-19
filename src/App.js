import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './chatpage/chatpage';
import LoginPage from "./components/login/login_page";
import SignUpPage from './components/signup/signup_page';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage socket={socket} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;