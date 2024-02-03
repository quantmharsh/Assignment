import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addToCartButtonText, setAddToCartButtonText] = useState('🛒 Add to Cart');


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Data could not be fetched!');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = async (product) => {
    console.log("Adding to cart:", product);
    // Here, you would add the product to your cart's state or context
    try {
      const response = await fetch('http://localhost:3000/favourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          // Include any other product details you deem necessary
        }),
      });
      if (response.ok) {
        console.log('Product added to favourites successfully');
        setAddToCartButtonText('Added Successfully ✅');
      
        // Optionally, revert the button text back after a few seconds
        setTimeout(() => {
          setAddToCartButtonText('🛒 Add to Cart');
        }, 3000); // Adjust time as needed
        // Optionally, update UI or state to reflect the change
      } else {
        console.error('Failed to add product to favourites');
      }
    } catch (error) {
      console.error('Error adding product to favourites:', error);
    }
  };

  return (
    <>
    <MainLayout>
      <div className="products-container flex w-screen h-screen justify-center items-center bg-blue-100">
        <div className='flex w-[90%] h-screen'>

          {/* <h2>Our Products</h2> */}
          <div className="product-list grid grid-cols-5 gap-2">
            {products.map((product) => (
               <div key={product.id} className="product flex flex-col border-gray-300 border-[1px] bg-white max-w-[7cm] m-4 relative" onClick={() => handleProductClick(product)}>
               <div className='flex justify-center items-center'>
                 <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
               </div>
               <div className='flex flex-col text-sm p-2'>
                 <p>{product.title}</p>
                 {/* Amount on the right */}
                 <div className="absolute top-2 right-2 text-xs font-semibold">
                   ${product.amount}
                 </div>
                 {/* Rating on the left */}
                 <div className="absolute top-2 left-2 text-xs font-semibold">
                   ⭐{product.rating}
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className='flex w-4 justify-center items-start m-auto'>
            <div className="product-popup flex absolute inset-0 h-screen items-center justify-center bg-black bg-opacity-50">
              <div className="product-detail-card flex flex-col bg-white p-4 w-[15cm] h-[15cm] rounded-md">
                {/* <div className="product-popup">
          <div className="product-detail-card"> */}
                {/* <div> */}
                <div className='flex justify-center items-center'>
                  <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '200px', height: '200px' }} />
                </div>

                <div className='m-2'>
                  <h3>{selectedProduct.title}</h3>
                </div>

                <div className='m-2'>
                  <p className='text-sm'>{selectedProduct.description}</p>
                </div>

                <div className='m-2'>
                  <p>Price: ${selectedProduct.amount}</p>
                </div>

                <div className='m-2'>
                  <p>Rating: {selectedProduct.rating} / 5</p>
                </div>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => handleAddToCart(selectedProduct)}>
  {addToCartButtonText}
</button>

                <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"onClick={() => setSelectedProduct(null)}>Close❌</button>
                {/* </div> */}
              </div>
              {/* <div className="popup-overlay" onClick={() => setSelectedProduct(null)}></div> */}
            </div>
          </div>
        )}
      </div >
     </MainLayout>
    </>
  );
};

export default Products;
