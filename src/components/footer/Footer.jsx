import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
     
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3} className="footer-branding">
            <Typography variant="h4" className="footer-title">Ayurvedic</Typography>
            <Typography variant="body1" className="footer-description">
              Experience the power of Ayurveda for a healthier and natural lifestyle.
              Our products are crafted to balance your mind, body, and soul.
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" className="footer-heading">Quick Links</Typography>
                <ul className="footer-links">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Health Care</li>
                  <li>Contact Us</li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" className="footer-heading">Services</Typography>
                <ul className="footer-links">
                  <li>Ayurvedic Treatment</li>
                  <li>Organic Products</li>
                  <li>Wellness Programs</li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
  <Typography variant="h6" className="footer-heading">Our Stores</Typography>
  <ul className="footer-links">
    <li>India</li>
    <li>USA</li>
    <li>United Kingdom</li>
    <li>Canada</li>
    <li>Australia</li>
  </ul>
</Grid>

              <Grid item xs={12} sm={3}>
                <Typography variant="h6" className="footer-heading">Follow Us</Typography>
                <Box className="social-icons">
                  <Facebook className="social-icon" />
                  <Twitter className="social-icon" />
                  <Instagram className="social-icon" />
                  <YouTube className="social-icon" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box className="newsletter-container">
<Typography variant="h6" className="newsletter-title">
  Subscribe To Our Quarterly Newsletter
</Typography>
<Box className="email-input-container">
  <TextField
    variant="outlined"
    placeholder="Enter your email address"
    className="email-input"
  />
  <Button variant="contained" className="subscribe-btn">
    SUBSCRIBE
  </Button>
</Box>
</Box>

        <Box className="footer-bottom">
          <Typography variant="body2" className="footer-copy">
            &copy; 2025 Ayurvedic E-Commerce. All rights reserved.
          </Typography>
          <Box className="footer-links-bottom">
            <Typography variant="body2">Terms & Conditions</Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Sitemap</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;





