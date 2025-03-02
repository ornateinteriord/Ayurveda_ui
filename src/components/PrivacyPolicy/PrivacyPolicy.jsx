import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Link, Container, Grid, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PrivacyPolicy.css';
import privacyPolicySections from '../../assets/productsdata/privacy';
import privacyImage from '../../assets/images/privacyImage1.avif'; // Add a relevant real image

const PrivacyPolicy = () => {
  const [expandedLeft, setExpandedLeft] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  const handleLeftChange = (panel) => (event, isExpanded) => {
    setExpandedLeft(isExpanded ? panel : null);
  };

  const handleRightChange = (panel) => (event, isExpanded) => {
    setExpandedRight(isExpanded ? panel : null);
  };

  const middleIndex = Math.ceil(privacyPolicySections.length / 2);
  const leftSections = privacyPolicySections.slice(0, middleIndex);
  const rightSections = privacyPolicySections.slice(middleIndex);

  return (
    <Container maxWidth={false} className="privacy-policy-container">
      {/* Privacy Title */}
      <Typography variant="h2" align="center" gutterBottom className="privacy-main-title">
        Privacy and Policy
      </Typography>

      {/* Privacy Description and Image */}
      <Grid container spacing={4} alignItems="center" className="privacy-intro">
        {/* Privacy Image */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box display="flex" justifyContent="center">
            <img src={privacyImage} alt="Privacy Policy" className="privacy-image" />
          </Box>
        </Grid>

        {/* Privacy Description */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography variant="h5" gutterBottom className="privacy-title">
            Privacy Policy Overview
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph className="privacy-descr">
            At our company, we are committed to safeguarding your personal data. This policy explains how we collect, use, and protect your information.
            We ensure transparency in data handling and comply with all legal requirements to keep your information secure.
          </Typography>
        </Grid>
      </Grid>

      {/* Accordion Sections */}
      <Grid container spacing={4} className='accordion-main-container'>
        {/* Left Side Accordion */}
        <Grid item xs={12} md={6}>
          <Box className="left-container">
            {leftSections.map((section, index) => (
              <Accordion
                key={index}
                expanded={expandedLeft === index}
                onChange={handleLeftChange(index)}
                className="accordion"
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                  <Typography variant="h6">{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>

        {/* Right Side Accordion */}
        <Grid item xs={12} md={6}>
          <Box className="right-container">
            {rightSections.map((section, index) => (
              <Accordion
                key={index}
                expanded={expandedRight === index}
                onChange={handleRightChange(index)}
                className="accordion"
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
                  <Typography variant="h6">{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="textSecondary">
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Typography variant="h6" align="center" gutterBottom className="contact-info">
        For any questions or concerns regarding our Privacy Policy, please contact us at{' '}
        <Link href="mailto:privacy@ayurveda.com" color="primary">
          privacy@ayurveda.com
        </Link>
        .
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;