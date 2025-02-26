// FeaturedServices.js
import React from "react";
import "./FeaturedServices.css";
import { Container, Typography, Box } from "@mui/material";
import { Payment, LocalShipping, Spa, SupportAgent, Replay } from "@mui/icons-material";

const services = [
  { icon: <Payment fontSize="large" />, title: "Secure Payments", description: "Safe transactions with multiple payment options." },
  { icon: <LocalShipping fontSize="large" />, title: "Fast & Free Delivery", description: "Quick delivery with free shipping on select orders." },
  { icon: <Spa fontSize="large" />, title: "100% Organic Products", description: "Certified natural products for healthy living." },
  { icon: <SupportAgent fontSize="large" />, title: "Expert Consultation", description: "Ayurvedic experts help you choose the right products." },
  { icon: <Replay fontSize="large" />, title: "Easy Returns", description: "Hassle-free return policies for customer satisfaction." }
];

const FeaturedServices = () => {
  return (
    <Box className="featured-services">
      <Typography variant="h4" className="section-title">Why Shop With Us?</Typography>
      <Box className="services-container">
        {services.map((service, index) => (
          <Box key={index} className="service-item">
            <div className="icon-wrapper">{service.icon}</div>
            <Typography variant="h6" className="service-title">{service.title}</Typography>
            <Typography variant="body2" className="service-description">{service.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedServices;