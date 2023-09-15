// Cart.js
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Product from './Product';
import Nav from './Nav';

function Cart() {
  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container m-auto text-center">
      <Nav setSearchQuery={setSearchQuery} />
      <h1>Fake store chart</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Render filtered products */}
        {product
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </div>
      <div></div>
    </div>
  );
}

export default Cart;
