import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import OrderPlacedPopup from './OrderPlacedPopup';
import Delete from './Delete';
import ConfirmOrderPopup from './ConfirmOrderPopup';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isItemRemoved, setIsItemRemoved] = useState(false);
  const [showConfirmOrderPopup, setShowConfirmOrderPopup] = useState(false);
  // In your Cart component
const [showOrderPlacedPopup, setShowOrderPlacedPopup] = useState(false);




  useEffect(() => {
    // Assuming you have a function to fetch products
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    };

    // Assuming you have a function to fetch cart items
    const fetchCartItems = async () => {
      const response = await fetch('http://localhost:3000/favourites'); // Make sure this endpoint is correct
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
      }
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  // Function to find product details by ID
  const getProductById = (productId) => products.find(product => product.id === productId);
  const handlePlaceOrder = () => {
    // Trigger the confirm order popup instead of directly placing the order
    setShowConfirmOrderPopup(true);
  };
  //remove item
  const removeItemFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/favourites/${itemId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the cart item.');
      }
  
      // Update the UI by filtering out the removed item
      setCartItems(cartItems.filter(item => item.id !== itemId));
      
      // Show the removal notification popup
      setIsItemRemoved(true);
      
      // Optionally, hide the popup after a few seconds
      setTimeout(() => {
        setIsItemRemoved(false);
      }, 3000); // Adjust the duration as needed
  
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  //place order 
  const handleConfirmOrder = () => {
    setShowOrderPlacedPopup(true); // Show the OrderPlacedPopup
  };

  
  
     

  return (
    <MainLayout>
    <div className="cart-container flex w-screen h-screen justify-center items-center bg-blue-100">
      <div className='flex w-[90%] h-screen'>
        <h2></h2>
        <div className="cart-items-list grid grid-cols-5 gap-2">
        {cartItems.map((item) => {
  const product = getProductById(item.productId);
  return product ? (
    <div key={item.id} className="cart-item flex flex-col border-gray-300 border-[1px] bg-white max-w-[7cm] m-4 relative">
      <div className='flex justify-center items-center'>
        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
      </div>
      <div className='flex flex-col text-sm p-2'>
        <p>{product.title}</p>
        <p>Quantity: {item.quantity}</p>
        {/* Amount on the right */}
        <div className="absolute top-2 right-2 text-xs font-semibold">
          ${product.amount}
        </div>
        {/* Rating on the left */}
        <div className="absolute top-2 left-2 text-xs font-semibold">
          ⭐{product.rating}
        </div>
      </div>
      <button onClick={() => removeItemFromCart(item.id)} className="self-center bg-red-500 text-white p-1 rounded hover:bg-red-700 mt-2">
        Remove
      </button>
    </div>
  ) : null;
})}

          
         
        </div>
      </div>
      <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"onClick={handlePlaceOrder}>
           <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Place Order</span></button>
    
           {showConfirmOrderPopup && <ConfirmOrderPopup  sum={0}cartItems={cartItems} products={products} onClose={() => setShowConfirmOrderPopup(false)} onConfirmOrder={handleConfirmOrder} />}
    {isItemRemoved && <Delete onClose={() => setIsItemRemoved(false)} />}
    {showOrderPlacedPopup && <OrderPlacedPopup onClose={() => setShowOrderPlacedPopup(false)} />}
    </div>
   
    </MainLayout>
  );
};

export default Cart;
