import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDialog from "../cartdialog/CartDialog";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // State for cart dialog
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setMobileDropdownOpen(false);
  };

  const handleMobileDropdownToggle = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };
  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        {/* Logo + Store Name */}
        <Box className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <Typography variant="h6" className="logo-text" component={Link} to="/">
            Ayurved
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box className="nav-links">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button className="dropdown" color="inherit" onClick={handleMenuClick}>
            Products <KeyboardArrowDownIcon />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose} component={Link} to="/products/herbs">Herbs</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/products/oils">Oils</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/products/health">Health Care</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/products/foods">Foods</MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/privacy">Privacy & policy</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
           <Box className="cart-container" gap={3} >
        {/* Cart Icon */}
        <Box display={'flex'} alignItems={'center'}justifyContent={'center'} gap={1} >
        <IconButton className="carticon" color="inherit" onClick={handleCartOpen}>
          <ShoppingCartIcon style={{fontSize:'35px'}}/>
        </IconButton>
        {/* Login Button (Desktop) */}
        <Button className="login-button" component={Link} to="/login">Login</Button>
        </Box>
      <Box>
        {/* Mobile Menu Icon */}
        <IconButton className="menu-icon" onClick={handleDrawerToggle} edge="end" sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon  sx={{fontSize:'40px'}}/>
        </IconButton>
        </Box>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer className="mobile-drawer" anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box display="flex" justifyContent="flex-start" padding={"0px 10px"} >
          <IconButton onClick={handleDrawerToggle}  >
            <CloseIcon style={{fontSize:'30px',fontWeight:'bold'}}  />
          </IconButton>
        </Box>
        <List className="mobile-menu">
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle} style={{fontWeight:'bold'}}>Home<ListItemText/></ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>About<ListItemText  /></ListItem>
          <ListItem button onClick={handleMobileDropdownToggle}>
          Products <ListItemText /> {mobileDropdownOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={mobileDropdownOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/products/herbs" onClick={handleDrawerToggle}>Herbs<ListItemText /></ListItem>
              <ListItem button component={Link} to="/products/oils" onClick={handleDrawerToggle}>Health Care<ListItemText  /></ListItem>
              <ListItem button component={Link} to="/products/foods" onClick={handleDrawerToggle}>Foods<ListItemText  /></ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/privacy" onClick={handleDrawerToggle}>Privacy & policy<ListItemText  /></ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>Contact<ListItemText  /></ListItem>
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>Login<ListItemText /></ListItem>
        </List>
      </Drawer>

         {/* Cart Dialog */}
         <CartDialog open={cartOpen} onClose={handleCartClose} />
    </AppBar>
  );
};

export default Navbar;
