import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  Grid,
} from "@mui/material";
import "./LoginDialog.css";

const LoginDialog = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = () => {
    console.log("Login Data:", loginData);
  };

  const handleRegisterSubmit = () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register Data:", registerData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="dialog-title">Welcome to Ayurved</DialogTitle>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <DialogContent>
        {tabValue === 0 ? (
          <Box className="form-container">
            <TextField
              label="Email"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              margin="normal"
              required
              className="input-field"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              margin="normal"
              required
              className="input-field"
            />
            <Box display="flex" justifyContent="center" gap={1}>
              <Button variant="outlined" onClick={handleCancel} color="primary" className="cancel">
                Cancel
              </Button>
              <Button variant="contained" color="primary" className="login" onClick={handleLoginSubmit}>
                Login
              </Button>
            </Box>
          </Box>
        ) : (
          <Box className="form-container">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <TextField label="Full Name" name="fullName" value={registerData.fullName} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Email" type="email" name="email" value={registerData.email} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Phone Number" name="phone" value={registerData.phone} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Address" name="address" value={registerData.address} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Password" type="password" name="password" value={registerData.password} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Confirm Password" type="password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} margin="normal" required className="input-field" fullWidth />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" fullWidth className="register-button" onClick={handleRegisterSubmit}>
              Register
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
