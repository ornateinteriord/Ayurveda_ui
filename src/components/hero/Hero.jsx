import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Hero.css";
import hero4 from "../../assets/images/hero4.avif";
import hero1 from "../../assets/images/hero1.avif";
import hero2 from "../../assets/images/hero2.avif";
import hero3 from "../../assets/images/hero3.avif";

const Hero = () => {
  return (
    <Box className="hero-container">
      {/* Left Side: Text Content */}
      <Box className="hero-content">
        <Typography variant="h6" className="subtitle">
          WE’RE THE BEST IN
        </Typography>
        <Typography variant="h2" className="title">
          AYURVEDA
        </Typography>
        <Typography variant="h5" className="subheading">
          & Ayurvedic Medicine
        </Typography>
        <Typography variant="body1" className="description">
          Discover the ancient wisdom of Ayurveda with our premium herbal products.
        </Typography>
        <Button variant="contained" className="discover-btn">
          Discover More
        </Button>
      </Box>

      {/* Right Side: Messy Styled Image Container */}
      <Box className="hero-image-wrapper">
        <Box className="hero-image-container">
          <img src={hero4} alt="Ayurveda" className="hero-image hero-img1" />
          <img src={hero1} alt="Ayurveda" className="hero-image hero-img2" />
          <img src={hero2} alt="Ayurveda" className="hero-image hero-img3" />
          <img src={hero3} alt="Ayurveda" className="hero-image hero-img4" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
