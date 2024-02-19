import React, { useState, useEffect } from 'react';
import Profile from '../assets/profile.jfif';
import { IoIosSearch } from "react-icons/io";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  const handleSelectUser=(userName,id)=>{
    console.log("user name",userName,id)
  }

  return (
    <div className="chat__sidebar" >
      <h2 style={{marginLeft:"10px"}}>Chats</h2>
      <div>
      <div style={{marginRight:"15px"}}>
          <input type="text" placeholder="Search" style={{width:"100%",borderRadius:"20px",height:"30px",border:"1px solid grey",paddingLeft:"32px",margin:"8px"}}/><IoIosSearch style={{
          position: 'absolute',
          marginLeft: '16px',marginTop:"-30px", // Adjusted marginLeft to position the icon inside the input
          color: 'grey',
        }}/>
      </div>
        <img src={Profile} alt='profile-pic' height="50px" width="50px" style={{borderRadius:"50%",margin:"10px"}}/>     
      </div>
     
      <div>
        <h4 className="chat__header">USERS</h4>
        
        <div className="chat__users">
          {users.map((user) => (
              <p key={user.socketID}>
                  <button style={{border:"hidden"}} onClick={()=>handleSelectUser(user?.userName,user?.id)}>
                    <div>
                     {user.userName}
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