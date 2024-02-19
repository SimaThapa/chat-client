import React ,{useState} from 'react';
import { Link } from "react-router-dom";
import { FaUser , FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './signup_page.css';

const SignUpPage = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
        email:"",
		password: "",
		confirmPassword: ""
	});

    const handleSubmit = async (e) => {
		e.preventDefault();
	};
//for verification
    function handleInputErrors({fullName,userName,email, password, confirmPassword }) {
        if ( !fullName || !userName || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return false;
        }
    
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
    
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return false;
        }

        if(userName.length<3){
            alert("Name should be of atleast 3 words");
        }
    
        return true;
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
			  value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}/>
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
         

          <button type='submit' onClick={()=>{handleInputErrors(inputs)}}><Link to="/login">Sign Up</Link></button>
          <div className='register-link'>
              <p>Already have an account? <Link to = "/login">Sign In</Link></p>
          </div>
      </form>
    </div>
    )
  }
  
  export default SignUpPage;