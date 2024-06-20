import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ orderId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (orderId) {
      // Simulating an API call to fetch products for the provided orderId
      const fetchedProducts = [
        { id: 'P1', name: 'Product 1' },
        { id: 'P2', name: 'Product 2' },
        // Additional products here...
      ];
      setProducts(fetchedProducts);
    }
  }, [orderId]);

  return (
    <div className="product-list">
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default ProductList;