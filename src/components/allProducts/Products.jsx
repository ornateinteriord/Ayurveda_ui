import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Typography, Box, TextField, Button } from '@mui/material';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <Box className="products-container">
      <Box className="products-header">
        <Typography variant="h4" className="products-title">
          Products
        </Typography>
        <Box className="search-box">
          <TextField
            variant="outlined"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Button variant="contained" onClick={handleSearch} className="search-button">
            Search
          </Button>
        </Box>
      </Box>

      {/* <Box className="product-list">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product, index) => (
            <Typography key={index} variant="body1" className="product-item">
              {product.name}
            </Typography>
          ))}
      </Box> */}
      <Outlet />
    </Box>
  );
};

export default Products;