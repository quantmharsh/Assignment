import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

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

  return (
    <MainLayout>
    <div className="cart-container flex w-screen h-screen justify-center items-center bg-blue-100">
      <div className='flex w-[90%] h-screen'>
        <h2></h2>
        <div className="cart-items-list grid grid-cols-5 gap-2">
          {cartItems.map((item) => {
            const product = getProductById(item.productId);
            return product ? (
              <div key={item.id} className="cart-item flex flex-col border-gray-300 border-[1px] bg-white max-w-[7cm] m-4">
                <div className='flex justify-center items-center'>
                  <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='flex text-sm p-2'>
                  <p>{product.title}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Cart;
