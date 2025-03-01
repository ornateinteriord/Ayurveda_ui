
import React from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import './AboutUs.css'; // Custom CSS file
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PublicIcon from "@mui/icons-material/Public";

// Images (Replace with your actual images)
import img1 from "../../assets/images/heritage.avif";
import img2 from "../../assets/images/mission.avif";
import img3 from "../../assets/images/promis.avif";
import teamImg from "../../assets/images/hero3.avif";
import { EarthLockIcon, EyeClosedIcon } from 'lucide-react';
import team1 from "../../assets/teams/team1.avif"
import team2 from "../../assets/teams/team2.avif"
import team3 from "../../assets/teams/team3.avif"
import team4 from "../../assets/teams/team4.jpg"

const teamMembers = [
    { name: "Dr. Aayush Sharma", image: team1 },
    { name: "Dr. Neha Verma", image: team2 },
    { name: "Dr. Rajesh Gupta", image: team3 },
    { name: "Dr. Priya Singh", image: team4 },
  ];

const AboutUs = () => {
  return (
    <Box className="about-us-container">
      {/* Title */}
      <Typography variant="h2" className="about-us-title">
        About Us
      </Typography>

      {/* Image and Content Sections */}
      <Grid container spacing={6} className="about-us-grid">
        {/* Section 1 */}
        <Grid item xs={12} md={6} className="about-us-image-container">
          <img src={img1} alt="Ayurveda 1" className="about-us-image" />
        </Grid>
        <Grid item xs={12} md={6} className="about-us-content">
          <Typography variant="h4" className="about-us-subtitle">
            Our Mission
          </Typography>
          <Typography variant="body1" className="about-us-text">
            At our core, we are dedicated to promoting the ancient wisdom of Ayurveda. Our mission is to provide high-quality, 
            natural products that enhance your well-being and bring balance to your life.
            At our core, we are dedicated to promoting the ancient wisdom of Ayurveda. Our mission is to provide high-quality,
             natural products that enhance your well-being and bring balance to your life.
          </Typography>
          <Button variant="contained" className="about-us-button">
            Learn More
          </Button>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} md={6} className="about-us-content">
          <Typography variant="h4" className="about-us-subtitle">
            Our Heritage
          </Typography>
          <Typography variant="body1" className="about-us-text">
            With roots deeply embedded in Ayurvedic traditions, we bring centuries-old knowledge to modern life. 
            Our products are crafted using time-tested methods and the finest natural ingredients.
            With roots deeply embedded in Ayurvedic traditions, we bring centuries-old knowledge to modern life. 
            Our products are crafted using time-tested methods and the finest natural ingredients.
          </Typography>
          <Button variant="contained" className="about-us-button">
            Explore Products
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className="about-us-image-container">
          <img src={img2} alt="Ayurveda 2" className="about-us-image" />
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} md={6} className="about-us-image-container">
          <img src={img3} alt="Ayurveda 3" className="about-us-image" />
        </Grid>
        <Grid item xs={12} md={6} className="about-us-content">
          <Typography variant="h4" className="about-us-subtitle">
            Our Promise
          </Typography>
          <Typography variant="body1" className="about-us-text">
            We promise to deliver authenticity, purity, and effectiveness in every product. 
            Your health and happiness are our top priorities.
            We promise to deliver authenticity, purity, and effectiveness in every product. 
            Your health and happiness are our top priorities.
          </Typography>
          
          <Button variant="contained" className="about-us-button">
            Shop Now
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} className="about-content">
      <Typography className='about-choose'>Why Choose Us?</Typography>
      <ul className="about-list">
        <li>
          <EarthLockIcon className="about-list-icon" />
          <span className="about-list-text">100% Natural & Herbal Products</span>
        </li>
        <li>
          <VerifiedIcon className="about-list-icon" />
          <span className="about-list-text">Expertise in Ayurvedic Solutions</span>
        </li>
        <li>
          <LocalShippingIcon className="about-list-icon" />
          <span className="about-list-text">Fast & Reliable Delivery</span>
        </li>
        <li>
          <MenuBookIcon className="about-list-icon" />
          <span className="about-list-text">Educational Resources & Support</span>
        </li>
        <li>
          <LocalShippingIcon className="about-list-icon" />
          <span className="about-list-text">Fast & Reliable Delivery</span>
        </li>
        <li>
          <PublicIcon className="about-list-icon" />
          <span className="about-list-text">Commitment to Sustainability</span>
        </li>
       
      </ul>
    </Grid>
 
      

    <Box className="about-us-team">
      <Typography variant="h3" className="about-us-team-title">
        Meet Our Team
      </Typography>
      <Grid container spacing={3} justifyContent="center" className='teame-members-container'>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} className="team-member">
            <Box className="team-member-container">
              <img src={member.image} alt={member.name} className="team-member-image" />
            </Box>
            <Typography variant="h6" className="team-member-name">
              {member.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" className="about-us-team-text">
        Our team is passionate about Ayurveda and dedicated to helping you achieve a healthier lifestyle. We are here to guide you on your wellness journey.
      </Typography>
    </Box>
    </Box>
  );
};

export default AboutUs;