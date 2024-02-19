import React ,{useState} from 'react';
import {useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUser , FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './signup_page.css';
import { signup } from '../../redux/authSlice';

const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
        email:"",
		password: "",
		confirmPassword: ""
	});

    const handleSubmit = async (e) => {
		e.preventDefault();
        // if ( !inputs?.fullName || !inputs?.username || !inputs?.email || !inputs?.password || !inputs?.confirmPassword) {
        //     return;
        // }

        dispatch(signup(inputs)).then((res)=>{
            if(signup.fulfilled.match(res)){
                navigate("/login");
            }
        })
    }


    return (
        <div className='wrapper'>
            
        <h3>Sign Up</h3>
        
        <form onSubmit={handleSubmit} >
          <div className="input-box">
              <input type='text' name="full_name" placeholder='FullName' value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
              <FaUser className='icon'/>
          </div>
          <div className="input-box">
              <input type='text' name="user_name" placeholder='UserName' 
			  value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
              <FaUser className='icon'/>
          </div>
          <div className="input-box">
              <input type='email' name="email" placeholder='Email' value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}/>
             <MdEmail className='icon'/>
          </div>
          <div className="input-box">
              <input type='password' name="password" placeholder='Password' value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
              <FaLock className='icon'/>
          </div>
          <div className="input-box">
              <input type='password' name="confirmPassword" placeholder='Confirm Password' value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}/>
              <FaLock className='icon'/>
          </div>
         

          <button type='submit' >Sign Up</button>
          <div className='register-link'>
              <p>Already have an account? <Link to = "/login">Sign In</Link></p>
          </div>
      </form>
    </div>
    )
  }
  
  export default SignUpPage;