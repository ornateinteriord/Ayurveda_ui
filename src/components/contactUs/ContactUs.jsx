import React from 'react';
import { Typography, Container, Grid, TextField, Button, Card, CardContent, Link, ThemeProvider, createTheme, CssBaseline,Box } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import './ContactUs.css'; // Import the CSS file


// Define the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green theme for Ayurveda
    },
    secondary: {
      main: '#FFC107', // Yellow for accents
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 'bold',
      color: '#4CAF50', // Green theme
    },
    h5: {
      color: '#757575', // Secondary text color
    },
  },
});

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Remove maxWidth or set it to false to make it full-width */}
      <Container maxWidth={false} className="contact-us-container">
        {/* Header Section */}
        <Typography align="center" gutterBottom className="header">
          Contact Us
        </Typography>
        <Typography variant="h5" align="center" paragraph className="contact-desc">
          We’d love to hear from you! Reach out to us and for any questions, feedback, or inquiries.
        </Typography>

        {/* Contact Form and Details */}
        <Grid container spacing={4} >
          {/* Contact Form */}
          <Grid item xs={12} md={6} className="contact-location-cont">
            <Card className="contact-form-card">
              <CardContent className='cord-content'>
                <Typography variant="h5" gutterBottom className='main-title'>
                  Send Us a Message
                </Typography>
                <form className='contact-card-form'>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    margin="normal"
                    required
                    className="form-input"
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                    className="form-input"
                  />
                  <TextField
                    fullWidth
                    label="Your Phone Number"
                    variant="outlined"
                    margin="normal"
                    type="tel"
                    className="form-input"
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                    className="form-input"
                  />
                  <Box className="form-btn">
                
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="submit-button"
                  >
                    Clear
                  </Button>
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className="submit-button"
                  >
                    Send Message
                  </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Card className="contact-details-card">
              <CardContent>
                <Typography variant="h5" gutterBottom className='main-title'>
                  Our Contact Information
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  <Email className="contact-icon" /> Email:{' '}
                  <Link href="mailto:info@ayurveda.com" color="primary">
                    info@ayurveda.com
                  </Link>
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  <Phone className="contact-icon" /> Phone:{' '}
                  <Link href="tel:+1234567890" color="primary">
                    +123 456 7890
                  </Link>
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  <LocationOn className="contact-icon" /> Address: 123 Ayurveda Lane, Wellness City, India
                </Typography>

                {/* Embedded Map */}
                <div className="map-container">
                  <iframe
                    title="Ayurveda Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.80123456789!2d77.59465431534367!3d12.934519519487654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b9e!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1633084800000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;