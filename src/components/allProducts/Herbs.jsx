import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoIcon from '@mui/icons-material/Info';
import herbs from '../../assets/images/herbs.avif'; // Ensure the image path is correct
import './Herbs.css'; // External CSS file
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Herbs = () => {
  const [quantities, setQuantities] = useState(Array(8).fill(1));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = (product, quantity) => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Add your cart logic here
  };

  const handleInfoClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const products = Array(8).fill({
    name: 'Herb Product',
    description: 'This is a herb product description.',
    price: '$10',
    image: herbs,
  });

  return (
    <Box className="herbs-container">
      <Typography variant="h4" gutterBottom className="herbs-title">
        Herbs
      </Typography>
      <Grid container spacing={3} className='herbs-card'>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className='product-card-container'>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="240px"
                image={product.image}
                alt={product.name}
                className="product-image"
              />
              <CardContent className="product-content">
                <Typography variant="h6" className="product-name">
                  {product.name}
                </Typography>
                <Typography variant="body2" className="product-description">
                  {product.description}
                </Typography>
                <Box className="quantity-controls">
                <Typography variant="body1" className="product-price">
                  {product.price}
                </Typography>
                  <IconButton onClick={() => handleDecrement(index)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body1" className="quantity">
                    {quantities[index]}
                  </Typography>
                  <IconButton onClick={() => handleIncrement(index)}>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems={'center'} justifyContent="flex-start" >
                  <Button
                    variant="contained"
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product, quantities[index])}
                    startIcon={<ShoppingCartIcon style={{ color: "#fff", fontSize: "30px" }} />}
                  >
                    Add to Cart
                  </Button>
                  <IconButton onClick={() => handleInfoClick(product)}>
                    <InfoIcon style={{ fontSize: '25px' }} />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedProduct && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{textAlign:'center',fontWeight:'bold'}}>{selectedProduct.name}</DialogTitle>
          <DialogContent>
            <img src={selectedProduct.image} alt={selectedProduct.name} width="50%" style={{ borderRadius: '8px',display:'flex',justifySelf:'center' }} />
            <Typography variant="body2" mt={2}>{selectedProduct.description}</Typography>
            <Typography variant="h6" mt={1}>{selectedProduct.price}</Typography>
          </DialogContent>
            <DialogActions className="dialog-actions">
                    <Button onClick={handleClose} variant="outlined" sx={{}}>
                      Close
                    </Button>
                    <Button variant="contained" sx={{background:'#34495e'}}>
                      Buy Now
                    </Button>
                  </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Herbs;
