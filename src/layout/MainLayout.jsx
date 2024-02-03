import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { useNavigate } from 'react-router-dom';


const MainLayout = ({  username, children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // Redirect to login
    navigate('/');
  };
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <div className="flex w-screen">
          
          {/* NAVBAR */}
          <nav className="flex items-center justify-between w-screen bg-blue-600 -500 p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              {/* Your logo and title */}
              <span className="font-semibold text-xl tracking-tight">ShopKart</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Products
                </Link>
                <Link to="/cart" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Cart
                </Link>
                {/* Optionally display the username */}
                {username && (
                  <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Hello, {username}
                  </span>
                )}
              </div>
              <div>
                <button 
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
          {/*  */}

        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default MainLayout;
