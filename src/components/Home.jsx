import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import Header from './Header';
import FilterCard from './FilterCard';
import { add } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';

const Home = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRange, setFilterRange] = useState({ min: 10, max: 500 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= filterRange.min &&
      product.price <= filterRange.max
  );

  const handleFilterChange = useCallback((range) => {
    setFilterRange(range);
  }, []);

  const handleCartAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      <Header handleLogout={handleLogout} setSearchTerm={setSearchTerm} />
      <div className="content">
        <FilterCard className="sidebar" onFilterChange={handleFilterChange} />
        <div className="product-list">
          {filteredProducts.length === 0 ? (
            <p style={{ color: 'red', fontWeight: 'bold' }}>No results found.</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                title={product.title}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
                thumbnail={product.thumbnail}
                handleCartAdd={handleCartAdd}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
