import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
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

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // Here, you would add the product to your cart's state or context
  };

  return (
    <>
      <div className="products-container flex w-screen h-screen justify-center items-center bg-blue-100">
        <div className='flex w-[90%] h-screen'>

          {/* <h2>Our Products</h2> */}
          <div className="product-list grid grid-cols-5 gap-2">
            {products.map((product) => (
              <div key={product.id} className="product flex flex-col border-gray-300 border-[1px] bg-white max-w-[7cm] m-4" onClick={() => handleProductClick(product)}>
                <div className='flex justify-center items-center'>
                  <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='flex text-sm p-2'>
                  <p>{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className='flex w-4 justify-center items-start m-auto'>
            <div className="product-popup flex absolute inset-0 h-screen items-center justify-center bg-black bg-opacity-50">
              <div className="product-detail-card flex flex-col bg-white p-4 w-[15cm] h-[13cm] rounded-md">
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
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
                <button onClick={() => setSelectedProduct(null)}>Close</button>
                {/* </div> */}
              </div>
              <div className="popup-overlay" onClick={() => setSelectedProduct(null)}></div>
            </div>
          </div>
        )}
      </div >
    </>
  );
};

export default Products;
