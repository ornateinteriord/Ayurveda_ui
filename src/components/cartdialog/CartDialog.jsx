import React, { useState } from "react";
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  IconButton,
  Grid,
  Alert,
} from "@mui/material";
import { CreditCard, Remove, Add, Delete } from "@mui/icons-material";
import neem from "../../assets/images/neem.avif";
import aloe1 from "../../assets/images/aloe1.avif";
import ashwa from "../../assets/images/ashwa.avif";
import "./CartDialog.css"; // Import the CSS file

const CartDialog = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "File 19", quantity: 1, price: 44.0, image: neem },
    { id: 2, name: "Glocker White $000B", quantity: 1, price: 249.99, image: aloe1 },
    { id: 3, name: "F1: F1'19.99", quantity: 1, price: 119.99, image: ashwa },
    { id: 1, name: "File 19", quantity: 1, price: 44.0, image: neem },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const shipping = 9.99;
  const total = subtotal - discount + shipping;

  const handleContinueShopping = () => {
    console.log("Continue Shopping");
  };

  const handleCheckout = () => {
    console.log("Proceed to Checkout");
  };

  return (
    <Box className="cartContainer">
      <Typography variant="h4" className="cartTitle">
        Shopping Cart
      </Typography>
      <Box   className="cart-main-conatiner">
        <Grid item xs={12} md={7} className="left-containet">
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem className="cartItem">
                  <Box>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cartItemImage"
                  />
                  </Box>
                  <Box className='cart-price-q'>
                  <Box className="cartItemDetails">
                    <ListItemText
                      primary={<Typography variant="subtitle1" className="cartItemName">{item.name}</Typography>}
                      secondary={`£${item.price.toFixed(2)} each`}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                      <IconButton onClick={() => handleQuantityChange(item.id, -1)} size="small" sx={{ "&:hover": { color: "#2E7D32" } }}>
                        <Remove />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton onClick={() => handleQuantityChange(item.id, 1)} size="small" sx={{ "&:hover": { color: "#2E7D32" } }}>
                        <Add />
                      </IconButton>
                      <IconButton onClick={() => handleRemoveItem(item.id)} size="small" color="error" sx={{ "&:hover": { bgcolor: "#ffebee" } }}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography variant="h6" className="cartItemPrice">
                    £{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                  </Box>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={5} className="right-containet">
          <Box className="cartSummary">
            <Box sx={{ display: "flex", alignItems: 'center', gap: 1, mb: 2 }}>
              <TextField
                size="small"
                label="Coupon Code"
                placeholder="Enter code"
                className="couponCodeInput"
              />
              <Button
                variant="outlined"
                className="applyCouponButton"
              >
                Apply
              </Button>
            </Box>

            <Alert severity="success" sx={{ mb: 2 }}>
              20% discount applied successfully!
            </Alert>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Payment Method</InputLabel>
              <Select label="Payment Method" className="paymentMethodSelect">
                <MenuItem value="credit-card">
                  <CreditCard sx={{ fontSize: 16, mr: 1 }} />
                  Credit Card
                </MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="apple-pay">Apple Pay</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography>£{subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, color: "green" }}>
                <Typography>Discount (20%):</Typography>
                <Typography>-£{discount.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Shipping:</Typography>
                <Typography>£{shipping.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" className="totalAmount">Total:</Typography>
                <Typography variant="h6" className="totalAmount">£{total.toFixed(2)}</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", gap: 2 }}>
              <Button
                variant="outlined"
                className="continueShoppingButton"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
              <Button
                variant="contained"
                className="checkoutButton"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default CartDialog;