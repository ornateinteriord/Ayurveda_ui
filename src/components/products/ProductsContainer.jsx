
import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductsContainer.css";
import products from "../../assets/productsdata/ProductsData"
import { ArrowRight } from 'lucide-react';


const ProductsContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({}); // Track quantity for each product

  const handleInfoClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  // Function to increase quantity
  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  // Function to decrease quantity
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0
    }));
  };

  return (
    <Box className="products-home-container">
      <Box>
        <Typography className="product-home-tittle">
          Products
        </Typography>
      </Box>
      <Box className="products-home-container">
      {products.map((product) => (
        <Card key={product.id} className="product-home-card">
          <CardMedia sx={{ width: "100%", height: "240px", borderRadius: "10px" }} component="img" image={product.image} 
          alt={product.name} className="product-image" />
          <CardContent sx={{ width: "100%" }}>
            <Typography variant="h6" className="product-home-name">{product.name}</Typography>

        
            <Box display={'flex'} alignItems={'center'} gap={2} justifyContent={'flex-start'}>
            <Typography variant="body1" color="green" fontWeight="bold" className="product-price">
              {product.price}
            </Typography>

            {/* Quantity Controls */}
            <Box className="quantity-home-controls">
              <IconButton color="error" onClick={() => handleDecrease(product.id)} disabled={quantities[product.id] === 0}>
                <RemoveIcon sx={{fontSize:'15px'}}/>
              </IconButton>
              <Typography variant="body1" className="quantity-home-text">{quantities[product.id] || 0}</Typography>
              <IconButton color="success" onClick={() => handleIncrease(product.id)}>
                <AddIcon sx={{fontSize:'15px'}}/>
              </IconButton>
            </Box>
            </Box>
            <Box className="card-home-actions">
              <Button variant="contained" className="cart-button" startIcon={<ShoppingCartIcon style={{ color: "#fff", fontSize: "30px" }} />}>
                add to cart
              </Button>
              <IconButton  onClick={() => handleInfoClick(product)}>
                <InfoIcon style={{fontSize:'25px'}} />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
        
      ))}
    

      {/* Product Details Dialog */}
      <Dialog open={Boolean(selectedProduct)} onClose={handleClose} className="product-dialog">
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent className="dialog-content">
          <img src={selectedProduct?.image} alt={selectedProduct?.name} className="dialog-image" />
          <Typography variant="h6" color="green" fontWeight="bold">
            {selectedProduct?.price}
          </Typography>
          <Typography className="dialog-description">{selectedProduct?.description}</Typography>
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button onClick={handleClose} variant="outlined" sx={{}}>
            Close
          </Button>
          <Button variant="contained" sx={{background:'#16ac5f'}}>
            Buy Now
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
      <Box>
  <Button variant="contained" className="view-more-btn" endIcon={<ArrowRight />}>
    View more
  </Button>
</Box>

    </Box>
  );
};

export default ProductsContainer;
