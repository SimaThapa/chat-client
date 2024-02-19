import React, { useState, useEffect } from 'react';
import Profile from '../assets/profile.jfif';
import { IoIosSearch } from "react-icons/io";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  const handleSelectUser=(email)=>{
    console.log("Email",email)
  }

  return (
    <div className="chat__sidebar" >
      <h2 style={{marginLeft:"10px"}}>Chats</h2>
      <div>
      <div style={{marginRight:"15px"}}>
        
          <input type="text" placeholder="Search" style={{width:"100%",borderRadius:"20px",height:"30px",border:"1px solid grey",paddingLeft:"32px",margin:"8px"}}
          />
          <IoIosSearch style={{
          position: 'absolute',
          marginLeft: '16px',marginTop:"-30px",
      
          color: 'grey',
        }}/>
      </div>
        <img src={Profile} alt='profile-pic' height="50px" width="50px" style={{borderRadius:"50%",margin:"10px"}}/>     
      </div>
     
      <div>
        <h4 className="chat__header">CONNECTED USERS</h4>
        
        <div className="chat__users">
          {users.map((email) => (
              <p key={email.socketID}>
                  <button style={{border:"hidden"}} onClick={()=>handleSelectUser(email?.email)}>
                    <div>
                     {email.email}
                     </div>
                  </button>
              </p>
            ))}
            
         
        </div>
        
      </div>
    </div>
  );
};

export default ChatBar;