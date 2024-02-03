import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const checkUserCredentials = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);

      if (response.ok) {
        const matchedUsers = await response.json();
        return matchedUsers.length > 0;
      }


      console.error('Failed to check user credentials. Please try again.');
      return false;
    } catch (error) {
      console.error('Error during user credentials check:', error);
      return false;
    }
  };

  const handleLogin = async () => {
    try {
      // Check if the provided email and password match any existing user
      const credentialsValid = await checkUserCredentials();

      if (credentialsValid) {
        console.log('Login successful!');
        navigate("/products")
        // Redirect or perform other actions for successful login
      } else {
        alert('User does not exist.')
        console.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className="flex h-screen bg-pink-200">
        <div className="flex bg-blue-400 w-80 h-72 justify-center m-auto rounded-3xl">
          <div className="flex flex-col m-auto">

            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin} className="bg-blue-200 p-1 m-2 rounded-md">Log In</button>

            <h4>New User? Create an account.</h4>
            <Link to="/signup"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">SignUp</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn;