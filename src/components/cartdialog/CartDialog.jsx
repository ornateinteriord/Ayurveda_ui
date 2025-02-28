import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
  Chip,
  Grid,
  Alert,
} from "@mui/material";
import { CreditCard, Remove, Add, Delete } from "@mui/icons-material";
import neem from "../../assets/images/neem.avif";
import aloe1 from "../../assets/images/aloe1.avif";
import ashwa from "../../assets/images/ashwa.avif";

const CartDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      // maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          overflow: "hidden",
        },
      }}
    >
      {/* Dialog Title */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#16ac5f",
          color: "#FFF",
          py: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Shopping Cart
        </Typography>
        <Chip label="3 Items" sx={{color:'black',background:'#fff',fontWeight:'bold'}} />
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent sx={{ p: 0 }}>
        <Grid container spacing={3}>
          {/* Left Section - Cart Items */}
          <Grid item xs={12} md={7}>
            <List>
              {[
                { name: "File 19", quantity: 2, price: 44.0, total: 88.0, image: neem },
                { name: "Glocker White $000B", quantity: 1, price: 249.99, total: 249.99, image: aloe1 },
                { name: "F1: F1'19.99", quantity: 1, price: 119.99, total: 119.99, image: ashwa },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ display: "flex", alignItems: "center", gap: 2, py: 2 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80"
                      height="80"
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                            {item.name}
                          </Typography>
                        }
                        secondary={`£${item.price.toFixed(2)} each`}
                      />
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                        <IconButton size="small" sx={{ "&:hover": { color: "#2E7D32" } }}>
                          <Remove />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton size="small" sx={{ "&:hover": { color: "#2E7D32" } }}>
                          <Add />
                        </IconButton>
                        <IconButton size="small" color="error" sx={{ "&:hover": { bgcolor: "#ffebee" } }}>
                          <Delete />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      £{item.total.toFixed(2)}
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Grid>

          {/* Right Section - Payment & Order Summary */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: "8px", bgcolor: "#f9f9f9" }}>
              {/* Coupon Input */}
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <TextField
                  size="small"
                  label="Coupon Code"
                  placeholder="Enter code"
                  fullWidth
                  sx={{ bgcolor: "#FFF" }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "#FFF",
                    color: "#2E7D32",
                    borderColor: "#2E7D32",
                    "&:hover": { bgcolor: "#2E7D32", color: "#FFF" },
                  }}
                >
                  Apply
                </Button>
              </Box>

              <Alert severity="success" sx={{ mb: 2 }}>
                20% discount applied successfully!
              </Alert>

              {/* Payment Method Selection */}
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Payment Method</InputLabel>
                <Select label="Payment Method" sx={{ bgcolor: "#FFF" }}>
                  <MenuItem value="credit-card">
                    <CreditCard sx={{ fontSize: 16, mr: 1 }} />
                    Credit Card
                  </MenuItem>
                  <MenuItem value="paypal">PayPal</MenuItem>
                  <MenuItem value="apple-pay">Apple Pay</MenuItem>
                </Select>
              </FormControl>

              {/* Order Summary */}
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>£462.98</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, color: "green" }}>
                  <Typography>Discount (20%):</Typography>
                  <Typography>-£92.60</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography>Shipping:</Typography>
                  <Typography>£9.99</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Total:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    £380.37
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions sx={{ p: 1, bgcolor: "#f5f5f5" }}>
        <Button
          onClick={onClose}
          sx={{
          textTransform:'capitalize',
          fontSize:'1rem', 
        //   width:'80%',

         color: "blue",
            "&:hover": { background:'transparent', color: "#2E7D32" },
          }}
        >
          Continue Shopping
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          startIcon={<CreditCard />}
          sx={{
            textTransform:'capitalize',
            bgcolor: "#2E7D32",
            "&:hover": { bgcolor: "#1B5E20" },
          }}
        >
           Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;