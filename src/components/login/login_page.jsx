import React ,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';

import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import './login_page.css';
import { FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { login } from '../../redux/authSlice';

const LoginPage = ({socket}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    e.preventDefault();
    if (handleInputErrors({ email, password })) {

      socket.emit('newUser', { email:email, password:password, socketID: socket.id });
      navigate('/chat');
    }

  };

    function handleInputErrors({ email,password}) {
    
      if (!email || !password ) {
          alert("Please fill in all fields");
          return false;
      }
      if (password.length < 6) {
          alert("Password must be at least 6 characters");
          return false;
      }

      return true;
=======
      e.preventDefault();
      if(!email || !password) return;

      console.log("Hello");
      dispatch(login({email,password})).then((res)=>{
        if(login.fulfilled.match(res)
        )
      {
        navigate("/chat")
    }
    })
>>>>>>> cedbdb6995fcf0090b63019df5d6d46513e62259
  }


    
  return (
    <div className='wrapper'>
     
        <h1>Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-box">
              <input type='email' name="email" placeholder='sita123@gmail.com' value={email}
							onChange={(e) => setEmail(e.target.value)}/>
              <MdEmail className='icon'/>
          </div>
          <div className="input-box">
              <input type='password' name="password" placeholder='Password' value={password}
							onChange={(e) => setPassword(e.target.value)} />
              <FaLock className='icon'/>
          </div>
        
          <button type='submit' >Login</button>
          <div className='register-link'>
              <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
          </div>
       </form>
    </div>
  
  )
}

export default LoginPage;
    