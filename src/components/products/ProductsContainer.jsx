
import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductsContainer.css";
import products from "../../assets/productsdata/ProductsData"


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
    <Box className="products-container">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <CardMedia sx={{ width: "100%", height: "240px", borderRadius: "10px" }} component="img" image={product.image} 
          alt={product.name} className="product-image" />
          <CardContent sx={{ width: "100%" }}>
            <Typography variant="h6" className="product-name">{product.name}</Typography>

        
            <Box display={'flex'} alignItems={'center'} gap={2} justifyContent={'flex-start'}>
            <Typography variant="body1" color="green" fontWeight="bold" className="product-price">
              {product.price}
            </Typography>

            {/* Quantity Controls */}
            <Box className="quantity-controls">
              <IconButton color="error" onClick={() => handleDecrease(product.id)} disabled={quantities[product.id] === 0}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" className="quantity-text">{quantities[product.id] || 0}</Typography>
              <IconButton color="success" onClick={() => handleIncrease(product.id)}>
                <AddIcon />
              </IconButton>
            </Box>
            </Box>
            <Box className="card-actions">
              <Button variant="contained" className="cart-button" startIcon={<ShoppingCartIcon style={{ color: "green", fontSize: "30px" }} />}>
                Buy now
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
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Close
          </Button>
          <Button variant="contained" color="primary">
            Buy Now
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductsContainer;
