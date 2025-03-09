import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./LoginDialog.css";

const LoginDialog = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [gender, setGender] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Dialog open={open} onClose={onClose} className="auth-dialog">
      <DialogTitle className="auth-title">{isLogin ? "Login" : "Register"}</DialogTitle>
      <DialogContent>
        <form className="auth-form">
          {!isLogin && (
            <>
              <TextField label="Full Name" variant="outlined" fullWidth className="auth-input" />
              <FormControl fullWidth className="auth-input">
                <InputLabel>Gender</InputLabel>
                <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Phone Number" type="tel" variant="outlined" fullWidth className="auth-input" />
            </>
          )}
          <TextField label="Email" type="email" variant="outlined" fullWidth className="auth-input" />
          <TextField label="Password" type="password" variant="outlined" fullWidth className="auth-input" />
          {!isLogin && (
            <TextField label="Confirm Password" type="password" variant="outlined" fullWidth className="auth-input" />
          )}
          <Button variant="contained" color="primary" fullWidth className="auth-button">
            {isLogin ? "Login" : "Register"}
          </Button>
          <Button variant="text" color="secondary" fullWidth className="auth-close" onClick={onClose}>
            Close
          </Button>
        </form>
        <Typography className="auth-toggle" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;