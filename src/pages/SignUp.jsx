import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SignUpSuccessPopup from './SignUpSuccessPopup'; 


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate(); 
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('User signed up successfully!');
        setShowSuccessPopup(true);

        // Redirect to login page after a short delay
        setTimeout(() => navigate('/'), 2000); 
      } else {
        console.error('Failed to sign up. Please try again.');
        setSuccessMessage('Failed to sign up. Please try again.'); 
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <>
   
      <div className="flex h-screen bg-gradient-to-r bg-pink-200">
        <div className=" flex bg-blue-400 w-80 h-72 justify-center m-auto rounded-3xl">
          <div className="flex flex-col m-auto">

            <label>Email:</label>
            <input
              type="email"
              // placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              // placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp} className="bg-blue-200 p-1 m-2 rounded-md" type="submit">Sign Up</button>
            {showSuccessPopup && <SignUpSuccessPopup 
        message="User created successfully! Redirecting to login..." 
        onClose={() => navigate('/')} // Navigate to login when the popup is closed
      />}

            <Link to="/"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Go to Login</button></Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;